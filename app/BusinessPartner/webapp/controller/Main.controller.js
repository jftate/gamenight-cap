// @ts-nocheck
sap.ui.define([
        "sap/ui/rta/api/startKeyUserAdaptation",
        "sap/ui/fl/write/api/FeaturesAPI",
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (startKeyUserAdaptation, FeaturesAPI, Controller) {
		"use strict";

		return Controller.extend("de.tit.BusinessPartner.controller.Main", {
			onInit: function () {
                var oAdaptationButton = this.getView().byId("adaptUi"); // must match the ID of the button
                FeaturesAPI.isKeyUser().then(function (bIsKeyUser) {
                    oAdaptationButton.setVisible(bIsKeyUser);
                });
			},

            switchToAdaptationMode: function () {
                startKeyUserAdaptation({
                    rootControl: this.getOwnerComponent()
                });
            }
		});
	});
