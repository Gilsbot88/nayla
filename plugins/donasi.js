let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *pulsa:* [083136890848]
┣➥ *Telkomsel:* [081318910218]
┣➥ *Dana:* [083136890848]
┣➥ *Saweria:* [menyusul]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6283136890848*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
