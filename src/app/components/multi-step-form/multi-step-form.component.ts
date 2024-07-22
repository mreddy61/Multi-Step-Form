import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TabsetComponent, TabsModule } from 'ngx-bootstrap/tabs';
import { FormBuilderService } from '../../utilities/formBuilder.service';
import { EducationComponent } from '../education/education.component';
import { FinalReviewComponent } from '../final-review/final-review.component';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { SkillsComponent } from '../skills/skills.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    TabsModule,
    CommonModule,
    PersonalDetailsComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
    FinalReviewComponent
  ],
  templateUrl: './multi-step-form.component.html',
  styleUrl: './multi-step-form.component.css'
})
export class MultiStepFormComponent implements OnInit{
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
  title = 'Multi-Step-Form';
  currentTab = 1;
  multiStepForm : FormGroup
  
  constructor(private fbService: FormBuilderService){
  }

  get personalInfoForm(): FormGroup{
    return this.multiStepForm.get('PersonalInformation') as FormGroup;
  }

  get workExperienceForm(): FormArray{
    return this.multiStepForm.get('WorkExperience') as FormArray;
  }

  get educationForm(): FormArray{
    return this.multiStepForm.get('Education') as FormArray;
  }

  get skillsForm(): FormArray{
    return this.multiStepForm.get('Skills') as FormArray;
  }

  ngOnInit(): void {
    this.multiStepForm = this.fbService.multiStepForm;
  }

  nextTab() {
    this.currentTab++;
    if(this.staticTabs){
      this.staticTabs.tabs[this.currentTab-1].active = true
    }
  }

  previousTab() {
    this.currentTab--;
    if(this.staticTabs){
      this.staticTabs.tabs[this.currentTab-1].active = true
    }
  }

  selectedTab(event:any) {
    let index = this.staticTabs?.tabs?.findIndex((tab) => {
      return tab.heading == event.heading;
    })

    this.currentTab = index? index+1: 1;
  }
}
