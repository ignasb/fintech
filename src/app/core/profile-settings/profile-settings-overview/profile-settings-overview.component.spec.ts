import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsOverviewComponent } from './profile-settings-overview.component';

describe('ProfileSettingsOverviewComponent', () => {
  let component: ProfileSettingsOverviewComponent;
  let fixture: ComponentFixture<ProfileSettingsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSettingsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSettingsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
