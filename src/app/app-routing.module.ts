import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
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

const routes: Routes = [
  {path: '' , component: HomepageComponent},
  {path: 'our-work' , component: OurWorkComponent},
  {path: 'team' , component: TeamComponent},
  {path: 'job-apply' , component: JobApplyComponent},
  {path: 'blog' , component: BlogComponent},
  {path: 'portfolio' , component: PortfolioComponent},
  {path: 'web-design' , component: WebDesignComponent},
  {path: 'wordpress' , component: WordpressComponent},
  {path: 'shopify' , component: ShopifyComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'blog-deatils' , component: BlogDetailsComponent},
  {path: 'service' , component: ServiceComponent},
  {path: 'about-us' , component: AboutUsComponent},
  {path: 'career' , component: CareerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
