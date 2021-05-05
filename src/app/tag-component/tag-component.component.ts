import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tag-component',
  templateUrl: './tag-component.component.html',
  styleUrls: ['./tag-component.component.scss']
})
export class TagComponentComponent implements OnInit {
  @Output() tagInput = new EventEmitter<string>();
  form = new FormGroup({
    tag: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onEnter(): any {
    const tagValue = this.form.controls.tag.value;
    this.form.reset();
    this.tagInput.emit(tagValue);
  }

}
