import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalInformativoComponent } from 'src/app/shared/components/modal-informativo/modal-informativo.component';

enum ErrorCode {
  "auth/claims-too-large" = "La carga útil reivindicaciones proporcionado a setCustomUserClaims () supera el tamaño máximo permitido de 1000 bytes.",
  "auth/email-already-exists" = "El correo electrónico proporcionado ya está en uso por un usuario existente. Cada usuario debe tener un correo electrónico única.",
  "auth/id-token-expired" = "El token Firebase ID proporcionada es vencida.",
  "auth/id-token-revoked" = "El token Firebase ID ha sido revocado.",
  "auth/insufficient-permission" = "La credencial se utiliza para inicializar el SDK del administrador no tiene suficiente permiso para acceder al recurso solicitado autenticación. Consulte a establecer un proyecto Firebase para la documentación sobre cómo generar una credencial con los permisos adecuados y lo utilizan para autenticar a los SDK de administración.",
  "auth/internal-error" = "El servidor de autenticación encontró un error inesperado al intentar procesar la solicitud. El mensaje de error debería contener la respuesta del servidor de autenticación que contiene información adicional. Si el error persiste, por favor, informe del problema en nuestro informe de errores canal de soporte.",
  "auth/invalid-argument" = "Un argumento no válido se proporcionó a un método de autenticación. El mensaje de error debería contener información adicional.",
  "auth/invalid-claims" = "Los atributos de reclamación personalizados proporcionados a setCustomUserClaims () no son válidos.",
  "auth/invalid-continue-uri" = "El continúan URL debe ser una cadena URL válida.",
  "auth/invalid-creation-time" = "El tiempo de creación debe ser una cadena de fecha UTC válida.",
  "auth/invalid-credential" = "La credencial utilizada para autenticar el SDK de Administrador, no se puede utilizar para llevar a cabo la acción deseada. Ciertos métodos de autenticación tales como createCustomToken () y verifyIdToken () requieren el SDK que ser inicializado con una credencial certificado en oposición a una credencial predeterminado de fichas o de aplicación de actualización. Ver inicializar el SDK para documentación sobre cómo autenticar a los SDK de administración con una credencial certificado.",
  "auth/invalid-disabled-field" = "El valor proporcionado para la propiedad usuario deshabilitado no es válido. Debe ser un valor lógico.",
  "auth/invalid-display-name" = "El valor proporcionado para la propiedad Usuario idioma no es válido. Debe ser una cadena vacía.",
  "auth/invalid-dynamic-link-domain" = "El dominio de enlace dinámico proporcionado no está configurado o autorizado para el proyecto actual.",
  "auth/invalid-email" = "El valor proporcionado para la propiedad de usuario de correo electrónico no es válida. Debe ser una dirección de correo electrónico cadena.",
  "auth/invalid-email-verified" = "El valor proporcionado para la propiedad Usuario emailVerified no es válido. Debe ser un valor lógico.",
  "auth/invalid-hash-algorithm" = "El algoritmo de hash debe coincidir con una de las cadenas de la lista de algoritmos soportados.",
  "auth/invalid-hash-block-size" = "El tamaño del bloque de hash debe ser un número válido.",
  "auth/invalid-hash-derived-key-length" = "La longitud de la clave de hash derivado debe ser un número válido.",
  "auth/invalid-hash-key" = "La clave hash debe amortiguar un byte válido.",
  "auth/invalid-hash-memory-cost" = "El coste de memoria de hash debe ser un número válido.",
  "auth/invalid-hash-parallelization" = "La paralelización de hash debe ser un número válido.",
  "auth/invalid-hash-rounds" = "Las rondas de hash debe ser un número válido.",
  "auth/invalid-hash-salt-separator" = "El campo separador de sal algoritmo de hash debe ser un búfer de bytes válidos.",
  "auth/invalid-id-token" = "El testigo de identificación proporcionada no es una ficha Firebase identificación válida.",
  "auth/invalid-last-sign-in-time" = "La última sesión en el tiempo debe ser una cadena de fecha UTC válida.",
  "auth/invalid-page-token" = "La página siguiente provisto de ficha en Listusers () no es válido. Debe ser una cadena no vacía válida.",
  "auth/invalid-password" = "El valor proporcionado para la propiedad de usuario contraseña no es válida. Debe ser una cadena con al menos seis caracteres.",
  "auth/invalid-password-hash" = "El hash de la contraseña debe ser un búfer de bytes válidos.",
  "auth/invalid-password-salt" = "La sal de contraseña debe ser una memoria intermedia de bytes válidos",
  "auth/invalid-phone-number" = "El valor proporcionado para la phoneNumber no es válido. Debe ser una cadena de identificador compatible E.164 no vacío estándar.",
  "auth/invalid-photo-url" = "El valor proporcionado para la propiedad Usuario photoURL no es válido. Debe ser una URL cadena.",
  "auth/invalid-provider-data" = "El providerData debe ser una matriz válida de objetos UserInfo.",
  "auth/invalid-provider-id" = "El ProviderId debe ser una cadena de identificador de proveedor admitido válida.",
  "auth/invalid-oauth-responsetype" = "Sólo exactamente un OAuth responseType se debe establecer en true.",
  "auth/invalid-session-cookie-duration" = "La duración de cookies de sesión debe ser un número válido en milisegundos entre 5 minutos y 2 semanas.",
  "auth/invalid-uid" = "El fluido suministrado debe ser una cadena no vacía con un máximo de 128 caracteres.",
  "auth/invalid-user-import" = "El registro de usuario a la importación no es válido.",
  "auth/maximum-user-count-exceeded" = "Se ha superado el número máximo permitido de los usuarios de importación.",
  "auth/missing-android-pkg-name" = "Un Android Nombre del paquete se debe proporcionar si se requiere la aplicación para Android para ser instalado.",
  "auth/missing-continue-uri" = "Una válida siguen URL debe estar dentro de la solicitud.",
  "auth/missing-hash-algorithm" = "Importación de usuarios con los hashes de contraseñas requiere que se proporcionen el algoritmo de hash y sus parámetros.",
  "auth/missing-ios-bundle-id" = "En la solicitud falta un IOS ID de paquete.",
  "auth/missing-uid" = "Se requiere un identificador uid para la operación actual.",
  "auth/missing-oauth-client-secret" = "Se requiere que el secreto de cliente de configuración de OAuth para permitir el flujo de código PeDIP.",
  "auth/operation-not-allowed" = "El inicio de sesión en el proveedor siempre está deshabilitado para su proyecto Firebase. Activar desde la sección de inicio de sesión en el Método de la consola Firebase.",
  "auth/phone-number-already-exists" = "La proporcionado phoneNumber ya está en uso por un usuario existente. Cada usuario debe tener un phoneNumber único.",
  "auth/project-not-found" = "Sin Firebase proyecto se encontró para la credencial utilizada para inicializar los SDK de administración. Consulte a establecer un proyecto Firebase para la documentación sobre cómo generar una credencial para su proyecto y lo utilizan para autenticar a los SDK de administración.",
  "auth/reserved-claims" = "Una o más reivindicaciones de usuario personalizados proporcionados a setCustomUserClaims () están reservados. Por ejemplo, las demandas específicas OIDC tales como (sub, IAT, ISS, exp, aud, auth_time, etc) no deben ser utilizados como claves para notificaciones personalizadas.",
  "auth/session-cookie-expired" = "La cookie de sesión Firebase proporcionado ha caducado.",
  "auth/session-cookie-revoked" = "La cookie de sesión Firebase ha sido revocado.",
  "auth/uid-already-exists" = "El UID proporcionado ya está en uso por un usuario existente. Cada usuario debe tener un UID único.",
  "auth/unauthorized-continue-uri" = "El dominio de la URL no se siguen en la lista blanca. Lista blanca del dominio en la consola de Firebase.",
  "auth/user-not-found" = "No hay ningún registro de usuario existente correspondiente al identificador proporcionado.",
  "auth/wrong-password" = "La contraseña no es válida o el usuario no tiene contraseña.",
  'cancelled' =	"La operación fue cancelada (típicamente por la persona que llama).",
  'unknown' =	"error desconocido o un error de un dominio de error diferente.",
  'invalid-argument' =	"Cliente especifica un argumento no válido. Tenga en cuenta que esto difiere de 'error-precondición'. 'No válido argumento' indica argumentos que son problemáticas, independientemente del estado del sistema (por ejemplo, un nombre de campo no válido).",
  'deadline-exceeded' =	"Plazo expiró antes de la operación podría completarse. Para las operaciones que cambian el estado del sistema, este error puede ser devuelto incluso si la operación se ha completado con éxito. Por ejemplo, una respuesta exitosa de un servidor podría haber sido retrasado lo suficiente para que el plazo expire.",
  'not-found' =	"no se encontró algún documento solicitado.",
  'already-exists' =	"Algún documento que se intentó crear ya existe.",
  'permission-denied' =	"El usuario no tiene permiso para ejecutar la operación especificada.",
  'resource-exhausted' =	"Algunos recursos se ha agotado, tal vez una cuota por usuario, o tal vez todo el sistema de archivos está fuera del espacio.",
  'failed-precondition' =	"Operación fue rechazada debido a que el sistema no está en un estado requerido para la ejecución de la operación.",
  'aborted' =	"La operación fue abortada, típicamente debido a un problema de concurrencia como aborta la transacción, etc.",
  'out-of-range' =	"La operación se ha intentado más allá del rango válido.",
  'unimplemented' =	"La operación no se lleva a cabo o no es compatible / activada.",
  'internal' =	"Los errores internos. Medios algunas invariantes esperados por el sistema subyacente se ha roto. Si ve uno de estos errores, algo está muy roto.",
  'unavailable' =	"El servicio no está disponible actualmente. Esto es más probable una condición transitoria y puede ser corregido por volver a intentar con un retardo de envío.",
  'data-loss' =	"pérdida de datos irrecuperable o corrupción.",
  'unauthenticated' =	"La solicitud no tiene credenciales de autenticación válidas para la operación.",
  "permission_denied at /roles: Client doesn't have permission to access the desired data." = "El cliente no tiene permiso para acceder a los datos deseados."
}
type errorString = keyof typeof ErrorCode
@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {



  constructor(
    private dialog: MatDialog

  ) { }

 // type LogLevelStrings = keyof typeof ErrorCode;

  modalInformativo(informacion:{titulo: string, descripcion?: any, errorCode?: errorString}){
 
    if(informacion.errorCode){
      informacion.descripcion = ErrorCode[informacion.errorCode];
    }
    
    let codeErrorKeys = Object.keys(ErrorCode)

    if(codeErrorKeys.includes(informacion.descripcion)){
      let indexError = codeErrorKeys.indexOf(informacion.descripcion)
      let nuevaDescripcion = Object.values(ErrorCode)[indexError]
      informacion.descripcion = nuevaDescripcion;
    }
   
      const dialogRef = this.dialog.open(ModalInformativoComponent, { data: informacion });
      dialogRef.afterClosed().subscribe(datos => {
        console.log('modal cerrado');
        //luego de recibir los datos los mandamos a firebase
      });
    
  }
}
