import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderService } from '../../utilities/formBuilder.service';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  // providers: [FormGroupDirective],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css',
  // schemas: ['NO_ERRORS_SCHEMA']
})
export class PersonalDetailsComponent implements OnInit {

  @Input() personalInfoForm: FormGroup; // = new FormGroup([]);
  // @Input() formGrouptype: string = ''
  constructor(private formService: FormBuilderService) {

  }

  ngOnInit(): void {
    console.log(this.personalInfoForm)
    // this.personalInfoForm = this.formService.multiStepForm
  }

}
