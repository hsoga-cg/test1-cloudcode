// ====================================================================================================
//
// Cloud Code for State_Load, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var state = Spark.getPlayer().getScriptData("STATE");

Spark.setScriptData("STATE", state);