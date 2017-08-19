import {Injectable} from '@angular/core';
import {ILocation, IPhotographer} from '../workshops/workshopRepository'

@Injectable()
export class GlobalConstantsRepository
{
    private cdnBaseUrl;
    private serviceBaseUrl;
    private pixelatedPlanetAPIUrl;
    private locationsUrl;
    private workshopTypesUrl;
    private photographersUrl;
    private locations:ILocation[];
    private workshopTypes:string[];
    private photographers:IPhotographer[];
    private locationMap:any;

    constructor()
    {
        this.cdnBaseUrl = `https://pixelatedplanetcdn.azureedge.net`;
        this.serviceBaseUrl = `https://pixelatedplanetservice.azurewebsites.net`;
        this.pixelatedPlanetAPIUrl = `${this.serviceBaseUrl}/api/Pixelated`;
        this.locationsUrl = `${this.pixelatedPlanetAPIUrl}/Locations`;
        this.workshopTypesUrl = `${this.pixelatedPlanetAPIUrl}/WorkshopTypes`;
    }

    public getPixelatedPlanetAPIUrl()
    {
        return this.pixelatedPlanetAPIUrl;
    }

    public getLocationsUrl()
    {
        return this.locationsUrl;
    }

    public getWorkshopTypesUrl()
    {
        return this.workshopTypesUrl;
    }

    public resolveImageUrl(path:string)
    {
        return this.cdnBaseUrl + path;
    }

    public getLocations()
    {
        return this.locations;
    }
    
    public getWorkshopTypes()
    {
        return this.workshopTypes;
    }

    public setLocations(locations:ILocation[])
    {
        this.locationMap = new Map();
        for (var i = 0; i < locations.length; i++) {
            var location = <ILocation>locations[i];
            this.locationMap[location.locationId] = location;
        }

        this.locations = locations;
    }

    public getLocationByLocationId(value:any) : ILocation
    {
        if(typeof this.locationMap == "undefined" || this.locationMap == null){
            return null;
        }
        else{
            return this.locationMap[value];
        }
    }

    public setWorkshopTypes(workshopTypes:string[])
    {
        this.workshopTypes = workshopTypes;
    }
}