function ValidateForm() {
    var id = document.getElementById("id").value;
    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var engine = document.getElementById("engine").value;
    var seats = document.getElementById("seats").value;
    var licensePlate = document.getElementById("licensePlate").value;
    var autonomy = document.getElementById("autonomy").value;
    var color = document.getElementById("color").value;
    var image = document.getElementById("image").value;

    if (id == "") {
        alert("ID is required");
        return false;
    }

    if (brand == "") {
        alert("Brand is required");
        return false;
    }

    if (model == "") {
        alert("Model is required");
        return false;
    }

    if (engine == "") {
        alert("Engine is required");
        return false;
    }

    if (seats == "") {
        alert("Number of seats is required");
        return false;
    }

    if (licensePlate == "") {
        alert("License plate is required");
        return false;
    }

    if (autonomy == "") {
        alert("Autonomy is required");
        return false;
    }

    if (color == "") {
        alert("Color is required");
        return false;
    }

    if (image == "") {
        alert("Image URL is required");
        return false;
    }

    return true;
}


function showData() {
    var carList;
    if (localStorage.getItem("carList") == null) {
        carList = [];
    } else {
        carList = JSON.parse(localStorage.getItem("carList"));
    }

    var html = "";

    carList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.id + "</td>";
        html += "<td>" + element.brand + "</td>";
        html += "<td>" + element.model + "</td>";
        html += "<td>" + element.engine + "</td>";
        html += "<td>" + (element.bookingDate || "Available Booking") + "</td>"; // Display booking status
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button>' +
        '<button onclick="editCar(' + index + ')" class="btn btn-warning m-2">Edit</button>' +
        '<button onclick="viewCar(' + index + ')" class="btn btn-info m-2">View</button></td>';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function addData() {
    if (ValidateForm() == true) {
        var id = document.getElementById("id").value;
        var brand = document.getElementById("brand").value;
        var model = document.getElementById("model").value;
        var engine = document.getElementById("engine").value;
        var seats = document.getElementById("seats").value;
        var licensePlate = document.getElementById("licensePlate").value;
        var autonomy = document.getElementById("autonomy").value;
        var color = document.getElementById("color").value;
        var image = document.getElementById("image").value;
        var bookingChecked = document.getElementById("booking").checked;
        var bookingDate = bookingChecked ? new Date().toLocaleString() : "Not Booked";

        var carList;
        if (localStorage.getItem("carList") == null) {
            carList = [];
        } else {
            carList = JSON.parse(localStorage.getItem("carList"));
        }

        carList.push({
            id: id,
            brand: brand,
            model: model,
            engine: engine,
            seats: seats,
            licensePlate: licensePlate,
            autonomy: autonomy,
            color: color,
            image: image,
            bookingDate: bookingDate
        });

        localStorage.setItem("carList", JSON.stringify(carList));
        showData();

        // Clear the fields in the form
        document.getElementById("id").value = "";
        document.getElementById("brand").value = "";
        document.getElementById("model").value = "";
        document.getElementById("engine").value = "";
        document.getElementById("seats").value = "";
        document.getElementById("licensePlate").value = "";
        document.getElementById("autonomy").value = "";
        document.getElementById("color").value = "";
        document.getElementById("image").value = "";
        document.getElementById("booking").checked = false; // Reset checkbox
    }
}




function deleteData(index) {
    // Show confirmation dialog
    var confirmation = confirm("Are you sure you want to delete this car?");
    if (confirmation) {
        var carList;
        if (localStorage.getItem("carList") == null) {
            carList = [];
        } else {
            carList = JSON.parse(localStorage.getItem("carList"));
        }

        // Remove the car from the list
        carList.splice(index, 1);
        localStorage.setItem("carList", JSON.stringify(carList));
        showData();
    }
}


function editCar(index) {
    window.location.href = "index3.html?index=" + index; // Pass the index in the URL
}

function viewCar(index) {
    window.location.href = "index2.html?index=" + index; // Pass the index in the URL
}

document.addEventListener("DOMContentLoaded", function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});