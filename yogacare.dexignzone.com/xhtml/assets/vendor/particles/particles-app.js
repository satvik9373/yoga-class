function manageParticle(e) {
    particlesJS(e, {
        particles: {
            number: {
                value: 60,
                density: {
                    enable: !0,
                    value_area: 1500
                }
            },
            color: {
                value: "#45b29d"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#fff"
                },
                polygon: {
                    nb_sides: 4
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.7,
                random: !0,
                anim: {
                    enable: !1,
                    speed: .5,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 2,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    size_min: .1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !1,
                distance: 500,
                color: "#000",
                opacity: .4,
                width: 2
            },
            move: {
                enable: !0,
                speed: 1,
                direction: "top",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "bubble"
                },
                onclick: {
                    enable: !0,
                    mode: "repulse"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: .5
                    }
                },
                bubble: {
                    distance: 400,
                    size: 2,
                    duration: .3,
                    opacity: 1,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    })
}
$(document).ready(function() {
    "use strict";
    jQuery("#app-banner").length > 0 && manageParticle("app-banner"), jQuery("#app-search").length > 0 && manageParticle("app-search"), jQuery("#app-mobile").length > 0 && manageParticle("app-mobile"), jQuery("#app-today").length > 0 && manageParticle("app-today")
});