/* eslint-disable @typescript-eslint/semi */
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { Museum } from './models/museum.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MuseumService {
  museumsRef: AngularFirestoreCollection<Museum>;
  private dbPath = '/museums';
  constructor(
    private db: AngularFirestore,
  ) {this.museumsRef = db.collection(this.dbPath);
  }

  getAllMuseums(): any {
    return this.museumsRef.snapshotChanges().pipe(
      // eslint-disable-next-line arrow-body-style
      map((changes: any) => {
        // eslint-disable-next-line arrow-body-style
        return changes.map((doc: any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewMuseum(museum: Museum): any{
    return new Observable(obs=>{
      this.museumsRef.add({...museum}).then(()=>{
        obs.next();
      });
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.museumsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(museum: Museum) {
    return new Observable(obs => {
      this.museumsRef.doc(museum.id).update(museum);
      obs.next();
    });
  }

  delete(id: any){
    this.db.doc(`museums/${id}`).delete();
  }

}
