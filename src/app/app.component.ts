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
  nameError = "";

  checkUserName(){
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.username)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }

  launchUrl() {
    window.open(this.url, "_blank");
  }
}