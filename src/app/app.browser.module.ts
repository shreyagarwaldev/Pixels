/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';

import { NavComponent } from './navbar/navbar.component';
import { WorkshopsListComponent } from './workshops-list/workshops-list.component';
import { WorkshopFilterComponent } from './workshop-filter/workshop-filter.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WorkshopDetailsComponent } from './workshop-details/workshop-details.component';
import { WorkshopRepository } from './services/workshops/workshopRepository';
import { PageRedirectComponent } from './page-redirect/page-redirect.component';

import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */
  declarations: [
	AppComponent,
    HomeComponent,
    NavComponent,
    WorkshopFilterComponent,
    WorkshopsListComponent,
    WorkshopsComponent,
    ContactUsComponent,
    WorkshopDetailsComponent,
	PageRedirectComponent
	],
  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * BrowserModule, HttpModule, and JsonpModule are included
     */
    UniversalModule,
    FormsModule,
    /**
     * using routes
     */
    RouterModule.forRoot(routes),
	Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
	Angulartics2Module.forChild()
  ],
  providers: [WorkshopRepository]
})
export class AppModule {

}
