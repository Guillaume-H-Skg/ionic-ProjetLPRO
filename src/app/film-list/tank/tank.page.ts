import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { TankService } from 'src/app/tank.service';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.page.html',
  styleUrls: ['./tank.page.scss'],
})
export class TankPage implements OnInit {
  modif!: boolean;
  tank: any = null;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Tank: TankService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.modif = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.Tank.get(id).subscribe((value: any) => {
      this.tank = value;
    });
  }

  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header: 'Etes-vous sur de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Confirmer',
            handler: () => { this.modif = !this.modif;}
          }
        ]
      });

      await alert.present();
    } else {
    this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Tank.update(this.tank).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Tank.delete(id);
    this.router.navigate(['/tab/tanks']);
  }

}
