import { Component, OnInit, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { WorkshopRepository, IWorkshopDetails } from '../services/workshops/workshopRepository'
import { ActivatedRoute } from '@angular/router';

export interface IImageObject {
    imageLink: string;
    hideImage: boolean
}

interface ITabs {
    label: string;
    showTab: boolean;
}

@Component({
    templateUrl: './workshop-details.component.html',
    styleUrls: ['./workshop-details.component.scss']
})

export class WorkshopDetailsComponent {
    workshopDetails: IWorkshopDetails;
    imagesLink: IImageObject[];
    hideModal: boolean;
    private slideIndex: number;
    private sub: any;
    private tabs: ITabs[];

    private previousActiveTab: ITabs;
    private tabcontent: HTMLCollectionOf<HTMLElement>;
    private tabLinks: HTMLCollectionOf<HTMLElement>;

    constructor(
        private workshopRepository: WorkshopRepository,
        private elementRef: ElementRef,
        private route: ActivatedRoute) {
        this.workshopDetails = <any>{};
        this.hideModal = true;
        this.slideIndex = 1;
    }

    ngOnInit() {
        this.hideModal = true;
        this.getImgData();
        let workshopId: string;
        this.sub = this.route.params.subscribe(params => {
            workshopId = params['id'];
        });

        this.getWorkshopDetail(workshopId);
        this.initializeTabs();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getWorkshopDetail(workshopId: string) {
        this.workshopRepository.getWorkshopDetails(workshopId)
            .then(data => {
                this.workshopDetails = data;
            });
    }

    closeModal() {
        this.hideModal = true;
    }

    openModal(index: number) {
        this.hideModal = false;
        this.currentSlide(index);
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }

    showSlides(n) {
        const totalImages = this.imagesLink.length;
        if (n > totalImages) { this.slideIndex = 1 }
        if (n < 1) { this.slideIndex = totalImages - 1 }
        for (let i = 0; i < totalImages; i++) {
            this.imagesLink[i].hideImage = true;
        }
        this.imagesLink[this.slideIndex - 1].hideImage = false;
    }


    getImgData() {
        this.imagesLink = [{
            imageLink: "assets/img/workshops/RickHulbert/hdr.jpg",
            hideImage: true
        },
        {
            imageLink: "assets/img/workshops/TimVollmer/peru.jpg",
            hideImage: true
        },
        {
            imageLink: "assets/img/workshops/RickHulbert/urban.jpg",
            hideImage: true
        },
        {
            imageLink: "assets/img/workshops/CraigMc/tetons.jpg",
            hideImage: true
        },
        {
            imageLink: "assets/img/workshops/KathleenReeder/OOA.jpg",
            hideImage: true
        },
        {
            imageLink: "assets/img/workshops/RickHulbert/chicago.jpg",
            hideImage: true
        }]
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


    initializeTabs() {
        this.tabs = [
            {
                label: "Description",
                showTab: false
            },
            {
                label: "Itinerary",
                showTab: false
            },
            {
                label: "Gallery",
                showTab: false
            },
            {
                label: "Photographers",
                showTab: false
            }
        ]

        this.previousActiveTab = this.tabs[0];
        this.previousActiveTab.showTab = true;
    }

    openTabs(tabNumber: number) {
        this.previousActiveTab.showTab = false;
        this.tabs[tabNumber].showTab = true;
        this.previousActiveTab = this.tabs[tabNumber];
    }
}