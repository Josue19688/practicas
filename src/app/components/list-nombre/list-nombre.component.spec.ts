import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNombreComponent } from './list-nombre.component';

describe('ListNombreComponent', () => {
  let component: ListNombreComponent;
  let fixture: ComponentFixture<ListNombreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListNombreComponent]
    });
    fixture = TestBed.createComponent(ListNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
