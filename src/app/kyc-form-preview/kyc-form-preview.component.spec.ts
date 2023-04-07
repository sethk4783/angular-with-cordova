import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycFormPreviewComponent } from './kyc-form-preview.component';

describe('KycFormPreviewComponent', () => {
  let component: KycFormPreviewComponent;
  let fixture: ComponentFixture<KycFormPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycFormPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KycFormPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
