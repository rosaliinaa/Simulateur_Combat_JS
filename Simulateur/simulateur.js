class Fighter {
    constructor(name, hp, atk, precision) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.precision = precision/100.0
    }
// Défini les caractéristiques des personnages 
    receiveDamage(atk_value) {
        this.hp=this.hp-atk_value       
    }
// Retire des points de vie au personnage qui se fait attaquer
    isDead(){
        if (this.hp <= 0)
            return 1
        return 0
    }
// Vérifie que le personnage est mort ou non
    canFight() {
        var rnd_value = Math.random()
        if ( rnd_value < this.precision) {
            console.log (this.name + " can fight.")
            return 1
        }
        console.log (this.name + " can't fight.")
        return 0
    }
}
// Décide aléatoirement si le personnage peut attaquer ou non


let pnj1 = new Fighter("Gregoire",20,1,80)
let pnj2 = new Fighter("Bob",20,2,50)
var i = 1
// Définie 2 personnages avec des caractéristiques différentes

while ((pnj1.isDead() == 0) && (pnj2.isDead() == 0)){
    // Créer une boucle qui permet de continuer le combat jusqu'à ce que l'un des personnages meurt
    console.log("Round number : "+i++)
    // Annonce le numéro de tour en cours
    if (pnj1.canFight()){
        console.log (pnj2.name + " receive " + pnj1.atk + " damage points.")
        pnj2.receiveDamage (pnj1.atk)
    }
    // Affiche le nombre de dégat qu'inflige Gregoire à Bob 
    if (pnj2.isDead() == 0){
        if (pnj2.canFight()){
            console.log (pnj1.name + " receive " + pnj2.atk + " damage points.")
            pnj1.receiveDamage(pnj2.atk)
        }
    // Affiche le nombre de dégat qu'inflige Bob à Gregoire 
        if (pnj1.isDead()){
            console.log (pnj1.name + " is dead. RIP! " + pnj2.name + " wins after " + i + " rounds " + "with " + pnj2.hp + " HP left !!!!")
        }
    // Affiche la mort de Gregoire et la victoire de Bob
    }
    else {
        console.log (pnj2.name + " is dead. RIP! " + pnj1.name + " wins after " + i + " rounds " + "with " + pnj1.hp + " HP left !!!!")
    }
    // Affiche la mort de Bob et la victoire de Gregoire
}


