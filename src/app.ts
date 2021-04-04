
// autobind decorator

function Autobind(target: any, method:string, descriptor:PropertyDescriptor)
{
	const originalMethod = descriptor.value;

	const adjDescriptor: PropertyDescriptor ={

		configurable:true,

		get(){
			const boundFn = originalMethod.bind(this);

			return boundFn;
		}
	};	

	return adjDescriptor;
}

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

	private getUserInput():[string,string,number] | void
	{
		const endterTitle = this.titleEl.value;
		const endterdescription = this.descriptionEl.value;
		const endterpeople = this.peopleEl.value;

		return [endterTitle,endterdescription,+endterpeople];
	}

	@Autobind
	private submitHandler(envent: Event)
	{
		envent.preventDefault();

		const userInput = this.getUserInput();

		if(Array.isArray(userInput))
		{
			const [title,desc,people] = userInput;

			console.log(title,desc,people);

			this.clearInput();
		}
	}

	private clearInput()
	{
		this.titleEl.value ="";
		this.descriptionEl.value = "";
		this.peopleEl.value ="";
	}

	private configure()
	{
		this.elementEl.addEventListener('submit', this.submitHandler);
	}

	private attact()
	{
		this.hostEl.insertAdjacentElement('afterbegin', this.elementEl);
	}
}

const render = new ProjectInput();