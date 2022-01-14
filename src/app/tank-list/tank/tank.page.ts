import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { TankService } from 'src/app/tank.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.page.html',
  styleUrls: ['./tank.page.scss'],
})
export class TankPage implements OnInit {
  modif!: boolean;
  tank: any = null;
  // public formBuilder: FormBuilder;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Tank: TankService,
    private toastCtrl: ToastController,
    private router: Router
  ) {
    // this.form = this.formBuilder.group(
    //   {
    //     acceptTerms: [false, Validators.requiredTrue],
    //     name: ['', [
    //       Validators.required,
    //       Validators.maxLength(30)]
    //     ],
    //     country: ['', [
    //       Validators.required,
    //       Validators.maxLength(25),
    //       Validators.minLength(3)]
    //     ],
    //     gun: ['', [
    //       Validators.required,
    //       Validators.maxLength(25),
    //       Validators.minLength(3)]
    //     ],
    //     manufacturer: ['', [
    //       Validators.required,
    //       Validators.maxLength(25),
    //       Validators.minLength(3)]
    //     ],
    //     amount: ['', [
    //       Validators.required,
    //       Validators.maxLength(10),
    //       Validators.minLength(3)]
    //     ],
    //     releaseDate: ['', [
    //       Validators.required,
    //       Validators.maxLength(4),
    //       Validators.minLength(4)]
    //     ],
    //     pictureLink: ['',
    //       Validators.required,
    //     ],
    //     role: ['', [
    //       Validators.required,
    //       Validators.maxLength(20),
    //       Validators.minLength(5)]
    //     ],
    //     time: ['', [
    //       Validators.required,
    //       Validators.maxLength(4)]
    //     ],
    //     history: ['', [
    //       Validators.required,
    //       Validators.maxLength(500),
    //       Validators.minLength(50)]
    //     ],
    //     available: ['', Validators.required]

    //   }
    // );
  }

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
  // get errorControl(): { [key: string]: AbstractControl}{
  //   return this.ionicForm.controls;
  // }

}
