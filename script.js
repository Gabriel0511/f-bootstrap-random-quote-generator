const frases = [
    {
        frase: "Es esencial que recuerdes que la atención que le des a cualquier acción debe ser proporcional a su valor.",
        autor: "Marco Aurelio"
    }, {
        frase: "No nos atrevemos a muchas cosas porque son difíciles, pero son difíciles porque no nos atrevemos a hacerlas.",
        autor: "Séneca"
    }, {
        frase: "No te sabotees a ti mismo adoptando involuntariamente actitudes negativas e improductivas a través de tus relaciones con otros.",
        autor: "Epicteto"
    }, {
        frase: "Si logras algo bueno con trabajo duro, el trabajo pasa rápido, pero el bien perdura. Si haces algo vergonzoso en busca del placer, el placer pasa rápidamente, pero la vergüenza perdura.",
        autor: "Musonio Rufo"
    }, {
        frase: "Sólo comprendemos aquellas preguntas que podemos responder.",
        autor: "Friedrich Nietzsche"
    }, {
        frase: "Todos los vicios, con tal de que estén de moda, pasan por virtudes.",
        autor: "Molière"
    }, {
        frase: "La gente tarda poco en juzgar, pero mucho en corregirse.",
        autor: "Ezio Auditore"
    }, {
        frase: "No dependas de nadie en este mundo... Porque hasta tu propia sombra te abandona en la oscuridad.",
        autor: "Vergil"
    }, {
        frase: "No elegimos como empezamos en esta vida. La verdadera grandeza es que hacemos con lo que nos toca.",
        autor: "Sully"
    }, {
        frase: "Todos los hombres mueren, pero no todos han vivido.",
        autor: "Braveheart"
    }, {
        frase: "La libertad está en ser dueños de la propia vida.",
        autor: "Platón"
    }, {
        frase: "Daría todo lo que sé, por la mitad de lo que ignoro.",
        autor: "Descartes"
    }
];

window.onload = init;
function init() {
    generarFrase()
}

function generarFrase() {
    let frasesSize = frases.length;
    let fraseRandom = Math.floor(Math.random() * frasesSize);
    let fraseRandomData = frases[fraseRandom];
    let twitterUrl = "https://twitter.com/intent/tweet?text=" + fraseRandomData.frase + " - " + fraseRandomData.autor;

    $(document).ready(function() {
    $("#text").text(fraseRandomData.frase);
    $("#author").text(fraseRandomData.autor);
    document.getElementById('tweet-quote').href = twitterUrl;
    })
    

}