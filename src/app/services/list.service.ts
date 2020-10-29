import { Injectable } from '@angular/core';
import { ListItem } from '../model/listitem/listitem.model';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ListService {
  constructor(private firestore: AngularFirestore) {}

  onAdd(data:ListItem) {

    return new Promise<ListItem>((resolve, reject) => {
      this.firestore
        .collection('shoppinglist')
        .add(data)
        .then(
          (res) => {
            
          },
          (err) => reject(err)
        );
    });
  }

  getFirebase() {
    return this.firestore.collection("shoppinglist").snapshotChanges()
    .pipe(
      map((respondeData) => {
        
        let itemArrey = [];
        respondeData.map( (i) => {
          
       itemArrey = [ ...itemArrey,
        {
          id: i.payload.doc.id,
          data: i.payload.doc.data()
      }
      ]
          
        })
        return itemArrey.sort((a,b) => a.data.prio - b.data.prio);
      })
    );
  }

  onDelete(data:ListItem) {
    return(
      this.firestore
      .collection("shoppinglist")
      .doc(data.id)
      .delete()
    )
 }

 onUpdate(data){
   return (
    this.firestore
    .collection("shoppinglist")
    .doc(data.id)  
    .set({...data})
   )
 }
}


