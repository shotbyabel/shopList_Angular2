import {Component, EventEmitter} from '@angular/core';


@Component({
    selector: 'shopping-new-item',
    template: `
    
        <div class="input">
            <label for="item-name">Name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name">
        </div>

        <div class="input">
            <label for="item-amt">Amount</label>
            <input type="text" id="item-amt" [(ngModel)]="item.amount">
        </div>

<button (click)="onClick()">Add Item</button>                


`,
    outputs: ['itemAddedCustom']
})

export class ShoppingNewItemComponent {
    //**1**   
    //what we ENTER in the <inputs> needs to be stored in an object in order for us to pass it over
    //to the shopping-list.component (Parent Component)
    item = { name: '', amount: 0 };
    //CUSTOM EVENT --> will fire an event for the shopping-list.component to "listen" for
    itemAddedCustom = new EventEmitter<{ name: '', amount: 0 }>();

    onClick(){
        this.itemAddedCustom.emit(this.item);

    }



}