import { Component, OnInit } from '@angular/core';
import {FoodService} from '../../_service/food.service'
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  /** get foods list */
  foods: any;

  constructor(private foodService:FoodService,
    private viewportScroller: ViewportScroller) { }

  public onClick(elementId: any): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
    this.foods = this.foodService.foods
  }

}
