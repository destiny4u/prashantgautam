import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from '../config/app.routing';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { ServicesComponent } from './services.component';
import { AchievementsComponent } from './achievements.component';
import { BlogComponent } from './blog.component';
import { ForumComponent } from './forum.component';
import { DatascienceComponent } from './datascience.component';
import { MachinelearningComponent } from './machinelearning.component';
import { EtlwarehouseComponent } from './etlwarehouse.component';
import { WebdevelopmentComponent } from './webdevelopment.component';
import { BusinessanalyticsComponent } from './businessanalytics.component';
import { ServermonitoringComponent } from './servermonitoring.component';
import { MailerService } from './mailer.service';
import { NotFoundComponent } from './notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    AchievementsComponent,
    BlogComponent,
    ForumComponent,
    AboutComponent,
    ContactComponent,
    DatascienceComponent,
    MachinelearningComponent,
    EtlwarehouseComponent,
    WebdevelopmentComponent,
    BusinessanalyticsComponent,
    ServermonitoringComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MailerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
