import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown.component';
import {MatFormFieldModule, MatSelectModule, MatSidenavModule} from '@angular/material';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    DropdownRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class DropdownModule { }
