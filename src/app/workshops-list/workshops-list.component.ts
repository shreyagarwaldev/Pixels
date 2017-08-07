import { Component, OnInit, Input } from '@angular/core';
import { WorkshopRepository, IWorkshopOverview } from '../services/workshops/workshopRepository'
import { Router } from '@angular/router';

@Component({
    selector: 'workshops-list',
    templateUrl: './workshops-list.component.html',
    styleUrls: ['./workshops-list.component.css']
})

export class WorkshopsListComponent {

@Input() path: string;
    workshops: IWorkshopOverview[];

    constructor(private workshopRepository: WorkshopRepository, private router: Router) {
        this.workshops = [];
    }

    ngOnInit() {
        this.getWorkshopsData();
    }

    getWorkshopsData() {
        this.workshopRepository.getWorkshops(this.path)
            .subscribe(
			w => this.workshops = w
			);
    }

    loadWorkshopDetails(workshopId: string, workshopName: string) {
        this.router.navigate(['/photography-workshop-details', workshopName, workshopId ]);
    }
}