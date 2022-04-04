let handler = function (m) {
  // this.sendContact(m.chat, '6283136890848', 'Ragil Gans', m)
  conn.sendContact(m.chat, '6283136890848' , 'kepo', m)
  conn.reply(m.chat, `Tuh Pacar Ku Jangan Galak² Ya >_<, Nanti Ku Banned Nanges`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
