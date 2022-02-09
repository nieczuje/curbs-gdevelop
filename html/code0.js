gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDSoccerBall1Objects1_1final = [];

gdjs.New_32sceneCode.GDSoccerBall1Objects1= [];
gdjs.New_32sceneCode.GDSoccerBall1Objects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_1 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSoccerBall1Objects1Objects = Hashtable.newFrom({"SoccerBall1": gdjs.New_32sceneCode.GDSoccerBall1Objects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SoccerBall1"), gdjs.New_32sceneCode.GDSoccerBall1Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSoccerBall1Objects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDSoccerBall1Objects1[i].getBehavior("Swipe").IsDone((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDSoccerBall1Objects1[k] = gdjs.New_32sceneCode.GDSoccerBall1Objects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSoccerBall1Objects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSoccerBall1Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSoccerBall1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSoccerBall1Objects1[i].getBehavior("Physics2").setDynamic();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSoccerBall1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSoccerBall1Objects1[i].getBehavior("Physics2").applyPolarForce((gdjs.New_32sceneCode.GDSoccerBall1Objects1[i].getBehavior("Swipe").Angle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 160 + ((gdjs.New_32sceneCode.GDSoccerBall1Objects1[i].getBehavior("Swipe").Length((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 2), 0, 0);
}
}}

}


{

gdjs.New_32sceneCode.GDSoccerBall1Objects1.length = 0;


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.GDSoccerBall1Objects1_1final.length = 0;gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
gdjs.New_32sceneCode.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("SoccerBall1"), gdjs.New_32sceneCode.GDSoccerBall1Objects2);
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSoccerBall1Objects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDSoccerBall1Objects2[i].getY() > 600 ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDSoccerBall1Objects2[k] = gdjs.New_32sceneCode.GDSoccerBall1Objects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSoccerBall1Objects2.length = k;if( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDSoccerBall1Objects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDSoccerBall1Objects1_1final.indexOf(gdjs.New_32sceneCode.GDSoccerBall1Objects2[j]) === -1 )
            gdjs.New_32sceneCode.GDSoccerBall1Objects1_1final.push(gdjs.New_32sceneCode.GDSoccerBall1Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("SoccerBall1"), gdjs.New_32sceneCode.GDSoccerBall1Objects2);
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSoccerBall1Objects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDSoccerBall1Objects2[i].getX() < 0 ) {
        gdjs.New_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDSoccerBall1Objects2[k] = gdjs.New_32sceneCode.GDSoccerBall1Objects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSoccerBall1Objects2.length = k;if( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDSoccerBall1Objects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDSoccerBall1Objects1_1final.indexOf(gdjs.New_32sceneCode.GDSoccerBall1Objects2[j]) === -1 )
            gdjs.New_32sceneCode.GDSoccerBall1Objects1_1final.push(gdjs.New_32sceneCode.GDSoccerBall1Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("SoccerBall1"), gdjs.New_32sceneCode.GDSoccerBall1Objects2);
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSoccerBall1Objects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDSoccerBall1Objects2[i].getX() > 800 ) {
        gdjs.New_32sceneCode.condition2IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDSoccerBall1Objects2[k] = gdjs.New_32sceneCode.GDSoccerBall1Objects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSoccerBall1Objects2.length = k;if( gdjs.New_32sceneCode.condition2IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDSoccerBall1Objects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDSoccerBall1Objects1_1final.indexOf(gdjs.New_32sceneCode.GDSoccerBall1Objects2[j]) === -1 )
            gdjs.New_32sceneCode.GDSoccerBall1Objects1_1final.push(gdjs.New_32sceneCode.GDSoccerBall1Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.New_32sceneCode.GDSoccerBall1Objects1_1final, gdjs.New_32sceneCode.GDSoccerBall1Objects1);
}
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSoccerBall1Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSoccerBall1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSoccerBall1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSoccerBall1Objects1Objects, 100, 400, "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSoccerBall1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSoccerBall1Objects1[i].setScale(4);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SoccerBall1"), gdjs.New_32sceneCode.GDSoccerBall1Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDSoccerBall1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSoccerBall1Objects1[i].getBehavior("Physics2").setStatic();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSoccerBall1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSoccerBall1Objects1[i].setPosition(200,200);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSoccerBall1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSoccerBall1Objects1[i].clearForces();
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDSoccerBall1Objects1.length = 0;
gdjs.New_32sceneCode.GDSoccerBall1Objects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
