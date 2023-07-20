import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEnrollPage } from './admin-enroll.page';

describe('AdminEnrollPage', () => {
  let component: AdminEnrollPage;
  let fixture: ComponentFixture<AdminEnrollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminEnrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
