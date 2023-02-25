# APY
The Node.JS wrapper for interfacing with APY.

## Example Image
### Native
```javascript
const { Image } = require('apy-wrapper');

(async () => {
    let image = await Image.get('discordjs', { text: 'APY' });
    console.log(image);
});
```
### Discord.js
```javascript
const { AttachmentBuilder } = require('discord.js');
async run(message, args) {
    let image = await Image.get('discordjs', { text: 'APY' });
    let attach = new AttachmentBuilder(image, { name: 'myAPYImage.jpeg' });
    return (await message.channel.send({ content: 'Hello!', files: [attach] }));
}
```