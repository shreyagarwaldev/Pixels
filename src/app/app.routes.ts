import { Routes } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { WorkshopDetailsComponent } from './workshop-details/workshop-details.component'
import { ContactUsComponent } from './contact-us/contact-us.component'

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'workshops', component: WorkshopsComponent },
  { path: 'photography-workshop-details/:title/:id', component: WorkshopDetailsComponent },
  { path: 'contact', component: ContactUsComponent }
];