
const form = document.querySelector("#ticketForm");
const ticketType = document.querySelector("#ticketType");
const studentNumContainer = document.querySelector("#studentNumContainer");
const eventCodeContainer = document.querySelector("#eventCodeContainer");
const iNum = document.querySelector("#iNum");
const eventCode = document.querySelector("#eventCode");
const output = document.querySelector("#output");

function updateNotesField() {
  const value = ticketType.value;

  // Based on student or guest show the coresponding field and require it
  if (value === "student") {
    studentNumContainer.hidden = false;
    iNum.required = true;
    eventCodeContainer.hidden = true;
    eventCode.required = false;
  } 
  else if (value === "guest") {
    eventCodeContainer.hidden = false;
    eventCode.required = true;
    studentNumContainer.hidden = true;
    iNum.required = false;
  }
  else {
    studentNumContainer.hidden = true;
    iNum.required = false;
    eventCodeContainer.hidden = true;
    eventCode.required = false;
  }
  
}

ticketType.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.ticketType.value;
  const eventDate = form.eventDate.value;
  const iNum = form.iNum.value.trim();
  const eventCode = form.eventCode.value.trim();

  // Validate the input
  // Test student
    if (type === "student" && !/^\d{9}$/.test(iNum)) {
        output.textContent = "Student I# must be 9 digits";
        return;
    }

  // Test guest
    if (type === "guest" && eventCode !== "EVENT131") {
       output.textContent = "Invalid event code";
       return;
    }
  

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Type: ${type}</p>
  <p>Date: ${eventDate}</p>
  `;

  form.reset();
  updateNotesField();
});
          