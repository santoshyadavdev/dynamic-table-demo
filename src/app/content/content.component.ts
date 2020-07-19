import { Component, OnInit, Input } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  columnName = ['a', 'b', 'c', 'd'];

  columnData = [
    {
      a: 'hello',
      b: 'First',
      c: 'second',
      d: 'third'
    },
    {
      a: 'hello',
      b: 'this',
      c: 'is',
      d: 'test'
    },
    {
      a: 'hello',
      b: 'added',
      c: 'for',
      d: 'testing'
    }, {
      a: 'hello',
      b: 'First',
      c: 'second',
      d: 'third'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
