import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  imgUrl = 'assets/BL_Logo.jpg';
  url = "https://www.bridgelabz.com";
  username = "";

  launchUrl() {
    window.open(this.url, "_blank");
  }
}