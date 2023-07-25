import { Component } from '@angular/core';

@Component({
  selector: 'app-page-first',
  templateUrl: './page-first.component.html',
  styleUrls: ['./page-first.component.scss']
})
export class PageFirstComponent {

  constructor(){
    console.log('PageFirstComponent.constructor');
  }

  ngOnChanges(): void {
    console.log('PageFirstComponent.ngOnChanges');
  }

  ngOnInit(): void {
    console.log('PageFirstComponent.ngOnInit');  
  }

  // ngDoCheck(): void {
  //   console.log('PageFirstComponent.ngDoCheck');
  // }

  ngAfterContentInit(): void {
    console.log('PageFirstComponent.ngAfterContentInit');        
  }

  ngAfterViewInit():void{
    console.log('PageFirstComponent.ngAfterViewInit');
  }

}
