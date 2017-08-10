import { Component, Renderer, Output, EventEmitter } from '@angular/core';
import { WorkshopRepository, ILocation } from '../services/workshops/workshopRepository'
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'workshop-filter',
  templateUrl: './workshop-filter.component.html',
  styleUrls: ['./workshop-filter.component.css']
})

export class WorkshopFilterComponent {

  /** price filters */
  public minPrice: number = 0;
  public maxPrice: number = 80;
  private updatedPrice: number[];
  
  @Output() fromDateChanged = new EventEmitter();
  @Output() toDateChanged = new EventEmitter();
  @Output() locationFilterChanged = new EventEmitter();
  @Output() categoryFilterChanged = new EventEmitter();
  @Output() minPriceFilterChanged = new EventEmitter();
  @Output() maxPriceFilterChanged = new EventEmitter();
  
  private workshopTypes:any[];
  private angulartics2: Angulartics2;

  public locations: Array<string>;
  public photographers: any[];
  public cities: any[];
  public categories: any[];

  /** abels for filters */
  public cityDropdownLabel: string;
  public photographerDropdownLabel: string;
  public categoryDropdownLabel: string;
  public fromDateLabel: string;
  public toDateLabel: string;

  private checkboxElements: NodeListOf<Element>;

  /** date filters */
  public minFromDate: Date;
  public maxFromDate: Date;
  public minToDate: Date;
  public maxToDate: Date;
  public fromDate: Date;
  public toDate: Date;

  constructor(private workshopRepository: WorkshopRepository, private a: Angulartics2) {
    this.cities = [];
    this.photographers = [];
    this.categories = [];
	this.angulartics2 = a;

    this.getLocationList();
    this.getPhotographerList();
    this.getCategoryList();

    this.cityDropdownLabel = "Location";
    this.photographerDropdownLabel = "Photographer";
    this.categoryDropdownLabel = "Category";
    this.fromDateLabel = "From";
    this.toDateLabel = "To";

    this.minFromDate = new Date();
  }

  createFilterMaps() {

  }

  getFromDate(value: Date) {
    this.fromDate = value;
	this.angulartics2.eventTrack.next({ action: 'FromDateFilterEvent', properties: { category: 'WorkshopFilterComponent' }});
	
    this.fromDateChanged.emit(this.fromDate);
  }

  getToDate(value: Date) {
    this.toDate = value;
	this.angulartics2.eventTrack.next({ action: 'ToDateFilterEvent', properties: { category: 'WorkshopFilterComponent' }});
	
	this.toDateChanged.emit(this.toDate);
  }

  getPrice(values: number[]) {
    this.updatedPrice = values;
  }
  
  updateMinPrice(value:number)
  {
	  this.minPrice = value;
	  this.angulartics2.eventTrack.next({ action: 'MinPriceFilterEvent', properties: { category: 'WorkshopFilterComponent' }});
	
	  this.minPriceFilterChanged.emit(this.minPrice);
  }
  
  
  updateMaxPrice(value:number)
  {
	  this.maxPrice = value;
	  this.angulartics2.eventTrack.next({ action: 'MaxPriceFilterEvent', properties: { category: 'WorkshopFilterComponent' }});
	
	  this.maxPriceFilterChanged.emit(this.maxPrice);
  }

  getSelectedFilters(inputName: string): string[] {
    let selected: string[] = [];
    this.checkboxElements = document.querySelectorAll(`input[name=${inputName}]:checked`);
    for (var i = 0; i < this.checkboxElements.length; i++) {
      var x = <HTMLInputElement>this.checkboxElements[i];
      selected.push(x.value);
    }

    return selected;
  }
  
  updateLocationList(value: any)
  {
	  this.angulartics2.eventTrack.next({ action: 'LocationFilterEvent', properties: { category: 'WorkshopFilterComponent' }});
	
	  let locations = this.getSelectedFilters('location');
	  let locationIdList = "";
	  let first = true;
	  for(let location of locations)
	  {
		  if(first == false)
			  locationIdList = locationIdList + ",";
		  first=false;
		  locationIdList = locationIdList+location;
	  }
	  
	  this.locationFilterChanged.emit(locationIdList);
  }
  
  updateCategoryList(value: any)
  {
	  this.angulartics2.eventTrack.next({ action: 'CategoryFilterEvent', properties: { category: 'WorkshopFilterComponent' }});
	
	  let categories = this.getSelectedFilters('categories');
	  let workshopTypesList = "";
	  let first = true;
	  for(let category of categories)
	  {
		  if(first == false)
			  workshopTypesList = workshopTypesList + ",";
		  first=false;
		  workshopTypesList = workshopTypesList+category;
	  }
	  
	  this.categoryFilterChanged.emit(workshopTypesList);
  }

  getResult() {
    let locations = this.getSelectedFilters('location');
    let photographers = this.getSelectedFilters('photographer');
    let categories = this.getSelectedFilters('categories');

    console.log(locations);
    console.log(photographers);
    console.log(categories);
    console.log(this.fromDate);
    console.log(this.toDate);
    console.log(this.updatedPrice);
  }

  private getLocationList() {
	  this.workshopRepository.getLocations()
            .subscribe(
			loc => {
				for(let l of loc)
				{
					this.cities.push({ label: l.city, value: l.locationId });
				}
			}
			);
  }

  private getPhotographerList() {
  }

  private getCategoryList() {
	  this.workshopRepository.getWorkshopTypes()
            .subscribe(
			types => {
				for(let wType of types)
				{
					this.categories.push({ label: wType, value: wType });
				}
			}
			);
  }
}
