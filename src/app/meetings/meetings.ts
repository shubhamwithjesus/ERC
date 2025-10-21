import { Component } from '@angular/core';
import { Corousel } from '../corousel/corousel';

@Component({
  selector: 'app-meetings',
  imports: [Corousel],
  templateUrl: './meetings.html',
  styleUrl: './meetings.scss'
})
export class Meetings {

  meetings = [
    { title: 'Sunday English Service', time: 'Sunday | 09:30 AM - 10:30 AM IST', location: 'Chapel/Zoom', link: 'https://example.com/sunday-service' },
    { title: 'Sunday Malayalam Service', time: 'Sunday | 10:30 AM - 12:30 PM IST', location: 'Chapel/Zoom', link: 'https://example.com/sunday-service' },
    { title: 'GANG Youth Meeting', time: 'Wednesday | 09:00 PM - 10:30 PM IST', location: 'Zoom', link: 'https://example.com/sunday-service' },
    { title: 'John & James Family Prayer', time: 'Friday | 09:00 PM - 10:30 PM IST', location: 'Zoom', link: 'https://example.com/sunday-service' },
    { title: 'Deborah Ladies Prayer', time: 'Friday | 03:00 PM - 04:30 PM IST', location: 'Zoom', link: 'https://example.com/sunday-service' },
  ]
}
