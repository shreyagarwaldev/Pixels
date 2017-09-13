import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { WorkshopRepository } from '../services/workshops/workshopRepository'

@Component({
  selector: 'autocomplete',
  host: { '(document:click)': 'handleClick($event)' },
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
    public query = '';
    public countries = [];
    public filteredList = [];
    public elementRef;
 
    @Output() selectionChanged = new EventEmitter();
    
    constructor(myElement: ElementRef, workshopRepo: WorkshopRepository) {
        this.elementRef = myElement;
        let locations = workshopRepo.getLocations().then(loc =>
            {
                for (var i = 0; i < loc.length; i++) {
                    this.countries.push(loc[i].name);
                }
            });
    }

    filter() {
        if (this.query !== ""){
            this.filteredList = this.countries.filter(function(el){
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }else{
            this.filteredList = [];
        }
    }
     
    select(item){
        this.query = item;
        this.selectionChanged.emit(item);
        this.filteredList = [];
    }

    handleClick(event){
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
           clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
         if(!inside){
             this.filteredList = [];
         }
     }
}