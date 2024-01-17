module.exports.config = {
    name: "teach",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Deku",
    description: "Teach sim",
    commandCategory: "...",
    usages: "[your ask > sim ans]",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
const { threadID, messageID } = event;
const b = require("axios");
const content = args.join(" ").split(">").map(item => item = item.trim());
let ask = content[0]
let ans = content[1]
const res = await b.get(`https://sim.ainz-project.repl.co/teach?ask=${ask}&ans=${ans}`);
return api.sendMessage("Teaching sim new words successfully\n"+"Your ask: "+res.data.ask+"\nSimsimi respond: "+res.data.ans, threadID, messageID)
}