"use strict";
// autobind decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Autobind(target, method, descriptor) {
    var originalMethod = descriptor.value;
    var adjDescriptor = {
        configurable: true,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateEl = document.getElementById('project-input'); // get template (ID)
        this.hostEl = document.getElementById('app'); // get render div (ID)
        // import template elements 
        var importHTML = document.importNode(this.templateEl.content, true);
        this.elementEl = importHTML.firstElementChild;
        this.elementEl.id = 'user-input'; // calling a css (id here from css folder)
        // initialing fields for the form inputs
        this.titleEl = this.elementEl.querySelector('#title');
        this.descriptionEl = this.elementEl.querySelector('#description');
        this.peopleEl = this.elementEl.querySelector('#people');
        this.configure();
        this.attact();
    }
    ProjectInput.prototype.getUserInput = function () {
        var endterTitle = this.titleEl.value;
        var endterdescription = this.descriptionEl.value;
        var endterpeople = this.peopleEl.value;
        return [endterTitle, endterdescription, +endterpeople];
    };
    ProjectInput.prototype.submitHandler = function (envent) {
        envent.preventDefault();
        var userInput = this.getUserInput();
        if (Array.isArray(userInput)) {
            var title = userInput[0], desc = userInput[1], people = userInput[2];
            console.log(title, desc, people);
            this.clearInput();
        }
    };
    ProjectInput.prototype.clearInput = function () {
        this.titleEl.value = "";
        this.descriptionEl.value = "";
        this.peopleEl.value = "";
    };
    ProjectInput.prototype.configure = function () {
        this.elementEl.addEventListener('submit', this.submitHandler);
    };
    ProjectInput.prototype.attact = function () {
        this.hostEl.insertAdjacentElement('afterbegin', this.elementEl);
    };
    __decorate([
        Autobind,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ProjectInput.prototype, "submitHandler", null);
    return ProjectInput;
}());
var render = new ProjectInput();
