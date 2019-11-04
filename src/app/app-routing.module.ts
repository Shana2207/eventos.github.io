import { RegisterComponent } from './user/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformacionComponent } from '../app/components/informacion/informacion.component';
import { CreateEventsComponent } from './components/create-events/create-events.component';
import { LoginComponent } from './user/login/login.component';
// import { AutentificacionGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: '', component: CreateEventsComponent },
  { path: 'Eventos', component: CreateEventsComponent },
  { path: 'Evento/:id', component: InformacionComponent /*, canActivate: [AutentificacionGuard], */ },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
