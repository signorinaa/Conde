import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmitformPage } from './submitform.page';

describe('SubmitformPage', () => {
  let component: SubmitformPage;
  let fixture: ComponentFixture<SubmitformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubmitformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
