google.maps.__gjsload__('overlay', function(_) {
    var aw = function(a) {
            this.g = a
        },
        aoa = function() {},
        bw = function(a) {
            a.On = a.On || new aoa;
            return a.On
        },
        boa = function(a) {
            this.Ba = new _.kj(() => {
                const b = a.On;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Em && a.onAdd) a.onAdd();
                        b.Em = !0;
                        a.draw()
                    }
                } else {
                    if (b.Em)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Em = !1
                }
            }, 0)
        },
        coa = function(a, b) {
            const c = bw(a);
            let d = c.Rl;
            d || (d = c.Rl = new boa(a));
            _.bb(c.Na || [], _.rh);
            var e = c.ab = c.ab || new _.ska;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.lr = c.lr || new aw(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.lj(d.Ba);
            c.Na = [_.J(a, "panes_changed", e), _.J(f, "zoom_changed", e), _.J(f, "offset_changed", e), _.J(b, "projection_changed", e), _.J(f, "projectioncenterq_changed", e)];
            _.lj(d.Ba);
            b instanceof _.Gh ? (_.N(b, "Ox"), _.M(b, 148440)) : b instanceof _.Ai && (_.N(b, "Oxs"), _.M(b, 181451))
        },
        hoa = function(a) {
            if (a) {
                var b = a.getMap();
                if (doa(a) !== b && b && b instanceof _.Gh) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new eoa(b, a, c.overlayLayer) : c.h.then(({
                        ha: d
                    }) => {
                        const e = new foa(b, d);
                        d.Bb(e);
                        c.overlayLayer = e;
                        goa(a);
                        hoa(a)
                    })
                }
            }
        },
        goa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.Cd(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        doa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        ioa = function(a, b) {
            a.g.get("projection") !=
                b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        };
    _.y(aw, _.L);
    aw.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.tg(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var cw = {};
    _.y(boa, _.L);
    cw.md = function(a) {
        if (a) {
            var b = a.getMap();
            (bw(a).Tq || null) !== b && (b && coa(a, b), bw(a).Tq = b)
        }
    };
    cw.Cd = function(a) {
        const b = bw(a);
        var c = b.ab;
        c && c.unbindAll();
        (c = b.lr) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Na && _.bb(b.Na, _.rh);
        b.Na = null;
        b.Rl && (b.Rl.Ba.zc(), b.Rl = null);
        delete bw(a).Tq
    };
    var dw = {},
        eoa = class {
            constructor(a, b, c) {
                this.map = a;
                this.g = b;
                this.j = c;
                this.h = !1;
                _.N(this.map, "Ox");
                _.M(this.map, 148440);
                c.md(this)
            }
            draw() {
                this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
                this.g.draw && this.g.draw()
            }
        },
        foa = class {
            constructor(a, b) {
                this.o = a;
                this.j = b;
                this.g = null;
                this.h = []
            }
            dispose() {}
            Kb(a, b, c, d, e, f, g, h) {
                const k = this.g = this.g || new _.os(this.o, this.j, () => {});
                k.Kb(a, b, c, d, e, f, g, h);
                for (const l of this.h) ioa(l, k), l.draw()
            }
            md(a) {
                this.h.push(a);
                this.g && ioa(a, this.g);
                this.j.refresh()
            }
            Cd(a) {
                _.kb(this.h,
                    a)
            }
        };
    dw.md = hoa;
    dw.Cd = goa;
    _.jh("overlay", {
        mp: function(a) {
            if (a) {
                (0, cw.Cd)(a);
                (0, dw.Cd)(a);
                var b = a.getMap();
                b && (b instanceof _.Gh ? (0, dw.md)(a) : (0, cw.md)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.zo(a, {
                vd: ({
                    event: b
                }) => {
                    _.qn(b.Ea)
                },
                Ac: b => _.lo(b),
                Kg: b => _.mo(b),
                fd: b => _.mo(b),
                Mc: b => _.no(b)
            }).Vh(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.oh);
            a.addEventListener("contextmenu", _.oh);
            a.addEventListener("dblclick", _.oh);
            a.addEventListener("mousedown", _.oh);
            a.addEventListener("mousemove", _.oh);
            a.addEventListener("MSPointerDown",
                _.oh);
            a.addEventListener("pointerdown", _.oh);
            a.addEventListener("touchstart", _.oh);
            a.addEventListener("wheel", _.oh)
        }
    });
});