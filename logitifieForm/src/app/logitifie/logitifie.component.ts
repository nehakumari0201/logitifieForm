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
