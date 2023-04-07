import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kyc-form',
  templateUrl: './kyc-form.component.html',
  styleUrls: ['./kyc-form.component.css']
})
export class KycFormComponent implements OnInit {

  constructor(private router: Router) { }

  kycForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    addressLine1: new FormControl(''),
    addressLine2: new FormControl(''),
    addressCity: new FormControl(''),
    addressState: new FormControl(''),
    addressPincode: new FormControl(''),
    address2Line1: new FormControl(''),
    address2Line2: new FormControl(''),
    address2City2: new FormControl(''),
    address2State2: new FormControl(''),
    address2Pincode2: new FormControl(''),
    imageURL: new FormControl(''),
    audioURL: new FormControl('')
  });

  ngOnInit(): void {
  }

  openCamera() {
    const nav = navigator as any;
    nav.camera.getPicture((image: any) => {
      this.kycForm.patchValue({ imageURL: 'data:image/jpeg;base64,' + image });
    }, this.onCameraFail, {
      quality: 100,
      destinationType: 0,
    });
  }

  onCameraFail(error: any) {
    alert('Camera error: ' + JSON.stringify(error));
  }

  startRecording() {
    const nav = navigator as any;
    nav.device.capture.captureAudio((audio: any) => {
      this.kycForm.patchValue({ audioURL: audio[0]?.localURL });
    }, this.onAudioRecodersError, {
      limit: 1,
    });
  }

  onAudioRecodersError(error: any) {
    alert('Audio recoder error: ' + JSON.stringify(error));
  }

  submitKycForm() {
    if (this.kycForm.valid) {
      this.router.navigateByUrl('/kyc-form-preview', { state: this.kycForm.value });
    }
  }
}
