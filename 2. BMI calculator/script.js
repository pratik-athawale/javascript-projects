function calculate()
{
    let h = parseInt(document.getElementById('height').value);
    let w = parseInt(document.getElementById('weight').value);
    let validHeight = false, validWeight = false;
    let icon = "<i class='fa-sharp fa-solid fa-circle-info'></i>";

    if (h === '' || isNaN(h) || h < 0){
        document.getElementById('height_error').innerHTML = icon+"  please enter valid height";
    }
    else{
        document.getElementById('height_error').innerHTML = "";
        validHeight = true;
    }
    if (w === '' || isNaN(w) || w < 0){
        document.getElementById('weight_error').innerHTML = icon+" please enter valid weight";
    }
    else{
        document.getElementById('weight_error').innerHTML = "";
        validWeight = true;
    }

    if (validHeight && validWeight){
        const bmi = (w / ((h*h)/10000)).toFixed(2);
        let op;
        if(bmi < 18.6){
            op = 'Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            op = 'Normal : ' + bmi;
        }else{
            op = 'Over weight : ' + bmi;
        }
        document.getElementById('result').innerHTML = op;
    }
    else{
        document.getElementById('result').innerHTML = '';
    }
}