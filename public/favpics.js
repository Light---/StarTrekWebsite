function allowDrop(ev) {
            ev.preventDefault();
        }

        function handleDrag(ev) {
            ev.dataTransfer.setData("Text", ev.target.id);
        }

        function handleDrop(ev) {
            // Prevent default browser behaviour
            ev.preventDefault();
            var data = ev.dataTransfer.getData("Text");
            ev.target.appendChild(document.getElementById(data));
        }

