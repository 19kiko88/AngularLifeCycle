import { AfterContentInit, Component, OnChanges, OnInit, DoCheck, AfterViewInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit {

  constructor(){
    console.log('MainComponent.constructor');
  }

  ngOnChanges(): void {
    console.log('MainComponent.ngOnChanges');
  }

  ngOnInit(): void {
    console.log('MainComponent.ngOnInit');  
  }

  ngDoCheck(): void {
    console.log('MainComponent.ngDoCheck');
  }

  ngAfterContentInit(): void {

    console.log('MainComponent.ngAfterContentInit');        
  }

  ngAfterViewInit():void{
    console.log('MainComponent.ngAfterViewInit');
  }

}
