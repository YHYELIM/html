var TTDCM = function() {
    function n(t) {
        var e = "iframe_" + this.mapIndex++,
            i = document.createElement("iframe");
        i.setAttribute("id", e), i.setAttribute("allowTransparency", !0), i.setAttribute("height", 0), i.setAttribute("width", 0), i.setAttribute("src", t), document.body.appendChild(i)
    }
    this.init = function(t) {
        if (this.sslOnly = "https:" == location.protocol, void 0 !== t && null != t && 0 != t.length)
            for (var e = t.length, i = this.mapIndex = 0; i < e; i++) n(t[i])
    }
};