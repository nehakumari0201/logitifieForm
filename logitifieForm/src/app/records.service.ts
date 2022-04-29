import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
records:IRecords[]=[];
  constructor() { }
  getAll():IRecords[]{
    return this.records;
  }
  save(data:any):void{
      this.records.push(data);
      console.log(data);
    }


}

export interface IRecords{
  companyName:string;
  officeAddress:string;
  fname:string;
  lname:string;
  phoneNo:number;
  altphoneNo:number;
  email:string;
  userName:string;
  password:string;
  confirm_password:string;
  hearAbout:string;
  traficType:string;
  paymentType:string;
  file:File;
}
