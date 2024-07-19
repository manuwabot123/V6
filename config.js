const fs = require('fs')
const chalk = require('chalk')
const axios = require('axios');

// INGAT CUY INI CUMA SC HASIL RENAME ATAU RECODE YA

// Credit : @theJayy_
// Ori : @callmevinz

//=== Edit Disini 🔥
global.namabot = "🤖𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭👨‍💻"
global.namaowner = "𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥"
global.packname = "Sticker by 𝗠𝗮𝗻𝘂"
global.creator = "⚖️©𝐌𝐫 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥👨‍💻"
global.author = "𝗠𝗮𝗻𝘂\n\nBot WhatsApp"
global.wm = "©𝐌𝐫 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥"
global.syt = "https://www.youtube.com/"
global.sgc = "https://chat.whatsapp.com/EIjQV4nxXwJ6S6QHSa9jpN"
global.idgc = "120363200175936047@g.us"
global.email = "manulwijethilaka@gmail.com"
global.sig = "https://Instagram.com/"
global.myweb = "https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R"
global.footer_text = "© 𝐌𝐚𝐧𝐮 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕"
global.owner = ['94742274855']
global.gifin = "https://files.catbox.moe/24p794.mp4"
global.thumb = "https://telegra.ph/file/33e5f1bfd36ea02f8b062.jpg"
global.thumb2 = "https://telegra.ph/file/3dc49bb5cc5d1e2fe53ed.png"
global.mark = "https://files.catbox.moe/24p794.mp4"
global.themeemoji = '🌐'

//=== Introgasi 🗿
global.umurowner = "Privat" // Terserah🗿
global.kelasowner = "Privat" // Terserah🗿
global.statusowner = "Cewe gw Esta" // Terserah
global.lakiapacewek = "Lanang" // Terserah
// Kalo mau gak diisi juga gak papa

//=== Payment 😋
global.qris = "https://telegra.ph/file/8781f8be707861e1b5f73.png"
global.pulsa = "081999042372"
global.dana = "081999042372"
global.gopay = "081999042372"
global.rek = "-"

//=== Nokos Token 😱
global.apikey ='8c3a5b302815a138d88148fa0c5916c0595bba50' 

//=== Apikey Nya 🔥
global.lol = 'GataDios'
global.lol = 'SGWN'
global.rose = 'Rs-putangina'
global.xyro = '5dRkJDWvIG'
global.APIs = {
xyro: "https://api.xyroinee.xyz",
popcat : 'https://api.popcat.xyz'
}
// APIKeys
global.APIKeys = {
"https://api.xyroinee.xyz": "5dRkJDWvIG"
}

//=== Gak Tau 🐦
global.pairingNumber = "94742274855"
// Nomor whatsapp bot lu
global.prefix = ['-_-'] 
// Jangan diubah
global.tekspushcontact = "Izin Push" 
// Terserah
global.typemenu = "v2"
// Ini type menu nya
// v1 - v2 - v3 - v4 - v5 - v6
global.typeallmenu = "v2"
// Ini type allmenu nya
// v1 - v2 - v3 - v4 - v5 - v6
global.game = true
// False (Nonaktifin)
global.groupOnly = false 
// True (Mode grup)
global.privateOnly = true
// True (Mode grup)
global.antispam = true 
// False (Nonaktifin)
global.anticall = true
// False (Nonaktifin)
global.autoreadsw = true
// False (Nonaktifin)
global.antiBot = true
// False (Nonaktifin)
global.pengingat = true
// False (Nonaktifin)
global.autoTyping = true
// False (Nonaktifin)
global.autoBio = true
// False (Nonaktifin)
global.autoRestart = true
// False (Nonaktifin)
// AutoRestart Cocok Tuk Panel Butut
global.mess = {
 done: 'Sukses!',
 wait: 'Sedang diproses',
 admin: 'Fitur Khusus Admin grup!',
 botNotAdmin: 'Saya bukan Admin grup',
 owner: 'Fitur Khusus Owner!',
 group: 'Fitur Khusus Group!',
}

// Setting Game
global.gamewaktu = 60 // Game waktu
global.bmin = 1000 // Balance minimal 
global.bmax = 5000 // Balance maksimal
global.limit = 35 // Limit user

// Database Game
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

