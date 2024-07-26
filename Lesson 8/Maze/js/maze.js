/* jshint esversion: 6 */
$(document).ready(function () {
    "use strict";

    /**
     * Hi Dr
     * I'm used to JQuery and I have a good experience with it, so it was easy for me to implement the game using it.
     *
     */

    let $boundary = $(".boundary");
    let $maze = $("#maze");
    let $status = $("#status");
    let $start = $("#start");
    let $end = $("#end");

    $boundary.mouseenter(function () {
        lostMessage();
    });

    $maze.mouseleave(function () {
        lostMessage();
    });

    let lostMessage = function () {

        if ($boundary.hasClass("started")) {
            $boundary.removeClass("started");
            $boundary.addClass("lose");
            alert("Sorry, you lost. :[");
            updateStatus("Sorry, you lost. :[");
        }

    }

    let updateStatus = function (msg) {
        $status.text(msg);
    }


    $end.mouseenter(function () {
        if (!$boundary.hasClass("lose")) {
            if ($boundary.hasClass("started")) {
                updateStatus("You win! :]");
                alert("You win! :]");
                $boundary.removeClass("started");
                updateStatus("Click the \"S\" to begin.");
            }
        }
    });


    $start.click(function () {
        $boundary.removeClass("lose");
        if (!$boundary.hasClass("started")) {
            $boundary.addClass("started");
        }
        updateStatus("You are playing now.");

    });

});