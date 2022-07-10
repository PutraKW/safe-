const fetch = require('node-fetch'); 
 const moment = require('moment'); 
 const chalk = require('chalk'); 
 const rs = require('readline-sync'); 
  
 function sleep(ms) { 
   return new Promise(resolve => setTimeout(resolve, ms)); 
 } 
  
 const GoStumble = (auth) => new Promise((resolve, reject) => { 
  
   fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', { 
     method: 'GET', 
     headers: { 
       'authorization': auth 
     } 
   }) 
     .then(res => res.text()) 
     .then(data => { 
       resolve(data); 
     }) 
     .catch(err => { 
       reject(err); 
     }); 
  
 }); 
  
 (async () => { 
  
   console.log(` 
   ┈┈┈╲┈┈┈┈╱ 
   ┈┈┈╱▔▔▔▔╲ 
   ┈┈┃┈▇┈┈▇┈┃ 
   ╭╮┣━━━━━━┫╭╮ 
   ┃┃┃┈┈┈┈┈┈┃┃┃ 
   ╰╯┃┈┈┈┈┈┈┃╰╯ 
   ┈┈╰┓┏━━┓┏╯ 
   ┈┈┈╰╯┈┈╰╯HACK CROWN & TROPHY SG 
 By : ${chalk.Cyan('@Putra')}
  
   const auth = rs.question('Auth lu kontol : '); 
   console.log(`Sedang Loading Mohon Tunggu`); 
 await sleep (2000); 
  
   while (true) { 
  
     const result = await GoStumble(auth); 
     if (!result) { 
  
       console.log(chalk.bgRed(`\r[ ${moment().format('HH:mm:ss')} ] Auth Token Anda Sudah Masuk !`)); 
        
  
     } else if (result.includes('User')) { 
  
       const data = JSON.parse(result); 
       const username = data.User.Username; 
       const country = data.User.Country; 
       const trophy = data.User.SkillRating; 
       const crown = data.User.Crowns; 
 console.log(chalk.bgBlack(`\r[ ${moment().format('HH:mm:ss')} ] ${chalk.yellow(`Nama Pengguna : ${username}`)} | ${chalk.yellow(`Negara : ${country}`)} | ${chalk.green(`Data Send : Berhasil`)} | ${chalk.blue(`Trophy : ${trophy}`)} | ${chalk.blue(`Mahkota : ${crown}`)}`)); 
 console.log(chalk.bgRed(`Awokwokwok akun lu keban bgst:v !`)); 
       await sleep(5000); 
  
     } else if (result == 'BANNED') { 
       console.log(chalk.bgRed(`BANNED`)); 
      break; 
     } 
   } 
  
  
 })();
