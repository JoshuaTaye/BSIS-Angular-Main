import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDuplicatesComponent } from './find-duplicates.component';

describe('FindDuplicatesComponent', () => {
  let component: FindDuplicatesComponent;
  let fixture: ComponentFixture<FindDuplicatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindDuplicatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindDuplicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
