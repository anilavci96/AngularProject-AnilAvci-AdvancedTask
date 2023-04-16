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

  //this array keeps the data form the user
  inputArray: { value: string, option: string }[] = [];

  @Output() sendData = new EventEmitter<{ value: string, option: string }[]>();
  private shouldEmit: boolean = true;

  addInputField() {
    this.stopEmitting();
    this.inputArray.push({ value: '', option: '' });
  }

  deleteInputField() {
    this.stopEmitting();
    this.inputArray.pop();
  }

  submit(): void {
    
    console.log('Data from input: ', this.inputArray);
    this.shouldEmit = true;
    if (this.shouldEmit) {
      //Emits the data
      this.sendData.emit(this.inputArray);
    }

  }

  stopEmitting(): void {
    this.shouldEmit = false;
    //to stop emitting when pressed something other than submit button
    this.sendData.emit();
  }

}
