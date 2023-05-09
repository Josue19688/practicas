import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHijoComponent } from './padre-hijo.component';

describe('PadreHijoComponent', () => {
  let component: PadreHijoComponent;
  let fixture: ComponentFixture<PadreHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadreHijoComponent]
    });
    fixture = TestBed.createComponent(PadreHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
