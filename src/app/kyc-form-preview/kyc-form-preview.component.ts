import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
	selector: 'app-kyc-form-preview',
	templateUrl: './kyc-form-preview.component.html',
	styleUrls: ['./kyc-form-preview.component.css']
})
export class KycFormPreviewComponent implements OnInit {

	data: any;

	constructor(private location: Location) { }

	ngOnInit(): void {
		this.data = this.location.getState();
	}

}
