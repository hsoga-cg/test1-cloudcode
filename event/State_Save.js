// ====================================================================================================
//
// Cloud Code for State_Save, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var state = Spark.getData().STATE;

Spark.getPlayer().setScriptData("STATE", state);