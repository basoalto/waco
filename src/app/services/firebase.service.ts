import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Registro } from '../interfaces/registro.model';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

constructor(private FireStore: AngularFirestore) { }


createDoc<tipo>(data: tipo, enlace:string, idDoc: string){
   const userCollection: AngularFirestoreCollection<tipo> =
//lo que hace es apuntar a la coleccion de firebase. es como si estuviera ubicado en USUARIO en firebase.
        this.FireStore.collection<tipo>(enlace);
//despues se crea un documento en USUARIO.
        return userCollection.doc(idDoc).set(data);
}

createIdDoc(): string {
  return this.FireStore.createId();
}

deleteDoc(path, id){

}

updateDoc(path, id){

}

getDoc<tipo>(path: string, id: string){
  return this.FireStore.collection(path).doc<tipo>(id).valueChanges()
}

getCollection<tipo>(path){
  const usersCollection: AngularFirestoreCollection<tipo> =
          this.FireStore.collection<tipo>(path);
//valueChanges: de toda la coleccion
          return usersCollection.valueChanges();
}
}


