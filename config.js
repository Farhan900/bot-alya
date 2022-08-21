const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6282146218274']
global.premium = ['6282146218274']
global.ownername = 'MELLYCANS🌸'
global.botname = 'MELLYBOTZ-Md🌸'
global.packname = '© by MELLY'
global.gc = 'https://bit.ly/3KMlmv2'
global.linkyt = 'https://youtube.com/channel/UC9Si3U0o9dGS9MDfJR5iF6Q'
global.linkgc = 'https://chat.whatsapp.com/DwP6uHYBWBc6TBSsNJrzwN'
global.limitawal = '100'
global.author = '@Riel.xzy'
global.sessionName = 'polo'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '•'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.gambar = 'https://telegra.ph/file/cc2695cccc86cef4cb74a.jpg' //disini gambar bot nya lu bisa ganti pink gambar ini dengan link gambar punya lu
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://telegra.ph/file/0b5e70dba01209bbd93b2.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
