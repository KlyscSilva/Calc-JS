function inserirDadosDisplay(component) {
    let tela = document.querySelector(".display");
    let telaResultado = document.querySelector(".display2");
    if (component.value !== "AC") {
        tela.value = tela.value + component.value;
        resultadoExpressao(component);
    }
    if (component.value === "AC") {
        telaResultado.value = "";
        tela.value = "";
    }
}

function resultadoExpressao(component) {
    let tela = document.querySelector(".display");
    let telaResultado = document.querySelector(".display2");
    if (tela) { //verifica se a tela esta disponivel
        if (tela.value === "" && component.value === "=") { //impede que o usuario aperte o botao igual sem ter expressao na tela
            tela.value = "";
            telaResultado = "";
        }
        else {
            if (eval(tela.value) == Number.POSITIVE_INFINITY || eval(tela.value) == Number.NEGATIVE_INFINITY || eval(tela.value) == NaN) {
                telaResultado.value = "Ind."; //tratamento de indeterminacoes matematicas
            }
            else {
                telaResultado.value = eval(tela.value); //expressao matematica valida
            }
        }
    }
}

function resultadoIgual(component) {
    let tela = document.querySelector(".display");
    let telaResultado = document.querySelector(".display2");
    if (tela) { //verifica se a tela esta disponivel
        if (tela.value === "" && component.value === "=") { //impede que o usuario aperte o botao igual sem ter expressao na tela
            tela.value = "";
        }
        else {
            if (eval(tela.value) == Number.POSITIVE_INFINITY || eval(tela.value) == Number.NEGATIVE_INFINITY || eval(tela.value) == NaN) {
                tela.value = "Ind."; //tratamento de indeterminacoes matematicas
            }
            else {
                var resultado = eval(tela.value); //expressao matematica valida
                tela.value = resultado;
                telaResultado.value = ""; //apaga  o que esta no display2
            }
        }
    }
}
