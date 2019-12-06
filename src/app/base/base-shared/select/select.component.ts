import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input('required') required: boolean = false;
  @Input('label') label: String;
  @Input('control') control: FormControl;
  @Input('formGroup') formGroup: FormGroup = new FormGroup({});
  @Input('valueKey') valueKey = 'id';
  @Input('labelKey') labelKey = 'name';
  @Input('name') name: string;
  @Input('visible') visible: boolean = true;

  constructor() { }

  ngOnInit() {
    if (!this.control) {
      this.control = new FormControl('');
      this.formGroup.addControl(this.name, this.control);
    }
  }

}
