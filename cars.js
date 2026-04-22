// Student Number: 224108331

document.addEventListener("DOMContentLoaded", () => {

    const makes = ["VW", "BMW", "Benz", "Audi", "Ford", "Toyota"];

    const cars = [
        { name: "Golf GTI", type: "Hatchback", make: "VW", img: "https://via.placeholder.com/300?text=VW+Golf" },
        { name: "M3", type: "Sedan", make: "BMW", img: "https://via.placeholder.com/300?text=BMW+M3" },
        { name: "C-Class", type: "Sedan", make: "Benz", img: "https://via.placeholder.com/300?text=Benz+C" },
        { name: "A4", type: "Sedan", make: "Audi", img: "https://via.placeholder.com/300?text=Audi+A4" },
        { name: "Mustang", type: "Coupe", make: "Ford", img: "https://via.placeholder.com/300?text=Mustang" },
        { name: "Corolla", type: "Sedan", make: "Toyota", img: "https://via.placeholder.com/300?text=Corolla" },
        { name: "Supra", type: "Sports", make: "Toyota", img: "https://via.placeholder.com/300?text=Supra" },
        { name: "RS7", type: "Sportback", make: "Audi", img: "https://via.placeholder.com/300?text=Audi+RS7" }
    ];

    let currentCar = null;
    let correct = 0;
    let total = 0;

    const makeList = document.getElementById("make-list");
    const guessBtn = document.getElementById("guess-btn");

    makes.forEach(make => {
        let option = document.createElement("option");
        option.value = make;
        option.textContent = make;
        makeList.appendChild(option);
    });

    function loadRandomCar() {
        const index = Math.floor(Math.random() * cars.length);
        currentCar = cars[index];

        document.getElementById("car-name").textContent = currentCar.name;
        document.getElementById("car-type").textContent = currentCar.type;

        const img = document.getElementById("car-img");
        img.src = currentCar.img;
        img.classList.remove("hidden");

        guessBtn.classList.remove("disabled");
    }

    guessBtn.addEventListener("click", () => {
        guessBtn.classList.add("disabled");

        const selected = makeList.value;

        if (selected === currentCar.make) {
            correct++;
            document.getElementById("correct").textContent = correct;
        }

        total++;
        document.getElementById("total").textContent = total;

        loadRandomCar();
    });

    loadRandomCar();
});
