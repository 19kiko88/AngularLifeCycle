import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  constructor(){
    console.log('TestComponent.constructor');
  }

  ngOnChanges(): void {
    console.log('TestComponent.ngOnChanges');
  }

  ngOnInit(): void {
    console.log('TestComponent.ngOnInit');  
  }

  ngDoCheck(): void {
    console.log('TestComponent.ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('TestComponent.ngAfterContentInit');        
  }

  ngAfterViewInit():void{
    console.log('TestComponent.ngAfterViewInit');
  }
}
