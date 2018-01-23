import { Component, EventEmitter, Output } from '@angular/core';
import { Panoramas } from './panoramas';
import { PanoramasService } from './panoramas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	protected closed: boolean;
	protected showed: boolean;
	protected list: boolean;
	protected show_favorites: boolean;
	protected panoramas : Panoramas;
	protected faves : any;

	constructor(
		private panoramasService: PanoramasService) { }

	ngOnInit() : void {
		this.getPanoramas();	
	}

	onClosing(closed: boolean):void {
		this.closed = closed;
	}

	onShowing(showed: boolean):void {
		this.closed = !showed;	
	}

	onSelectingList(filter):void {
		console.log(filter);
		this.list = filter.show_list;	
		this.show_favorites = filter.filterType == 'Favorites' ? true : false;
	}

	getPanoramas(): void {
		this.panoramasService.getPanoramas()
		.subscribe(panoramas=>{
			this.panoramas = panoramas;
		})
	}

	onGettingFaves(favesObj){

		this.faves = favesObj.faves;
		this.show_favorites = favesObj.filterType == 'Favorites' ? true : false;
	}
}
