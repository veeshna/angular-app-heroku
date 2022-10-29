import { Component, OnInit } from '@angular/core';

type IAlsArray={
  image:string;
}

@Component({
  selector: 'app-als',
  templateUrl: './als.component.html',
  styleUrls: ['./als.component.scss']
})
export class AlsComponent implements OnInit {

  constructor() { }

images:IAlsArray[]=[
  {
  image:'assets/images/AED.png'
},
{
  image:'assets/images/Air conditioned.png'
},
{
  image:'assets/images/Auto loading stretcher.png'
},
{
  image:'assets/images/Defillberator.png'
},
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
  image:'assets/images/Portable suction kit.png'
},
{
  image:'assets/images/Stretcher.png'
},
{
  image:'assets/images/Syringe pump.png'
},
{
  image:'assets/images/wheelchair.png'
},
]

  ngOnInit(): void {
  }


}
