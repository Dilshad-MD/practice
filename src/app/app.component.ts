import { Component } from '@angular/core';
import { ServiceService } from './service.service';

export interface Dilshad {
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'practice';

  users!: Dilshad[];
  constructor(private usersdata: ServiceService) {}
  ngOnInit() {
    this.usersdata.users().subscribe((data: any) => {
      this.users = data;
      console.log(data);
    });
  }
}
