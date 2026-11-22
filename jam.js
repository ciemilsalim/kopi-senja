// Kedai buka 08.00–22.00 (22.00 sudah tutup)
function statusBuka(jam, menit) {
  const t = jam * 60 + menit;
  return t >= 8 * 60 && t < 22 * 60 ? 'Buka' : 'Tutup';
}
if (typeof module !== 'undefined') module.exports = { statusBuka };
