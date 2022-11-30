

export class Registro{

    public format: string;
    public type: string;
    public icon: string;
    public created: Date;
    public codigoClase: string;
    public horaClase: string;
    public salaClase: string;
    public fechaClase: string;

    constructor(format: string, text: string){
        this.format = format;
        this.created = new Date();
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
    // private determinarTipo(){
    //     const inicioTexto = this.text.substring(0,4)
    //     console.log('tipo', inicioTexto)

    //     switch(inicioTexto){
    //         case 'http':
    //             this.type = 'http';
    //             this.icon = 'globe';
    //         break;
    //         case 'geo':
    //             this.type = 'geo';
    //             this.icon = 'pin';
    //         break

    //         default:
    //             this.type = 'no reconocido'
    //             this.icon = 'create'
    //     }
    }
