/*
   ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗      ███╗   ███╗██████╗ 
  ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║      ████╗ ████║██╔══██╗
  ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║█████╗██╔████╔██║██║  ██║
  ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║╚════╝██║╚██╔╝██║██║  ██║   
  ╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║      ██║ ╚═╝ ██║██████╔╝   
   ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝   
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '805a6c3fa9',
}
////////////////////////////////////////////////////|:|             OWNER DETAILS             |:|//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.session = process.env.SESSION_ID || 'cUJyajdLVjY=',
global.ownername = process.env.OWNER_NAME === undefined ? "ALI-DOHAL" : process.env.OWNER_NAME
let fake = process.env.OWNER_NUMBER === undefined ? '966596680057' : process.env.OWNER_NUMBER
global.owner = [`${fake}`]
global.ownernumber = [`${fake}`]
global.premium = [`${fake}`]
global.anticall = process.env.ANTICALL === undefined ? 'false' : process.env.ANTICALL
global.packname = process.env.PACK_NAME === undefined ? 'ALI-DOHAL' : process.env.PACK_NAME
global.author = process.env.STICKER_AUTHOR_NAME === undefined ? 'ALI-DOHAL' : process.env.STICKER_AUTHOR_NAME
global.pmblock = process.env.PM_BLOCK === undefined ? 'false' : process.env.PM_BLOCK
global.chatbot_pm = process.env.PM_CHATBOT === undefined ? 'false' : process.env.PM_CHATBOT
global.chatbot_group = process.env.GROUP_CHATBOT === undefined ? 'false' : process.env.GROUP_CHATBOT

/////////////////////////////////////////////////////////////////||SESSION ID METHOD||///////////////////////////////////////////////////////////////////////
global.sessionconvert = ['true']                           //This is session id method.....//Don't Change
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.Botname = 'A'+'L'+'I'+'D'+'O'+'-'+'H'+'L'
global.prefa = ['.']
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.mess = {
        wait: '*الرجاء الانتظار*',
        owner: '*🔰️ يمكن لمالكي فقط استخدام هذا الأمر*',
        group: '*🔰️ تم إنشاء هذا الأمر للمجموعات فقط !*',
        admin: '*🔰️ يمكن استخدام هذا الأمر فقط لمدير المجموعة !*',
        botadmin: '*اسف😔️, لا يمكنني تشغيل هذا الأمر دون أن أكون مسؤولاً عن هذه المجموعة.*',
        botAdmin: '*اسف😔️, لا يمكنني تشغيل هذا الأمر دون أن أكون مسؤولاً عن هذه المجموعة.*',
        banned: '*❌️ أنت ممنوع من استخدام الأوامر !*',
        bangc: '*❌️ هذه المجموعة ممنوعة من استخدام الأوامر !*',
}
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("✅️ ᴜᴘᴅᴀᴛᴇ config.js"))
	delete require.cache[file]
	require(file)
})
