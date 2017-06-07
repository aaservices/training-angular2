import { Injectable } from '@angular/core';

@Injectable()
export class BetterLogger {
    logs: string[] = []; // capture logs for testing

    log(message: string) {
        this.logs.push(message);
        console.log("Better Logger:"+message);
    }

}
