function inserirDadosDisplay(component) {
    let tela = document.querySelector(".display");
    if (component.value !== "AC") {
        tela.value = tela.value + component.value;
    }
    if (component.value === "AC") {
        tela.value = "";
    }
}

function resultadoExpressao(component) {
    let tela = document.querySelector(".display");
    if (tela) { //verifica se a tela esta disponivel
        if (tela.value === "" && component.value === "=") { //impede que o usuario aperte o botao igual sem ter expressao na tela
            tela.value = "";
        }
        else {
            if (eval(tela.value) == Number.POSITIVE_INFINITY || eval(tela.value) == Number.NEGATIVE_INFINITY || eval(tela.value) == NaN) {
                tela.value = "Ind."; //tratamento de indeterminacoes matematicas
            }
            else {
                tela.value = eval(tela.value); //expressao matematica valida
            }
        }
    }
}

