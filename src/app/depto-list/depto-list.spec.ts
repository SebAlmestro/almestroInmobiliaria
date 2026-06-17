import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptoList } from './depto-list';

describe('DeptoList', () => {
  let component: DeptoList;
  let fixture: ComponentFixture<DeptoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeptoList],
    }).compileComponents();

    fixture = TestBed.createComponent(DeptoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
