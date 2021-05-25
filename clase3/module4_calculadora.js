exports.calc = function(operation, n1, n2){

    if(operation == "suma"){
        sumaResult = n1 + n2
        return sumaResult
    }else if(operation == "resta"){
        restaResult = n1 - n2;
        return restaResult
    }else if(operation == "multiplicacion"){
        multiResult = n1 * n2;
        return multiResult
    }else if(operation == "division"){
        if(n2 == 0){
            let divError = "0 no es un valor por el que se pueda dividir, por favor ingrese otro valor"
            return divError
        }else{
        divResult = n1 / n2;
        return divResult
        }
    }
}