import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { WorkshopRepository, IWorkshopOverview } from '../services/workshops/workshopRepository'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
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

    asyncData: IWorkshopOverview[];
    page: number = 1;
    total: number;
    pageNumbers: number[];
    loading: boolean;
    workshops: IWorkshopOverview[];

    private angulartics2: any;
    private cdRef: any;

    constructor(angulartics2: Angulartics2, private workshopRepository: WorkshopRepository, private router: Router, cdRef: ChangeDetectorRef, private route:ActivatedRoute, private sanitizer: DomSanitizer) {
        this.angulartics2 = angulartics2;
        this.workshops = [];
        this.cdRef = cdRef;
    }

    ngOnInit() {
    }

    sanitizeUrl(url: string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
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

    getWorkshopsData(path: string, page: number, wsPerPage: number) {
        this.angulartics2.eventTrack.next({ action: 'GetWorkshopsEvent', properties: { category: 'WorkshopsListComponent' } });
        this.loading = true;
        this.queryPath = path;
        this.itemsPerPage = wsPerPage;
        this.workshopRepository.getWorkshopOverview(path, page, wsPerPage)
            .then(res => {
                this.pageNumbers = Array(Math.ceil(res.total / wsPerPage)).fill(0).map((x, i) => i + 1);
                this.page = page;
                this.loading = false;
                this.asyncData = res.workshops;
            });

        this.cdRef.detectChanges();
    }

    createWorkshopDetailsUrl(workshopId: string, workshopName: string): string {
        workshopName = workshopName.replace(/[ ()&#]/g, "-");
        return `/photography-workshop-details/${workshopName}/${workshopId}`;
    }

    createPageLink(pageNumber: number): string {
        return this.createUrl(pageNumber);
    }
    
    createUrl(page : number) : string {
        let locations: string;
        let categories: string;
        let startDate: string;
        let endDate: string;
        let minPrice: string;
        let maxPrice: string;
        this.route.queryParams.subscribe(params => {
                locations = params['locations'];
                categories = params['categories'];
                startDate = params['startDate'];
                endDate = params['endDate'];
                minPrice = params['minPrice'];
                maxPrice = params['maxPrice'];
        });
        
        var today = new Date();
        if(!startDate)
            {
        startDate = `${today.getFullYear().toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
            }

            if(!endDate)
                {
        endDate = `${(today.getFullYear()+10).toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
                }

        let url = `/workshops/${page}?startDate=${startDate}&endDate=${endDate}`;
        if(minPrice)
            {
                url += `&minPrice=${minPrice}`;
            }
        if(maxPrice)
            {
                url += `&maxPrice=${maxPrice}`;
            }
        if(locations)
            {
                url += `&locations=${locations}`;
            }
        if(categories)
            {
                url += `&categories=${categories}`;
            }

        return url;
    }
}