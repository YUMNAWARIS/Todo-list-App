import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo' 
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[] = [];
  inputTodo:string = "";

  constructor() { }
  ngOnInit(): void {
    this.todos = []
  }

  toggleDone(id:number){
    this.todos.map((v,i)=>{
      if (i == id) v.hasCompleted = !v.hasCompleted;
      return v;
    })
  }

  delete(id:number){
    this.todos = this.todos.filter((v,i)=> i !== id)
  }

  add(){
    this.todos.push({
      content:this.inputTodo,
      hasCompleted:false
    })
    this.inputTodo="";
  }
}
