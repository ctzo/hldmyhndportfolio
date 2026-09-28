! function() {
    var e = location.hostname;
    e && "." === e.charAt(e.length - 1) && location.replace(location.protocol + "//" + e.replace(/\.+$/, "") + (location.port ? ":" + location.port : "") + location.pathname + location.search + location.hash)
}(),
function() {
    var e;
    try {
        var t = document.createElement("div");
        t.style.display = "grid", (e = "undefined" != typeof Promise && "undefined" != typeof fetch && "undefined" != typeof Symbol && "undefined" != typeof WeakMap && "undefined" != typeof requestAnimationFrame && "grid" === t.style.display) && (e = "function" == typeof "".replaceAll && "function" == typeof Promise.allSettled && "undefined" != typeof globalThis)
    } catch (n) {
        e = !1
    }
    if (!e) {
        if (document.body) i();
        else if (document.addEventListener) document.addEventListener("DOMContentLoaded", i);
        else if (document.attachEvent) document.attachEvent("onreadystatechange", function() {
            ("interactive" === document.readyState || "complete" === document.readyState) && i()
        });
        else {
            var o = window.onload;
            window.onload = function() {
                o && o(), i()
            }
        }
    }

    function i() {
        if (!document.getElementById("old-browser-overlay")) {
            var e = document.createElement("div");
            e.id = "old-browser-overlay", e.setAttribute("role", "alert"), e.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; z-index:2147483647; background:#0d1117; text-align:center; overflow:auto;", e.innerHTML = '<div style="font-family:Arial,sans-serif; color:#ffffff; padding:20px; line-height:1.5; max-width:600px; font-size:18px; margin:10% auto; display:inline-block; text-align:center;"><h1 style="margin-bottom:12px; font-size:28px;">Your Browser is Not Supported</h1><p style="margin-bottom:4px;">This website requires a modern browser to function correctly.</p><p>Please update to a recent version of Chrome, Firefox, Edge, or Safari.</p></div>', document.body.appendChild(e), document.documentElement && (document.documentElement.style.overflow = "hidden")
        }
    }
}();
