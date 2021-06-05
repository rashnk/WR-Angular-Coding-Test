import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { UserComponent } from './user/user.component';
import {InputTextModule} from 'primeng/inputtext';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, TableModule, ButtonModule, DropdownModule,FormsModule,InputTextModule
  ]
})
export class HomeModule { }
