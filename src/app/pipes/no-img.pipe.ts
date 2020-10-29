import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImg'
})
export class NoImgPipe implements PipeTransform {

  transform(imageUrl: string): unknown {
    if (!imageUrl || imageUrl == null){
      return 'assets/img/no-image.png';
    } else
    {
      return imageUrl;
    }
  }

}
