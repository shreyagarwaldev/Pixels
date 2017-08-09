import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './page-redirect.component.html',
    styleUrls: ['./page-redirect.component.css']    
})
export class PageRedirectComponent { 

    private sub: any;
constructor(
        private route: ActivatedRoute) {
    }
ngOnInit() {
        let url: string;
		this.sub = this.route.params.subscribe(params => {
       url = params['externalUrl'];
    });
	
	// navigate to the URL (Assumes the url is http:// or https://
	window.location.href = url;
	}
}