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
  ionicForm: FormGroup;
  isSubmitted = false;
  public museum?: Museum;

  constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Museum: MuseumService,
    private toastCtrl: ToastController,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.ionicForm = this.formBuilder.group(
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

  ngOnInit(): void {
    this.museum = new Museum();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau musée enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tab/museums']);
      }, 2000);
    });
  }

  get errorControl(): { [key: string]: AbstractControl}{
    return this.ionicForm.controls;
  }

  submitForm(): void {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Erreur, saisie invalide');
      return;
    }
    this.Museum.saveNewMuseum(this.museum).subscribe(() => {
      this.museum = new Museum(); //On peut supprimer l'erreur NG0100 en enlevant cet ligne (déconseillé)
      this.presentToast();
    });
  }
}

//Ancienne fonction pour ajouter un nouveau musée
  // add() {
  //   this.Museum.saveNewMuseum(this.museum).subscribe(() => {
  //     this.museum = new Museum();
  //     this.presentToast();
  //   });
  // }


