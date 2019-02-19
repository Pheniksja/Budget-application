//DOMContentLoaded
const btn = document.querySelector('.btn');
const rent = document.querySelector('#rent');
console.log(rent);
const rentValue = rent.value
console.log(rentValue);

btn.addEventListener("click", function (event) {
    // event.preventDefault()

// $(function() {
    //łapię elementy i tworzę zmienne
    const rent = document.querySelector('#rent');
    console.log(rent);
    const car = document.querySelector('#car');
    const food = document.querySelector('#food');
    const clothes = document.querySelector('#clothes');
    const health = document.querySelector('#health');
    const animal = document.querySelector('#animal');
    const sport = document.querySelector('#sport');
    const entertainment = document.querySelector('#entertainment');
    const finalResult = document.querySelector('#result');
    const rentValue = rent.value

    console.log(rentValue)


    if ( rentValue === "") {
        alert ('UWAGA: Wprowadzany znak musi być liczbą')
    }
    else {
       var result = 1 + rentValue
    }
    finalResult.textContent = result;
    amountInput.value = '';
    console.log(result)
// })
console.log(rent);
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