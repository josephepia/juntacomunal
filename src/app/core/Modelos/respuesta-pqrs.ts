import { PQRS } from './pqrs';

export class RespuestaPQRS {
    respuestaId:string | undefined;
    tituloRespuesta:string | undefined;
    descripcionRespuesta:string | undefined;
    autorRespuesta:string | undefined;
    estadoRespuesta:string | undefined;
    fechaCreacion: any | undefined;
    destinatarioRespuesta:string | undefined;
    pqrs: PQRS | undefined;
}
