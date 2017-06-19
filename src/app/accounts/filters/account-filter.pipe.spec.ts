import { Account } from '../account.type';
import { AccountFilterPipe } from './account-filter.pipe';

describe('Account filtering based on search term', () => {
    let accounts: Array<Account>;
    let pipe: AccountFilterPipe;

    beforeEach(() => {
        accounts = [new Account('first', 100, true),
            new Account('Another first', 200, true),
            new Account('second', 100, true)];
        pipe = new AccountFilterPipe();
    });

    it('Should return accounts matching the search term', () => {
        let filteredAccounts = pipe.transform(accounts, 'first');
        expect(filteredAccounts.length).toBe(2);
    });

    it('Should return all accounts if empty search term is passed', () => {
        let filteredAccounts = pipe.transform(accounts, '');
        expect(filteredAccounts.length).toBe(3);
    });

    it('Should return empty list if no accounts are passed', () => {
        let filteredAccounts = pipe.transform([], 'searchTerm');
        expect(filteredAccounts.length).toBe(0);
    });
});
