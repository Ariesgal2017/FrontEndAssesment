import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tag-component',
  templateUrl: './tag-component.component.html',
  styleUrls: ['./tag-component.component.scss']
})
export class TagComponentComponent implements OnInit {
  form = new FormGroup({
    tag: new FormControl('', Validators.required)
  });

  @Output() inputEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onEnter(): any {
    const tagValue = this.form.controls.tag.value;
    this.form.reset();
    this.inputEvent.emit(tagValue);
  }

}
