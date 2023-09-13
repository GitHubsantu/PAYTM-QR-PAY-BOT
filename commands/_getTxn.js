/*CMD
  command: /getTxn
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📌Send Your Transaction ID: 
Ex. `T2308271602462115962313`
  ANSWER
  keyboard: TXN History
  aliases: /retry
CMD*/

let demoTxnid = "T2308271602462115962313"
if(demoTxnid == message){
  Bot.sendMessage("❌T2308271602462115962313 it is an demo Transaction Id /retry")
}else{
  User.setProperty("txnId",message,"string")
  Bot.runCommand("/fetchApi")
}

