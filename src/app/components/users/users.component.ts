import { HttpClient } from "@angular/common/http";
import { UserService } from "./../../services/user/user.service";
import { users, User } from "./../../data/users";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { of, timer } from "rxjs";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  observablePG() {
    timer(1500).subscribe((res) => console.log("done!"));
  }

  ngOnInit() {
    // this.users = this.userService.getUsers();
    this.observablePG();
    this.userService
      .getUserFromUrl()
      .subscribe((users) => (this.users = users));
  }

  create() {}
  delete(id: number) {
    this.userService
      .deleteUserFromUrlById(id)
      .subscribe((res) => alert("Delte Action succes!"));
  }
  update() {}
  getPosts() {}
}
