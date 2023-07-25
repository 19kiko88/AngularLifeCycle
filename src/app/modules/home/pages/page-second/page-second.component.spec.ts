import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSecondComponent } from './page-second.component';

describe('PageSecondComponent', () => {
  let component: PageSecondComponent;
  let fixture: ComponentFixture<PageSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSecondComponent]
    });
    fixture = TestBed.createComponent(PageSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
