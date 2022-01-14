/* eslint-disable @typescript-eslint/semi */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Tank } from './models/tanks.model';

@Injectable({
  providedIn: 'root'
})
export class TankService {
  tanksRef: AngularFirestoreCollection<Tank>;
  private dbPath = '/tanks';


  constructor(
    private db: AngularFirestore
  ) {
    this.tanksRef = db.collection(this.dbPath);
   }

   getAllTanks(): any {
    return this.tanksRef.snapshotChanges().pipe(
      // eslint-disable-next-line arrow-body-style
      map((changes: any) => {
        // eslint-disable-next-line arrow-body-style
        return changes.map((doc: any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewTank(tank: Tank): any {
    return new Observable(obs => {
      this.tanksRef.add({...tank}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any): any {
    return new Observable(obs => {
      this.tanksRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(tank: Tank) {
    return new Observable(obs => {
      this.tanksRef.doc(tank.id).update(tank);
      obs.next();
    });
  }

  delete(id: any) {
    this.tanksRef.doc(id).delete();
  }
}
