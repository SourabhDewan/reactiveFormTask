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
  form;
  constructor(private fb : FormBuilder, private http : HttpClient){

  }
  ngOnInit(){
   
  this.form = this.fb.group({
    firstYearExposure: ['', Validators.required],
    lastYearUsedFrom: ['', Validators.required],
    WorkHistories: this.fb.array([
    ])
  })
  this.addWorkHistories();
  console.log(this.WorkHistories.controls);
  }
  
  
  get WorkHistories(){
    return this.form.get('WorkHistories') as FormArray;
  }

  addWorkHistories(){
    const workHistories = this.fb.group({
      CompanyName: ['', Validators.required],
      JobTitle: ['', Validators.required],
      FromDate: ['', Validators.required],
      ToDate: ['', Validators.required]
  })
    this.WorkHistories.push(workHistories);
  }

  removeWorkHistories(work: number){
    this.WorkHistories.removeAt(work);
  }
  toDisplay(){
    this.flag = 1;
  }

  notToDisplay(){
    this.flag = 0;
  }

  submit(){
    // this.http.get('https://api-tracker.sw-gr.com/pack/api/applicant/53?$expand=OccupationalHistories&$expand')
    // .subscribe(response => {
    //   this.form.value = response;
    //   console.log(response);
    // })
    let formValue = this.form.value;
    formValue.occupationalhistory = {
      HasDiagnosedWithVwf: false,
      HaveEverUsedHhvTools: false,
      HhvFirstYearExposure: "2020-06-15T18:30:00.000Z",
      LastTimeUsedHhv: "2021-06-13T18:30:00.000Z",
      VwfDiagnosedStage: null,
      packId: 1
    }
    console.log(formValue);

    this.http.post("https://api-tracker.sw-gr.com/pack/api/Applicant/PostHVSdata?formId=7ced7b41-67a5-41a2-9aa3-42ca105e129d", formValue).subscribe(response => {

    })
  }
}

