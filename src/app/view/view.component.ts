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
    <tr *ngFor="let data of viewDataArray">
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

  //Comes from the parent app-component
  @Input() viewDataArray: { value: string, option: string }[] = []; 

}


