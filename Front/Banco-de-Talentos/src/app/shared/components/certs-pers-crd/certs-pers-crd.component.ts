import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../../models/interfaces/talentResp.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FrmValService } from '../../service/frmVal/frm-val.service';

@Component({
  selector: 'shared-certs-pers-crd',
  templateUrl: './certs-pers-crd.component.html',
  styleUrls: ['./certs-pers-crd.component.scss'],
})
export class CertsPersCrdComponent implements OnInit {
  @Input()
  public documents: Document[] = [];

  public addFileDialog: boolean = false;

  public responsiveOptions: any[] = [];

  constructor(private fb: FormBuilder, private fValidator: FrmValService) {}

  public fileForm: FormGroup = this.fb.group({
    file: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },

      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  public onFileUpload(event: any) {
    console.log('Upload');
  }

  public onSveFile() {
    if (this.fileForm.invalid) {
      this.fileForm.markAllAsTouched();
      return;
    }
    console.log(this.fileForm.value);
  }

  public isValidFileField(field: string) {
    return this.fValidator.isValidField(this.fileForm, field);
  }

  public openAddFileDialog() {
    this.addFileDialog = true;
  }

  public hideAddFileDialog() {
    this.fileForm.reset();
    this.addFileDialog = false;
  }
}
