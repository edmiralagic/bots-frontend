import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionService } from '../../services/option.service';
import { Domain } from '../../models/domain';
import { BuildControlService } from '../../services/build-control.service';

@Component({
  selector: 'app-builds-options',
  templateUrl: './builds-options.component.html',
  styleUrls: ['./builds-options.component.css'],
  providers:  []
})

export class BuildsOptionsComponent implements OnInit {
  public domain: Domain;
  public options: any[];

  constructor(public buildControlService: BuildControlService, private optionService: OptionService, private router: Router) {
    if (this.buildControlService.domain) {
      this.domain = buildControlService.domain;
      this.options = optionService.getAll();
    } else {
      this.router.navigate(['builds/domains']);
    }
  }

  addOption(event) {
    console.log("Adding option");
  }

  ngOnInit() {
  }
}
