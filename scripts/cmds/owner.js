module.exports = {
    config: {
        name: "owner",
        version: "1.0",
        author: "Loid Butter",
        countDown: 5,
        role: 0,
        shortDescription: "ask ai who is the bot owner",
        longDescription: "ask ai who is the bot owner",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "owner") return message.reply("𝗻𝗮𝗺𝗲 🏠:𝗔𝗦𝗧𝗔 𝗜𝗖𝗛𝗜𝗬𝗨𝗞𝗜𝗠𝗢𝗥𝗜 \n 𝗽𝗿𝗼𝗳𝗶𝗹𝗲🗾:https://www.facebook.com/profile.php?id=100052395031835");
}
};
