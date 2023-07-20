import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Enroll2Page } from './enroll2.page';

describe('Enroll2Page', () => {
  let component: Enroll2Page;
  let fixture: ComponentFixture<Enroll2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Enroll2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
