import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myslice'
})
export class MyslicePipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    if (args.length === 0) {
      let result = value;
      result = value.substr(0, 60);
      result = `${result.trim()}...`;
      return result;
    }
    if (value.length > args[0]) {
      let result = value;
      result = value.substr(0, args[0]);
      result = `${result.trim()}...`;
      return result;
    }
    return value;
  }

}
