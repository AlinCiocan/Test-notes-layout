import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe;
  @Input() hasSelectedRecipe: boolean;
  @Input() notesShown: boolean;
  @Output() onViewNotes: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addNote() {
    const newNote = prompt('Add new note', 'My new note');
    // it's not my fault
    this.recipe.notes.push(newNote);
  }

  viewNotes() {
    
    this.onViewNotes.emit(this.recipe);
  }

  hideNotes() {
    
    this.onViewNotes.emit(null);
  }

  shouldShow(): boolean{
    debugger;
    return this.notesShown || !this.hasSelectedRecipe
  }
}
