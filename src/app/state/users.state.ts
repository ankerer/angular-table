import { State } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { User } from "../models/user";

@State<User[]>({
    name: 'users',
    defaults: []
})
@Injectable()
export class UsersState {
}