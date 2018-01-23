import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

	@Input() closed:boolean;
	@Output() show: EventEmitter<boolean> = new EventEmitter<boolean>();
	protected showed: boolean;


  constructor() { }

  ngOnInit() {

  }
//Toggle sidebar
  showSideBar(){
  	this.showed = this.showed ? false : true;
  	this.show.emit(this.showed);
    this.showed = false;
  }

}
