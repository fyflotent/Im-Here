const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const command_char='!'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if( msg.content.substring(0,1)==='!'){
		var cmd=msg.content.substring(1)
		if (cmd === 'help') {
			msg.channel.send({
				files: [{
					name: 'i_am_here.png',
					attachment: 'i_am_here.png'
				}]
			});
			console.log("Saw someone in need")
		}
	}
	else if(/^💖 .* and .* are now married! 💖$/.test(msg.content)){
		msg.channel.send({
			files: [{
				name: 'swat.gif',
				attachment: 'swat.gif'
			}]
		});
	}
	else if ((msg.content==='$waifu' || msg.content==='$w') && (msg.author.username==="Fyflotent" || msg.author.username==="AKAFogle")){
		var roll=Math.random()
		if(roll<.01){
			msg.channel.send({
				files: ['https://media.giphy.com/media/l4Ki2obCyAQS5WhFe/giphy.gif']
			});
		}
		else{
			console.log(roll)
		}
	}
});

client.login(auth.token);
