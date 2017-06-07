export class Account {
    constructor(
        public name: string,
        public amount: number,
        public privacy:boolean,
        public friendlyName?: string
    ) {}
}
