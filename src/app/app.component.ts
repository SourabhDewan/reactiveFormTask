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
    moreWork: new FormArray([])
  })
  
  get moreWork(){
    return this.form.get('moreWork') as FormArray;
  }

  addMoreWork(){
    this.moreWork.push(new FormControl());
  }

  removeMoreWork(work: FormControl){
    let index = this.moreWork.controls.indexOf(work)
    this.moreWork.removeAt(index);
  }
  toDisplay(){
    this.flag = 1;
  }

  notToDisplay(){
    this.flag = 0;
  }
}
