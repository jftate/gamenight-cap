// @ts-nocheck
sap.ui.define([
		"sap/ui/core/mvc/Controller",
        "sap/m/MessageBox"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, MessageBox) {
		"use strict";

		return Controller.extend("de.tit.userapp.controller.Home", {
			onInit: function () {
                this._initUserModel();
            },

            _initUserModel: function() {
                var oUserModel = new sap.ui.model.json.JSONModel({
                    Username: "",
                    Firstname: "",
                    Lastname: "",
                    Email: "",
                    isActiv: true
                });
                this.getView().setModel(oUserModel, "user");
            },
            
            onSave: function() {
                var oUser = this.getView().getModel("user").getData();
                var oModel = this.getView().getModel();
                var fnSuccess = function(data) {
                    MessageBox.success("The user" + data.Username + " was successfully added.");
                    this._initUserModel();
                };
                var fnError = function(error) {
                    MessageBox.error("An error occured while adding the new user");
                };

                oModel.create("/Users", oUser, {
                    success: fnSuccess,
                    error: fnError
                });
            },

            onCancel: function() {
                this._initUserModel();
            }
		});
	});
