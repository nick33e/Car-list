window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index'); // Get the index from the URL
    document.getElementById("carIndex").value = index; // Set the index in a hidden field

    var carList;
    if (localStorage.getItem("carList") == null) {
        carList = [];
    } else {
        carList = JSON.parse(localStorage.getItem("carList"));
    }

    // Fill in the form with the existing car data
    const car = carList[index];
    document.getElementById("id").value = car.id;
    document.getElementById("brand").value = car.brand;
    document.getElementById("model").value = car.model;
    document.getElementById("engine").value = car.engine;
    document.getElementById("seats").value = car.seats;
    document.getElementById("licensePlate").value = car.licensePlate;
    document.getElementById("autonomy").value = car.autonomy;
    document.getElementById("color").value = car.color;
    document.getElementById("image").value = car.image;
    document.getElementById("booking").checked = (car.bookingDate !== "Not Booked");

    // Update the car data
    document.getElementById("updateCarBtn").onclick = function() {
        carList[index].id = document.getElementById("id").value;
        carList[index].brand = document.getElementById("brand").value;
        carList[index].model = document.getElementById("model").value;
        carList[index].engine = document.getElementById("engine").value;
        carList[index].seats = document.getElementById("seats").value;
        carList[index].licensePlate = document.getElementById("licensePlate").value;
        carList[index].autonomy = document.getElementById("autonomy").value;
        carList[index].color = document.getElementById("color").value;
        carList[index].image = document.getElementById("image").value;
        carList[index].bookingDate = document.getElementById("booking").checked 
            ? new Date().toLocaleString() 
            : "Not Booked";

        localStorage.setItem("carList", JSON.stringify(carList));
        alert("Car details updated successfully!");
        window.location.href = "index.html"; // Redirect back to the main page
    };
};
