/*



firebase.database().ref('/users/').on('value', function (snapshot) {
    let data = snapshot.val();

   // console.log('table user', data);
    //console.log('nombre de user = ', data.length);

    let plop = [];

    //récupère les entrées utilisateurs de la database
    for (key in data) {
        /!*console.log('username = ',key);*!/
        plop.push(key);

    }

    // affiche le nombre total d'utilisateur
  //  console.log('nombre de user = ', plop.length);
    let nbrusr = plop.length;



    //afficher user n4
    //console.log('user n0 4', data[plop[5]]);

    let usr = data[plop[5]].username;
    let photo = data[plop[5]].isPhoto;
    let inscri = data[plop[5]].created;
    let cat = data[plop[5]].categoryActive;

    let foo = null;

    for (key in cat) {
        foo = (cat[key]);
        break;
    }


    /!* console.log('catégorie associée',cat);*!/



    // afficher tout les user
    for (let i = 0; i < plop.length; i++) {
        /!*console.log('usr list : ', data[plop[i]]);*!/
        let users = data[plop[i]];
    }
    let fooo = null;

    for (key in users) {
        fooo = (users[key]);
    }



    // Affiche dans le DOM les données récoltées

   // $('#nbruser').append("<h1>" + nbrusr + "</h1>");

    //$('#table_body').append("<tr><td>" + "Nom de l'utilisateur : " + usr + "</td><td><tr><td>" + "Prise de photo : " + photo + "</td><td><tr><td>" + " Date de création du compte: " + inscri + "</td><td><tr><td>" + "Photo parties du corps: " + foo + "</tr><td><tr><td>" + fooo + "<tr><td>");



    //afficher si le user 3 a posté une photo
    /!*console.log('magimagie',data[plop[2]].isPhoto);*!/


});


firebase.database().ref('/photos/').on('value', function (snapshot) {

    let dataa = snapshot.val();
    console.log("nbr photos: ", dataa);

    let plop = [];

    for (key in dataa) {
        /!*console.log('username = ',key);*!/
        plop.push(key);
    }

    let nbrphotos = plop.length;

    //console.log("nbr photos: ", nbrphotos);

    // afficher tout les user
    for (let i = 0; i < plop.length; i++) {
        //console.log('like list : ', dataa[plop[i]]);
        let likes = dataa[plop[i]];

    }



    // Affiche dans le DOM les données récoltées

    //$('#nbrphoto').append("<h1>"+ nbrphotos + "</h1>");







});


firebase.database().ref('/users/categoryActive').on('value', function (snapshot) {




});


*/
firebase.database().ref('/users').on('value', function (snapshot) {

let data = snapshot.val();
//console.log(data);


//console.log(data);


    Object.size = function(data) {
        let size = 0, key;
        for (key in data) {
            if (data.hasOwnProperty(key)) size++;
        }
        return size;
    };

// Get the size of an object
    let size = Object.keys(data).length;
    //console.log(size);

    document.getElementById('nbruser').innerHTML =" Nombre d'utilisateurs : " + size;





    let newObj = [];

        let dataB = Object.keys(data).map(function (e) {
            return [Number(e), data[e]];
        });
        dataB.map(function (obj) {
            newObj.push(obj[1])
        });

    //console.log('new obj', newObj);
    for(let i = 0; i<newObj.length;i++){
        //console.log(newObj[i]);
        let container = document.querySelector('.table-striped');
        let ga = document.createElement('tr');
        ga.classList='active';
        ga.innerHTML= newObj[i].username;
        container.appendChild(ga);

    }







    });

firebase.database().ref('/photos').on('value', function (snapshot) {

    let data = snapshot.val();


    //console.log(data);


    Object.size = function(data) {
        let size = 0, key;
        for (key in data) {
            if (data.hasOwnProperty(key)) size++;
        }
        return size;
    };

// Get the size of an object
    let size = Object.keys(data).length;
    //console.log(size);

    document.getElementById('nbrphoto').innerHTML =" Nombre de photos  : " + size;
    let tr = document.getElementsByClassName('active');
    //console.log('tr',tr);


    for(let i=0;i<tr.length;i++) {
        tr[i].addEventListener('click', function () {
            let scrollTop = function() {
                window.scrollTo(0, 0);
            }

            scrollTop();
            document.getElementById('info').classList.toggle('hide');

            //console.log(this);
            //document.getElementsByClassName('liste')[0].classList.toggle('hide');
            //console.log(this.innerHTML);
            firebase.database().ref('/users').orderByChild('username').equalTo(this.innerHTML).on('value', function (snapshot) {

                let data = snapshot.val();
                //console.log('youpi', Object.keys(data)[0]);  id user



                let newObj = [];

                let dataB = Object.keys(data).map(function (e) {
                    return [Number(e), data[e]];
                });
                dataB.map(function (obj) {
                    newObj.push(obj[1])
                });
                console.log(newObj);
                console.log('ce user', newObj[0].username);
                document.getElementById('nom').innerHTML = "nom de l'utilisateur : " + newObj[0].username;
                document.getElementById('mail').innerHTML = "mail de l'utilisateur : " + newObj[0].mail;
                document.getElementById('date').innerHTML = "premiere creation  : " + newObj[0].created;

                if(newObj[0].likeList === true){
                    document.getElementById('like').innerHTML = " l'utilisateur a liké des photos";

                }else{
                    document.getElementById('like').innerHTML = "l'utilisateur n'a pas encore liké de photo";
                }


                let youpiloljesuisocnnexté = function () {

                    // nombre de connexion
                    //console.log(newObj[0]);
                    let nbCO=[];
                    let u = newObj[0].dateList;
                    let plop = Object.keys(u).map(function (e) {
                        return [Number(e), u[e]];
                    });
                    plop.map(function (obj) {
                        nbCO.push(obj[1])
                    });
                    i = nbCO.length +1;
                    document.getElementById('nDate').innerHTML = newObj[0].username + " s'est connecté " + i + " fois";
                };
                youpiloljesuisocnnexté();

                let scopenbPhoto = function () {
                    firebase.database().ref('/photos').orderByChild('userId').equalTo(Object.keys(data)[0]).on('value', function (snapshot) {
                        let youpi = snapshot.val();
                        //console.log('snapchot', youpi);

                        if(youpi != null){
                            let size = Object.keys(youpi);
                            console.log('coucou',size);
                            document.getElementById('photo').innerHTML = " l'utilisateur a posté " + size.length + " photos";

                        }else{
                            document.getElementById('photo').innerHTML = "l'utilisateur n'a pas encore posté de photo";
                        }
                        //console.log('photo de luser', youpi.length);



                    });
                };
                scopenbPhoto();




            });
        })
    }




});


