import { QuestionBase } from "./question-base";

export class Option {
    id: number;
    domainId: number;
    label: string;
    description: string;
    questions: Array<QuestionBase>;

    constructor(option: {
        id?: number,
        domainId?: number,
        label?: string,
        description?: string;
    } = {}) {
        this.id = option.id;
        this.domainId = option.domainId;
        this.label = option.label;
        this.description = option.description;
    }
}