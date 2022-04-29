import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logitifie-form',
  templateUrl: './logitifie-form.component.html',
  styleUrls: ['./logitifie-form.component.css']
})
export class LogitifieFormComponent implements OnInit {
  public showPassword: boolean = true;
  public hide: boolean = true;
  selectedFiles: any;
  checked = false;
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }
  selectFile(event :any) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
}

public togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}
}
