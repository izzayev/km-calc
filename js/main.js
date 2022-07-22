var elForm = document.querySelector("#form");
var elFoot = document.querySelector("#foot");
var elBike = document.querySelector("#bike");
var elCar = document.querySelector("#car");
var elAir = document.querySelector("#air");

elForm.addEventListener('submit' , function(evt) {
    evt.preventDefault();
    var elInput = document.querySelector("#input").value.trim();

    if(elInput > 0 ) {
        var Result1 = Math.trunc(elInput / 3.6);
        var Result2 = ((elInput / 0.06) % 60).toFixed(1)
        var oyoqda = `${Result1}soat ${Result2}minut`
        elFoot.textContent = oyoqda;

        var Result1 = Math.trunc(elInput / 20.1);
        var Result2 = ((elInput / 0.335) % 60).toFixed(1)
        var veloda = `${Result1}soat ${Result2}minut`
        elBike.textContent = veloda;

        var Result1 = Math.trunc(elInput / 70);
        var Result6 = ((elInput / 1.16666667) % 60).toFixed(1)
        var carda = `${Result1}soat ${Result2}minut`
        elCar.textContent = carda;

        var Result1 = Math.trunc(elInput / 800);
        var Result2 = ((elInput / 13.333333) % 60).toFixed(1)
        var airda = `${Result1}soat ${Result2}minut`
        elAir.textContent = airda;
    }else {
        alert("Iltimos masofani to'gri kiriting!")
    }
})