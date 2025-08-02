const passtype = document.getElementById("passtype");
const tableCountGroup = document.getElementById("tableCountGroup");

passtype.addEventListener("change", () => {
  if (passtype.value === "Tables") {
    tableCountGroup.classList.remove("hidden");
    document.getElementById("noOfTables").setAttribute("required", "required");
  } else {
    tableCountGroup.classList.add("hidden");
    document.getElementById("noOfTables").removeAttribute("required");
  }
});

document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const entries = Object.fromEntries(formData.entries());

  // Store in localStorage for payment page
  localStorage.setItem("registrationData", JSON.stringify(entries));

  // Reset the form fields
  this.reset();

  // Reset Select2 dropdown
  $('#event').val(null).trigger('change');

  // Hide "Number of Tables" field if visible
  document.getElementById("tableCountGroup").classList.add("hidden");

  // Redirect to payment page
  window.location.href = "payment.html";
});

