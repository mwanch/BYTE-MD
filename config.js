
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0N3NDFiU016clV6U2tYbktPazBtbmFSRnJBZ25IalVLU0VlUUJNMDBtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWpoODhWV0R6S0dHT25haE9ORDdCZVpwSFZjYzgrRU1tdWVzVWVySk5ocz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTWNwYTZuanBPY1Nqdm0yQkpIOUdvRGpNR2dzTmVabE8vdW5WS1YyM1ZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsRHhRYi9VK3RBcmpJSmx1ajRkdmFCalNLa1pOdnhCM3IxbU1UcTZWRzNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCMk1LNDFuYTRCTEVFclYzZ3pvR0JnLzNwSys3Z2hzQzh5dWpjWGtjM1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBcTFyZGdQMU03TUlLMG9RZ2w3NTdQRXRsSXdjVVBqQnB2Z09YUzdxd0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUc4NFYvTEw3d0lEbUhGdllqeG9GRk56OFU2MTRjbTFBUWs0TlFOdTZXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUW5rQ1ZucElpdWdqSWtLWFl5eTJBQzdmclVkaXNPS0kvdTBrVCsxVkZ4ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRQMk5zbjBpcmNPaVl4OHdiRGZnaXl6Wkk0YUFNcGV5eEUzZ1g3UDhZZU1wMEt0dFhTRW9aWkxOOU8vUUhUV256UmFDcVpLWGw3amtjbEZ1Yis2aGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6InQyeTdJd3hla0RKYk51b3FIOTZLdVJub0hOazJ0YnRaZm9NdjhoWm9saFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzI0MDM2Nzc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZEMzdDRkEyODBFQTFCMzk4RjgxQjhGRkFGQzg0MkZGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI2ODQ3OTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcyNDAzNjc3OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5RTg4MEFCNThFMjU1NTU2QUJCMEFCNUVGMzMwMzZDNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNjg0Nzk1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhTWFxLS13Q1R6LUFGUkMyS1QwN09BIiwicGhvbmVJZCI6ImVlZWYwNDM5LWU0YzctNDA1Yy1hYzYzLTVkYTM4Yjg4YzRkMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4d050YkxCRTQ5Zi95K1oxTDFMQm1ENGJnWlE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxlQ1VoYVQxcFgyTVczVlJoVkJZU1ZiL3BXTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08yR3Ryb0dFT3lxdUxVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkkwMFBpN2htRlFwM3pFZ01BRnZpNHROQlVxYTlIK2g1WWJ3c2xOZTlyRkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjR4MWVGdDlUeW5VcS9MeW9sODBQYlUxTUNLTEVVZU1Hd3F6ekppRklZSklMQ1A5eURxTGdid01wbzNJNTIwU2pXNWZ0Z01GNHZVRGNDcER1aFg0cUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJibDZleDVNUUJURVdwcnRPRVRodExjNGRNUzg1QVpYUURHQlhJeWNUN3ZSSUcrWHBUandxVGFUY1VWTU9HQW9MKzNROGpUclBZdGhHNFlWR1NUb0todz09In0sIm1lIjp7ImlkIjoiMjU0NzI0MDM2Nzc5OjI0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik13YW5jaGEifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzI0MDM2Nzc5OjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNOTkQ0dTRaaFVLZDh4SURBQmI0dUxUUVZLbXZSL29lV0c4TEpUWHZheFEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2ODQ3OTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2p2In0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
