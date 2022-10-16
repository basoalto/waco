import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private FireStore: AngularFirestore) { }
createDoc<tipo>(data: tipo, enlace:string){


   const userCollection: AngularFirestoreCollection<tipo> =
//lo que hace es apuntar a la coleccion de firebase. es como si estuviera ubicado en USUARIO en firebase.
        this.FireStore.collection<tipo>(enlace);
//despues se crea un documento en USUARIO.
        return userCollection.add(data);
}

createIdDoc(): String {
  return this.FireStore.createId();
}

deleteDoc(path, id){

}

updateDoc(path, id){

}

getDoc<tipo>(path){
  const doc: AngularFirestoreDocument<tipo> = this.FireStore.doc(path);
  //OBSERVABLE es estar atento a todas las actividades.
  return doc.valueChanges();
}




}




