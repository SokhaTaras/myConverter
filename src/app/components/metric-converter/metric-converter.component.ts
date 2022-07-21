import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";


@Component({
  selector: 'app-metric-converter',
  templateUrl: './metric-converter.component.html',
  styleUrls: ['./metric-converter.component.css']
})
export class MetricConverterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((query:any) => {
      this.length = query.value || 1;
    })
  }

  length:number = 1;

  lengthChanged(myLength: any){
    const queryParams: Params = { value: myLength };

    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

}
