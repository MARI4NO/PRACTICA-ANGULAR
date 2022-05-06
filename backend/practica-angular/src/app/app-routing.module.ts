import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Punto1Component } from './components/punto1/punto1.component';
import { HomeComponent } from './components/home/home.component';
import { Punto2Component } from './components/punto2/punto2.component';
const routes: Routes = [
//aqui van los modulos y puedo poner rutas como un alias
{path:'punto1', component : Punto1Component},
{path:'home', component : HomeComponent},
//{path:'registro', component : RegistroComponent},
{path:'punto2', component : Punto2Component},

{path:'**', pathMatch:'full', redirectTo:'punto1'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
