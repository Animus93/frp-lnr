import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewsItemPageComponent } from './components/news-item-page/news-item-page.component';
import { ProgramItemPageComponent } from './components/program-item-page/program-item-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { JobsPageComponent } from './components/jobs-page/jobs-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'program',
    component: ProgramItemPageComponent,
  },
  {
    path: 'detail',
    component: NewsItemPageComponent,
  },
  {
    path: 'jobs',
    component: JobsPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: ':fragment',
    component: MainPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, {
    //   anchorScrolling: 'enabled',
    // }),
    RouterModule.forRoot(routes, routerOptions),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
