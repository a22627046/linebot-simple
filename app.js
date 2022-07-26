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
        text: '這是黃沐妍(小豬)'
      }, {
        type: 'uri',
        uri: 'https://zh.m.wikipedia.org/zh-tw/%E9%BB%83%E6%B2%90%E5%A6%8D'
      }])
      break
    case '熊熊':
      event.reply([
        {
          type: 'text',
          text: '這是熊熊'
        }, {
          type: 'uri',
          uri: 'https://zh.wikipedia.org/zh-tw/%E5%8D%93%E6%AF%93%E5%BD%A4'
        }
      ])
      break
    case '周曉涵':
      event.reply([{
        type: 'text',
        text: '這是周曉涵'
      }, {
        type: 'uri',
        uri: 'https://moviecool.asia/person/qd_91hzgS'
      }])
      break
    case '邵雨薇':
      event.reply([
        {
          type: 'text',
          text: '這是邵雨薇'
        }, {
          type: 'uri',
          uri: 'https://www.elle.com/tw/columnist/g36614244/ivy-shao-special-column-3/'
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