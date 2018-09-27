import { Answer } from "./answer";

export class Build {
    id: number;
    ownerId: number;
    name: string;
    answers: Array<Answer>;

    constructor(domain: {
        id?: number,
        ownerId?: number,
        name?: string;
    } = {}) {
        this.id = domain.id;
        this.ownerId = domain.ownerId;
        this.name = domain.name;
    }
}