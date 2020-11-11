import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListsComponent } from './lists/lists.component';
import {PostsService} from 'src/app/posts.service';
import {HttpClientModule} from '@angular/common/http';
import {Posts1Service} from 'src/app/posts1.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule, NgbModule
  ],
  providers: [PostsService,Posts1Service ],
  bootstrap: [AppComponent]
})
export class AppModule { }
