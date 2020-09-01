import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/_service/food.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SelectFoodModalComponent } from '../select-food-modal/select-food-modal.component';

@Component({
  selector: 'app-food-basket',
  templateUrl: './food-basket.component.html',
  styleUrls: ['./food-basket.component.scss']
})
export class FoodBasketComponent implements OnInit{

  /**
   * foods Data
   */
  foods: any = [];

  constructor(private foodService:FoodService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    /** get foods list from service */
    this.foods = this.foodService.foods;
  }

  /**
   * open modal popup for select extra items
   */
  open(food): void {
    const modalRef = this.modalService.open(SelectFoodModalComponent);
    modalRef.componentInstance.selectedFood = food;
    modalRef.componentInstance.addItems = [{ name: food.name, price: food.price }];
  }

}
