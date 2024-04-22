//create app with downloads, stars, size props
//app must be able to open and close, install and uninstall with respective elses.

/* class App {
  constructor(downloads, stars, size) {
    this.downloads = downloads;
    this.stars = stars;
    this.size = size;
    this.isOpen = false;
  }

  openApp() {
    if (!this.isOpen) {
      this.isOpen = true;
      alert("Initialized app");
    } else {
      alert("App is already open");
    }
  }

  closeApp() {
    if (this.isOpen) {
      this.isOpen = false;
      alert("Closed app");
    } else {
      alert("App is already closed");
    }
  }
} */
class App {
  constructor(downloads, stars, size) {
    this.downloads = downloads;
    this.stars = stars;
    this.size = size;
    this.isOpen = false;
    this.installed = false;
  }
  install() {
    if (!this.installed) {
      this.installed = true;
      alert("Installing app");
    } else {
      alert("App is already installed");
    }
  }
  uninstall() {
    if (this.installed == true) {
      this.installed = false;
      alert("Uninstalled app");
    } else {
      alert("App is already uninstalled");
    }
  }

  toggleApp() {
    if (this.installed) {
      this.isOpen = !this.isOpen;
      const message = this.isOpen ? "Initialized app" : "Closed app";
      alert(message);
    } else {
      alert("Please install the app before initializing");
    }
  }

  viewAppInfo() {
    return `
    Downloads: <b>${this.downloads}</b>
    Stars: <b>${this.stars}</b>
    Size: <b>${this.size}</b>
    `;
  }
}

app1 = new App("3000", "4", "310 MB");
app2 = new App("230", "3", "110 MB");
app3 = new App("50", "2", "710 MB");
app4 = new App("80", "3", "101 MB");
app5 = new App("23000", "3", "876 MB");
app6 = new App("1000", "5", "134 MB");
app7 = new App("700", "4", "12 MB");

/* document.write(app1.install());
document.write(app1.toggleApp());
document.write(app1.toggleApp());
document.write(app1.install());
document.write(app1.uninstall());
document.write(app1.uninstall());
document.write(app1.toggleApp()); */


document.write(`
    ${app1.viewAppInfo()} <br><br>
    ${app2.viewAppInfo()} <br><br>
    ${app3.viewAppInfo()} <br><br>
    ${app4.viewAppInfo()} <br><br>
    ${app5.viewAppInfo()} <br><br>
    ${app6.viewAppInfo()} <br><br>
    ${app7.viewAppInfo()} <br><br>
`);
