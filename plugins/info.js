let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• Zevano
┃
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS
┃• Heroku
┃• ImageMagick
┃
┃> Thanks To :
┃• Nurutomo
┃• Zevano
┃• Ragil
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Telkomsel:* [081318910218]
┣➥ *Dana:* [083136890848]
┣➥ *Gopay:* [081318910218]
┣➥ *LinkAja:* [menyusul]
┃ 「 *Chat OWNER* 」
┃ > *INGIN DOANSI ? https://wa.me/6283136890848*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*AGIL BOTZ TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
