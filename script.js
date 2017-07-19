


firebase.database().ref('/users/').on('value', function (snapshot) {
    let data = snapshot.val();

   // console.log('table user', data);
    //console.log('nombre de user = ', data.length);

    let plop = [];

    //récupère les entrées utilisateurs de la database
    for (key in data) {
        /*console.log('username = ',key);*/
        plop.push(key);

    }

    // affiche le nombre total d'utilisateur
  //  console.log('nombre de user = ', plop.length);
    var nbrusr = plop.length;



    //afficher user n4
    //console.log('user n0 4', data[plop[5]]);

    var usr = data[plop[5]].username;
    var photo = data[plop[5]].isPhoto;
    var inscri = data[plop[5]].created;
    var cat = data[plop[5]].categoryActive;

    var foo = null;

    for (key in cat) {
        foo = (cat[key]);
        break;
    }


    /* console.log('catégorie associée',cat);*/



    // afficher tout les user
    for (let i = 0; i < plop.length; i++) {
        /*console.log('usr list : ', data[plop[i]]);*/
        var users = data[plop[i]];
    }
    var fooo = null;

    for (key in users) {
        fooo = (users[key]);
    }



    // Affiche dans le DOM les données récoltées

    $('#nbruser').append("<h1>" + nbrusr + "</h1>");

    $('#table_body').append("<tr><td>" + "Nom de l'utilisateur : " + usr + "</td><td><tr><td>" + "Prise de photo : " + photo + "</td><td><tr><td>" + " Date de création du compte: " + inscri + "</td><td><tr><td>" + "Photo parties du corps: " + foo + "</tr><td><tr><td>" + fooo + "<tr><td>");



    //afficher si le user 3 a posté une photo
    /*console.log('magimagie',data[plop[2]].isPhoto);*/


});


firebase.database().ref('/photos/').on('value', function (snapshot) {

    let dataa = snapshot.val();
    console.log("nbr photos: ", dataa);

    let plop = [];

    for (key in dataa) {
        /*console.log('username = ',key);*/
        plop.push(key);
    }

    var nbrphotos = plop.length;

    console.log("nbr photos: ", nbrphotos);

    // afficher tout les user
    for (let i = 0; i < plop.length; i++) {
        console.log('like list : ', dataa[plop[i]]);
        var likes = dataa[plop[i]];

    }



    // Affiche dans le DOM les données récoltées

    $('#nbrphoto').append("<h1>"+ nbrphotos + "</h1>");







});


firebase.database().ref('/users/categoryActive').on('value', function (snapshot) {




});


