import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from '@shared/services/validator.service';
import { TelegramBotService } from '@services/telegram-bot.service';

import { SendMessageResult, SendMessageRequest } from '@interfaces/telegram-bot.interface';
import { Consultation } from '@interfaces/consultation.interface';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss'
})
export class ConsultationComponent implements OnInit {
  consultationForm!: FormGroup;

  successMessage: string = 'Заявка відправлена упішно, найближчим часов з Вами зв\'яжуться!';
  errorMessage: string = 'Виникла помилка при відправлені. Спробуйте, будь ласка, пізніше!';
  message: string = '';

  constructor(
    private telegramBotService: TelegramBotService,
    public validatorService: ValidatorService
  ){}

  ngOnInit(): void {
    this.consultationFormInit();
  }

  consultationFormInit(): void {
    this.consultationForm = new FormGroup({
      fullName: new FormControl('', [
        Validators.required, 
        Validators.pattern(this.validatorService.setRegex('fullName'))
      ]),

      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(15),
        Validators.pattern(this.validatorService.setRegex('phone'))
      ]),

      comment: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(1000)
      ])
    });
  }

  sendMessageToTelegramBot(): void {
    if (this.consultationForm.invalid) {
      return
    }

    const consultationData: Consultation = this.consultationForm.value;

    const sendMessageRequest: SendMessageRequest = {
      chat_id: this.telegramBotService.userChatId,
      parse_mode: 'HTML',
      text: `<b>Name:</b> ${consultationData.fullName} \n<b>Phone:</b> ${consultationData.phone} \n<b>Comment:</b> ${consultationData.comment}`
    }

    this.telegramBotService.sendMessage(sendMessageRequest)
      .subscribe({
        next: (data: SendMessageResult) => {
          if (data.ok) {
            this.setMessage(this.successMessage);
          } else {
            this.setMessage(this.errorMessage);
          }

          this.consultationForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          this.setMessage(this.errorMessage);
          this.consultationForm.reset();
          console.log(error);
        }
      });
  }

  setMessage(message: string): void {
    this.message = message;

    if (message === '') {
      return
    }

    setTimeout(() => {
      this.setMessage('');
    }, 7000);
  }
}
