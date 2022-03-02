import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserRoutingModule} from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment.prod";




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,ReactiveFormsModule,AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
  ]
})
export class UserModule { }
