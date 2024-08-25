function esBisiesto(anio){
    let result;
    if (anio%400 === 0){
        result = true;
    }
    else{
        result = false;
    }
    return result;
}
export default esBisiesto;