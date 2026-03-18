/**
 * 𝗦𝗛𝗔𝗗𝗢𝗪 𝗧𝗘𝗖𝗛 Bot - Configuration
 * Copyright (c) 2025 𝙎𝙃𝘼𝘿𝙊𝙒 𝙏𝙀𝘾𝙃
 */

import dotenv from 'dotenv';
dotenv.config();

export default {
    
    botName: process.env.BOT_NAME || "𝗦𝗛𝗔𝗗𝗢𝗪 𝗧𝗘𝗖𝗛",
    version: "1.0.0",
    
   
    ownerName: "𝙎𝙃𝘼𝘿𝙊𝙒 𝙏𝙀𝘾𝙃",
    ownerNumber: process.env.OWNER_NUMBER || "2376000000",
    
    
    phoneNumber: process.env.PHONE_NUMBER || process.env.OWNER_NUMBER || "237650000003",
    sessionName: "session",
    
   
    packname: "𝗦𝗛𝗔𝗗𝗢𝗪 𝗧𝗘𝗖𝗛 Bot",
    author: "𝙎𝙃𝘼𝘿𝙊𝙒 𝙏𝙀𝘾𝙃",
    
    
    storeWriteInterval: 10000,
    
 
    maxMemoryMB: 400,
    gcInterval: 60000,
    memoryCheckInterval: 30000,
    
    
    tempCleanInterval: 10800000,
    tempFileMaxAge: 10800000,
    
   
    apiKeys: {
        openai: process.env.OPENAI_API_KEY || "",
        gemini: process.env.GEMINI_API_KEY || "",
        weather: process.env.WEATHER_API_KEY || "",
        quizApi: process.env.QUIZ_API_KEY || ""
    },
    
  
    newsletter: {
        jid: '120363161513685998@newsletter',
        name: '𝗦𝗛𝗔𝗗𝗢𝗪 𝗧𝗘𝗖𝗛'
    },
  

    rateLimit: {
        enabled: true,
        maxCommands: 10,
        cooldown: 3000
    },
    
    
    prefix: process.env.PREFIX || ".",
    
   
    timezone: "Africa/Lagos",
    
    
    language: process.env.LANGUAGE || "en",
    
    
    sudo: [],
    
  
    database: {
        useJSON: true,
        path: "./data",
        mongoUri: process.env.MONGO_URI || ""
    }
};