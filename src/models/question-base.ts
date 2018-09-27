export class QuestionBase {
    id: number;
    optionId: number;
    label: string;
    required: boolean;
    order: number;
    value: string;
    controlType: string;

    constructor(questions: {
        id?: number,
        optionId?: number;
        value?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string
    } = {}) {
        this.id = questions.id;
        this.optionId = questions.optionId;
        this.label = questions.label || '';
        this.value = questions.value || '';
        this.required = !!questions.required;
        this.order = questions.order === undefined ? 1 : questions.order;
        this.controlType = questions.controlType || '';
    }
}