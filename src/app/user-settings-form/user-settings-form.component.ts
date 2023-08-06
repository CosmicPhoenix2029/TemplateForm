import { Component } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent {

  originalUserSettings: UserSettings = {
    name: 'Milton',
    emailOffers: false,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...'
  };

  constructor(private dataService: DataService) { }

  userSettings: UserSettings = {...this.originalUserSettings}; 
  postError: boolean = false;
  postErrorMessage: string = '';
  subscriptionTypes!: Observable<string[]>;

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();  
  }

  onBlur(field: NgModel) {
    console.log(`the name entered is: ${field.valid}`);      
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log(`Form validation status: ${form.valid}`); 

    if(form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings)
      .subscribe({
        next: result => console.log('success: ', result),
        error: error => this.onHttpError(error)
      });
    }
    else {
      this.postError = true;
      this.postErrorMessage = "please fix the errors above before re-submitting"
    }
  }
}
