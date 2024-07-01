import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabEventosPage } from './tab-eventos.page';

describe('TabEventosPage', () => {
  let component: TabEventosPage;
  let fixture: ComponentFixture<TabEventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
