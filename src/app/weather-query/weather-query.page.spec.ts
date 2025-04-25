import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherQueryPage } from './weather-query.page';

describe('WeatherQueryPage', () => {
  let component: WeatherQueryPage;
  let fixture: ComponentFixture<WeatherQueryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherQueryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
