google.maps.__gjsload__('search_impl', function(_) {
    var vhb = function(a) {
            a = a.toArray();
            U$ || (U$ = {
                K: "sssM",
                N: ["ss"]
            });
            return _.Wf(a, U$, 1)
        },
        whb = function(a, b) {
            _.z(a.m, 3, b)
        },
        Ahb = function(a, b, c) {
            const d = _.yC(new xhb);
            c.Bh = (0, _.la)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.ZHa(c, _.qJ(b));
            const e = [];
            e.push(_.J(c, "click", (0, _.la)(yhb, null, a)));
            _.bb(["mouseover", "mouseout", "mousemove"], function(f) {
                e.push(_.J(c, f, (0, _.la)(zhb, null, a, f)))
            });
            e.push(_.J(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        yhb = function(a, b, c, d, e) {
            let f =
                null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.Q(e.m, 2) ? new _.Vg(_.Yn(_.E(e.m, 2, _.co).m, 1), _.Yn(_.E(e.m, 2, _.co).m, 2)) : null;
                f.fields = {};
                const g = _.B(e.m, 3);
                for (let h = 0; h < g; ++h) {
                    const k = _.im(e.m, 3, _.yJ, h);
                    f.fields[k.getKey()] = k.Ga()
                }
            }
            _.K(a, "click", b, c, d, f)
        },
        zhb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.K(a, b, c, d, e, h, g)
        },
        Bhb = function() {},
        Chb = class extends _.P {
            constructor() {
                super()
            }
            Lb() {
                return _.H(this.m, 2)
            }
        },
        U$;
    var Dhb = class extends _.P {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.C(this.m, 1, -1)
        }
    };
    var xhb = class {
        constructor() {
            var a = _.yk,
                b = _.xk;
            this.h = _.gg;
            this.g = _.Yl(_.Vp, a, _.gs + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(g) {
                g = new Dhb(g);
                b(g)
            }
            var d = new Chb;
            _.z(d.m, 1, a.layerId.split("|")[0]);
            _.z(d.m, 2, a.featureId);
            whb(d, this.h.g().g());
            for (var e in a.parameters) {
                var f = _.bg(d.m, 4, _.yJ);
                _.z(f.m, 1, e);
                _.z(f.m, 2, a.parameters[e])
            }
            a = vhb(d);
            this.g(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    Bhb.prototype.jt = function(a) {
        if (_.xj[15]) {
            var b = a.o;
            const t = a.o = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.j, b.set(b.get().hf(a.g))) : a.g && _.vIa(a.g, b) && (_.bb(a.h || [], _.rh), a.h = null));
            if (t) {
                var c = a.get("layerId");
                b = a.get("spotlightDescription");
                var d = a.get("paintExperimentIds"),
                    e = a.get("styler"),
                    f = a.get("mapsApiLayer"),
                    g = a.get("darkLaunch"),
                    h = a.get("mapFeatures"),
                    k = a.get("clickableCities"),
                    l = a.get("travelMapRequest"),
                    m = a.get("searchPipeMetadata"),
                    n = a.get("overlayLayer"),
                    p = a.get("caseExperimentIds"),
                    q = a.get("airQualityPipeMetadata"),
                    r = a.get("directionsPipeParameters");
                const u = new _.Hp;
                c = c.split("|");
                u.layerId = c[0];
                for (let v = 1; v < c.length; ++v) {
                    const [A, ...D] = c[v].split(":");
                    u.parameters[A] = D.join(":")
                }
                b && (u.spotlightDescription = new _.Qp(b));
                d && (u.paintExperimentIds = d.slice(0));
                e && (u.styler = new _.Yo(e));
                l && (u.travelMapRequest = new _.Wja(l));
                f && (u.mapsApiLayer = new _.Ip(f));
                h && (u.mapFeatures = h);
                k && (u.clickableCities = k);
                m && (u.searchPipeMetadata = new _.xr(m));
                n && (u.overlayLayer = new _.Rp(n));
                p && (u.caseExperimentIds = p.slice(0));
                q && (u.airQualityPipeMetadata =
                    new _.Mja(q));
                r && (u.directionsPipeParameters = new _.Jja(r));
                u.darkLaunch = !!g;
                b = u;
                a.g = b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = t.__gm.j, a.set(a.get().Hd(b))) : Ahb(a, t, b);
                _.N(t, "Lg");
                _.M(t, 148282)
            }
        }
    };
    _.jh("search_impl", new Bhb);
});