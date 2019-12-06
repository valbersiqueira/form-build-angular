import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldContainerComponent } from './field-build/field-container.component';
import { FormBuildComponent } from './form-build/form-build.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { SelectComponent } from './select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FieldContainerComponent,
    FormBuildComponent,
    InputFieldComponent,
    SelectComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    FieldContainerComponent,
    FormBuildComponent,
    InputFieldComponent,
    SelectComponent
  ]
})
export class BaseSharedModule { }
