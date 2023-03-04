const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const { apiId, apiHash } = require('./config');

const client = new TelegramClient(
  new StringSession('session'), 
  apiId, 
  apiHash
);

(async () => {
  await client.start({ botAuthToken: '6238094306:AAHhOApLxOFYGBNyskfyOx3JzR93TvRukIA' });

  const chats = await client.getDialogs();
  const targetChat = chats.find(chat => chat.title === '<group_name>');

  const members = await client.getParticipants(targetChat.id, { filter: { _: 'channelParticipantsRecent' }, limit: 100 });
  
  members.forEach(member => {
    console.log(`- ${member.firstName} ${member.lastName} (${member.username})`);
  });

  await client.disconnect();
})();
