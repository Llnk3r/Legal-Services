export interface SendMessageRequest {
    chat_id: number;
    text: string;
    parse_mode?: string;
}

export interface SendMessageResult {
    ok: boolean;
}