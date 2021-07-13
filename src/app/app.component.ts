import { Component, OnInit } from '@angular/core';
import { FormArray,  FormBuilder,  FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {
  title = 'form-task';
  flag = 0;
  companyDetails;
  form;
  constructor(private fb : FormBuilder, private http : HttpClient){

  }
  ngOnInit(){
    this.companyDetails = this.fb.group({
      company: ['', Validators.required],
      job: ['', Validators.required],
      startingDate: ['', Validators.required],
      tilDate: ['', Validators.required]
  })
   
  this.form = this.fb.group({
    firstYearExposure: ['', Validators.required],
    lastYearUsed: ['', Validators.required],
    moreWork: this.fb.array([
      this.companyDetails
    ])
  })
  console.log(this.moreWork.controls);
  }
  
  
  get moreWork(){
    return this.form.get('moreWork') as FormArray;
  }

  addMoreWork(){
    this.moreWork.push(this.companyDetails);
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
    this.http.get('https://api-tracker.sw-gr.com/pack/api/applicant/53?$expand=OccupationalHistories&$expand')
    .subscribe(response => {
      this.form.value = response;
      console.log(response);
    })
    console.log(this.form.value);
  }
}

