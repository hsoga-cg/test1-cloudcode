// ====================================================================================================
//
// Cloud Code for Get_User_Items, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var player = Spark.getPlayer();
var goods = new SparkRequests.AccountDetailsRequest().Send().virtualGoods;
for(var i in goods) {
//    player.useVGood(i, myGoods[i], "Test Purge");
}


Spark.setScriptData("RES", goods);