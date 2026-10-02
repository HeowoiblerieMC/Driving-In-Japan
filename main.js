fetch("./map.osm.xml")
.then(response => response.text())
.then(text => {

    console.log("OSM Loaded!");

    const parser = new DOMParser();

    const xml = parser.parseFromString(
        text,
        "text/xml"
    );

    const nodes =
        xml.querySelectorAll("node");

    console.log(
        "Nodes:",
        nodes.length
    );

});
