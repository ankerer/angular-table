import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTable } from './data-table';

describe('DataTable', () => {
  let component: DataTable<unknown>;
  let fixture: ComponentFixture<DataTable<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTable]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DataTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
