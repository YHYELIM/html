(this["webpackJsonpwww-marketing"] = this["webpackJsonpwww-marketing"] || []).push([
    [1, 2], {
        140: function(e, t, n) {
            "use strict";
            n.r(t);
            n(186);
            var a = n(0),
                o = n.n(a),
                r = n(71),
                i = n.n(r),
                c = n(70),
                s = n(717),
                d = n(720),
                p = n(719),
                m = n(721),
                l = n(722),
                u = n(9),
                g = n(47),
                h = n(63),
                f = n(113),
                v = n.n(f),
                w = n(46),
                b = n(6);
            const {
                sendMetric: T
            } = Object(u.createSemanticMetrics)({
                key: "www-marketing",
                reporter: Object(u.createUniversalReporter)(),
                dev: !1
            });
            n(214), n(215);
            (e => {
                const {
                    environment: t,
                    release: n,
                    useErrorReporting: a,
                    useInstrumentation: r,
                    ...f
                } = e;
                let O;
                s.a({
                    dsn: "https://09d927c146bb46728e7b701c2122e066@o22381.ingest.sentry.io/6303532",
                    sampleRate: .2,
                    environment: t,
                    release: n,
                    beforeSend: e => a ? e : null,
                    ignoreErrors: [/((Time to paint|navigationTiming) api is not supported)|(twttr)|(fbq)|(IntersectionObserver)|(Deprecation messages are stored in the devtools-frontend)/gim],
                    integrations: [new p.a, new m.a, new l.a({
                        types: ["crash", "deprecation", "intervention"]
                    })],
                    initialScope: {
                        user: {
                            id: (() => {
                                var e;
                                const t = "; ".concat(document.cookie).split("; sp_t=");
                                return 2 === t.length ? null === (e = t.pop()) || void 0 === e ? void 0 : e.split(";").shift() : ""
                            })()
                        }
                    },
                    allowUrls: [/(spotify\.(com|net))|(scdn\.co)|(spotifycdn\.com)/gim]
                }), r && (O = function() {
                    var e;
                    const t = Object(w.d)({
                            dev: !1,
                            component_name: "www-marketing"
                        }),
                        n = t.startSpan("client-bridge");
                    n.setTag(b.Tags.SPAN_KIND, "client"), (null === (e = window.SPOTI_DATA) || void 0 === e ? void 0 : e.traceContext) && t.inject(n, b.FORMAT_HTTP_HEADERS, window.SPOTI_DATA.traceContext);
                    const a = Object(w.c)({
                        fetch: window.fetch
                    }, {
                        tracer: t,
                        shouldTrace: e => ["spotify.com"].some(t => {
                            var n;
                            return null === (n = w.a.extractHostname(e)) || void 0 === n ? void 0 : n.endsWith(t)
                        })
                    });
                    window.fetch = (e, t) => {
                        var o;
                        return a(e, { ...t,
                            parentSpan: null !== (o = null === t || void 0 === t ? void 0 : t.parentSpan) && void 0 !== o ? o : n
                        })
                    }, n.finish();
                    const o = window.location.pathname.match(/^\/[a-z]{2}(-[a-z]{2})?\//i),
                        r = {
                            origin: window.location.origin,
                            path: window.location.pathname.replace(/^\/[a-z]{2}(-[a-z]{2})?\//i, "/{spotifyMarket}/"),
                            market: o && "string" === typeof o[0] ? o[0].replace(/\//g, "") : "",
                            marketPath: window.location.pathname,
                            device: "onorientationchange" in window ? "mobile" : "desktop"
                        };

                    function i(e) {
                        T(g.a.getWebVitalsMetric(e, r))
                    }
                    return T({
                        metric_type: u.MetricTypes.COUNTER,
                        what: "page-load",
                        value: 1,
                        tags: r
                    }), T({
                        metric_type: u.MetricTypes.COUNTER,
                        what: "connection",
                        value: 1,
                        tags: Object.assign({}, r, {
                            effective_type: window.navigator.connection ? window.navigator.connection.effectiveType : "unknown"
                        })
                    }), g.a.getPageLoadTime().then(e => {
                        T({
                            metric_type: u.MetricTypes.TIMER,
                            what: "time-to-page-load-nanoseconds",
                            value: u.Time.fromMillis(e).asNanos(),
                            tags: r
                        })
                    }), g.a.getTimeToFirstPaint().then(e => {
                        T({
                            metric_type: u.MetricTypes.TIMER,
                            what: "time-to-first-paint-nanoseconds",
                            value: u.Time.fromMillis(e).asNanos(),
                            tags: r
                        })
                    }), g.a.getTimeToFirstContentfulPaint().then(e => {
                        T({
                            metric_type: u.MetricTypes.TIMER,
                            what: "time-to-first-contentful-paint-nanoseconds",
                            value: u.Time.fromMillis(e).asNanos(),
                            tags: r
                        })
                    }), v.a.getFirstConsistentlyInteractive().then(e => {
                        e && T({
                            metric_type: u.MetricTypes.TIMER,
                            what: "time-to-interactive-nanoseconds",
                            value: u.Time.fromMillis(e).asNanos(),
                            tags: r
                        })
                    }), Object(h.a)(i), Object(h.b)(i), Object(h.c)(i), n
                }());
                const y = Object(b.globalTracer)(),
                    k = y.startSpan("hydration", {
                        childOf: O
                    });
                k.setTag(b.Tags.SPAN_KIND, "client");
                const E = document.getElementById("spoti-root"),
                    j = o.a.createElement(d.a, {
                        onError: (e, t, n) => {
                            const a = y.startSpan("app-render-error", {
                                childOf: k
                            });
                            a.addTags({
                                [b.Tags.SPAN_KIND]: "client",
                                [b.Tags.ERROR]: !0
                            }), a.log({
                                event: "error",
                                "error.object": e,
                                "error.kind": e.name,
                                message: e.message,
                                stack: e.stack,
                                "component.stack": t,
                                eventId: n
                            }), a.finish()
                        }
                    }, o.a.createElement(c.a, Object.assign({
                        baseElement: E,
                        parentSpan: k
                    }, f)));
                i.a.hydrate(j, E), k.finish()
            })(window.SPOTI_DATA)
        },
        185: function(e, t, n) {
            e.exports = n(140)
        },
        70: function(e, t, n) {
            "use strict";
            var a = n(0),
                o = n.n(a),
                r = n(115);
            var i = n(62),
                c = n(2),
                s = (n(86), n(79)),
                d = n(172),
                p = n(6),
                m = n(1);

            function l() {
                const e = Object(c.a)(['\nsection[data-component-name="upsell"] header > p:first-child {\n  background-image: url(\'https://campaigns.scdn.co/images/hulu-green.png\');\n  background-repeat: no-repeat;\n  background-size: 60px;\n  height: 33px;\n}\n\nsection[data-component-name="upsell"] header h3 {\n  font-size: 18px;\n  line-height: initial;\n}\n\nsection[data-component-name="productdescription"] > article h1 br {\n  display: inline;\n}\n\nsection[data-component-name="productdescription"] > article h2 br {\n    display: inline\n   }\n\nsection[data-component-name="benefits"] > article {\n  max-width: 850px;\n}\n\nsection[data-component-name="benefits"] ul div[data-in-view] {\n  height: 50px\n} \n\nsection[data-component-name="benefits"] li {\n  align-items: center;\n} \nsection[data-component-name="benefits"] footer {\n  margin: 20px auto 35px;\n}\n\n@media (min-width: 768px) {\n   section[data-component-name="productdescription"] > article h1 br {\n    display: none\n   }\n\n   section[data-component-name="productdescription"] > article h2 br {\n    display: none\n   }\n}\n\n}\n']);
                return l = function() {
                    return e
                }, e
            }
            const u = Object(m.c)(l()),
                g = Object.entries(s).map(([e, t]) => [e.toLowerCase(), t]),
                h = new Map([...g, ["debug", ({
                        text: e
                    }) => o.a.createElement("blockquote", null, e)],
                    ["componentgroup", "div"],
                    ["student-us-styles", u]
                ]);

            function f(e, t, n, a) {
                const r = Object(p.globalTracer)().startSpan("create-".concat(e), {
                        childOf: a
                    }),
                    i = e.toLowerCase();
                const c = h.get(i);
                if (!c) throw r.addTags({
                    [p.Tags.ERROR]: !0
                }), r.log({
                    event: "error",
                    "error.kind": "ComponentNotFoundError"
                }), new Error('Component "'.concat(i, '" not found.'));
                return "componentgroup" === i ? (r.finish(), o.a.createElement(c, { ...t,
                    components: void 0
                }, (t.components || []).map((e, t) => f(e.name, {
                    key: t,
                    ...e.attributes
                }, e.eventParams)))) : (r.finish(), o.a.createElement(c, { ...t,
                    eventParams: n
                }))
            }
            var v = ({
                    market: e,
                    direction: t,
                    user: n,
                    pageData: a,
                    parentSpan: r,
                    device: c
                }) => {
                    const s = Object(p.globalTracer)().startSpan("page", {
                            childOf: r
                        }),
                        m = d.a,
                        {
                            themeName: l
                        } = a,
                        {
                            header: u,
                            footer: g,
                            components: h
                        } = (e => {
                            const t = {
                                header: void 0,
                                footer: void 0,
                                components: []
                            };
                            return t.components = e.filter((e, n, a) => "pageheader" === e.name ? (t.header = a[n], !1) : "pagefooter" !== e.name || (t.footer = a[n], !1)), t
                        })(a.components),
                        v = Object(i.b)(a.eventParams),
                        w = o.a.createElement(m, {
                            market: e,
                            direction: t,
                            user: n,
                            themeName: l,
                            device: c
                        }, u && f(u.name, { ...u.attributes
                        }, u.eventParams, s), o.a.createElement("main", v, h.map(({
                            name: e,
                            attributes: t,
                            eventParams: n
                        }, a) => f(e, {
                            key: a,
                            ...t
                        }, n, s))), g && f(g.name, { ...g.attributes
                        }, g.eventParams, s));
                    return s.finish(), w
                },
                w = n(37),
                b = n(72),
                T = n(111),
                O = n(112);
            var y = n(117),
                k = n(118),
                E = n(114),
                j = n(119),
                M = n(116);
            const P = Object(w.e)(k.a).addMiddleware(y.a).addMiddleware(j.a).addMiddleware(E.a).addMiddleware(M.a),
                S = async e => {
                    var t;
                    const n = null !== (t = e.transport) && void 0 !== t ? t : await (async () => {
                        const e = Object(b.c)({
                            providers: {
                                endpoints: () => Promise.resolve({
                                    webgate: "/api/",
                                    webapi: "https://api.spotify.com"
                                }),
                                token: Object(O.a)()
                            },
                            requestMode: "fetch"
                        });
                        return e.addPlugin(T.a, {
                            optionsOverrides: {
                                authorize: !1
                            }
                        }), e.isConnected() || await e.connect(), await e.authenticate(), e
                    })();
                    return new P({ ...e,
                        clientId: "www-marketing",
                        transport: n
                    })
                };
            var I = n(30),
                N = n(50);
            t.a = Object(a.memo)(e => {
                const {
                    baseElement: t,
                    parentSpan: n,
                    user: c,
                    language: s,
                    pageName: d,
                    resourceName: m,
                    market: l,
                    country: u,
                    forceOneTrust: g,
                    pageData: h,
                    direction: f,
                    remoteConfiguration: w,
                    device: b
                } = e, T = Object(p.globalTracer)().startSpan("app", {
                    childOf: n
                }), O = {
                    market: l,
                    direction: f,
                    user: c,
                    pageData: h,
                    language: s,
                    parentSpan: T,
                    device: b
                };
                return Object(a.useEffect)(() => {
                    w && async function(e) {
                        try {
                            const t = I.a.fromJSON(e);
                            (await S({
                                initialConfiguration: t,
                                timeout: 5e3
                            })).resolve({
                                username: null
                            }).catch(e => {
                                N.b((function(t) {
                                    t.setExtra("rejection", e), N.a(new Error("remote config resolution client: resolve error"))
                                }))
                            })
                        } catch (t) {
                            N.b((function(e) {
                                e.setExtra("rejection", !0), N.a(new Error("remote config resolution client: error"))
                            }))
                        }
                    }(w)
                }, [w]), Object(a.useEffect)(() => {
                    s && function({
                        forceOneTrust: e,
                        market: t,
                        language: n,
                        loggedIn: a
                    }) {
                        Object(r.a)({
                            dataLayerPushInitial: !0,
                            googleTagManagerId: "GTM-7BJJ",
                            market: t,
                            language: n,
                            loggedIn: a,
                            oneTrust: e
                        })
                    }({
                        forceOneTrust: g,
                        market: l,
                        language: s,
                        loggedIn: c.authenticated
                    })
                }, [g, l, s, c.authenticated]), Object(a.useEffect)(() => {
                    var e, n;
                    t && Object(i.a)({
                        analyticsRoot: t,
                        isAuthenticated: null !== (e = c.authenticated) && void 0 !== e && e,
                        pageName: d,
                        resourceName: m,
                        language: s,
                        countryCode: null !== u && void 0 !== u ? u : "",
                        eventParams: null !== (n = h.eventParams) && void 0 !== n ? n : {}
                    })
                }, [t, c.authenticated, d, m, s, u, h.eventParams]), T.finish(), o.a.createElement(v, O)
            })
        }
    },
    [
        [185, 4, 0]
    ]
]);
//# sourceMappingURL=index.ebc877de.d78b84ba.chunk.js.map