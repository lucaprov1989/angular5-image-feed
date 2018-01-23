import { Component, OnInit, Input  } from '@angular/core';
import { Panoramas } from '../panoramas';
import { PanoramasService }  from '../panoramas.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-panoramas',
  templateUrl: './panoramas.component.html',
  styleUrls: ['./panoramas.component.css']
})
export class PanoramasComponent implements OnInit {

	 protected favorites: object[]; 
	 @Input() panoramas:Panoramas;
	 @Input() faves:object[];
	 @Input() get_favorites:boolean;

	constructor() { }
	//Get from localstorage
	ngOnInit() : void {
		this.favorites = [] ;
		for ( var i = 0, len = localStorage.length; i < len; ++i ) {
			let panoramaObj = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
  			this.favorites[localStorage.key( i )] = panoramaObj.favorite == true ? true : false;
		}	
	}

	//Like the panorama and set it to localstorage
	likeIt(panorama) : void {
		panorama.favorite = panorama.favorite  ? false : true;
		this.favorites[panorama.title] = panorama.favorite;
		localStorage.setItem(panorama.title, JSON.stringify(panorama));
	}

}
