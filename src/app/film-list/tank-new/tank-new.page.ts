/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Tank } from 'src/app/models/tanks.model';
import { TankService } from 'src/app/tank.service';

@Component({
  selector: 'app-tank-new',
  templateUrl: './tank-new.page.html',
  styleUrls: ['./tank-new.page.scss'],
})
export class TankNewPage implements OnInit {
  public tank!: Tank;

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    private Tank: TankService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.tank = new Tank();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Tank enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tab/tanks']);
      }, 2000);
    });
  }


  add() {
    this.Tank.saveNewTank(this.tank).subscribe(() => {
      this.tank = new Tank();//Tank
      this.presentToast();
    });
  }

}
