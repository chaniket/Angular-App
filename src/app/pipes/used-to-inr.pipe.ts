import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usedToInr'
})
export class UsedToInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x] = args;
    console.log
    return value*x;
  }

}
