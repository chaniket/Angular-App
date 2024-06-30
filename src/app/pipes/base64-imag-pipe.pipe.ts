import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'base64ImagPipe'
})
export class Base64ImagPipePipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, ...args: string[]): unknown {
   // let Base64 = BASE_LIBRARY_CODES;
 //   return btoa(value);
  return btoa(value);
 /*    if (typeof(value) != 'undefined') {
       return this.domSanitizer.bypassSecurityTrustUrl(Base64.encode(value));
    }else{
       return this.domSanitizer.bypassSecurityTrustUrl('');
    }  */ 
  }

}
