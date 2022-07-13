import { Component } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: './home.component.html' ,
    styleUrls: ['./home.component.css']
})
export class HomeComponent{
    name: string;
    lastName: string;
    message: string;
    isDisabled: boolean;
    secretMessageBackgroundColor: string;
    secretMessageFontSize: number;
    pStyles: object;

    
    constructor(){
        this.name = 'Laura';
        this.lastName = 'Tomás';
        this.message = 'Enter the value';
        this.isDisabled = false;
        this.secretMessageBackgroundColor = 'aquamarine';
        this.secretMessageFontSize = 30;
        this.pStyles = {
            'font-size.px': this.secretMessageFontSize, 
            'background-color': this.secretMessageBackgroundColor
        }
    }

    sayHello(){
        this.secretMessageBackgroundColor = 'pink';
        alert('Hello ' + this.name);
    }

    printMessage() {
        alert('No se puede copiar este texto');
    }

    updateName(event: Event){
        console.log(event);
        //this.name = (<HTMLInputElement>event.target).value; //obtenemos el valor introducido y actualizo el name
        const currentInput = event.target as HTMLInputElement;
        this.name = currentInput.value;
    }

    isPepe(): boolean {
        return this.name === 'Pepe';
    }
}