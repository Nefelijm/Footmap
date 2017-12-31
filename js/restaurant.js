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
    }
   






});