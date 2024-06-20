import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewsItemPageComponent } from './pages/news-item-page/news-item-page.component';
import { ProgramItemPageComponent } from './pages/program-item-page/program-item-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: 'main/program/:id',
    component: ProgramItemPageComponent,
  },
  {
    path: 'main/detail/:id',
    component: NewsItemPageComponent,
  },
  {
    path: 'main/news',
    component: NewsPageComponent,
  },
  {
    path: 'main/jobs',
    component: JobsPageComponent,
  },
  {
    path: 'main/about',
    component: AboutPageComponent,
  },
  {
    path: 'main/:fragment',
    component: MainPageComponent,
  },
  {
    path: '**',
    redirectTo: 'main',
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
