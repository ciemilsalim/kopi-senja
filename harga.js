// Diskon 10% untuk pesanan 3 cangkir atau lebih
function hitungTotal(harga, jumlah) {
  const total = harga * jumlah;
  if (jumlah >= 3) return total * 0.9;
  return total;
}
if (typeof module !== 'undefined') module.exports = { hitungTotal };
