import { Component, OnInit, Input } from '@angular/core';
import { WorkshopRepository, IWorkshopOverview, IWorkshopListDto, ILocation } from '../services/workshops/workshopRepository'
import { Router } from '@angular/router';

@Component({
    selector: 'workshops-list',
    templateUrl: './workshops-list.component.html',
    styleUrls: ['./workshops-list.component.scss']
})

export class WorkshopsListComponent {

    @Input() path: string;
    workshopDto: IWorkshopListDto[];
    workshops: IWorkshopOverview[];
    // private locationList: { [locationId: string]: ILocation; } = {};
    private locationList = new Map<number, ILocation>();
    private locations: ILocation[];

    constructor(private workshopRepository: WorkshopRepository, private router: Router) {
        this.workshops = [];
        this.getLocationList();
    }

    ngOnInit() {
        this.getWorkshopsData();
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

    getLocationList() {
        this.workshopRepository.getLocationList()
            .subscribe(
            location => {
                this.locations = location;
                if (this.locations && this.locations.length > 0) {
                    this.locations.forEach(loc => {
                        this.locationList.set(loc.locationId, loc);
                    })
                }
            });

    }

    getWorkshopsData() {
        let workshop: any;
        this.workshopRepository.getWorkshops(this.path)
            .subscribe(
            w => {
                this.workshopDto = w;
                if (this.workshopDto && this.workshopDto.length > 0) {
                    this.workshopDto.forEach(ws => {
                        workshop = ws;
                        workshop.startDateFirst = this.formatDate(ws.startDateFirst);
                        workshop.endDateFirst = this.formatDate(ws.endDateFirst);
                        workshop.location = this.locationList.get(ws.locationId);
                        this.workshops.push(workshop);
                    });
                }
            });
    }

    loadWorkshopDetails(workshopId: string, workshopName: string) {
        this.router.navigate(['/photography-workshop-details', workshopName, workshopId]);
    }
}