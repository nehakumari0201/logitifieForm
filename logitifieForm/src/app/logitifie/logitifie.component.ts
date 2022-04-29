import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logitifie',
  templateUrl: './logitifie.component.html',
  styleUrls: ['./logitifie.component.css']
})
export class LogitifieComponent implements OnInit {
  selectedFiles: any;
  checked = false;
  disabled = false;
  public showPassword: boolean = true;
  public hide: boolean = true;
  selection = 'Foo';
  form!:FormGroup;
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      companyName: ['',Validators.required],
        officeAddress: [''],
        fname: [''],
        lname: [''],
        phoneNo: [''],
        altphoneNo: [''],
        email: [''],
        userName: [''],
        password: ['',[Validators.required ,Validators.pattern("^(?=.*[A-Z])(?=.*[0-8])(?=.*[a-z]).{8,}$")]],
        confirm_password: [''],
        hearAbout: [''],
        traficType: [''],
        paymentType: [''],
        file:['']
      });
  }
  selectFile(event :any) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    this.form.patchValue({file: this.selectedFiles[0].name});
}

public togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}
saveDetails(form: FormGroup) {
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null));
  console.log(form.value)}

}
