let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╔════════════════════
║ *PEMBAYARAN*
╠════════════════════
║╭───❉ *VIA* ❉─────
║│
║│➸ *PULSA*: 083136890848
║│➸ *DANA*: 083136890848
║│➸ *PULSA*:083136890848
║│
║╰──────────────────
║ Silahkan Ketik *UP*
╠════════════════════
║       
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║        
╠════════════════════
║ _*POWERED BY RAGIL*_
╚════════════════════
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥PEMBAYARAN🔥*', 'status@broadcast')
}
handler.help = ['pembayaran']
handler.tags = ['info']
handler.command = /^pembayaran$/i

module.exports = handler
 
