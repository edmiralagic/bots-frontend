import { Injectable } from '@angular/core';
import { Domain } from '../models/domain';
import { Payload } from '../models/payload';

@Injectable({
  providedIn: 'root'
})
export class BuildControlService {
  domain: Domain;
  payloads: Array<Payload> = [];

  constructor() { }

  addPayload(payload: Payload) {
    console.log('Adding payload to build');
    this.payloads.push(payload);
    console.log(this.domain);
    console.log(this.payloads);
  }
}
