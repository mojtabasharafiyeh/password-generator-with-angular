import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  onChangeLength(value: string) {
    const parsed = parseInt(value);
    if (parsed !== null) {
      this.length = parsed;
    }
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick() {
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()_+';
    const letter = 'zxcvbnmasdfghjklqwertyuiop';
    let included = '';
    if (this.includeLetters) {
      included += letter;
    }
    if (this.includeNumbers) {
      included += numbers;
    }
    if (this.includeSymbols) {
      included += symbols;
    }
    let pass = '';
    for (let i = 0; i <= this.length; i++) {
      const index = Math.floor(Math.random() * included.length);
      pass += included[index];
    }
    this.password = pass;
  }
}
