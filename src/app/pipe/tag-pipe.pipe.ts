import { Pipe, PipeTransform } from '@angular/core';
import {Student} from '../model/student';

@Pipe({
  name: 'tagPipe'
})
export class TagPipePipe implements PipeTransform {

  transform(student: Student[], searchTag: string): Student[] {
    if (!student || !searchTag) {
      return student;
    }
    // @ts-ignore
    // tslint:disable-next-line:no-shadowed-variable
    return student.filter(student => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < student.tagArray.length; i++) {
        // tslint:disable-next-line:no-unused-expression
       if (student.tagArray[i].toLowerCase().match(searchTag.toLowerCase())){
          student = student.tagArray;
       }
      }
    });
  }
}
