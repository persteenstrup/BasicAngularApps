export class Email {
    from: string;
    importance: boolean;
    subject: string;
    content: string;
    constructor(from: string, importance: boolean, subject: string, content: string) {
        this.from = from;
        this.importance = importance;
        this.subject = subject;
        this.content = content;
    }
}
