
// Feature 1: Custom form validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from submitting automatically

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  // Custom validation rules
  if (username.length < 3) {
    message.textContent = "Username must be at least 3 characters.";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters long.";
    message.style.color = "red";
    return;
  }

  // If all checks pass
  message.textContent = "Form submitted successfully";
  message.style.color = "green";
});

// Feature 2: Click counter
let count = 0;
document.getElementById("clickBtn").addEventListener("click", function () {
  count++;
  document.getElementById("clickCount").textContent = count;
});

// Feature 3: Live text preview
document.getElementById("liveInput").addEventListener("input", function () {
  document.getElementById("previewText").textContent = this.value;
});

