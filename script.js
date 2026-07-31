const form = document.getElementById("studentForm");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("message").value;
    let pincode = document.getElementById("pincode").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    let gender = document.querySelector('input[name="gender"]:checked').nextSibling.textContent;

    tableBody.innerHTML += ` 
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${state}</td>
        <td>${country}</td>
    </tr>
  `;
    form.reset();
});