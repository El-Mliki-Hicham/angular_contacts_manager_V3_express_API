import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GateGuard } from './middleware/gate.guard';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AlreadyLoggedGuard } from './middleware/already-logged.guard';
import { EmailSendedGuard } from './middleware/email-sended.guard';
import { Error404Component } from './errors/error404/error404.component';
import { Error401Component } from './errors/error401/error401.component';
import { RolesGuard } from './middleware/roles.guard';

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
        canActivate:[RolesGuard],
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
  {
    path: '401',
    component:Error401Component
  },
  {
    path: '**',
    component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
