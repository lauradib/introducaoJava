function fazerCalculo() {
    var number = parseInt(document.getElementById("numero").value);
    var tableHTML = "<h2>Tabuada do " + number + "</h2>";
    for (var i = 1; i <= 10; i++) {
        tableHTML += "<p>" + number + " x " + i + " = " + (number * i) + "</p>";
    }
    document.getElementById("table").innerHTML = tableHTML;
}


function mudarTema() {
    var body = document.body;
    body.classList.toggle("dark");
}
