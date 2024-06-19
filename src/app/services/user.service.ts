import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class UserService {
  export class UserService {
  getUserList() {
    throw new Error('Method not implemented.');
  }
    private localStorageKey = 'users';

  constructor(private _http: HttpClient) {}

  
  private getUserFromLocalStorage(): any[] {
    const users = localStorage.getItem(this.localStorageKey);
    return users ? JSON.parse(users) : [];
  }

  // Helper function to save data to local storage
  private saveUserToLocalStorage(users: any[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  addUser(data: any): Observable<any> {
    const users = this.getUserFromLocalStorage();
    const newUser = { ...data, id: users.length ? users[users.length - 1].id + 1 : 1 };
    users.push(newUser);
    this.saveUserToLocalStorage(users);
    return of(newUser);
  }

  updateUser(id: number, data: any): Observable<any> {
    const users = this.getUserFromLocalStorage();
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...data };
      this.saveUserToLocalStorage(users);
      return of(users[index]);
    }
    return of(null);
  }

  getUser(): Observable<any[]> {
    const users = this.getUserFromLocalStorage();
    return of(users);
  }

  deleteUser(id: number): Observable<any> {
    let users = this.getUserFromLocalStorage();
    users = users.filter(user => user.id !== id);
    this.saveUserToLocalStorage(users);
    return of(null);
  }
}
