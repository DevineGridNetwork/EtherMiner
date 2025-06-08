document.addEventListener("DOMContentLoaded", () => {
  const walletValueEl = document.getElementById('wallet-value');
  const walletIdEl = document.getElementById('wallet-id');
  const satoshiValueEl = document.getElementById('satoshi-value');
  const einTickerEl = document.getElementById('ein-ticker');

  let value = 5443200000000000;
  let satoshi = 310000000000;

  function updateWallets() {
    value += Math.floor(Math.random() * 2000000000);
    walletValueEl.textContent = `$${value.toLocaleString()}`;
    satoshi += Math.floor(Math.random() * 1000000);
    satoshiValueEl.textContent = `$${satoshi.toLocaleString()}`;
  }

  function updateEIN() {
    const ein = 'EIN-' + Array.from({length: 16}, () => Math.floor(Math.random() * 9)).join('');
    walletIdEl.textContent = ein;
    einTickerEl.textContent = ein;
  }

  setInterval(updateWallets, 5000);  // update values every 5 seconds
  setInterval(updateEIN, 2000);      // update EIN every 2 seconds

  updateWallets();
  updateEIN();
});
