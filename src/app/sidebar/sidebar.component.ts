import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	public closed: boolean;
  public show_list: boolean;
  public viewType: string =  "Grid";
  public viewTypes: string[] = ["Grid", "List"];
  public filterType: string =  "All";
  public filterTypes: string[] = ["All", "Favorites"];
  public faves : object[];
  public ft : boolean;


	@Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() list: EventEmitter<any> = new EventEmitter<any>();
  @Output() favorites: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  	this.closed = false;
    this.list.emit(false);
  }
  //get favorites from localstorage
  getFaves(filterType): void {

    if(filterType == 'Favorites'){
      this.faves = [];

      for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        let panoramaObj = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
        if(panoramaObj.favorite == true){
          this.faves.push(panoramaObj);
        }

        
      }
      this.favorites.emit({faves: this.faves, filterType: this.filterType});
    }
    else {
      this.list.emit({show_list: this.show_list, filterType: this.filterType});
    } 
  }
//trigger change of view
  onChange(vt) : void {
    this.show_list = vt == 'List' ? true : false;
    this.list.emit({show_list: this.show_list, filterType: this.filterType});
    
  }
//close sidebar
  closeIt(){
  	this.closed = this.closed ? false : true;
  	this.close.emit(this.closed);
  }
}
