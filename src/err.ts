export enum ErrorType {
    other
}

export class Error {
    message: string;
    type: ErrorType;

    constructor(message: string, type: ErrorType = ErrorType.other) {
        this.message = message;
        this.type = type;
    }
}
