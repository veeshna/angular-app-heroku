import { Component, OnInit } from '@angular/core';
type IAlsArray={
  image:string;
}
@Component({
  selector: 'app-pts',
  templateUrl: './pts.component.html',
  styleUrls: ['./pts.component.scss']
})
export class PtsComponent implements OnInit {

  images:IAlsArray[]=[
    {
      image:'assets/images/Emergency kit.png'
    },
    {
      image:'assets/images/Multipara monitor.png'
    },
    {
      image:'assets/images/Oxygen cylinder.png'
    },

    {
      image:'assets/images/Stretcher.png'
    },
    {
      image:'assets/images/wheelchair.png'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
