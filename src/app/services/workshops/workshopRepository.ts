import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

import { GlobalConstantsRepository } from '../shared/globalConstantsRepository'

export interface ILocation {
    locationId?: number;
    city: string;
    state?: string;
    country?: string;
}

export interface IDateRange {
    startDate: Date;
    endDate: Date;
}

export interface IWorkshopOverview {
	workshopId:string,
    workshopType:string,
	numberOfWorkshops:number,
	startDateFirst:Date,
	endDateFirst:Date,
	minCost:number,
	maxCost:number,
	costCurrency:string,
	name:string,
	description:string,
	imageLink:string,
	locationId:number,
	primaryPhotographerUserId:number,
	secondaryPhotographerUserId:number
}

export interface IPhotographer {
    id?: string;
    firstName: string;
    lastName: string;
    profilePhoto?: string;
    websiteLink?: string;
    followers?: string;
    location?: ILocation;
    moreInformation?: string;
}

export interface IWorkshopInstance {
    workshopId: number;
	workshopInstanceId: number;
    name: string;
    locationId: number;
    workshopType: string;
    startDate: Date;
	endDate: Date;
    description: string;
    link: string;
	imageLink:string;
	cost:number;
	costCurrency:string;
}

export interface IDescription {
    introduction: string;
    itinerary: Iitinerary[];
    addtionalInformation: string;
}

export interface Iitinerary {
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
        this.getPhotographers();
        this.getWorkshopTypes();
    }

    getWorkshops(path: string) : Promise<IWorkshopOverview[]> {
        return this.http.get(path)
                        .toPromise()
                        .then(response => {
                            return response.json() as IWorkshopOverview[];
                        });
    }

    getWorkshopInstances(path: string) : Promise<IWorkshopInstance[]> {
        return this.http.get(path)
                        .toPromise()
                        .then(response => {
                            return response.json() as IWorkshopInstance[];
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
    
	
    private getPhotographersInternal() : Promise<IPhotographer[]> {
        return this.http.get(this.globalConstants.getPhotographersUrl())
                        .toPromise()
                        .then(response => {
                            return response.json() as IPhotographer[];
                        });
    }

    getPhotographers() : Promise<IPhotographer[]> {
        let p = this.globalConstants.getPhotographers();
        // if(typeof p == "undefined") {
        //     p = this.getPhotographersInternal();
        //     this.globalConstants.setPhotographers(p);
        // }

        return p;
    }

    getWorkshopDetails(workshopId: string) {
        return this.http.get("/assets/ws-details.json")
                    .toPromise()
                    .then(res => <IWorkshopInstance> res.json().data)
                    .then(data => { return data; });
    }
}