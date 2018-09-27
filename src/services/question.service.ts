import { Injectable } from '@angular/core';

import { QuestionBase } from '../models/question-base';
import { InputQuestion } from '../models/question-input';
import { TextareaQuestion } from '../models/question-textarea';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getAllForOption(optionId) {
    let questions: QuestionBase[] = [
      new InputQuestion({
        id: 123,
        optionId: 123,
        key: 'firstName',
        label: 'First name',
        type: 'text',
        required: true,
        order: 1
      }),
      new TextareaQuestion({
        id: 1234,
        optionId: 123,
        key: 'emailAddress',
        value: 'testing',
        label: 'Email',
        order: 2
      }),
      new InputQuestion({
        id: 1235,
        optionId: 1234,
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        type: 'text',
        required: true,
        order: 1
      }),
      new TextareaQuestion({
        id: 1232,
        optionId: 1234,
        key: 'emailAddress',
        label: 'Email',
        order: 2
      })
    ];

    questions = questions.sort((a, b) => a.order - b.order);
    return questions.filter((question) => question.optionId == optionId);
  }
}
