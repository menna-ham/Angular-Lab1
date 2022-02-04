import { Component, Input, OnInit, Output  ,EventEmitter} from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() parentData:string | undefined;
  @Output() chidEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  showName(){
    this.chidEvent.emit('Hello ' + this.parentData)
  }

}
