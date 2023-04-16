import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-input (sendData)="addData($event)" > </app-input>
  <app-view [viewInputData]="data"> </app-view>
` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProjectAnilAvciAdvanced';

  //stores the data from the input component
  data: { value: string, option: string }[] = [];

  //Emitter Event
  addData(addedData: { value: string, option: string }[]) {
    this.data = addedData;   
  }
}

