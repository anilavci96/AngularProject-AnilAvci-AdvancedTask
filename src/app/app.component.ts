import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-input (sendData)="setParentData($event)" > </app-input>
  <app-view [viewDataArray]="parentData"> </app-view>
` ,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngularProjectAnilAvciAdvanced';

  //Stores the data from the input component
  public parentData: { value: string, option: string }[] = [];

  //Set the parentData using Emitter Event
  setParentData(addedData: { value: string, option: string }[]) {
    this.parentData = addedData;   
  }
}

