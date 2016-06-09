import {Component, EventEmitter} from '@angular/core';
import {ListItem} from "../list-item"

@Component({
    selector: 'shopping-list-item',
    template: `
    
        <div class="input">
            <label for="item-name">Name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name">
        </div>

        <div class="input">
            <label for="item-amt">Amount</label>
            <input type="text" id="item-amt" [(ngModel)]="item.amount">
        </div>

<button class="danger" (click)="onDelete()">Delete Item</button>   
`,
inputs: [`item`],
outputs: ['removedCustom']
})

export class ShoppingListItemComponent {
//create empty item
    item = { name: '', amount: 0 };
//custom event to remove item.. use it for the onDelete method.. 
    removedCustom = new EventEmitter<ListItem>();

      onDelete(){
      this.removedCustom.emit(this.item);//to the item that we are GETTING passed in the inputs
        }



}

