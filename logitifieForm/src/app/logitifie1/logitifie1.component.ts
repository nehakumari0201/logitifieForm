import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logitifie1',
  templateUrl: './logitifie1.component.html',
  styleUrls: ['./logitifie1.component.css']
})
export class Logitifie1Component implements OnInit {
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
