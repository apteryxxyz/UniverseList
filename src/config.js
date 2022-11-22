const dotenv = require('dotenv')
dotenv.config();

module.exports = {
  port: 44760,
  staff: ["998763334264442912"],
  owners: ["998763334264442912"],
  developers: ["998763334264442912"],
  betatesters: ["998763334264442912"],
  mongo: process.env.mongo,
  bot: {
    id: "1015807573733154818",
    prefix: "!",
    secret: process.env.secret,
    redirect: "http://localhost/auth/callback",
    token: process.env.token,
  },
  servers: {
    prefix: "-",
    apikey: process.env.apikey,
    token: process.env.stoken,
  },
  guilds: {
    main: "941896554736934933",
    testing: "1043571235898019890",
  },
  roles: {
    mod: "1001901317024907276",
    admin: "941896555164749934",
    developer: "941896554736934941",
    partner: "942605922981806090",
    bots: "941896555164749932",
    bottester: "941896554736934934",
    members: "941896554736934938",
    botsintesting: "1044458503093375090",
  },
  levels: {
    five: "1007058570879180851",
  },
  channels: {
    weblogs: "941896555567398982",
    levelup: "941896555718410285",
    modlogs: "941896555567398981",
    leaderboardC: "1044425171047546980",
    leaderboardM: "1044434735331553370",
    testingcategory: "1043571236757831680",
  },
  tags: {
    servers: [
      "Community",
      "Development",
      "BotList",
      "ServerList",
      "Soical",
      "Gaming",
      "Fun",
      "Emotes",
      "Streaming",
      "Anime",
      "Memes",
    ],
    bots: [
      "Moderation",
      "Fun",
      "Economy",
      "Leveling",
      "Utilities",
      "Logging",
      "Music",
      "Anime",
      "Memes",
    ],
  },
}; 
