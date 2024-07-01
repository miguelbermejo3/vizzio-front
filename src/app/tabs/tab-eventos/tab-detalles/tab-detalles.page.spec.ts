import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabDetallesPage } from './tab-detalles.page';

describe('TabDetallesPage', () => {
  let component: TabDetallesPage;
  let fixture: ComponentFixture<TabDetallesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
