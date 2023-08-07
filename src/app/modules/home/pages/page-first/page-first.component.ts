import { MainComponent } from './../main/main.component';
import { Component, ContentChild, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';

@Component({
  selector: 'app-page-first',
  templateUrl: './page-first.component.html',
  styleUrls: ['./page-first.component.scss']
})
export class PageFirstComponent {

  @Input() messageFromMain: string = '';
  @Input() displayTest: boolean = false;
  @ContentChild('content') private content:ElementRef|undefined //获取投影中的dom元素
  
  constructor(){
    console.log('PageFirstComponent.constructor');
  }

  ngOnChanges(): void {
    console.log('PageFirstComponent.ngOnChanges');
  }

  ngOnInit(): void {
    console.log('PageFirstComponent.ngOnInit');  
  }

  ngDoCheck(): void {
    console.log('PageFirstComponent.ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('PageFirstComponent.ngAfterContentInit', this.content?.nativeElement.innerText);
  }

  ngAfterViewInit():void{
    console.log('PageFirstComponent.ngAfterViewInit');
  }

}
