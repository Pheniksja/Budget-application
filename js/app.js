//DOMContentLoaded
const btn = document.querySelector('.btnResult');

btn.addEventListener("click", function (event) {
    // event.preventDefault()

// $(function() {
    //łapię elementy i tworzę zmienne
    const income = document.querySelector('#income');
    const incomeValue = income.value
    const rent = document.querySelector('#rent');
    const rentValue = rent.value
    // console.log(rent);
    const car = document.querySelector('#car');
    const carValue = car.value
    const food = document.querySelector('#food');
    const foodValue = food.value
    const clothes = document.querySelector('#clothes');
    const clothesValue = clothes.value
    const health = document.querySelector('#health');
    const healthValue = health.value
    const animal = document.querySelector('#animal');
    const animalValue = animal.value
    const sport = document.querySelector('#sport');
    const sportValue = sport.value
    const entertainment = document.querySelector('#entertainment');
    const entertainmentValue = entertainment.value
    const finalResult = document.querySelector('#result');
  

    // console.log(rentValue)


    if ( rentValue === "") {
        alert ('UWAGA: Wprowadzany znak musi być liczbą')
    }
    else {
       var result =  incomeValue - rentValue - sportValue
    }
    finalResult.textContent = result;
    // rentValue.value = '';
    console.log(result)
// })
console.log(result);
})
// finalResult.textContent = result;
//     amountInput.value = '';

//Tworze nowy element i wypelniam go danymi dotyczącymi kursu
        //     var newEl = $(`
        //         <div>
        //             <p>  Średni kurs NBP z dnia  ${effectiveDate} wynosi: </p>
        //             <p>  1 PLN = ${midEuro}  </p>
        //         </div>
        // `);

        //     $('.result').append(newEl);

        //  wyliczam wartość waluty po kursie

           
//     })
// });
// });