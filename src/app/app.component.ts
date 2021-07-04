import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-task';
  flag = 0;
  form = new FormGroup({
    yearOfExposure : new FormControl('', Validators.required),
    lastUsedThem : new FormControl('', Validators.required)
  })

  toDisplay(){
    this.flag = 1;
  }

  notToDisplay(){
    this.flag = 0;
  }
}
