import { Injectable } from '@angular/core';
import {
  collectionData,
  deleteDoc,
  doc,
  addDoc,
  collection,
  DocumentReference,
  Firestore,
  setDoc,
  docData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersRef = collection(this.firestore, 'customers');

  constructor(private firestore: Firestore) {}

  addCustomer(customer: Customer): Promise<DocumentReference<Customer>> {
    console.log(customer);
    return addDoc(this.customersRef, customer) as Promise<
      DocumentReference<Customer>
    >;
  }

  getAllCustomers(): Observable<Customer[]> {
    return collectionData(this.customersRef, { idField: 'id' }) as Observable<
      Customer[]
    >;
  }

  getCustomer(): Observable<Customer[]> {
    return collectionData(this.customersRef, { idField: 'id' }) as Observable<
      Customer[]
    >;
  }
  deleteCustomer(customer: Customer): Promise<void> {
    console.log(customer.id);
    const customersRef = doc(this.firestore, `customers/${customer.id}`);
    return deleteDoc(customersRef) as Promise<void>;
  }
  updateCustomer(customer: Customer): Promise<void> {
    const customersRef = doc(this.firestore, `customers/${customer.id}`);
    return setDoc(customersRef, customer) as Promise<void>;
  }
  getCustomerById(id: string): Observable<Customer> {
    const customersRef = doc(this.firestore, `customers/${id}`);
    return docData(customersRef, { idField: 'id' }) as Observable<Customer>;
  }
}
