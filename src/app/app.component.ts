import { Component } from '@angular/core';
import 'jsonforms';
import {JsonForms} from 'jsonforms';
import {SCHEMA} from './schema';
import {UI_SCHEMA} from './ui-schema';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JSONForms Angular Seed!';
  private schema = SCHEMA;
  private uischema = UI_SCHEMA;
  private data = {
    name: 'John Doe',
    birthDate: '1985-06-02'
  };

  constructor() {
JsonForms.stylingRegistry.registerMany([
    {
      name: 'control',
      classNames: ['control']
    },
    {
      name: 'control.label',
      classNames: ['control']
    },
    {
      name: 'control.input',
      classNames: ['input']
    },
    {
      name: 'control.validation',
      classNames: ['validation']
    },
    {
      name: 'categorization',
      classNames: ['jsf-categorization']
    },
    {
      name: 'categorization.master',
      classNames: ['jsf-categorization-master']
    },
    {
      name: 'categorization.detail',
      classNames: ['jsf-categorization-detail']
    },
    {
      name: 'category.group',
      classNames: ['jsf-category-group']
    },
    {
      name: 'array.layout',
      classNames: ['array-layout']
    },
    {
      name: 'array.children',
      classNames: ['children']
    },
    {
      name: 'group-layout',
      classNames: ['group-layout']
    },
    {
      name: 'horizontal-layout',
      classNames: ['horizontal-layout']
    },
    {
      name: 'vertical-layout',
      classNames: ['vertical-layout']
    },
    {
      name: 'array-table',
      classNames: ['array-table-layout', 'control']
    }
  ]);
}
}
