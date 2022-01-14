import { Component, OnInit } from '@angular/core';
import {Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  public photos: picture[] = [];
  public photosName: string;
  public photosDesc: string;
  constructor() { }

  ngOnInit() {
  }

  async addNewPhoto(){
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality:100
    });

    this.photos.unshift({
      filepath:' ',
      webviewPath: capture.webPath
    });
  }

  takePhoto(){
    this.addNewPhoto();
  }

  async share(){
    await Share.share({
      title:  'Votre photo',
      text: 'Votre photo description',
      url: 'http://localhost:8100/tab/photos',
      dialogTitle: 'Partager à vos amis !',
    });
  }

}
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface picture {
  filepath: string;
  webviewPath: string;
}
