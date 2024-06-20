import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderTopComponent } from './components/header/header-top/header-top.component';
import { ContactsComponent } from './components/header/header-top/contacts/contacts.component';
import { HeaderBottomComponent } from './components/header/header-bottom/header-bottom.component';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';
import { HotNewsComponent } from './components/hot-news/hot-news.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { QuillModule } from 'ngx-quill';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { ProgramsComponent } from './components/programs/programs.component';
import { ProgramItemComponent } from './components/program-item/program-item.component';
import { NewsItemPageComponent } from './pages/news-item-page/news-item-page.component';
import { ProgramItemPageComponent } from './pages/program-item-page/program-item-page.component';
import { NoPageComponent } from './components/no-page/no-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobsItemComponent } from './components/jobs-item/jobs-item.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LinksComponent } from './components/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    HeaderTopComponent,
    ContactsComponent,
    HeaderBottomComponent,
    MenuMobileComponent,
    HotNewsComponent,
    NewsItemComponent,
    FooterComponent,
    MaxLengthPipe,
    ProgramsComponent,
    ProgramItemComponent,
    NewsItemPageComponent,
    ProgramItemPageComponent,
    NoPageComponent,
    AboutPageComponent,
    JobsPageComponent,
    JobsComponent,
    JobsItemComponent,
    NewsPageComponent,
    LoaderComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
