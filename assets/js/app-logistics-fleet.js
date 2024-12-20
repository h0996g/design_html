! function() {
    mapboxgl.accessToken = "pk.eyJ1IjoibG9yZC1zaGl2YW0iLCJhIjoiY2xpeTlpNHFwMDVzbDNmczl2MXdob29udyJ9.JOLDU6VQG_ra1CoVG4jbUA";
    let s = {
            type: "FeatureCollection",
            features: [{
                type: "Feature",
                properties: {
                    iconSize: [20, 42],
                    message: "1"
                },
                geometry: {
                    type: "Point",
                    coordinates: [-73.999024, 40.75249842]
                }
            }, {
                type: "Feature",
                properties: {
                    iconSize: [20, 42],
                    message: "2"
                },
                geometry: {
                    type: "Point",
                    coordinates: [-74.03, 40.75699842]
                }
            }, {
                type: "Feature",
                properties: {
                    iconSize: [20, 42],
                    message: "3"
                },
                geometry: {
                    type: "Point",
                    coordinates: [-73.967524, 40.7599842]
                }
            }, {
                type: "Feature",
                properties: {
                    iconSize: [20, 42],
                    message: "4"
                },
                geometry: {
                    type: "Point",
                    coordinates: [-74.0325, 40.742992]
                }
            }]
        },
        a = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/light-v9",
            center: [-73.999024, 40.75249842],
            zoom: 12.25
        });
    for (let o of s.features) {
        var e = document.createElement("div"),
            i = o.properties.iconSize[0],
            l = o.properties.iconSize[1];
        e.className = "marker", e.insertAdjacentHTML("afterbegin", '<img src="' + assetsPath + 'img/illustrations/fleet-car.png" alt="Fleet Car" width="20" class="rounded-3" id="carFleet-' + o.properties.message + '">'), e.style.width = i + "px", e.style.height = l + "px", e.style.cursor = "pointer", new mapboxgl.Marker(e).setLngLat(o.geometry.coordinates).addTo(a);
        let t = document.getElementById("fl-" + o.properties.message),
            r = document.getElementById("carFleet-" + o.properties.message);
        t.addEventListener("click", function() {
            var e = document.querySelector(".marker-focus");
            Helpers._hasClass("active", t) ? (a.flyTo({
                center: s.features[o.properties.message - 1].geometry.coordinates,
                zoom: 16
            }), e && Helpers._removeClass("marker-focus", e), Helpers._addClass("marker-focus", r)) : Helpers._removeClass("marker-focus", r)
        })
    }
    var t = document.getElementById("carFleet-1"),
        t = (Helpers._addClass("marker-focus", t), document.querySelector(".mapboxgl-control-container").classList.add("d-none"), $(".logistics-fleet-sidebar-body"));
    t.length && new PerfectScrollbar(t[0], {
        wheelPropagation: !1,
        suppressScrollX: !0
    })
}();