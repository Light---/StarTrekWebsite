 $(function () {
            if (!navigator.geolocation) {
                alert("This browser doesn't support geolocation");
            }
            else {
                // One shot
                // navigator.geolocation.getCurrentPosition(onPositionReady, onError);

                // Repeated request
                navigator.geolocation.watchPosition(onPositionReady,
                    onError, {
                        enableHighAccuracy: true, maximumAge: 10000
                    });
            }
        });

        function onPositionReady(position) {
            document.getElementById("Latitude").innerHTML = position.coords.latitude;
            document.getElementById("Longitude").innerHTML = position.coords.longitude;
            document.getElementById("Accuracy").innerHTML = position.coords.accuracy;

            //get a map from google
            var latlon = position.coords.latitude + "," + position.coords.longitude;

            var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
            + latlon + "&zoom=14&size=200x150&sensor=false";

            document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";
        }

        function onError(PositionError) {
            console.log(PositionError.code);
            switch (PositionError.code) {
                case PositionError.PERMISSION_DENIED:
                    alert("The user said no!");
                    break;

                case PositionError.PERMISSION_UNAVAILABLE:
                    alert("Location data unavailable");
                    break;

                case PositionError.TIMEOUT:
                    alert("Location request timed out");
                    break;

                default:
                    alert("Unknown error");
                    break;
            }
        }