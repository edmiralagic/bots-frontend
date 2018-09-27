import { Answer } from "./answer";

export class Payload {
    optionId: number;
    answers: Array<Answer>;

    constructor(payload: {
        optionId?: number,
        answers?: Array<Answer>;
    } = {}) {
        this.optionId = payload.optionId;
        this.answers = payload.answers;
    }
}