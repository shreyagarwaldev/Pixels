import { Component, OnInit, Input } from '@angular/core';
import { WorkshopRepository, IWorkshopOverview } from '../services/workshops/workshopRepository'
import { Router } from '@angular/router';
import { Angulartics2 } from 'angulartics2';

@Component({
    selector: 'workshops-list',
    templateUrl: './workshops-list.component.html',
    styleUrls: ['./workshops-list.component.scss']
})

export class WorkshopsListComponent {

    workshops: IWorkshopOverview[];
	private angulartics2: any;
    constructor(angulartics2: Angulartics2, private workshopRepository: WorkshopRepository, private router: Router) {
		this.angulartics2 = angulartics2;
        this.workshops = [];
    }
	
    ngOnInit() {
    }

    formatDate(date) {
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        var dateVal = new Date(date);
        var day = dateVal.getDate();
        var monthIndex = dateVal.getMonth();
        var year = dateVal.getFullYear();

        return `${monthNames[monthIndex]} ${day} ${year}`;
    }

    formatLocation(locationId){
        let locationObject = this.workshopRepository.globalConstants.getLocationByLocationId(locationId);
        if(locationObject){
            let location:string = "";
            if(locationObject.line1 != "Multiple" && locationObject.line1 != "N/A")
                location += locationObject.line1 + ", ";
            if(locationObject.line2 != "Multiple" && locationObject.line2 != "N/A")
                location += locationObject.line2 + ", ";
            location += locationObject.line3;

            return location;
        }
        else{
            return "TBD";
        }
    }
    
    getWorkshopsData(path:any) {
		this.angulartics2.eventTrack.next({ action: 'GetWorkshopsEvent', properties: { category: 'WorkshopsListComponent' }});
	
        this.workshopRepository.getWorkshopOverview(path).then(
            w => this.workshops = w
        )
    }

    loadWorkshopDetails(workshopId: string, workshopName: string) {
        this.router.navigate(['/photography-workshop-details', workshopName, workshopId]);
    }
}