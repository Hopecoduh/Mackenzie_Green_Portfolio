import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Capabilities } from './pages/capabilities/capabilities';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'capabilities', component: Capabilities },
  { path: 'contact', component: ContactComponent },
];
