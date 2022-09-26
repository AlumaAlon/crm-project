import { Component, OnInit } from '@angular/core';
import { collection } from '@firebase/firestore';
import { Contact } from 'src/app/interfaces/Contact';
import { ContactsService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  prodName: string = '';
  prodEmail: string = '';

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
    this.contactService.getAll().subscribe((contactsData: Contact[]) => {
      this.contacts = contactsData;
    });
  }

  contactFirstName: string = '';
  contactListName: string = '';
}
