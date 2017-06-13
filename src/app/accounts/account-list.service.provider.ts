import {AccountListService} from './account-list.service';
import {Logger} from '../logger.service';

let accountListServiceFactory = (logger: Logger) => {
    return new AccountListService(logger, false);
};


export let accountListServiceProvider = {
    provide: AccountListService,
    useFactory: accountListServiceFactory,
    deps: [Logger]
};
