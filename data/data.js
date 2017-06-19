let accounts = [
    {id: 1, name: 'Savings account', amount: 300, privacy: false},
    {id: 2, name: 'Current account', amount: 500, friendlyName: 'Work expenses', privacy: false},
    {id: 3, name: 'Loan', amount: -200, privacy: false},
    {id: 4, name: 'Money market account', amount: 2000, privacy: true}
];

let cards = [
    {id: 1, name: 'MasterCard', amount: 200, status: 'ACTIVE'},
    {id: 2, name: 'Visa', amount: 500, status: 'ACTIVE'},
    {id: 3, name: 'American Express', amount: -200, status: 'BANNED'},
];

module.exports = () => {
    return {
        accounts,
        cards
    }
}
