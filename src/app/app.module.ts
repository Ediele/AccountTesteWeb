import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { ProfileListComponent } from './pages/profile/profile-list/profile-list.component';
import { ProfileDetailComponent } from './pages/profile/profile-detail/profile-detail.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { FooterComponent } from './navigation/footer/footer.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,    
    MenuComponent,
    UserListComponent,
    ProfileListComponent,
    ProfileDetailComponent,
    UserDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
