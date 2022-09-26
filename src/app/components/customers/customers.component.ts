import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  [x: string]: any;

  customers: Customer[] = [];
  prodName: string = '';
  prodLastName: string = '';
  prodPhone: string = '';

  selectedCustomerForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', Validators.compose([Validators.required])),
    lastName: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    phone: new FormControl('', Validators.required),
  });

  customerFormView: 'none' | 'edit' | 'add' | 'view' = 'none';

  constructor(private cs: CustomersService, private modal: NgbModal) {}

  ngOnInit(): void {
    this.cs.getCustomer().subscribe((customersData: Customer[]) => {
      this.customers = customersData;
    });
  }

  changeCustomerFormView(state: 'none' | 'edit' | 'add' | 'view') {
    this.customerFormView = state;
    this.selectedCustomerForm.reset();
    this.selectedCustomerForm.enable();
  }

  handleCustomer() {
    const { value } = this.selectedCustomerForm;
    if (!this.selectedCustomerForm.valid) return;

    const customer = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      phone: value.phone,
    } as Customer;

    if (this.customerFormView === 'add') {
      this.cs.addCustomer(customer);
    }
    if (
      this.customerFormView === 'edit' &&
      this.selectedCustomerForm.value.id
    ) {
      this.cs.updateCustomer({
        ...customer,
        id: this.selectedCustomerForm.value.id,
      });
    }

    this.selectedCustomerForm.reset();
    this.customerFormView = 'none';
  }

  deleteCustomer(customer: Customer): void {
    if (confirm('Are you sure?')) {
      this.cs
        .deleteCustomer(customer)
        .then(() => alert('Customer deleted successfully!'))
        .catch((err) => console.log(err));
    }
  }

  setCustomerEditForm(customer: Customer) {
    this.changeCustomerFormView('edit');
    console.log(this.selectedCustomerForm);
    this.selectedCustomerForm.setValue({
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
      id: customer.id,
    });
  }

  setCustomerViewForm(customer: Customer) {
    this.changeCustomerFormView('view');
    this.selectedCustomerForm.setValue({
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
      id: customer.id,
    });
    this.selectedCustomerForm.disable();
  }
  
}
