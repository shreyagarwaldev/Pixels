import { Component, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { WorkshopsListComponent } from '../workshops-list/workshops-list.component'
import { WorkshopFilterComponent } from '../workshop-filter/workshop-filter.component'
import { GlobalConstantsRepository } from '../services/shared/globalConstantsRepository'
import { Subscription } from 'rxjs/Rx'
import {Location} from '@angular/common';

@Component({
    templateUrl: './workshops.component.html',
    styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnDestroy {

    private subscription: Subscription;
    private subscriptionReqParams: Subscription;
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
    @ViewChild(WorkshopFilterComponent) workshopFilterChildComp:WorkshopFilterComponent;

	constructor(private globalConstantsRepository:GlobalConstantsRepository, private router:Router, private route:ActivatedRoute, private location:Location)
	{
		this.globalConstants = globalConstantsRepository;
        this.hideFilter = true;

        router.events.subscribe(event => {
            if(event instanceof NavigationEnd)
            {
                this.getQueryParams();
                this.updateUrl();
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    toggleFilterDropdown(event: any) {
        this.hideFilter = event;
    }

    getQueryParams() {
        this.subscriptionReqParams = this.route.params.subscribe(
            (param: any) => this.pageNumber = param['pageNumber']
        );

        this.subscription = this.route.queryParams.subscribe(
            (queryParam: any) => {
                this.endDate = queryParam['endDate'];
                this.startDate = queryParam['startDate'];
                this.locationIdList = queryParam['locations'];
                this.categoryList = queryParam['categories'];
                this.maxPrice = queryParam['maxPrice'];
                this.minPrice = queryParam['minPrice'];
                this.workshopFilterChildComp.setIncomingValues(this.startDate, this.endDate, this.locationIdList, this.categoryList, this.minPrice, this.maxPrice);
            }
        );
    }
    
    ngOnInit() {
        this.getQueryParams();

        console.log(this.endDate + this.startDate + this.pageNumber);

		this.updateUrl();
    }

    selectPage(pageNumber : number) {
        this.pageNumber = pageNumber;
        this.updateLocation(this.pageNumber);
        this.updateUrl();
    }

    updateLocation(page:number = null)
    {
        if(!page)
        {
            page = this.pageNumber = 1;
        }

        let url = "/workshops/"+page+"?";
        if(this.startDate)
        {
            url+="startDate="+this.startDate;
        }

        if(this.endDate)
        {
            url+="&endDate="+this.endDate;
        }

        if(this.locationIdList)
        {
            url +="&locations="+this.locationIdList;
        }
            
        if(this.categoryList)
        {
            url+="&categories="+this.categoryList;
        }
                
        if(this.minPrice)
        {
            url+="&minPrice="+this.minPrice;
        }
                    
        if(this.maxPrice)
        {
            url+="&maxPrice="+this.maxPrice;
        }

        this.location.go(url);
    }
	
	updateUrl()
	{
		var today = new Date();
        if(!this.endDate)
        {
            this.endDate = `${(today.getFullYear()+10).toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
        }

        if(!this.startDate)
        {
    		this.startDate = `${today.getFullYear().toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
        }

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
            this.updateLocation();
            this.updateUrl();
            console.log(this.endDate);
        }
    }
	
	setLocationIdList(locationIdList: any)
	{
        if(locationIdList != this.locationIdList)
        {
		    this.locationIdList = locationIdList;
            this.updateLocation();
		    this.updateUrl();
            console.log(this.locationIdList);
        }
	}
	
	setCategoryList(categoryList: any)
	{
        if(categoryList != this.categoryList)
        {
		    this.categoryList = categoryList;
            this.updateLocation();
		    this.updateUrl();
            console.log(categoryList);
        }
	}
	
	setMinPrice(minPrice: number)
	{
        if(this.minPrice != minPrice)
        {
		    this.minPrice = minPrice;
            this.updateLocation();
		    this.updateUrl();
            console.log(minPrice);
        }
	}
	
	setMaxPrice(maxPrice: number)
	{
        if(this.maxPrice != maxPrice)
        {
		    this.maxPrice = maxPrice;
            this.updateLocation();
		    this.updateUrl();
            console.log(maxPrice);
        }
	}
}