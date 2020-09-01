import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/_service/food.service';

@Component({
  selector: 'app-checkout-basket',
  templateUrl: './checkout-basket.component.html',
  styleUrls: ['./checkout-basket.component.scss']
})
export class CheckoutBasketComponent implements OnInit {

  /** selected food list */
  selectedFoods: any = [];
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.foodService.selectedItems.subscribe(
      (selectFood) => {
        selectFood.forEach(element => {
          this.selectedFoods.push(element);
        });
      }
    );
  }

  /**
   * get list of item total
   */
  getTotalPrice(): number {
    let sum = this.selectedFoods.reduce((s, f) => s + f.price, 0);
    return sum;
  }
}
