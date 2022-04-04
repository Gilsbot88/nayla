let handler = async m => m.reply(`
╭─「 Agil BOT 」
│
│ > Harga :
│• 5K / Minggu
│• 20K / Bulan
│• 30K / Permanent
│
│ > Pembayaran :
│• DANA : 083136890848
│• PULSA : 083136890848
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^se(wa|wabot)$/i

module.exports = handler
