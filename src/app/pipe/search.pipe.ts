import { Pipe, PipeTransform } from '@angular/core';
import {Student} from '../model/student';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(student: Student[], searchTerm: string): Student[] {
    if (!student || !searchTerm) { return student; }
    // @ts-ignore
    // tslint:disable-next-line:no-shadowed-variable
    return student.filter( student =>
      student.firstName.toLowerCase().match(searchTerm.toLowerCase()) || student.lastName.toLowerCase().match(searchTerm.toLowerCase())
    );
  }
}
