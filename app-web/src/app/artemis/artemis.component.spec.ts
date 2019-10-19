import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtemisComponent } from './artemis.component';

describe('ArtemisComponent', () => {
  let component: ArtemisComponent;
  let fixture: ComponentFixture<ArtemisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtemisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtemisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
