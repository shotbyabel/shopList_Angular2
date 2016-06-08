import {Component} from "@angular/core";
import {ShoppingNewItemComponent} from "./shopping-new-item.component";


@Component({
    selector: 'shopping-list',
    template:`

        <section>
          <shopping-new-item (itemAddedCustom)="onItemAdded($event)"></shopping-new-item>
        </section>

        <section>
            <h3>My List</h3>
            <div class="list">
                <ul>
                    <li *ngFor="let listItem of listItems">{{listItem.name}} ({{listItem.amount}})</li>
                </ul>
            </div>
        </section>

        <section>
            Edit items  
        </section>

`,
directives: [ShoppingNewItemComponent]
})

export class ShoppingListComponent{

  listItems = new Array<{ name: string, amount: number }>();

  onItemAdded(item: {name: string, amount: number}) {
    this.listItems.push({name:item.name, amount:item.amount});

  }


}