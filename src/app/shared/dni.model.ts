export class DNI {
    public apellidoMaterno: string;
    public apellidoPaterno: string;
    public edad: string;
    public mesa: string;
    public nombres: string;
    public sexo: string;

    constructor(apellidoMaterno: string, apellidoPaterno: string, edad: string, mesa:string, nombres: string, sexo: string) {
        this.apellidoMaterno = apellidoMaterno;
        this.apellidoPaterno = apellidoPaterno;
        this.edad = edad;
        this.mesa = mesa;
        this.nombres = nombres;
        this.sexo = sexo;
    }
}