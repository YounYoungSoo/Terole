const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";    

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '트롤아 도움말 을 입력해보세요' }, status: 'online' })
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.content === '트롤아 재현이') {
    message.reply('https://ifh.cc/g/gyX2aY.jpg');
  }
});

client.on('message', (message) => {
    if(message.content === '트롤아?') {
      message.reply('https://ifh.cc/g/E2iVle.png');
    }
  });

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('fuck');
  }

  if(message.content == '트롤아 도움말') {
    let img = 'https://ifh.cc/g/NOzgj9.png';
    let embed = new Discord.RichEmbed()
      .setTitle('봇 명령어 도움말')
      .setURL('http://www.naver.com')
      .setAuthor('류트롤 봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('트롤아 업적', '--류트롤의 업적을 보여줍니다..--')
      .addField('트롤아 잘못한거', '--류트롤의 잘못한 점을 보여줍니다.--')
      .addField('트롤아 허가', '--봇 제작의 허가를 받은 증거를 보여줍니다--')
      .addField('트롤아?', '--기능이 궁굼하면 쳐보세요 --')
      .addField('트롤아 업데이트', '--업데이트 현황을 보여줘요--')
      .addField('트롤아 공지', '--트롤봇에 관한 공지를 보여줘요--')
      .addBlankField()
      .setTimestamp()
      .setFooter('류트롤 봇', img)

    message.channel.send(embed)  
  } 

  if(message.content == '트롤아 업적') {
    let img = 'https://ifh.cc/g/NOzgj9.png';
    let embed = new Discord.RichEmbed()
      .setTitle('류트롤 업적')
      .setURL('http://www.naver.com')
      .setAuthor('류트롤 봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('류트롤 업적', '2020.06.22 : 심판의날 습격 준작중 탈주\n2020.06.24 : 심판의날 습격 준작중 탈주\n2020.06.27 : 심판의날 습격 준작중 탈주\n2020.06.29 : 심판의날 습격 준작중 탈주\n2020.07.03 : 심판의날 습격 피날레중 탈주\n2020.07.04 : 심판의날 습격 피날레중 고인물 3명을 버리고 탈주\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('류트롤 봇', img)

    message.channel.send(embed)  
  }

  if(message.content == '트롤아 잘못한거') {
    let img = 'https://ifh.cc/g/NOzgj9.png';
    let embed = new Discord.RichEmbed()
      .setTitle('류트롤 잘못한거')
      .setURL('http://www.naver.com')
      .setAuthor('류트롤 봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('류트롤 잘못한거', '탈주한 죄\n뻔뻔한 죄\n3명을 버리고 (어쩔수없이{?})컴퓨터 끈 죄\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('류트롤 봇', img)

    message.channel.send(embed)  
  }

  if(message.content == '트롤아 허가') {
    let img = 'https://ifh.cc/g/hluCYP.png';
    let embed = new Discord.RichEmbed()
      .setTitle('류트롤 공식허가')
      .setURL('http://www.naver.com')
      .setAuthor('류트롤 봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('공식 허가', '류트롤 봇은 공식 허가를 받았습니다\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('류트롤 봇', img)

    message.channel.send(embed)  
  }
  
    if(message.content === '트롤아 허가') {
      message.reply('https://ifh.cc/g/hluCYP.png');
    }
  

  if(message.content == '트롤아 업데이트') {
    let img = 'https://ifh.cc/g/NOzgj9.png';
    let embed = new Discord.RichEmbed()
      .setTitle('업데이트 현황')
      .setURL('http://www.naver.com')
      .setAuthor('류트롤 봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('업데이트 현황', '추가된 업데이트 사항이 없습니다.\n')
      .addField('업데이트 예정', '업데이트 예정이 없습니다.\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('류트롤 봇', img)

    message.channel.send(embed)  
  }


  if(message.content == '트롤아 공지') {
    let img = 'https://ifh.cc/g/NOzgj9.png';
    let embed = new Discord.RichEmbed()
      .setTitle('공지')
      .setURL('http://www.naver.com')
      .setAuthor('류트롤 봇', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('피드백', '추가해주었으면 하는 부분이 있으면 디코 채팅방에서 말해주십시오. 적극적으로 반영하겠습니다.')
      .addField('랏되 봇 메이커 홈페이지 개설', '랏되 봇 메이커는 여러분의 성원에 힘입어 랏되 봇 메이커 홈페이지를 개설하였습니다. 앞으로 더 좋은 활동을 보여줄 것이며 많이많이 사용해 주시기 바랍니다.\nhttps://lattee.modoo.at')
      .addField('류트롤 봇', '류트롤 봇을 만들었습니다. 트롤아 도움말 을 입력하여 자세한 정보를 확인해보세요')
      .addBlankField()
      .setTimestamp()
      .setFooter('류트롤 봇', img)

    message.channel.send(embed)   
  }



  if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);