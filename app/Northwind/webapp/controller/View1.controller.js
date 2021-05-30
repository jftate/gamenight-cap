// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("de.tit.Northwind.controller.View1", {
            onInit: function () {

                //console.log(this.getOwnerComponent().getModel("countries").getData());

                /*var oCountryModel = new sap.ui.model.json.JSONModel();
                oCountryModel.loadData("/RestCountries/rest/v2/all");

                oCountryModel.attachRequestCompleted(function () {
                    debugger;
                    console.log(oCountryModel.getData());
                });*/

                var prefix = this.getOwnerComponent()._oManifest._oBaseUri._parts.path;

                $.ajax({
                    url: prefix + "RestCountries/rest/v2/all",
                    type: "GET",
                    success: function (data, textStatus, jqXHR) {
                        console.log(data);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log('Error occurred!');
                    }

                });

            }
        });
    });
