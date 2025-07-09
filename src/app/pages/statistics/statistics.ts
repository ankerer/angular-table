import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-statistics',
  imports: [AsyncPipe],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css'
})
export class Statistics {
  userService = inject(UserService);

  length$ = this.userService.getUsers().pipe(map(users => users.length));
}
