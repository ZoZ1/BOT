const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "525037137406590977"; // ÇíÏí ÇáÓÑÑÝÑ
var channel = "525037137859444746";//ÇíÏí ÇáÑæã
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** ãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏãÍãÏ **')
    },305);
})



client.on('ready', async() => {
var server = "525037137406590977"; // ÇíÏí ÇáÓÑÑÝÑ
var channel = "525037137859444746";//ÇíÏí ÇáÑæã
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})

client.on('ready', async() => {
var server = "525037137406590977"; // ÇíÏí ÇáÓÑÑÝÑ
var channel = "525037137859444746";//ÇíÏí ÇáÑæã
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#rep 
<@503918570598563840>')
    },8.64e+7);
})


client.on('message', message => {
if(message.content.startsWith('1s')) {
if(message.author.id !== "420637382644072451") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 





client.login(process.env.524293876908032002."NTAzOTE4NTcwNTk4NTYzODQw.DvrdZA.6dL18rOFhBOW5vezcWCD1bynRRM"); 
