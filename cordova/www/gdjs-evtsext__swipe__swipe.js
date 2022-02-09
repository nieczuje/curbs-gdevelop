
gdjs.evtsExt__Swipe__Swipe = gdjs.evtsExt__Swipe__Swipe || {};

/**
 * Behavior generated from Swipe Detector
 */
gdjs.evtsExt__Swipe__Swipe.Swipe = class Swipe extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.Time = behaviorData.Time !== undefined ? behaviorData.Time : Number("0.200") || 0;
    this._behaviorData.MinLength = behaviorData.MinLength !== undefined ? behaviorData.MinLength : Number("100") || 0;
    this._behaviorData.PointStartX = Number("0") || 0;
    this._behaviorData.PointStartY = Number("0") || 0;
    this._behaviorData.PointEndX = Number("0") || 0;
    this._behaviorData.PointEndY = Number("0") || 0;
    this._behaviorData.Length = Number("0") || 0;
    this._behaviorData.DirectionX = Number("0") || 0;
    this._behaviorData.DirectionY = Number("0") || 0;
    this._behaviorData.SwipeStart = false;
    this._behaviorData.Angle = Number("0") || 0;
    this._behaviorData.Timer = Number("0") || 0;
    this._behaviorData.Done = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Time !== newBehaviorData.Time)
      this._behaviorData.Time = newBehaviorData.Time;
    if (oldBehaviorData.MinLength !== newBehaviorData.MinLength)
      this._behaviorData.MinLength = newBehaviorData.MinLength;
    if (oldBehaviorData.PointStartX !== newBehaviorData.PointStartX)
      this._behaviorData.PointStartX = newBehaviorData.PointStartX;
    if (oldBehaviorData.PointStartY !== newBehaviorData.PointStartY)
      this._behaviorData.PointStartY = newBehaviorData.PointStartY;
    if (oldBehaviorData.PointEndX !== newBehaviorData.PointEndX)
      this._behaviorData.PointEndX = newBehaviorData.PointEndX;
    if (oldBehaviorData.PointEndY !== newBehaviorData.PointEndY)
      this._behaviorData.PointEndY = newBehaviorData.PointEndY;
    if (oldBehaviorData.Length !== newBehaviorData.Length)
      this._behaviorData.Length = newBehaviorData.Length;
    if (oldBehaviorData.DirectionX !== newBehaviorData.DirectionX)
      this._behaviorData.DirectionX = newBehaviorData.DirectionX;
    if (oldBehaviorData.DirectionY !== newBehaviorData.DirectionY)
      this._behaviorData.DirectionY = newBehaviorData.DirectionY;
    if (oldBehaviorData.SwipeStart !== newBehaviorData.SwipeStart)
      this._behaviorData.SwipeStart = newBehaviorData.SwipeStart;
    if (oldBehaviorData.Angle !== newBehaviorData.Angle)
      this._behaviorData.Angle = newBehaviorData.Angle;
    if (oldBehaviorData.Timer !== newBehaviorData.Timer)
      this._behaviorData.Timer = newBehaviorData.Timer;
    if (oldBehaviorData.Done !== newBehaviorData.Done)
      this._behaviorData.Done = newBehaviorData.Done;

    return true;
  }

  // Properties:
  
  _getTime() {
    return this._behaviorData.Time !== undefined ? this._behaviorData.Time : Number("0.200") || 0;
  }
  _setTime(newValue) {
    this._behaviorData.Time = newValue;
  }
  _getMinLength() {
    return this._behaviorData.MinLength !== undefined ? this._behaviorData.MinLength : Number("100") || 0;
  }
  _setMinLength(newValue) {
    this._behaviorData.MinLength = newValue;
  }
  _getPointStartX() {
    return this._behaviorData.PointStartX !== undefined ? this._behaviorData.PointStartX : Number("0") || 0;
  }
  _setPointStartX(newValue) {
    this._behaviorData.PointStartX = newValue;
  }
  _getPointStartY() {
    return this._behaviorData.PointStartY !== undefined ? this._behaviorData.PointStartY : Number("0") || 0;
  }
  _setPointStartY(newValue) {
    this._behaviorData.PointStartY = newValue;
  }
  _getPointEndX() {
    return this._behaviorData.PointEndX !== undefined ? this._behaviorData.PointEndX : Number("0") || 0;
  }
  _setPointEndX(newValue) {
    this._behaviorData.PointEndX = newValue;
  }
  _getPointEndY() {
    return this._behaviorData.PointEndY !== undefined ? this._behaviorData.PointEndY : Number("0") || 0;
  }
  _setPointEndY(newValue) {
    this._behaviorData.PointEndY = newValue;
  }
  _getLength() {
    return this._behaviorData.Length !== undefined ? this._behaviorData.Length : Number("0") || 0;
  }
  _setLength(newValue) {
    this._behaviorData.Length = newValue;
  }
  _getDirectionX() {
    return this._behaviorData.DirectionX !== undefined ? this._behaviorData.DirectionX : Number("0") || 0;
  }
  _setDirectionX(newValue) {
    this._behaviorData.DirectionX = newValue;
  }
  _getDirectionY() {
    return this._behaviorData.DirectionY !== undefined ? this._behaviorData.DirectionY : Number("0") || 0;
  }
  _setDirectionY(newValue) {
    this._behaviorData.DirectionY = newValue;
  }
  _getSwipeStart() {
    return this._behaviorData.SwipeStart !== undefined ? this._behaviorData.SwipeStart : false;
  }
  _setSwipeStart(newValue) {
    this._behaviorData.SwipeStart = newValue;
  }
  _getAngle() {
    return this._behaviorData.Angle !== undefined ? this._behaviorData.Angle : Number("0") || 0;
  }
  _setAngle(newValue) {
    this._behaviorData.Angle = newValue;
  }
  _getTimer() {
    return this._behaviorData.Timer !== undefined ? this._behaviorData.Timer : Number("0") || 0;
  }
  _setTimer(newValue) {
    this._behaviorData.Timer = newValue;
  }
  _getDone() {
    return this._behaviorData.Done !== undefined ? this._behaviorData.Done : false;
  }
  _setDone(newValue) {
    this._behaviorData.Done = newValue;
  }
}

// Methods:
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1_2final = [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_2 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_2 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_2 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition2IsTrue_2 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() >= (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMinLength()) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDone(true);
}
}}

}


};gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSwipeStart() ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_1.val ) {
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_2 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_1;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1_2final.length = 0;gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_2.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_2.val = false;
{
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_2.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_2.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_2.val = true;
}
}
{
gdjs.copyArray(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2);

for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimer() >= (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime()) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_2.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_2.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_2.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1_2final.indexOf(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1_2final.push(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1_2final, gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1);
}
}
}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSwipeStart(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointEndX(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointEndY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionX((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointEndX()) - (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointStartX()));
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionY((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointEndY()) - (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointStartY()));
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLength((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Length((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}
{ //Subevents
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSwipeStart() ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTimer(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimer() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8320724);
}
}}
if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointStartX(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointStartY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointEndX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointEndY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSwipeStart(true);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLength(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTimer(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngle(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDone(false);
}
}}

}


};gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSwipeStart()) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDone() ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDone(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSwipeStart(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointStartX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointStartY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointEndX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointEndY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLength(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTimer(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngle(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionY(0);
}
}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSwipeStart(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDone(false);
}
}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDone() ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDone = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointXContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointXContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointXContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointXContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointStartX()); }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointXContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointYContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointYContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointYContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointStartY()); }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.StartPointYContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointXContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointXContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointXContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointXContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointEndX()); }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointXContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointYContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointYContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointYContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointEndY()); }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.EndPointYContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLength(Math.ceil(Math.sqrt((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX()) * (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX()) + (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY()) * (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY()))));
}
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength()); }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Length = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() > 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY()); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() > 0) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 0; }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() > 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX()); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() > 0) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 0; }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() > 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (1 / (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength())) * (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX()); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() > 0) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 0; }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormXContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() > 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (1 / (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength())) * (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY()); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() > 0) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 0; }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionNormYContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngle(gdjs.evtTools.common.angleBetweenPositions(0, 0, (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX()), (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY())));
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle()); }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Angle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngle((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Angle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < -(45) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= -(135) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "UP"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 45 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 135 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "DOWN"; }}}

}


{

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2.length = 0;


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2_1final.length = 0;gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3);
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 135 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3.length = k;if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2_1final.push(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3);
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < -(135) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3.length = k;if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2_1final.push(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2_1final, gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2);
}
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "LEFT"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= -(45) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 45 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "RIGHT"; }}}

}


};gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4Direction = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average4DirectionContext.eventsList2(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngle((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Angle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < -(68) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= -(112) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "UP"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 68 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 112 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "DOWN"; }}}

}


{

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = 0;


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2_1final.length = 0;gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3);
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 158 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3.length = k;if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2_1final.push(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3);
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < -(157) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3.length = k;if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2_1final.push(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2_1final, gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2);
}
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "LEFT"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 22 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= -(23) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "RIGHT"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < -(112) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= -(158) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "UP-LEFT"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() <= -(23) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() > -(68) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "UP-RIGHT"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() > 112 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() <= 158 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "DOWN-LEFT"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() > 22 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() <= 68 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "DOWN-RIGHT"; }}}

}


};gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8Direction = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Average8DirectionContext.eventsList2(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("Swipe::Swipe", gdjs.evtsExt__Swipe__Swipe.Swipe);
