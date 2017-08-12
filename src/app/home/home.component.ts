import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { Angulartics2Module } from 'angulartics2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkshopsListComponent } from '../workshops-list/workshops-list.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

@ViewChild(WorkshopsListComponent) workshopsListChildComp:WorkshopsListComponent;
	
  constructor() {
  }

  ngOnInit() {
		var today = new Date();
		let startDate = today.getFullYear().toString() + "/" + (today.getMonth()+1).toString() + "/" + today.getDate().toString();
		let endDate = (today.getFullYear()+10).toString() + "/" + (today.getMonth()+1).toString() + "/" + today.getDate().toString();
		let query = "http://pixelatedplanetservice.azurewebsites.net/api/Pixelated/Workshops?startDateFilter="+startDate+"&endDateFilter="+endDate+"&FReturnCompact=false&pageNumber=1&numberOfResults=4";
		this.workshopsListChildComp.getWorkshopsData(query);
  }

}
