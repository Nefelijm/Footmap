$('document').ready(function(){

 $('#RestName').text(localStorage.input);

    if ($('#RestName').text() === 'LIMA-COSTA') {
        var Restaurant1 = Object.keys(data['LIMA-COSTA'])[0];
        var Restaurant2 = Object.keys(data['LIMA-COSTA'])[1];
        var Restaurant3 = Object.keys(data['LIMA-COSTA'])[2];
        var Restaurant4 = Object.keys(data['LIMA-COSTA'])[3];

        $('#Rest1').text(Restaurant1);
        $('#Rest2').text(Restaurant2);
        $('#Rest3').text(Restaurant3);
        $('#Rest4').text(Restaurant4);

        $('#img1').attr('src', '../assets/img/yume.jpg');
        $('#img2').attr('src', '../assets/img/madamTusam.jpg');
        $('#img3').attr('src', '../assets/img/puntoAzul.jpg');
        $('#img4').attr('src', '../assets/img/laRed.jpg');

}

    if ($('#RestName').text() === 'HUANCAYO-SIERRA') {
        var Restaurant1 = Object.keys(data['HUANCAYO-SIERRA'])[0];
        var Restaurant2 = Object.keys(data['HUANCAYO-SIERRA'])[1];
        var Restaurant3 = Object.keys(data['HUANCAYO-SIERRA'])[2];
        var Restaurant4 = Object.keys(data['HUANCAYO-SIERRA'])[3];

        $('#Rest1').text(Restaurant1);
        $('#Rest2').text(Restaurant2);
        $('#Rest3').text(Restaurant3);
        $('#Rest4').text(Restaurant4);

        $('#img1').attr('src','../assets/img/olimpico.jpg');
        $('#img2').attr('src','../assets/img/tullpa.jpg');
        $('#img3').attr('src', '../assets/img/padrino.jpg');
        $('#img4').attr('src', '../assets/img/leopardo.jpg');
    }

    if ($('#RestName').text() === 'CHANCHAMAYO-SELVA') {
        var Restaurant1 = Object.keys(data['CHANCHAMAYO-SELVA'])[0];
        var Restaurant2 = Object.keys(data['CHANCHAMAYO-SELVA'])[1];
        var Restaurant3 = Object.keys(data['CHANCHAMAYO-SELVA'])[2];
        var Restaurant4 = Object.keys(data['CHANCHAMAYO-SELVA'])[3];

        $('#Rest1').text(Restaurant1);
        $('#Rest2').text(Restaurant2);
        $('#Rest3').text(Restaurant3);
        $('#Rest4').text(Restaurant4);

        $('#img1').attr('src', '../assets/img/shekina.jpg');
        $('#img2').attr('src', '../assets/img/mishaja.jpg');
        $('#img3').attr('src', '../assets/img/tranquera.jpg');
        $('#img4').attr('src', '../assets/img/shambari.jpg');
    }
   
    $('#Rest1,#Rest2, #Rest3, #Rest4').click(function () {

        localStorage.ContRest1 = $('#Rest1').text();
        localStorage.ContRest2 = $('#Rest2').text();
        localStorage.ContRest3 = $('#Rest3').text();
        localStorage.ContRest4 = $('#Rest4').text();

        window.location.href = '../views/traditional-meal.html';

    });





});