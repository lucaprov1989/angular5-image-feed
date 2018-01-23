import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PanoramasService } from './panoramas.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PanoramasComponent } from './panoramas/panoramas.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanoramasListComponent } from './panoramas-list/panoramas-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PanoramasComponent,
    TopbarComponent,
    SidebarComponent,
    PanoramasListComponent
  ],
  imports: [
    [BrowserModule, FormsModule],
    HttpClientModule,
  ],
  providers: [ PanoramasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
