import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewsItemPageComponent } from './pages/news-item-page/news-item-page.component';
import { ProgramItemPageComponent } from './pages/program-item-page/program-item-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';

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
