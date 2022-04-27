import { LogitifieComponent } from './logitifie/logitifie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'logitifie',component:LogitifieComponent},
  {path:'',redirectTo:'logitifie',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
