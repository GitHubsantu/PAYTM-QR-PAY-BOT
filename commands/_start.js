/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendPhoto({
  photo: "https://bot.soallgrow.com/paytmqr.jpg", // it is picture!
  caption: "*💳 You Can Pay via Your Phonepe App Or Paytm App Scan and Pay*\n\n",
  reply_markup: { inline_keyboard: [
    [
      { text: "➕ Add Fund", callback_data: "/getTxn" }
    ]]}
});



