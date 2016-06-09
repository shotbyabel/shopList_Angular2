System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var ShoppingListItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListItemComponent = (function () {
                function ShoppingListItemComponent() {
                    //create empty item
                    this.item = { name: '', amount: 0 };
                    //custom event to remove item.. use it for the onDelete method.. 
                    this.removedCustom = new core_1.EventEmitter();
                }
                ShoppingListItemComponent.prototype.onDelete = function () {
                    this.removedCustom.emit(this.item); //to the item that we are GETTING passed in the inputs
                };
                ShoppingListItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-item',
                        template: "\n    \n        <div class=\"input\">\n            <label for=\"item-name\">Name</label>\n            <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n        </div>\n\n        <div class=\"input\">\n            <label for=\"item-amt\">Amount</label>\n            <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n        </div>\n\n<button class=\"danger\" (click)=\"onDelete()\">Delete Item</button>   \n",
                        inputs: ["item"],
                        outputs: ['removedCustom']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListItemComponent);
                return ShoppingListItemComponent;
            }());
            exports_1("ShoppingListItemComponent", ShoppingListItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFBQTtvQkFDQSxtQkFBbUI7b0JBQ2YsU0FBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ25DLGlFQUFpRTtvQkFDN0Qsa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQVksQ0FBQztnQkFRakQsQ0FBQztnQkFOSyw0Q0FBUSxHQUFSO29CQUNBLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLHNEQUFzRDtnQkFDdkYsQ0FBQztnQkE1QlQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUseWJBYWI7d0JBQ0QsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO3dCQUNoQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7cUJBQ3pCLENBQUM7OzZDQUFBO2dCQWNGLGdDQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCxpRUFZQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSBcIi4uL2xpc3QtaXRlbVwiXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1hbXRcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtdFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIj5cbiAgICAgICAgPC9kaXY+XG5cbjxidXR0b24gY2xhc3M9XCJkYW5nZXJcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZSBJdGVtPC9idXR0b24+ICAgXG5gLFxuaW5wdXRzOiBbYGl0ZW1gXSxcbm91dHB1dHM6IFsncmVtb3ZlZEN1c3RvbSddXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudCB7XG4vL2NyZWF0ZSBlbXB0eSBpdGVtXG4gICAgaXRlbSA9IHsgbmFtZTogJycsIGFtb3VudDogMCB9O1xuLy9jdXN0b20gZXZlbnQgdG8gcmVtb3ZlIGl0ZW0uLiB1c2UgaXQgZm9yIHRoZSBvbkRlbGV0ZSBtZXRob2QuLiBcbiAgICByZW1vdmVkQ3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbT4oKTtcblxuICAgICAgb25EZWxldGUoKXtcbiAgICAgIHRoaXMucmVtb3ZlZEN1c3RvbS5lbWl0KHRoaXMuaXRlbSk7Ly90byB0aGUgaXRlbSB0aGF0IHdlIGFyZSBHRVRUSU5HIHBhc3NlZCBpbiB0aGUgaW5wdXRzXG4gICAgICAgIH1cblxuXG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
