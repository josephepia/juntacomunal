import { Comuna } from './comuna';

export class Barrio {
    barrioId: string | undefined;
    NombreBarrio: string | undefined;
    estratoBarrio: string | undefined;
    comunaId: string | undefined;
    comuna: Comuna | undefined;
}
