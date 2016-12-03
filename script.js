var nbj,j1,j2,nb;

nbj=parseInt(prompt("1 ou 2 joueurs?"))



function jeu1(){

  nb=Math.round(Math.random()*100)
  jeu(nb)
  nouv=(prompt("nouvelle partie? O/N"))
  if(nouv=="O"){
    jeu1()
  }

}
if(nbj==1){
  nb=Math.round(Math.random()*100)
  jeu(nb)
  nouv=(prompt("nouvelle partie? O/N"))
  if(nouv=="O"){
    nb=Math.round(Math.random()*100)
    jeu(nb)
  }

}else{
  j1=(prompt("prenom du premier joueur"))
  j2=(prompt("prenom du second joueur"))
 jeua2(j1,j2)
}

 function jeua2(j1,j2){
  nb=parseInt(prompt(j1+" entre un nombre entre 0 et 100 sans que "+j2+" le voi"))
  jeu(nb)
  nouv=(prompt("nouvelle partie? O/N"))
  if(nouv=="O"){
    j=j1
    j1=j2
    j2=j
    jeua2(j1,j2)
  }
}

function jeu(nb){
  var i=1
  /*console.log(nb)*/
  ch=prompt("chiffre")
  if (ch=="kc"){alert(nb);ch=prompt("chiffre") }
  while(nb!=ch){
    i++
    if(nb>ch){
      txt="plus grand"
    }else if(nb<ch){
      txt="plus petit"
    }
    ch=prompt(txt)
    if (ch=="kc"){alert(nb);ch=prompt("chiffre") }
    ch=parseInt(ch)

  }
  if(nb==ch){alert("gagné en "+i+" essaie")}
}

