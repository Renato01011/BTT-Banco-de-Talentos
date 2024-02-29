import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtractFullNamePipe } from './extract-full-name.pipe';
import { ExtractJobPositionPipe } from './extract-job-position.pipe';
import { Base64ToImagePipe } from './base64-to-image.pipe';

@NgModule({
  declarations: [
    ExtractFullNamePipe,
    ExtractJobPositionPipe,
    Base64ToImagePipe,
  ],
  imports: [CommonModule],
  exports: [ExtractFullNamePipe, ExtractJobPositionPipe, Base64ToImagePipe],
})
export class PipesModule {}
