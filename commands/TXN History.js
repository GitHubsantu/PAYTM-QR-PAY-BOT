/*CMD
  command: TXN History
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var his = User.getProperty("history")
if(his == undefined){
var go ="Your All Transactions"+"\n----------------------"+"\nNo Transactions Found";
Bot.sendMessage(go)
}else{
Bot.sendMessage("Your All Transactions\n"+his)
}
