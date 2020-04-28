import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public addForm: FormGroup;

  public users = [];

  @ViewChild('formDirective') private formDirective: NgForm;

  @ViewChild('firstNameInput') private firstNameInput: ElementRef;


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sendForm(): void {
    console.log(this.addForm.value);
    this.users.push(this.addForm.value);
    this.firstNameInput.nativeElement.focus();
    this.formDirective.resetForm();
  }

  get addF() {
    return this.addForm.controls;
  }

}
