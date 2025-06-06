// Ticker generator: updates every 5 seconds with 5 updates per second
let ticker = document.getElementById('ticker-container');
let tickCounter = 0;

function updateTicker() {
  for (let i = 0; i < 5; i++) {
    const now = new Date().toLocaleTimeString();
    const randomAmount = (Math.random() * 900000000).toFixed(2);
    const update = `[${now}] +$${randomAmount} | EINs Minted: ${1000 * Math.floor(Math.random() * 100)}\n`;
    const div = document.createElement('div');
    div.textContent = update;
    ticker.prepend(div);
  }
}

setInterval(updateTicker, 5000);

// Admin login
function loginAdmin() {
  const user = prompt("Enter Admin Username:");
  const pass = prompt("Enter Admin Code:");
  if (user === "Carmelo" && pass === "Mellow Baron AI") {
    document.querySelector('.admin-access').style.display = "block";
    alert("Welcome to the Admin Panel");
  } else {
    alert("Access Denied");
  }
}

// Golden Pass Purchase
function donateCrowdfund() {
  const name = document.getElementById("donorName").value;
  const email = document.getElementById("donorEmail").value;
  const amount = document.getElementById("donationAmount").value;

  if (name && email && amount >= 5000) {
    alert(`✅ Thank you, ${name}! You’ve claimed 1 Golden Pass share!`);
    // Logic to record donor can be tied to Stripe later
  } else {
    alert("⚠️ Minimum share is $5,000. Please check your input.");
  }
}
