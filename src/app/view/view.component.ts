import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-view',
  template: `
<div class="container">
  <h1>{{title}}</h1>
  <table style="width:100%">
    <tr>
      <th>Index</th>
      <th>Value</th>
    </tr>
    <tr *ngFor="let data of viewInputData">
      <td>{{data.option}}</td>
      <td >{{data.value}}</td>     
    </tr>
  </table>


</div><!--container-->
` ,
  styleUrls: ['./view.component.css']
})

export class ViewComponent {
  title = 'View Container';

  //Comes form the parent app-component
  @Input() viewInputData: { value: string, option: string }[] = []; 

}


