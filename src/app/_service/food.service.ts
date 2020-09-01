import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  /**
   * foods list with extra items
   */
  foods = [
    {
      category: 'Bundle', id: 1,
      dishes: [
        {
          name: 'Family bundle', price: 10, id: 1,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'Margherita1', price: 75, id: 1 },
                { name: 'Margherita2', price: 70, id: 2 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Coca-cola', price: 15, id: 3 },
                { name: 'Thumbs-up', price: 20, id: 4 },
              ]
            }
          ]
        },
        {
          name: 'Meal deal 1', price: 15, id: 2,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'Double Cheese', price: 75, id: 5 },
                { name: 'Double Cheese', price: 70, id: 6 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Coca-cola', price: 15, id: 7 },
                { name: 'Thumbs-up', price: 20, id: 8 },
              ]
            }
          ]
        },
        {
          name: 'Meal deal 2', price: 20, id: 3,
            extraItem: [
              {
                name: 'Choose Your Second pizza',
                items: [
                  { name: 'Peppy Paneer', price: 75, id: 9 },
                  { name: 'Peppy Paneer', price: 70, id: 10 },
                ]
              },
              {
                name: 'Choose Your drink',
                items: [
                  { name: 'Coca-cola', price: 15, id: 11 },
                  { name: 'Thumbs-up', price: 20, id: 12 },
                ]
              }
            ]
        },
      ]
    },
    {
      category: 'Starters', id: 2,
      dishes: [
        {
          name: 'Family bundle', price: 10, id: 4,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'Mexican Green ', price: 75, id: 13 },
                { name: 'Mexican Green veg ', price: 70, id: 14 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Coca-cola', price: 15, id: 15 },
                { name: 'Pepsi', price: 20, id: 16 },
              ]
            }
          ]
        },
        {
          name: 'Family bundle', price: 10, id: 1,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'Deluxe Veggie', price: 75, id: 17 },
                { name: 'Deluxe Veggie', price: 70, id: 18 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Coca-cola', price: 15, id: 19 },
                { name: 'Thumbs-up', price: 20, id: 20 },
              ]
            }
          ]
        },
        {
          name: 'Family bundle', price: 10, id: 1,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'Veg Extravaganza', price: 75, id: 21 },
                { name: 'Veg Extravaganza', price: 70, id: 22 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Coca-cola', price: 15, id: 23 },
                { name: 'Thumbs-up', price: 20, id: 24 },
              ]
            }
          ]
        },
      ]
    },
    {
      category: 'Main Dishes', id: 'mainDishes',
      dishes: [
        {
          name: 'Family bundle', price: 10, id: 1,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'Double Cheese Margherita', price: 75, id: 3 },
                { name: 'Double Cheese Margherita', price: 70, id: 3 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Coca-cola', price: 15, id: 3 },
                { name: 'Thumbs-up', price: 20, id: 3 },
              ]
            }
          ]
        },
        {
          name: 'Family bundle', price: 10, id: 1,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'Farm House', price: 75, id: 3 },
                { name: 'Farm House', price: 70, id: 3 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Coca-cola', price: 15, id: 3 },
                { name: 'Thumbs-up', price: 20, id: 3 },
              ]
            }
          ]
        },
        {
          name: 'starter Meal deal 2', price: 11, id: 3,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'Margherita1', price: 75, id: 3 },
                { name: 'Margherita2', price: 70, id: 3 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Coca-cola', price: 15, id: 3 },
                { name: 'Thumbs-up', price: 20, id: 3 },
              ]
            }
          ]
        },
      ]
    },
    {
      name: 'Family bundle', price: 10, id: 1,
      extraItem: [
        {
          name: 'Choose Your Second pizza',
          items: [
            { name: 'Mexican Green Wave', price: 75, id: 3 },
            { name: 'Mexican Green Wave', price: 70, id: 3 },
          ]
        },
        {
          name: 'Choose Your drink',
          items: [
            { name: 'Coca-cola', price: 15, id: 3 },
            { name: 'Thumbs-up', price: 20, id: 3 },
          ]
        }
      ]
    },
    {
      category: 'Slides', id: 'slides',
      dishes: [
        {
          name: 'Family bundle', price: 10, id: 1,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'Deluxe Veggie', price: 75, id: 3 },
                { name: 'Deluxe Veggie', price: 70, id: 3 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Coca-cola', price: 15, id: 3 },
                { name: 'Thumbs-up', price: 20, id: 3 },
              ]
            }
          ]
        },
        {
          name: 'Family bundle', price: 10, id: 1,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'Deluxe Veggie', price: 75, id: 3 },
                { name: 'Deluxe Veggie', price: 70, id: 3 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Coca-cola', price: 15, id: 3 },
                { name: 'Thumbs-up', price: 20, id: 3 },
              ]
            }
          ]
        },
        {
          name: 'Family bundle', price: 10, id: 1,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'CHEESE N CORN', price: 75, id: 3 },
                { name: 'CHEESE N CORN', price: 70, id: 3 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Coca-cola', price: 15, id: 3 },
                { name: 'Thumbs-up', price: 20, id: 3 },
              ]
            }
          ]
        },
      ]
    },
    {
      category: 'Desserts', id: 'desserts',
      dishes: [
        {
          name: 'Family bundle', price: 10, id: 1,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'PANEER MAKHANI', price: 75, id: 3 },
                { name: 'PANEER MAKHANI', price: 70, id: 3 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Coca-cola', price: 15, id: 3 },
                { name: 'Thumbs-up', price: 20, id: 3 },
              ]
            }
          ]
        },
        {
          name: 'Family bundle', price: 10, id: 1,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'VEGGIE PARADISE', price: 75, id: 3 },
                { name: 'VEGGIE PARADISE', price: 70, id: 3 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Coca-cola', price: 15, id: 3 },
                { name: 'Thumbs-up', price: 20, id: 3 },
              ]
            }
          ]
        },
        {
          name: 'Family bundle', price: 10, id: 1,
          extraItem: [
            {
              name: 'Choose Your Second pizza',
              items: [
                { name: 'FRESH VEGGIE', price: 75, id: 3 },
                { name: 'FRESH VEGGIE', price: 70, id: 3 },
              ]
            },
            {
              name: 'Choose Your drink',
              items: [
                { name: 'Indi Tandoori Paneer', price: 15, id: 3 },
                { name: 'Indi Tandoori Paneer', price: 20, id: 3 },
              ]
            }
          ]
        },
      ]
    },
  ]

  // Subject for get item from selected list
  selectedItems = new Subject<any>();
}
