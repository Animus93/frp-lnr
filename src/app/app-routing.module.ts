import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewsItemPageComponent } from './pages/news-item-page/news-item-page.component';
import { ProgramItemPageComponent } from './pages/program-item-page/program-item-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';

const routes: Routes = [
  {
    path: 'frp-lnr.ru',
    component: MainPageComponent,
  },
  {
    path: 'frp-lnr.ru/program/:id',
    component: ProgramItemPageComponent,
  },
  {
    path: 'frp-lnr.ru/detail/:id',
    component: NewsItemPageComponent,
  },
  {
    path: 'frp-lnr.ru/jobs',
    component: JobsPageComponent,
  },
  {
    path: 'frp-lnr.ru/about',
    component: AboutPageComponent,
  },
  {
    path: 'frp-lnr.ru/:fragment',
    component: MainPageComponent,
  },
  {
    path: '**',
    redirectTo: 'frp-lnr.ru',
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
