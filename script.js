// JavaScript code to add and remove prescription rows
document.querySelector(".add-prescription").addEventListener("click", function() {
    // Clone the template prescription row
    const templateRow = document.querySelector(".template-row");
    const newRow = templateRow.cloneNode(true);

    // Show the cloned row (remove the "style" attribute)
    newRow.removeAttribute("style");
    
    // Add input fields to the new row
    newRow.querySelector(".col:first-child").innerHTML = '<input type="text" class="form-control prescription-name" placeholder="Prescription Name">';
    newRow.querySelector(".col:nth-child(2)").innerHTML = '<input type="date" class="form-control prescription-date">';
    newRow.querySelector(".col:nth-child(3)").innerHTML = '<input type="text" class="form-control prescription-duration" placeholder="Duration">';

    // Add the "Remove" button to the new row
    const removeButton = document.createElement("button");
    removeButton.className = "btn btn-remove-prescription";
    removeButton.textContent = "Remove";
    newRow.querySelector(".col:last-child").appendChild(removeButton);

    // Add an event listener to remove the prescription row when the "Remove" button is clicked
    removeButton.addEventListener("click", function() {
        prescriptionList.removeChild(newRow);
    });

    // Add the new row to the prescription list
    const prescriptionList = document.querySelector(".prescription-list");
    prescriptionList.appendChild(newRow);
});
