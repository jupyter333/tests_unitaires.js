// Fonction qui retourne la longeur d'une chaine
export function countLength(str) {
    let length = 0;

    // boucler jusqu'a la fin de la chaine
    while (str[length] !== undefined) {
        length++;
    }

    return length; // Return the counted length
}
