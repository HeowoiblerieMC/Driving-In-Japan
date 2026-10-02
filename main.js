const status =
document.getElementById(
    "status"
);

fetch("./map.osm.xml")
.then(response => response.text())
.then(text => {

    const parser =
        new DOMParser();

    const xml =
        parser.parseFromString(
            text,
            "text/xml"
        );

    const nodes =
        xml.querySelectorAll(
            "node"
        );

    status.innerHTML =
        `OSM Loaded<br>
         Nodes: ${nodes.length}`;

});
