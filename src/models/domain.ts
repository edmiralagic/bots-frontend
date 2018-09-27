export class Domain {
    id: number;
    name: string;
    description: string;
    icon: string;

    constructor(domain: {
        id?: number,
        name?: string,
        description?: string;
        icon?: string;
    } = {}) {
        this.id = domain.id;
        this.name = domain.name;
        this.description = domain.description;
        this.icon = domain.icon;
    }
}