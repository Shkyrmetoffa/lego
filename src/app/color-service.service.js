"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ColorServiceService = (function () {
    function ColorServiceService() {
        this.colors = [];
        this.colors = [
            'url(http://cs11079.vk.me/v11079510/6b4/Tt8t8J3wkfo.jpg)',
            'url(http://cs624625.vk.me/v624625803/13395/-uHZNv1UR9U.jpg)',
            'url(http://www.i-brick.ru/design/user/ibrick/images/footer-man.png)',
            'url(http://legocraft.ru/wp-content/uploads/2013/01/lego_8805_minifigures_sherlok_holms_serija_5.png)',
            'url(http://cs305513.vk.me/v305513443/49ba/EVWidNiZ-uQ.jpg)'
        ];
    }
    // private colors = ['FFFF00', '4B0082', '1E90FF', '4B0082', '1E90FF', '0000CD'];
    ColorServiceService.prototype.getRandomBackground = function () {
        var newColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        return newColor;
    };
    ColorServiceService = __decorate([
        core_1.Injectable()
    ], ColorServiceService);
    return ColorServiceService;
}());
exports.ColorServiceService = ColorServiceService;
//# sourceMappingURL=color-service.service.js.map