import { Component } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';

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

  userSettings: UserSettings = {...this.originalUserSettings}; 

  onSubmit(form: NgForm) {
    //if the form is valid, then log to the console
    //this would normally then send to DB via API 
    console.log(`Form validation status: ${form.valid}`); 
  }
}
