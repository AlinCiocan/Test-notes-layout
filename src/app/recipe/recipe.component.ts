import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe;
  @Output() onHideNotes: EventEmitter<any> = new EventEmitter();
  showAllNotes: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  addNote() {
    const newNote = prompt('Add new note', 'My new note');
    // it's not my fault
    this.recipe.notes.push(newNote);
  }
  

  viewNotes() {
    this.showAllNotes = !this.showAllNotes;
  }
  
  hideNotes() {
    this.onHideNotes.emit(this.showAllNotes);
  }
}
