
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import { MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavBarComponent,
    TabsComponent
  ],
  imports: [
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    BrowserModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

