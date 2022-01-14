/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Tank } from 'src/app/models/tanks.model';
import { TankService } from 'src/app/tank.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-tank-new',
  templateUrl: './tank-new.page.html',
  styleUrls: ['./tank-new.page.scss'],
})
export class TankNewPage implements OnInit {
  public tank!: Tank;
  // public formBuilder: FormBuilder;

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-shadow
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
    this.tank = new Tank();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau véhicule enregistré',
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
  // get errorControl(): { [key: string]: AbstractControl}{
  //   return this.ionicForm.controls;
  // }

}
