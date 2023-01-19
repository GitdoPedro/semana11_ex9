import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges{
  public taskList: Array<any> = []
  public vazia: boolean = false
  public tarefa: any = ''

  ngOnChanges(){
    if ((this.taskList).length>0){
      
    }
    
  }

  adicionaTarefa(){
    this.taskList.push(this.tarefa)
    console.log(this.taskList)
    this.vazia = true
    console.log(this.vazia)
  }

}
