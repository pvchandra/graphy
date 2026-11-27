
(function () {

    // Show the penguin only once per browser session
    if (sessionStorage.getItem("penguinShown")) {
        return;
    }

    sessionStorage.setItem("penguinShown", "true");

    function showPenguin() {

        // Create the main container
        var container = document.createElement("div");
        container.id = "penguin-container";

        // Create the penguin image
        var penguin = document.createElement("img");
        penguin.src =
            "https://pvchandra.github.io/graphy/penguin/penguin.png";

        penguin.alt = "Welcome Penguin";

        // Create the greeting message
        var message = document.createElement("div");
        message.className = "penguin-message";
        message.textContent = "Hi there! Welcome!";

        // Add elements to the container
        container.appendChild(penguin);
        container.appendChild(message);

        // Display the penguin on the page
        document.body.appendChild(container);

        // Remove the penguin after the animation
        setTimeout(function () {
            container.remove();
        }, 4600);
    }

    // Wait until the page is ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", showPenguin);
    } else {
        showPenguin();
    }

})();
