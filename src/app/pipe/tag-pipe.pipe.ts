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
    return student.filter((student) => {
      for (const [key, value ] of Object.entries(student.tagArray)) {
        // @ts-ignore
        if (value.toLowerCase().match(searchTag.toLowerCase()) || value.toUpperCase().match(searchTag.toUpperCase())){
            // @ts-ignore
          return (value.toLowerCase().match(searchTag.toLowerCase()) || value.toUpperCase().match(searchTag.toUpperCase()));
        }
      }
    });
    }
}
