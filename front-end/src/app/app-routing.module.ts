import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GateGuard } from './middleware/gate.guard';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AlreadyLoggedGuard } from './middleware/already-logged.guard';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate:[GateGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import("./contacts/contacts.module").then((m) => m.ContactsModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    canActivate:[AlreadyLoggedGuard],
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then(
            (m) => m.AuthModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
