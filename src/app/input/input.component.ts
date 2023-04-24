import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `

  <div class="container">

  <div class="inputHeader">
    <h1>{{title}}</h1>
    <button (click)='addInputField()' class="add">+</button>
    <button (click)='deleteInputField()' class="delete">-</button>
    <button (click)='submit()' class="submit">Submit</button>
  </div><!--inputHeader-->

  <br />

  <div *ngFor="let input of inputArray;" class="inputField">
    <input [(ngModel)]="input.value" type="text">
    <select [(ngModel)]="input.option" class="dropdown">
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  </div><!--inputField-->

</div><!--container-->

  `,
  styleUrls: ['./input.component.css']
})

export class InputComponent {
  title = 'Input Container';

  //Array to store the data from the user
  inputArray: { value: string, option: string }[] = [];

  //Event Emitter to send the inputArray
  @Output() sendData = new EventEmitter<{ value: string, option: string }[]>();

  //Method to add a new input field, also stops emitting data
  addInputField() {
    this.stopEmitting();
    this.inputArray.push({ value: '', option: '' });
  }

  //Method to delete last input field, also stops emitting data
  deleteInputField() {
    this.stopEmitting();
    this.inputArray.pop();
  }

  submit(): void { 
    //Emits the data
    this.sendData.emit(this.inputArray);  

  }

  stopEmitting(): void {
    //Emits nothing
    this.sendData.emit();
  }

}
