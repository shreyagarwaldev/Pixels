import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

import { GlobalConstantsRepository } from '../shared/globalConstantsRepository'

export interface ILocation {
    locationId: number;
    line1: string;
    line2: string;
    line3: string;
}

export interface IWorkshopOverview {
	workshopId:number,
    workshopType:string,
	numberOfWorkshops:number,
	startDateFirst?:Date,
	endDateFirst?:Date,
	minCost?:number,
	maxCost?:number,
	costCurrency?:string,
	name:string,
	imageLink:string,
	locationId:number,
}

export interface IPhotographer {
    id: string;
    firstName: string;
    lastName: string;
    profilePhotoLink: string;
    websiteLink: string;
    locationId?: number;
    moreInfo: string;
}

export interface IMultiWorkshopDetails {
    startDate: Date;
    endDate: Date;
    cost?: number;
    link: string;
}

export interface IWorkshopDetails {
    workshopId: number;
    name: string;
    description:string;
    itinerary:IItinerary[];
    addtionalInformation: string;
	imageLink:string;
    link?: string;
    locationId: number;
    workshopType: string;
    multiWorkshopDetails: IMultiWorkshopDetails[];
	minCost:number;
	maxCost:number;
	costCurrency:string;
}

export interface IItinerary {
    day: number;
    location: string;
    content: string;
}

@Injectable()
export class WorkshopRepository {

    public globalConstants;

    constructor(private http: Http, private globalConstantsRepository : GlobalConstantsRepository) {
        this.globalConstants = globalConstantsRepository;
        this.getLocations();
        this.getWorkshopTypes();
    }

    getWorkshopOverview(path: string) : Promise<IWorkshopOverview[]> {
        return this.http.get(path)
                        .toPromise()
                        .then(response => {
                            return response.json() as IWorkshopOverview[];
                        });
    }

    private getLocationsInternal() : Promise<ILocation[]> {
        return this.http.get(this.globalConstants.getLocationsUrl())
                        .toPromise()
                        .then(response => {
                            return response.json() as ILocation[];
                        });
    }

    getLocations() : Promise<ILocation[]> {
        let loc = this.globalConstants.getLocations();
        if(typeof loc == "undefined") {
            loc = this.getLocationsInternal();
            loc.then(locations =>
            this.globalConstants.setLocations(locations)
            );
        }

        return loc;
    }
	
    private getWorkshopTypesInternal() : Promise<string[]> {
        return this.http.get(this.globalConstants.getWorkshopTypesUrl())
                        .toPromise()
                        .then(response => {
                            return response.json() as string[];
                        });
    }

    getWorkshopTypes() : Promise<ILocation[]> {
        let wTypes = this.globalConstants.getWorkshopTypes();
        if(typeof wTypes == "undefined") {
            wTypes = this.getWorkshopTypesInternal();
            wTypes.then(workshopTypes =>
            this.globalConstants.setWorkshopTypes(workshopTypes)
            );
        }

        return wTypes;
    }

    getWorkshopDetails(workshopId: string) : Promise<IWorkshopDetails> {
        let url = `${this.globalConstants.getPixelatedPlanetAPIUrl()}/WorkshopDetails?workshopId=${workshopId}`;
        return this.http.get(url)
                    .toPromise()
                    .then(response => {
                        return <IWorkshopDetails> response.json();
                    });
    }
}