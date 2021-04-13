import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { person2} from './person2.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personas: Persona[]=[new Persona('Josue','Rocha'),
  new Persona('Jorge','Miranda'),
  new Persona('Eduardo','Rocha')];
  title = 'Listado-personas';

  person =new person2('','');

  nameInput:string='';
  lastnameInput:string='';

  nombreInput: string='';
  apellidoInput: string='';


  agregarPersona(){
    let persona1=new Persona(this.nombreInput,this.apellidoInput);
    this.personas.push(persona1);
  }
  agregarPersona2(){
     let person1=new person2(this.nameInput,this.lastnameInput);
     this.person=person1;
  }


}

