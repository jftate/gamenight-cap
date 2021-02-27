// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History, JSONModel, MessageBox) {
        "use strict";

        return Controller.extend("de.tit.Gamenight.controller.Admin", {
            onInit: function () {

            },

            onAddGame: function (oEvent) {
                var oSource = oEvent.getSource();
                var oView = this.getView();
                if (!this.oAddGamePopover) {
                    var oGameModel = new JSONModel({});

                    this.oAddGamePopover = sap.ui.xmlfragment("de.tit.Gamenight.view.AddGame", this);
                    this.oAddGamePopover.setModel(oGameModel, "game");
                    this.getView().addDependent(this.oAddGamePopover);
                    this.oAddGamePopover.attachAfterClose(function () {
                        this.oAddGamePopover.destroy();
                        this.oAddGamePopover = null;
                    }, this);
                }
                this.oAddGamePopover.open();
            },

            onAddPlayer: function (oEvent) {
                var oSource = oEvent.getSource();
                var oView = this.getView();
                if (!this.oAddPlayerPopover) {
                    var oPlayerModel = new JSONModel({});

                    this.oAddPlayerPopover = sap.ui.xmlfragment("de.tit.Gamenight.view.AddPlayer", this);
                    this.oAddPlayerPopover.setModel(oPlayerModel, "player");
                    this.getView().addDependent(this.oAddPlayerPopover);
                    this.oAddPlayerPopover.attachAfterClose(function () {
                        this.oAddPlayerPopover.destroy();
                        this.oAddPlayerPopover = null;
                    }, this);
                }
                this.oAddPlayerPopover.open();
            },

            handleAddNewGame: function () {
                var oGame = this.oAddGamePopover.getModel("game").getData();
                var oModel = this.getOwnerComponent().getModel("hana");
                var oView = this.getView();

                oView.setBusy(true);
                oModel.create("/Games", oGame, {
                    success: function (odata) {
                        oView.setBusy(false);
                        MessageBox.success("Das Spiel " + odata.Name + " wurde erfolgreich hinzugefügt.");
                    },
                    error: function (error) {
                        oView.setBusy(false);
                        MessageBox.error(error.message);
                    }
                });
            },

            handleCloseAddGame: function (oEvent) {
                this.oAddGamePopover.close();
            },

            handleAddNewPlayer: function () {
                var oPlayer = this.oAddPlayerPopover.getModel("player").getData();
                var oModel = this.getOwnerComponent().getModel("hana");
                var oView = this.getView();

                oView.setBusy(true);
                oModel.create("/Players", oPlayer, {
                    success: function (odata) {
                        oView.setBusy(false);
                        MessageBox.success("Der Spieler " + odata.Name + " wurde erfolgreich hinzugefügt.");
                    },
                    error: function (error) {
                        oView.setBusy(false);
                        MessageBox.error(error.message);
                    }
                });
            },

            handleCloseAddPlayer: function (oEvent) {
                this.oAddPlayerPopover.close();
            },

            onNavBack: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    oRouter.navTo("RouteHome", true);
                }
            }
        });
    });
