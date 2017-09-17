import { Routes } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { AboutComponent }  from './about/about.component';
import { ErrorComponent }  from './error/error.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { WorkshopDetailsComponent } from './workshop-details/workshop-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageRedirectComponent } from './page-redirect/page-redirect.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './privacy-policy/privacy-policy.component'

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'workshops/:pageNumber', component: WorkshopsComponent },
  { path: 'photography-workshop-details/:title/:id', component: WorkshopDetailsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'page-redirect/:externalUrl', component: PageRedirectComponent, pathMatch: 'full' },
  { path: '404', component: ErrorComponent, pathMatch:'full'},
  { path: 'termsandconditions', component: TermsAndConditionsComponent, pathMatch: 'full'},
  { path: 'privacypolicy', component: PrivacyComponent, pathMatch: 'full'},
  { path: 'workshops', redirectTo: '/workshops/1' },
  { path: 'robots.txt', redirectTo: '/robots.txt'},
  { path: '**', redirectTo: '/404' }
];