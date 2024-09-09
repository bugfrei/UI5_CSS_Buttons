sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {

        },
        setColors: function( c1, c2, c3 ) {
            const btns = [
                { id: "btnId1", color: c1 },
                { id: "btnId2", color: c2 },
                { id: "btnId3", color: c3 }
            ];

            const allColors = [ "Red", "Green", "Blue" ];
            btns.forEach( (btn) => {
                const oButton = this.byId(btn.id);
                allColors.forEach( (color) => {
                    oButton.removeStyleClass(`btn${color}`);
                });
                oButton.addStyleClass(`btn${btn.color}`);
            });
        },
        onPressHandler1: function () {
            this.setColors( "Green", "Blue", "Red" );
        },
        onPressHandler2: function () {
            this.setColors( "Red", "Green", "Blue" );
        },
        onPressHandler3: function () {
            this.setColors( "Blue", "Red", "Green" );
        }
    });
});
