const express = require('express')
const linebot = require('linebot')
const dotenv = require('dotenv')
const app = express()
//判斷執行環境
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})
const linebotParser = bot.parser()


bot.on('message', function (event) {
  console.log(event)
  switch (event.message.text.toLowerCase().replace(/\s*/g, "")) {
    case 'wifi密碼':
      event.reply({
        type: 'text',
        text: '密碼為 XXXXXXXXX'
      })
      break
    case '黃沐妍':
      event.reply([{
        type: 'text',
        text: '又搞不清楚誰是誰了嗎?😜 這是黃沐妍(小豬)'
      }, {
        type: 'image',
        originalContentUrl: 'https://media.vogue.com.tw/photos/626bbf47fd0ca32654b3f9e6/2:3/w_1920,c_limit/seanT174740Ls2%20%EF%BC%B3.jpg',
        previewImageUrl: 'https://media.vogue.com.tw/photos/626bbf47fd0ca32654b3f9e6/2:3/w_1920,c_limit/seanT174740Ls2%20%EF%BC%B3.jpg'
      }])
      break
    case '熊熊':
      event.reply([
        {
          type: 'text',
          text: '又搞不清楚誰是誰了嗎?😜 這是熊熊'
        }, {
          type: 'image',
          originalContentUrl: 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/07/04/realtime/17879836.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=1050&exp=3600',
          previewImageUrl: 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/07/04/realtime/17879836.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=1050&exp=3600'
        }
      ])
      break
    case '周曉涵':
      event.reply([{
        type: 'text',
        text: '又搞不清楚誰是誰了嗎?😜 這是周曉涵'
      }, {
        type: 'image',
        originalContentUrl: 'https://www.mirrormedia.com.tw/assets/images/20220406153519-4d420f4c75389fbdb31c792ff9201a8a-tablet.jpg',
        previewImageUrl: 'https://www.mirrormedia.com.tw/assets/images/20220406153519-4d420f4c75389fbdb31c792ff9201a8a-tablet.jpg'
      }])
      break
    case '邵雨薇':
      event.reply([
        {
          type: 'text',
          text: '又搞不清楚誰是誰了嗎?😜 這是邵雨薇'
        }, {
          type: 'image',
          originalContentUrl: 'https://s.yimg.com/ny/api/res/1.2/WmZAkdsYA65ywKuU1GmRhQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-01/a46673c0-7913-11ec-bfbf-4817f26d3544',
          previewImageUrl: 'https://s.yimg.com/ny/api/res/1.2/WmZAkdsYA65ywKuU1GmRhQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-01/a46673c0-7913-11ec-bfbf-4817f26d3544'
        }
      ])
      break
    default:
      event.reply({
        type: 'text',
        text: '指令錯誤，請再試一次'
      })
  }
})

app.post('/', linebotParser)

app.listen(process.env.PORT, () => {
  console.log(`This app is running on http://localhost:${process.env.PORT}`)
})