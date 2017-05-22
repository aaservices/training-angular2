import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'accountFilter'})
export class AccountFilterPipe implements PipeTransform {
    transform(accounts: Array<Account>, searchTerm: string) {
        if (searchTerm) {
            return accounts.filter((element: Account) => {
                return element.name.indexOf(searchTerm) >= 0;
            });
        } else {
            return accounts;
        }
    }
}
