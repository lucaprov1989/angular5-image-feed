import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramasListComponent } from './panoramas-list.component';

describe('PanoramasListComponent', () => {
  let component: PanoramasListComponent;
  let fixture: ComponentFixture<PanoramasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanoramasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoramasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
