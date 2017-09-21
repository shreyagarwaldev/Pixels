import { Component, OnInit, Renderer, Output, EventEmitter, ViewChild } from '@angular/core';
import { WorkshopRepository, ILocation, IPhotographer } from '../services/workshops/workshopRepository'
import { Angulartics2 } from 'angulartics2';
import { GlobalConstantsRepository } from '../services/shared/globalConstantsRepository'
import { AutocompleteComponent } from '../autocomplete/autocomplete.component'
import { DatePickerComponent } from '../date-picker/date-picker.component'

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

  // price values
  private minPriceValue: number;
  private maxPriceValue: number;
  
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

  @ViewChild(AutocompleteComponent) autocompleteChildComp:AutocompleteComponent;
  @ViewChild(DatePickerComponent) datePickerChildComp:DatePickerComponent;

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

  setValuesFromParameters(minPrice:number, maxPrice:number, categories:string, locations:string, startDate:string, endDate:string)
  {
    if(minPrice)
    {
        this.minPriceValue = minPrice;
    }
    else
    {
        this.minPriceValue = null;
    }

    if(maxPrice)
    {
        this.maxPriceValue = maxPrice;
    }
    else
    {
        this.maxPriceValue = null;
    }

    if(endDate)
    {
        this.datePickerChildComp.setToDate(Date.parse(endDate));
    }
    else
    {
        this.datePickerChildComp.setToDate(null);
    }

    if(startDate)
    {
        this.datePickerChildComp.setFromDate(Date.parse(startDate));
    }
    else
    {
        this.datePickerChildComp.setFromDate(null);
    }

    if(locations)
    {
        this.workshopRepository.getLocations().then(loc => {
            let flag = true;
            for(var i = 0; i < loc.length; i++)
                {
                    if(loc[i].id === +locations)
                        {
                            flag = false;
                            this.autocompleteChildComp.select(loc[i].name);
                        }
                }

                if(flag)
                    {
                        this.autocompleteChildComp.select("");
                    }
            });
    }
    else
    {
        this.autocompleteChildComp.select("");
    }
  }

  updateCategories()
  {
    this.categories = [];
    this.workshopRepo.getWorkshopTypes().then(wTypes => {
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
    let flag = true;
    this.workshopRepository.getLocations().then(loc => {
        for(var i = 0; i < loc.length; i++)
        {
            if(loc[i].name === value)
            {
                flag = false;
                this.locationFilterChanged.emit(loc[i].id);
            }
        }
    });

    if(flag)
    {
        this.locationFilterChanged.emit(null);
    }
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