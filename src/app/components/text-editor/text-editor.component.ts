import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
    message: string;
    isDisabled: boolean;
    input: string;
    fontSize: number;

  constructor() {
    this.message = 'Enter the value';
    this.isDisabled = false;
    this.input = '';
    this.fontSize = 18.72;
   }

  increaseSize(){
      this.fontSize += 1;
   }

   decreaseSize(){
    this.fontSize -= 1;
 }

  ngOnInit(): void {
  }

}
