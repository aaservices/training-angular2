import {InjectionToken} from '@angular/core';
export interface AppConfig {
    apiEndpoint: string;
    title: string;
}

export const DI_CONFIG: AppConfig = {
    apiEndpoint: 'api.agile.com',
    title: 'Dependency Injection'
};

export let APP_CONFIG = new InjectionToken<AppConfig>('appConfiguration');
