import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users: any[], searchText: any): any {
    if (!users || !searchText){
      return users;
    }
    return users.filter(user => user.fname.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
