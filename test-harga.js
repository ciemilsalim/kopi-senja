const { hitungTotal } = require('./harga.js');

function cek(nama, hasil, harapan) {
  const ok = hasil === harapan;
  console.log(ok ? '✓' : '✗', nama, ok ? '' : `(dapat ${hasil}, harusnya ${harapan})`);
}

cek('1 cangkir: Rp18.000', hitungTotal(18000, 1), 18000);
cek('2 cangkir: Rp36.000', hitungTotal(18000, 2), 36000);
cek('3 cangkir diskon 10%: Rp48.600', hitungTotal(18000, 3), 48600);
