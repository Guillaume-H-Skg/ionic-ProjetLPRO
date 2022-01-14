import { Component, OnInit, ViewChild  } from '@angular/core';
import { TankService } from '../tank.service';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-tank-list',
  templateUrl: './tank-list.page.html',
  styleUrls: ['./tank-list.page.scss'],
})
export class TankListPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  tanks!: any;
  constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Tank: TankService,
  ) { }

  ngOnInit(): void {
    this.Tank.getAllTanks().subscribe((data: any)=>{
      this.tanks = data;
    });
  }
  scrollToBottom() {
    this.content.scrollToBottom(1500);
  }
  scrollToTop() {
    this.content.scrollToTop(1500);
  }
}
