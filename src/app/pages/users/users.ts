import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataTable } from '../../components/data-table/data-table';
import { UserService } from '../../services/user.service';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-users',
  imports: [DataTable, AsyncPipe],
  templateUrl: './users.html',
  styleUrl: './users.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Users {
  userService = inject(UserService);
  store = inject(Store);

  users$ = this.userService.getUsers();
}
