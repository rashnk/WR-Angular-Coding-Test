import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TableModule } from 'primeng/table';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, TableModule
  ]
})
export class HomeModule { }
