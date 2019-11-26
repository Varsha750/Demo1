({
	doInit : function(component, event, helper) {
        
         var accountCheck = component.get("v.recordId");
        var url = '/apex/Endo_SmartContactSearch?accid='+accountCheck;
        component.set('v.accUrl',url);
		
	}
})