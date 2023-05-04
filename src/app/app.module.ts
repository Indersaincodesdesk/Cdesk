import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OurWorkComponent } from './our-work/our-work.component';
import { TeamComponent } from './team/team.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { ShopifyComponent } from './shopify/shopify.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareerComponent } from './career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    OurWorkComponent,
    TeamComponent,
    JobApplyComponent,
    BlogComponent,
    PortfolioComponent,
    WebDesignComponent,
    WordpressComponent,
    ShopifyComponent,
    ContactComponent,
    BlogDetailsComponent,
    ServiceComponent,
    AboutUsComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
