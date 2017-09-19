import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { WorkshopRepository, IWorkshopOverview } from '../services/workshops/workshopRepository'
import { Router } from '@angular/router';
import { Angulartics2 } from 'angulartics2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Component({
    selector: 'workshops-list',
    templateUrl: './workshops-list.component.html',
    styleUrls: ['./workshops-list.component.scss'],
})

export class WorkshopsListComponent {

    @Input() activePage: number;

    queryPath: string;
    itemsPerPage: number;

    asyncData: Observable<IWorkshopOverview[]>;
    page: number = 1;
    total: number;
    pageNumbers: number[];
    loading: boolean;
    workshops: IWorkshopOverview[];

    private angulartics2: any;
    private cdRef: any;

    constructor(angulartics2: Angulartics2, private workshopRepository: WorkshopRepository, private router: Router, cdRef: ChangeDetectorRef) {
        this.angulartics2 = angulartics2;
        this.workshops = [];
        this.cdRef = cdRef;
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

    formatLocation(locationId) {
        let locationObject = this.workshopRepository.globalConstants.getLocationByLocationId(locationId);
        if (locationObject) {
            return locationObject.name;
        }
        else {
            return "TBD";
        }
    }

    getWorkshopsData(path: string, page: number, wsPerPage: number) {
        this.angulartics2.eventTrack.next({ action: 'GetWorkshopsEvent', properties: { category: 'WorkshopsListComponent' } });
        this.loading = true;
        this.queryPath = path;
        this.itemsPerPage = wsPerPage;
        this.asyncData = this.workshopRepository.getWorkshopOverview(path, page, wsPerPage)
            .do(res => {
                this.pageNumbers = Array(Math.ceil(res.total / wsPerPage)).fill(0).map((x, i) => i + 1);
                this.page = page;
                this.loading = false;
            })
            .map(res => res.workshops);

        this.cdRef.detectChanges();
    }

    createWorkshopDetailsUrl(workshopId: string, workshopName: string): string {
        workshopName = workshopName.replace(/ /g, "-");
        return `/photography-workshop-details/${workshopName}/${workshopId}`;
    }

    createPageLink(pageNumber: number): string {
        return `/workshops/${pageNumber}`;
    }
}