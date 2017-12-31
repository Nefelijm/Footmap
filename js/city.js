$('document').ready(function(){

    $('#city').on('input',function(){
        var citys = Object.keys(data);
        var limaCity = citys[0];
        var huancayoCity = citys[1];
        var selvaCity = citys[2]
        var typeCitys = $('#city').val();

        if (typeCitys === limaCity || typeCitys === huancayoCity || typeCitys === selvaCity) {
          $('#restButton').removeAttr('disabled');
            $('#msj1').text('');
        
      }
      else{
          $('#msj1').text('Escribe una de estas ciudades : LIMA-COSTA, HUANCAYO-SIERRA o CHANCHAMAYO-SELVA)');
          $('#restButton').attr('disabled', 'disabled');      
    
      }

     });

     //Guardadndo los valores del input para la siguiente vista 
    $('#restButton').click(function () {
        localStorage.input = $('#city').val();     
        window.location.href = '../views/restaurant.html';

    });
     


});
