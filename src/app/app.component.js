"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var square_1 = require('./square');
var color_service_service_1 = require('./color-service.service');
var AppComponent = (function () {
    function AppComponent(_colorService) {
        this._colorService = _colorService;
        this.list = [];
        this.tempSell = {};
        this.count = 6;
        this.counter = 0;
        this.generateList(this.count);
    }
    AppComponent.prototype.generateList = function (count) {
        var tempSell = false;
        var cell = false;
        for (var i = 0; i < count; i++) {
            var elemColor = (i % 2 != 0) ? this.list[i - 1].color : false;
            this.list.push(this.createItem(i, elemColor));
            this.list.sort();
        }
    };
    AppComponent.prototype.createItem = function (index, elemColor) {
        return { color: elemColor || this._colorService.getRandomBackground(), isOpen: false, id: index, pair: false };
    };
    AppComponent.prototype.destroy = function (cell) {
        var _this = this;
        setTimeout(function () {
            if (!_this.tempSell.color) {
                _this.tempSell = cell;
            }
            else {
                if (_this.tempSell.color === cell.color) {
                    cell.isOpen = true;
                    _this.tempSell.isOpen = true;
                    _this.tempSell.pair = true;
                    cell.pair = true;
                    _this.counter += 2;
                    if (_this.counter === _this.count) {
                        _this.counter = 0;
                        alert('Next level');
                        _this.list = [];
                        _this.count += 6;
                        _this.generateList(_this.count);
                    }
                }
                else {
                    _this.tempSell.isOpen = false;
                    cell.isOpen = false;
                }
                _this.tempSell = {};
            }
        }, 1000);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [square_1.SquareComponent],
            providers: [color_service_service_1.ColorServiceService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map