import { AfterContentInit, Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit {

  qqq: string = '';

  constructor(){
    console.log('AppComponent constructor.')
  }

  ngOnChanges(): void {
    console.log('AppComponent ngOnChanges.');
  }

  ngOnInit(): void {
    console.log('AppComponent ngOnInit.')    
  }

  ngDoCheck(): void {
    console.log('AppComponent ngDoCheck.')  
  }

  ngAfterContentInit(): void {
    console.log('AppComponent ngAfterContentInit.')        
  }

  title = 'AngularLifeCycle';
}
