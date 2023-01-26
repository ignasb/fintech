import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsRequestsComponent } from './transactions-requests.component';

describe('TransactionsRequestsComponent', () => {
  let component: TransactionsRequestsComponent;
  let fixture: ComponentFixture<TransactionsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
