import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dr-app-layout';
  recipes = [{ description: 'My recipe', notes: ['hello', 'yellow'] }, { description: 'My recipe 222', notes: ['hello222'] }];
  notesHidden:boolean;
  notes: string[];
  
  setNotes(notes: string[]){
    this.notesHidden = !this.notesHidden
    this.notes = notes;
  }
}
