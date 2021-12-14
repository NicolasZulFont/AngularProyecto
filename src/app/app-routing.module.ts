import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { HomeComponent } from './home/home.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ExitosaComponent } from './exitosa/exitosa.component';

const routes: Routes = [
  {path: "",component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "lugares", component: LugaresComponent},
  {path: "pruebas", component: ExitosaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
