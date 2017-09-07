import { Component, Renderer, Output, EventEmitter } from '@angular/core';
import { WorkshopRepository, ILocation, IPhotographer } from '../services/workshops/workshopRepository'
import { Angulartics2 } from 'angulartics2';
import { GlobalConstantsRepository } from '../services/shared/globalConstantsRepository'

@Component({
  selector: 'workshop-filter',
  templateUrl: './workshop-filter.component.html',
  styleUrls: ['./workshop-filter.component.scss']
})

export class WorkshopFilterComponent {

  @Output() fromDateChanged = new EventEmitter();
  @Output() toDateChanged = new EventEmitter();
  @Output() locationFilterChanged = new EventEmitter();
  @Output() categoryFilterChanged = new EventEmitter();
  @Output() minPriceFilterChanged = new EventEmitter();
  @Output() maxPriceFilterChanged = new EventEmitter();
  
  private angulartics2: Angulartics2;

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

  private globalConstants:GlobalConstantsRepository;

  constructor(private workshopRepository: WorkshopRepository, private a: Angulartics2, private globalConstantsRepository:GlobalConstantsRepository) {
    this.angulartics2 = a;
    this.globalConstants = globalConstantsRepository;

    this.updateLocations();
    this.updateCategories();

    this.cityDropdownLabel = "Location";
    this.photographerDropdownLabel = "Photographer";
    this.categoryDropdownLabel = "Category";
    this.fromDateLabel = "From";
    this.toDateLabel = "To";

    this.minFromDate = new Date();
  }

  updateLocations()
  {
    this.cities = [];
    this.workshopRepository.getLocations().then(locations => { 
      if(locations) {
        for (var i = 0; i < locations.length; i++) {
          var x = <ILocation>locations[i];
          this.cities.push({label:x.name, value:x.id});
        }
      }
    });
  }

  updateCategories()
  {
    this.categories = [];
    this.workshopRepository.getWorkshopTypes().then(wTypes => { 
      if(wTypes) {
        for (var i = 0; i < wTypes.length; i++) {
          this.categories.push({label:wTypes[i], value:wTypes[i]});
        }
      }
    });
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
  
  updateMinPrice(value:number)
  {
    this.angulartics2.eventTrack.next({ action: 'MinPriceFilterEvent', properties: { category: 'WorkshopFilterComponent' }});
    this.minPriceFilterChanged.emit(value);
  }
  
  
  updateMaxPrice(value:number)
  {
    this.angulartics2.eventTrack.next({ action: 'MaxPriceFilterEvent', properties: { category: 'WorkshopFilterComponent' }});
    this.maxPriceFilterChanged.emit(value);
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
        if(!first)
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
        if(!first)
            workshopTypesList = workshopTypesList + ",";
        first=false;
        workshopTypesList = workshopTypesList+category;
    }
	  
    this.categoryFilterChanged.emit(workshopTypesList);
  }
}
