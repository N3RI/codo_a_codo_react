const lista = document.querySelector("ul");
const valores = ["valor1", "valor2", "valor3", "valor4", "valor5", "valor6"];
for (let i = 0; i < valores.length; i++) {
	const li = document.createElement("li");
	li.textContent = valores[i];
	lista.appendChild(li);
}

//En Javascript
function changeStyle() {
document.getElementsByClassName("input-blue-border")[0].style.borderColor = "red";
}