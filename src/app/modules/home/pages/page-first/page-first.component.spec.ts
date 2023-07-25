import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFirstComponent } from './page-first.component';

describe('PageFirstComponent', () => {
  let component: PageFirstComponent;
  let fixture: ComponentFixture<PageFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageFirstComponent]
    });
    fixture = TestBed.createComponent(PageFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
