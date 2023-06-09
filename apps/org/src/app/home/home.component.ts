import { CommonModule, DOCUMENT } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject } from '@angular/core';

@Component({
  selector: 'org-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  showNewsletter = false;
  showMySidebar = false;
  showMyOverlay = false;
  loading = false;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  myAccFunc() {
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
  w3_close() {
    this.showMySidebar = false;
    this.showMyOverlay = false;
  }
  // function w3_close() {
  //   document.getElementById("mySidebar").style.display = "none";
  //   document.getElementById("myOverlay").style.display = "none";
  // }
  loadNewsletter() {
    this.showNewsletter = true;
    // this.createWebComponent();
  }

  private createWebComponent() {
    const script = this.getScript();

    this.document.body.appendChild(script);
  }

  private getScript() {
    const script = this.document.createElement('script');
    script.async = false;
    script.defer = false;
    script.innerHTML = '';
    script.src = 'https://production/web-component.js';
    script.onabort = () => {
      console.error(
        'ABNORMAL TERMINATION while loading the web component script'
      );
    };

    script.onerror = (event: Event | string) => {
      const eventString: string =
        typeof event === 'string' ? event : JSON.stringify(event, null, 2);

      console.error(
        'ERROR while loading the web component script: ' + eventString
      );

      this.loading = false;
    };

    script.onload = () => {
      this.loading = false;
    };

    return script;
  }
}
