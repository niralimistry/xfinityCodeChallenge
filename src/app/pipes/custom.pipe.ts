import {Pipe, PipeTransform} from '@angular/core';

@Pipe({  name: 'orderBy' })
export class CustomPipe implements PipeTransform {

  transform(records: Array<any>, args?: any): any {
    if (records !== undefined) {
      return records.sort(function(a, b) {
        if (a[args.key] < b[args.key]) {
          return -1 * args.orderDir;
        }
        else if (a[args.key] > b[args.key]) {
          return 1 * args.orderDir;
        }
        else {
          return 0;
        }
      });
    }
  }
}
