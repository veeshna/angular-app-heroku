import { Component, OnInit } from '@angular/core';



type IAmbulance={
image:string;
title:string;
isClicked:boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  ambulances:IAmbulance[]=[
    { image:'assets/images/als.png',
      title:'ALS',
      isClicked:true,
    },
    {image:'assets/images/bls.png',
      title:'BLS',
      isClicked:false,
    },
    {image:'assets/images/ptv.png',
      title:'PTS',
      isClicked:false
    }

]
component='';
onswitch(title:string) {
  this.component=title;
  this.ambulances.forEach(element => {
    if(element.title==title){
      element.isClicked=!element.isClicked;
    }else{
      element.isClicked=false;
    }
  });

}
}
