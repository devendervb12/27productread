sap.ui.controller("zproductread.Read", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zproductread.Read
*/
	onInit: function() {
    
		var oModel = new sap.ui.model.odata.v2.ODataModel(
		"proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_BATCH27_PRODUCT_SRV_01/"		
		);
		
		this.getView().setModel(oModel);
		
		//this.getView().bindElement("/ProductSet('HT-1020')");
		
		//var oCombo = this.getView().byId("idCombo");
		
		// selected
	//	oCombo.getValue();
	//	oCombo.getSelectedItem()
		 
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zproductread.Read
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zproductread.Read
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zproductread.Read
*/
//	onExit: function() {
//
//	}
	
	// event handlers
	onselectionChange : function(){
		
		//var selectedItem = this.getView().byId("idCombo").getSelectedItem();
		
		var productID = this.getView().byId("idCombo").getSelectedItem().getText();
		
		// get sf
	//	var osf = this.getView().byId("SimpleFormDisplay354");
		
		this.getView().byId("SimpleFormDisplay354").bindElement("/ProductSet('" +productID+ "')");
		                
		                  //ProductSet('HT-1000');
		
	}

});