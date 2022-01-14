import { Component, OnInit } from '@angular/core';
import { TankService } from '../tank.service';

@Component({
  selector: 'app-tank-list',
  templateUrl: './tank-list.page.html',
  styleUrls: ['./tank-list.page.scss'],
})
export class TankListPage implements OnInit {
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

}
