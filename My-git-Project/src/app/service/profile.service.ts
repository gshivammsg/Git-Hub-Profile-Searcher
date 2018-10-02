import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientId = 'c05913bcbd62c25ee729';
  private clientSecret = '49c81c74c325367a9c0bb4e461bb16d5504d1aae';


  constructor(private http: Http) {
    this.username = 'bradtraversy ';
  }

  getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username).map(res => res.json());
  }

  updateProfile(username: string) {
      this.username = username;
  }
}
