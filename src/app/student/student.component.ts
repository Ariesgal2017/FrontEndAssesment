import {Component, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';
import {map} from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: any[] = [];
  id: any;
  // @ts-ignore
  searchTerm: string;
  // @ts-ignore
  searchTag: string;
  // @ts-ignore
  inputTag: string;

  constructor(private studentService: StudentService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.studentService.getAll().pipe(
      map(res => {
        Object.assign( res, {
          average: []
        });
        this.students = res;
        return {
          // @ts-ignore
          studentsInApi: res.students.map(student => {
            this.id = student.id;
            // @ts-ignore
            // tslint:disable-next-line:only-arrow-functions typedef
            const gradesArrayTotal = student.grades.map( i => Number(i)).reduce(function(a, b) {
              return (a + b);
            });
            student.average = (gradesArrayTotal) / 8 ;
          })
        };
      })
    ).subscribe();
  }
  // tslint:disable-next-line:typedef
  onChange(){
    // tslint:disable-next-line:only-arrow-functions typedef
    $('#button button').click(function() {
      $('i').toggleClass('fa fa-minus fa-2x');
    });
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  onClickButton(){
      const content = document.getElementsByClassName('content-for-each');
      // @ts-ignore
      // tslint:disable-next-line:prefer-for-of
      for ( const i = 0; i < content.length; i++){
        // @ts-ignore
        if (content[i].style.display === 'block') {
          // @ts-ignore
          content[i].style.display = 'none';
        } else {
          // @ts-ignore
          content[i].style.display = 'block';
        }
      }
  }
}
