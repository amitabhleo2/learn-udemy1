({
	//myAction : function(component, event, helper) {
    doSubmit : 	function(cmp, evt, hlpr) {
        //getting the value of abc from controller
        var initialValueOfABC = cmp.get("v.abc");
        if  (initialValueOfABC == "true"){
            alert("value of abc is True");
            //setting the vlaue to false
            cmp.set("v.abc","false");
        }else {
            alert("value of abc is False");
            //setting the value to trure
          cmp.set("v.abc","true") ;
    	}
	}
})