class ProjectInput
{
	templateEl: HTMLTemplateElement;

	hostEl: HTMLDivElement;

	elementEl: HTMLFormElement;

	titleEl :HTMLInputElement;

	descriptionEl :HTMLInputElement;

	peopleEl :HTMLInputElement;

	constructor()
	{
		this.templateEl = document.getElementById('project-input')! as HTMLTemplateElement; // get template (ID)

		this.hostEl = document.getElementById('app')! as HTMLDivElement; // get render div (ID)

		// import template elements 

		const importHTML  = document.importNode(this.templateEl.content, true);

		this.elementEl = importHTML.firstElementChild as HTMLFormElement;

		this.elementEl.id = 'user-input'; // calling a css (id here from css folder)

		// initialing fields for the form inputs

		this.titleEl = this.elementEl.querySelector('#title') as HTMLInputElement;

		this.descriptionEl = this.elementEl.querySelector('#description') as HTMLInputElement;

		this.peopleEl = this.elementEl.querySelector('#people') as HTMLInputElement;

		this.configure();

		this.attact();
	}


	private submitHandler(envent: Event)
	{
		envent.preventDefault();

		console.log(this.titleEl.value);
	}

	private configure()
	{
		this.elementEl.addEventListener('submit', this.submitHandler.bind(this));
	}

	private attact()
	{
		this.hostEl.insertAdjacentElement('afterbegin', this.elementEl);
	}
}

const render = new ProjectInput();