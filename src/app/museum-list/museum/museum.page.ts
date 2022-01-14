import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { MuseumService } from 'src/app/museum.service';


@Component({
  selector: 'app-museum',
  templateUrl: './museum.page.html',
  styleUrls: ['./museum.page.scss'],
})
export class MuseumPage implements OnInit {

  modif!: boolean;
  museum: any = null;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Museum: MuseumService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.modif = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.Museum.get(id).subscribe((value: any) => {
      this.museum = value;
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
    this.Museum.update(this.museum).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Museum.delete(id);
    this.router.navigate(['/tab/museums']);
  }

}
