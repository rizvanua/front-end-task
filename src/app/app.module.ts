import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SearchComponent} from "./search/search.component";
import {HttpService} from "./services/HttpService";
import {OutputComponent} from "./output/output.component";
import {ObserveService} from "./services/Observe";
import {PagesComponent} from "./pages/pages.component";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
//import {PassClickService} from "./services/PassClickService";
import {PageResolver} from "./pages/page-resolver.service";
import { SelectedDirective } from './directives/selected.directive';
import { DropdownComponent } from './dropdown-list/dropdown/dropdown.component';
import { SimpleformComponent } from './simpleform/simpleform.component';

const appRoutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"page/:id",component:PagesComponent, /*resolve:{data:PageResolver}*/}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    OutputComponent,
    PagesComponent,
    SelectedDirective,
    DropdownComponent,
    SimpleformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService,ObserveService,/*PageResolver*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
