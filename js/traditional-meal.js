$('document').ready(function(){
     
    $('#restMeal').text(localStorage.ContRest);



  
    if ($('#restMeal').text() === 'yume') {
        
        var Plate1 = data['LIMA-COSTA']['yume']['platos'][0]['nombre']; 
        var Plate2 = data['LIMA-COSTA']['yume']['platos'][1]['nombre']; 
        var Plate3 = data['LIMA-COSTA']['yume']['platos'][2]['nombre']; 
        $('#plate1').text(Plate1);
        $('#plate2').text(Plate2);
        $('#plate3').text(Plate3);

        $('#imgplate1').attr('src', '../assets/img/causalimeña.jpg');


       
    }

    

   
   








});

