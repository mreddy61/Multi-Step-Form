import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderService } from '../../utilities/formBuilder.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,BsDatepickerModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent implements OnInit {

  @Input() workExperienceForm: FormArray

  constructor(private formService: FormBuilderService) {

  }

  getFormGroup(index: number): FormGroup {
    return this.workExperienceForm.at(index) as FormGroup;
  }

  ngOnInit(): void {
  }

  addExperience() {
    this.workExperienceForm.push(this.formService.getWorkExpForm())
    console.log(this.formService.multiStepForm)
  }

  currentEmployer(event,i) {
    console.log(event,i)
    if(event.target.checked) {
      this.getFormGroup(i).get('toDate').disable();
    } else {
      this.getFormGroup(i).get('toDate').enable();
    }
  }

}
