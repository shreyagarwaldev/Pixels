import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { WorkshopsListComponent } from '../workshops-list/workshops-list.component'
import { WorkshopFilterComponent } from '../workshop-filter/workshop-filter.component'
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
	@ViewChild(WorkshopFilterComponent) workshopsFilterChildComp:WorkshopFilterComponent;

	constructor(private globalConstantsRepository:GlobalConstantsRepository, private route:ActivatedRoute, private router:Router)
	{
		this.globalConstants = globalConstantsRepository;
        this.hideFilter = true;
        
        router.events.subscribe(event => {
            if(event instanceof NavigationEnd)
                {
            this.setParameters();
            this.updateUrl();
                }
        });
    }

    toggleFilterDropdown(event: any) {
        this.hideFilter = event;
    }
    
    setParameters() {
        this.route.params.subscribe(params => {
            this.pageNumber = params['pageNumber'];
        });

        this.route.queryParams.subscribe(params => {
            this.locationIdList = params['locations'];
            this.categoryList = params['categories'];
            this.minPrice = params['minPrice'];
            this.maxPrice = params['maxPrice'];
            this.startDate = params['startDate'];
            this.endDate = params['endDate'];
        });

        var today = new Date();
        if(!this.startDate)
            {
        this.startDate = `${today.getFullYear().toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
            }

            if(!this.endDate)
                {
        this.endDate = `${(today.getFullYear()+10).toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
                }

        this.workshopsFilterChildComp.setValuesFromParameters(this.minPrice, this.maxPrice, this.categoryList, this.locationIdList, this.startDate, this.endDate);
    }
	
	ngOnInit() {
        this.setParameters();
		this.updateUrl();
    }
    
    createUrl() : string {
        let url = `/workshops/${this.pageNumber}?startDate=${this.startDate}&endDate=${this.endDate}`;
        if(this.minPrice)
            {
                url += `&minPrice=${this.minPrice}`;
            }
        if(this.maxPrice)
            {
                url += `&maxPrice=${this.maxPrice}`;
            }
        if(this.locationIdList)
            {
                url += `&locations=${this.locationIdList}`;
            }
        if(this.categoryList)
            {
                url += `&categories=${this.categoryList}`;
            }

        return url;
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
            this.pageNumber = 1;
		    this.router.navigateByUrl(this.createUrl());
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
            this.pageNumber = 1;
		    this.router.navigateByUrl(this.createUrl());
        }
    }
	
	setLocationIdList(locationIdList: any)
	{
        if(locationIdList != this.locationIdList)
        {
		    this.locationIdList = locationIdList;
            this.pageNumber = 1;
		    this.router.navigateByUrl(this.createUrl());
        }
	}
	
	setCategoryList(categoryList: any)
	{
        if(categoryList != this.categoryList)
        {
		    this.categoryList = categoryList;
            this.pageNumber = 1;
		    this.router.navigateByUrl(this.createUrl());
        }
	}
	
	setMinPrice(minPrice: number)
	{
        if(this.minPrice != minPrice)
        {
            this.minPrice = minPrice;
            this.pageNumber = 1;
		    this.router.navigateByUrl(this.createUrl());
        }
	}
	
	setMaxPrice(maxPrice: number)
	{
        if(this.maxPrice != maxPrice)
        {
            this.maxPrice = maxPrice;
            this.pageNumber = 1;
		    this.router.navigateByUrl(this.createUrl());
        }
	}
}