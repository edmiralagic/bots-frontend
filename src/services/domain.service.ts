import { Injectable } from '@angular/core';
import { Domain } from '../models/domain';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  constructor() { }

  getAll() {
    let domains: Array<Domain> = [
      new Domain({
        id: 1233,
        name: 'Reddit',
        description: 'Test description 1',
        icon: 'assets/images/home/reddit_icon.svg'
      }),
      new Domain({
        id: 1234,
        name: 'Slack',
        description: 'Test description 1',
        icon: 'assets/images/home/slack_icon.svg'
      }),
      new Domain({
        id: 1235,
        name: 'Facebook',
        description: 'Test description 1',
        icon: 'assets/images/home/facebook_icon.svg'
      }),
      new Domain({
        id: 1236,
        name: 'Discord',
        description: 'Test description 1',
        icon: 'assets/images/home/discord_icon.svg'
      }),
    ];

    return domains;
  }
}
