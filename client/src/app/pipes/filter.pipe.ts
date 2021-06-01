import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], input: string){
    if (!input) return users;
    return users.filter(val => this.filterBy(val, input));
  }

  private filterBy(user: User, search: string){
    const reduced = Object.keys(user)
      .reduce((prev, current) => this.reduceKeys(prev, current, user), "")
      .toLocaleLowerCase();
    return reduced.indexOf(search.toLocaleLowerCase()) > -1;
  }

  private reduceKeys(
    prev: string,
    current: string,
    user: User
  ): string {
    if (this.isProp(current)) {
      prev = `${prev}\$${user[current]}`;
    }
    return prev;
  }

  private isProp(key: string): boolean {
    return key.includes("name") || key.includes("surname") || key.includes("nick");
  }

}
