"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var SquareComponent = (function () {
    function SquareComponent() {
        this.remove = new core_2.EventEmitter();
    }
    SquareComponent.prototype.openColor = function () {
        this.cell.isOpen = !this.cell.isOpen;
        this.remove.emit({ cell: this.cell });
    };
    SquareComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_2.Input()
    ], SquareComponent.prototype, "cell");
    __decorate([
        core_2.Output()
    ], SquareComponent.prototype, "remove");
    SquareComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'square',
            templateUrl: 'square.component.html',
            styleUrls: ['square.component.css']
        })
    ], SquareComponent);
    return SquareComponent;
}());
exports.SquareComponent = SquareComponent;
//# sourceMappingURL=square.component.js.map