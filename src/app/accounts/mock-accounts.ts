import {Account} from './account.type';

export const ACCOUNTS: Account[] = [
    {name:'Savings account', amount:300, privacy:false},
    {name:'Current account', amount:500, friendlyName:'Work expenses', privacy:false},
    {name:'Loan', amount:-200, privacy:false},
    {name:'Money market account', amount:2000, privacy:true}
];
