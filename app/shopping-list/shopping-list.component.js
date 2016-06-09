System.register(["@angular/core", "./shopping-new-item.component", "./shopping-list-item.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shopping_new_item_component_1, shopping_list_item_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_new_item_component_1_1) {
                shopping_new_item_component_1 = shopping_new_item_component_1_1;
            },
            function (shopping_list_item_component_1_1) {
                shopping_list_item_component_1 = shopping_list_item_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    // listItems = new Array<{ name: string, amount: number }>();//OLD 
                    this.listItems = new Array(); //NEW
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onRemove = function (item) {
                    this.listItems.splice(this.listItems.indexOf(item), 1);
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n\n        <section>\n          <shopping-new-item (itemAddedCustom)=\"onItemAdded($event)\"></shopping-new-item>\n        </section>\n\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n                <ul>\n                    <li *ngFor=\"let listItem of listItems\" (click)=\"onSelect(listItem)\">\n                    {{listItem.name}} ({{listItem.amount}})</li>\n                </ul>\n            </div>\n        </section>\n\n        <section *ngIf=\"selectedItem !=null\">\n            <shopping-list-item [item]=\"selectedItem\" (removedCustom)=\"onRemove($event)\"></shopping-list-item> \n        </section>\n\n",
                        directives: [shopping_new_item_component_1.ShoppingNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQ0E7Z0JBQUE7b0JBRUUsbUVBQW1FO29CQUNuRSxjQUFTLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQyxDQUFDLEtBQUs7Z0JBcUIxQyxDQUFDO2dCQWhCQywyQ0FBVyxHQUFYLFVBQVksSUFBb0M7b0JBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO2dCQUU1RCxDQUFDO2dCQUVELHdDQUFRLEdBQVIsVUFBUyxJQUFjO29CQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUU3QixDQUFDO2dCQS9DSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUMsa3BCQW9CWjt3QkFDRyxVQUFVLEVBQUUsQ0FBQyxzREFBd0IsRUFBRSx3REFBeUIsQ0FBQztxQkFDcEUsQ0FBQzs7eUNBQUE7Z0JBMEJGLDRCQUFDO1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtZQXhCRCx5REF3QkMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1Nob3BwaW5nTmV3SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vc2hvcHBpbmctbmV3LWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdEl0ZW1Db21wb25lbnR9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3QtaXRlbS5jb21wb25lbnRcIlxuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSBcIi4uL2xpc3QtaXRlbVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdCcsXG4gICAgdGVtcGxhdGU6YFxuXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxzaG9wcGluZy1uZXctaXRlbSAoaXRlbUFkZGVkQ3VzdG9tKT1cIm9uSXRlbUFkZGVkKCRldmVudClcIj48L3Nob3BwaW5nLW5ldy1pdGVtPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDM+TXkgTGlzdDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBsaXN0SXRlbSBvZiBsaXN0SXRlbXNcIiAoY2xpY2spPVwib25TZWxlY3QobGlzdEl0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7bGlzdEl0ZW0ubmFtZX19ICh7e2xpc3RJdGVtLmFtb3VudH19KTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gKm5nSWY9XCJzZWxlY3RlZEl0ZW0gIT1udWxsXCI+XG4gICAgICAgICAgICA8c2hvcHBpbmctbGlzdC1pdGVtIFtpdGVtXT1cInNlbGVjdGVkSXRlbVwiIChyZW1vdmVkQ3VzdG9tKT1cIm9uUmVtb3ZlKCRldmVudClcIj48L3Nob3BwaW5nLWxpc3QtaXRlbT4gXG4gICAgICAgIDwvc2VjdGlvbj5cblxuYCxcbiAgICBkaXJlY3RpdmVzOiBbU2hvcHBpbmdOZXdJdGVtQ29tcG9uZW50LCBTaG9wcGluZ0xpc3RJdGVtQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudHtcblxuICAvLyBsaXN0SXRlbXMgPSBuZXcgQXJyYXk8eyBuYW1lOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyIH0+KCk7Ly9PTEQgXG4gIGxpc3RJdGVtcyA9IG5ldyBBcnJheTxMaXN0SXRlbT4oKTsgLy9ORVdcbiAgLy9uZXdcbiAgLy8gc2VsZWN0ZWRJdGVtOiB7bmFtZTogc3RyaW5nLCBhbW91bnQ6IG51bWJlcn0gLy9PTERcbiAgc2VsZWN0ZWRJdGVtOiBMaXN0SXRlbTsvL05FV1xuXG4gIG9uSXRlbUFkZGVkKGl0ZW06IHtuYW1lOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyfSkge1xuICAgIHRoaXMubGlzdEl0ZW1zLnB1c2goe25hbWU6aXRlbS5uYW1lLCBhbW91bnQ6aXRlbS5hbW91bnR9KTtcblxuICB9XG5cbiAgb25TZWxlY3QoaXRlbTogTGlzdEl0ZW0pIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gIH1cblxuICBvblJlbW92ZShpdGVtOiBMaXN0SXRlbSl7XG4gICAgICB0aGlzLmxpc3RJdGVtcy5zcGxpY2UodGhpcy5saXN0SXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG5cbiAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
