export class Account {
    constructor(
        public id: string,
        public name: string,
        public amount: number,
        public privacy: boolean,
        public friendlyName?: string
    ) {}
}
