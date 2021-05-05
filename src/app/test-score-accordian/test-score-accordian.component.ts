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
  hideTag = true;
  constructor() {
  }

  ngOnInit(): void {
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  onClickButton() {
    this.expandGrade = !this.expandGrade;
    this.expandGrade ? this.iconClass = 'fa fa-minus fa-2x' : this.iconClass = 'fa fa-plus fa-2x' ;
    this.hideTag = !this.hideTag;
  }
  // tslint:disable-next-line:typedef
  acceptData(data: any) {
    // tslint:disable-next-line:no-unused-expression
    this.studentData.tagArray.push(data);
  }
}
