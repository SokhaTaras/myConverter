import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-speed-converter',
  templateUrl: './speed-converter.component.html',
  styleUrls: ['./speed-converter.component.css']
})
export class SpeedConverterComponent implements OnInit {

  constructor(private route: ActivatedRoute,private  router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((query:any) => {
      this.speed = query.value || 1;
    })
  }

  speed: number = 1;

  speedChamged(mySpeed:any){
    const queryParams: Params = { value: mySpeed };

    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

}
