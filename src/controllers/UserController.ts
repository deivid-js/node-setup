import User from '@models/User';

export default class UserController {
  public show(): User {
    const user = new User();

    return user;
  }
}
