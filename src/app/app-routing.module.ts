import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'forgot',
    loadChildren: () =>
      import('./pages/auth/forgot/forgot.module').then(
        (m) => m.ForgotPageModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/menu/home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'gym-home',
    loadChildren: () =>
      import('./pages/menu/gym/gym-home/gym-home.module').then(
        (m) => m.GymHomePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'reservation-home',
    loadChildren: () =>
      import(
        './pages/menu/reservation/reservation-home/reservation-home.module'
      ).then((m) => m.ReservationHomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'social-home',
    loadChildren: () =>
      import('./pages/menu/social/social-home/social-home.module').then(
        (m) => m.SocialHomePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'events-home',
    loadChildren: () =>
      import('./pages/menu/events/events-home/events-home.module').then(
        (m) => m.EventsHomePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile-home',
    loadChildren: () =>
      import('./pages/menu/profile/profile-home/profile-home.module').then(
        (m) => m.ProfileHomePageModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
