import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env';

import { SendMessageRequest, SendMessageResult } from '@interfaces/telegram-bot.interface';

@Injectable({
  providedIn: 'root'
})
export class TelegramBotService {
  private telegramBotApi: string = environment.apiEndPoint.telegramBotApi;
  private sendMessageTelegramBotUrl: string = environment.apiEndPoint.sendMessageTelegramBotUrl;

  private botToken: string = '7422224710:AAFoAFESF0sj2UGCG6cd3vj8t9qmkdAcdkk';
  public userChatId: number = 149084690;

  constructor(private http: HttpClient) { }

  sendMessage(sendMessageRequest: SendMessageRequest): Observable<SendMessageResult> {
    return this.http
      .post<SendMessageResult>(`${this.telegramBotApi}${this.botToken}${this.sendMessageTelegramBotUrl}`, sendMessageRequest);
  }
}
