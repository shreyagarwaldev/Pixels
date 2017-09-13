import { Component, ViewChild } from '@angular/core';
import { WorkshopsListComponent } from '../workshops-list/workshops-list.component'
import { GlobalConstantsRepository } from '../services/shared/globalConstantsRepository'

@Component({
    templateUrl: './workshops.component.html',
    styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent {
	private query: string;
	private startDate: string;
	private endDate: string;
	private locationIdList:string;
	private categoryList:string;
	private minPrice:number;
	private maxPrice:number;
    private hideFilter: boolean;

	private readonly workshopsPerPage: number = 8;	
	
	private globalConstants:GlobalConstantsRepository;
	
	@ViewChild(WorkshopsListComponent) workshopsListChildComp:WorkshopsListComponent;

	constructor(private globalConstantsRepository:GlobalConstantsRepository)
	{
		this.globalConstants = globalConstantsRepository;
		this.hideFilter = true;
    }

    toggleFilterDropdown(event: any) {
        this.hideFilter = event;
	}
	
	ngOnInit() {
		var today = new Date();
		this.startDate = `${today.getFullYear().toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
		this.endDate = `${(today.getFullYear()+10).toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
		this.updateUrl();
		}
	
	updateUrl()
	{
		this.query = `${this.globalConstants.getPixelatedPlanetAPIUrl()}/Workshops?startDateFilter=${this.startDate}&endDateFilter=${this.endDate}`;
		if(this.locationIdList != null && this.locationIdList != "")
		{
			this.query = `${this.query}&locationIdFilter=${this.locationIdList}`;
		}
		
		if(this.categoryList != null && this.categoryList != "")
		{
			this.query = `${this.query}&workshopType=${this.categoryList}`;
		}
		
		if(this.minPrice > 0)
		{
			this.query = `${this.query}&minPrice=${this.minPrice.toString()}`;
		}
		
		if(this.maxPrice > 0)
		{
			this.query = `${this.query}&maxPrice=${this.maxPrice.toString()}`;
		}
        
		if(this.query) {
			this.workshopsListChildComp.getWorkshopsData(this.query, 1, this.workshopsPerPage);
		}
	}

    setFromDate(fromDate: any)
	{
        this.startDate = `${fromDate.year}/${fromDate.month}/${fromDate.day}`;
		if(this.startDate == "0/0/0")
		{
			var today = new Date();
			this.startDate = `${today.getFullYear().toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
		}
		
		this.updateUrl();
		console.log(this.startDate);
    }
	
	setToDate(toDate: any)
	{
        this.endDate = `${toDate.year}/${toDate.month}/${toDate.day}`;
		if(this.endDate == "0/0/0")
		{
			var today = new Date();
			this.endDate = `${(today.getFullYear()+10).toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
		}

		this.updateUrl();
		console.log(this.endDate);
    }
	
	setLocationIdList(locationIdList: any)
	{
		this.locationIdList = locationIdList;
		this.updateUrl();
		console.log(this.locationIdList);
	}
	
	setCategoryList(categoryList: any)
	{
		this.categoryList = categoryList;
		this.updateUrl();
		console.log(categoryList);
	}
	
	setMinPrice(minPrice: number)
	{
		this.minPrice = minPrice;
		this.updateUrl();
		console.log(minPrice);
	}
	
	setMaxPrice(maxPrice: number)
	{
		this.maxPrice = maxPrice;
		this.updateUrl();
		console.log(maxPrice);
	}
}