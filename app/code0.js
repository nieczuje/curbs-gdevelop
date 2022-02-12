gdjs.UlicaCode = {};
gdjs.UlicaCode.GDNewObjectObjects1= [];
gdjs.UlicaCode.GDNewObjectObjects2= [];
gdjs.UlicaCode.GDWallForBlueFloorObjects1= [];
gdjs.UlicaCode.GDWallForBlueFloorObjects2= [];
gdjs.UlicaCode.GDWallForRedFloorObjects1= [];
gdjs.UlicaCode.GDWallForRedFloorObjects2= [];
gdjs.UlicaCode.GDBlueBackgroundObjects1= [];
gdjs.UlicaCode.GDBlueBackgroundObjects2= [];
gdjs.UlicaCode.GDTommyObjects1= [];
gdjs.UlicaCode.GDTommyObjects2= [];
gdjs.UlicaCode.GDSoccerBall2Objects1= [];
gdjs.UlicaCode.GDSoccerBall2Objects2= [];
gdjs.UlicaCode.GDBarFrameObjects1= [];
gdjs.UlicaCode.GDBarFrameObjects2= [];
gdjs.UlicaCode.GDScoreObjects1= [];
gdjs.UlicaCode.GDScoreObjects2= [];
gdjs.UlicaCode.GDCornerObjects1= [];
gdjs.UlicaCode.GDCornerObjects2= [];

gdjs.UlicaCode.conditionTrue_0 = {val:false};
gdjs.UlicaCode.condition0IsTrue_0 = {val:false};
gdjs.UlicaCode.condition1IsTrue_0 = {val:false};
gdjs.UlicaCode.condition2IsTrue_0 = {val:false};
gdjs.UlicaCode.condition3IsTrue_0 = {val:false};
gdjs.UlicaCode.conditionTrue_1 = {val:false};
gdjs.UlicaCode.condition0IsTrue_1 = {val:false};
gdjs.UlicaCode.condition1IsTrue_1 = {val:false};
gdjs.UlicaCode.condition2IsTrue_1 = {val:false};
gdjs.UlicaCode.condition3IsTrue_1 = {val:false};


gdjs.UlicaCode.mapOfGDgdjs_46UlicaCode_46GDSoccerBall2Objects1Objects = Hashtable.newFrom({"SoccerBall2": gdjs.UlicaCode.GDSoccerBall2Objects1});gdjs.UlicaCode.eventsList0 = function(runtimeScene) {

};gdjs.UlicaCode.mapOfGDgdjs_46UlicaCode_46GDSoccerBall2Objects1Objects = Hashtable.newFrom({"SoccerBall2": gdjs.UlicaCode.GDSoccerBall2Objects1});gdjs.UlicaCode.mapOfGDgdjs_46UlicaCode_46GDCornerObjects1Objects = Hashtable.newFrom({"Corner": gdjs.UlicaCode.GDCornerObjects1});gdjs.UlicaCode.mapOfGDgdjs_46UlicaCode_46GDSoccerBall2Objects1Objects = Hashtable.newFrom({"SoccerBall2": gdjs.UlicaCode.GDSoccerBall2Objects1});gdjs.UlicaCode.mapOfGDgdjs_46UlicaCode_46GDWallForBlueFloorObjects1Objects = Hashtable.newFrom({"WallForBlueFloor": gdjs.UlicaCode.GDWallForBlueFloorObjects1});gdjs.UlicaCode.eventsList1 = function(runtimeScene) {

{


gdjs.UlicaCode.condition0IsTrue_0.val = false;
{
gdjs.UlicaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.UlicaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BarFrame"), gdjs.UlicaCode.GDBarFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Corner"), gdjs.UlicaCode.GDCornerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoccerBall2"), gdjs.UlicaCode.GDSoccerBall2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.UlicaCode.GDTommyObjects1);
{for(var i = 0, len = gdjs.UlicaCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.UlicaCode.GDTommyObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.UlicaCode.GDBarFrameObjects1.length ;i < len;++i) {
    gdjs.UlicaCode.GDBarFrameObjects1[i].setOpacity(10);
}
}{for(var i = 0, len = gdjs.UlicaCode.GDCornerObjects1.length ;i < len;++i) {
    gdjs.UlicaCode.GDCornerObjects1[i].setOpacity(10);
}
}{for(var i = 0, len = gdjs.UlicaCode.GDSoccerBall2Objects1.length ;i < len;++i) {
    gdjs.UlicaCode.GDSoccerBall2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.UlicaCode.condition0IsTrue_0.val = false;
{
gdjs.UlicaCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.UlicaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BarFrame"), gdjs.UlicaCode.GDBarFrameObjects1);
{for(var i = 0, len = gdjs.UlicaCode.GDBarFrameObjects1.length ;i < len;++i) {
    gdjs.UlicaCode.GDBarFrameObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 500, runtimeScene);
}
}}

}


{


gdjs.UlicaCode.condition0IsTrue_0.val = false;
gdjs.UlicaCode.condition1IsTrue_0.val = false;
{
gdjs.UlicaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.UlicaCode.condition0IsTrue_0.val ) {
{
{gdjs.UlicaCode.conditionTrue_1 = gdjs.UlicaCode.condition1IsTrue_0;
gdjs.UlicaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8555172);
}
}}
if (gdjs.UlicaCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BarFrame"), gdjs.UlicaCode.GDBarFrameObjects1);
gdjs.UlicaCode.GDSoccerBall2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.UlicaCode.mapOfGDgdjs_46UlicaCode_46GDSoccerBall2Objects1Objects, (( gdjs.UlicaCode.GDBarFrameObjects1.length === 0 ) ? 0 :gdjs.UlicaCode.GDBarFrameObjects1[0].getPointX("Spawn")), (( gdjs.UlicaCode.GDBarFrameObjects1.length === 0 ) ? 0 :gdjs.UlicaCode.GDBarFrameObjects1[0].getPointY("Spawn")), "");
}{for(var i = 0, len = gdjs.UlicaCode.GDSoccerBall2Objects1.length ;i < len;++i) {
    gdjs.UlicaCode.GDSoccerBall2Objects1[i].getBehavior("Physics2").applyForceTowardPosition(12, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), (( gdjs.UlicaCode.GDBarFrameObjects1.length === 0 ) ? 0 :gdjs.UlicaCode.GDBarFrameObjects1[0].getPointX("Spawn")), (( gdjs.UlicaCode.GDBarFrameObjects1.length === 0 ) ? 0 :gdjs.UlicaCode.GDBarFrameObjects1[0].getPointY("Spawn")));
}
}{for(var i = 0, len = gdjs.UlicaCode.GDSoccerBall2Objects1.length ;i < len;++i) {
    gdjs.UlicaCode.GDSoccerBall2Objects1[i].resetTimer("ballTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoccerBall2"), gdjs.UlicaCode.GDSoccerBall2Objects1);

gdjs.UlicaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.UlicaCode.GDSoccerBall2Objects1.length;i<l;++i) {
    if ( gdjs.UlicaCode.GDSoccerBall2Objects1[i].getTimerElapsedTimeInSecondsOrNaN("ballTimer") > 2 ) {
        gdjs.UlicaCode.condition0IsTrue_0.val = true;
        gdjs.UlicaCode.GDSoccerBall2Objects1[k] = gdjs.UlicaCode.GDSoccerBall2Objects1[i];
        ++k;
    }
}
gdjs.UlicaCode.GDSoccerBall2Objects1.length = k;}if (gdjs.UlicaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.UlicaCode.GDSoccerBall2Objects1 */
{for(var i = 0, len = gdjs.UlicaCode.GDSoccerBall2Objects1.length ;i < len;++i) {
    gdjs.UlicaCode.GDSoccerBall2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.UlicaCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Corner"), gdjs.UlicaCode.GDCornerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoccerBall2"), gdjs.UlicaCode.GDSoccerBall2Objects1);

gdjs.UlicaCode.condition0IsTrue_0.val = false;
gdjs.UlicaCode.condition1IsTrue_0.val = false;
{
gdjs.UlicaCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.UlicaCode.mapOfGDgdjs_46UlicaCode_46GDSoccerBall2Objects1Objects, "Physics2", gdjs.UlicaCode.mapOfGDgdjs_46UlicaCode_46GDCornerObjects1Objects, false);
}if ( gdjs.UlicaCode.condition0IsTrue_0.val ) {
{
{gdjs.UlicaCode.conditionTrue_1 = gdjs.UlicaCode.condition1IsTrue_0;
gdjs.UlicaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8523220);
}
}}
if (gdjs.UlicaCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoccerBall2"), gdjs.UlicaCode.GDSoccerBall2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WallForBlueFloor"), gdjs.UlicaCode.GDWallForBlueFloorObjects1);

gdjs.UlicaCode.condition0IsTrue_0.val = false;
gdjs.UlicaCode.condition1IsTrue_0.val = false;
gdjs.UlicaCode.condition2IsTrue_0.val = false;
{
gdjs.UlicaCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.UlicaCode.condition0IsTrue_0.val ) {
{
gdjs.UlicaCode.condition1IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.UlicaCode.mapOfGDgdjs_46UlicaCode_46GDSoccerBall2Objects1Objects, "Physics2", gdjs.UlicaCode.mapOfGDgdjs_46UlicaCode_46GDWallForBlueFloorObjects1Objects, false);
}if ( gdjs.UlicaCode.condition1IsTrue_0.val ) {
{
{gdjs.UlicaCode.conditionTrue_1 = gdjs.UlicaCode.condition2IsTrue_0;
gdjs.UlicaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7143700);
}
}}
}
if (gdjs.UlicaCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.UlicaCode.GDScoreObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.UlicaCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.UlicaCode.GDScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.UlicaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.UlicaCode.GDNewObjectObjects1.length = 0;
gdjs.UlicaCode.GDNewObjectObjects2.length = 0;
gdjs.UlicaCode.GDWallForBlueFloorObjects1.length = 0;
gdjs.UlicaCode.GDWallForBlueFloorObjects2.length = 0;
gdjs.UlicaCode.GDWallForRedFloorObjects1.length = 0;
gdjs.UlicaCode.GDWallForRedFloorObjects2.length = 0;
gdjs.UlicaCode.GDBlueBackgroundObjects1.length = 0;
gdjs.UlicaCode.GDBlueBackgroundObjects2.length = 0;
gdjs.UlicaCode.GDTommyObjects1.length = 0;
gdjs.UlicaCode.GDTommyObjects2.length = 0;
gdjs.UlicaCode.GDSoccerBall2Objects1.length = 0;
gdjs.UlicaCode.GDSoccerBall2Objects2.length = 0;
gdjs.UlicaCode.GDBarFrameObjects1.length = 0;
gdjs.UlicaCode.GDBarFrameObjects2.length = 0;
gdjs.UlicaCode.GDScoreObjects1.length = 0;
gdjs.UlicaCode.GDScoreObjects2.length = 0;
gdjs.UlicaCode.GDCornerObjects1.length = 0;
gdjs.UlicaCode.GDCornerObjects2.length = 0;

gdjs.UlicaCode.eventsList1(runtimeScene);
return;

}

gdjs['UlicaCode'] = gdjs.UlicaCode;
