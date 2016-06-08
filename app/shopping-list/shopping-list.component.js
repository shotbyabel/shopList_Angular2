System.register(["@angular/core", "./shopping-new-item.component"], function(exports_1, context_1) {
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
    var core_1, shopping_new_item_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_new_item_component_1_1) {
                shopping_new_item_component_1 = shopping_new_item_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n\n        <section>\n          <shopping-new-item (itemAddedCustom)=\"onItemAdded($event)\"></shopping-new-item>\n        </section>\n\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n                <ul>\n                    <li *ngFor=\"let listItem of listItems\">{{listItem.name}} ({{listItem.amount}})</li>\n                </ul>\n            </div>\n        </section>\n\n        <section>\n            Edit items  \n        </section>\n\n",
                        directives: [shopping_new_item_component_1.ShoppingNewItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBQUE7b0JBRUUsY0FBUyxHQUFHLElBQUksS0FBSyxFQUFvQyxDQUFDO2dCQVE1RCxDQUFDO2dCQU5DLDJDQUFXLEdBQVgsVUFBWSxJQUFvQztvQkFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7Z0JBRTVELENBQUM7Z0JBaENIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBQyxvZUFtQlo7d0JBQ0QsVUFBVSxFQUFFLENBQUMsc0RBQXdCLENBQUM7cUJBQ3JDLENBQUM7O3lDQUFBO2dCQVlGLDRCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCx5REFVQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U2hvcHBpbmdOZXdJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy1uZXctaXRlbS5jb21wb25lbnRcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QnLFxuICAgIHRlbXBsYXRlOmBcblxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8c2hvcHBpbmctbmV3LWl0ZW0gKGl0ZW1BZGRlZEN1c3RvbSk9XCJvbkl0ZW1BZGRlZCgkZXZlbnQpXCI+PC9zaG9wcGluZy1uZXctaXRlbT5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGgzPk15IExpc3Q8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgbGlzdEl0ZW0gb2YgbGlzdEl0ZW1zXCI+e3tsaXN0SXRlbS5uYW1lfX0gKHt7bGlzdEl0ZW0uYW1vdW50fX0pPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIEVkaXQgaXRlbXMgIFxuICAgICAgICA8L3NlY3Rpb24+XG5cbmAsXG5kaXJlY3RpdmVzOiBbU2hvcHBpbmdOZXdJdGVtQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudHtcblxuICBsaXN0SXRlbXMgPSBuZXcgQXJyYXk8eyBuYW1lOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyIH0+KCk7XG5cbiAgb25JdGVtQWRkZWQoaXRlbToge25hbWU6IHN0cmluZywgYW1vdW50OiBudW1iZXJ9KSB7XG4gICAgdGhpcy5saXN0SXRlbXMucHVzaCh7bmFtZTppdGVtLm5hbWUsIGFtb3VudDppdGVtLmFtb3VudH0pO1xuXG4gIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
