import { Student } from './student/student.model';
import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jad exemple'

  students: Student[] = [
    { name: 'luke', isJedi: false },
    { name: 'leia', isJedi: true, temple: 'Curousan' },
    { name: 'frodo', isJedi: true, temple: 'Mordor' },

  ]

}
