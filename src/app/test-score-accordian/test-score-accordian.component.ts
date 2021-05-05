import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-test-score-accordian',
  templateUrl: './test-score-accordian.component.html',
  styleUrls: ['./test-score-accordian.component.scss']
})
export class TestScoreAccordianComponent implements OnInit {
  expandGrade = false;
  iconClass = 'fa fa-plus fa-2x';
  @Input() studentData: any;

  constructor() {
  }

  ngOnInit(): void {
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  onClickButton() {
    this.expandGrade = !this.expandGrade;
    this.expandGrade ? this.iconClass = 'fa fa-minus fa-2x' : this.iconClass = 'fa fa-plus fa-2x' ;
  }

}
