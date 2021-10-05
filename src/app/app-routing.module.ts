import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './default/main/main.component';
import { HeaderComponent } from './header/header/header.component';



const routes: Routes = [
  {path:'' ,component:MainComponent},
 // {path:'' ,component:HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
