import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class PipesPipe implements PipeTransform {

  transform(array: any[], key: string, reverse: boolean = false): any[] {
    if (!array || !key) {
      return array;
    }

    const sortedArray = array.sort((a: any, b: any) => {
      if (a[key] < b[key]) {
        return -1;
      } else if (a[key] > b[key]) {
        return 1;
      } else {
        return 0;
      }
    });

    if (reverse) {
      return sortedArray.reverse();
    } else {
      return sortedArray;
    }
  }

}
