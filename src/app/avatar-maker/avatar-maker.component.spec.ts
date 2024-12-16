import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarMakerComponent } from './avatar-maker.component';

describe('AvatarMakerComponent', () => {
  let component: AvatarMakerComponent;
  let fixture: ComponentFixture<AvatarMakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarMakerComponent]
    });
    fixture = TestBed.createComponent(AvatarMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
