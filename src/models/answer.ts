export class Answer {
    buildId: number;
    optionId: number;
    questionId: number;
    value: string;

    constructor(answer: {
        buildId?: number,
        optionId?: number,
        questionId?: number,
        value?: string;
    } = {}) {
        this.buildId = answer.buildId;
        this.optionId = answer.optionId;
        this.questionId = answer.questionId;
        this.value = answer.value;
    }
}