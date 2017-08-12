import { Component, OnInit, Input } from '@angular/core';
import { WorkshopRepository, IWorkshopOverview, IWorkshopListDto } from '../services/workshops/workshopRepository'
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

    constructor(private workshopRepository: WorkshopRepository, private router: Router) {
        this.workshops = [];
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

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return `${monthNames[monthIndex]} ${day} ${year}`;
    }

    getWorkshopsData() {
        let workshop: any;
        this.workshopRepository.getWorkshops(this.path)
            .subscribe(
            w => {
                this.workshops = w;
                // if (this.workshopDto && this.workshopDto.length > 0) {
                //     this.workshopDto.forEach(ws => {
                //         workshop = ws;
                //         workshop.startDateFirst = this.formatDate(ws.startDateFirst);
                //         workshop.endDateFirst = this.formatDate(ws.endDateFirst);
                //         // workshop.costCurrency = ws.costCurrency;
                //         // workshop.locationId = ws.locationId;
                //         // workshop.maxCost = ws.maxCost;
                //         // workshop.minCost = ws.minCost;
                //         // workshop.name = ws.name;
                //         // workshop.workshopId = ws.workshopId;
                //         // workshop.endDateFirst = this.formatDate(ws.endDateFirst);
                //         // workshop.startDateFirst = this.formatDate(ws.startDateFirst);
                //         this.workshops.push(workshop);
                //     });
                
            });
    }

    loadWorkshopDetails(workshopId: string, workshopName: string) {
        this.router.navigate(['/photography-workshop-details', workshopName, workshopId]);
    }
}