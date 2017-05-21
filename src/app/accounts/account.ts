export class Account {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
}
