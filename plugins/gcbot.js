let handler = async m => m.reply(`
*LIST GC BOT*

*GROUP 1*
https://chat.whatsapp.com/I3uvRkj0vGF0yexwy1OnUv
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
