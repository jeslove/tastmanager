"use strict";
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
    ProjectInput.prototype.submitHandler = function (envent) {
        envent.preventDefault();
        console.log(this.titleEl.value);
    };
    ProjectInput.prototype.configure = function () {
        this.elementEl.addEventListener('submit', this.submitHandler.bind(this));
    };
    ProjectInput.prototype.attact = function () {
        this.hostEl.insertAdjacentElement('afterbegin', this.elementEl);
    };
    return ProjectInput;
}());
var render = new ProjectInput();
