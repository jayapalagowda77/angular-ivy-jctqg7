import {
  AfterViewInit,
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  VERSION,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(ParentComponent) msgRef: ParentComponent;
  meesage: string;
  name = 'Angular ' + VERSION.major;

  // obj = {

  // }

  ngOnInit() {}

  ngAfterViewInit() {
    // this.meesage = this.msgRef.nativeElement.innerHTML;
    console.log('---', this.msgRef);
    // this.msgRef.sample = 253;
  }
}
