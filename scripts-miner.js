let value = 9_000_000_000_000.00; // Starting past mined value (trillions)
let increment = 1_999_999.99;     // Mining per second (real-time USD growth)

function formatUSD(num) {
  return "$" + num.toLocaleString("en-US", {maximumFractionDigits: 2});
}

function updateWealthTicker() {
  value += increment;
  document.getElementById("wealthTicker").textContent = formatUSD(value);
}

setInterval(updateWealthTicker, 1000); // Update every second
