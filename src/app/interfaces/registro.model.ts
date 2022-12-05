
export class Registro{
    public icon: string ;
    public created: string;
    public codigoClase: string;
    public horaClase: string;
    public salaClase: string;
    public fechaClase: string;
    public userId: string;


    constructor(text: string, id: string){

        this.created = new Date().toString();
        this.userId = id;
        // this.determinarTipo()
        this.determinarTipo(text);
        this.icon = 'pin';
    }


    private determinarTipo(text){
        const splitText = text.split('|')
        this.codigoClase = splitText[0]
        this.fechaClase = splitText[1]
        this.horaClase = splitText[2]
        this.salaClase = splitText[3]
    }


    public convertirDatos(){
        return { 
            icon: this.icon,
            created: this.created,
            codigoClase: this.codigoClase,
            horaClase: this.horaClase,
            salaClase: this.salaClase,
            fechaClase: this.fechaClase,
            userId: this.userId,
        }
    } 

    public claseExiste(nuevoRegistro: Registro) {
        return this.fechaClase == nuevoRegistro.fechaClase && this.horaClase == nuevoRegistro.horaClase
    }

}