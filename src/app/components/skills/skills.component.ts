import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderService } from '../../utilities/formBuilder.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  @Input() skillsForm: FormArray

  constructor(private formService: FormBuilderService) {

  }

  getFormGroup(index: number): FormGroup {
    return this.skillsForm.at(index) as FormGroup;
  }

  ngOnInit(): void {
    console.log(this.skillsForm)
  }

  addSkill() {
    this.skillsForm.push(this.formService.getSkillForm())
    console.log(this.formService.multiStepForm)
  }

}
