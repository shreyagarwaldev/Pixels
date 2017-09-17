import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private pageNumber: number;

	private readonly workshopsPerPage: number = 8;	
	
	private globalConstants:GlobalConstantsRepository;
	
	@ViewChild(WorkshopsListComponent) workshopsListChildComp:WorkshopsListComponent;

	constructor(private globalConstantsRepository:GlobalConstantsRepository, private route:ActivatedRoute)
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
        let sub = this.route.params.subscribe(params => {
            this.pageNumber = params['pageNumber'];
        });
        
        console.log(this.pageNumber);
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
        
		if(this.query && this.pageNumber) {
			this.workshopsListChildComp.getWorkshopsData(this.query, this.pageNumber, this.workshopsPerPage);
		}
	}

    setFromDate(fromDate: any)
	{
        let previousStartDate = this.startDate;
        this.startDate = `${fromDate.year}/${fromDate.month}/${fromDate.day}`;
		if(this.startDate == "0/0/0")
		{
			var today = new Date();
			this.startDate = `${today.getFullYear().toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
		}
        
        if(previousStartDate !== this.startDate)
        {
		    this.updateUrl();
            console.log(this.startDate);
        }
    }

	toggleFilter() {
		this.hideFilter = true;
	}
	
	setToDate(toDate: any)
	{
        let previousEndDate = this.endDate;
        this.endDate = `${toDate.year}/${toDate.month}/${toDate.day}`;
		if(this.endDate == "0/0/0")
		{
			var today = new Date();
			this.endDate = `${(today.getFullYear()+10).toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
		}

        if(previousEndDate != this.endDate)
        {
		    this.updateUrl();
            console.log(this.endDate);
        }
    }
	
	setLocationIdList(locationIdList: any)
	{
        if(locationIdList != this.locationIdList)
        {
		    this.locationIdList = locationIdList;
		    this.updateUrl();
            console.log(this.locationIdList);
        }
	}
	
	setCategoryList(categoryList: any)
	{
        if(categoryList != this.categoryList)
        {
		    this.categoryList = categoryList;
		    this.updateUrl();
            console.log(categoryList);
        }
	}
	
	setMinPrice(minPrice: number)
	{
        if(this.minPrice != minPrice)
        {
		    this.minPrice = minPrice;
		    this.updateUrl();
            console.log(minPrice);
        }
	}
	
	setMaxPrice(maxPrice: number)
	{
        if(this.maxPrice != maxPrice)
        {
		    this.maxPrice = maxPrice;
		    this.updateUrl();
            console.log(maxPrice);
        }
	}
}