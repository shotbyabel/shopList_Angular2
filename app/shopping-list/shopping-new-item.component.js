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
                    //CUSTOM EVENT --> will fire an event for the shopping-list.component to "listen" for
                    this.itemAddedCustom = new core_1.EventEmitter();
                }
                ShoppingNewItemComponent.prototype.onClick = function () {
                    this.itemAddedCustom.emit(this.item);
                };
                ShoppingNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-new-item',
                        template: "\n    \n        <div class=\"input\">\n            <label for=\"item-name\">Name</label>\n            <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n        </div>\n\n        <div class=\"input\">\n            <label for=\"item-amt\">Amount</label>\n            <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n        </div>\n\n<button (click)=\"onClick()\">Add Item</button>                \n\n\n",
                        outputs: ['itemAddedCustom']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingNewItemComponent);
                return ShoppingNewItemComponent;
            }());
            exports_1("ShoppingNewItemComponent", ShoppingNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbmV3LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBO2dCQUFBO29CQUNJLFVBQVU7b0JBQ1YsK0ZBQStGO29CQUMvRixtREFBbUQ7b0JBQ25ELFNBQUksR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUMvQixxRkFBcUY7b0JBQ3JGLG9CQUFlLEdBQUcsSUFBSSxtQkFBWSxFQUEyQixDQUFDO2dCQVNsRSxDQUFDO2dCQVBHLDBDQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV6QyxDQUFDO2dCQWhDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSxxYkFlYjt3QkFDRyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztxQkFDL0IsQ0FBQzs7NENBQUE7Z0JBaUJGLCtCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCwrREFlQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbmV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1uZXctaXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tYW10XCI+QW1vdW50PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1hbXRcIiBbKG5nTW9kZWwpXT1cIml0ZW0uYW1vdW50XCI+XG4gICAgICAgIDwvZGl2PlxuXG48YnV0dG9uIChjbGljayk9XCJvbkNsaWNrKClcIj5BZGQgSXRlbTwvYnV0dG9uPiAgICAgICAgICAgICAgICBcblxuXG5gLFxuICAgIG91dHB1dHM6IFsnaXRlbUFkZGVkQ3VzdG9tJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ05ld0l0ZW1Db21wb25lbnQge1xuICAgIC8vKioxKiogICBcbiAgICAvL3doYXQgd2UgRU5URVIgaW4gdGhlIDxpbnB1dHM+IG5lZWRzIHRvIGJlIHN0b3JlZCBpbiBhbiBvYmplY3QgaW4gb3JkZXIgZm9yIHVzIHRvIHBhc3MgaXQgb3ZlclxuICAgIC8vdG8gdGhlIHNob3BwaW5nLWxpc3QuY29tcG9uZW50IChQYXJlbnQgQ29tcG9uZW50KVxuICAgIGl0ZW0gPSB7IG5hbWU6ICcnLCBhbW91bnQ6IDAgfTtcbiAgICAvL0NVU1RPTSBFVkVOVCAtLT4gd2lsbCBmaXJlIGFuIGV2ZW50IGZvciB0aGUgc2hvcHBpbmctbGlzdC5jb21wb25lbnQgdG8gXCJsaXN0ZW5cIiBmb3JcbiAgICBpdGVtQWRkZWRDdXN0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHsgbmFtZTogJycsIGFtb3VudDogMCB9PigpO1xuXG4gICAgb25DbGljaygpe1xuICAgICAgICB0aGlzLml0ZW1BZGRlZEN1c3RvbS5lbWl0KHRoaXMuaXRlbSk7XG5cbiAgICB9XG5cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
