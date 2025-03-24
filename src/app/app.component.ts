import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  imgUrl = 'assets/BL_Logo.jpg';
  url = "https://www.bridgelabz.com";

  launchUrl() {
    window.open(this.url, "_blank");
  }
}