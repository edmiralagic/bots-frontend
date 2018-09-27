import { Injectable } from '@angular/core';
import { Build } from '../models/build';

@Injectable({
  providedIn: 'root'
})
export class BuildService {
  constructor() { }

  getAllForUser(ownerId) {
    let builds: Array<Build> = [
      new Build({
        id: 1233,
        ownerId: ownerId,
        name: 'My First Build'
      }),
      new Build({
        id: 1234,
        ownerId: ownerId,
        name: 'My Second Build'
      })
    ];

    return builds;
  }
}
