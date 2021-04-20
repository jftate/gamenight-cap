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

                $.ajax({
                    url: "/RestCountries/rest/v2/all",
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
