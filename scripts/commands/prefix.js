module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  permission: 0,
  credits: "ryuko",
  prefix: true,
  description: "guide",
  category: "system",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};

  var arr = ["mpre","mprefix","prefix", "command mark", "What is the prefix of the bot?","PREFIX"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
		const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (config.PREFIX == null) {
        return out(`𝔸𝕊𝕊𝔸𝕃𝔸𝕄𝕌𝕎𝔸𝕃𝔸𝕀𝕂𝕌𝕄
𝕀 𝔸𝕄 𝕊𝔼𝕀𝕄𝔸 𝕊𝕌𝕄𝕌
𝕄𝕐 𝕆𝕎ℕ𝔼ℝ: 𝕄𝕐𝕊𝕋𝔼ℝ𝕀𝕆𝕌𝕊 𝔸𝕊𝔸𝔻
𝕄𝕐 ℙℝ𝔼𝔽𝕀𝕏 : ${global.config.PREFIX}`)
      }
      else return out(`𝔸𝕊𝕊𝔸𝕃𝔸𝕄𝕌𝕎𝔸𝕃𝔸𝕀𝕂𝕌𝕄
      𝕀 𝔸𝕄 𝕊𝔼𝕀𝕄𝔸 𝕊𝕌𝕄𝕌
      𝕄𝕐 𝕆𝕎ℕ𝔼ℝ: 𝕄𝕐𝕊𝕋𝔼ℝ𝕀𝕆𝕌𝕊 𝔸𝕊𝔸𝔻
      𝕄𝕐 ℙℝ𝔼𝔽𝕀𝕏 : ${global.config.PREFIX}`)
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("no prefix commands", event.threadID)
}
