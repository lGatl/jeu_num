var jqd       = "joueur1",
jqt           = "joueur2",
continuer     = true,
reponseTrouve = false;

while(continuer){                 /*tant que continuer = vrai*/
  var nbrAtrouver = prompt(
    jqd + " donnez un nombre entre 1 et 100"
  );                              /*demmande le nombre à trouver*/
  var nombreDessaie=0;            /*declare la variable qui contera le nombre d'essaie*/
  reponseTrouve = false;          /*initialise la variable qui stopera le code si le nombre est trouvé à faux*/
  while(!reponseTrouve){          /*tant que reponseTrouve = faux */
    nombreDessaie++               /*compte le nombre d'essaie*/
    var nbrePropose = prompt(
      jqt + " essayez de trouver le nombre entre 1 et 100"
    );                            /*demande un essaie*/
    if(nbrAtrouver == nbrePropose){/*verifie si le trouveur à trouvé*/
      reponseTrouve = true;       /*si trouvé on met cette information en variable*/
      alert("bien ouèj, trouvé en " + reponseTrouve + "essaie");/*On felicite le joueur*/
    } else {                      /*sinon he bien on lui dit de recommencer*/
      alert("non, nouvel essaie");
    };
  };/*WHILE END*/
  continuer = confirm("continue?");/*on demande  si ils veulent continuer*/
  continuer ? (j = jqd, jqd = jqt, jqt = j) :/*si ils continuent on inverse les roles*/
  alert("A plus!");/*sinon on est poli on dit au revoir*/
};/*WHILE END*/
