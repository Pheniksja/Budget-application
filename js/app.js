//DOMContentLoaded
const btn = document.querySelector('.btnResult');

btn.addEventListener("click", function (event) {
    // event.preventDefault()

$(function() {
    //łapię elementy i tworzę zmienne
    const incomeValue = document.querySelector('#income').value;
    const rentValue = document.querySelector('#rent').value;
    const carValue = document.querySelector('#car').value;
    const foodValue = document.querySelector('#food').value;
    const clothesValue = document.querySelector('#clothes').value;
    const healthValue = document.querySelector('#health').value;
    const animalValue = document.querySelector('#animal').value;
    const sportValue = document.querySelector('#sport').value;
    const entertainmentValue = document.querySelector('#entertainment').value;
    const finalResult = document.querySelector('#result');
    var result =  incomeValue - rentValue - carValue - foodValue - clothesValue - healthValue - animalValue - sportValue - entertainmentValue
    $(".results-text").empty();
console.log(result);

    // console.log(rentValue)

    newEl= '';
    if ( incomeValue === "")  {
        alert ('Put income value')
    } else if (result > 0) {
        var newEl = $(`
                <div class = "result-decription">
                    <p>  After your expenses you have <span> ${result} </span> left in your budget  </p>
                </div>
                `);
                    $('.result').append(newEl);
                      newEl= '';
    } else if (result === 0) {
        var newEl = $(`
                <div class = "result-decription">
                    <p>  After your expenses you have <span> ${result}. </p>
                    <p> You spend all money from your budget. </p>
                </div>
                `);
                    $('.result').append(newEl);
    
    } else {
        var newEl = $(`
                <div class = "result-decription">
                    <p>  After your expenses you have <span> ${result} </span> left in your budget </p>
                    <p> You spend more money than you have in your budget!  </p>
                </div>
                `);
                    $('.result').append(newEl);
    }
  
    // finalResult.textContent = result;
;
})
document.querySelector ('.result-decription').innerHTML = '';


})

