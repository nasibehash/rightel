import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NiBreadcrumbComponent } from './ni-breadcrumb.component';

describe('NiBreadcrumbComponent', () => {
  let component: NiBreadcrumbComponent;
  let fixture: ComponentFixture<NiBreadcrumbComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NiBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
