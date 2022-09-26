import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/Contact';
import { Customer } from '../interfaces/Customer';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contacts: Contact[],
     propName: keyof Contact,
      value: string
      ): Contact[] {
        let proArr:Contact[] = [];
        for(let contact of contacts) {
          if (
            (contact[propName] as string)
            .toLowerCase()
            .includes(value.toLowerCase())
          ){
            proArr.push(contact);
          }
        }
        return proArr;
        
  }


}
