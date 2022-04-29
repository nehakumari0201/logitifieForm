import { Logitifie1Component } from './logitifie1/logitifie1.component';
import { FormComponent } from './form/form.component';
import { LogitifieComponent } from './logitifie/logitifie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogitifieFormComponent } from './logitifie-form/logitifie-form.component';

const routes: Routes = [
  {path:'logitifie',component:LogitifieComponent},
  {path:'',redirectTo:'logitifie',pathMatch:'full'},
  {
    path:'form',component:FormComponent
  },{path:'logitifieForm',component:LogitifieFormComponent},
  {path:'logitifie1',component:Logitifie1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
