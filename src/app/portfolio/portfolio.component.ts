// import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slideConfig = {
    "slidesToShow": 1.68,
      "dots": false,
      "arrows": true,
      "infinite": true,
      "slidesToScroll": 1,
      "centerMode": false,
      "centerPadding": '0px',
      "swipe":true,
      "swipeToSlide":false,
      "prevArrow": '<button class="slick-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></button>',
      "nextArrow": '<button class="slick-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1.6,
            slidesToScroll: 1,
            centerPadding: '80px',
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.4,
            slidesToScroll: 1,
            centerPadding: '40px',
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1,
            centerPadding: '50px',
          }
        }
      ]
    };
}
