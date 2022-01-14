/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Museum } from 'src/app/models/museum.model';
import { MuseumService } from 'src/app/museum.service';

import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-museum-add',
  templateUrl: './museum-add.page.html',
  styleUrls: ['./museum-add.page.scss'],
})
export class MuseumAddPage implements OnInit {
  // form: FormGroup;
  // submitted = false;
  ionicForm: FormGroup;
  isSubmitted = false;
  //ionicForm: FormGroup;
  //isSubmitted = false;

  public museum!: Museum;

  constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Museum: MuseumService,
    private toastCtrl: ToastController,
    private router: Router,
    public formBuilder: FormBuilder
  ) {this.ionicForm = this.formBuilder.group(
    {
      name: ['', [
        Validators.required,
        Validators.maxLength(30)]
      ],
      location: ['', [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(3)]
      ],
      openingDate: ['', [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(3)]
      ],
      image: ['',
        Validators.required,
      ],
      description: ['', [
        Validators.required,
        Validators.maxLength(500),
        Validators.minLength(50)]
      ],
    }
  );
}

  ngOnInit() {
    this.museum = new Museum();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Tank enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tab/museums']);
      }, 2000);
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
        // this.presentToast();
        this.Museum.saveNewMuseum(this.museum).subscribe(() => {
        this.museum = new Museum();
      });
    }
  }
  // add() {
  //   this.Museum.saveNewMuseum(this.museum).subscribe(() => {
  //     this.museum = new Museum();//Tank
  //     this.presentToast();
  //   });
  // }

}
