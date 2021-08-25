// @ts-nocheck
jQuery.sap.registerModulePath("de.nttdata.utillib", "../jtelibraries.denttdatautillib-1.0.0/");
sap.ui.define([
    "sap/ui/rta/api/startKeyUserAdaptation",
    "sap/ui/fl/write/api/FeaturesAPI",
    "sap/ui/core/mvc/Controller",
    "de/nttdata/utillib/uiservice/js/utils"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (startKeyUserAdaptation, FeaturesAPI, Controller, utils) {
        "use strict";

        return Controller.extend("de.tit.Northwind.controller.View1", {
            onInit: function () {

                var oAdaptationButton = this.getView().byId("adaptUi"); // must match the ID of the button
                FeaturesAPI.isKeyUser().then(function (bIsKeyUser) {
                    oAdaptationButton.setVisible(bIsKeyUser);
                });

                var prefix = this.getOwnerComponent()._oManifest._oBaseUri._parts.path;

                $.ajax({
                    url: prefix + "RestCountries/rest/v2/all",
                    type: "GET",
                    success: function (data, textStatus, jqXHR) {
                        //console.log(utils.copyArray(data));
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log('Error occurred!');
                    }

                });

            },

            switchToAdaptationMode: function () {
                startKeyUserAdaptation({
                    rootControl: this.getOwnerComponent()
                });
            },
        });
    });
