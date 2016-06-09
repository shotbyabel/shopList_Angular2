import {Component} from "@angular/core";
import {ShoppingNewItemComponent} from "./shopping-new-item.component";
import {ShoppingListItemComponent} from "./shopping-list-item.component"
import {ListItem} from "../list-item";


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
                    <li *ngFor="let listItem of listItems" (click)="onSelect(listItem)">
                    {{listItem.name}} ({{listItem.amount}})</li>
                </ul>
            </div>
        </section>

        <section *ngIf="selectedItem !=null">
            <shopping-list-item [item]="selectedItem" (removedCustom)="onRemove($event)"></shopping-list-item> 
        </section>

`,
    directives: [ShoppingNewItemComponent, ShoppingListItemComponent]
})

export class ShoppingListComponent{

  // listItems = new Array<{ name: string, amount: number }>();//OLD 
  listItems = new Array<ListItem>(); //NEW
  //new
  // selectedItem: {name: string, amount: number} //OLD
  selectedItem: ListItem;//NEW

  onItemAdded(item: {name: string, amount: number}) {
    this.listItems.push({name:item.name, amount:item.amount});

  }

  onSelect(item: ListItem) {
    this.selectedItem = item;
  }

  onRemove(item: ListItem){
      this.listItems.splice(this.listItems.indexOf(item), 1);
      this.selectedItem = null;

  }


}