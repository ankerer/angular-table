import { Route } from '@angular/router';
import { Users } from './pages/users/users';
import { Statistics } from './pages/statistics/statistics';

export const routeConfig: Route[] = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: Users },
    { path: 'stats', component: Statistics },
];