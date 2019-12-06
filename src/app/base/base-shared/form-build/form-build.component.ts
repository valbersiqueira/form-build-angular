import { Component, OnInit, Input, ViewChildren, QueryList, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldContainerComponent } from '../field-build/field-container.component';

export enum FormItemType {
  TEXT = 'TEXT',
  SELECT = 'SELECT',
  TEXT_AREA = 'TEXT_AREA'
}

export interface FormBuildConfig {
  control: FormControl;
  type: FormItemType;
  columnXl?: number,
  columnLg?: number,
  columnMd?: number,
  columnSm?: number,
  params?: any;
}

export interface Column {
  
}

@Component({
  selector: 'app-form-build',
  templateUrl: './form-build.component.html',
  styleUrls: ['./form-build.component.scss'],
})
export class FormBuildComponent implements OnInit {

  @Input('fieldsConfig') fieldsConfig: FormBuildConfig[] = [];
  @ViewChildren(FieldContainerComponent) fields: QueryList<FieldContainerComponent>;
  columns: string;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.injectParams();
    })
  }

  private injectParams() {
    this.fields.forEach((field, index) => {
      const fieldConfig = this.fieldsConfig[index];
      field.instanceRef['control'] = fieldConfig.control;
      const params = fieldConfig.params;
      if (params) {
        for (const param in params) {
          if (params.hasOwnProperty(param)) {
            field.instanceRef[param] = params[param];
          }
        }
      }
    });
  }

  setInjectParam(position: number, params?: any) {
    const field = this.fields.find((element, index) => index == position);
    if (params) {
      for (const param in params) {
        if (params.hasOwnProperty(param)) {
          field.instanceRef[param] = params[param];
        }
      }
    }
    this.fields.notifyOnChanges();
  }

  getColumns(cf: FormBuildConfig) {
    return `col-xl-${ cf.columnXl || 12 }
            col-lg-${ cf.columnLg || 12 }
            col-md-${ cf.columnMd || 12 }
            col-sm-${ cf.columnSm || 12 }`;
  }

}
