import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

export interface ILocation {
    locationId?: string;
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

    constructor(private http: Http) {}

    getWorkshops(path: string) {
        return this.http.get(path)
                    .map((response: Response) => {
            return <IWorkshopOverview[]>response.json();
        }).catch(function(e){
			return Observable.empty<Response>();
		});
    }

    getWorkshopInstances(path: string) {
        return this.http.get(path)
                    .map((response: Response) => {
            return <IWorkshopInstance[]>response.json();
        }).catch(function(e){
			return Observable.empty<Response>();
		});
    }

	
	getLocations() {
        return this.http.get("https://pixelatedplanetservice.azurewebsites.net/api/Pixelated/Locations")
                    .map((response: Response) => {
            return <ILocation[]>response.json();
        }).catch(function(e){
			return Observable.empty<Response>();
		});
    }
	
	getWorkshopTypes() {
        return this.http.get("https://pixelatedplanetservice.azurewebsites.net/api/Pixelated/WorkshopTypes")
                    .map((response: Response) => {
            return <string[]>response.json();
        }).catch(function(e){
			return Observable.empty<Response>();
		});
    }

    getPhotographers() {

    }

    getWorkshopDetails(workshopId: string) {
        return this.http.get("/assets/ws-details.json")
                    .toPromise()
                    .then(res => <IWorkshopInstance> res.json().data)
                    .then(data => { return data; });
    }
}