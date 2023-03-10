function cronometro() {
  let hora = 0,
    minutos = 0,
    segundo = 0;
  while (minutos < 4) {
    if (segundo < 59) {
      segundo++;
    } else {
      segundo = 0;

      if (minutos < 59) {
        minutos++;
      } else {
        minutos = 0;
        hora++;
      }
    }

    //Pausa de un segundo
    //Forma básica
      /*  let fecha=new Date();
        let fecha2=new Date();
        while(fecha2-fecha<1000){
            fecha2=new Date();
        }*/

    //Con promesas
    
    console.log(hora + " : " + minutos + " : " + segundo);
  }
}

cronometro();
