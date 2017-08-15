import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { Component } from '@angular/core';
import { GlobalConstantsRepository } from './services/shared/globalConstantsRepository'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private globalConstants:GlobalConstantsRepository;
	constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, private globalConstantsRepository: GlobalConstantsRepository) {
    this.globalConstants = globalConstantsRepository;
  }
 }