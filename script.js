//url de l'API
const url = 'https://blockchain.info/ticker';

//fonction pour créer l'actualisation
function recupererPrix() {
//création de la requête
    let requete = new XMLHttpRequest();
//ouverture d'une requête
    requete.open('GET', url);
//indique le type de la réponse
    requete.responseType = 'json';
//envoie de la requête
    requete.send();

//traitement de la réponse
    requete.onload = function () {
        //si la requête est bien arrivée
        if (requete.readyState === XMLHttpRequest.DONE) {
            //si aucun code d'erreur
            if (requete.status === 200) {
                //stockage de la réponse
                let reponse = requete.response;
                //on recherche notre variable spécifique dans le JSON
                let prixEuros = reponse.EUR.last;
                //affichage dans le html
                document.querySelector('#price_label').textContent = prixEuros;
            } else {
                alert("Un problème est intervenu");
            }
        }
    }
}
//actualisation toutes les secondes en créant un interval
setInterval(recupererPrix,1000);

