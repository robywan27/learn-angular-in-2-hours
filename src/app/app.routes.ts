import { Routes } from '@angular/router';
import { Posts } from './posts/posts';
import { Profile } from './profile/profile';
import { Navigation } from './navigation/navigation';

export const routes: Routes = [
    {path: '', component: Navigation},
    {path: 'posts', component: Posts},
    {path: 'profile', component: Profile},
];
