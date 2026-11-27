
(function () {
    // Display the penguin only once per browser session.
    if (sessionStorage.getItem("siebelPenguinShown")) {
        return;
    }

    function showPenguin() {
        var penguin = document.createElement("img");

        penguin.id = "siebel-penguin";
        penguin.src =
            "https://pvchandra.github.io/graphy/penguin/Pengiun.gif";

        penguin.alt = "Welcome!";
        document.body.appendChild(penguin);

        sessionStorage.setItem("siebelPenguinShown", "true");

        // Remove the penguin after 5 seconds.
        setTimeout(function () {
            penguin.remove();
        }, 5000);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", showPenguin);
    } else {
        showPenguin();
    }
})();
