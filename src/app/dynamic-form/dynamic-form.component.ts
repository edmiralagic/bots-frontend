import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionControlService }    from '../../services/question-control.service';
import { Option } from '../../models/option';
import { Answer } from '../../models/answer';
import { Payload } from '../../models/payload';
import { BuildControlService } from '../../services/build-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})

export class DynamicFormComponent implements OnInit {
  @Input() option: Option;
  form: FormGroup;

  constructor(private questionControlService: QuestionControlService, private buildControlService: BuildControlService) {  }

  ngOnInit() {
    this.form = this.questionControlService.toFormGroup(this.option.questions);
  }

  onSubmit() {
    let payload: Payload;
    let answers: Answer[] = [];

    Object.keys(this.form.value).forEach((key) => {
      answers.push(new Answer({
        buildId: 123,
        optionId: this.option.id,
        questionId: parseInt(key),
        value: this.form.value[key]
      }));
    });

    payload = new Payload({
      optionId: this.option.id,
      answers: answers
    });

    this.buildControlService.addPayload(payload);
  }
}
