let walletValue = 10000000000000; // Initial 10 trillion
setInterval(() => {
  walletValue += Math.floor(Math.random() * 100000000);
  document.getElementById("walletValue").innerText = walletValue.toLocaleString();
}, 5000);
