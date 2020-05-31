import { UserService } from "./../../services/user/user.service";
import { User, users } from "./../../data/users";
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent implements OnInit {
  user: User;
  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.DeleteUserById(1);

    this.activateRoute.params.subscribe((params) => {
      // const foundUser = users.find((value: User) => value.id == params.id);
      this.userService
        .getUserFromUrlById(params.id)
        .subscribe((user) => (this.user = user));
      // this.user = foundUser;
      // this.user = users.find((value: User) => this.user.id === params.id);
    });

    this.activateRoute.queryParams.subscribe((queryParams) => {});
  }
}
