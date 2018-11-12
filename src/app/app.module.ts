import { AccountPage } from './../pages/account/account';
import { BrowsePage } from './../pages/browse/browse';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MessengerPage } from '../pages/messenger/messenger';
import { MyprojectsPage } from '../pages/myprojects/myprojects';
import { NotificationsPage } from '../pages/notifications/notifications';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MessengerPage,
    BrowsePage,
    AccountPage,
    MyprojectsPage,
    NotificationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MessengerPage,
    BrowsePage,
    AccountPage,
    MyprojectsPage,
    NotificationsPage
      ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
