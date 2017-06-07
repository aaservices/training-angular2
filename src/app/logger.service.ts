import { Injectable } from '@angular/core';

export class Logger {
    logs: string[] = []; // capture logs for testing

    log(message: string) {
        this.logs.push(message);
        console.log(message);
    }
}
