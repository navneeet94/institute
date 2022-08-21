import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from 'src/app/routes/frontend/frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from 'src/app/features/pages/fd/home/home.component';
import { AboutComponent } from 'src/app/features/pages/fd/about/about.component';
import { HeaderComponent } from 'src/app/features/components/fd/header/header.component';
import { FooterComponent } from 'src/app/features/components/fd/footer/footer.component';
import { BannerComponent } from 'src/app/features/components/fd/banner/banner.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CounterComponent } from 'src/app/features/components/fd/counter/counter.component';

@NgModule({
  declarations: [
    FrontendComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    CarouselModule
  ]
})
export class FrontendModule { }
