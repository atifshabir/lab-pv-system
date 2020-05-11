import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcaMainComponent } from './lca-main.component';

describe('LcaMainComponent', () => {
  let component: LcaMainComponent;
  let fixture: ComponentFixture<LcaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
