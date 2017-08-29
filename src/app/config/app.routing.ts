import { RouterModule, Routes } from '@angular/router'

import { ServicesComponent } from '../controller/services.component';
import { AchievementsComponent } from '../controller/achievements.component';
import { BlogComponent } from '../controller/blog.component';
import { ForumComponent } from '../controller/forum.component';
import { HomeComponent } from '../controller/home.component';
import { AboutComponent } from '../controller/about.component';
import { ContactComponent } from '../controller/contact.component';
import { DatascienceComponent } from '../controller/datascience.component';
import { MachinelearningComponent } from '../controller/machinelearning.component';
import { EtlwarehouseComponent } from '../controller/etlwarehouse.component';
import { WebdevelopmentComponent } from '../controller/webdevelopment.component';
import { BusinessanalyticsComponent } from '../controller/businessanalytics.component';
import { ServermonitoringComponent } from '../controller/servermonitoring.component';
import { NotFoundComponent } from '../controller/notfound.component';

const APP_ROUTES: Routes = [
	{ path: 'achievements', component: AchievementsComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'blog', component: BlogComponent },
	{ path: 'forum', component: ForumComponent },
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'services/datascience', component: DatascienceComponent },
	{ path: 'services/machinelearning', component: MachinelearningComponent },
	{ path: 'services/etlwarehouse', component: EtlwarehouseComponent },
	{ path: 'services/webdevelopment', component: WebdevelopmentComponent },
	{ path: 'services/businessanalytics', component: BusinessanalyticsComponent },
	{ path: 'services/servermonitoring', component: ServermonitoringComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);