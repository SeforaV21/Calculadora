window.onload = function(){ //Acciones tras cargar la p&aacute;gina
    pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
    }
    x="0"; //numero en pantalla
    xi=1; //iniciar numero en pantalla: 1=si; 0=no;
    coma=0; //estado coma decimal 0=no, 1=si;
    ni=0; //n&uacute;mero oculto o en espera.
    op="no"; //numero  en curso; "no" =  sin numero
    
    //mostrar numero en pantalla sy el siguiente se va escribiendo:
    function numero(xx) { //recoge el numero pulsado en el argumento.
             if (x=="0" || xi==1  ) {	// inicializar un numero, 
                pantalla.innerHTML=xx; //mostrar en pantalla
                x=xx; //guardarnumero
                if (xx==".") { //si escribimos una coma al principio del numero
                   pantalla.innerHTML="0."; //escribimos 0.
                   x=xx; //guardar numero
                   coma=1; //cambiar estado de la coma
                   }
               }
               else { //continuar escribiendo un numero
                   if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
                       pantalla.innerHTML+=xx;
                       x+=xx;
                       coma=1; //cambiar el estado de la coma  
                   }
                   //si intentamos escribir una segunda coma decimal no realiza ninguna .
                   else if (xx=="." && coma==1) {} 
                   //Resto de casos: escribir un numero del 0 al 9: 	 
                   else {
                       pantalla.innerHTML+=xx;
                       x+=xx
                   }
                }
                xi=0 //el numero esta; iniciado y podemos ampliarlo.
             }
    function operar(s) {
             igualar() //si hay operaciones pendientes se realizan primero
             ni=x //ponemos el 1º numero en "numero en espera" para poder escribir el segundo.
             op=s; //guardamos tipo de operaci&oacute;n.
             xi=1; //inicializar pantalla.
             }	
    function igualar() {
             if (op=="no") { //no hay ninguna operacion pendiente.
                pantalla.innerHTML=x;	//mostramos el mismo numero	
                }
             else { //con operacion pendiente resolvemos
                sl=ni+op+x; // escribimos la operacion en una cadena
                sol=eval(sl) //convertimos la cadena a cdigo y resolvemos
                pantalla.innerHTML=sol //mostramos la solucion
                x=sol; //guardamos la solucion
                op="no"; //ya no hayn operaciones pendientes
                xi=1; //se puede reiniciar la pantalla.
                }
            }
    function raizc() {
             x=Math.sqrt(x) //resolver la raizcudrada cuadrada.
             pantalla.innerHTML=x; //mostrar en pantalla el resultado
             op="no"; //quitar operaciones pendientes.
             xi=1; //se puede reiniciar la pantalla 
             }