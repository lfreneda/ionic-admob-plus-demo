import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMob } from '@ionic-native/admob-plus'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public admob: AdMob) {

  }

  showBannerAd(){
    this.admob.banner.show({
      id: {
        // replace with your ad unit IDs
        android: 'ca-app-pub-2608684597437098/7534361629',
        ios: 'test'
      }
    })
  }
  
  hideBannerAd(){
    this.admob.banner.hide();
  }
 
  showInterstitialAd(){
    this.admob.interstitial.load({
      id: {
        // replace with your ad unit IDs
        android: 'ca-app-pub-2608684597437098/5011892643',
        ios: 'test'
      },
    }).then(() => this.admob.interstitial.show())
  }
 
  rewardVideoAd(){
    this.admob.rewardVideo.load({
      id: {
        // replace with your ad unit IDs
        android: 'ca-app-pub-2608684597437098/9908285666',
        ios: 'test'
      },
    }).then(() => this.admob.rewardVideo.show())
  }
}
