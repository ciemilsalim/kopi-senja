const { statusBuka } = require('./jam.js');
const cek = (nama, hasil, harus) =>
  console.log(hasil === harus ? `✓ ${nama}: ${hasil}` : `✗ ${nama}: dapat ${hasil}, harusnya ${harus}`);
cek('07.59', statusBuka(7, 59), 'Tutup');
cek('08.00', statusBuka(8, 0), 'Buka');
cek('21.59', statusBuka(21, 59), 'Buka');
cek('22.00', statusBuka(22, 0), 'Tutup');
