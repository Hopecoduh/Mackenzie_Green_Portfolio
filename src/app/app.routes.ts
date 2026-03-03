import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Capabilities } from './pages/capabilities/capabilities';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'capabilities', component: Capabilities },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
];
