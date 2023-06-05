import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'org-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showNewsletter = false;
  showMySidebar = false;
  showMyOverlay = false;
  constructor (@Inject(DOCUMENT) private document: Document){

  }
  myAccFunc(){
    console.log('myAccFunc');
  }
// Accordion
// function myAccFunc() {
//   var x = document.getElementById("demoAcc");
//   if (x.className.indexOf("w3-show") == -1) {
//     x.className += " w3-show";
//   } else {
//     x.className = x.className.replace(" w3-show", "");
//   }
// }

// // Click on the "Jeans" link on page load to open the accordion for demo purposes
// document.getElementById("myBtn").click();


// Open and close sidebar
 w3_open() {
  this.showMySidebar = true;
  this.showMyOverlay = true;
}
w3_close(){
  this.showMySidebar = false;
  this.showMyOverlay = false;
}
// function w3_close() {
//   document.getElementById("mySidebar").style.display = "none";
//   document.getElementById("myOverlay").style.display = "none";
// }

}
