import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHomeDialogComponent } from './list-home-dialog.component';

describe('ListHomeDialogComponent', () => {
  let component: ListHomeDialogComponent;
  let fixture: ComponentFixture<ListHomeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHomeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
