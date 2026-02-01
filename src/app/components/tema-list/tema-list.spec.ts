import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaList } from './tema-list';

describe('TemaList', () => {
  let component: TemaList;
  let fixture: ComponentFixture<TemaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemaList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
