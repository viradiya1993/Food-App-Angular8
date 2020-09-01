import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FoodService } from 'src/app/_service/food.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-select-food-modal',
  templateUrl: './select-food-modal.component.html',
  styleUrls: ['./select-food-modal.component.scss']
})
export class SelectFoodModalComponent {

  /** selected food for modal popup and items */
  @Input() selectedFood: any;
  @Input() addItems = [];

  constructor(private activeModal: NgbActiveModal,
    private foodService:FoodService) { }

  getTotalPrice(): number {
    let sum = this.addItems.reduce((s, f) => s + f.price, 0);
    return sum;
  }

  /** add remove extra item from array */
  onChangeItem(event, food): void {
    if (event.target.checked) {
      this.addItems.push({
        name: food.name,
        price: food.price
      })
    } else {
      this.addItems = _.select(this.addItems, function(item){
        return item.name != food.name
      });
    }
  }
  /** add item to basket */
  addToBasket(): void {
    this.foodService.selectedItems.next(this.addItems);
    this.activeModal.close();
  }
}
