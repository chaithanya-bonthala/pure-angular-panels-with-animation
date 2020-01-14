import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PanelComponent } from './panel/panel.component';
import { PanelLeftComponent } from './panel/panel-left/panel-left.component';
import { PanelRightComponent } from './panel/panel-right/panel-right.component';
import { PanelTopComponent } from './panel/panel-top/panel-top.component';
import { PanelBottomComponent } from './panel/panel-bottom/panel-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    PanelLeftComponent,
    PanelRightComponent,
    PanelTopComponent,
    PanelBottomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
