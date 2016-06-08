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
    var ShoppingNewItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingNewItemComponent = (function () {
                function ShoppingNewItemComponent() {
                    //**1**   
                    //what we ENTER in the <inputs> needs to be stored in an object in order for us to pass it over
                    //to the shopping-list.component (Parent Component)
                    this.item = { name: '', amount: 0 };
                }
                ShoppingNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-newItem',
                        template: "\n    \n        <div class=\"input\">\n            <label for=\"item-name\">Name</label>\n            <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n        </div>\n\n        <div class=\"input\">\n            <label for=\"item-amt\">Amount</label>\n            <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n        </div>\n\n<button (click)=\"onClick()\">Add Item</button>                \n\n\n",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingNewItemComponent);
                return ShoppingNewItemComponent;
            }());
            exports_1("ShoppingNewItemComponent", ShoppingNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbmV3SXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7b0JBQ0ssVUFBVTtvQkFDWCwrRkFBK0Y7b0JBQy9GLG1EQUFtRDtvQkFDbkQsU0FBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBTW5DLENBQUM7Z0JBOUJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLHFiQWViO3FCQUNBLENBQUM7OzRDQUFBO2dCQVlGLCtCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCwrREFVQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbmV3SXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1uZXdJdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1hbXRcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtdFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIj5cbiAgICAgICAgPC9kaXY+XG5cbjxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soKVwiPkFkZCBJdGVtPC9idXR0b24+ICAgICAgICAgICAgICAgIFxuXG5cbmAsXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdOZXdJdGVtQ29tcG9uZW50IHtcbiAgICAgLy8qKjEqKiAgIFxuICAgIC8vd2hhdCB3ZSBFTlRFUiBpbiB0aGUgPGlucHV0cz4gbmVlZHMgdG8gYmUgc3RvcmVkIGluIGFuIG9iamVjdCBpbiBvcmRlciBmb3IgdXMgdG8gcGFzcyBpdCBvdmVyXG4gICAgLy90byB0aGUgc2hvcHBpbmctbGlzdC5jb21wb25lbnQgKFBhcmVudCBDb21wb25lbnQpXG4gICAgaXRlbSA9IHsgbmFtZTogJycsIGFtb3VudDogMCB9O1xuXG5cblxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
