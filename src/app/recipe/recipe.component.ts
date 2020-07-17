import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe;
  @Output() onNoteAdded = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addNote() {
    const newNote = prompt('Add new note', 'My new note');
    // it's not my fault
    this.recipe.notes.push(newNote);
  }
}
