import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(array: any, start?: number, end?: number): any {
    let result = array;
    if (start !== undefined) {
      if (end !== undefined) {
        result = array.slice(start, end)
      } else {
        result = array.slice(start)
      }
    }
    return result.join(", ")
  }

}
