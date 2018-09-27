import { QuestionBase } from './question-base';

export class InputQuestion extends QuestionBase {
    controlType = 'input';
    type: string;

    constructor(questions: {} = {}) {
        super(questions);
        this.type = questions['type'] || '';
    }
}