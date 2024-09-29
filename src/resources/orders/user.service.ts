export class UserService {
  public users: Array<{ id: number; name: string }> = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];

  async getUsers() {
    return this.users;
  }
}
