import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domain } from '../../models/domain';
import { DomainService } from '../../services/domain.service';
import { BuildControlService } from '../../services/build-control.service';

@Component({
  selector: 'app-builds-domains',
  templateUrl: './builds-domains.component.html',
  styleUrls: ['./builds-domains.component.css']
})

export class BuildsDomainsComponent implements OnInit {
  selected: Domain;
  domains: Array<Domain> = this.domainService.getAll();

  constructor(private buildControlService: BuildControlService, private domainService: DomainService, private router: Router) { }

  ngOnInit() {
  }

  selectDomain(domain) {
    console.log(domain);
    this.selected = domain;
  }

  nextOptions() {
    this.buildControlService.domain = this.selected;
    this.router.navigate(['builds/options']);
  }

}
