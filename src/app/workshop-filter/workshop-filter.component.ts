import { Component, OnInit, Renderer, Output, EventEmitter } from '@angular/core';
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
  @Output() applyFilters = new EventEmitter();
  
  private angulartics2: Angulartics2;

  public cities: any[];
  public categories: any[];
  
  /** labels for filters */
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
  private workshopRepo : WorkshopRepository;

  public showFilter: boolean;

  constructor(private workshopRepository: WorkshopRepository, private a: Angulartics2, private globalConstantsRepository:GlobalConstantsRepository) {
    this.angulartics2 = a;
    this.globalConstants = globalConstantsRepository;
    this.workshopRepo = workshopRepository;
    
    this.updateCategories();
    
    this.cityDropdownLabel = "Location";
    this.photographerDropdownLabel = "Photographer";
    this.categoryDropdownLabel = "Category";
    this.fromDateLabel = "From";
    this.toDateLabel = "To";

    this.minFromDate = new Date();
    this.showFilter = true;
  }

  updateCategories()
  {
    this.categories = [];
    this.workshopRepo.getWorkshopTypes().then(wTypes =>
        {
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

  toggleFilter() {
    this.applyFilters.emit(true);
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
  
  updateLocation(value: any)
  {
    this.angulartics2.eventTrack.next({ action: 'LocationFilterEvent', properties: { category: 'WorkshopFilterComponent' }});
    let loc = this.workshopRepository.globalConstants.getLocationByLocationName(value);
    if(!loc)
    {
        this.locationFilterChanged.emit(null);
    }
    else
    {
        this.locationFilterChanged.emit(loc.id);
    }
  }
  
  updateCategoryList(value: string)
  {
    this.angulartics2.eventTrack.next({ action: 'CategoryFilterEvent', properties: { category: 'WorkshopFilterComponent' }});
    this.categoryFilterChanged.emit(value);
  }
}