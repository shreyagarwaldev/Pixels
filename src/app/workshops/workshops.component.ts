import { Component } from '@angular/core';

@Component({
    templateUrl: './workshops.component.html',
    styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent {

    private query: string;
    private hideFilter: boolean;

    constructor() {
        this.hideFilter = true;
    }

    toggleFilterDropdown(event: any) {
        this.hideFilter = event;
    }
}