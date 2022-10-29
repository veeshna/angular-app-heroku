import { Component, OnInit } from '@angular/core';



type IAlsArray={
  image:string;
}

@Component({
  selector: 'app-bls',
  templateUrl: './bls.component.html',
  styleUrls: ['./bls.component.scss']
})
export class BlsComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
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

}
