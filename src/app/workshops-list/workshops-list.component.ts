import { Component, OnInit, Input } from '@angular/core';
import { WorkshopRepository, IWorkshopInstance } from '../services/workshops/workshopRepository'
import { Router } from '@angular/router';
import { Angulartics2 } from 'angulartics2';

@Component({
    selector: 'workshops-list',
    templateUrl: './workshops-list.component.html',
    styleUrls: ['./workshops-list.component.css']
})

export class WorkshopsListComponent {

    workshops: IWorkshopInstance[];
	private angulartics2: any;
    constructor(angulartics2: Angulartics2, private workshopRepository: WorkshopRepository, private router: Router) {
		this.angulartics2 = angulartics2;
        this.workshops = [];
    }
	
    ngOnInit() {
    }

    getWorkshopsData(path:any) {
		this.angulartics2.eventTrack.next({ action: 'GetWorkshopsEvent', properties: { category: 'WorkshopsListComponent' }});
	
        this.workshopRepository.getWorkshopInstances(path)
            .subscribe(
			w => this.workshops = w
			);
    }

    loadWorkshopDetails(workshopId: string, workshopName: string) {
        this.router.navigate(['/photography-workshop-details', workshopName, workshopId ]);
    }
}