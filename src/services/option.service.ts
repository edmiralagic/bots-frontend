import { Injectable } from '@angular/core';
import { Option } from '../models/option';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  constructor(private questionService: QuestionService) {
  }

  getAll() {
    let options: Array<Option> = [
      new Option({
        id: 123,
        label: 'Test label 1',
        description: 'Test description 1'
      }),
      new Option({
        id: 1234,
        label: 'Test label 2',
        description: 'Test description 2'
      })
    ];

    options.forEach((option) => {
      option.questions = this.questionService.getAllForOption(option.id);
    });

    return options;
  }
}
