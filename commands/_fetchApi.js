/*CMD
  command: /fetchApi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let txnId = User.getProperty("txnId")

HTTP.get( {
    url: "http://bot.soallgrow.com/addfundApi.php?txn-id="+txnId,
    success: "/done",
    error: "/error"} )

