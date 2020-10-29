import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { HttpClientModule } from '@angular/common/http';

import { ListService } from './services/list.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { IconComponent } from './components/icon/icon.component';






@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    HeaderComponent,
    ContentComponent,
    IconComponent,
    

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
