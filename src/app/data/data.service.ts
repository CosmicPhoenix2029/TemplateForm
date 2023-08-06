import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = 'https://putsreq.com/OJVzX0CVnL4UHZiMx0xO';
  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    //the url is a placeholder until the http server is configured
    return this.http.post(this.url, userSettings);  
  };
}
