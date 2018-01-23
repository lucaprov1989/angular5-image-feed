import { Component, OnInit, Input } from '@angular/core';
import { Panoramas } from '../panoramas';
import { PanoramasService }  from '../panoramas.service';
@Component({
  selector: 'app-panoramas-list',
  templateUrl: './panoramas-list.component.html',
  styleUrls: ['./panoramas-list.component.scss']
})
export class PanoramasListComponent implements OnInit {

	 @Input() panoramas:Panoramas;
	 @Input() faves:object[];
	 @Input() get_favorites:boolean;

  constructor() { }

  ngOnInit() {


  }



}
