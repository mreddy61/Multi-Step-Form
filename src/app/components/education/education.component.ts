import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderService } from '../../utilities/formBuilder.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  @Input() educationForm: FormArray

  constructor(private formService: FormBuilderService) {

  }

  getFormGroup(index: number): FormGroup {
    return this.educationForm.at(index) as FormGroup;
  }

  ngOnInit(): void {
    console.log(this.educationForm)
  }

  addEducation() {
    this.educationForm.push(this.formService.getEducationForm())
    console.log(this.formService.multiStepForm)
  }
}
