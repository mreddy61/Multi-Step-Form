import { Routes } from '@angular/router';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full' ,redirectTo: 'multistep'},
    {path: 'multistep', component: MultiStepFormComponent}
];
