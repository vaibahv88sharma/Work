import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';  //Reactive Forms

@Component({
  selector: 'app-case-admin',
  templateUrl: './case-admin.component.html',
  styleUrls: ['./case-admin.component.scss']
})
export class CaseAdminComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  caseAdminForm: FormGroup;

  ngOnInit() {
    this.caseAdminForm = this.fb.group({
      primaryCaseNumber: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  save(caseAdminForm) {
    console.log(caseAdminForm);
  }

}
