import { Injectable } from '@angular/core';

@Injectable()
export class GlobalValues {

    private ServerUrl = 'http://104.236.84.68:1337';
    // private ServerUrl = 'http://localhost:1337';

    urlContact() {
        return this.ServerUrl + '/contacto';
    }
}
