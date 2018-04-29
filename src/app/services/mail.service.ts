import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { HttpHelper } from '../helpers/http.helper';
import { GlobalValues } from '../global/globalvalues';

@Injectable()
export class MailService {

    private MailContactUrl = `${this.globalValues.urlContact()}/contactanos`;

    constructor(
        private http: Http,
        private globalValues: GlobalValues
    ) { }

    postCourseUpdate(mail) {
        return this.http
            .post(this.MailContactUrl, mail)
            .map(res => {
                const result = res.json();
                return result;
            });
    }
}
