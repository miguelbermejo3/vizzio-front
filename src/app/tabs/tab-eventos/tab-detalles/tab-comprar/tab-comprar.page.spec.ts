import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabComprarPage } from './tab-comprar.page';

describe('TabComprarPage', () => {
  let component: TabComprarPage;
  let fixture: ComponentFixture<TabComprarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComprarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
