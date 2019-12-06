import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuildComponent, FormBuildConfig, FormItemType } from 'src/app/base/base-shared/form-build/form-build.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('instanceForm', {static: true}) instanceForm: FormBuildComponent; 

  form: FormGroup = new FormGroup ({
    registro: new FormControl(null),
    usuario: new FormControl(null),
    senha: new FormControl(null),
    empresa: new FormControl(null),
  })

  options =[{'id': 1, name: 'valber'}, {id: 2, name: 'tufas'}]

  fields: FormBuildConfig[] = [
    {
      control: this.form.get('registro') as FormControl,
      type: FormItemType.TEXT,
      params: {
        label: 'Registro'
      }
    },
    {
      control: this.form.get('usuario') as FormControl,
      type: FormItemType.TEXT,
      params: {
        label: 'Usuário'
      }
    },
    {
      control: this.form.get('senha') as FormControl,
      type: FormItemType.TEXT,
      params: {
        label: 'Senha'
      }
    },
    {
      control: this.form.get('empresa') as FormControl,
      type: FormItemType.SELECT,
      params: {
        label: 'Empresa',
        visible: false,
        options: [{}]
      }
    },
  ];

  set() {
    const params = { options: this.options, visible: true};
    this.instanceForm.setInjectParam(3, params);
  }

}
