import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {


    constructor(private fb: FormBuilder) {

    }

    getFormSubjectObs() {
        return new BehaviorSubject(this.multiStepForm).asObservable()
    }

    multiStepFormFactory: FormGroup = this.fb.group({
        PersonalInformation: this.fb.group({
            name: ['',[Validators.required]],
            email: ['',[Validators.required,Validators.email]],
            phone: ['',[Validators.required,Validators.min(1000000000), Validators.max(99999999999)]],
            languagesKnown: [''],
        }),
        WorkExperience: this.fb.array([this.getWorkExpForm()]),
        Education: this.fb.array([this.getEducationForm()]),
        Skills: this.fb.array([this.getSkillForm()])
    })

    get multiStepForm() {
        return this.multiStepFormFactory
    }

    getWorkExpForm() {
        return this.fb.group({
            company: ['',[Validators.required]],
            designation: ['',[Validators.required]],
            location: [''],
            fromDate: ['',[Validators.required,Validators.min(1900), Validators.max(new Date().getFullYear())]],
            currentEmployer: [''],
            toDate: ['',[Validators.min(1900), Validators.max(new Date().getFullYear()),this.customEndYearValidator('fromDate')]]
        })
    }

    getEducationForm() {
        return this.fb.group({
            university: ['',[Validators.required]],
            startYear: ['',[Validators.required,Validators.min(1900), Validators.max(new Date().getFullYear())]],
            endYear: ['',[Validators.required,Validators.min(1900), Validators.max(new Date().getFullYear()),this.customEndYearValidator('startYear')]],
            // type: [''],
            cgpa: ['']
        })
    }

    getSkillForm() {
        return this.fb.group({
            skillName: ['',[Validators.required]],
            experience: ['',Validators.required]
        })
    }

    customEndYearValidator(checkWith): ValidatorFn {
        return (control:AbstractControl) : ValidationErrors | null => {
    
            const value = control.value;
            const start = control.parent?.get(checkWith)?.value;
    
            if (!start || !value) {
                return null;
            }
    
            return  start > value ? {endYearError:true}: null;
        }
    }
}