import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilderService } from '../../utilities/formBuilder.service';
import {ToastrService} from 'ngx-toastr'
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-final-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './final-review.component.html',
  styleUrl: './final-review.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinalReviewComponent implements OnInit {

  finalData;
  form;
  showError = false;
  constructor(private fbService: FormBuilderService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.fbService.getFormSubjectObs().subscribe((form)=> {
      this.form = form;
      this.finalData = form.value;
      console.log(this.finalData)
    })
  }

  submit() {
    if(this.form.valid) {
      this.toastr.success("Application submitted successfully")
    } else {
      this.showError = true;
    }
  }

}
