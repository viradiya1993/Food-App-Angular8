import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SelectFoodModalComponent } from './components/select-food-modal/select-food-modal.component';
import { FoodBasketComponent } from './components/food-basket/food-basket.component';
import { CheckoutBasketComponent } from './components/checkout-basket/checkout-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectFoodModalComponent,
    FoodBasketComponent,
    CheckoutBasketComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SelectFoodModalComponent]
})
export class AppModule { }
