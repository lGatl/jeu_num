var nbj,j1,j2,nb;

nbj = parseInt(prompt("1 ou 2 joueurs?"));     /* on demande le nombre de joueurs */

if(nbj == 1){                                 /* si 1 lance le mode 1 joueur */
  jeu1();
}else{
  j1 = (prompt("prenom du premier joueur"));  /* si 2 demande les prenoms des joueurs */
  j2 = (prompt("prenom du second joueur"));
 jeua2(j1,j2);                               /* puis lance le mode 2 joueur avec les 2 prenoms en arguments*/
};

/*-------------------   1 JOUEUR ----------------------*/
function jeu1(){

  nb = Math.round(Math.random()*100);         /* on genère un nombre à trouver */
  jeu(nb);                                    /*==== On lance jeu() pour faire deviner ========*/
  nouv = (prompt("nouvelle partie? O/N"));    /* On arrive ici en cas de victoire, on propose une nouvelle partie */
  nouv == "O" ? jeu1() : alert("A+");         /* si oui on relance cette meme fonction sinon a+*/
};

/*-------------------   2 JOUEURS ----------------------*/
 function jeua2(j1,j2){

  nb = parseInt(prompt(j1 + " entre un nombre entre 0 et 100 sans que " + j2 + " le voi")); /*On demande à j1 de rentrer un nombre*/
  jeu(nb);                                    /*============ On lance jeu() pour faire deviner ==========*/
  nouv = (prompt("nouvelle partie? O/N"));    /* On arrive ici en cas de victoire, on propose une nouvelle partie */
  nouv == "O" ? (j=j1, j1=j2, j2=j, jeua2(j1,j2)) : alert("A+"); /* si oui on inverse les joueurs puis relance cette meme fonction sinon a+*/
}
/*============== Le JEU, Faire Deviner ===============*/
function jeu(nb){

  var i = 1, ch = "", txt = "chiffre";        /* initialise un compteur  et le texte du premier essaie */

  while(nb != ch){                            /* tant que pas trouvé */
    i++
    ch = prompt(txt);                         /* Demande un essaie */
    ch == "kc" ? (alert(nb), ch = prompt("chiffre")) : ""; /* si code triche, affiche resultat puis redemande un essaie */
    ch = parseInt(ch);
    nb > ch ? txt = "plus grand" : nb < ch ? txt = "plus petit" : "";/* si en dessous le dit si au dessus le dit sinon rien */
  }
  nb == ch ? alert("gagné en " + i + " essaie"):"";/*si gagné le dit*/
}


