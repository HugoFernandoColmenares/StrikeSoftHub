import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'armory',
        loadComponent: () =>
          import('./features/catalog/catalog.component').then((m) => m.CatalogComponent),
      },
      {
        path: 'armory/:id',
        loadComponent: () =>
          import('./features/weapon-detail/weapon-detail.component').then((m) => m.WeaponDetailComponent),
      },
      {
        path: 'arena',
        loadComponent: () =>
          import('./features/community/community.component').then((m) => m.CommunityComponent),
      },
      {
        path: 'lore',
        loadComponent: () => import('./features/lore/lore.component').then((m) => m.LoreComponent),
      },
      {
        path: 'auth',
        loadComponent: () => import('./features/auth/auth.component').then((m) => m.AuthComponent),
      },
      {
        path: 'checkout',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/checkout/checkout.component').then((m) => m.CheckoutComponent),
      },
      {
        path: 'profile',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/profile/profile.component').then((m) => m.ProfileComponent),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./core/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
