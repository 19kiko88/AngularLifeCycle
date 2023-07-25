import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-second',
  templateUrl: './page-second.component.html',
  styleUrls: ['./page-second.component.scss']
})
export class PageSecondComponent {
  
  @Input() messageFromMain: string = '';

  constructor(){
    console.log('PageSecondComponent.constructor');
  }

  ngOnChanges(): void {
    console.log('PageSecondComponent.ngOnChanges');
  }

  ngOnInit(): void {
    console.log('PageSecondComponent.ngOnInit');  
  }

  ngDoCheck(): void {
    console.log('PageSecondComponent.ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('PageSecondComponent.ngAfterContentInit');        
  }

  ngAfterViewInit():void{
    console.log('PageSecondComponent.ngAfterViewInit');
  }
}
