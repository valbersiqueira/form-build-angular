import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit, OnChanges {

  @Input() name: string;  
  @Input() control: FormControl;
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() type: string = 'text';
  @Input() label: string = 'label'
  constructor() { }

  ngOnInit() {
    if (!this.control) {
        this.control = new FormControl(''); 
        this.formGroup.addControl(this.name, this.control);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('log..' + changes);
  }

}
