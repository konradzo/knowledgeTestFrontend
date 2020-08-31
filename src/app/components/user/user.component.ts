import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  currentUserId: number;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.showUser();
  }

  // tslint:disable-next-line:typedef
  showUser() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentUserId = +this.route.snapshot.paramMap.get('id');
    } else {
      this.currentUserId = 1;
    }

    this.userService.getUser(this.currentUserId).subscribe(
      result => {
        this.user = result;
      }
    );

  }
}
