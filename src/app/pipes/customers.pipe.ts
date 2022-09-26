import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/Customer';

@Pipe({
  name: 'customers'
})
export class CustomersPipe implements PipeTransform {

  transform(
    customers: Customer[],
    propName: keyof Customer,
    value: string
  ): Customer[] {
    let proArr: Customer[] = [];
    for (let customer of customers) {
      if (
        (customer[propName] as string)
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        proArr.push(customer);
      }
    }
    return proArr;
  }

}
