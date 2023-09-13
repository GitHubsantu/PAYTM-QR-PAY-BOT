/*CMD
  command: /done
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var res = JSON.parse(content)
let orderId = res.ORDERID
let txnsAmount = res.TXNAMOUNT
let status = res.RESPMSG
let paymentMode = res.PAYMENTMODE
let txnTime = res.TXNDATE
let errStatus = res.status
let errMessage = res.message

if (errStatus == false) {
  Bot.sendMessage(
    errMessage + "❌ \nPlease contact to admin *@mamber_adder_paid1\nor /retry*"
  )
} else {
  Bot.sendMessage(
    "Your Fund is added to Your Account🥳\n\nTransaction ID: " +
      orderId +
      "\nTransaction Amount: " +
      txnsAmount +
      "\nStatus: " +
      status +
      "\nPayment Mode: " +
      paymentMode +
      "\nTime: " +
      txnTime
  )

  var history = User.getProperty("history")

  if (history == undefined) {
    var newh =
      "\n----------------------\nTransaction ID: " +
      orderId +
      "\nTransaction Amount: " +
      txnsAmount +
      "\nStatus: " +
      status +
      "\nPayment Mode: " +
      paymentMode +
      "\nTime: " +
      txnTime
    User.setProperty("history", newh, "string")
  } else {
    var nwh =
      "\n----------------------\nTransaction ID: " +
      orderId +
      "\nTransaction Amount: " +
      txnsAmount +
      "\nStatus: " +
      status +
      "\nPayment Mode: " +
      paymentMode +
      "\nTime: " +
      txnTime
    var toal = nwh + history
    User.setProperty("history", toal, "string")
  }
}

