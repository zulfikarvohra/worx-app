import { AccountPage } from './../account/account';
import { NotificationsPage } from './../notifications/notifications';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessengerPage } from '../messenger/messenger';
import { BrowsePage } from '../browse/browse';
import { MyprojectsPage } from '../myprojects/myprojects';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabs: Array<{title: string, component: any,icon:string}>;

  constructor(public navCtrl: NavController) {
    this.tabs = [
      { title: 'Messenger', component: MessengerPage,icon:'chatbubbles' },
      { title: 'Browse', component: BrowsePage ,icon:'briefcase'},
      { title: 'My Jobs', component: MyprojectsPage ,icon:'folder'},
      { title: 'Notifications', component: NotificationsPage ,icon:'notifications'},
      { title: 'Account', component: AccountPage ,icon:'cash'},

    ];
  }
  // openTab(tab){
  //   console.log(tab);
  //   this.navCtrl.setRoot(tab.component,{}, {animate: true, direction: 'forward'});
  // }
}
