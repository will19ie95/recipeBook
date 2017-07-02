import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

loadedFeature: string = "recipes";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAtcmXUJin_Tj1FUWCae3o9-t1MYGej-T0",
      authDomain: "recipe-book-ef31b.firebaseapp.com"
    })
  }

  onNavChange(featureSelected: string) {
    this.loadedFeature = featureSelected;
  }
}
