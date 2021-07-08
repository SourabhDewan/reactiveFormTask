import { Component } from '@angular/core';
import { FormArray,  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'form-task';
  flag = 0;
  form = new FormGroup({
    firstYearExposure: new FormControl('', Validators.required),
    lastYearUsed: new FormControl('', Validators.required),
    moreWork: new FormArray([
      new FormGroup({
        company: new FormControl('', Validators.required),
        job: new FormControl('', Validators.required),
        startingDate: new FormControl('', Validators.required),
        tilDate: new FormControl('', Validators.required)
      })
    ])
  })
  
  get moreWork(){
    return this.form.get('moreWork') as FormArray;
  }

  addMoreWork(){
     
    this.moreWork.push(this.moreWork);
    
  }

  removeMoreWork(work: number){
    this.moreWork.removeAt(work);
  }
  toDisplay(){
    this.flag = 1;
  }

  notToDisplay(){
    this.flag = 0;
  }

  submit(){
    console.log(this.form.value);
  }
}

