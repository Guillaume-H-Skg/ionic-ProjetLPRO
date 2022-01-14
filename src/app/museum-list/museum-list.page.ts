import { Component, OnInit, ViewChild  } from '@angular/core';
import { MuseumService } from '../museum.service';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.page.html',
  styleUrls: ['./museum-list.page.scss'],
})
export class MuseumListPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  museums!: any;
  constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Museum: MuseumService,
  ) { }

  ngOnInit(): void {
    this.Museum.getAllMuseums().subscribe((data: any)=>{
      this.museums = data;
    });
  }
  scrollToBottom() {
    this.content.scrollToBottom(1500);
  }
  scrollToTop() {
    this.content.scrollToTop(1500);
  }

}
