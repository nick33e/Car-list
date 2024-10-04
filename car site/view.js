window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index'); // Get the index from the URL

    var carList;
    if (localStorage.getItem("carList") == null) {
        carList = [];
    } else {
        carList = JSON.parse(localStorage.getItem("carList"));
    }

    const car = carList[index];

    // Display the car details in the appropriate elements
    document.getElementById("id").innerText = car.id;
    document.getElementById("brand").innerText = car.brand;
    document.getElementById("model").innerText = car.model;
    document.getElementById("engine").innerText = car.engine;
    document.getElementById("seats").innerText = car.seats;
    document.getElementById("licensePlate").innerText = car.licensePlate;
    document.getElementById("autonomy").innerText = car.autonomy;
    document.getElementById("color").innerText = car.color;
    document.getElementById("image").src = car.image;

    // If there's a booking, display the date; otherwise, show "Not Booked"
    const bookingDate = car.bookingDate === "Not Booked" ? "Not Booked" : car.bookingDate;
    document.getElementById("booking").innerText = bookingDate;
};
