import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../service/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;
  profile: any[];

  constructor(private profileService: ProfileService) {

  }

  ngOnInit() {
  }

  findProfile() {
    console.log(this.username);
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
  }

}
