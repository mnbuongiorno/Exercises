//Show 3 cellphones with color, weight, screen resolution, camera resolution and RAM memory props.
//Each cellphone must be capable of turn on/off, restart, take photos and record videos.

class Cellphone {
  constructor(color, weight, screenRes, cameraRes, ram) {
    this.color = color;
    this.weight = weight;
    this.screenRes = screenRes;
    this.cameraRes = cameraRes;
    this.ram = ram;
    this.on = false;
  }
  turnOnOff() {
    if (this.on == false) {
      alert("Cellphone on");
      this.on = true;
    } else {
      alert("Cellphone off");
    }
  }

  restart() {
    if (this.on == true) {
      alert("Restarting cellphone");
    } else {
      alert("Cellphone off");
      this.on = false;
    }
  }
  takePhoto() {
    alert(`Taking photo in ${this.cameraRes} resolution.`);
  }

  recordVideo() {
    alert(`Recording video in ${this.cameraRes} resolution`);
  }
  viewInfo() {
    return `
    Color: <b> ${this.color}</b> </br>
    Weight: <b> ${this.weight}</b> </br>
    Screen Resolution: <b> ${this.screenRes}</b> </br>
    Camera Resolution: <b> ${this.cameraRes}</b> </br>
    RAM: <b> ${this.ram}</b> </br>
    `;
  }
}

cellphone1 = new Cellphone("Gray", "150g", "5'", "Full HD", "4GB");
cellphone2 = new Cellphone("Cyan", "154g", "5.3'", "HD", "2GB");
cellphone3 = new Cellphone("Magenta", "149g", "4.9'", "Full HD", "5GB");

/* cellphone1.turnOnOff();
cellphone1.takePhoto();
cellphone1.recordVideo();
cellphone1.restart();
cellphone1.turnOnOff(); */
/* 
document.write(cellphone1.viewInfo() + "<br>");
document.write(cellphone2.viewInfo() + "<br>");
document.write(cellphone3.viewInfo() + "<br>"); */

document.write(`
    ${cellphone1.viewInfo()} <br>
    ${cellphone2.viewInfo()} <br>
    ${cellphone3.viewInfo()} <br>
     `);
