import { QuestionBase } from './question-base';

export class TextareaQuestion extends QuestionBase {
    controlType = 'textarea';

    constructor(questions: {} = {}) {
        super(questions);
    }
}