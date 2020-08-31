import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.listCategories();
  }

  // tslint:disable-next-line:typedef
  listCategories() {
    this.userService.getUserList().subscribe(
      data => {
        this.users = data;
      }
    );
  }

}
