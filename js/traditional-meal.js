$('document').ready(function(){
    
   /******************************LIMA****************/ 

$('#restMeal').text(localStorage.ContRest1);
  
    if ($('#restMeal').text() === 'yume') {
        
        var Plate1 = data['LIMA-COSTA']['yume']['platos'][0]['nombre']; 
        var Plate2 = data['LIMA-COSTA']['yume']['platos'][1]['nombre']; 
        var Plate3 = data['LIMA-COSTA']['yume']['platos'][2]['nombre']; 
        $('#plate1').text(Plate1);
        $('#plate2').text(Plate2);
        $('#plate3').text(Plate3);

        $('#imgplate1').attr('src', '../assets/img/causalimeña.jpg');
        $('#imgplate2').attr('src', '../assets/img/ajideGallina.jpg');
        $('#imgplate3').attr('src', '../assets/img/sopaSeca.jpg');
      
    }

 $('#restMeal').text(localStorage.ContRest2);

    if ($('#restMeal').text() === 'Madam Tusam') {

        var Plate1 = data['LIMA-COSTA']['Madam Tusam']['platos'][0]['nombre'];
        var Plate2 = data['LIMA-COSTA']['Madam Tusam']['platos'][1]['nombre'];
        var Plate3 = data['LIMA-COSTA']['Madam Tusam']['platos'][2]['nombre'];
        $('#plate1').text(Plate1);
        $('#plate2').text(Plate2);
        $('#plate3').text(Plate3);

        $('#imgplate1').attr('src', '../assets/img/polloalaBrasa.jpg');
        $('#imgplate2').attr('src', '../assets/img/chaufa.jpg');
        $('#imgplate3').attr('src', '../assets/img/tallarin.jpg');

    }

    $('#restMeal').text(localStorage.ContRest3);

    if ($('#restMeal').text() === 'La red') {

        var Plate1 = data['LIMA-COSTA']['La red']['platos'][0]['nombre'];
        var Plate2 = data['LIMA-COSTA']['La red']['platos'][1]['nombre'];
        var Plate3 = data['LIMA-COSTA']['La red']['platos'][2]['nombre'];
        $('#plate1').text(Plate1);
        $('#plate2').text(Plate2);
        $('#plate3').text(Plate3);

        $('#imgplate1').attr('src', '../assets/img/tamal.jpg');
        $('#imgplate2').attr('src', '../assets/img/encebollado.jpg');
        $('#imgplate3').attr('src', '../assets/img/bandera.jpg');

    }

    $('#restMeal').text(localStorage.ContRest4);

    if ($('#restMeal').text() === 'Punto Azul') {

        var Plate1 = data['LIMA-COSTA']['Punto Azul']['platos'][0]['nombre'];
        var Plate2 = data['LIMA-COSTA']['Punto Azul']['platos'][1]['nombre'];
        var Plate3 = data['LIMA-COSTA']['Punto Azul']['platos'][2]['nombre'];
        $('#plate1').text(Plate1);
        $('#plate2').text(Plate2);
        $('#plate3').text(Plate3);

        $('#imgplate1').attr('src', '../assets/img/patacon.jpg');
        $('#imgplate2').attr('src', '../assets/img/sopaMarinera.jpg');
        $('#imgplate3').attr('src', '../assets/img/muhcines.jpg');

    }

     /******************************HUANCAYO****************/
       
    $('#restMeal').text(localStorage.ContRest1);

    if ($('#restMeal').text() === 'Olimpico') {

        var Plate1 = data['HUANCAYO-SIERRA']['Olimpico']['platos'][0]['nombre'];
        var Plate2 = data['HUANCAYO-SIERRA']['Olimpico']['platos'][1]['nombre'];
        var Plate3 = data['HUANCAYO-SIERRA']['Olimpico']['platos'][2]['nombre'];
        $('#plate1').text(Plate1);
        $('#plate2').text(Plate2);
        $('#plate3').text(Plate3);

        $('#imgplate1').attr('src', '../assets/img/truchaFrita.jpg');
        $('#imgplate2').attr('src', '../assets/img/pachamanca.jpg');
        $('#imgplate3').attr('src', '../assets/img/patasca.jpg');

    }

    $('#restMeal').text(localStorage.ContRest2);

    if ($('#restMeal').text() === 'la-tullpa') {

        var Plate1 = data['HUANCAYO-SIERRA']['la-tullpa']['platos'][0]['nombre'];
        var Plate2 = data['HUANCAYO-SIERRA']['la-tullpa']['platos'][1]['nombre'];
        var Plate3 = data['HUANCAYO-SIERRA']['la-tullpa']['platos'][2]['nombre'];
        $('#plate1').text(Plate1);
        $('#plate2').text(Plate2);
        $('#plate3').text(Plate3);

        $('#imgplate1').attr('src', '../assets/img/cuy.jpg');
        $('#imgplate2').attr('src', '../assets/img/carnero al palo.jpg');
        $('#imgplate3').attr('src', '../assets/img/lengua.JPG');

    }

    $('#restMeal').text(localStorage.ContRest3);

    if ($('#restMeal').text() === 'el-padrino') {

        var Plate1 = data['HUANCAYO-SIERRA']['el-padrino']['platos'][0]['nombre'];
        var Plate2 = data['HUANCAYO-SIERRA']['el-padrino']['platos'][1]['nombre'];
        var Plate3 = data['HUANCAYO-SIERRA']['el-padrino']['platos'][2]['nombre'];
        $('#plate1').text(Plate1);
        $('#plate2').text(Plate2);
        $('#plate3').text(Plate3);

        $('#imgplate1').attr('src', '../assets/img/humita.JPG');
        $('#imgplate2').attr('src', '../assets/img/calabza.jpg');
        $('#imgplate3').attr('src', '../assets/img/ocopa.jpg');

    }

    $('#restMeal').text(localStorage.ContRest4);

    if ($('#restMeal').text() === 'leopardo') {

        var Plate1 = data['HUANCAYO-SIERRA']['leopardo']['platos'][0]['nombre'];
        var Plate2 = data['HUANCAYO-SIERRA']['leopardo']['platos'][1]['nombre'];
        var Plate3 = data['HUANCAYO-SIERRA']['leopardo']['platos'][2]['nombre'];
        $('#plate1').text(Plate1);
        $('#plate2').text(Plate2);
        $('#plate3').text(Plate3);

        $('#imgplate1').attr('src', '../assets/img/huancaina.jpg');
        $('#imgplate2').attr('src', '../assets/img/chupeverde.jpg');
        $('#imgplate3').attr('src', '../assets/img/chancho.jpg');

    }


      /******************************SELVA****************/

    $('#restMeal').text(localStorage.ContRest1);

    if ($('#restMeal').text() === 'shekina') {

        var Plate1 = data['CHANCHAMAYO-SELVA']['shekina']['platos'][0]['nombre'];
        var Plate2 = data['CHANCHAMAYO-SELVA']['shekina']['platos'][1]['nombre'];
        var Plate3 = data['CHANCHAMAYO-SELVA']['shekina']['platos'][2]['nombre'];
        $('#plate1').text(Plate1);
        $('#plate2').text(Plate2);
        $('#plate3').text(Plate3);

        $('#imgplate1').attr('src', '../assets/img/juanesdegallina.jpg');
        $('#imgplate2').attr('src', '../assets/img/chipado.jpg');
        $('#imgplate3').attr('src', '../assets/img/cecina.jpg');

    }

    $('#restMeal').text(localStorage.ContRest2);

    if ($('#restMeal').text() === 'mishaja') {

        var Plate1 = data['CHANCHAMAYO-SELVA']['mishaja']['platos'][0]['nombre'];
        var Plate2 = data['CHANCHAMAYO-SELVA']['mishaja']['platos'][1]['nombre'];
        var Plate3 = data['CHANCHAMAYO-SELVA']['mishaja']['platos'][2]['nombre'];
        $('#plate1').text(Plate1);
        $('#plate2').text(Plate2);
        $('#plate3').text(Plate3);

        $('#imgplate1').attr('src', '../assets/img/tacacho.jpg');
        $('#imgplate2').attr('src', '../assets/img/sudadodeDoncella.jpg');
        $('#imgplate3').attr('src', '../assets/img/patarashca.jpg');

    }

    $('#restMeal').text(localStorage.ContRest3);

    if ($('#restMeal').text() === 'la tranquera') {

        var Plate1 = data['CHANCHAMAYO-SELVA']['la tranquera']['platos'][0]['nombre'];
        var Plate2 = data['CHANCHAMAYO-SELVA']['la tranquera']['platos'][1]['nombre'];
        var Plate3 = data['CHANCHAMAYO-SELVA']['la tranquera']['platos'][2]['nombre'];
        $('#plate1').text(Plate1);
        $('#plate2').text(Plate2);
        $('#plate3').text(Plate3);

        $('#imgplate1').attr('src', '../assets/img/paiche.jpg');
        $('#imgplate2').attr('src', '../assets/img/chonta.jpg');
        $('#imgplate3').attr('src', '../assets/img/cevichedeDoncella.jpg');

    }

    $('#restMeal').text(localStorage.ContRest4);

    if ($('#restMeal').text() === 'shambori-campa') {

        var Plate1 = data['CHANCHAMAYO-SELVA']['shambori-campa']['platos'][0]['nombre'];
        var Plate2 = data['CHANCHAMAYO-SELVA']['shambori-campa']['platos'][1]['nombre'];
        var Plate3 = data['CHANCHAMAYO-SELVA']['shambori-campa']['platos'][2]['nombre'];
        $('#plate1').text(Plate1);
        $('#plate2').text(Plate2);
        $('#plate3').text(Plate3);

        $('#imgplate1').attr('src', '../assets/img/suri.jpg');
        $('#imgplate2').attr('src', '../assets/img/chorizo.JPG');
        $('#imgplate3').attr('src', '../assets/img/timbuche.jpg');

    }
 
    /**************************************MODAL************************/

   
   








});

