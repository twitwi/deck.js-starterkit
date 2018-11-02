/*
  This is a packed deck.js with some extensions and styles.
  It has been generated from version fbeabf1cdd89873017d483345c553f5bd8fdbe21 .
  It includes:
     ..../extensions/includedeck/load.js
     ..../jquery.min.js
     ..../modernizr.custom.js
     ..../core/deck.core.js
     ..../extensions/help-area/deck.help-area.js
     ..../extensions/smartdown/showdown.js
     ..../extensions/smartdown/deck.smartdown.js
     ..../extensions/fit/deck.fit.js
     ..../extensions/katex/katex.min.js
     ..../extensions/katex/deck.katex.js
     ..../extensions/clone/deck.clone.js
     ..../extensions/goto/deck.goto.js
     ..../extensions/progress/deck.progress.js
     ..../extensions/navigation/deck.navigation.js
     ..../extensions/menu/deck.menu.js
     ..../extensions/step/deck.step.js
     ..../extensions/events/deck.events.js
     ..../extensions/anim/deck.anim.js
     ..../libs/jquerysvg/jquery.svg.min.js
     ..../libs/jquerysvg/jquery.svganim.min.js
     ..../extensions/svg/deck.svg.js
     ..../extensions/metadata/deck.metadata.js
     ..../extensions/attribution/deck.attribution.js
     ..../extensions/container-styling/deck.container-styling.js
     ..../extensions/timekeeper/deck.timekeeper.js
     ..../extensions/highlight/highlight.min.js
     ..../extensions/highlight/deck.highlight.js
     ..../extensions/savedom/deck.savedom.js
     ..../extensions/annotate/deck.annotate.js
     ..../extensions/incubator/toggle-comments.js
     ..../extensions/incubator/author-tools.js
     ..../extensions/style-chunks/core.css
     ..../extensions/help-area/deck.help-area.css
     ..../extensions/fit/deck.fit-fs.css
     ..../extensions/katex/katex.min.css
     ..../extensions/clone/deck.clone.css
     ..../extensions/goto/deck.goto.css
     ..../extensions/progress/deck.progress.css
     ..../extensions/navigation/deck.navigation.css
     ..../extensions/menu/deck.menu.css
     ..../extensions/svg/deck.svg.css
     ..../extensions/attribution/deck.attribution.css
     ..../extensions/timekeeper/deck.timekeeper.css
     ..../extensions/style-chunks/simple.css
     ..../extensions/style-chunks/comments.css
     ..../extensions/highlight/github.min.css
     ..../extensions/savedom/deck.savedom.css
     ..../extensions/annotate/deck.annotate.css
     ..../extensions/incubator/simple-layouts.css
*/


/*!
 * Includedeck.
 *
 * Copyright (c) 2013-2018 Rémi Emonet.
 * Licensed under the MIT license.
 * https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
 *
 * The goal of this extension is to simplify include of deck.js,
 * its profiles/themes and the extensions.
 *
 * The first goal is not performance of loading (still it should
 * allow the display of a message while loading) but on ease of
 * use and extensibility (i.e., includedeck does not need to know
 * about all existing extensions, even if by default it does know
 * some of them).
 *
 */



var head_conf = {
    
};

if (typeof ACTUALLY_EXPORT_A_LIST_OF_FILES == 'undefined')
// this is head.load.min.js (v1.0.3) from http://headjs.com/site/download.html
/*! head.load - v1.0.3 */
(function(n,t){"use strict";function w(){}function u(n,t){if(n){typeof n=="object"&&(n=[].slice.call(n));for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}}function it(n,i){var r=Object.prototype.toString.call(i).slice(8,-1);return i!==t&&i!==null&&r===n}function s(n){return it("Function",n)}function a(n){return it("Array",n)}function et(n){var i=n.split("/"),t=i[i.length-1],r=t.indexOf("?");return r!==-1?t.substring(0,r):t}function f(n){(n=n||w,n._done)||(n(),n._done=1)}function ot(n,t,r,u){var f=typeof n=="object"?n:{test:n,success:!t?!1:a(t)?t:[t],failure:!r?!1:a(r)?r:[r],callback:u||w},e=!!f.test;return e&&!!f.success?(f.success.push(f.callback),i.load.apply(null,f.success)):e||!f.failure?u():(f.failure.push(f.callback),i.load.apply(null,f.failure)),i}function v(n){var t={},i,r;if(typeof n=="object")for(i in n)!n[i]||(t={name:i,url:n[i]});else t={name:et(n),url:n};return(r=c[t.name],r&&r.url===t.url)?r:(c[t.name]=t,t)}function y(n){n=n||c;for(var t in n)if(n.hasOwnProperty(t)&&n[t].state!==l)return!1;return!0}function st(n){n.state=ft;u(n.onpreload,function(n){n.call()})}function ht(n){n.state===t&&(n.state=nt,n.onpreload=[],rt({url:n.url,type:"cache"},function(){st(n)}))}function ct(){var n=arguments,t=n[n.length-1],r=[].slice.call(n,1),f=r[0];return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(f?(u(r,function(n){s(n)||!n||ht(v(n))}),b(v(n[0]),s(f)?f:function(){i.load.apply(null,r)})):b(v(n[0])),i)}function lt(){var n=arguments,t=n[n.length-1],r={};return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(u(n,function(n){n!==t&&(n=v(n),r[n.name]=n)}),u(n,function(n){n!==t&&(n=v(n),b(n,function(){y(r)&&f(t)}))}),i)}function b(n,t){if(t=t||w,n.state===l){t();return}if(n.state===tt){i.ready(n.name,t);return}if(n.state===nt){n.onpreload.push(function(){b(n,t)});return}n.state=tt;rt(n,function(){n.state=l;t();u(h[n.name],function(n){f(n)});o&&y()&&u(h.ALL,function(n){f(n)})})}function at(n){n=n||"";var t=n.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function rt(t,i){function e(t){t=t||n.event;u.onload=u.onreadystatechange=u.onerror=null;i()}function o(f){f=f||n.event;(f.type==="load"||/loaded|complete/.test(u.readyState)&&(!r.documentMode||r.documentMode<9))&&(n.clearTimeout(t.errorTimeout),n.clearTimeout(t.cssTimeout),u.onload=u.onreadystatechange=u.onerror=null,i())}function s(){if(t.state!==l&&t.cssRetries<=20){for(var i=0,f=r.styleSheets.length;i<f;i++)if(r.styleSheets[i].href===u.href){o({type:"load"});return}t.cssRetries++;t.cssTimeout=n.setTimeout(s,250)}}var u,h,f;i=i||w;h=at(t.url);h==="css"?(u=r.createElement("link"),u.type="text/"+(t.type||"css"),u.rel="stylesheet",u.href=t.url,t.cssRetries=0,t.cssTimeout=n.setTimeout(s,500)):(u=r.createElement("script"),u.type="text/"+(t.type||"javascript"),u.src=t.url);u.onload=u.onreadystatechange=o;u.onerror=e;u.async=!1;u.defer=!1;t.errorTimeout=n.setTimeout(function(){e({type:"timeout"})},7e3);f=r.head||r.getElementsByTagName("head")[0];f.insertBefore(u,f.lastChild)}function vt(){for(var t,u=r.getElementsByTagName("script"),n=0,f=u.length;n<f;n++)if(t=u[n].getAttribute("data-headjs-load"),!!t){i.load(t);return}}function yt(n,t){var v,p,e;return n===r?(o?f(t):d.push(t),i):(s(n)&&(t=n,n="ALL"),a(n))?(v={},u(n,function(n){v[n]=c[n];i.ready(n,function(){y(v)&&f(t)})}),i):typeof n!="string"||!s(t)?i:(p=c[n],p&&p.state===l||n==="ALL"&&y()&&o)?(f(t),i):(e=h[n],e?e.push(t):e=h[n]=[t],i)}function e(){if(!r.body){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(e,50);return}o||(o=!0,vt(),u(d,function(n){f(n)}))}function k(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",k,!1),e()):r.readyState==="complete"&&(r.detachEvent("onreadystatechange",k),e())}var r=n.document,d=[],h={},c={},ut="async"in r.createElement("script")||"MozAppearance"in r.documentElement.style||n.opera,o,g=n.head_conf&&n.head_conf.head||"head",i=n[g]=n[g]||function(){i.ready.apply(null,arguments)},nt=1,ft=2,tt=3,l=4,p;if(r.readyState==="complete")e();else if(r.addEventListener)r.addEventListener("DOMContentLoaded",k,!1),n.addEventListener("load",e,!1);else{r.attachEvent("onreadystatechange",k);n.attachEvent("onload",e);p=!1;try{p=!n.frameElement&&r.documentElement}catch(wt){}p&&p.doScroll&&function pt(){if(!o){try{p.doScroll("left")}catch(t){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(pt,50);return}e()}}()}i.load=i.js=ut?lt:ct;i.test=ot;i.ready=yt;i.ready(r,function(){y()&&u(h.ALL,function(n){f(n)});i.feature&&i.feature("domloaded",!0)})})(window);
//# sourceMappingURL=head.load.min.js.map


// this is the actual includedeck
function includedeck(m, c) {
    if (typeof IS_AN_EXPORTED_DECK !== 'undefined') m = undefined;
    var maybe = function(f) { return f || (function(){}); }
    var modules = m || [];
    var conf = c || {};
    var initDelay = conf.INITDELAY;
    var cb = {
        beforeLoad: maybe(conf.BEFORELOAD),
        beforeDelay: maybe(conf.BEFOREDELAY), // useful only if INITDELAY is set, else, just like BEFOREINIT
        beforeInit: maybe(conf.BEFOREINIT),
        afterInit: maybe(conf.AFTERINIT),
        atExit: maybe(conf.ATEXIT), // for backward compatibility (same as AFTERINIT)
        hasGeneric: conf.GENERIC ? true : false,
        generic: maybe(conf.GENERIC) // will receive calls like GENERIC("AFTER", "svg"), one of each BEFORE/AFTER for each file group (svg, simplemath, ...)
    };
    var prefix = conf.PREFIX || "deck.js";

    if (typeof(modules) == "string") {
        modules = modules.split(/ +/);
    }
    
    // todo: make this externally extensible
    // todo: maybe have a mechanism to load a list of dependency (e.g., mymodule-files.js)

    var info = {
        //
        // core (differerent possible cores)
        "deck-core-dependencies": [
            prefix + "/jquery.min.js",
            prefix + "/modernizr.custom.js"
	    //prefix + "/extensions/includedeck/___after___core___.js"
        ],
        "deck": [
            "@_deck-core-dependencies",
	    prefix + "/core/deck.core.css",
            prefix + "/core/deck.core.js"
        ],
        "newdeck": [
            "@_deck-core-dependencies",
	    prefix + "/extensions/style-chunks/core.css",
            prefix + "/core/deck.core.js"
        ],
        //
        // extensions
        "fit": [ prefix + "/extensions/fit/deck.fit.js" ],
        "fit-fs": [
            prefix + "/extensions/fit/deck.fit-fs.css",
            "@_fit"
        ],
        "simplemath": [
            prefix + "/libs/display-latex2.user.js",
            prefix + "/extensions/simplemath/deck.simplemath.js"
        ],
        "katex": [
            prefix + "/extensions/katex/katex.min.js",
            prefix + "/extensions/katex/katex.min.css",
            prefix + "/extensions/katex/deck.katex.js"
        ],
        "smartsyntax": [ prefix + "/extensions/smartsyntax/deck.smartsyntax.js" ],
        "smarkdown": [
            prefix + "/extensions/smarkdown/markdown.js",
            prefix + "/extensions/smarkdown/deck.smarkdown.js"
        ],
        "smartdown": [
            prefix + "/extensions/smartdown/showdown.js",
            prefix + "/extensions/smartdown/deck.smartdown.js"
        ],
        "clone": [
            prefix + "/extensions/clone/deck.clone.css",
            prefix + "/extensions/clone/deck.clone.js"
        ],
        "timekeeper": [
            prefix + "/extensions/timekeeper/deck.timekeeper.css",
            prefix + "/extensions/timekeeper/deck.timekeeper.js"
        ],
        "goto": [
            prefix + "/extensions/goto/deck.goto.css",
            prefix + "/extensions/goto/deck.goto.js"
        ],
        "status": [
            prefix + "/extensions/status/deck.status.css",
            prefix + "/extensions/status/deck.status.js"
        ],
        "progress": [
            prefix + "/extensions/progress/deck.progress.css",
            prefix + "/extensions/progress/deck.progress.js"
        ],
        "navigation": [
            prefix + "/extensions/navigation/deck.navigation.css",
            prefix + "/extensions/navigation/deck.navigation.js"
        ],
        "menu": [
            prefix + "/extensions/menu/deck.menu.css",
            prefix + "/extensions/menu/deck.menu.js"
        ],
        "step": [ prefix + "/extensions/step/deck.step.js" ],
        "events": [ prefix + "/extensions/events/deck.events.js" ],
        "anim": [ prefix + "/extensions/anim/deck.anim.js" ],
        "svg": [
            prefix + "/extensions/svg/deck.svg.css",
            prefix + "/libs/jquerysvg/jquery.svg.min.js" ,
            prefix + "/libs/jquerysvg/jquery.svganim.min.js",
            prefix + "/extensions/svg/deck.svg.js"
        ],
        "metadata": [ prefix + "/extensions/metadata/deck.metadata.js" ],
        "attribution": [
            prefix + "/extensions/attribution/deck.attribution.css",
            prefix + "/extensions/attribution/deck.attribution.js"
        ],
        "container-styling": [ prefix + "/extensions/container-styling/deck.container-styling.js" ],
        "savedom": [
            prefix + "/extensions/savedom/deck.savedom.css",
            prefix + "/extensions/savedom/deck.savedom.js",
        ],
        "annotate": [
            prefix + "/extensions/annotate/deck.annotate.css",
            prefix + "/extensions/annotate/deck.annotate.js",
        ],
        "help-area": [
            prefix + "/extensions/help-area/deck.help-area.css",
            prefix + "/extensions/help-area/deck.help-area.js",
        ],
        // Style extensions
        "style-chunks": [
	          prefix + "/extensions/style-chunks/simple.css",
	          prefix + "/extensions/style-chunks/comments.css"
        ],
        "highlight": [
            prefix + "/extensions/highlight/github.min.css",
            prefix + "/extensions/highlight/highlight.min.js",
            prefix + "/extensions/highlight/deck.highlight.js"
        ],
        /////////////////////////////////////////
        // pre profile custom incubator include
        "profile-6-incubator": [
            prefix + "/extensions/incubator/simple-layouts.css",
            prefix + "/extensions/incubator/toggle-comments.js"
        ],
        "profile-8-incubator": [
            prefix + "/extensions/incubator/simple-layouts.css",
            prefix + "/extensions/incubator/toggle-comments.js",
            prefix + "/extensions/incubator/author-tools.js"
        ],
        /////////////////////////////////////////
        // external extensions (not in this repository at the time of writting)
        "codemirror": [ /* please prefer "highlight" for plain highlighting */
            prefix + "/extensions/codemirror/codemirror-compressed.js",
            prefix + "/extensions/codemirror/deck.codemirror.js",
            prefix + "/extensions/codemirror/codemirror.css"
        ],
        /////////////////////////////////////////
        //
        // Themes
        // // by convention, "theme:blabla" will load the default blabla theme
        //
        // Some default profiles
        //
        /// profile-1: default deck with most extensions and no theme
        "profile-1": ["@_deck", "@_smartsyntax", "@_fit-fs", "@_simplemath", "@_clone", "@_goto", "@_status", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg"],
        "profile-1-fitnofs": ["@_deck", "@_smartsyntax", "@_fit", "@_simplemath", "@_clone", "@_goto", "@_status", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg"],
        /// profile-2: new deck (cleaner css) with most extensions and no theme
        "profile-2": ["@_newdeck", "@_smartsyntax", "@_fit-fs", "@_simplemath", "@_clone", "@_goto", "@_status", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg"],
        "profile-2-fitnofs": ["@_newdeck", "@_smartsyntax", "@_fit", "@_simplemath", "@_clone", "@_goto", "@_status", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg"],
        /// profile-3: big profile = profile-2 / with new status (progress) + all good bundled extensions
        "profile-3": ["@_newdeck", "@_smartsyntax", "@_fit-fs", "@_simplemath", "@_clone", "@_goto", "@_progress", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg",
                      "@_metadata", "@_attribution", "@_container-styling", "@_timekeeper"],
        /// profile-4: big profile (as profile 3) but with the smarkdown instead of the smartsyntax
        "profile-4": ["@_newdeck", "@_smarkdown", "@_fit-fs", "@_simplemath", "@_clone", "@_goto", "@_progress", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg",
                      "@_metadata", "@_attribution", "@_container-styling", "@_timekeeper"],
        /// profile-5: use smarkdown and include more useful things (CSS: simple, comments)
        "profile-5": ["@_newdeck", "@_smarkdown", "@_fit-fs", "@_simplemath", "@_clone", "@_goto", "@_progress", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg",
                      "@_metadata", "@_attribution", "@_container-styling", "@_timekeeper", "@_style-chunks"],
        /// profile-6: same as profile 5 but use smartdown+katex+highlight
        "profile-6": ["@_newdeck", "@_smartdown", "@_fit-fs", "@_katex", "@_clone", "@_goto", "@_progress", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg",
                      "@_metadata", "@_attribution", "@_container-styling", "@_timekeeper", "@_style-chunks", "@_highlight", "@_profile-6-incubator"],
        /// profile-7: same as profile 6 with savedom added
        "profile-7": ["@_newdeck", "@_smartdown", "@_fit-fs", "@_katex", "@_clone", "@_goto", "@_progress", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg",
                      "@_metadata", "@_attribution", "@_container-styling", "@_timekeeper", "@_style-chunks", "@_highlight", "@_profile-6-incubator", "@_savedom", "@_annotate"],
        /// profile-8: same as profile 7 with help-area added (and updates)
        "profile-8": ["@_newdeck", "@_help-area", "@_smartdown", "@_fit-fs", "@_katex", "@_clone", "@_goto", "@_progress", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg",
                      "@_metadata", "@_attribution", "@_container-styling", "@_timekeeper", "@_style-chunks", "@_highlight", "@_savedom", "@_annotate", "@_profile-8-incubator"],
        dummy: {}
    };

    var endsInJsOrCss = /\.(css|js)$/;

    // Defensive check that there are no *.js/*.css in the info (as they won't be useable anyways)
    for (k in info) {
        if (endsInJsOrCss.test(k)) {
            alert("Internal problem detected in includedeck: '" + k + "' won't be useable.");
        }
    }

    // TODO?: handle default extensions (deck.js/extensions/N/deck.N.{js,css}
    // TODO?: some should come before others, e.g. anim before svg, (or before any (deck) or before most (loading...))

    // if there are two '#' in the url, take everything after the second as a theme name or session storage settings
    var forceTheme = null;
    if ((typeof ACTUALLY_EXPORT_A_LIST_OF_FILES == 'undefined') && (window.location.hash.replace(/[^#]/gi, '').length >= 2)) {
        var parts = window.location.hash.split(/\b(?=#)/); // split just before a #
        for (i in parts) {
            if (parts[i].startsWith("##t:")) {
                // TODO consider force-adding the theme to the list (currently it will load only if theme:... is in the list)
                forceTheme = parts[i].substr(4);
            } else if (parts[i].startsWith("##s:") || parts[i].startsWith("##l:")) {
                var storage = parts[i].startsWith("##s:") ? window.sessionStorage : window.localStorage;
                var expr = parts[i].substr(4);
                if (expr.replace(/[^=]/gi, '').length == 0) {
                    storage[expr] = true;
                } else {
                    var k = expr.split("=", 1)[0];
                    var v = expr.substr(1+k.length);
                    storage[k] = v;
                }
            } else if (parts[i].startsWith("#")) {
                window.location.hash = parts[i];
            }
        }
    }

    var toLoad = [];
    var addInfo = function(k) {
        if (k.substring(0, 6) == "theme:") {
            k = k.substring(6)
            if (forceTheme) { // replace by the url forced theme (works only with default themes...
                k = forceTheme
            }
            if (k.substring(0, 2) == "x:") {
                k = k.substring(2)
                toLoad = toLoad.concat(prefix + "/deck.js-theme-builder/" + k + ".css");
            } else {
                toLoad = toLoad.concat(prefix + "/themes/style/" + k + ".css");
            }
            return;
        }
        if (k.substring(0, 10) == "extension:") {
            toLoad = toLoad.concat(prefix + "/extensions/" + k.substring(10));
            return;
        }
        if (endsInJsOrCss.test(k)) {
            toLoad = toLoad.concat(k);
            return;
        }
        var closure = function(wh, e) { return function () { cb.generic(wh, e); } };
        for (i in info[k]) {
            if (info[k][i].substring(0,2) == "@_") {
                var e = info[k][i].substring(2);
                if (cb.hasGeneric) toLoad = toLoad.concat(closure("BEFORE", e));
                addInfo(e);
                if (cb.hasGeneric) toLoad = toLoad.concat(closure("AFTER", e));
            } else {
                toLoad = toLoad.concat(info[k][i]);
            }
        }
    }

    for (i in modules) {
        addInfo(modules[i]);
    }

    if (typeof ACTUALLY_EXPORT_A_LIST_OF_FILES !== 'undefined') {
        return toLoad;
    }

    { // First insert a CSS, just to fit modernizr
        var c = document.createElement("style");
        c.type = "text/css";
        if (typeof ACTUALLY_FILL_CSS !== 'undefined') {
            ACTUALLY_FILL_CSS(c);
        }
        document.getElementsByTagName("head")[0].appendChild(c);
    }
    
    // custom adapter function to split the load list at each function and call by head.js by block (need to end with a function)
    // in the end, for IE9 compat, we load everything one by one... maybe switching to lazyload.js would avoid needing this.
    var loadsAndCalls = function(l, stack) {
        stack = stack || [];
        if (l.length == 0) return;
        if ("string" !== typeof l[0]) {
            l[0]();
            loadsAndCalls(l.slice(1));
        } else {
            head.js(l[0], function() {
                loadsAndCalls(l.slice(1));
            });
        }
    }
    cb.beforeLoad();
    loadsAndCalls(toLoad.concat(function() {
        $(function() {
            var doIt = function() {
                cb.beforeInit();
                window.defaultDeckCallIsAnError = true;
                $.deck('init', conf);
                cb.afterInit();
                cb.atExit();
            };
            // delay and callback logic
            cb.beforeDelay();
            if (initDelay) {
                setTimeout(doIt, initDelay);
            } else {
                doIt();
            }
        });
    }));
}


/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Contains: fontface | backgroundsize | borderimage | borderradius | boxshadow | flexbox | hsla | multiplebgs | opacity | rgba | textshadow | cssanimations | csscolumns | generatedcontent | cssgradients | cssreflections | csstransforms | csstransforms3d | csstransitions | applicationcache | canvas | canvastext | draganddrop | hashchange | history | audio | video | indexeddb | input | inputtypes | localstorage | postmessage | sessionstorage | websockets | websqldatabase | webworkers | geolocation | inlinesvg | smil | svg | svgclippaths | touch | webgl | iepp | cssclasses | addtest | teststyles | testprop | testallprops | hasevent | prefixes | domprefixes | load
 */
;window.Modernizr=function(a,b,c){function H(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=a[b]in l;return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function D(a,b){return!!~(""+a).indexOf(b)}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},w=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),x,y={}.hasOwnProperty,z;!C(y,c)&&!C(y.call,c)?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)};var G=function(c,d){var f=c.join(""),g=d.length;v(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||j.touch.offsetTop===9,e.csstransforms3d=j.csstransforms3d.offsetLeft===9,e.generatedcontent=j.generatedcontent.offsetHeight>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",o.join("touch-enabled),("),i,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",o.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',m,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.canvastext=function(){return!!e.canvas&&!!C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return e.touch},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b].toLowerCase()+"IndexedDB"])return!0;return!!a.indexedDB},r.hashchange=function(){return w("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return!!a.history&&!!history.pushState},r.draganddrop=function(){return w("dragstart")&&w("drop")},r.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius")},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){return e.fontface},r.generatedcontent=function(){return e.generatedcontent},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(e){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(d){}return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webworkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var I in r)z(r,I)&&(x=I.toLowerCase(),e[x]=r[I](),u.push((e[x]?"":"no-")+x));e.input||H(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return;b=typeof b=="boolean"?b:!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},A(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=o,e._domPrefixes=p,e.hasEvent=w,e.testProp=function(a){return E([a])},e.testAllProps=F,e.testStyles=v,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+u.join(" "):"");return e}(this,this.document),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*!
Deck JS - deck.core
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
The deck.core module provides all the basic functionality for creating and
moving through a deck.  It does so by applying classes to indicate the state of
the deck and its slides, allowing CSS to take care of the visual representation
of each state.  It also provides methods for navigating the deck and inspecting
its state, as well as basic key bindings for going to the next and previous
slides.  More functionality is provided by wholly separate extension modules
that use the API provided by core.
*/
(function($, undefined) {
  var slides, currentIndex, $container, $fragmentLinks;

  var events = {
    /*
    This event fires at the beginning of a slide change, before the actual
    change occurs. Its purpose is to give extension authors a way to prevent
    the slide change from occuring. This is done by calling preventDefault
    on the event object within this event. If that is done, the deck.change
    event will never be fired and the slide will not change.
    */
    beforeChange: 'deck.beforeChange',

    /*
    This event fires whenever the current slide changes, whether by way of
    next, prev, or go. The callback function is passed two parameters, from
    and to, equal to the indices of the old slide and the new slide
    respectively. If preventDefault is called on the event within this handler
    the slide change does not occur.

    $(document).bind('deck.change', function(event, from, to) {
       alert('Moving from slide ' + from + ' to ' + to);
    });
    */
    change: 'deck.change',

    /*
    This event fires at the beginning of deck initialization. This event makes
    a good hook for preprocessing extensions looking to modify the DOM before
    the deck is fully initialized. It is also possible to halt the deck.init
    event from firing while you do things in beforeInit. This can be done by
    calling lockInit on the event object passed to this event. The init can be
    released by calling releaseInit.

    $(document).bind('deck.beforeInit', function(event) {
      event.lockInit(); // halts deck.init event
      window.setTimeout(function() {
        event.releaseInit(); // deck.init will now fire 2 seconds later
      }, 2000);
    });

    The init event will be fired regardless of locks after
    options.initLockTimeout milliseconds.
    */
    beforeInitialize: 'deck.beforeInit',

    /*
    This event fires at the end of deck initialization. Extensions should
    implement any code that relies on user extensible options (key bindings,
    element selectors, classes) within a handler for this event. Native
    events associated with Deck JS should be scoped under a .deck event
    namespace, as with the example below:

    var $d = $(document);
    $.deck.defaults.keys.myExtensionKeycode = 70; // 'h'
    $d.bind('deck.init', function() {
       $d.bind('keydown.deck', function(event) {
          if (event.which === $.deck.getOptions().keys.myExtensionKeycode) {
             // Rock out
          }
       });
    });
    */
    initialize: 'deck.init'
  };

  var options = {};
  var $document = $(document);
  var $window = $(window);
  var stopPropagation = function(event) {
    event.stopPropagation();
  };

  var updateContainerState = function() {
    var oldIndex = $container.data('onSlide');
    $container.removeClass(options.classes.onPrefix + oldIndex);
    $container.addClass(options.classes.onPrefix + currentIndex);
    $container.data('onSlide', currentIndex);
  };

  var updateChildCurrent = function() {
    var $oldCurrent = $('.' + options.classes.current);
    var $oldParents = $oldCurrent.parentsUntil(options.selectors.container);
    var $newCurrent = slides[currentIndex];
    var $newParents = $newCurrent.parentsUntil(options.selectors.container);
    $oldParents.removeClass(options.classes.childCurrent);
    $newParents.addClass(options.classes.childCurrent);
  };

  var removeOldSlideStates = function() {
    var $all = $();
    $.each(slides, function(i, el) {
      $all = $all.add(el);
    });
    $all.removeClass([
      options.classes.before,
      options.classes.previous,
      options.classes.current,
      options.classes.next,
      options.classes.after
    ].join(' '));
  };

  var addNewSlideStates = function() {
    slides[currentIndex].addClass(options.classes.current);
    if (currentIndex > 0) {
      slides[currentIndex-1].addClass(options.classes.previous);
    }
    if (currentIndex + 1 < slides.length) {
      slides[currentIndex+1].addClass(options.classes.next);
    }
    if (currentIndex > 1) {
      $.each(slides.slice(0, currentIndex - 1), function(i, $slide) {
        $slide.addClass(options.classes.before);
      });
    }
    if (currentIndex + 2 < slides.length) {
      $.each(slides.slice(currentIndex+2), function(i, $slide) {
        $slide.addClass(options.classes.after);
      });
    }
  };

  var setAriaHiddens = function() {
    $(options.selectors.slides).each(function() {
      var $slide = $(this);
      var isSub = $slide.closest('.' + options.classes.childCurrent).length;
      var isBefore = $slide.hasClass(options.classes.before) && !isSub;
      var isPrevious = $slide.hasClass(options.classes.previous) && !isSub;
      var isNext = $slide.hasClass(options.classes.next);
      var isAfter = $slide.hasClass(options.classes.after);
      var ariaHiddenValue = isBefore || isPrevious || isNext || isAfter;
      $slide.attr('aria-hidden', ariaHiddenValue);
    });
  };

  var updateStates = function() {
    updateContainerState();
    updateChildCurrent();
    removeOldSlideStates();
    addNewSlideStates();
    if (options.setAriaHiddens) {
      setAriaHiddens();
    }
  };

  var initSlidesArray = function(elements) {
    if ($.isArray(elements)) {
      $.each(elements, function(i, element) {
        slides.push($(element));
      });
    }
    else {
      $(elements).each(function(i, element) {
        slides.push($(element));
      });
    }
  };

  var bindKeyEvents = function() {
    var editables = [
      'input',
      'textarea',
      'select',
      'button',
      'meter',
      'progress',
      '[contentEditable]'
    ].join(', ');

    $document.unbind('keydown.deck').bind('keydown.deck', function(event) {
      if (event.altKey) {
        // ignore events when the ALT key is down
        // NB: browsers use ALT+arrow to navigate history
        return;
      }
      var isNext = event.which === options.keys.next;
      var isPrev = event.which === options.keys.previous;
      isNext = isNext || $.inArray(event.which, options.keys.next) > -1;
      isPrev = isPrev || $.inArray(event.which, options.keys.previous) > -1;

      if (isNext) {
        methods.next();
        event.preventDefault();
      }
      else if (isPrev) {
        methods.prev();
        event.preventDefault();
      }
    });

    $document.undelegate(editables, 'keydown.deck', stopPropagation);
    $document.delegate(editables, 'keydown.deck', stopPropagation);
  };

  var bindTouchEvents = function() {
    var startTouch;
    var direction = options.touch.swipeDirection;
    var tolerance = options.touch.swipeTolerance;
    var listenToHorizontal = ({ both: true, horizontal: true })[direction];
    var listenToVertical = ({ both: true, vertical: true })[direction];

    $container.unbind('touchstart.deck');
    $container.bind('touchstart.deck', function(event) {
      if (!startTouch) {
        startTouch = $.extend({}, event.originalEvent.targetTouches[0]);
      }
    });

    $container.unbind('touchmove.deck');
    $container.bind('touchmove.deck', function(event) {
      $.each(event.originalEvent.changedTouches, function(i, touch) {
        if (!startTouch || touch.identifier !== startTouch.identifier) {
          return true;
        }
        var xDistance = touch.screenX - startTouch.screenX;
        var yDistance = touch.screenY - startTouch.screenY;
        var leftToRight = xDistance > tolerance && listenToHorizontal;
        var rightToLeft = xDistance < -tolerance && listenToHorizontal;
        var topToBottom = yDistance > tolerance && listenToVertical;
        var bottomToTop = yDistance < -tolerance && listenToVertical;

        if (leftToRight || topToBottom) {
          $.deck('prev');
          startTouch = undefined;
        }
        else if (rightToLeft || bottomToTop) {
          $.deck('next');
          startTouch = undefined;
        }
        return false;
      });

      if (listenToVertical) {
        event.preventDefault();
      }
    });

    $container.unbind('touchend.deck');
    $container.bind('touchend.deck', function(event) {
      $.each(event.originalEvent.changedTouches, function(i, touch) {
        if (startTouch && touch.identifier === startTouch.identifier) {
          startTouch = undefined;
        }
      });
    });
  };

  var indexInBounds = function(index) {
    return typeof index === 'number' && index >=0 && index < slides.length;
  };

  var createBeforeInitEvent = function() {
    var event = $.Event(events.beforeInitialize);
    event.locks = 0;
    event.done = $.noop;
    event.lockInit = function() {
      ++event.locks;
    };
    event.releaseInit = function() {
      --event.locks;
      if (!event.locks) {
        event.done();
      }
    };
    return event;
  };

  var goByHash = function(str) {
    var id = str.substr(str.indexOf("#") + 1);

    $.each(slides, function(i, $slide) {
      if ($slide.attr('id') === id) {
        $.deck('go', i);
        return false;
      }
    });

    // If we don't set these to 0 the container scrolls due to hashchange
    if (options.preventFragmentScroll) {
      $.deck('getContainer').scrollLeft(0).scrollTop(0);
    }
  };

  var assignSlideId = function(i, $slide) {
    var currentId = $slide.attr('id');
    var previouslyAssigned = $slide.data('deckAssignedId') === currentId;
    if (!currentId || previouslyAssigned) {
      $slide.attr('id', options.hashPrefix + i);
      $slide.data('deckAssignedId', options.hashPrefix + i);
    }
  };

  var removeContainerHashClass = function(id) {
    $container.removeClass(options.classes.onPrefix + id);
  };

  var addContainerHashClass = function(id) {
    $container.addClass(options.classes.onPrefix + id);
  };

  var setupHashBehaviors = function() {
    $fragmentLinks = $();
    $.each(slides, function(i, $slide) {
      var hash, altHash;

      assignSlideId(i, $slide);
      hash = '#' + $slide.attr('id');
      altHash = '#/' + $slide.attr('id');
      if (hash === window.location.hash || altHash === window.location.hash) {
        setTimeout(function() {
          $.deck('go', i);
        }, 1);
      }
      $fragmentLinks = $fragmentLinks.add('a[href="' + hash + '"]');
    });

    if (slides.length) {
      addContainerHashClass($.deck('getSlide').attr('id'));
    };
  };

  var changeHash = function(from, to) {
    var hash = '#' + $.deck('getSlide', to).attr('id');
    var hashPath = window.location.href.replace(/#.*/, '') + hash;

    removeContainerHashClass($.deck('getSlide', from).attr('id'));
    addContainerHashClass($.deck('getSlide', to).attr('id'));
    if (Modernizr.history) {
      window.history.replaceState({}, "", hashPath);
    }
  };

  /* Methods exposed in the jQuery.deck namespace */
  var methods = {

    /*
    jQuery.deck(selector, options)

    selector: string | jQuery | array
    options: object, optional

    Initializes the deck, using each element matched by selector as a slide.
    May also be passed an array of string selectors or jQuery objects, in
    which case each selector in the array is considered a slide. The second
    parameter is an optional options object which will extend the default
    values.

    Users may also pass only an options object to init. In this case the slide
    selector will be options.selectors.slides which defaults to .slide.

    $.deck('.slide');

    or

    $.deck([
       '#first-slide',
       '#second-slide',
       '#etc'
    ]);
    */
    init: function(opts) {
      var beforeInitEvent = createBeforeInitEvent();
      var overrides = opts;

      if (!$.isPlainObject(opts)) {
        overrides = arguments[1] || {};
        $.extend(true, overrides, {
          selectors: {
            slides: arguments[0]
          }
        });
      }

      options = $.extend(true, {}, $.deck.defaults, overrides);
      slides = [];
      currentIndex = 0;
      $container = $(options.selectors.container);

      // Hide the deck while states are being applied to kill transitions
      $container.addClass(options.classes.loading);

      // populate the array of slides for pre-init
      initSlidesArray(options.selectors.slides);
      // Pre init event for preprocessing hooks
      beforeInitEvent.done = function() {
        // reInitSlidesArray is meant only for beforeInit
        methods['reInitSlidesArray'] = function() {
            alert('Deck.js method "reInitSlidesArray" is meant to be called in the beforeInit phase only.');
        }
        // re-populate the array of slides
        slides = [];
        initSlidesArray(options.selectors.slides);
        setupHashBehaviors();
        bindKeyEvents();
        bindTouchEvents();
        $container.scrollLeft(0).scrollTop(0);

        if (slides.length) {
          updateStates();
        }

        // Show deck again now that slides are in place
        $container.removeClass(options.classes.loading);
        $document.trigger(events.initialize);
      };

      beforeInitEvent.lockInit();
      $document.trigger(beforeInitEvent);
      beforeInitEvent.releaseInit();
      window.setTimeout(function() {
        if (beforeInitEvent.locks) {
          if (window.console) {
            window.console.warn('Something locked deck initialization\
              without releasing it before the timeout. Proceeding with\
              initialization anyway.');
          }
          beforeInitEvent.done();
        }
      }, options.initLockTimeout);
    },

    /*
    jQuery.deck('reInitSlidesArray')
    
    Force a recomputation of the "slides" array. This method is meant
    to be used by extensions that generate new slides in the
    beforeInit phase.
    */

    reInitSlidesArray: function() {
        slides = [];
        initSlidesArray(options.selectors.slides);
    },

    /*
    jQuery.deck('go', index)

    index: integer | string

    Moves to the slide at the specified index if index is a number. Index is
    0-based, so $.deck('go', 0); will move to the first slide. If index is a
    string this will move to the slide with the specified id. If index is out
    of bounds or doesn't match a slide id the call is ignored.
    */
    go: function(indexOrId) {
      var beforeChangeEvent = $.Event(events.beforeChange);
      var index;

      /* Number index, easy. */
      if (indexInBounds(indexOrId)) {
        index = indexOrId;
      }
      /* Id string index, search for it and set integer index */
      else if (typeof indexOrId === 'string') {
        $.each(slides, function(i, $slide) {
          if ($slide.attr('id') === indexOrId) {
            index = i;
            return false;
          }
        });
      }
      if (typeof index === 'undefined') {
        return;
      }

      /* Trigger beforeChange. If nothing prevents the change, trigger
      the slide change. */
      $document.trigger(beforeChangeEvent, [currentIndex, index]);
      if (!beforeChangeEvent.isDefaultPrevented()) {
        $document.trigger(events.change, [currentIndex, index]);
        changeHash(currentIndex, index);
        currentIndex = index;
        updateStates();
      }
    },

    /*
    jQuery.deck('next')

    Moves to the next slide. If the last slide is already active, the call
    is ignored.
    */
    next: function() {
      methods.go(currentIndex+1);
    },

    /*
    jQuery.deck('prev')

    Moves to the previous slide. If the first slide is already active, the
    call is ignored.
    */
    prev: function() {
      methods.go(currentIndex-1);
    },

    /*
    jQuery.deck('getSlide', index)

    index: integer, optional

    Returns a jQuery object containing the slide at index. If index is not
    specified, the current slide is returned.
    */
    getSlide: function(index) {
      index = typeof index !== 'undefined' ? index : currentIndex;
      if (!indexInBounds(index)) {
        return null;
      }
      return slides[index];
    },

    /*
    jQuery.deck('getSlides')

    Returns all slides as an array of jQuery objects.
    */
    getSlides: function() {
      return slides;
    },

    /*
    jQuery.deck('getTopLevelSlides')

    Returns all slides that are not subslides.
    */
    getTopLevelSlides: function() {
      var topLevelSlides = [];
      var slideSelector = options.selectors.slides;
      var subSelector = [slideSelector, slideSelector].join(' ');
      $.each(slides, function(i, $slide) {
        if (!$slide.is(subSelector)) {
          topLevelSlides.push($slide);
        }
      });
      return topLevelSlides;
    },

    /*
    jQuery.deck('getNestedSlides', index)

    index: integer, optional

    Returns all the nested slides of the current slide. If index is
    specified it returns the nested slides of the slide at that index.
    If there are no nested slides this will return an empty array.
    */
    getNestedSlides: function(index) {
      var targetIndex = index == null ? currentIndex : index;
      var $targetSlide = $.deck('getSlide', targetIndex);
      var $nesteds = $targetSlide.find(options.selectors.slides);
      var nesteds = $nesteds.get();
      return $.map(nesteds, function(slide, i) {
        return $(slide);
      });
    },


    /*
    jQuery.deck('getContainer')

    Returns a jQuery object containing the deck container as defined by the
    container option.
    */
    getContainer: function() {
      return $container;
    },

    /*
    jQuery.deck('getOptions')

    Returns the options object for the deck, including any overrides that
    were defined at initialization.
    */
    getOptions: function() {
      return options;
    },

    /*
    jQuery.deck('extend', name, method)

    name: string
    method: function

    Adds method to the deck namespace with the key of name. This doesn’t
    give access to any private member data — public methods must still be
    used within method — but lets extension authors piggyback on the deck
    namespace rather than pollute jQuery.

    $.deck('extend', 'alert', function(msg) {
       alert(msg);
    });

    // Alerts 'boom'
    $.deck('alert', 'boom');
    */
    extend: function(name, method) {
      methods[name] = method;
    }
  };

  /* jQuery extension */
  $.deck = function(method, arg) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (methods[method]) {
      return methods[method].apply(this, args);
    }
    else {
      if (window.defaultDeckCallIsAnError) {
        alert("'" + method + "' not found (or meant to be a parameter-less init)");
      }
      else {
        return methods.init(method, arg);
      }
    }
  };

  /*
  The default settings object for a deck. All deck extensions should extend
  this object to add defaults for any of their options.

  options.classes.after
    This class is added to all slides that appear after the 'next' slide.

  options.classes.before
    This class is added to all slides that appear before the 'previous'
    slide.

  options.classes.childCurrent
    This class is added to all elements in the DOM tree between the
    'current' slide and the deck container. For standard slides, this is
    mostly seen and used for nested slides.

  options.classes.current
    This class is added to the current slide.

  options.classes.loading
    This class is applied to the deck container during loading phases and is
    primarily used as a way to short circuit transitions between states
    where such transitions are distracting or unwanted.  For example, this
    class is applied during deck initialization and then removed to prevent
    all the slides from appearing stacked and transitioning into place
    on load.

  options.classes.next
    This class is added to the slide immediately following the 'current'
    slide.

  options.classes.onPrefix
    This prefix, concatenated with the current slide index, is added to the
    deck container as you change slides.

  options.classes.previous
    This class is added to the slide immediately preceding the 'current'
    slide.

  options.selectors.container
    Elements matched by this CSS selector will be considered the deck
    container. The deck container is used to scope certain states of the
    deck, as with the onPrefix option, or with extensions such as deck.goto
    and deck.menu.

  options.selectors.slides
    Elements matched by this selector make up the individual deck slides.
    If a user chooses to pass the slide selector as the first argument to
    $.deck() on initialization it does the same thing as passing in this
    option and this option value will be set to the value of that parameter.

  options.keys.next
    The numeric keycode used to go to the next slide.

  options.keys.previous
    The numeric keycode used to go to the previous slide.

  options.touch.swipeDirection
    The direction swipes occur to cause slide changes. Can be 'horizontal',
    'vertical', or 'both'. Any other value or a falsy value will disable
    swipe gestures for navigation.

  options.touch.swipeTolerance
    The number of pixels the users finger must travel to produce a swipe
    gesture.

  options.initLockTimeout
    The number of milliseconds the init event will wait for BeforeInit event
    locks to be released before firing the init event regardless.

  options.hashPrefix
    Every slide that does not have an id is assigned one at initialization.
    Assigned ids take the form of hashPrefix + slideIndex, e.g., slide-0,
    slide-12, etc.

  options.preventFragmentScroll
    When deep linking to a hash of a nested slide, this scrolls the deck
    container to the top, undoing the natural browser behavior of scrolling
    to the document fragment on load.

  options.setAriaHiddens
    When set to true, deck.js will set aria hidden attributes for slides
    that do not appear onscreen according to a typical heirarchical
    deck structure. You may want to turn this off if you are using a theme
    where slides besides the current slide are visible on screen and should
    be accessible to screenreaders.
  */
  $.deck.defaults = {
    classes: {
      after: 'deck-after',
      before: 'deck-before',
      childCurrent: 'deck-child-current',
      current: 'deck-current',
      loading: 'deck-loading',
      next: 'deck-next',
      onPrefix: 'on-slide-',
      previous: 'deck-previous'
    },

    selectors: {
      container: '.deck-container',
      slides: '.slide'
    },

    keys: {
      // enter, space, page down, right arrow, down arrow,
      next: [13, 32, 34, 39, 40],
      // backspace, page up, left arrow, up arrow
      previous: [8, 33, 37, 38]
    },

    touch: {
      swipeDirection: 'horizontal',
      swipeTolerance: 60
    },

    initLockTimeout: 10000,
    hashPrefix: 'slide-',
    preventFragmentScroll: true,
    setAriaHiddens: true
  };

  $document.ready(function() {
    $('html').addClass('ready');
  });

  $window.bind('hashchange.deck', function(event) {
    if (event.originalEvent && event.originalEvent.newURL) {
      goByHash(event.originalEvent.newURL);
    }
    else {
      goByHash(window.location.hash);
    }
  });

  $window.bind('load.deck', function() {
    if (options.preventFragmentScroll) {
      $container.scrollLeft(0).scrollTop(0);
    }
  });
})(jQuery);

/*!
Deck JS - deck.help-area
Copyright (c) 2018-2018 Rémi Emonet
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module create a "help popup" which other extensions can contribute to.
This popup can contain help about default keybindings (going further in a
clean manner would most likely need to refactor key handling), information
coming from the presentation itself (author, abstact, etc.), access to rare
tools that have no key binding and edition of rare configuration variables.
*/
(function($, undefined) {
  var $document = $(document);
  var rootCounter;

  var maybeAddSnippet = function() {
    var options = $.deck('getOptions');
    if (options.snippets.helparea) {
      $('.helparea-div.auto-inserted').remove();
      if ($(options.selectors.helpareaDiv).size() > 0 && options.alert.helparea) {
        alert("'options.snippets.helparea' is true but a "+options.selectors.helpareaDiv+" has been found."
              +"\nThis might cause interaction glitches."
              +"\n"
              +"\nSuggestion: remove your html snippet or pass the {snippets: {helparea: false}} option."
             );
      }
      $('<div/>').addClass('helparea-div').addClass('auto-inserted')
        .append($('<div/>').addClass('helparea').attr('data-progress', 'max-height: 0.9*screen.height')
          .append($('<h3/>').text('Help, Tools and Configuration'))
          .append($('<h4/>').text('Keys'))
          .append($('<div/>').addClass('helpkeys'))
          .append($('<h4/>').text('Session Variables'))
          .append($('<div/>').addClass('sessionvars'))
        )
      .appendTo($.deck('getContainer'));
    }
  };

  var bindKeyEvents = function() {
    $document.unbind('keydown.deckhelparea');
    $document.bind('keydown.deckhelparea', function(event) {
      var key = $.deck('getOptions').keys.helparea;
      if (event.which === key || $.inArray(event.which, key) > -1) {
        event.preventDefault();
        $.deck('toggleHelpArea');
      }
    });
  };

    /*
  var populateDatalist = function() {
    var options = $.deck('getOptions');
    var $datalist = $(options.selectors.gotoDatalist);

    $.each($.deck('getSlides'), function(i, $slide) {
      var id = $slide.attr('id');
      if (id) {
        $datalist.append('<option value="' + id + '">');
      }
    });
  };
*/


  /*
  Extends defaults/options.

  options.keys.helparea
    The numeric keycode used to show the Help Area.

  */
  $.extend(true, $.deck.defaults, {
    classes: {
      helparea: 'deck-helparea'
    },

    selectors: {
      helpareaDiv: '.helparea-div'
    },

    snippets: {
      helparea: true
    },

    alert: {
      helparea: true
    },

    keys: {
      helparea: 72 // h
    },
  });

    var formatKeys = function(o, k) {
      var special = {
        37: '🡐',
        38: '🡒',
        39: '🡑',
        40: '🡓',
        33: '⇞',
        34: '⇟',
        8:  '⟵',
        13: '⏎',
        32: '␣',
      };
      var keyString = function(o) {
        return special[o] || String.fromCharCode(o).toLowerCase();
      };
      var wrap = function(o) {
        return '<span class="kbd">'+o+'</span>';
      };
      var path = ("keys."+k).split('.');
      for (var i in path) {
        o = o[path[i]];
        if (typeof o === 'undefined') { return "NOTFOUND "+path; }
      }
      if (!Array.isArray(o)) {
          o = [o];
      }
      return o.map(keyString).map(wrap).join(' ');
    }
  /*
  jQuery.deck('helpAdvertiseKey', keyPath, docStringOrElement)

  Add a key binding in the help area, from its keyPath.
  The keypath is what to put after options.keys, to get the key code.
  */
  $.deck('extend', 'helpAdvertiseKey', function(keyPath, docStringOrElement) {
    var options = $.deck('getOptions');
      $('<div/>').html(formatKeys(options, keyPath)).attr('title', keyPath) // TODO parse foo.bar.foo and handle list with modifiers
      .appendTo($('.helparea-div .helpkeys'))
      $('<div/>').text(docStringOrElement)
      .appendTo($('.helparea-div .helpkeys'))
  });

  /*
  jQuery.deck('helpSessionStorage', storageKey, docStringOrElement, editable=true, clearable=true)

  Adds a viewer/editor for a session storage value.
  */
  $.deck('extend', 'helpSessionStorage', function(key, docStringOrElement, editable, clearable) {
    var editable = (typeof editable !== 'undefined') ? editable : true;
    var clearable = (typeof clearable !== 'undefined') ? clearable : true;
    var options = $.deck('getOptions');
    var input = $('<input/>').val(window.sessionStorage.getItem(key));
    var div2 = $('<div/>');
    $('<span/>').text(docStringOrElement).appendTo(div2);
    $(input).appendTo(div2);
    $('<div/>').text(key).appendTo($('.helparea-div .sessionvars'));
    $(div2).appendTo($('.helparea-div .sessionvars'));

    if (!editable) {
      $(input).prop('enabled', false);
    }
    var saveForUndo = null;
    var span = $('<span>⤬</span>');
    input.change(function() {
      window.sessionStorage.setItem(key, $(this).val());
      saveForUndo = null;
      $(this).text('⤬');
    });
    span.click(function() {
      if (saveForUndo == null) {
        saveForUndo = window.sessionStorage.getItem(key);
        window.sessionStorage.removeItem(key);
        input.val('');
        $(this).text('⟲');
      } else {
        window.sessionStorage.setItem(key, saveForUndo);
        saveForUndo = null;
        $(this).text('⤬');
      }
    });
    if (clearable) {
      span.appendTo(div2);
    }
  });

  /*
  jQuery.deck('showHelpArea')

  Shows the Help Area by adding the class specified by the helparea class
  option to the deck container.
  */
  $.deck('extend', 'showHelpArea', function() {
    var options = $.deck('getOptions');
    $.deck('getContainer').addClass(options.classes.helparea);
  });

  /*
  jQuery.deck('hideHelpArea')

  Hides the Help Area by removing the class specified by the helparea class
  option from the deck container.
  */
  $.deck('extend', 'hideHelpArea', function() {
    var options = $.deck('getOptions');
    $.deck('getContainer').removeClass(options.classes.helparea);
  });

  /*
  jQuery.deck('toggleHelpArea')

  Toggles between showing and hiding the Help Area.
  */
  $.deck('extend', 'toggleHelpArea', function() {
    var options = $.deck('getOptions');
    var hasClass = $.deck('getContainer').hasClass(options.classes.helparea);
    $.deck(hasClass ? 'hideHelpArea' : 'showHelpArea');
  });

  $document.bind('deck.init', function() {
    maybeAddSnippet();
    bindKeyEvents();
    $.deck('helpAdvertiseKey', 'helparea', 'Toggle this help area');
  });

  // show other extensions that this extension has been loaded
  window.helpAreaAvailable = 1.0;
})(jQuery);


;/*! showdown v 1.8.6 - 22-12-2017 */
(function(){
/**
 * Created by Tivie on 13-07-2015.
 */

function getDefaultOpts (simple) {
  'use strict';

  var defaultOptions = {
    omitExtraWLInCodeBlocks: {
      defaultValue: false,
      describe: 'Omit the default extra whiteline added to code blocks',
      type: 'boolean'
    },
    noHeaderId: {
      defaultValue: false,
      describe: 'Turn on/off generated header id',
      type: 'boolean'
    },
    prefixHeaderId: {
      defaultValue: false,
      describe: 'Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic \'section-\' prefix',
      type: 'string'
    },
    rawPrefixHeaderId: {
      defaultValue: false,
      describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
      type: 'boolean'
    },
    ghCompatibleHeaderId: {
      defaultValue: false,
      describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
      type: 'boolean'
    },
    rawHeaderId: {
      defaultValue: false,
      describe: 'Remove only spaces, \' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids',
      type: 'boolean'
    },
    headerLevelStart: {
      defaultValue: false,
      describe: 'The header blocks level start',
      type: 'integer'
    },
    parseImgDimensions: {
      defaultValue: false,
      describe: 'Turn on/off image dimension parsing',
      type: 'boolean'
    },
    simplifiedAutoLink: {
      defaultValue: false,
      describe: 'Turn on/off GFM autolink style',
      type: 'boolean'
    },
    excludeTrailingPunctuationFromURLs: {
      defaultValue: false,
      describe: 'Excludes trailing punctuation from links generated with autoLinking',
      type: 'boolean'
    },
    literalMidWordUnderscores: {
      defaultValue: false,
      describe: 'Parse midword underscores as literal underscores',
      type: 'boolean'
    },
    literalMidWordAsterisks: {
      defaultValue: false,
      describe: 'Parse midword asterisks as literal asterisks',
      type: 'boolean'
    },
    strikethrough: {
      defaultValue: false,
      describe: 'Turn on/off strikethrough support',
      type: 'boolean'
    },
    tables: {
      defaultValue: false,
      describe: 'Turn on/off tables support',
      type: 'boolean'
    },
    tablesHeaderId: {
      defaultValue: false,
      describe: 'Add an id to table headers',
      type: 'boolean'
    },
    ghCodeBlocks: {
      defaultValue: true,
      describe: 'Turn on/off GFM fenced code blocks support',
      type: 'boolean'
    },
    tasklists: {
      defaultValue: false,
      describe: 'Turn on/off GFM tasklist support',
      type: 'boolean'
    },
    smoothLivePreview: {
      defaultValue: false,
      describe: 'Prevents weird effects in live previews due to incomplete input',
      type: 'boolean'
    },
    smartIndentationFix: {
      defaultValue: false,
      description: 'Tries to smartly fix indentation in es6 strings',
      type: 'boolean'
    },
    disableForced4SpacesIndentedSublists: {
      defaultValue: false,
      description: 'Disables the requirement of indenting nested sublists by 4 spaces',
      type: 'boolean'
    },
    simpleLineBreaks: {
      defaultValue: false,
      description: 'Parses simple line breaks as <br> (GFM Style)',
      type: 'boolean'
    },
    requireSpaceBeforeHeadingText: {
      defaultValue: false,
      description: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
      type: 'boolean'
    },
    ghMentions: {
      defaultValue: false,
      description: 'Enables github @mentions',
      type: 'boolean'
    },
    ghMentionsLink: {
      defaultValue: 'https://github.com/{u}',
      description: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
      type: 'string'
    },
    encodeEmails: {
      defaultValue: true,
      description: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
      type: 'boolean'
    },
    openLinksInNewWindow: {
      defaultValue: false,
      description: 'Open all links in new windows',
      type: 'boolean'
    },
    backslashEscapesHTMLTags: {
      defaultValue: false,
      description: 'Support for HTML Tag escaping. ex: \<div>foo\</div>',
      type: 'boolean'
    },
    emoji: {
      defaultValue: false,
      description: 'Enable emoji support. Ex: `this is a :smile: emoji`',
      type: 'boolean'
    },
    underline: {
      defaultValue: false,
      description: 'Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`',
      type: 'boolean'
    },
    completeHTMLDocument: {
      defaultValue: false,
      description: 'Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags',
      type: 'boolean'
    },
    metadata: {
      defaultValue: false,
      description: 'Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).',
      type: 'boolean'
    },
    splitAdjacentBlockquotes: {
      defaultValue: false,
      description: 'Split adjacent blockquote blocks',
      type: 'boolean'
    }
  };
  if (simple === false) {
    return JSON.parse(JSON.stringify(defaultOptions));
  }
  var ret = {};
  for (var opt in defaultOptions) {
    if (defaultOptions.hasOwnProperty(opt)) {
      ret[opt] = defaultOptions[opt].defaultValue;
    }
  }
  return ret;
}

function allOptionsOn () {
  'use strict';
  var options = getDefaultOpts(true),
      ret = {};
  for (var opt in options) {
    if (options.hasOwnProperty(opt)) {
      ret[opt] = true;
    }
  }
  return ret;
}

/**
 * Created by Tivie on 06-01-2015.
 */

// Private properties
var showdown = {},
    parsers = {},
    extensions = {},
    globalOptions = getDefaultOpts(true),
    setFlavor = 'vanilla',
    flavor = {
      github: {
        omitExtraWLInCodeBlocks:              true,
        simplifiedAutoLink:                   true,
        excludeTrailingPunctuationFromURLs:   true,
        literalMidWordUnderscores:            true,
        strikethrough:                        true,
        tables:                               true,
        tablesHeaderId:                       true,
        ghCodeBlocks:                         true,
        tasklists:                            true,
        disableForced4SpacesIndentedSublists: true,
        simpleLineBreaks:                     true,
        requireSpaceBeforeHeadingText:        true,
        ghCompatibleHeaderId:                 true,
        ghMentions:                           true,
        backslashEscapesHTMLTags:             true,
        emoji:                                true,
        splitAdjacentBlockquotes:             true
      },
      original: {
        noHeaderId:                           true,
        ghCodeBlocks:                         false
      },
      ghost: {
        omitExtraWLInCodeBlocks:              true,
        parseImgDimensions:                   true,
        simplifiedAutoLink:                   true,
        excludeTrailingPunctuationFromURLs:   true,
        literalMidWordUnderscores:            true,
        strikethrough:                        true,
        tables:                               true,
        tablesHeaderId:                       true,
        ghCodeBlocks:                         true,
        tasklists:                            true,
        smoothLivePreview:                    true,
        simpleLineBreaks:                     true,
        requireSpaceBeforeHeadingText:        true,
        ghMentions:                           false,
        encodeEmails:                         true
      },
      vanilla: getDefaultOpts(true),
      allOn: allOptionsOn()
    };

/**
 * helper namespace
 * @type {{}}
 */
showdown.helper = {};

/**
 * TODO LEGACY SUPPORT CODE
 * @type {{}}
 */
showdown.extensions = {};

/**
 * Set a global option
 * @static
 * @param {string} key
 * @param {*} value
 * @returns {showdown}
 */
showdown.setOption = function (key, value) {
  'use strict';
  globalOptions[key] = value;
  return this;
};

/**
 * Get a global option
 * @static
 * @param {string} key
 * @returns {*}
 */
showdown.getOption = function (key) {
  'use strict';
  return globalOptions[key];
};

/**
 * Get the global options
 * @static
 * @returns {{}}
 */
showdown.getOptions = function () {
  'use strict';
  return globalOptions;
};

/**
 * Reset global options to the default values
 * @static
 */
showdown.resetOptions = function () {
  'use strict';
  globalOptions = getDefaultOpts(true);
};

/**
 * Set the flavor showdown should use as default
 * @param {string} name
 */
showdown.setFlavor = function (name) {
  'use strict';
  if (!flavor.hasOwnProperty(name)) {
    throw Error(name + ' flavor was not found');
  }
  showdown.resetOptions();
  var preset = flavor[name];
  setFlavor = name;
  for (var option in preset) {
    if (preset.hasOwnProperty(option)) {
      globalOptions[option] = preset[option];
    }
  }
};

/**
 * Get the currently set flavor
 * @returns {string}
 */
showdown.getFlavor = function () {
  'use strict';
  return setFlavor;
};

/**
 * Get the options of a specified flavor. Returns undefined if the flavor was not found
 * @param {string} name Name of the flavor
 * @returns {{}|undefined}
 */
showdown.getFlavorOptions = function (name) {
  'use strict';
  if (flavor.hasOwnProperty(name)) {
    return flavor[name];
  }
};

/**
 * Get the default options
 * @static
 * @param {boolean} [simple=true]
 * @returns {{}}
 */
showdown.getDefaultOptions = function (simple) {
  'use strict';
  return getDefaultOpts(simple);
};

/**
 * Get or set a subParser
 *
 * subParser(name)       - Get a registered subParser
 * subParser(name, func) - Register a subParser
 * @static
 * @param {string} name
 * @param {function} [func]
 * @returns {*}
 */
showdown.subParser = function (name, func) {
  'use strict';
  if (showdown.helper.isString(name)) {
    if (typeof func !== 'undefined') {
      parsers[name] = func;
    } else {
      if (parsers.hasOwnProperty(name)) {
        return parsers[name];
      } else {
        throw Error('SubParser named ' + name + ' not registered!');
      }
    }
  }
};

/**
 * Gets or registers an extension
 * @static
 * @param {string} name
 * @param {object|function=} ext
 * @returns {*}
 */
showdown.extension = function (name, ext) {
  'use strict';

  if (!showdown.helper.isString(name)) {
    throw Error('Extension \'name\' must be a string');
  }

  name = showdown.helper.stdExtName(name);

  // Getter
  if (showdown.helper.isUndefined(ext)) {
    if (!extensions.hasOwnProperty(name)) {
      throw Error('Extension named ' + name + ' is not registered!');
    }
    return extensions[name];

    // Setter
  } else {
    // Expand extension if it's wrapped in a function
    if (typeof ext === 'function') {
      ext = ext();
    }

    // Ensure extension is an array
    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }

    var validExtension = validate(ext, name);

    if (validExtension.valid) {
      extensions[name] = ext;
    } else {
      throw Error(validExtension.error);
    }
  }
};

/**
 * Gets all extensions registered
 * @returns {{}}
 */
showdown.getAllExtensions = function () {
  'use strict';
  return extensions;
};

/**
 * Remove an extension
 * @param {string} name
 */
showdown.removeExtension = function (name) {
  'use strict';
  delete extensions[name];
};

/**
 * Removes all extensions
 */
showdown.resetExtensions = function () {
  'use strict';
  extensions = {};
};

/**
 * Validate extension
 * @param {array} extension
 * @param {string} name
 * @returns {{valid: boolean, error: string}}
 */
function validate (extension, name) {
  'use strict';

  var errMsg = (name) ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
      ret = {
        valid: true,
        error: ''
      };

  if (!showdown.helper.isArray(extension)) {
    extension = [extension];
  }

  for (var i = 0; i < extension.length; ++i) {
    var baseMsg = errMsg + ' sub-extension ' + i + ': ',
        ext = extension[i];
    if (typeof ext !== 'object') {
      ret.valid = false;
      ret.error = baseMsg + 'must be an object, but ' + typeof ext + ' given';
      return ret;
    }

    if (!showdown.helper.isString(ext.type)) {
      ret.valid = false;
      ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + ' given';
      return ret;
    }

    var type = ext.type = ext.type.toLowerCase();

    // normalize extension type
    if (type === 'language') {
      type = ext.type = 'lang';
    }

    if (type === 'html') {
      type = ext.type = 'output';
    }

    if (type !== 'lang' && type !== 'output' && type !== 'listener') {
      ret.valid = false;
      ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
      return ret;
    }

    if (type === 'listener') {
      if (showdown.helper.isUndefined(ext.listeners)) {
        ret.valid = false;
        ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
        return ret;
      }
    } else {
      if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
        ret.valid = false;
        ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
        return ret;
      }
    }

    if (ext.listeners) {
      if (typeof ext.listeners !== 'object') {
        ret.valid = false;
        ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + ' given';
        return ret;
      }
      for (var ln in ext.listeners) {
        if (ext.listeners.hasOwnProperty(ln)) {
          if (typeof ext.listeners[ln] !== 'function') {
            ret.valid = false;
            ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln +
              ' must be a function but ' + typeof ext.listeners[ln] + ' given';
            return ret;
          }
        }
      }
    }

    if (ext.filter) {
      if (typeof ext.filter !== 'function') {
        ret.valid = false;
        ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + ' given';
        return ret;
      }
    } else if (ext.regex) {
      if (showdown.helper.isString(ext.regex)) {
        ext.regex = new RegExp(ext.regex, 'g');
      }
      if (!(ext.regex instanceof RegExp)) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + ' given';
        return ret;
      }
      if (showdown.helper.isUndefined(ext.replace)) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
        return ret;
      }
    }
  }
  return ret;
}

/**
 * Validate extension
 * @param {object} ext
 * @returns {boolean}
 */
showdown.validateExtension = function (ext) {
  'use strict';

  var validateExtension = validate(ext, null);
  if (!validateExtension.valid) {
    console.warn(validateExtension.error);
    return false;
  }
  return true;
};

/**
 * showdownjs helper functions
 */

if (!showdown.hasOwnProperty('helper')) {
  showdown.helper = {};
}

/**
 * Check if var is string
 * @static
 * @param {string} a
 * @returns {boolean}
 */
showdown.helper.isString = function (a) {
  'use strict';
  return (typeof a === 'string' || a instanceof String);
};

/**
 * Check if var is a function
 * @static
 * @param {*} a
 * @returns {boolean}
 */
showdown.helper.isFunction = function (a) {
  'use strict';
  var getType = {};
  return a && getType.toString.call(a) === '[object Function]';
};

/**
 * isArray helper function
 * @static
 * @param {*} a
 * @returns {boolean}
 */
showdown.helper.isArray = function (a) {
  'use strict';
  return Array.isArray(a);
};

/**
 * Check if value is undefined
 * @static
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 */
showdown.helper.isUndefined = function (value) {
  'use strict';
  return typeof value === 'undefined';
};

/**
 * ForEach helper function
 * Iterates over Arrays and Objects (own properties only)
 * @static
 * @param {*} obj
 * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
 */
showdown.helper.forEach = function (obj, callback) {
  'use strict';
  // check if obj is defined
  if (showdown.helper.isUndefined(obj)) {
    throw new Error('obj param is required');
  }

  if (showdown.helper.isUndefined(callback)) {
    throw new Error('callback param is required');
  }

  if (!showdown.helper.isFunction(callback)) {
    throw new Error('callback param must be a function/closure');
  }

  if (typeof obj.forEach === 'function') {
    obj.forEach(callback);
  } else if (showdown.helper.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj);
    }
  } else if (typeof (obj) === 'object') {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        callback(obj[prop], prop, obj);
      }
    }
  } else {
    throw new Error('obj does not seem to be an array or an iterable object');
  }
};

/**
 * Standardidize extension name
 * @static
 * @param {string} s extension name
 * @returns {string}
 */
showdown.helper.stdExtName = function (s) {
  'use strict';
  return s.replace(/[_?*+\/\\.^-]/g, '').replace(/\s/g, '').toLowerCase();
};

function escapeCharactersCallback (wholeMatch, m1) {
  'use strict';
  var charCodeToEscape = m1.charCodeAt(0);
  return '¨E' + charCodeToEscape + 'E';
}

/**
 * Callback used to escape characters when passing through String.replace
 * @static
 * @param {string} wholeMatch
 * @param {string} m1
 * @returns {string}
 */
showdown.helper.escapeCharactersCallback = escapeCharactersCallback;

/**
 * Escape characters in a string
 * @static
 * @param {string} text
 * @param {string} charsToEscape
 * @param {boolean} afterBackslash
 * @returns {XML|string|void|*}
 */
showdown.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
  'use strict';
  // First we have to escape the escape characters so that
  // we can build a character class out of them
  var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';

  if (afterBackslash) {
    regexString = '\\\\' + regexString;
  }

  var regex = new RegExp(regexString, 'g');
  text = text.replace(regex, escapeCharactersCallback);

  return text;
};

var rgxFindMatchPos = function (str, left, right, flags) {
  'use strict';
  var f = flags || '',
      g = f.indexOf('g') > -1,
      x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
      l = new RegExp(left, f.replace(/g/g, '')),
      pos = [],
      t, s, m, start, end;

  do {
    t = 0;
    while ((m = x.exec(str))) {
      if (l.test(m[0])) {
        if (!(t++)) {
          s = x.lastIndex;
          start = s - m[0].length;
        }
      } else if (t) {
        if (!--t) {
          end = m.index + m[0].length;
          var obj = {
            left: {start: start, end: s},
            match: {start: s, end: m.index},
            right: {start: m.index, end: end},
            wholeMatch: {start: start, end: end}
          };
          pos.push(obj);
          if (!g) {
            return pos;
          }
        }
      }
    }
  } while (t && (x.lastIndex = s));

  return pos;
};

/**
 * matchRecursiveRegExp
 *
 * (c) 2007 Steven Levithan <stevenlevithan.com>
 * MIT License
 *
 * Accepts a string to search, a left and right format delimiter
 * as regex patterns, and optional regex flags. Returns an array
 * of matches, allowing nested instances of left/right delimiters.
 * Use the "g" flag to return all matches, otherwise only the
 * first is returned. Be careful to ensure that the left and
 * right format delimiters produce mutually exclusive matches.
 * Backreferences are not supported within the right delimiter
 * due to how it is internally combined with the left delimiter.
 * When matching strings whose format delimiters are unbalanced
 * to the left or right, the output is intentionally as a
 * conventional regex library with recursion support would
 * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
 * "<" and ">" as the delimiters (both strings contain a single,
 * balanced instance of "<x>").
 *
 * examples:
 * matchRecursiveRegExp("test", "\\(", "\\)")
 * returns: []
 * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
 * returns: ["t<<e>><s>", ""]
 * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
 * returns: ["test"]
 */
showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {
  'use strict';

  var matchPos = rgxFindMatchPos (str, left, right, flags),
      results = [];

  for (var i = 0; i < matchPos.length; ++i) {
    results.push([
      str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
      str.slice(matchPos[i].match.start, matchPos[i].match.end),
      str.slice(matchPos[i].left.start, matchPos[i].left.end),
      str.slice(matchPos[i].right.start, matchPos[i].right.end)
    ]);
  }
  return results;
};

/**
 *
 * @param {string} str
 * @param {string|function} replacement
 * @param {string} left
 * @param {string} right
 * @param {string} flags
 * @returns {string}
 */
showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {
  'use strict';

  if (!showdown.helper.isFunction(replacement)) {
    var repStr = replacement;
    replacement = function () {
      return repStr;
    };
  }

  var matchPos = rgxFindMatchPos(str, left, right, flags),
      finalStr = str,
      lng = matchPos.length;

  if (lng > 0) {
    var bits = [];
    if (matchPos[0].wholeMatch.start !== 0) {
      bits.push(str.slice(0, matchPos[0].wholeMatch.start));
    }
    for (var i = 0; i < lng; ++i) {
      bits.push(
        replacement(
          str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
          str.slice(matchPos[i].match.start, matchPos[i].match.end),
          str.slice(matchPos[i].left.start, matchPos[i].left.end),
          str.slice(matchPos[i].right.start, matchPos[i].right.end)
        )
      );
      if (i < lng - 1) {
        bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
      }
    }
    if (matchPos[lng - 1].wholeMatch.end < str.length) {
      bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
    }
    finalStr = bits.join('');
  }
  return finalStr;
};

/**
 * Returns the index within the passed String object of the first occurrence of the specified regex,
 * starting the search at fromIndex. Returns -1 if the value is not found.
 *
 * @param {string} str string to search
 * @param {RegExp} regex Regular expression to search
 * @param {int} [fromIndex = 0] Index to start the search
 * @returns {Number}
 * @throws InvalidArgumentError
 */
showdown.helper.regexIndexOf = function (str, regex, fromIndex) {
  'use strict';
  if (!showdown.helper.isString(str)) {
    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
  }
  if (regex instanceof RegExp === false) {
    throw 'InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp';
  }
  var indexOf = str.substring(fromIndex || 0).search(regex);
  return (indexOf >= 0) ? (indexOf + (fromIndex || 0)) : indexOf;
};

/**
 * Splits the passed string object at the defined index, and returns an array composed of the two substrings
 * @param {string} str string to split
 * @param {int} index index to split string at
 * @returns {[string,string]}
 * @throws InvalidArgumentError
 */
showdown.helper.splitAtIndex = function (str, index) {
  'use strict';
  if (!showdown.helper.isString(str)) {
    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
  }
  return [str.substring(0, index), str.substring(index)];
};

/**
 * Obfuscate an e-mail address through the use of Character Entities,
 * transforming ASCII characters into their equivalent decimal or hex entities.
 *
 * Since it has a random component, subsequent calls to this function produce different results
 *
 * @param {string} mail
 * @returns {string}
 */
showdown.helper.encodeEmailAddress = function (mail) {
  'use strict';
  var encode = [
    function (ch) {
      return '&#' + ch.charCodeAt(0) + ';';
    },
    function (ch) {
      return '&#x' + ch.charCodeAt(0).toString(16) + ';';
    },
    function (ch) {
      return ch;
    }
  ];

  mail = mail.replace(/./g, function (ch) {
    if (ch === '@') {
      // this *must* be encoded. I insist.
      ch = encode[Math.floor(Math.random() * 2)](ch);
    } else {
      var r = Math.random();
      // roughly 10% raw, 45% hex, 45% dec
      ch = (
        r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch)
      );
    }
    return ch;
  });

  return mail;
};

/**
 * POLYFILLS
 */
// use this instead of builtin is undefined for IE8 compatibility
if (typeof(console) === 'undefined') {
  console = {
    warn: function (msg) {
      'use strict';
      alert(msg);
    },
    log: function (msg) {
      'use strict';
      alert(msg);
    },
    error: function (msg) {
      'use strict';
      throw msg;
    }
  };
}

/**
 * Common regexes.
 * We declare some common regexes to improve performance
 */
showdown.helper.regexes = {
  asteriskDashAndColon: /([*_:~])/g
};

/**
 * EMOJIS LIST
 */
showdown.helper.emojis = {
  '+1':'\ud83d\udc4d',
  '-1':'\ud83d\udc4e',
  '100':'\ud83d\udcaf',
  '1234':'\ud83d\udd22',
  '1st_place_medal':'\ud83e\udd47',
  '2nd_place_medal':'\ud83e\udd48',
  '3rd_place_medal':'\ud83e\udd49',
  '8ball':'\ud83c\udfb1',
  'a':'\ud83c\udd70\ufe0f',
  'ab':'\ud83c\udd8e',
  'abc':'\ud83d\udd24',
  'abcd':'\ud83d\udd21',
  'accept':'\ud83c\ude51',
  'aerial_tramway':'\ud83d\udea1',
  'airplane':'\u2708\ufe0f',
  'alarm_clock':'\u23f0',
  'alembic':'\u2697\ufe0f',
  'alien':'\ud83d\udc7d',
  'ambulance':'\ud83d\ude91',
  'amphora':'\ud83c\udffa',
  'anchor':'\u2693\ufe0f',
  'angel':'\ud83d\udc7c',
  'anger':'\ud83d\udca2',
  'angry':'\ud83d\ude20',
  'anguished':'\ud83d\ude27',
  'ant':'\ud83d\udc1c',
  'apple':'\ud83c\udf4e',
  'aquarius':'\u2652\ufe0f',
  'aries':'\u2648\ufe0f',
  'arrow_backward':'\u25c0\ufe0f',
  'arrow_double_down':'\u23ec',
  'arrow_double_up':'\u23eb',
  'arrow_down':'\u2b07\ufe0f',
  'arrow_down_small':'\ud83d\udd3d',
  'arrow_forward':'\u25b6\ufe0f',
  'arrow_heading_down':'\u2935\ufe0f',
  'arrow_heading_up':'\u2934\ufe0f',
  'arrow_left':'\u2b05\ufe0f',
  'arrow_lower_left':'\u2199\ufe0f',
  'arrow_lower_right':'\u2198\ufe0f',
  'arrow_right':'\u27a1\ufe0f',
  'arrow_right_hook':'\u21aa\ufe0f',
  'arrow_up':'\u2b06\ufe0f',
  'arrow_up_down':'\u2195\ufe0f',
  'arrow_up_small':'\ud83d\udd3c',
  'arrow_upper_left':'\u2196\ufe0f',
  'arrow_upper_right':'\u2197\ufe0f',
  'arrows_clockwise':'\ud83d\udd03',
  'arrows_counterclockwise':'\ud83d\udd04',
  'art':'\ud83c\udfa8',
  'articulated_lorry':'\ud83d\ude9b',
  'artificial_satellite':'\ud83d\udef0',
  'astonished':'\ud83d\ude32',
  'athletic_shoe':'\ud83d\udc5f',
  'atm':'\ud83c\udfe7',
  'atom_symbol':'\u269b\ufe0f',
  'avocado':'\ud83e\udd51',
  'b':'\ud83c\udd71\ufe0f',
  'baby':'\ud83d\udc76',
  'baby_bottle':'\ud83c\udf7c',
  'baby_chick':'\ud83d\udc24',
  'baby_symbol':'\ud83d\udebc',
  'back':'\ud83d\udd19',
  'bacon':'\ud83e\udd53',
  'badminton':'\ud83c\udff8',
  'baggage_claim':'\ud83d\udec4',
  'baguette_bread':'\ud83e\udd56',
  'balance_scale':'\u2696\ufe0f',
  'balloon':'\ud83c\udf88',
  'ballot_box':'\ud83d\uddf3',
  'ballot_box_with_check':'\u2611\ufe0f',
  'bamboo':'\ud83c\udf8d',
  'banana':'\ud83c\udf4c',
  'bangbang':'\u203c\ufe0f',
  'bank':'\ud83c\udfe6',
  'bar_chart':'\ud83d\udcca',
  'barber':'\ud83d\udc88',
  'baseball':'\u26be\ufe0f',
  'basketball':'\ud83c\udfc0',
  'basketball_man':'\u26f9\ufe0f',
  'basketball_woman':'\u26f9\ufe0f&zwj;\u2640\ufe0f',
  'bat':'\ud83e\udd87',
  'bath':'\ud83d\udec0',
  'bathtub':'\ud83d\udec1',
  'battery':'\ud83d\udd0b',
  'beach_umbrella':'\ud83c\udfd6',
  'bear':'\ud83d\udc3b',
  'bed':'\ud83d\udecf',
  'bee':'\ud83d\udc1d',
  'beer':'\ud83c\udf7a',
  'beers':'\ud83c\udf7b',
  'beetle':'\ud83d\udc1e',
  'beginner':'\ud83d\udd30',
  'bell':'\ud83d\udd14',
  'bellhop_bell':'\ud83d\udece',
  'bento':'\ud83c\udf71',
  'biking_man':'\ud83d\udeb4',
  'bike':'\ud83d\udeb2',
  'biking_woman':'\ud83d\udeb4&zwj;\u2640\ufe0f',
  'bikini':'\ud83d\udc59',
  'biohazard':'\u2623\ufe0f',
  'bird':'\ud83d\udc26',
  'birthday':'\ud83c\udf82',
  'black_circle':'\u26ab\ufe0f',
  'black_flag':'\ud83c\udff4',
  'black_heart':'\ud83d\udda4',
  'black_joker':'\ud83c\udccf',
  'black_large_square':'\u2b1b\ufe0f',
  'black_medium_small_square':'\u25fe\ufe0f',
  'black_medium_square':'\u25fc\ufe0f',
  'black_nib':'\u2712\ufe0f',
  'black_small_square':'\u25aa\ufe0f',
  'black_square_button':'\ud83d\udd32',
  'blonde_man':'\ud83d\udc71',
  'blonde_woman':'\ud83d\udc71&zwj;\u2640\ufe0f',
  'blossom':'\ud83c\udf3c',
  'blowfish':'\ud83d\udc21',
  'blue_book':'\ud83d\udcd8',
  'blue_car':'\ud83d\ude99',
  'blue_heart':'\ud83d\udc99',
  'blush':'\ud83d\ude0a',
  'boar':'\ud83d\udc17',
  'boat':'\u26f5\ufe0f',
  'bomb':'\ud83d\udca3',
  'book':'\ud83d\udcd6',
  'bookmark':'\ud83d\udd16',
  'bookmark_tabs':'\ud83d\udcd1',
  'books':'\ud83d\udcda',
  'boom':'\ud83d\udca5',
  'boot':'\ud83d\udc62',
  'bouquet':'\ud83d\udc90',
  'bowing_man':'\ud83d\ude47',
  'bow_and_arrow':'\ud83c\udff9',
  'bowing_woman':'\ud83d\ude47&zwj;\u2640\ufe0f',
  'bowling':'\ud83c\udfb3',
  'boxing_glove':'\ud83e\udd4a',
  'boy':'\ud83d\udc66',
  'bread':'\ud83c\udf5e',
  'bride_with_veil':'\ud83d\udc70',
  'bridge_at_night':'\ud83c\udf09',
  'briefcase':'\ud83d\udcbc',
  'broken_heart':'\ud83d\udc94',
  'bug':'\ud83d\udc1b',
  'building_construction':'\ud83c\udfd7',
  'bulb':'\ud83d\udca1',
  'bullettrain_front':'\ud83d\ude85',
  'bullettrain_side':'\ud83d\ude84',
  'burrito':'\ud83c\udf2f',
  'bus':'\ud83d\ude8c',
  'business_suit_levitating':'\ud83d\udd74',
  'busstop':'\ud83d\ude8f',
  'bust_in_silhouette':'\ud83d\udc64',
  'busts_in_silhouette':'\ud83d\udc65',
  'butterfly':'\ud83e\udd8b',
  'cactus':'\ud83c\udf35',
  'cake':'\ud83c\udf70',
  'calendar':'\ud83d\udcc6',
  'call_me_hand':'\ud83e\udd19',
  'calling':'\ud83d\udcf2',
  'camel':'\ud83d\udc2b',
  'camera':'\ud83d\udcf7',
  'camera_flash':'\ud83d\udcf8',
  'camping':'\ud83c\udfd5',
  'cancer':'\u264b\ufe0f',
  'candle':'\ud83d\udd6f',
  'candy':'\ud83c\udf6c',
  'canoe':'\ud83d\udef6',
  'capital_abcd':'\ud83d\udd20',
  'capricorn':'\u2651\ufe0f',
  'car':'\ud83d\ude97',
  'card_file_box':'\ud83d\uddc3',
  'card_index':'\ud83d\udcc7',
  'card_index_dividers':'\ud83d\uddc2',
  'carousel_horse':'\ud83c\udfa0',
  'carrot':'\ud83e\udd55',
  'cat':'\ud83d\udc31',
  'cat2':'\ud83d\udc08',
  'cd':'\ud83d\udcbf',
  'chains':'\u26d3',
  'champagne':'\ud83c\udf7e',
  'chart':'\ud83d\udcb9',
  'chart_with_downwards_trend':'\ud83d\udcc9',
  'chart_with_upwards_trend':'\ud83d\udcc8',
  'checkered_flag':'\ud83c\udfc1',
  'cheese':'\ud83e\uddc0',
  'cherries':'\ud83c\udf52',
  'cherry_blossom':'\ud83c\udf38',
  'chestnut':'\ud83c\udf30',
  'chicken':'\ud83d\udc14',
  'children_crossing':'\ud83d\udeb8',
  'chipmunk':'\ud83d\udc3f',
  'chocolate_bar':'\ud83c\udf6b',
  'christmas_tree':'\ud83c\udf84',
  'church':'\u26ea\ufe0f',
  'cinema':'\ud83c\udfa6',
  'circus_tent':'\ud83c\udfaa',
  'city_sunrise':'\ud83c\udf07',
  'city_sunset':'\ud83c\udf06',
  'cityscape':'\ud83c\udfd9',
  'cl':'\ud83c\udd91',
  'clamp':'\ud83d\udddc',
  'clap':'\ud83d\udc4f',
  'clapper':'\ud83c\udfac',
  'classical_building':'\ud83c\udfdb',
  'clinking_glasses':'\ud83e\udd42',
  'clipboard':'\ud83d\udccb',
  'clock1':'\ud83d\udd50',
  'clock10':'\ud83d\udd59',
  'clock1030':'\ud83d\udd65',
  'clock11':'\ud83d\udd5a',
  'clock1130':'\ud83d\udd66',
  'clock12':'\ud83d\udd5b',
  'clock1230':'\ud83d\udd67',
  'clock130':'\ud83d\udd5c',
  'clock2':'\ud83d\udd51',
  'clock230':'\ud83d\udd5d',
  'clock3':'\ud83d\udd52',
  'clock330':'\ud83d\udd5e',
  'clock4':'\ud83d\udd53',
  'clock430':'\ud83d\udd5f',
  'clock5':'\ud83d\udd54',
  'clock530':'\ud83d\udd60',
  'clock6':'\ud83d\udd55',
  'clock630':'\ud83d\udd61',
  'clock7':'\ud83d\udd56',
  'clock730':'\ud83d\udd62',
  'clock8':'\ud83d\udd57',
  'clock830':'\ud83d\udd63',
  'clock9':'\ud83d\udd58',
  'clock930':'\ud83d\udd64',
  'closed_book':'\ud83d\udcd5',
  'closed_lock_with_key':'\ud83d\udd10',
  'closed_umbrella':'\ud83c\udf02',
  'cloud':'\u2601\ufe0f',
  'cloud_with_lightning':'\ud83c\udf29',
  'cloud_with_lightning_and_rain':'\u26c8',
  'cloud_with_rain':'\ud83c\udf27',
  'cloud_with_snow':'\ud83c\udf28',
  'clown_face':'\ud83e\udd21',
  'clubs':'\u2663\ufe0f',
  'cocktail':'\ud83c\udf78',
  'coffee':'\u2615\ufe0f',
  'coffin':'\u26b0\ufe0f',
  'cold_sweat':'\ud83d\ude30',
  'comet':'\u2604\ufe0f',
  'computer':'\ud83d\udcbb',
  'computer_mouse':'\ud83d\uddb1',
  'confetti_ball':'\ud83c\udf8a',
  'confounded':'\ud83d\ude16',
  'confused':'\ud83d\ude15',
  'congratulations':'\u3297\ufe0f',
  'construction':'\ud83d\udea7',
  'construction_worker_man':'\ud83d\udc77',
  'construction_worker_woman':'\ud83d\udc77&zwj;\u2640\ufe0f',
  'control_knobs':'\ud83c\udf9b',
  'convenience_store':'\ud83c\udfea',
  'cookie':'\ud83c\udf6a',
  'cool':'\ud83c\udd92',
  'policeman':'\ud83d\udc6e',
  'copyright':'\u00a9\ufe0f',
  'corn':'\ud83c\udf3d',
  'couch_and_lamp':'\ud83d\udecb',
  'couple':'\ud83d\udc6b',
  'couple_with_heart_woman_man':'\ud83d\udc91',
  'couple_with_heart_man_man':'\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc68',
  'couple_with_heart_woman_woman':'\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc69',
  'couplekiss_man_man':'\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc68',
  'couplekiss_man_woman':'\ud83d\udc8f',
  'couplekiss_woman_woman':'\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc69',
  'cow':'\ud83d\udc2e',
  'cow2':'\ud83d\udc04',
  'cowboy_hat_face':'\ud83e\udd20',
  'crab':'\ud83e\udd80',
  'crayon':'\ud83d\udd8d',
  'credit_card':'\ud83d\udcb3',
  'crescent_moon':'\ud83c\udf19',
  'cricket':'\ud83c\udfcf',
  'crocodile':'\ud83d\udc0a',
  'croissant':'\ud83e\udd50',
  'crossed_fingers':'\ud83e\udd1e',
  'crossed_flags':'\ud83c\udf8c',
  'crossed_swords':'\u2694\ufe0f',
  'crown':'\ud83d\udc51',
  'cry':'\ud83d\ude22',
  'crying_cat_face':'\ud83d\ude3f',
  'crystal_ball':'\ud83d\udd2e',
  'cucumber':'\ud83e\udd52',
  'cupid':'\ud83d\udc98',
  'curly_loop':'\u27b0',
  'currency_exchange':'\ud83d\udcb1',
  'curry':'\ud83c\udf5b',
  'custard':'\ud83c\udf6e',
  'customs':'\ud83d\udec3',
  'cyclone':'\ud83c\udf00',
  'dagger':'\ud83d\udde1',
  'dancer':'\ud83d\udc83',
  'dancing_women':'\ud83d\udc6f',
  'dancing_men':'\ud83d\udc6f&zwj;\u2642\ufe0f',
  'dango':'\ud83c\udf61',
  'dark_sunglasses':'\ud83d\udd76',
  'dart':'\ud83c\udfaf',
  'dash':'\ud83d\udca8',
  'date':'\ud83d\udcc5',
  'deciduous_tree':'\ud83c\udf33',
  'deer':'\ud83e\udd8c',
  'department_store':'\ud83c\udfec',
  'derelict_house':'\ud83c\udfda',
  'desert':'\ud83c\udfdc',
  'desert_island':'\ud83c\udfdd',
  'desktop_computer':'\ud83d\udda5',
  'male_detective':'\ud83d\udd75\ufe0f',
  'diamond_shape_with_a_dot_inside':'\ud83d\udca0',
  'diamonds':'\u2666\ufe0f',
  'disappointed':'\ud83d\ude1e',
  'disappointed_relieved':'\ud83d\ude25',
  'dizzy':'\ud83d\udcab',
  'dizzy_face':'\ud83d\ude35',
  'do_not_litter':'\ud83d\udeaf',
  'dog':'\ud83d\udc36',
  'dog2':'\ud83d\udc15',
  'dollar':'\ud83d\udcb5',
  'dolls':'\ud83c\udf8e',
  'dolphin':'\ud83d\udc2c',
  'door':'\ud83d\udeaa',
  'doughnut':'\ud83c\udf69',
  'dove':'\ud83d\udd4a',
  'dragon':'\ud83d\udc09',
  'dragon_face':'\ud83d\udc32',
  'dress':'\ud83d\udc57',
  'dromedary_camel':'\ud83d\udc2a',
  'drooling_face':'\ud83e\udd24',
  'droplet':'\ud83d\udca7',
  'drum':'\ud83e\udd41',
  'duck':'\ud83e\udd86',
  'dvd':'\ud83d\udcc0',
  'e-mail':'\ud83d\udce7',
  'eagle':'\ud83e\udd85',
  'ear':'\ud83d\udc42',
  'ear_of_rice':'\ud83c\udf3e',
  'earth_africa':'\ud83c\udf0d',
  'earth_americas':'\ud83c\udf0e',
  'earth_asia':'\ud83c\udf0f',
  'egg':'\ud83e\udd5a',
  'eggplant':'\ud83c\udf46',
  'eight_pointed_black_star':'\u2734\ufe0f',
  'eight_spoked_asterisk':'\u2733\ufe0f',
  'electric_plug':'\ud83d\udd0c',
  'elephant':'\ud83d\udc18',
  'email':'\u2709\ufe0f',
  'end':'\ud83d\udd1a',
  'envelope_with_arrow':'\ud83d\udce9',
  'euro':'\ud83d\udcb6',
  'european_castle':'\ud83c\udff0',
  'european_post_office':'\ud83c\udfe4',
  'evergreen_tree':'\ud83c\udf32',
  'exclamation':'\u2757\ufe0f',
  'expressionless':'\ud83d\ude11',
  'eye':'\ud83d\udc41',
  'eye_speech_bubble':'\ud83d\udc41&zwj;\ud83d\udde8',
  'eyeglasses':'\ud83d\udc53',
  'eyes':'\ud83d\udc40',
  'face_with_head_bandage':'\ud83e\udd15',
  'face_with_thermometer':'\ud83e\udd12',
  'fist_oncoming':'\ud83d\udc4a',
  'factory':'\ud83c\udfed',
  'fallen_leaf':'\ud83c\udf42',
  'family_man_woman_boy':'\ud83d\udc6a',
  'family_man_boy':'\ud83d\udc68&zwj;\ud83d\udc66',
  'family_man_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_man_girl':'\ud83d\udc68&zwj;\ud83d\udc67',
  'family_man_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_man_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'family_man_man_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66',
  'family_man_man_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_man_man_girl':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67',
  'family_man_man_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_man_man_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'family_man_woman_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_man_woman_girl':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67',
  'family_man_woman_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_man_woman_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'family_woman_boy':'\ud83d\udc69&zwj;\ud83d\udc66',
  'family_woman_boy_boy':'\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_woman_girl':'\ud83d\udc69&zwj;\ud83d\udc67',
  'family_woman_girl_boy':'\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_woman_girl_girl':'\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'family_woman_woman_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66',
  'family_woman_woman_boy_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_woman_woman_girl':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67',
  'family_woman_woman_girl_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_woman_woman_girl_girl':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'fast_forward':'\u23e9',
  'fax':'\ud83d\udce0',
  'fearful':'\ud83d\ude28',
  'feet':'\ud83d\udc3e',
  'female_detective':'\ud83d\udd75\ufe0f&zwj;\u2640\ufe0f',
  'ferris_wheel':'\ud83c\udfa1',
  'ferry':'\u26f4',
  'field_hockey':'\ud83c\udfd1',
  'file_cabinet':'\ud83d\uddc4',
  'file_folder':'\ud83d\udcc1',
  'film_projector':'\ud83d\udcfd',
  'film_strip':'\ud83c\udf9e',
  'fire':'\ud83d\udd25',
  'fire_engine':'\ud83d\ude92',
  'fireworks':'\ud83c\udf86',
  'first_quarter_moon':'\ud83c\udf13',
  'first_quarter_moon_with_face':'\ud83c\udf1b',
  'fish':'\ud83d\udc1f',
  'fish_cake':'\ud83c\udf65',
  'fishing_pole_and_fish':'\ud83c\udfa3',
  'fist_raised':'\u270a',
  'fist_left':'\ud83e\udd1b',
  'fist_right':'\ud83e\udd1c',
  'flags':'\ud83c\udf8f',
  'flashlight':'\ud83d\udd26',
  'fleur_de_lis':'\u269c\ufe0f',
  'flight_arrival':'\ud83d\udeec',
  'flight_departure':'\ud83d\udeeb',
  'floppy_disk':'\ud83d\udcbe',
  'flower_playing_cards':'\ud83c\udfb4',
  'flushed':'\ud83d\ude33',
  'fog':'\ud83c\udf2b',
  'foggy':'\ud83c\udf01',
  'football':'\ud83c\udfc8',
  'footprints':'\ud83d\udc63',
  'fork_and_knife':'\ud83c\udf74',
  'fountain':'\u26f2\ufe0f',
  'fountain_pen':'\ud83d\udd8b',
  'four_leaf_clover':'\ud83c\udf40',
  'fox_face':'\ud83e\udd8a',
  'framed_picture':'\ud83d\uddbc',
  'free':'\ud83c\udd93',
  'fried_egg':'\ud83c\udf73',
  'fried_shrimp':'\ud83c\udf64',
  'fries':'\ud83c\udf5f',
  'frog':'\ud83d\udc38',
  'frowning':'\ud83d\ude26',
  'frowning_face':'\u2639\ufe0f',
  'frowning_man':'\ud83d\ude4d&zwj;\u2642\ufe0f',
  'frowning_woman':'\ud83d\ude4d',
  'middle_finger':'\ud83d\udd95',
  'fuelpump':'\u26fd\ufe0f',
  'full_moon':'\ud83c\udf15',
  'full_moon_with_face':'\ud83c\udf1d',
  'funeral_urn':'\u26b1\ufe0f',
  'game_die':'\ud83c\udfb2',
  'gear':'\u2699\ufe0f',
  'gem':'\ud83d\udc8e',
  'gemini':'\u264a\ufe0f',
  'ghost':'\ud83d\udc7b',
  'gift':'\ud83c\udf81',
  'gift_heart':'\ud83d\udc9d',
  'girl':'\ud83d\udc67',
  'globe_with_meridians':'\ud83c\udf10',
  'goal_net':'\ud83e\udd45',
  'goat':'\ud83d\udc10',
  'golf':'\u26f3\ufe0f',
  'golfing_man':'\ud83c\udfcc\ufe0f',
  'golfing_woman':'\ud83c\udfcc\ufe0f&zwj;\u2640\ufe0f',
  'gorilla':'\ud83e\udd8d',
  'grapes':'\ud83c\udf47',
  'green_apple':'\ud83c\udf4f',
  'green_book':'\ud83d\udcd7',
  'green_heart':'\ud83d\udc9a',
  'green_salad':'\ud83e\udd57',
  'grey_exclamation':'\u2755',
  'grey_question':'\u2754',
  'grimacing':'\ud83d\ude2c',
  'grin':'\ud83d\ude01',
  'grinning':'\ud83d\ude00',
  'guardsman':'\ud83d\udc82',
  'guardswoman':'\ud83d\udc82&zwj;\u2640\ufe0f',
  'guitar':'\ud83c\udfb8',
  'gun':'\ud83d\udd2b',
  'haircut_woman':'\ud83d\udc87',
  'haircut_man':'\ud83d\udc87&zwj;\u2642\ufe0f',
  'hamburger':'\ud83c\udf54',
  'hammer':'\ud83d\udd28',
  'hammer_and_pick':'\u2692',
  'hammer_and_wrench':'\ud83d\udee0',
  'hamster':'\ud83d\udc39',
  'hand':'\u270b',
  'handbag':'\ud83d\udc5c',
  'handshake':'\ud83e\udd1d',
  'hankey':'\ud83d\udca9',
  'hatched_chick':'\ud83d\udc25',
  'hatching_chick':'\ud83d\udc23',
  'headphones':'\ud83c\udfa7',
  'hear_no_evil':'\ud83d\ude49',
  'heart':'\u2764\ufe0f',
  'heart_decoration':'\ud83d\udc9f',
  'heart_eyes':'\ud83d\ude0d',
  'heart_eyes_cat':'\ud83d\ude3b',
  'heartbeat':'\ud83d\udc93',
  'heartpulse':'\ud83d\udc97',
  'hearts':'\u2665\ufe0f',
  'heavy_check_mark':'\u2714\ufe0f',
  'heavy_division_sign':'\u2797',
  'heavy_dollar_sign':'\ud83d\udcb2',
  'heavy_heart_exclamation':'\u2763\ufe0f',
  'heavy_minus_sign':'\u2796',
  'heavy_multiplication_x':'\u2716\ufe0f',
  'heavy_plus_sign':'\u2795',
  'helicopter':'\ud83d\ude81',
  'herb':'\ud83c\udf3f',
  'hibiscus':'\ud83c\udf3a',
  'high_brightness':'\ud83d\udd06',
  'high_heel':'\ud83d\udc60',
  'hocho':'\ud83d\udd2a',
  'hole':'\ud83d\udd73',
  'honey_pot':'\ud83c\udf6f',
  'horse':'\ud83d\udc34',
  'horse_racing':'\ud83c\udfc7',
  'hospital':'\ud83c\udfe5',
  'hot_pepper':'\ud83c\udf36',
  'hotdog':'\ud83c\udf2d',
  'hotel':'\ud83c\udfe8',
  'hotsprings':'\u2668\ufe0f',
  'hourglass':'\u231b\ufe0f',
  'hourglass_flowing_sand':'\u23f3',
  'house':'\ud83c\udfe0',
  'house_with_garden':'\ud83c\udfe1',
  'houses':'\ud83c\udfd8',
  'hugs':'\ud83e\udd17',
  'hushed':'\ud83d\ude2f',
  'ice_cream':'\ud83c\udf68',
  'ice_hockey':'\ud83c\udfd2',
  'ice_skate':'\u26f8',
  'icecream':'\ud83c\udf66',
  'id':'\ud83c\udd94',
  'ideograph_advantage':'\ud83c\ude50',
  'imp':'\ud83d\udc7f',
  'inbox_tray':'\ud83d\udce5',
  'incoming_envelope':'\ud83d\udce8',
  'tipping_hand_woman':'\ud83d\udc81',
  'information_source':'\u2139\ufe0f',
  'innocent':'\ud83d\ude07',
  'interrobang':'\u2049\ufe0f',
  'iphone':'\ud83d\udcf1',
  'izakaya_lantern':'\ud83c\udfee',
  'jack_o_lantern':'\ud83c\udf83',
  'japan':'\ud83d\uddfe',
  'japanese_castle':'\ud83c\udfef',
  'japanese_goblin':'\ud83d\udc7a',
  'japanese_ogre':'\ud83d\udc79',
  'jeans':'\ud83d\udc56',
  'joy':'\ud83d\ude02',
  'joy_cat':'\ud83d\ude39',
  'joystick':'\ud83d\udd79',
  'kaaba':'\ud83d\udd4b',
  'key':'\ud83d\udd11',
  'keyboard':'\u2328\ufe0f',
  'keycap_ten':'\ud83d\udd1f',
  'kick_scooter':'\ud83d\udef4',
  'kimono':'\ud83d\udc58',
  'kiss':'\ud83d\udc8b',
  'kissing':'\ud83d\ude17',
  'kissing_cat':'\ud83d\ude3d',
  'kissing_closed_eyes':'\ud83d\ude1a',
  'kissing_heart':'\ud83d\ude18',
  'kissing_smiling_eyes':'\ud83d\ude19',
  'kiwi_fruit':'\ud83e\udd5d',
  'koala':'\ud83d\udc28',
  'koko':'\ud83c\ude01',
  'label':'\ud83c\udff7',
  'large_blue_circle':'\ud83d\udd35',
  'large_blue_diamond':'\ud83d\udd37',
  'large_orange_diamond':'\ud83d\udd36',
  'last_quarter_moon':'\ud83c\udf17',
  'last_quarter_moon_with_face':'\ud83c\udf1c',
  'latin_cross':'\u271d\ufe0f',
  'laughing':'\ud83d\ude06',
  'leaves':'\ud83c\udf43',
  'ledger':'\ud83d\udcd2',
  'left_luggage':'\ud83d\udec5',
  'left_right_arrow':'\u2194\ufe0f',
  'leftwards_arrow_with_hook':'\u21a9\ufe0f',
  'lemon':'\ud83c\udf4b',
  'leo':'\u264c\ufe0f',
  'leopard':'\ud83d\udc06',
  'level_slider':'\ud83c\udf9a',
  'libra':'\u264e\ufe0f',
  'light_rail':'\ud83d\ude88',
  'link':'\ud83d\udd17',
  'lion':'\ud83e\udd81',
  'lips':'\ud83d\udc44',
  'lipstick':'\ud83d\udc84',
  'lizard':'\ud83e\udd8e',
  'lock':'\ud83d\udd12',
  'lock_with_ink_pen':'\ud83d\udd0f',
  'lollipop':'\ud83c\udf6d',
  'loop':'\u27bf',
  'loud_sound':'\ud83d\udd0a',
  'loudspeaker':'\ud83d\udce2',
  'love_hotel':'\ud83c\udfe9',
  'love_letter':'\ud83d\udc8c',
  'low_brightness':'\ud83d\udd05',
  'lying_face':'\ud83e\udd25',
  'm':'\u24c2\ufe0f',
  'mag':'\ud83d\udd0d',
  'mag_right':'\ud83d\udd0e',
  'mahjong':'\ud83c\udc04\ufe0f',
  'mailbox':'\ud83d\udceb',
  'mailbox_closed':'\ud83d\udcea',
  'mailbox_with_mail':'\ud83d\udcec',
  'mailbox_with_no_mail':'\ud83d\udced',
  'man':'\ud83d\udc68',
  'man_artist':'\ud83d\udc68&zwj;\ud83c\udfa8',
  'man_astronaut':'\ud83d\udc68&zwj;\ud83d\ude80',
  'man_cartwheeling':'\ud83e\udd38&zwj;\u2642\ufe0f',
  'man_cook':'\ud83d\udc68&zwj;\ud83c\udf73',
  'man_dancing':'\ud83d\udd7a',
  'man_facepalming':'\ud83e\udd26&zwj;\u2642\ufe0f',
  'man_factory_worker':'\ud83d\udc68&zwj;\ud83c\udfed',
  'man_farmer':'\ud83d\udc68&zwj;\ud83c\udf3e',
  'man_firefighter':'\ud83d\udc68&zwj;\ud83d\ude92',
  'man_health_worker':'\ud83d\udc68&zwj;\u2695\ufe0f',
  'man_in_tuxedo':'\ud83e\udd35',
  'man_judge':'\ud83d\udc68&zwj;\u2696\ufe0f',
  'man_juggling':'\ud83e\udd39&zwj;\u2642\ufe0f',
  'man_mechanic':'\ud83d\udc68&zwj;\ud83d\udd27',
  'man_office_worker':'\ud83d\udc68&zwj;\ud83d\udcbc',
  'man_pilot':'\ud83d\udc68&zwj;\u2708\ufe0f',
  'man_playing_handball':'\ud83e\udd3e&zwj;\u2642\ufe0f',
  'man_playing_water_polo':'\ud83e\udd3d&zwj;\u2642\ufe0f',
  'man_scientist':'\ud83d\udc68&zwj;\ud83d\udd2c',
  'man_shrugging':'\ud83e\udd37&zwj;\u2642\ufe0f',
  'man_singer':'\ud83d\udc68&zwj;\ud83c\udfa4',
  'man_student':'\ud83d\udc68&zwj;\ud83c\udf93',
  'man_teacher':'\ud83d\udc68&zwj;\ud83c\udfeb',
  'man_technologist':'\ud83d\udc68&zwj;\ud83d\udcbb',
  'man_with_gua_pi_mao':'\ud83d\udc72',
  'man_with_turban':'\ud83d\udc73',
  'tangerine':'\ud83c\udf4a',
  'mans_shoe':'\ud83d\udc5e',
  'mantelpiece_clock':'\ud83d\udd70',
  'maple_leaf':'\ud83c\udf41',
  'martial_arts_uniform':'\ud83e\udd4b',
  'mask':'\ud83d\ude37',
  'massage_woman':'\ud83d\udc86',
  'massage_man':'\ud83d\udc86&zwj;\u2642\ufe0f',
  'meat_on_bone':'\ud83c\udf56',
  'medal_military':'\ud83c\udf96',
  'medal_sports':'\ud83c\udfc5',
  'mega':'\ud83d\udce3',
  'melon':'\ud83c\udf48',
  'memo':'\ud83d\udcdd',
  'men_wrestling':'\ud83e\udd3c&zwj;\u2642\ufe0f',
  'menorah':'\ud83d\udd4e',
  'mens':'\ud83d\udeb9',
  'metal':'\ud83e\udd18',
  'metro':'\ud83d\ude87',
  'microphone':'\ud83c\udfa4',
  'microscope':'\ud83d\udd2c',
  'milk_glass':'\ud83e\udd5b',
  'milky_way':'\ud83c\udf0c',
  'minibus':'\ud83d\ude90',
  'minidisc':'\ud83d\udcbd',
  'mobile_phone_off':'\ud83d\udcf4',
  'money_mouth_face':'\ud83e\udd11',
  'money_with_wings':'\ud83d\udcb8',
  'moneybag':'\ud83d\udcb0',
  'monkey':'\ud83d\udc12',
  'monkey_face':'\ud83d\udc35',
  'monorail':'\ud83d\ude9d',
  'moon':'\ud83c\udf14',
  'mortar_board':'\ud83c\udf93',
  'mosque':'\ud83d\udd4c',
  'motor_boat':'\ud83d\udee5',
  'motor_scooter':'\ud83d\udef5',
  'motorcycle':'\ud83c\udfcd',
  'motorway':'\ud83d\udee3',
  'mount_fuji':'\ud83d\uddfb',
  'mountain':'\u26f0',
  'mountain_biking_man':'\ud83d\udeb5',
  'mountain_biking_woman':'\ud83d\udeb5&zwj;\u2640\ufe0f',
  'mountain_cableway':'\ud83d\udea0',
  'mountain_railway':'\ud83d\ude9e',
  'mountain_snow':'\ud83c\udfd4',
  'mouse':'\ud83d\udc2d',
  'mouse2':'\ud83d\udc01',
  'movie_camera':'\ud83c\udfa5',
  'moyai':'\ud83d\uddff',
  'mrs_claus':'\ud83e\udd36',
  'muscle':'\ud83d\udcaa',
  'mushroom':'\ud83c\udf44',
  'musical_keyboard':'\ud83c\udfb9',
  'musical_note':'\ud83c\udfb5',
  'musical_score':'\ud83c\udfbc',
  'mute':'\ud83d\udd07',
  'nail_care':'\ud83d\udc85',
  'name_badge':'\ud83d\udcdb',
  'national_park':'\ud83c\udfde',
  'nauseated_face':'\ud83e\udd22',
  'necktie':'\ud83d\udc54',
  'negative_squared_cross_mark':'\u274e',
  'nerd_face':'\ud83e\udd13',
  'neutral_face':'\ud83d\ude10',
  'new':'\ud83c\udd95',
  'new_moon':'\ud83c\udf11',
  'new_moon_with_face':'\ud83c\udf1a',
  'newspaper':'\ud83d\udcf0',
  'newspaper_roll':'\ud83d\uddde',
  'next_track_button':'\u23ed',
  'ng':'\ud83c\udd96',
  'no_good_man':'\ud83d\ude45&zwj;\u2642\ufe0f',
  'no_good_woman':'\ud83d\ude45',
  'night_with_stars':'\ud83c\udf03',
  'no_bell':'\ud83d\udd15',
  'no_bicycles':'\ud83d\udeb3',
  'no_entry':'\u26d4\ufe0f',
  'no_entry_sign':'\ud83d\udeab',
  'no_mobile_phones':'\ud83d\udcf5',
  'no_mouth':'\ud83d\ude36',
  'no_pedestrians':'\ud83d\udeb7',
  'no_smoking':'\ud83d\udead',
  'non-potable_water':'\ud83d\udeb1',
  'nose':'\ud83d\udc43',
  'notebook':'\ud83d\udcd3',
  'notebook_with_decorative_cover':'\ud83d\udcd4',
  'notes':'\ud83c\udfb6',
  'nut_and_bolt':'\ud83d\udd29',
  'o':'\u2b55\ufe0f',
  'o2':'\ud83c\udd7e\ufe0f',
  'ocean':'\ud83c\udf0a',
  'octopus':'\ud83d\udc19',
  'oden':'\ud83c\udf62',
  'office':'\ud83c\udfe2',
  'oil_drum':'\ud83d\udee2',
  'ok':'\ud83c\udd97',
  'ok_hand':'\ud83d\udc4c',
  'ok_man':'\ud83d\ude46&zwj;\u2642\ufe0f',
  'ok_woman':'\ud83d\ude46',
  'old_key':'\ud83d\udddd',
  'older_man':'\ud83d\udc74',
  'older_woman':'\ud83d\udc75',
  'om':'\ud83d\udd49',
  'on':'\ud83d\udd1b',
  'oncoming_automobile':'\ud83d\ude98',
  'oncoming_bus':'\ud83d\ude8d',
  'oncoming_police_car':'\ud83d\ude94',
  'oncoming_taxi':'\ud83d\ude96',
  'open_file_folder':'\ud83d\udcc2',
  'open_hands':'\ud83d\udc50',
  'open_mouth':'\ud83d\ude2e',
  'open_umbrella':'\u2602\ufe0f',
  'ophiuchus':'\u26ce',
  'orange_book':'\ud83d\udcd9',
  'orthodox_cross':'\u2626\ufe0f',
  'outbox_tray':'\ud83d\udce4',
  'owl':'\ud83e\udd89',
  'ox':'\ud83d\udc02',
  'package':'\ud83d\udce6',
  'page_facing_up':'\ud83d\udcc4',
  'page_with_curl':'\ud83d\udcc3',
  'pager':'\ud83d\udcdf',
  'paintbrush':'\ud83d\udd8c',
  'palm_tree':'\ud83c\udf34',
  'pancakes':'\ud83e\udd5e',
  'panda_face':'\ud83d\udc3c',
  'paperclip':'\ud83d\udcce',
  'paperclips':'\ud83d\udd87',
  'parasol_on_ground':'\u26f1',
  'parking':'\ud83c\udd7f\ufe0f',
  'part_alternation_mark':'\u303d\ufe0f',
  'partly_sunny':'\u26c5\ufe0f',
  'passenger_ship':'\ud83d\udef3',
  'passport_control':'\ud83d\udec2',
  'pause_button':'\u23f8',
  'peace_symbol':'\u262e\ufe0f',
  'peach':'\ud83c\udf51',
  'peanuts':'\ud83e\udd5c',
  'pear':'\ud83c\udf50',
  'pen':'\ud83d\udd8a',
  'pencil2':'\u270f\ufe0f',
  'penguin':'\ud83d\udc27',
  'pensive':'\ud83d\ude14',
  'performing_arts':'\ud83c\udfad',
  'persevere':'\ud83d\ude23',
  'person_fencing':'\ud83e\udd3a',
  'pouting_woman':'\ud83d\ude4e',
  'phone':'\u260e\ufe0f',
  'pick':'\u26cf',
  'pig':'\ud83d\udc37',
  'pig2':'\ud83d\udc16',
  'pig_nose':'\ud83d\udc3d',
  'pill':'\ud83d\udc8a',
  'pineapple':'\ud83c\udf4d',
  'ping_pong':'\ud83c\udfd3',
  'pisces':'\u2653\ufe0f',
  'pizza':'\ud83c\udf55',
  'place_of_worship':'\ud83d\uded0',
  'plate_with_cutlery':'\ud83c\udf7d',
  'play_or_pause_button':'\u23ef',
  'point_down':'\ud83d\udc47',
  'point_left':'\ud83d\udc48',
  'point_right':'\ud83d\udc49',
  'point_up':'\u261d\ufe0f',
  'point_up_2':'\ud83d\udc46',
  'police_car':'\ud83d\ude93',
  'policewoman':'\ud83d\udc6e&zwj;\u2640\ufe0f',
  'poodle':'\ud83d\udc29',
  'popcorn':'\ud83c\udf7f',
  'post_office':'\ud83c\udfe3',
  'postal_horn':'\ud83d\udcef',
  'postbox':'\ud83d\udcee',
  'potable_water':'\ud83d\udeb0',
  'potato':'\ud83e\udd54',
  'pouch':'\ud83d\udc5d',
  'poultry_leg':'\ud83c\udf57',
  'pound':'\ud83d\udcb7',
  'rage':'\ud83d\ude21',
  'pouting_cat':'\ud83d\ude3e',
  'pouting_man':'\ud83d\ude4e&zwj;\u2642\ufe0f',
  'pray':'\ud83d\ude4f',
  'prayer_beads':'\ud83d\udcff',
  'pregnant_woman':'\ud83e\udd30',
  'previous_track_button':'\u23ee',
  'prince':'\ud83e\udd34',
  'princess':'\ud83d\udc78',
  'printer':'\ud83d\udda8',
  'purple_heart':'\ud83d\udc9c',
  'purse':'\ud83d\udc5b',
  'pushpin':'\ud83d\udccc',
  'put_litter_in_its_place':'\ud83d\udeae',
  'question':'\u2753',
  'rabbit':'\ud83d\udc30',
  'rabbit2':'\ud83d\udc07',
  'racehorse':'\ud83d\udc0e',
  'racing_car':'\ud83c\udfce',
  'radio':'\ud83d\udcfb',
  'radio_button':'\ud83d\udd18',
  'radioactive':'\u2622\ufe0f',
  'railway_car':'\ud83d\ude83',
  'railway_track':'\ud83d\udee4',
  'rainbow':'\ud83c\udf08',
  'rainbow_flag':'\ud83c\udff3\ufe0f&zwj;\ud83c\udf08',
  'raised_back_of_hand':'\ud83e\udd1a',
  'raised_hand_with_fingers_splayed':'\ud83d\udd90',
  'raised_hands':'\ud83d\ude4c',
  'raising_hand_woman':'\ud83d\ude4b',
  'raising_hand_man':'\ud83d\ude4b&zwj;\u2642\ufe0f',
  'ram':'\ud83d\udc0f',
  'ramen':'\ud83c\udf5c',
  'rat':'\ud83d\udc00',
  'record_button':'\u23fa',
  'recycle':'\u267b\ufe0f',
  'red_circle':'\ud83d\udd34',
  'registered':'\u00ae\ufe0f',
  'relaxed':'\u263a\ufe0f',
  'relieved':'\ud83d\ude0c',
  'reminder_ribbon':'\ud83c\udf97',
  'repeat':'\ud83d\udd01',
  'repeat_one':'\ud83d\udd02',
  'rescue_worker_helmet':'\u26d1',
  'restroom':'\ud83d\udebb',
  'revolving_hearts':'\ud83d\udc9e',
  'rewind':'\u23ea',
  'rhinoceros':'\ud83e\udd8f',
  'ribbon':'\ud83c\udf80',
  'rice':'\ud83c\udf5a',
  'rice_ball':'\ud83c\udf59',
  'rice_cracker':'\ud83c\udf58',
  'rice_scene':'\ud83c\udf91',
  'right_anger_bubble':'\ud83d\uddef',
  'ring':'\ud83d\udc8d',
  'robot':'\ud83e\udd16',
  'rocket':'\ud83d\ude80',
  'rofl':'\ud83e\udd23',
  'roll_eyes':'\ud83d\ude44',
  'roller_coaster':'\ud83c\udfa2',
  'rooster':'\ud83d\udc13',
  'rose':'\ud83c\udf39',
  'rosette':'\ud83c\udff5',
  'rotating_light':'\ud83d\udea8',
  'round_pushpin':'\ud83d\udccd',
  'rowing_man':'\ud83d\udea3',
  'rowing_woman':'\ud83d\udea3&zwj;\u2640\ufe0f',
  'rugby_football':'\ud83c\udfc9',
  'running_man':'\ud83c\udfc3',
  'running_shirt_with_sash':'\ud83c\udfbd',
  'running_woman':'\ud83c\udfc3&zwj;\u2640\ufe0f',
  'sa':'\ud83c\ude02\ufe0f',
  'sagittarius':'\u2650\ufe0f',
  'sake':'\ud83c\udf76',
  'sandal':'\ud83d\udc61',
  'santa':'\ud83c\udf85',
  'satellite':'\ud83d\udce1',
  'saxophone':'\ud83c\udfb7',
  'school':'\ud83c\udfeb',
  'school_satchel':'\ud83c\udf92',
  'scissors':'\u2702\ufe0f',
  'scorpion':'\ud83e\udd82',
  'scorpius':'\u264f\ufe0f',
  'scream':'\ud83d\ude31',
  'scream_cat':'\ud83d\ude40',
  'scroll':'\ud83d\udcdc',
  'seat':'\ud83d\udcba',
  'secret':'\u3299\ufe0f',
  'see_no_evil':'\ud83d\ude48',
  'seedling':'\ud83c\udf31',
  'selfie':'\ud83e\udd33',
  'shallow_pan_of_food':'\ud83e\udd58',
  'shamrock':'\u2618\ufe0f',
  'shark':'\ud83e\udd88',
  'shaved_ice':'\ud83c\udf67',
  'sheep':'\ud83d\udc11',
  'shell':'\ud83d\udc1a',
  'shield':'\ud83d\udee1',
  'shinto_shrine':'\u26e9',
  'ship':'\ud83d\udea2',
  'shirt':'\ud83d\udc55',
  'shopping':'\ud83d\udecd',
  'shopping_cart':'\ud83d\uded2',
  'shower':'\ud83d\udebf',
  'shrimp':'\ud83e\udd90',
  'signal_strength':'\ud83d\udcf6',
  'six_pointed_star':'\ud83d\udd2f',
  'ski':'\ud83c\udfbf',
  'skier':'\u26f7',
  'skull':'\ud83d\udc80',
  'skull_and_crossbones':'\u2620\ufe0f',
  'sleeping':'\ud83d\ude34',
  'sleeping_bed':'\ud83d\udecc',
  'sleepy':'\ud83d\ude2a',
  'slightly_frowning_face':'\ud83d\ude41',
  'slightly_smiling_face':'\ud83d\ude42',
  'slot_machine':'\ud83c\udfb0',
  'small_airplane':'\ud83d\udee9',
  'small_blue_diamond':'\ud83d\udd39',
  'small_orange_diamond':'\ud83d\udd38',
  'small_red_triangle':'\ud83d\udd3a',
  'small_red_triangle_down':'\ud83d\udd3b',
  'smile':'\ud83d\ude04',
  'smile_cat':'\ud83d\ude38',
  'smiley':'\ud83d\ude03',
  'smiley_cat':'\ud83d\ude3a',
  'smiling_imp':'\ud83d\ude08',
  'smirk':'\ud83d\ude0f',
  'smirk_cat':'\ud83d\ude3c',
  'smoking':'\ud83d\udeac',
  'snail':'\ud83d\udc0c',
  'snake':'\ud83d\udc0d',
  'sneezing_face':'\ud83e\udd27',
  'snowboarder':'\ud83c\udfc2',
  'snowflake':'\u2744\ufe0f',
  'snowman':'\u26c4\ufe0f',
  'snowman_with_snow':'\u2603\ufe0f',
  'sob':'\ud83d\ude2d',
  'soccer':'\u26bd\ufe0f',
  'soon':'\ud83d\udd1c',
  'sos':'\ud83c\udd98',
  'sound':'\ud83d\udd09',
  'space_invader':'\ud83d\udc7e',
  'spades':'\u2660\ufe0f',
  'spaghetti':'\ud83c\udf5d',
  'sparkle':'\u2747\ufe0f',
  'sparkler':'\ud83c\udf87',
  'sparkles':'\u2728',
  'sparkling_heart':'\ud83d\udc96',
  'speak_no_evil':'\ud83d\ude4a',
  'speaker':'\ud83d\udd08',
  'speaking_head':'\ud83d\udde3',
  'speech_balloon':'\ud83d\udcac',
  'speedboat':'\ud83d\udea4',
  'spider':'\ud83d\udd77',
  'spider_web':'\ud83d\udd78',
  'spiral_calendar':'\ud83d\uddd3',
  'spiral_notepad':'\ud83d\uddd2',
  'spoon':'\ud83e\udd44',
  'squid':'\ud83e\udd91',
  'stadium':'\ud83c\udfdf',
  'star':'\u2b50\ufe0f',
  'star2':'\ud83c\udf1f',
  'star_and_crescent':'\u262a\ufe0f',
  'star_of_david':'\u2721\ufe0f',
  'stars':'\ud83c\udf20',
  'station':'\ud83d\ude89',
  'statue_of_liberty':'\ud83d\uddfd',
  'steam_locomotive':'\ud83d\ude82',
  'stew':'\ud83c\udf72',
  'stop_button':'\u23f9',
  'stop_sign':'\ud83d\uded1',
  'stopwatch':'\u23f1',
  'straight_ruler':'\ud83d\udccf',
  'strawberry':'\ud83c\udf53',
  'stuck_out_tongue':'\ud83d\ude1b',
  'stuck_out_tongue_closed_eyes':'\ud83d\ude1d',
  'stuck_out_tongue_winking_eye':'\ud83d\ude1c',
  'studio_microphone':'\ud83c\udf99',
  'stuffed_flatbread':'\ud83e\udd59',
  'sun_behind_large_cloud':'\ud83c\udf25',
  'sun_behind_rain_cloud':'\ud83c\udf26',
  'sun_behind_small_cloud':'\ud83c\udf24',
  'sun_with_face':'\ud83c\udf1e',
  'sunflower':'\ud83c\udf3b',
  'sunglasses':'\ud83d\ude0e',
  'sunny':'\u2600\ufe0f',
  'sunrise':'\ud83c\udf05',
  'sunrise_over_mountains':'\ud83c\udf04',
  'surfing_man':'\ud83c\udfc4',
  'surfing_woman':'\ud83c\udfc4&zwj;\u2640\ufe0f',
  'sushi':'\ud83c\udf63',
  'suspension_railway':'\ud83d\ude9f',
  'sweat':'\ud83d\ude13',
  'sweat_drops':'\ud83d\udca6',
  'sweat_smile':'\ud83d\ude05',
  'sweet_potato':'\ud83c\udf60',
  'swimming_man':'\ud83c\udfca',
  'swimming_woman':'\ud83c\udfca&zwj;\u2640\ufe0f',
  'symbols':'\ud83d\udd23',
  'synagogue':'\ud83d\udd4d',
  'syringe':'\ud83d\udc89',
  'taco':'\ud83c\udf2e',
  'tada':'\ud83c\udf89',
  'tanabata_tree':'\ud83c\udf8b',
  'taurus':'\u2649\ufe0f',
  'taxi':'\ud83d\ude95',
  'tea':'\ud83c\udf75',
  'telephone_receiver':'\ud83d\udcde',
  'telescope':'\ud83d\udd2d',
  'tennis':'\ud83c\udfbe',
  'tent':'\u26fa\ufe0f',
  'thermometer':'\ud83c\udf21',
  'thinking':'\ud83e\udd14',
  'thought_balloon':'\ud83d\udcad',
  'ticket':'\ud83c\udfab',
  'tickets':'\ud83c\udf9f',
  'tiger':'\ud83d\udc2f',
  'tiger2':'\ud83d\udc05',
  'timer_clock':'\u23f2',
  'tipping_hand_man':'\ud83d\udc81&zwj;\u2642\ufe0f',
  'tired_face':'\ud83d\ude2b',
  'tm':'\u2122\ufe0f',
  'toilet':'\ud83d\udebd',
  'tokyo_tower':'\ud83d\uddfc',
  'tomato':'\ud83c\udf45',
  'tongue':'\ud83d\udc45',
  'top':'\ud83d\udd1d',
  'tophat':'\ud83c\udfa9',
  'tornado':'\ud83c\udf2a',
  'trackball':'\ud83d\uddb2',
  'tractor':'\ud83d\ude9c',
  'traffic_light':'\ud83d\udea5',
  'train':'\ud83d\ude8b',
  'train2':'\ud83d\ude86',
  'tram':'\ud83d\ude8a',
  'triangular_flag_on_post':'\ud83d\udea9',
  'triangular_ruler':'\ud83d\udcd0',
  'trident':'\ud83d\udd31',
  'triumph':'\ud83d\ude24',
  'trolleybus':'\ud83d\ude8e',
  'trophy':'\ud83c\udfc6',
  'tropical_drink':'\ud83c\udf79',
  'tropical_fish':'\ud83d\udc20',
  'truck':'\ud83d\ude9a',
  'trumpet':'\ud83c\udfba',
  'tulip':'\ud83c\udf37',
  'tumbler_glass':'\ud83e\udd43',
  'turkey':'\ud83e\udd83',
  'turtle':'\ud83d\udc22',
  'tv':'\ud83d\udcfa',
  'twisted_rightwards_arrows':'\ud83d\udd00',
  'two_hearts':'\ud83d\udc95',
  'two_men_holding_hands':'\ud83d\udc6c',
  'two_women_holding_hands':'\ud83d\udc6d',
  'u5272':'\ud83c\ude39',
  'u5408':'\ud83c\ude34',
  'u55b6':'\ud83c\ude3a',
  'u6307':'\ud83c\ude2f\ufe0f',
  'u6708':'\ud83c\ude37\ufe0f',
  'u6709':'\ud83c\ude36',
  'u6e80':'\ud83c\ude35',
  'u7121':'\ud83c\ude1a\ufe0f',
  'u7533':'\ud83c\ude38',
  'u7981':'\ud83c\ude32',
  'u7a7a':'\ud83c\ude33',
  'umbrella':'\u2614\ufe0f',
  'unamused':'\ud83d\ude12',
  'underage':'\ud83d\udd1e',
  'unicorn':'\ud83e\udd84',
  'unlock':'\ud83d\udd13',
  'up':'\ud83c\udd99',
  'upside_down_face':'\ud83d\ude43',
  'v':'\u270c\ufe0f',
  'vertical_traffic_light':'\ud83d\udea6',
  'vhs':'\ud83d\udcfc',
  'vibration_mode':'\ud83d\udcf3',
  'video_camera':'\ud83d\udcf9',
  'video_game':'\ud83c\udfae',
  'violin':'\ud83c\udfbb',
  'virgo':'\u264d\ufe0f',
  'volcano':'\ud83c\udf0b',
  'volleyball':'\ud83c\udfd0',
  'vs':'\ud83c\udd9a',
  'vulcan_salute':'\ud83d\udd96',
  'walking_man':'\ud83d\udeb6',
  'walking_woman':'\ud83d\udeb6&zwj;\u2640\ufe0f',
  'waning_crescent_moon':'\ud83c\udf18',
  'waning_gibbous_moon':'\ud83c\udf16',
  'warning':'\u26a0\ufe0f',
  'wastebasket':'\ud83d\uddd1',
  'watch':'\u231a\ufe0f',
  'water_buffalo':'\ud83d\udc03',
  'watermelon':'\ud83c\udf49',
  'wave':'\ud83d\udc4b',
  'wavy_dash':'\u3030\ufe0f',
  'waxing_crescent_moon':'\ud83c\udf12',
  'wc':'\ud83d\udebe',
  'weary':'\ud83d\ude29',
  'wedding':'\ud83d\udc92',
  'weight_lifting_man':'\ud83c\udfcb\ufe0f',
  'weight_lifting_woman':'\ud83c\udfcb\ufe0f&zwj;\u2640\ufe0f',
  'whale':'\ud83d\udc33',
  'whale2':'\ud83d\udc0b',
  'wheel_of_dharma':'\u2638\ufe0f',
  'wheelchair':'\u267f\ufe0f',
  'white_check_mark':'\u2705',
  'white_circle':'\u26aa\ufe0f',
  'white_flag':'\ud83c\udff3\ufe0f',
  'white_flower':'\ud83d\udcae',
  'white_large_square':'\u2b1c\ufe0f',
  'white_medium_small_square':'\u25fd\ufe0f',
  'white_medium_square':'\u25fb\ufe0f',
  'white_small_square':'\u25ab\ufe0f',
  'white_square_button':'\ud83d\udd33',
  'wilted_flower':'\ud83e\udd40',
  'wind_chime':'\ud83c\udf90',
  'wind_face':'\ud83c\udf2c',
  'wine_glass':'\ud83c\udf77',
  'wink':'\ud83d\ude09',
  'wolf':'\ud83d\udc3a',
  'woman':'\ud83d\udc69',
  'woman_artist':'\ud83d\udc69&zwj;\ud83c\udfa8',
  'woman_astronaut':'\ud83d\udc69&zwj;\ud83d\ude80',
  'woman_cartwheeling':'\ud83e\udd38&zwj;\u2640\ufe0f',
  'woman_cook':'\ud83d\udc69&zwj;\ud83c\udf73',
  'woman_facepalming':'\ud83e\udd26&zwj;\u2640\ufe0f',
  'woman_factory_worker':'\ud83d\udc69&zwj;\ud83c\udfed',
  'woman_farmer':'\ud83d\udc69&zwj;\ud83c\udf3e',
  'woman_firefighter':'\ud83d\udc69&zwj;\ud83d\ude92',
  'woman_health_worker':'\ud83d\udc69&zwj;\u2695\ufe0f',
  'woman_judge':'\ud83d\udc69&zwj;\u2696\ufe0f',
  'woman_juggling':'\ud83e\udd39&zwj;\u2640\ufe0f',
  'woman_mechanic':'\ud83d\udc69&zwj;\ud83d\udd27',
  'woman_office_worker':'\ud83d\udc69&zwj;\ud83d\udcbc',
  'woman_pilot':'\ud83d\udc69&zwj;\u2708\ufe0f',
  'woman_playing_handball':'\ud83e\udd3e&zwj;\u2640\ufe0f',
  'woman_playing_water_polo':'\ud83e\udd3d&zwj;\u2640\ufe0f',
  'woman_scientist':'\ud83d\udc69&zwj;\ud83d\udd2c',
  'woman_shrugging':'\ud83e\udd37&zwj;\u2640\ufe0f',
  'woman_singer':'\ud83d\udc69&zwj;\ud83c\udfa4',
  'woman_student':'\ud83d\udc69&zwj;\ud83c\udf93',
  'woman_teacher':'\ud83d\udc69&zwj;\ud83c\udfeb',
  'woman_technologist':'\ud83d\udc69&zwj;\ud83d\udcbb',
  'woman_with_turban':'\ud83d\udc73&zwj;\u2640\ufe0f',
  'womans_clothes':'\ud83d\udc5a',
  'womans_hat':'\ud83d\udc52',
  'women_wrestling':'\ud83e\udd3c&zwj;\u2640\ufe0f',
  'womens':'\ud83d\udeba',
  'world_map':'\ud83d\uddfa',
  'worried':'\ud83d\ude1f',
  'wrench':'\ud83d\udd27',
  'writing_hand':'\u270d\ufe0f',
  'x':'\u274c',
  'yellow_heart':'\ud83d\udc9b',
  'yen':'\ud83d\udcb4',
  'yin_yang':'\u262f\ufe0f',
  'yum':'\ud83d\ude0b',
  'zap':'\u26a1\ufe0f',
  'zipper_mouth_face':'\ud83e\udd10',
  'zzz':'\ud83d\udca4',

  /* special emojis :P */
  'octocat':  '<img width="20" height="20" align="absmiddle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAOwUlEQVR42uVbCVyO6RbPmn0sw9gZS0aZO4y5GTEUE2ObxjZjrbHEJVy3sWS5pkaWxjLEkCVDSbSgFLdESaWSLIVUSIi4kvb9f895vi/zbbR+yZ339/tbnu99n/ec/3Oe85xznufV0CjDBaAdwZqwnzCJ0FXjHV70/i8J5oQDhCFV8cJdq1atwqxZs+Ds7Iz4+HhqwgXCLELNKlK6G2Ej4e6lS5ewZcsWzJgxA+fOnWNZFqvzxT1v3boF/qcsBg0ahP3796OwsJAFWKYuIqjfPoS9cXFxWL58Obp06SInh5aWFr//jjoJWLlu3TolAorRuXNn7Ny5k4W4Spgj81xrgj5hLmED4RDhlNRygglBhADCSakpWxFMCHoETUJTwrYHDx7A1NT0je9nPHz4kN/fXl0EeI0aNeqtAjB69+4NPz8/FsSdlXvy5An8/f1hZ2cHCwsLGBsbY/To0cJy9PT0MGDAAAwePBhGRkbClNesWYODBw8iODgYOTk53M/d9evXo27duiW++8iRI3z/ZHURENOjR48ShSjGuHHjhHJ16tQp9TOKaNWqlZKpvw1MHluQOpSvk5eXh5YtW5ZbmarAvHnzmIBd6iCgXnZ2Npo1a1atCWAfwY5SHQTUKCoqQocOHao1AebmHBJgi7p8QBDP6epMwKFDvMDAWF0ELLS1ta3WBNy9e5cJMFIXAdvt7e2rNQHDhw9nAv5D+KKylV9y8+bNCi1pVYWZM2cyCfaVTcDdsqzH7xpBQRxcwqyylLdi5/K+KM/Q0dFhAqIri4Bn1T0AUgVpdmhYUeVHnD59+r1TnjF27Fgm4HhFCThoYmLyXhLQoEGD4mRKsyIE3OrZs+d7SQCDCyZcNSqv8k1evXoFTU3NUr+wzUcfYqRBf8yb/C2WzfoBFoTF08fBdMIITDD8CsP1+kL30x7Q6dYZH7drjfZ0f4fWLdG1Q1t81qMLBvTRwejB/TBl1BDMnzQGS2dMxKo5k7Fs9iSY/jAaBvR8Pc26pZaH02quLZSXgO6xsbGlelGnli1wZKcVMqN8gKcRwItrf+K/VB95doXaLwOJIVSzOU/+2Re5kV7IuuyJrIhTyLt6mmztLBBPNZLHoUAy9fE8UvJ8ikxfj8PwJPQErJeYlkquTZs2MQFLykuANgc/Jb2kn3Z3ZMaQUrmxwO1zyAo7gfRAJ6RfOIyMEFdkXj5F8BTK5lzxQv610yi8QcFatI8gQoCIK7x+hojwRnaE5H4JTiEj9Pjr/rJDqcZyn9b4ovu45LYbdWvXeqtsXMHiSlZ5CegRExPz1hd83PYj5POo0QinXyLFg48hnZTOiQ1Dzr1IZEaeQRoJn0HKZIR7lA2kfHrQUerXHTlx4ZL+rnjjFRGRGeYB5MUj2GnbW+XbuJFrp1heXgI6JCYmvvUFN1x3Aek3SWkapRAXMeJFGS8ge2Xfuog0toaykED3Mpk8+shOk+sv68Y50V9WuKewBKt5094o39atW/mRf5WXgIYZGRlo3Lixys4nj6A6Z1YMcqRCpwU4ouDlUyHk/QA/hNttR25Wlvh/ZthJUsil9ATQ/axkYbqEzDgfL0Ts/x35+aLyTES7IY36Q6w/+Q4/tP6wuUoZ9+7dy7ebVmQZjO/atavKzn32rAdeXkd6KCkXdAxZ13yFcLFnvPD73zrDVrsdTs6eggKSuSjjORHkUGoC0i86Iyc6QPQX7eqMnTodYNuzHU4vnosiaitMSUSavwMy6d3IvEUrzViVMrq5uXEX4ytCgL++vr5Sx7Vr1cIDX0dKkQJfj37Rs3jw1sBxkwlwGD4Ax3+ciN1faCHW76xQRFgAOcjSEMBkIe0x8nLzcez7kTg8Rh/uxuOxR/cTJISFSfq7eATpZCk8CAfXLVFJwIULXHnHoIoQYLtw4UKljps2aogXQcQuef/XAiMDKY+S4DhyEFwpDnCj9f+Afl8EbbWRTANaAdihlYoAMn8aZzyNuYODX/eD29TvRH/7v+qN8H27JdOAyWQfQQ74xPafVRLAPox9WUlK6hIGEgx4f00Kg2JcvHhRqeP6FIwknXemyen/2gLIIeC/CYk49M0AuE4xgtu0sThg8AUCN62TEuBdRgJo2Y+Kxh9D/k59SQiwH9QHobt3SAk4KSGA4oWjm1YqyVi8U6Soj4yOrHM/jTAyKVby/PnzIoNi8L+L4eXlpXoFcLcTgc1rAlISkJeXDxeK2A6P1hdTwI6mQPTJE+WbAlnJyE7PhNO3Q3BkrKGYWtxfHMkkmQLO0ilwA7+vXqAkn66urtBLUZ9iHfm30NBQaPAf165dA0d9vP2UlJSEp0+f4vHjx3j06JH4e+rUqUovcNmyGkiNEkLwklXsBG+ecMUOnfbYod1emG5uboFKJ8jPFVD0l0dBUHqoPDHpQeQEb0qc4FUHe3KAbYUT9JgzDbwOFL5MfN0fXkXhJ5PxSvLt2LFD1Ah5u4z1YJ14l4qnBe8v3rhxAzz4PAVG8nLHivIP0dHRiIiIQGRkpEgmrl69ClW1QBMjQ7LDW8hmU+RRI69ckJIkhL7jfRJBm62R+TJVYq6h0jhBRslsivqenT2MF/7OyI70VmkFhWnPJaS6OyPkt43IycqR9EfWlH7JDQUUTuNhCHR7Ke9YcRp/5coVoQPrcvnyZURFRYmBZlLS0kR8MVLD29sbnp6e8PHxQUBAgCgn8YO8E3z79m3BGKeVc+bMkXuBZt06SA12F/F5Go0gR4C8HBalPZMPXKL8lQKhPAqF+f97KXFyNx6HQsoPsshJ/kmAp2TKkJLISpXvjyxNhMYcDVLOEO+lPDi8B5mamipkZx1YF9YpJCRErAy+vr5CZ9ZdWABhDGEYYTBhAOFz3g4nfMJelNCbkNCpUye5F034mvxIPi1/FM+zQCw0k5B9O0iEr5kRXkqhMJOVf9NXIHjtT7hmaymSoBzKETimkAuFpaF1dkwI9RcmIYaXv3BJXoGCuyIgk5WpefPmKCgoYK46SmX/RKoL69Sfl0WuFEl1HlmWJXE5z6WmTZvKJxxmxkIQ3AuU5APk6NICj4hRT6eITTEEzqWk55HHPjz3cxJhNF5cxeNT9kj2cRDTQjEkzpDtjyyCic5l5fEA7uSHFEefR5pPsahrb2B9QkICFHeJ51HunkdLIg0VLY0BFKdLwllVHp4dHyvst3QuEiiju21vA/+VZkiluIKt4I3RIfWXQ4QgKUxkni47LJWUP3PmjHo2RxVI+CebmKJP6EiFDVurxUgmExe5PHlnPAkn8w4QqW62NCVmYopozid5H0CI9RKE21ggJeAYEeMnfitOnRn5XCfgeJ+VTosWQU8MOc6ZE0cqnUm4fv165SrPBVHCfMI4TowUfmOfsIcdJh92kBWmUcP6GDt8EDZbzIffH5tx3/ewSFjw5LKk0MEFEkZenDBjgew7Yiog5brkt+QrknvJmhIp4Apw/A1bVpjhG/0v5d7Vrl07bNu2TelUSqUoz8uI3Z49OEtBAy+TdP1CqKtwHzvQUxxgTJs2TeX5gdq1a0ObSmCjh+jB+NuvRamL1+3ls77HCip1rTSdJP5eNnMizKndjMLoH42G4bthX+FzHS3UVVEC69evH3799VeKMXJZrlWKclUGAZ5jxoxB02ZNsNlxH74aagBHZyex986HlVTczyGmI58h4CjL2toa48ePFxsUPEotWrQoc0GT0/C2bduiY8eO4ISMcxLeoOFYhS6qm2EpoZG65jmbv+dPSyRZlt5QfVjvtX19AOFNL+aDFNI4m0eFc9Ho5ORkaGtrl5kAVp6DMOk88efEjLe++ZhclZwHTJHEHbs4YOCmLj2645fdvwnTK42zoXtaEHwNDQ3LXdZm5yad3/2r+gQmDsRnIF5KAldX6zdsgG/GG8F44Vzcu3eP2y1K6GPr2rVrK1zbnz59Or/LoaoJCPZ4kCZsjw9GECL79OmDj9q2wb+320C3/5fgPQO6Vrzh+fpcDqxXr16lbHBwgkZXm6okYJr0ECMrX5vraiJ1lArEjrEnzWuOqemiYj9spGd2ee478XkiPsJakmJ83qA05/8qXNurJFLiunXrhpo1a6LxB02wyHIFZpovgOHwYfjZ0hK2lH5u2rwZ5suWYv5ycyUlmjRpgl69eimlrFy3kwuoyOvXr19frm3RokVMwPZ3TYC57E6xVq+e6KzVDSaL/oEp82Zh8IhhWLjGAp/p9oX5ujVKBNjY2MDV1VWuzd3dXaTesm2biUQuZ8u28elSPmKr8a4vdog8GnJpcT1N1KHUuBbt0jSgWuGbzJh3mVhh2TYHBwdxjFa2jVcZnvPVlQBOLXdZWlqW2ZFxNYYVlm07fPgwAgMD5dr4OD5HeHLFFxM+O42DGtXhIkFaMQlcUjIzM0P37t1Ro0YNpZPjPJcVK7SOjo5ybU5OTqIAo0gAh97VlgAZIj4l8Pn4WFaO64ocuXG6zJtDbMqySnC7IgF8uptLVrJtq1evFuWqak+A4j4i4TNpltiJ8LPiNFFFwNGjRyWFyfedAFUny/joekkEuLi4KK0CfykCeFnkiu1flgBeFtl3/D8SsMbKykpOifv37ysRcPz4cVHKUiSA8wwNdR9/VTMBSh9Y8S4Nf2qnSICiBbDzVCRg9uzZTMC+94kAv6FDh8opwRsVHPjItnl4eEDxHNLKlStFXV+2javQ/M1SpZe+1KA4L4G7WDG57fSm/OUbXiqG0ewAFYOeYcN4fwZhvLkp2y4tftrxcltdlf/w+fPn4qNGxTCYU2m6nrRu3VqunT/EoiuZvw6TTZHpyuNNmEaNGsndP3fu3OJAq1N1JOAHDmyKheVtNP4OkE2crULRAW7fvl20EyyLy24a8p+/7WISFixYIMLt4t82bNhQYjXqXREgPq3j74mlX3AmSL8E1eOPIBXnuVT5OsVZpuLnOMeOHeN7vifwiYhYzhC5IpwlOXj1QXWdBmy/XWU/X+UqMZfKBw4cKAobHPlJlZe9h6tOu+7cuSN2dg0MDMSSyZUpmXvaSD+crq/xvl0k9BTCRa7qEPq+5T4t6ffF52WVV+f1P6zyLG30bsU4AAAAAElFTkSuQmCC">',
  'showdown': '<img width="20" height="20" align="absmiddle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAECtaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTUtMDEtMTVUMjE6MDE6MTlaPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNy0xMC0yNFQxMzozMTozMCswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTctMTAtMjRUMTM6MzE6MzArMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8cGhvdG9zaG9wOlRleHRMYXllcnM+CiAgICAgICAgICAgIDxyZGY6QmFnPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllck5hbWU+UyAtPC9waG90b3Nob3A6TGF5ZXJOYW1lPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyVGV4dD5TIC08L3Bob3Rvc2hvcDpMYXllclRleHQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc+CiAgICAgICAgIDwvcGhvdG9zaG9wOlRleHRMYXllcnM+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6N2NkMzQxNzctOWYyZi0yNDRiLWEyYjQtMzU1MzJkY2Y1MWJiPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6M2E1YzgxYmYtYjhiNy0xMWU3LTk0NDktYTQ2MzdlZjJkNjMzPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NjBDNUFFNjVGNjlDRTQxMTk0NUE4NTVFM0JDQTdFRUI8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NjBDNUFFNjVGNjlDRTQxMTk0NUE4NTVFM0JDQTdFRUI8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTUtMDEtMTVUMjE6MDE6MTlaPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ODZjNjBkMGQtOGY0Yy01ZTRlLWEwMjQtODI4ZWQyNTIwZDc3PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTEwLTI0VDEzOjMxOjMwKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjdjZDM0MTc3LTlmMmYtMjQ0Yi1hMmI0LTM1NTMyZGNmNTFiYjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNy0xMC0yNFQxMzozMTozMCswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6ODZjNjBkMGQtOGY0Yy01ZTRlLWEwMjQtODI4ZWQyNTIwZDc3PC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOjYwQzVBRTY1RjY5Q0U0MTE5NDVBODU1RTNCQ0E3RUVCPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICAgICA8c3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NjBDNUFFNjVGNjlDRTQxMTk0NUE4NTVFM0JDQTdFRUI8L3N0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPC94bXBNTTpEZXJpdmVkRnJvbT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pse7bzcAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAA1JJREFUeNrsm1+OmlAUhz+aeS9dwZggJn1AnRUMO6jpBgZXULuC2hWUWUGZBTSxKyiuoA4mfUBMnB04K5g+9DihRBHlyh/lJLwIXLgf99xzzu9etZeXFy7Z3nDh1gBoAFy4XeVtQNO0zNcapmUDfUBPnFoBfhQGq6IBaHmjwD4Ahmk5wAD4kKG5J8CNwsAFaHe6DvA9cc0wCgOv8gDka3vA9RHNPgo0D7hNnJtGYWBXxgV2dH4MfMnRRA+Y1WIO2NJ5F/ikoKm3tYsChmkNFHW+fmHQMC1dfHaXPQP3wM1yMdc2B/AOGALTWobBmI1Shu0UGCwX83XyRBQGawHntTtdG5gUNfxVu4CTNqNv6/wWGL7kCc+1AmCYVisl3I2ydD4GYZUCs7IjoLXrxHIx9w9tLAqDCfBwDrXAY457x+cAoCfuwRGjYFUnAGk+PsjR7s8Dn1VeLWCYVlpDw+VivjVHSHt+u9PVJbzGzZXQWTkAkz0V31fATUaEsjVJlQBs4FeGcteLgzgbAALBA+4y3voAeJL8nA0AHfClnM1qm1HhnYUidCSE+KzvSSJUTwAxCOMcpfETMFYpfRUKIAbCFhC3OTJJJwqDWS0BxED0JZ4Pjix1P2+E0loCSMBwyK4S/xc1ojBwag8gMU84cvTKGgmlAYhngu1O9xAXuVE5J1QCQCz3bwHuHvdQui5QKQAxEO6eEKpsFCgTRSXkvdoxSlBMCxhJJbgrrbZRtHCiShN0pRB6PeQ3ckBw2K0oKXMBVYJIP+Nvh9qulFivGoBt1lLQxowT2ykBXCfnhZIglgYACWmqXQv+baioBYCeiCQHm+QEg1O7RhF7hO4OhSAhcJKSFU7qBGADwZeqMMuXn6TUBw8qlaMrirNb4LdhWlP+SWD+cjFfxTpuS2GUpik+o3jFSEkqbJiWn0P0OMSGqlWiOu0TvD+FRHZKAE+oW+cfRmEwqlsesJJEJs8y91QqP+9UL6lqEtz2gpuNEY5sm9sIHln2DRa2aFKGJtiXkZEMiWtgVvRKUSUFkSKt2S7fAGgAXLYpmQQXf36MUChTZdUa2u8/rkvPA6Tz30r4eH3ybcBS5gJ6SaNXb+aABkA1AMxKenclBZLW/He4cYEGwEXb3wEASelexk6LIIIAAAAASUVORK5CYII=">'
};

/**
 * Created by Estevao on 31-05-2015.
 */

/**
 * Showdown Converter class
 * @class
 * @param {object} [converterOptions]
 * @returns {Converter}
 */
showdown.Converter = function (converterOptions) {
  'use strict';

  var
      /**
       * Options used by this converter
       * @private
       * @type {{}}
       */
      options = {},

      /**
       * Language extensions used by this converter
       * @private
       * @type {Array}
       */
      langExtensions = [],

      /**
       * Output modifiers extensions used by this converter
       * @private
       * @type {Array}
       */
      outputModifiers = [],

      /**
       * Event listeners
       * @private
       * @type {{}}
       */
      listeners = {},

      /**
       * The flavor set in this converter
       */
      setConvFlavor = setFlavor,

    /**
     * Metadata of the document
     * @type {{parsed: {}, raw: string, format: string}}
     */
      metadata = {
        parsed: {},
        raw: '',
        format: ''
      };

  _constructor();

  /**
   * Converter constructor
   * @private
   */
  function _constructor () {
    converterOptions = converterOptions || {};

    for (var gOpt in globalOptions) {
      if (globalOptions.hasOwnProperty(gOpt)) {
        options[gOpt] = globalOptions[gOpt];
      }
    }

    // Merge options
    if (typeof converterOptions === 'object') {
      for (var opt in converterOptions) {
        if (converterOptions.hasOwnProperty(opt)) {
          options[opt] = converterOptions[opt];
        }
      }
    } else {
      throw Error('Converter expects the passed parameter to be an object, but ' + typeof converterOptions +
      ' was passed instead.');
    }

    if (options.extensions) {
      showdown.helper.forEach(options.extensions, _parseExtension);
    }
  }

  /**
   * Parse extension
   * @param {*} ext
   * @param {string} [name='']
   * @private
   */
  function _parseExtension (ext, name) {

    name = name || null;
    // If it's a string, the extension was previously loaded
    if (showdown.helper.isString(ext)) {
      ext = showdown.helper.stdExtName(ext);
      name = ext;

      // LEGACY_SUPPORT CODE
      if (showdown.extensions[ext]) {
        console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' +
          'Please inform the developer that the extension should be updated!');
        legacyExtensionLoading(showdown.extensions[ext], ext);
        return;
      // END LEGACY SUPPORT CODE

      } else if (!showdown.helper.isUndefined(extensions[ext])) {
        ext = extensions[ext];

      } else {
        throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
      }
    }

    if (typeof ext === 'function') {
      ext = ext();
    }

    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }

    var validExt = validate(ext, name);
    if (!validExt.valid) {
      throw Error(validExt.error);
    }

    for (var i = 0; i < ext.length; ++i) {
      switch (ext[i].type) {

        case 'lang':
          langExtensions.push(ext[i]);
          break;

        case 'output':
          outputModifiers.push(ext[i]);
          break;
      }
      if (ext[i].hasOwnProperty('listeners')) {
        for (var ln in ext[i].listeners) {
          if (ext[i].listeners.hasOwnProperty(ln)) {
            listen(ln, ext[i].listeners[ln]);
          }
        }
      }
    }

  }

  /**
   * LEGACY_SUPPORT
   * @param {*} ext
   * @param {string} name
   */
  function legacyExtensionLoading (ext, name) {
    if (typeof ext === 'function') {
      ext = ext(new showdown.Converter());
    }
    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }
    var valid = validate(ext, name);

    if (!valid.valid) {
      throw Error(valid.error);
    }

    for (var i = 0; i < ext.length; ++i) {
      switch (ext[i].type) {
        case 'lang':
          langExtensions.push(ext[i]);
          break;
        case 'output':
          outputModifiers.push(ext[i]);
          break;
        default:// should never reach here
          throw Error('Extension loader error: Type unrecognized!!!');
      }
    }
  }

  /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   */
  function listen (name, callback) {
    if (!showdown.helper.isString(name)) {
      throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
    }

    if (typeof callback !== 'function') {
      throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
    }

    if (!listeners.hasOwnProperty(name)) {
      listeners[name] = [];
    }
    listeners[name].push(callback);
  }

  function rTrimInputText (text) {
    var rsp = text.match(/^\s*/)[0].length,
        rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
    return text.replace(rgx, '');
  }

  /**
   * Dispatch an event
   * @private
   * @param {string} evtName Event name
   * @param {string} text Text
   * @param {{}} options Converter Options
   * @param {{}} globals
   * @returns {string}
   */
  this._dispatch = function dispatch (evtName, text, options, globals) {
    if (listeners.hasOwnProperty(evtName)) {
      for (var ei = 0; ei < listeners[evtName].length; ++ei) {
        var nText = listeners[evtName][ei](evtName, text, this, options, globals);
        if (nText && typeof nText !== 'undefined') {
          text = nText;
        }
      }
    }
    return text;
  };

  /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   * @returns {showdown.Converter}
   */
  this.listen = function (name, callback) {
    listen(name, callback);
    return this;
  };

  /**
   * Converts a markdown string into HTML
   * @param {string} text
   * @returns {*}
   */
  this.makeHtml = function (text) {
    //check if text is not falsy
    if (!text) {
      return text;
    }

    var globals = {
      gHtmlBlocks:     [],
      gHtmlMdBlocks:   [],
      gHtmlSpans:      [],
      gUrls:           {},
      gTitles:         {},
      gDimensions:     {},
      gListLevel:      0,
      hashLinkCounts:  {},
      langExtensions:  langExtensions,
      outputModifiers: outputModifiers,
      converter:       this,
      ghCodeBlocks:    [],
      metadata: {
        parsed: {},
        raw: '',
        format: ''
      }
    };

    // This lets us use ¨ trema as an escape char to avoid md5 hashes
    // The choice of character is arbitrary; anything that isn't
    // magic in Markdown will work.
    text = text.replace(/¨/g, '¨T');

    // Replace $ with ¨D
    // RegExp interprets $ as a special character
    // when it's in a replacement string
    text = text.replace(/\$/g, '¨D');

    // Standardize line endings
    text = text.replace(/\r\n/g, '\n'); // DOS to Unix
    text = text.replace(/\r/g, '\n'); // Mac to Unix

    // Stardardize line spaces (nbsp causes trouble in older browsers and some regex flavors)
    text = text.replace(/\u00A0/g, ' ');

    if (options.smartIndentationFix) {
      text = rTrimInputText(text);
    }

    // Make sure text begins and ends with a couple of newlines:
    text = '\n\n' + text + '\n\n';

    // detab
    text = showdown.subParser('detab')(text, options, globals);

    /**
     * Strip any lines consisting only of spaces and tabs.
     * This makes subsequent regexs easier to write, because we can
     * match consecutive blank lines with /\n+/ instead of something
     * contorted like /[ \t]*\n+/
     */
    text = text.replace(/^[ \t]+$/mg, '');

    //run languageExtensions
    showdown.helper.forEach(langExtensions, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });

    // run the sub parsers
    text = showdown.subParser('metadata')(text, options, globals);
    text = showdown.subParser('hashPreCodeTags')(text, options, globals);
    text = showdown.subParser('githubCodeBlocks')(text, options, globals);
    text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
    text = showdown.subParser('hashCodeTags')(text, options, globals);
    text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
    text = showdown.subParser('blockGamut')(text, options, globals);
    text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
    text = showdown.subParser('unescapeSpecialChars')(text, options, globals);

    // attacklab: Restore dollar signs
    text = text.replace(/¨D/g, '$$');

    // attacklab: Restore tremas
    text = text.replace(/¨T/g, '¨');

    // render a complete html document instead of a partial if the option is enabled
    text = showdown.subParser('completeHTMLDocument')(text, options, globals);

    // Run output modifiers
    showdown.helper.forEach(outputModifiers, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });

    // update metadata
    metadata = globals.metadata;
    return text;
  };

  /**
   * Set an option of this Converter instance
   * @param {string} key
   * @param {*} value
   */
  this.setOption = function (key, value) {
    options[key] = value;
  };

  /**
   * Get the option of this Converter instance
   * @param {string} key
   * @returns {*}
   */
  this.getOption = function (key) {
    return options[key];
  };

  /**
   * Get the options of this Converter instance
   * @returns {{}}
   */
  this.getOptions = function () {
    return options;
  };

  /**
   * Add extension to THIS converter
   * @param {{}} extension
   * @param {string} [name=null]
   */
  this.addExtension = function (extension, name) {
    name = name || null;
    _parseExtension(extension, name);
  };

  /**
   * Use a global registered extension with THIS converter
   * @param {string} extensionName Name of the previously registered extension
   */
  this.useExtension = function (extensionName) {
    _parseExtension(extensionName);
  };

  /**
   * Set the flavor THIS converter should use
   * @param {string} name
   */
  this.setFlavor = function (name) {
    if (!flavor.hasOwnProperty(name)) {
      throw Error(name + ' flavor was not found');
    }
    var preset = flavor[name];
    setConvFlavor = name;
    for (var option in preset) {
      if (preset.hasOwnProperty(option)) {
        options[option] = preset[option];
      }
    }
  };

  /**
   * Get the currently set flavor of this converter
   * @returns {string}
   */
  this.getFlavor = function () {
    return setConvFlavor;
  };

  /**
   * Remove an extension from THIS converter.
   * Note: This is a costly operation. It's better to initialize a new converter
   * and specify the extensions you wish to use
   * @param {Array} extension
   */
  this.removeExtension = function (extension) {
    if (!showdown.helper.isArray(extension)) {
      extension = [extension];
    }
    for (var a = 0; a < extension.length; ++a) {
      var ext = extension[a];
      for (var i = 0; i < langExtensions.length; ++i) {
        if (langExtensions[i] === ext) {
          langExtensions[i].splice(i, 1);
        }
      }
      for (var ii = 0; ii < outputModifiers.length; ++i) {
        if (outputModifiers[ii] === ext) {
          outputModifiers[ii].splice(i, 1);
        }
      }
    }
  };

  /**
   * Get all extension of THIS converter
   * @returns {{language: Array, output: Array}}
   */
  this.getAllExtensions = function () {
    return {
      language: langExtensions,
      output: outputModifiers
    };
  };

  /**
   * Get the metadata of the previously parsed document
   * @param raw
   * @returns {string|{}}
   */
  this.getMetadata = function (raw) {
    if (raw) {
      return metadata.raw;
    } else {
      return metadata.parsed;
    }
  };

  /**
   * Get the metadata format of the previously parsed document
   * @returns {string}
   */
  this.getMetadataFormat = function () {
    return metadata.format;
  };

  /**
   * Private: set a single key, value metadata pair
   * @param {string} key
   * @param {string} value
   */
  this._setMetadataPair = function (key, value) {
    metadata.parsed[key] = value;
  };

  /**
   * Private: set metadata format
   * @param {string} format
   */
  this._setMetadataFormat = function (format) {
    metadata.format = format;
  };

  /**
   * Private: set metadata raw text
   * @param {string} raw
   */
  this._setMetadataRaw = function (raw) {
    metadata.raw = raw;
  };
};

/**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */
showdown.subParser('anchors', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('anchors.before', text, options, globals);

  var writeAnchorTag = function (wholeMatch, linkText, linkId, url, m5, m6, title) {
    if (showdown.helper.isUndefined(title)) {
      title = '';
    }
    linkId = linkId.toLowerCase();

    // Special case for explicit empty url
    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
      url = '';
    } else if (!url) {
      if (!linkId) {
        // lower-case and turn embedded newlines into spaces
        linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
      }
      url = '#' + linkId;

      if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
        url = globals.gUrls[linkId];
        if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
          title = globals.gTitles[linkId];
        }
      } else {
        return wholeMatch;
      }
    }

    //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
    url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);

    var result = '<a href="' + url + '"';

    if (title !== '' && title !== null) {
      title = title.replace(/"/g, '&quot;');
      //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
      title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      result += ' title="' + title + '"';
    }

    // optionLinksInNewWindow only applies
    // to external links. Hash links (#) open in same page
    if (options.openLinksInNewWindow && !/^#/.test(url)) {
      // escaped _
      result += ' target="¨E95Eblank"';
    }

    result += '>' + linkText + '</a>';

    return result;
  };

  // First, handle reference-style links: [link text] [id]
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);

  // Next, inline-style links: [link text](url "optional title")
  // cases with crazy urls like ./image/cat1).png
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
    writeAnchorTag);

  // normal cases
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
                      writeAnchorTag);

  // handle reference-style shortcuts: [link text]
  // These must come last in case you've also got [link test][1]
  // or [link test](/foo)
  text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);

  // Lastly handle GithubMentions if option is enabled
  if (options.ghMentions) {
    text = text.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gmi, function (wm, st, escape, mentions, username) {
      if (escape === '\\') {
        return st + mentions;
      }

      //check if options.ghMentionsLink is a string
      if (!showdown.helper.isString(options.ghMentionsLink)) {
        throw new Error('ghMentionsLink option must be a string');
      }
      var lnk = options.ghMentionsLink.replace(/\{u}/g, username),
          target = '';
      if (options.openLinksInNewWindow) {
        target = ' target="¨E95Eblank"';
      }
      return st + '<a href="' + lnk + '"' + target + '>' + mentions + '</a>';
    });
  }

  text = globals.converter._dispatch('anchors.after', text, options, globals);
  return text;
});

// url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]

var simpleURLRegex  = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
    simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
    delimUrlRegex   = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
    simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,
    delimMailRegex  = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,

    replaceLink = function (options) {
      'use strict';
      return function (wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
        link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
        var lnkTxt = link,
            append = '',
            target = '',
            lmc    = leadingMagicChars || '',
            tmc    = trailingMagicChars || '';
        if (/^www\./i.test(link)) {
          link = link.replace(/^www\./i, 'http://www.');
        }
        if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
          append = trailingPunctuation;
        }
        if (options.openLinksInNewWindow) {
          target = ' target="¨E95Eblank"';
        }
        return lmc + '<a href="' + link + '"' + target + '>' + lnkTxt + '</a>' + append + tmc;
      };
    },

    replaceMail = function (options, globals) {
      'use strict';
      return function (wholeMatch, b, mail) {
        var href = 'mailto:';
        b = b || '';
        mail = showdown.subParser('unescapeSpecialChars')(mail, options, globals);
        if (options.encodeEmails) {
          href = showdown.helper.encodeEmailAddress(href + mail);
          mail = showdown.helper.encodeEmailAddress(mail);
        } else {
          href = href + mail;
        }
        return b + '<a href="' + href + '">' + mail + '</a>';
      };
    };

showdown.subParser('autoLinks', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('autoLinks.before', text, options, globals);

  text = text.replace(delimUrlRegex, replaceLink(options));
  text = text.replace(delimMailRegex, replaceMail(options, globals));

  text = globals.converter._dispatch('autoLinks.after', text, options, globals);

  return text;
});

showdown.subParser('simplifiedAutoLinks', function (text, options, globals) {
  'use strict';

  if (!options.simplifiedAutoLink) {
    return text;
  }

  text = globals.converter._dispatch('simplifiedAutoLinks.before', text, options, globals);

  if (options.excludeTrailingPunctuationFromURLs) {
    text = text.replace(simpleURLRegex2, replaceLink(options));
  } else {
    text = text.replace(simpleURLRegex, replaceLink(options));
  }
  text = text.replace(simpleMailRegex, replaceMail(options, globals));

  text = globals.converter._dispatch('simplifiedAutoLinks.after', text, options, globals);

  return text;
});

/**
 * These are all the transformations that form block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('blockGamut', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('blockGamut.before', text, options, globals);

  // we parse blockquotes first so that we can have headings and hrs
  // inside blockquotes
  text = showdown.subParser('blockQuotes')(text, options, globals);
  text = showdown.subParser('headers')(text, options, globals);

  // Do Horizontal Rules:
  text = showdown.subParser('horizontalRule')(text, options, globals);

  text = showdown.subParser('lists')(text, options, globals);
  text = showdown.subParser('codeBlocks')(text, options, globals);
  text = showdown.subParser('tables')(text, options, globals);

  // We already ran _HashHTMLBlocks() before, in Markdown(), but that
  // was to escape raw HTML in the original Markdown source. This time,
  // we're escaping the markup we've just created, so that we don't wrap
  // <p> tags around block-level tags.
  text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
  text = showdown.subParser('paragraphs')(text, options, globals);

  text = globals.converter._dispatch('blockGamut.after', text, options, globals);

  return text;
});

showdown.subParser('blockQuotes', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('blockQuotes.before', text, options, globals);

  // add a couple extra lines after the text and endtext mark
  text = text + '\n\n';

  var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;

  if (options.splitAdjacentBlockquotes) {
    rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
  }

  text = text.replace(rgx, function (bq) {
    // attacklab: hack around Konqueror 3.5.4 bug:
    // "----------bug".replace(/^-/g,"") == "bug"
    bq = bq.replace(/^[ \t]*>[ \t]?/gm, ''); // trim one level of quoting

    // attacklab: clean up hack
    bq = bq.replace(/¨0/g, '');

    bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines
    bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
    bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse

    bq = bq.replace(/(^|\n)/g, '$1  ');
    // These leading spaces screw with <pre> content, so we need to fix that:
    bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
      var pre = m1;
      // attacklab: hack around Konqueror 3.5.4 bug:
      pre = pre.replace(/^  /mg, '¨0');
      pre = pre.replace(/¨0/g, '');
      return pre;
    });

    return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
  });

  text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
  return text;
});

/**
 * Process Markdown `<pre><code>` blocks.
 */
showdown.subParser('codeBlocks', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('codeBlocks.before', text, options, globals);

  // sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '¨0';

  var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
  text = text.replace(pattern, function (wholeMatch, m1, m2) {
    var codeblock = m1,
        nextChar = m2,
        end = '\n';

    codeblock = showdown.subParser('outdent')(codeblock, options, globals);
    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
    codeblock = showdown.subParser('detab')(codeblock, options, globals);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines

    if (options.omitExtraWLInCodeBlocks) {
      end = '';
    }

    codeblock = '<pre><code>' + codeblock + end + '</code></pre>';

    return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
  });

  // strip sentinel
  text = text.replace(/¨0/, '');

  text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
  return text;
});

/**
 *
 *   *  Backtick quotes are used for <code></code> spans.
 *
 *   *  You can use multiple backticks as the delimiters if you want to
 *     include literal backticks in the code span. So, this input:
 *
 *         Just type ``foo `bar` baz`` at the prompt.
 *
 *       Will translate to:
 *
 *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
 *
 *    There's no arbitrary limit to the number of backticks you
 *    can use as delimters. If you need three consecutive backticks
 *    in your code, use four for delimiters, etc.
 *
 *  *  You can use spaces to get literal backticks at the edges:
 *
 *         ... type `` `bar` `` ...
 *
 *       Turns to:
 *
 *         ... type <code>`bar`</code> ...
 */
showdown.subParser('codeSpans', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('codeSpans.before', text, options, globals);

  if (typeof(text) === 'undefined') {
    text = '';
  }
  text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
    function (wholeMatch, m1, m2, m3) {
      var c = m3;
      c = c.replace(/^([ \t]*)/g, '');	// leading whitespace
      c = c.replace(/[ \t]*$/g, '');	// trailing whitespace
      c = showdown.subParser('encodeCode')(c, options, globals);
      c = m1 + '<code>' + c + '</code>';
      c = showdown.subParser('hashHTMLSpans')(c, options, globals);
      return c;
    }
  );

  text = globals.converter._dispatch('codeSpans.after', text, options, globals);
  return text;
});

/**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */
showdown.subParser('completeHTMLDocument', function (text, options, globals) {
  'use strict';

  if (!options.completeHTMLDocument) {
    return text;
  }

  text = globals.converter._dispatch('completeHTMLDocument.before', text, options, globals);

  var doctype = 'html',
      doctypeParsed = '<!DOCTYPE HTML>\n',
      title = '',
      charset = '<meta charset="utf-8">\n',
      lang = '',
      metadata = '';

  if (typeof globals.metadata.parsed.doctype !== 'undefined') {
    doctypeParsed = '<!DOCTYPE ' +  globals.metadata.parsed.doctype + '>\n';
    doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
    if (doctype === 'html' || doctype === 'html5') {
      charset = '<meta charset="utf-8">';
    }
  }

  for (var meta in globals.metadata.parsed) {
    if (globals.metadata.parsed.hasOwnProperty(meta)) {
      switch (meta.toLowerCase()) {
        case 'doctype':
          break;

        case 'title':
          title = '<title>' +  globals.metadata.parsed.title + '</title>\n';
          break;

        case 'charset':
          if (doctype === 'html' || doctype === 'html5') {
            charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
          } else {
            charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
          }
          break;

        case 'language':
        case 'lang':
          lang = ' lang="' + globals.metadata.parsed[meta] + '"';
          metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
          break;

        default:
          metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
      }
    }
  }

  text = doctypeParsed + '<html' + lang + '>\n<head>\n' + title + charset + metadata + '</head>\n<body>\n' + text.trim() + '\n</body>\n</html>';

  text = globals.converter._dispatch('completeHTMLDocument.after', text, options, globals);
  return text;
});

/**
 * Convert all tabs to spaces
 */
showdown.subParser('detab', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('detab.before', text, options, globals);

  // expand first n-1 tabs
  text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width

  // replace the nth with two sentinels
  text = text.replace(/\t/g, '¨A¨B');

  // use the sentinel to anchor our regex so it doesn't explode
  text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
    var leadingText = m1,
        numSpaces = 4 - leadingText.length % 4;  // g_tab_width

    // there *must* be a better way to do this:
    for (var i = 0; i < numSpaces; i++) {
      leadingText += ' ';
    }

    return leadingText;
  });

  // clean up sentinels
  text = text.replace(/¨A/g, '    ');  // g_tab_width
  text = text.replace(/¨B/g, '');

  text = globals.converter._dispatch('detab.after', text, options, globals);
  return text;
});

showdown.subParser('ellipsis', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('ellipsis.before', text, options, globals);

  text = text.replace(/\.\.\./g, '…');

  text = globals.converter._dispatch('ellipsis.after', text, options, globals);

  return text;
});

/**
 * These are all the transformations that occur *within* block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('emoji', function (text, options, globals) {
  'use strict';

  if (!options.emoji) {
    return text;
  }

  text = globals.converter._dispatch('emoji.before', text, options, globals);

  var emojiRgx = /:([\S]+?):/g;

  text = text.replace(emojiRgx, function (wm, emojiCode) {
    if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
      return showdown.helper.emojis[emojiCode];
    }
    return wm;
  });

  text = globals.converter._dispatch('emoji.after', text, options, globals);

  return text;
});

/**
 * Smart processing for ampersands and angle brackets that need to be encoded.
 */
showdown.subParser('encodeAmpsAndAngles', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals);

  // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
  // http://bumppo.net/projects/amputator/
  text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');

  // Encode naked <'s
  text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;');

  // Encode <
  text = text.replace(/</g, '&lt;');

  // Encode >
  text = text.replace(/>/g, '&gt;');

  text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
  return text;
});

/**
 * Returns the string, with after processing the following backslash escape sequences.
 *
 * attacklab: The polite way to do this is with the new escapeCharacters() function:
 *
 *    text = escapeCharacters(text,"\\",true);
 *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
 *
 * ...but we're sidestepping its use of the (slow) RegExp constructor
 * as an optimization for Firefox.  This function gets called a LOT.
 */
showdown.subParser('encodeBackslashEscapes', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);

  text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
  text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown.helper.escapeCharactersCallback);

  text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
  return text;
});

/**
 * Encode/escape certain characters inside Markdown code runs.
 * The point is that in code, these characters are literals,
 * and lose their special Markdown meanings.
 */
showdown.subParser('encodeCode', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('encodeCode.before', text, options, globals);

  // Encode all ampersands; HTML entities are not
  // entities within a Markdown code span.
  text = text
    .replace(/&/g, '&amp;')
  // Do the angle bracket song and dance:
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  // Now, escape characters that are magic in Markdown:
    .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);

  text = globals.converter._dispatch('encodeCode.after', text, options, globals);
  return text;
});

/**
 * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
 * don't conflict with their use in Markdown for code, italics and strong.
 */
showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.before', text, options, globals);

  // Build a regex to find HTML tags.
  var tags     = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
      comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;

  text = text.replace(tags, function (wholeMatch) {
    return wholeMatch
      .replace(/(.)<\/?code>(?=.)/g, '$1`')
      .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
  });

  text = text.replace(comments, function (wholeMatch) {
    return wholeMatch
      .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
  });

  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.after', text, options, globals);
  return text;
});

/**
 * Handle github codeblocks prior to running HashHTML so that
 * HTML contained within the codeblock gets escaped properly
 * Example:
 * ```ruby
 *     def hello_world(x)
 *       puts "Hello, #{x}"
 *     end
 * ```
 */
showdown.subParser('githubCodeBlocks', function (text, options, globals) {
  'use strict';

  // early exit if option is not enabled
  if (!options.ghCodeBlocks) {
    return text;
  }

  text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);

  text += '¨0';

  text = text.replace(/(?:^|\n)(```+|~~~+)([^\s`~]*)\n([\s\S]*?)\n\1/g, function (wholeMatch, delim, language, codeblock) {
    var end = (options.omitExtraWLInCodeBlocks) ? '' : '\n';

    // First parse the github code block
    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
    codeblock = showdown.subParser('detab')(codeblock, options, globals);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

    codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';

    codeblock = showdown.subParser('hashBlock')(codeblock, options, globals);

    // Since GHCodeblocks can be false positives, we need to
    // store the primitive text and the parsed text in a global var,
    // and then return a token
    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
  });

  // attacklab: strip sentinel
  text = text.replace(/¨0/, '');

  return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
});

showdown.subParser('hashBlock', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashBlock.before', text, options, globals);
  text = text.replace(/(^\n+|\n+$)/g, '');
  text = '\n\n¨K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
  text = globals.converter._dispatch('hashBlock.after', text, options, globals);
  return text;
});

/**
 * Hash and escape <code> elements that should not be parsed as markdown
 */
showdown.subParser('hashCodeTags', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashCodeTags.before', text, options, globals);

  var repFunc = function (wholeMatch, match, left, right) {
    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
    return '¨C' + (globals.gHtmlSpans.push(codeblock) - 1) + 'C';
  };

  // Hash naked <code>
  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '<code\\b[^>]*>', '</code>', 'gim');

  text = globals.converter._dispatch('hashCodeTags.after', text, options, globals);
  return text;
});

showdown.subParser('hashElement', function (text, options, globals) {
  'use strict';

  return function (wholeMatch, m1) {
    var blockText = m1;

    // Undo double lines
    blockText = blockText.replace(/\n\n/g, '\n');
    blockText = blockText.replace(/^\n/, '');

    // strip trailing blank lines
    blockText = blockText.replace(/\n+$/g, '');

    // Replace the element text with a marker ("¨KxK" where x is its key)
    blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';

    return blockText;
  };
});

showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashHTMLBlocks.before', text, options, globals);

  var blockTags = [
        'pre',
        'div',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'blockquote',
        'table',
        'dl',
        'ol',
        'ul',
        'script',
        'noscript',
        'form',
        'fieldset',
        'iframe',
        'math',
        'style',
        'section',
        'header',
        'footer',
        'nav',
        'article',
        'aside',
        'address',
        'audio',
        'canvas',
        'figure',
        'hgroup',
        'output',
        'video',
        'p'
      ],
      repFunc = function (wholeMatch, match, left, right) {
        var txt = wholeMatch;
        // check if this html element is marked as markdown
        // if so, it's contents should be parsed as markdown
        if (left.search(/\bmarkdown\b/) !== -1) {
          txt = left + globals.converter.makeHtml(match) + right;
        }
        return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
      };

  if (options.backslashEscapesHTMLTags) {
    // encode backslash escaped HTML tags
    text = text.replace(/\\<(\/?[^>]+?)>/g, function (wm, inside) {
      return '&lt;' + inside + '&gt;';
    });
  }

  // hash HTML Blocks
  for (var i = 0; i < blockTags.length; ++i) {

    var opTagPos,
        rgx1     = new RegExp('^ {0,3}(<' + blockTags[i] + '\\b[^>]*>)', 'im'),
        patLeft  = '<' + blockTags[i] + '\\b[^>]*>',
        patRight = '</' + blockTags[i] + '>';
    // 1. Look for the first position of the first opening HTML tag in the text
    while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {

      // if the HTML tag is \ escaped, we need to escape it and break


      //2. Split the text in that position
      var subTexts = showdown.helper.splitAtIndex(text, opTagPos),
      //3. Match recursively
          newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, 'im');

      // prevent an infinite loop
      if (newSubText1 === subTexts[1]) {
        break;
      }
      text = subTexts[0].concat(newSubText1);
    }
  }
  // HR SPECIAL CASE
  text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
    showdown.subParser('hashElement')(text, options, globals));

  // Special case for standalone HTML comments
  text = showdown.helper.replaceRecursiveRegExp(text, function (txt) {
    return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
  }, '^ {0,3}<!--', '-->', 'gm');

  // PHP and ASP-style processor instructions (<?...?> and <%...%>)
  text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
    showdown.subParser('hashElement')(text, options, globals));

  text = globals.converter._dispatch('hashHTMLBlocks.after', text, options, globals);
  return text;
});

/**
 * Hash span elements that should not be parsed as markdown
 */
showdown.subParser('hashHTMLSpans', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashHTMLSpans.before', text, options, globals);

  function hashHTMLSpan (html) {
    return '¨C' + (globals.gHtmlSpans.push(html) - 1) + 'C';
  }

  // Hash Self Closing tags
  text = text.replace(/<[^>]+?\/>/gi, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash tags without properties
  text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash tags with properties
  text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash self closing tags without />
  text = text.replace(/<[^>]+?>/gi, function (wm) {
    return hashHTMLSpan(wm);
  });

  /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/

  text = globals.converter._dispatch('hashHTMLSpans.after', text, options, globals);
  return text;
});

/**
 * Unhash HTML spans
 */
showdown.subParser('unhashHTMLSpans', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('unhashHTMLSpans.before', text, options, globals);

  for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
    var repText = globals.gHtmlSpans[i],
        // limiter to prevent infinite loop (assume 10 as limit for recurse)
        limit = 0;

    while (/¨C(\d+)C/.test(repText)) {
      var num = RegExp.$1;
      repText = repText.replace('¨C' + num + 'C', globals.gHtmlSpans[num]);
      if (limit === 10) {
        console.error('maximum nesting of 10 spans reached!!!');
        break;
      }
      ++limit;
    }
    text = text.replace('¨C' + i + 'C', repText);
  }

  text = globals.converter._dispatch('unhashHTMLSpans.after', text, options, globals);
  return text;
});

/**
 * Hash and escape <pre><code> elements that should not be parsed as markdown
 */
showdown.subParser('hashPreCodeTags', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashPreCodeTags.before', text, options, globals);

  var repFunc = function (wholeMatch, match, left, right) {
    // encode html entities
    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
  };

  // Hash <pre><code>
  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^ {0,3}</code>\\s*</pre>', 'gim');

  text = globals.converter._dispatch('hashPreCodeTags.after', text, options, globals);
  return text;
});

showdown.subParser('headers', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('headers.before', text, options, globals);

  var headerLevelStart = (isNaN(parseInt(options.headerLevelStart))) ? 1 : parseInt(options.headerLevelStart),

  // Set text-style headers:
  //	Header 1
  //	========
  //
  //	Header 2
  //	--------
  //
      setextRegexH1 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
      setextRegexH2 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;

  text = text.replace(setextRegexH1, function (wholeMatch, m1) {

    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
        hLevel = headerLevelStart,
        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
    return showdown.subParser('hashBlock')(hashBlock, options, globals);
  });

  text = text.replace(setextRegexH2, function (matchFound, m1) {
    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
        hLevel = headerLevelStart + 1,
        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
    return showdown.subParser('hashBlock')(hashBlock, options, globals);
  });

  // atx-style headers:
  //  # Header 1
  //  ## Header 2
  //  ## Header 2 with closing hashes ##
  //  ...
  //  ###### Header 6
  //
  var atxStyle = (options.requireSpaceBeforeHeadingText) ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;

  text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
    var hText = m2;
    if (options.customizedHeaderId) {
      hText = m2.replace(/\s?\{([^{]+?)}\s*$/, '');
    }

    var span = showdown.subParser('spanGamut')(hText, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m2) + '"',
        hLevel = headerLevelStart - 1 + m1.length,
        header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';

    return showdown.subParser('hashBlock')(header, options, globals);
  });

  function headerId (m) {
    var title,
        prefix;

    // It is separate from other options to allow combining prefix and customized
    if (options.customizedHeaderId) {
      var match = m.match(/\{([^{]+?)}\s*$/);
      if (match && match[1]) {
        m = match[1];
      }
    }

    title = m;

    // Prefix id to prevent causing inadvertent pre-existing style matches.
    if (showdown.helper.isString(options.prefixHeaderId)) {
      prefix = options.prefixHeaderId;
    } else if (options.prefixHeaderId === true) {
      prefix = 'section-';
    } else {
      prefix = '';
    }

    if (!options.rawPrefixHeaderId) {
      title = prefix + title;
    }

    if (options.ghCompatibleHeaderId) {
      title = title
        .replace(/ /g, '-')
        // replace previously escaped chars (&, ¨ and $)
        .replace(/&amp;/g, '')
        .replace(/¨T/g, '')
        .replace(/¨D/g, '')
        // replace rest of the chars (&~$ are repeated as they might have been escaped)
        // borrowed from github's redcarpet (some they should produce similar results)
        .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '')
        .toLowerCase();
    } else if (options.rawHeaderId) {
      title = title
        .replace(/ /g, '-')
        // replace previously escaped chars (&, ¨ and $)
        .replace(/&amp;/g, '&')
        .replace(/¨T/g, '¨')
        .replace(/¨D/g, '$')
        // replace " and '
        .replace(/["']/g, '-')
        .toLowerCase();
    } else {
      title = title
        .replace(/[^\w]/g, '')
        .toLowerCase();
    }

    if (options.rawPrefixHeaderId) {
      title = prefix + title;
    }

    if (globals.hashLinkCounts[title]) {
      title = title + '-' + (globals.hashLinkCounts[title]++);
    } else {
      globals.hashLinkCounts[title] = 1;
    }
    return title;
  }

  text = globals.converter._dispatch('headers.after', text, options, globals);
  return text;
});

/**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */
showdown.subParser('horizontalRule', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('horizontalRule.before', text, options, globals);

  var key = showdown.subParser('hashBlock')('<hr />', options, globals);
  text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
  text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
  text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);

  text = globals.converter._dispatch('horizontalRule.after', text, options, globals);
  return text;
});

/**
 * Turn Markdown image shortcuts into <img> tags.
 */
showdown.subParser('images', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('images.before', text, options, globals);

  var inlineRegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
      crazyRegExp       = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
      base64RegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
      referenceRegExp   = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
      refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;

  function writeImageTagBase64 (wholeMatch, altText, linkId, url, width, height, m5, title) {
    url = url.replace(/\s/g, '');
    return writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title);
  }

  function writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title) {

    var gUrls   = globals.gUrls,
        gTitles = globals.gTitles,
        gDims   = globals.gDimensions;

    linkId = linkId.toLowerCase();

    if (!title) {
      title = '';
    }
    // Special case for explicit empty url
    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
      url = '';

    } else if (url === '' || url === null) {
      if (linkId === '' || linkId === null) {
        // lower-case and turn embedded newlines into spaces
        linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
      }
      url = '#' + linkId;

      if (!showdown.helper.isUndefined(gUrls[linkId])) {
        url = gUrls[linkId];
        if (!showdown.helper.isUndefined(gTitles[linkId])) {
          title = gTitles[linkId];
        }
        if (!showdown.helper.isUndefined(gDims[linkId])) {
          width = gDims[linkId].width;
          height = gDims[linkId].height;
        }
      } else {
        return wholeMatch;
      }
    }

    altText = altText
      .replace(/"/g, '&quot;')
    //altText = showdown.helper.escapeCharacters(altText, '*_', false);
      .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
    //url = showdown.helper.escapeCharacters(url, '*_', false);
    url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
    var result = '<img src="' + url + '" alt="' + altText + '"';

    if (title) {
      title = title
        .replace(/"/g, '&quot;')
      //title = showdown.helper.escapeCharacters(title, '*_', false);
        .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      result += ' title="' + title + '"';
    }

    if (width && height) {
      width  = (width === '*') ? 'auto' : width;
      height = (height === '*') ? 'auto' : height;

      result += ' width="' + width + '"';
      result += ' height="' + height + '"';
    }

    result += ' />';

    return result;
  }

  // First, handle reference-style labeled images: ![alt text][id]
  text = text.replace(referenceRegExp, writeImageTag);

  // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")

  // base64 encoded images
  text = text.replace(base64RegExp, writeImageTagBase64);

  // cases with crazy urls like ./image/cat1).png
  text = text.replace(crazyRegExp, writeImageTag);

  // normal cases
  text = text.replace(inlineRegExp, writeImageTag);

  // handle reference-style shortcuts: ![img text]
  text = text.replace(refShortcutRegExp, writeImageTag);

  text = globals.converter._dispatch('images.after', text, options, globals);
  return text;
});

showdown.subParser('italicsAndBold', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('italicsAndBold.before', text, options, globals);

  // it's faster to have 3 separate regexes for each case than have just one
  // because of backtracing, in some cases, it could lead to an exponential effect
  // called "catastrophic backtrace". Ominous!

  function parseInside (txt, left, right) {
    /*
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    */
    return left + txt + right;
  }

  // Parse underscores
  if (options.literalMidWordUnderscores) {
    text = text.replace(/\b___(\S[\s\S]*)___\b/g, function (wm, txt) {
      return parseInside (txt, '<strong><em>', '</em></strong>');
    });
    text = text.replace(/\b__(\S[\s\S]*)__\b/g, function (wm, txt) {
      return parseInside (txt, '<strong>', '</strong>');
    });
    text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function (wm, txt) {
      return parseInside (txt, '<em>', '</em>');
    });
  } else {
    text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
    });
    text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
    });
    text = text.replace(/_([^\s_][\s\S]*?)_/g, function (wm, m) {
      // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
    });
  }

  // Now parse asterisks
  if (options.literalMidWordAsterisks) {
    text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]+?)\*\*\*\B(?!\*)/g, function (wm, lead, txt) {
      return parseInside (txt, lead + '<strong><em>', '</em></strong>');
    });
    text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]+?)\*\*\B(?!\*)/g, function (wm, lead, txt) {
      return parseInside (txt, lead + '<strong>', '</strong>');
    });
    text = text.replace(/([^*]|^)\B\*(\S[\s\S]+?)\*\B(?!\*)/g, function (wm, lead, txt) {
      return parseInside (txt, lead + '<em>', '</em>');
    });
  } else {
    text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
    });
    text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
    });
    text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
      // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
    });
  }


  text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
  return text;
});

/**
 * Form HTML ordered (numbered) and unordered (bulleted) lists.
 */
showdown.subParser('lists', function (text, options, globals) {
  'use strict';

  /**
   * Process the contents of a single ordered or unordered list, splitting it
   * into individual list items.
   * @param {string} listStr
   * @param {boolean} trimTrailing
   * @returns {string}
   */
  function processListItems (listStr, trimTrailing) {
    // The $g_list_level global keeps track of when we're inside a list.
    // Each time we enter a list, we increment it; when we leave a list,
    // we decrement. If it's zero, we're not in a list anymore.
    //
    // We do this because when we're not inside a list, we want to treat
    // something like this:
    //
    //    I recommend upgrading to version
    //    8. Oops, now this line is treated
    //    as a sub-list.
    //
    // As a single paragraph, despite the fact that the second line starts
    // with a digit-period-space sequence.
    //
    // Whereas when we're inside a list (or sub-list), that line will be
    // treated as the start of a sub-list. What a kludge, huh? This is
    // an aspect of Markdown's syntax that's hard to parse perfectly
    // without resorting to mind-reading. Perhaps the solution is to
    // change the syntax rules such that sub-lists must start with a
    // starting cardinal number; e.g. "1." or "a.".
    globals.gListLevel++;

    // trim trailing blank lines:
    listStr = listStr.replace(/\n{2,}$/, '\n');

    // attacklab: add sentinel to emulate \z
    listStr += '¨0';

    var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
        isParagraphed = (/\n[ \t]*\n(?!¨0)/.test(listStr));

    // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
    // which is a syntax breaking change
    // activating this option reverts to old behavior
    if (options.disableForced4SpacesIndentedSublists) {
      rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
    }

    listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
      checked = (checked && checked.trim() !== '');

      var item = showdown.subParser('outdent')(m4, options, globals),
          bulletStyle = '';

      // Support for github tasklists
      if (taskbtn && options.tasklists) {
        bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
        item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
          var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
          if (checked) {
            otp += ' checked';
          }
          otp += '>';
          return otp;
        });
      }

      // ISSUE #312
      // This input: - - - a
      // causes trouble to the parser, since it interprets it as:
      // <ul><li><li><li>a</li></li></li></ul>
      // instead of:
      // <ul><li>- - a</li></ul>
      // So, to prevent it, we will put a marker (¨A)in the beginning of the line
      // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
      item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (wm2) {
        return '¨A' + wm2;
      });

      // m1 - Leading line or
      // Has a double return (multi paragraph) or
      // Has sublist
      if (m1 || (item.search(/\n{2,}/) > -1)) {
        item = showdown.subParser('githubCodeBlocks')(item, options, globals);
        item = showdown.subParser('blockGamut')(item, options, globals);
      } else {
        // Recursion for sub-lists:
        item = showdown.subParser('lists')(item, options, globals);
        item = item.replace(/\n$/, ''); // chomp(item)
        item = showdown.subParser('hashHTMLBlocks')(item, options, globals);

        // Colapse double linebreaks
        item = item.replace(/\n\n+/g, '\n\n');
        if (isParagraphed) {
          item = showdown.subParser('paragraphs')(item, options, globals);
        } else {
          item = showdown.subParser('spanGamut')(item, options, globals);
        }
      }

      // now we need to remove the marker (¨A)
      item = item.replace('¨A', '');
      // we can finally wrap the line in list item tags
      item =  '<li' + bulletStyle + '>' + item + '</li>\n';

      return item;
    });

    // attacklab: strip sentinel
    listStr = listStr.replace(/¨0/g, '');

    globals.gListLevel--;

    if (trimTrailing) {
      listStr = listStr.replace(/\s+$/, '');
    }

    return listStr;
  }

  function styleStartNumber (list, listType) {
    // check if ol and starts by a number different than 1
    if (listType === 'ol') {
      var res = list.match(/^ *(\d+)\./);
      if (res && res[1] !== '1') {
        return ' start="' + res[1] + '"';
      }
    }
    return '';
  }

  /**
   * Check and parse consecutive lists (better fix for issue #142)
   * @param {string} list
   * @param {string} listType
   * @param {boolean} trimTrailing
   * @returns {string}
   */
  function parseConsecutiveLists (list, listType, trimTrailing) {
    // check if we caught 2 or more consecutive lists by mistake
    // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
    var olRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
        ulRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
        counterRxg = (listType === 'ul') ? olRgx : ulRgx,
        result = '';

    if (list.search(counterRxg) !== -1) {
      (function parseCL (txt) {
        var pos = txt.search(counterRxg),
            style = styleStartNumber(list, listType);
        if (pos !== -1) {
          // slice
          result += '\n\n<' + listType + style + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n';

          // invert counterType and listType
          listType = (listType === 'ul') ? 'ol' : 'ul';
          counterRxg = (listType === 'ul') ? olRgx : ulRgx;

          //recurse
          parseCL(txt.slice(pos));
        } else {
          result += '\n\n<' + listType + style + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
        }
      })(list);
    } else {
      var style = styleStartNumber(list, listType);
      result = '\n\n<' + listType + style + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
    }

    return result;
  }

  /** Start of list parsing **/
  text = globals.converter._dispatch('lists.before', text, options, globals);
  // add sentinel to hack around khtml/safari bug:
  // http://bugs.webkit.org/show_bug.cgi?id=11231
  text += '¨0';

  if (globals.gListLevel) {
    text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
      function (wholeMatch, list, m2) {
        var listType = (m2.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, true);
      }
    );
  } else {
    text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
      function (wholeMatch, m1, list, m3) {
        var listType = (m3.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, false);
      }
    );
  }

  // strip sentinel
  text = text.replace(/¨0/, '');
  text = globals.converter._dispatch('lists.after', text, options, globals);
  return text;
});

/**
 * Parse metadata at the top of the document
 */
showdown.subParser('metadata', function (text, options, globals) {
  'use strict';

  if (!options.metadata) {
    return text;
  }

  text = globals.converter._dispatch('metadata.before', text, options, globals);

  function parseMetadataContents (content) {
    // raw is raw so it's not changed in any way
    globals.metadata.raw = content;

    // escape chars forbidden in html attributes
    // double quotes
    content = content
      // ampersand first
      .replace(/&/g, '&amp;')
      // double quotes
      .replace(/"/g, '&quot;');

    content = content.replace(/\n {4}/g, ' ');
    content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function (wm, key, value) {
      globals.metadata.parsed[key] = value;
      return '';
    });
  }

  text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function (wholematch, format, content) {
    parseMetadataContents(content);
    return '¨M';
  });

  text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function (wholematch, format, content) {
    if (format) {
      globals.metadata.format = format;
    }
    parseMetadataContents(content);
    return '¨M';
  });

  text = text.replace(/¨M/g, '');

  text = globals.converter._dispatch('metadata.after', text, options, globals);
  return text;
});

/**
 * Remove one level of line-leading tabs or spaces
 */
showdown.subParser('outdent', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('outdent.before', text, options, globals);

  // attacklab: hack around Konqueror 3.5.4 bug:
  // "----------bug".replace(/^-/g,"") == "bug"
  text = text.replace(/^(\t|[ ]{1,4})/gm, '¨0'); // attacklab: g_tab_width

  // attacklab: clean up hack
  text = text.replace(/¨0/g, '');

  text = globals.converter._dispatch('outdent.after', text, options, globals);
  return text;
});

/**
 *
 */
showdown.subParser('paragraphs', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('paragraphs.before', text, options, globals);
  // Strip leading and trailing lines:
  text = text.replace(/^\n+/g, '');
  text = text.replace(/\n+$/g, '');

  var grafs = text.split(/\n{2,}/g),
      grafsOut = [],
      end = grafs.length; // Wrap <p> tags

  for (var i = 0; i < end; i++) {
    var str = grafs[i];
    // if this is an HTML marker, copy it
    if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
      grafsOut.push(str);

    // test for presence of characters to prevent empty lines being parsed
    // as paragraphs (resulting in undesired extra empty paragraphs)
    } else if (str.search(/\S/) >= 0) {
      str = showdown.subParser('spanGamut')(str, options, globals);
      str = str.replace(/^([ \t]*)/g, '<p>');
      str += '</p>';
      grafsOut.push(str);
    }
  }

  /** Unhashify HTML blocks */
  end = grafsOut.length;
  for (i = 0; i < end; i++) {
    var blockText = '',
        grafsOutIt = grafsOut[i],
        codeFlag = false;
    // if this is a marker for an html block...
    // use RegExp.test instead of string.search because of QML bug
    while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
      var delim = RegExp.$1,
          num   = RegExp.$2;

      if (delim === 'K') {
        blockText = globals.gHtmlBlocks[num];
      } else {
        // we need to check if ghBlock is a false positive
        if (codeFlag) {
          // use encoded version of all text
          blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text, options, globals);
        } else {
          blockText = globals.ghCodeBlocks[num].codeblock;
        }
      }
      blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs

      grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
      // Check if grafsOutIt is a pre->code
      if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
        codeFlag = true;
      }
    }
    grafsOut[i] = grafsOutIt;
  }
  text = grafsOut.join('\n');
  // Strip leading and trailing lines:
  text = text.replace(/^\n+/g, '');
  text = text.replace(/\n+$/g, '');
  return globals.converter._dispatch('paragraphs.after', text, options, globals);
});

/**
 * Run extension
 */
showdown.subParser('runExtension', function (ext, text, options, globals) {
  'use strict';

  if (ext.filter) {
    text = ext.filter(text, globals.converter, options);

  } else if (ext.regex) {
    // TODO remove this when old extension loading mechanism is deprecated
    var re = ext.regex;
    if (!(re instanceof RegExp)) {
      re = new RegExp(re, 'g');
    }
    text = text.replace(re, ext.replace);
  }

  return text;
});

/**
 * These are all the transformations that occur *within* block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('spanGamut', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('spanGamut.before', text, options, globals);
  text = showdown.subParser('codeSpans')(text, options, globals);
  text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
  text = showdown.subParser('encodeBackslashEscapes')(text, options, globals);

  // Process anchor and image tags. Images must come first,
  // because ![foo][f] looks like an anchor.
  text = showdown.subParser('images')(text, options, globals);
  text = showdown.subParser('anchors')(text, options, globals);

  // Make links out of things like `<http://example.com/>`
  // Must come after anchors, because you can use < and >
  // delimiters in inline links like [this](<url>).
  text = showdown.subParser('autoLinks')(text, options, globals);
  text = showdown.subParser('simplifiedAutoLinks')(text, options, globals);
  text = showdown.subParser('emoji')(text, options, globals);
  text = showdown.subParser('underline')(text, options, globals);
  text = showdown.subParser('italicsAndBold')(text, options, globals);
  text = showdown.subParser('strikethrough')(text, options, globals);
  text = showdown.subParser('ellipsis')(text, options, globals);

  // we need to hash HTML tags inside spans
  text = showdown.subParser('hashHTMLSpans')(text, options, globals);

  // now we encode amps and angles
  text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals);

  // Do hard breaks
  if (options.simpleLineBreaks) {
    // GFM style hard breaks
    // only add line breaks if the text does not contain a block (special case for lists)
    if (!/\n\n¨K/.test(text)) {
      text = text.replace(/\n+/g, '<br />\n');
    }
  } else {
    // Vanilla hard breaks
    text = text.replace(/  +\n/g, '<br />\n');
  }

  text = globals.converter._dispatch('spanGamut.after', text, options, globals);
  return text;
});

showdown.subParser('strikethrough', function (text, options, globals) {
  'use strict';

  function parseInside (txt) {
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    return '<del>' + txt + '</del>';
  }

  if (options.strikethrough) {
    text = globals.converter._dispatch('strikethrough.before', text, options, globals);
    text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (wm, txt) { return parseInside(txt); });
    text = globals.converter._dispatch('strikethrough.after', text, options, globals);
  }

  return text;
});

/**
 * Strips link definitions from text, stores the URLs and titles in
 * hash references.
 * Link defs are in the form: ^[id]: url "optional title"
 */
showdown.subParser('stripLinkDefinitions', function (text, options, globals) {
  'use strict';

  var regex       = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
      base64Regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;

  // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '¨0';

  var replaceFunc = function (wholeMatch, linkId, url, width, height, blankLines, title) {
    linkId = linkId.toLowerCase();
    if (url.match(/^data:.+?\/.+?;base64,/)) {
      // remove newlines
      globals.gUrls[linkId] = url.replace(/\s/g, '');
    } else {
      globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url, options, globals);  // Link IDs are case-insensitive
    }

    if (blankLines) {
      // Oops, found blank lines, so it's not a title.
      // Put back the parenthetical statement we stole.
      return blankLines + title;

    } else {
      if (title) {
        globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
      }
      if (options.parseImgDimensions && width && height) {
        globals.gDimensions[linkId] = {
          width:  width,
          height: height
        };
      }
    }
    // Completely remove the definition from the text
    return '';
  };

  // first we try to find base64 link references
  text = text.replace(base64Regex, replaceFunc);

  text = text.replace(regex, replaceFunc);

  // attacklab: strip sentinel
  text = text.replace(/¨0/, '');

  return text;
});

showdown.subParser('tables', function (text, options, globals) {
  'use strict';

  if (!options.tables) {
    return text;
  }

  var tableRgx       = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
    //singeColTblRgx = /^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n(?: {0,3}\|.+\|\n)+(?:\n\n|¨0)/gm;
      singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;

  function parseStyles (sLine) {
    if (/^:[ \t]*--*$/.test(sLine)) {
      return ' style="text-align:left;"';
    } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
      return ' style="text-align:right;"';
    } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
      return ' style="text-align:center;"';
    } else {
      return '';
    }
  }

  function parseHeaders (header, style) {
    var id = '';
    header = header.trim();
    // support both tablesHeaderId and tableHeaderId due to error in documentation so we don't break backwards compatibility
    if (options.tablesHeaderId || options.tableHeaderId) {
      id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
    }
    header = showdown.subParser('spanGamut')(header, options, globals);

    return '<th' + id + style + '>' + header + '</th>\n';
  }

  function parseCells (cell, style) {
    var subText = showdown.subParser('spanGamut')(cell, options, globals);
    return '<td' + style + '>' + subText + '</td>\n';
  }

  function buildTable (headers, cells) {
    var tb = '<table>\n<thead>\n<tr>\n',
        tblLgn = headers.length;

    for (var i = 0; i < tblLgn; ++i) {
      tb += headers[i];
    }
    tb += '</tr>\n</thead>\n<tbody>\n';

    for (i = 0; i < cells.length; ++i) {
      tb += '<tr>\n';
      for (var ii = 0; ii < tblLgn; ++ii) {
        tb += cells[i][ii];
      }
      tb += '</tr>\n';
    }
    tb += '</tbody>\n</table>\n';
    return tb;
  }

  function parseTable (rawTable) {
    var i, tableLines = rawTable.split('\n');

    for (i = 0; i < tableLines.length; ++i) {
      // strip wrong first and last column if wrapped tables are used
      if (/^ {0,3}\|/.test(tableLines[i])) {
        tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, '');
      }
      if (/\|[ \t]*$/.test(tableLines[i])) {
        tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
      }
      // parse code spans first, but we only support one line code spans
      tableLines[i] = showdown.subParser('codeSpans')(tableLines[i], options, globals);
    }

    var rawHeaders = tableLines[0].split('|').map(function (s) { return s.trim();}),
        rawStyles = tableLines[1].split('|').map(function (s) { return s.trim();}),
        rawCells = [],
        headers = [],
        styles = [],
        cells = [];

    tableLines.shift();
    tableLines.shift();

    for (i = 0; i < tableLines.length; ++i) {
      if (tableLines[i].trim() === '') {
        continue;
      }
      rawCells.push(
        tableLines[i]
          .split('|')
          .map(function (s) {
            return s.trim();
          })
      );
    }

    if (rawHeaders.length < rawStyles.length) {
      return rawTable;
    }

    for (i = 0; i < rawStyles.length; ++i) {
      styles.push(parseStyles(rawStyles[i]));
    }

    for (i = 0; i < rawHeaders.length; ++i) {
      if (showdown.helper.isUndefined(styles[i])) {
        styles[i] = '';
      }
      headers.push(parseHeaders(rawHeaders[i], styles[i]));
    }

    for (i = 0; i < rawCells.length; ++i) {
      var row = [];
      for (var ii = 0; ii < headers.length; ++ii) {
        if (showdown.helper.isUndefined(rawCells[i][ii])) {

        }
        row.push(parseCells(rawCells[i][ii], styles[ii]));
      }
      cells.push(row);
    }

    return buildTable(headers, cells);
  }

  text = globals.converter._dispatch('tables.before', text, options, globals);

  // find escaped pipe characters
  text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);

  // parse multi column tables
  text = text.replace(tableRgx, parseTable);

  // parse one column tables
  text = text.replace(singeColTblRgx, parseTable);

  text = globals.converter._dispatch('tables.after', text, options, globals);

  return text;
});

showdown.subParser('underline', function (text, options, globals) {
  'use strict';

  if (!options.underline) {
    return text;
  }

  text = globals.converter._dispatch('underline.before', text, options, globals);

  if (options.literalMidWordUnderscores) {
    text = text.replace(/\b_?__(\S[\s\S]*)___?\b/g, function (wm, txt) {
      return '<u>' + txt + '</u>';
    });
  } else {
    text = text.replace(/_?__(\S[\s\S]*?)___?/g, function (wm, m) {
      return (/\S$/.test(m)) ? '<u>' + m + '</u>' : wm;
    });
  }

  // escape remaining underscores to prevent them being parsed by italic and bold
  text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);

  text = globals.converter._dispatch('underline.after', text, options, globals);

  return text;
});

/**
 * Swap back in all the special characters we've hidden.
 */
showdown.subParser('unescapeSpecialChars', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('unescapeSpecialChars.before', text, options, globals);

  text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
    var charCodeToReplace = parseInt(m1);
    return String.fromCharCode(charCodeToReplace);
  });

  text = globals.converter._dispatch('unescapeSpecialChars.after', text, options, globals);
  return text;
});

var root = this;

// AMD Loader
if (typeof define === 'function' && define.amd) {
  define(function () {
    'use strict';
    return showdown;
  });

// CommonJS/nodeJS Loader
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = showdown;

// Regular Browser loader
} else {
  root.showdown = showdown;
}
}).call(this);

//# sourceMappingURL=showdown.js.map

/*!
Deck JS - deck.smartdown
Copyright (c) 2015-2017 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module provides a support for a shorter syntax for slides, with a syntax that is close to plain markdown.
This is actually the third try and it uses showdown.js (1st: smartsyntax, 2nd: smarkdown (using markdown.js)).

*/

(function($, deck, undefined) {
    var $d = $(document);
    var may = function(f) {return f ? f : function() {}};
    var endsWith = function(longStr, part) {return longStr.indexOf(part, longStr.length - part.length) !== -1;}
    var REST = null;
    var RESTRIM = null;
    var startsWith = function(longStr, part) {
        if (part == "%+class:") alert(":::"+longStr+":::");
        var res = longStr.substr(0, part.length) == part;
        REST = res ? longStr.slice(part.length) : null;
        RESTRIM = res ? REST.replace(/^ */, "") : null;
        return res;
    }
    var startsWithIgnoreCase = function(longStr, part) {
        var res = longStr.substr(0, part.length).toUpperCase() == part.toUpperCase();
        REST = res ? longStr.slice(part.length) : null;
        RESTRIM = res ? REST.replace(/^ */, "") : null;
        return res;
    }
    var isArray = Array.isArray || $.isArray; // there is also an alternative in markdownjs

    // the animation duration is stateful across the smarkdown sections
    var animationDurationDefault = 400;
    var animationDuration = animationDurationDefault;

    function clone(a) { return JSON.parse(JSON.stringify(a)) }
    function findTag(nodelist, regexp, startAt) {
        var i = startAt || 0;
        while (i < nodelist.length) {
            var tn = nodelist[i].tagName;
            if (typeof tn === 'string' && tn.match(regexp)) {
                return i;
            }
            i++;
        }
        return -1;
    }
    function addSpaceSeparatedAttr(o, a, c) {
        if (o.hasAttribute(a)) {
            o.setAttribute(a, o.getAttribute(a)+" "+c);
        } else {
            o.setAttribute(a, c);
        }
    }
    function addClass(o, c) {
        addSpaceSeparatedAttr(o, 'class', c);
    }
    function hasClass(o, c) {
        return isElement(o) && $(o).hasClass(c);
    }
    function isObject(o) {
        return !isArray(o) && typeof(o) === 'object';
    }
    function resolveChunk(include){
        var content = null;
        if (include.startsWith('#')) {
            content = $(include).text();
        } else {
            $.ajax({
                url: include,
                contentType: 'text/plain',
                dataType: 'text',
                async: false,
                success: function(d) { content = d; },
                error: function(jqXHR, status, err) {
                    alert("Got a '"+status+"' error in chunk '"+include+"'");
                    console.log(err);
                }
            });
        }
        return content;
    }
    function maybeProcessGenerateSlides(slides, s) {
        var slide = slides[s];
        if (!isElement(slide.firstChild) || !slide.firstChild.tagName.match(/^h1$/i)) return s;
        if (startsWithIgnoreCase(slide.firstChild.textContent, '@COPY:')) {
            var main = RESTRIM.split(/:/);
            var baseSelector = main[0];
            var animPart = main.slice(1).join(':');
            var hasAnim = ! animPart.match(/^\s*$/);
            var base = null;
            for (i in slides) {
                if ($(slides[i]).is(baseSelector)) {
                    base = slides[i];
                }
            }
            if (base == null) {
                // TODO should alert based on options
                alert("Could not find matches for selector '"+baseSelector+"' in @COPY");
                return s;
            }
            slide = $(base).clone().get(0);
            slide.removeAttribute('id');
            if (hasAnim) {
                slide.classList.add('anim-continue');
                $('<span>').text('@anim:'+animPart).insertAfter(slide.firstChild); // first is the heading, we want to keep it there
            }
            slides[s] = slide;
            return s;
        } else if (startsWithIgnoreCase(slide.firstChild.textContent, '@CHUNK:')) {
            var main = RESTRIM.split(/:/);
            var include = main[0];
            var content = resolveChunk(include);
            var chunkSlides = interpretationOfSmartLanguage(content, document);
            // TODO optionally prefix all ids
            Array.prototype.splice.apply(slides, [s, 1].concat(chunkSlides));
            return s;
        }
        return s;
    }
    function hasIDOrClassDecoration(s) {
        return s.match(/^(|([\s\S]*[^\n\r\s]))[\n\r\s]*\{([^{}<>]*)\}[\n\r]*$/);
    }
    function maybeProcessIDOrClassDecoration(txtNode) {
        var txt = txtNode.textContent;
        var matched = hasIDOrClassDecoration(txt); // make sure the group is set
        if (!matched) { return; }
        var base = RegExp.$1; // set by hasIDOrClassDecoration
        var decorations = RegExp.$3.split(/ +/);
        var node = txtNode.parentNode;
        if (node.tagName == 'STYLE') { // CSS style often end in {....} and we never want to add a class to it
            return;
        }
        txtNode.textContent = base;
        for (d in decorations) {
            // allow .class and class notations
            if (startsWith(decorations[d], ".")) decorations[d] = decorations[d].slice(1);

            if (startsWith(decorations[d], "#")) {
                node.setAttribute('id', decorations[d].slice(1));
            } else {
                if (startsWith(decorations[d], "*") | startsWith(decorations[d], "/")) {
                    addSpaceSeparatedAttr(node, "data-container-class", decorations[d].slice(1));
                } else {
                    addClass(node, decorations[d]);
                }
            }                
        }
    }
    function maybeProcessChunk(txtNode) {
        var txt = txtNode.textContent;
        var node = txtNode.parentNode;
        if (startsWithIgnoreCase(txt, '@CHUNK:')) {
            var main = RESTRIM.split(/:/);
            var include = main[0];
            var content = resolveChunk(include);
            var chunkParts = interpretationOfSmartLanguage(content, document, false);
            replaceNodeByNodes(node, chunkParts);
            return false; // we don't need to reprocess
        }
        return false;
    }
    /*
    function possiblyHideIfEmpty(tree) { // if it contains only anim stuf etc
        var hide = false;
        var i = isObject(tree[1]) ? 2 : 1;
        function onlyDivAnims(tt) {
            var only = true;
            var start = isObject(tt[1]) ? 2 : 1;
            tt.slice(start).forEach(function(e) {
                if (!isArray(e) || !isObject(e[1]) || (" "+e[1]["class"]).indexOf(" anim-") == -1) {
                    only = false;
                }
            });
            return only;
        }

        if (onlyDivAnims(tree)) hide = true;
        else if (tree.length == i+1 && isArray(tree[i]) && tree[i][0] == "p"
                 && onlyDivAnims(tree[i])) hide = true;
        if (hide) {
            ensureHasAttributes(tree);
            tree[1].style = "display: none";
        }
    }*/
    function maybeProcessComment(txtNode) {
        var line = txtNode.textContent;
        var clean = function(s) { return s.replace(/ *$/, ''); };
        if (line.match(/^([\s\S]*)( |\n)\/\/(.*)[\n\r]*$/) || line.match(/^()()\/\/(.*)[\n\r]*$/)) {
            var d1 = RegExp.$1;
            var d2 = RegExp.$3;
            txtNode.textContent = clean(d1);
            var node = txtNode.parentNode;
            var comm = document.createElement('span');
            comm.classList.add('comment');
            $(comm).text(clean(d2));
            
            if (txtNode.textContent == '' && node.childNodes.length == 1) {
                // in the case the comment is on an empty thing (and only child) then move it to previous sibling
                node.previousElementSibling.appendChild(comm);
                node.remove();
            } else {
                $(comm).insertAfter(txtNode);
            }

            return true;
        }
        return false;
    }
    function maybeProcessAtSomething(txtNode) {
        var node = txtNode.parentNode;
        var line = txtNode.textContent;
        if (startsWithIgnoreCase(line, "@SVG:")) {
            var content = RESTRIM
            var parts = content.split(/ +/);
            if (parts.length == 3 || (parts.length > 3 && hasIDOrClassDecoration(line))) {
                var div = document.createElement('div');
                $(div).attr({
                    'data-src': parts[0],
                    'data-width': parts[1],
                    'data-height': parts[2],
                    'class': 'svg-object'
                });
                $(div).text(parts.slice(3).join(" "));
                $(div).insertAfter(txtNode);
                txtNode.remove();
            } else {
                alert("Expecting 3 parameters to '@SVG: path width height'");
                return false;
            }
        } else if (startsWithIgnoreCase(line, "@ANIM:")) {
            line = RESTRIM.replace(/%[+]/i, "%%"); // protect the "%+class" from being split
            var allToAdd = [];
            var parts = line.split(/ *\| */); // TODO: configurize + reconsider all separators?
            for (i in parts) {
                // process each group of simultaneous animations
                var subparts = parts[i].split(/ *\+ */);
                for (ii in subparts) {
                    var what = subparts[ii];
                    if (what == "") continue; // as a good side effect, this allows to set a "anim-continue" on all elements (e.g., put a + at the end of the line) 
                    var continuating  = ii != subparts.length-1;
                    var toAdd = document.createElement('span');
                    addClass(toAdd, 'slide');
                    toAdd.style.display = 'none';
                    // process the individual element (reminder: animationDuration is global)
                    function dw() { addSpaceSeparatedAttr(toAdd, "data-what", REST); }
                    function dd() { addSpaceSeparatedAttr(toAdd, "data-dur", ""+animationDuration); }
                    if (startsWithIgnoreCase(what, "%duration:")) {
                        animationDuration = RESTRIM == "" ? animationDurationDefault : RESTRIM;
                        continue;
                    } else if (startsWithIgnoreCase(what, "%dur:")) {
                        animationDuration = RESTRIM == "" ? animationDurationDefault : RESTRIM;
                        continue;
                    } else if (startsWithIgnoreCase(what, "%play:")) {
                        addClass(toAdd, "anim-play");
                        dw();
                    } else if (startsWithIgnoreCase(what, "%pause:")) {
                        addClass(toAdd, "anim-pause");
                        dw();
                    } else if (startsWith(what, "%viewbox:")) {
                        addClass(toAdd, "anim-viewboxas");
                        // TODO: if REST contains ':', two params (then the target is specified, else it is just all SVGs root elements)
                        addSpaceSeparatedAttr(toAdd, "data-as", REST);
                        addSpaceSeparatedAttr(toAdd, "data-what", "svg");
                        dd();
                    } else if (startsWith(what, "%attr:")) {
                        var main = RESTRIM.split(/ *: */);
                        addClass(toAdd, "anim-attribute");
                        addSpaceSeparatedAttr(toAdd, "data-what", main[0]);
                        addSpaceSeparatedAttr(toAdd, "data-attr", main.slice(1).join(":"));
                        dd();
                    } else if (startsWith(what, "%along:")) {
                        var main = RESTRIM.split(/ *: */);
                        addClass(toAdd, "anim-along");
                        if (startsWith(main[0], "-")) {
                            main[0] = RESTRIM;
                            addSpaceSeparatedAttr(toAdd, "data-reverse", "true");
                        }
                        addSpaceSeparatedAttr(toAdd, "data-path", main[0]);
                        addSpaceSeparatedAttr(toAdd, "data-what", main.slice(1).join(":"));
                        dd();
                    } else if (startsWith(what, "%%class:")) {
                        var main = RESTRIM.split(/ *: */);
                        if (main[0].startsWith("/")) {
                            addClass(toAdd, "anim-addcontainerclass");
                            addSpaceSeparatedAttr(toAdd, "data-class", main[0].substr(1));
                        } else {
                            addClass(toAdd, "anim-addclass");
                            addSpaceSeparatedAttr(toAdd, "data-class", main[0]);
                            addSpaceSeparatedAttr(toAdd, "data-what", main.slice(1).join(":"));
                        }
                    } else if (startsWith(what, "%-class:")) {
                        var main = RESTRIM.split(/ *: */);
                        if (main[0].startsWith("/")) {
                            addClass(toAdd, "anim-removecontainerclass");
                            addSpaceSeparatedAttr(toAdd, "data-class", main[0].substr(1));
                        } else {
                            addClass(toAdd, "anim-removeclass");
                            addSpaceSeparatedAttr(toAdd, "data-class", main[0]);
                            addSpaceSeparatedAttr(toAdd, "data-what", main.slice(1).join(":"));
                        }
                    } else if (startsWith(what, "+")) {
                        addClass(toAdd, "anim-show");
                        dw();
                    } else if (startsWith(what, "-")) {
                        addClass(toAdd, "anim-hide");
                        dw(); dd();
                    } else {
                        addClass(toAdd, "anim-show");
                        addSpaceSeparatedAttr(toAdd, "data-what", what);
                        dd();
                    }
                    if (continuating) addClass(toAdd, "anim-continue");
                    allToAdd.push(toAdd);
                }
            }
            // replacing the content with allToAdd elements, hiding the container if empty
            if (node.childNodes.length == 1) {
                node.style.display = 'none';
            }
            replaceNodeByNodes(txtNode, allToAdd);
            return true;
        } else {
            return false;
        }
        // TODO? handle the decorations for comments
        return true;
    }
    function processMath(content) {
        return content.
            replace(/\$((\\[$]|[^$])([^$\\]|[\\].)*)\$/g, '<span class="latex">$1</span>').
            replace(/\$\$/, '$');
    }

    function nodelistToArray(nl) {
        return Array.prototype.slice.call(nl);
    }
    function eachNode(tree, app) {
        // handles some kind of live updates + a return additional offset
        var i = 0;
        while (i < tree.childNodes.length) {
            var res = app(i, tree.childNodes[i]);
            i++;
            if (typeof res === 'number') {
                i += res;
                if (i<0) i = 0;
            }
        }
    }
    function eachTextNodeRecursive(tree, f, prunePredicate) {
        if (typeof prunePredicate === 'undefined') {
            prunePredicate = function() { return false; };
        }
        (function patch(tree) {
            eachNode(tree, function(i, node) {
                if (isElement(node)) {
                    if (prunePredicate(i, node)) return;
                    patch(node);
                } else if (isText(node)) {
                    return f(i, node);
                }
            });
        })(tree);
    }
    function isElement(node) {
        return node.nodeType == node.ELEMENT_NODE;
    }
    function isText(node) {
        return node.nodeType == node.TEXT_NODE;
    }
    function isXmlComment(node) {
        return node.nodeType == node.COMMENT_NODE;
    }
    function replaceNodeByNodes(node, nodes) {
        for (var i = nodes.length; i >= 0; i--) {
            $(nodes[i]).insertAfter(node);
        }
        node.remove();
    }
    function changeTagname(to) {
        return function(_, elt) {
            var newElt = $("<"+to+"/>");
            Array.prototype.slice.call(elt.attributes).forEach(function(a) {
                newElt.attr(a.name, a.value);
            });
            $(elt).wrapInner(newElt).children(0).unwrap();
        };
    }
    function adoptAttributes(dest, src) {
        Array.prototype.slice.call(src.attributes).forEach(function(a) {
            dest.setAttribute(a.name, a.value);
            src.removeAttribute(a.name);
        });
    }
    function copyAttributes(dest, src) {
        Array.prototype.slice.call(src.attributes).forEach(function(a) {
            dest.setAttribute(a.name, a.value);
        });
    }

    var interpretationOfSmartLanguage = function(smart, doc, isRoot) {

        isRoot = typeof isRoot !== 'undefined' ? isRoot : true;

        var converter = new showdown.Converter();
        converter.setFlavor('github');
        converter.setOption('noHeaderId',  true),
        converter.setOption('parseImgDimensions', true);
        converter.setOption('literalMidWordUnderscores', true); // _ is convenient in math blocks
        converter.setOption('simpleLineBreaks', false);
        var wrap = document.createElement('div');
        wrap.innerHTML = smart;
        $('mdiv', wrap).each(function(i, e) {
            e.setAttribute('data-markdown', true);
            changeTagname('div')(i, e);
        });
        wrap.innerHTML = converter.makeHtml(wrap.innerHTML);

        var tree = nodelistToArray(wrap.childNodes); // toplevel is an array (only top level for now)

        // split at each h2 or h1
        if (isRoot) (function makeTopLevelDivs(tree) {
            var firstIndex = findTag(tree, /^(h1|h2)$/i);
            if (firstIndex == -1) return;
            var secondIndex = findTag(tree, /^(h1|h2)$/i, firstIndex+1);
            if (secondIndex == -1) secondIndex = tree.length;

            var slide = document.createElement('section');
            var block = Array.prototype.splice.call(tree, firstIndex, secondIndex - firstIndex, slide);
            for (i in block) {
                slide.appendChild(block[i]);
            }
            makeTopLevelDivs(tree);
        })(tree);

        window.tree = tree;

        // process:
        // - the class and id decorations like    {#first hightlight slide}
        // - the @... custom notations
        // - the // for comments
        for (var s = 0; s < tree.length; s++) {
            var slide = tree[s];

            if (isRoot) s = maybeProcessGenerateSlides(tree, s);
            //console.log(slide, tree[s], slide.firstChild.textContent);
            slide = tree[s]; // the slide potentially got replaced

            // cleanup: first, remove first "p" in a "li" (happens when one put an empty line in a bullet list) (this cleanup is non-compliant, but it is convenient)
            (function patch(tree){ // tree is slide or a subelement
                eachNode(tree, function(i, node) {
                    if (isElement(node)) {
                        console.log(node.children.length);
                        if (node.tagName.match(/^li$/i) && node.children.length >= 1) {
                            var p = node.children[0];
                            if (p.tagName.match(/^p$/i)) {
                                $(p).contents().unwrap();
                            }
                        } else {
                            patch(node);
                        }
                    }
                });
            })(slide);
            // process @anim... and {} decoration
            eachTextNodeRecursive(slide, function(i, node) {
                // return -1 means reprocess from the same position
                if (maybeProcessChunk(node)) return -1;
                if (maybeProcessComment(node)) return -1;
                if (maybeProcessAtSomething(node)) return -1;
                if (maybeProcessIDOrClassDecoration(node)) return -1;
            });
            // process the $math$
            eachTextNodeRecursive(slide, function(i, node) { // what to do to a text node
                if (node.textContent.match(/\$/)) {
                    var wrap = document.createElement('div');
                    wrap.innerHTML = processMath(node.textContent);
                    eachTextNodeRecursive(wrap, function(i2, node2) {
                        maybeProcessIDOrClassDecoration(node2);
                    });
                    replaceNodeByNodes(node, wrap.childNodes);
                }
            }, function(i, node) { // when to prune
                return hasClass(node, 'smart-nomath')
                    || node.tagName.match(/^(textarea|code|pre)$/i)
            });

            (function patch(tree){ // tree is a slide or a subelement
                eachNode(tree, function(i, node) {
                    if (isElement(node)) {
                        var precodepatch = false;
                        if (node.tagName.match(/^code$/i) &&
                            node.parentNode.tagName.match(/^pre$/i)) {
                            // we found a code>pre, look for language-... in its classes
                            for (var i = 0; i < node.classList.length; i++) {
                                if (node.classList[i].match(/^language-/)) {
                                    precodepatch = true;
                                    break;
                                }
                            }
                            // if we have a pre>code and we won't patch it, propagate the class/id to the pre
                            if (!precodepatch) {
                                adoptAttributes(node.parentNode, node);
                            }
                        }
                        if (precodepatch) {
                            node.innerHTML = node.textContent; // unescape entities
                            copyAttributes(node.parentNode, node);
                            // custom-remove some copied attributes
                            node.classList.remove('slide');
                        } else {
                            patch(node);
                        }
                    }
                });
            })(slide);

            // custom class to change the element type
            (function patch(tree){ // tree is a slide or a subelement
                var hasClassRemove = function(n, c) {
                    if (hasClass(n, c)) {
                        n.classList.remove(c);
                        return true;
                    } else {
                        return false;
                    }
                };
                eachNode(tree, function(i, node) {
                    if (isElement(node)) {
                        if (hasClassRemove(node, "smartpre")) { // easier to put a pre in a list
                            changeTagname('pre')(i, node);
                        } else if (hasClassRemove(node, "smartcode")) { // work around bug with code with entities in lists
                            changeTagname('code')(i, node);
                        } else if (hasClassRemove(node, "smartprecode")) { // work around bug with code with entities in lists
                            $(node).wrap('<pre/>');
                            changeTagname('code')(i, node);
                        } else if (hasClassRemove(node, "smartarea")) { // work around bug with code with entities in lists
                            changeTagname('textarea')(i, node);
                        } else {
                            patch(node);
                        }
                    }
                });
            })(slide);

            if (isRoot) {
                // now propagate the first title attribute to the slide
                adoptAttributes(slide, slide.children[0]);
                // and make it a slide
                slide.classList.add('slide');
            }

        }
        return tree;
    }

    // this have to be executed before the deck init
    $d.bind('deck.beforeInit', function() {
        $('.smart').each(function() { // TODO make it configurable
            var it = this;
            var slides = interpretationOfSmartLanguage(it.innerHTML, document);
            $(it).after(slides);
            // remove the smart node (to avoid having an empty non-slide sibling (e.g., in the presenter view))
            $(it).remove();
        });
        var opts = $[deck]('getOptions');
        var maybe = function(f) { return f || (function(){}); }
        if (typeof opts.AFTERSMARKDOWN !== 'undefined') {
            alert("Warning: you're using 'smartdown' but you have a AFTERSMARKDOWN property.\nThis new 'smartdown' (smart vs smark) uses AFTERSMARTDOWN (with a T).")
        }
        maybe(opts.AFTERSMARTDOWN)();
        $[deck]('reInitSlidesArray')
    });

})(jQuery, 'deck');

/*!
  Deck JS - deck.fit
  Copyright (c) 2012 Rémi Emonet
  Licensed under the MIT license.
  https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
  This extension provides a way of scaling the slides to fit the slide container.
  A "design size" is used to do global scaling of all slides in the same way.
  The default design size is 800x600.
*/
(function($, deck, window, undefined) {
    var $d = $(document),
    $w = $(window),
    timer, // Timeout id for debouncing
    rootSlides,
    
    /*
      Internal function to do all the dirty work of scaling the slides.
    */
    scaleDeck = function() {
        var opts = $[deck]('getOptions');
        var addMarginX = opts.fitMarginX * 2;
        var addMarginY = opts.fitMarginY * 2;
        var fitMode = opts.fitMode;
        var sdw = opts.designWidth;
        var sdh = opts.designHeight;
        var $container = $[deck]('getContainer');
        var scaleX = $container.hasClass(opts.classes.globalscale) ? $container.innerWidth() / (sdw+addMarginX) : 1;
        var scaleY = $container.hasClass(opts.classes.globalscale) ? $container.innerHeight() / (sdh+addMarginY) : 1;
        //var truescaleX = $container.hasClass(opts.classes.globalscale) ? $container.innerWidth() / (sdw) : 1;
        //var truescaleY = $container.hasClass(opts.classes.globalscale) ? $container.innerHeight() / (sdh) : 1;
        var scale = scaleX < scaleY ? scaleX : scaleY;
        var rootSlides = [];
        var slideTest = $.map([opts.classes.before, opts.classes.previous, opts.classes.current, opts.classes.next, opts.classes.after],
                              function(el, i) {return '.' + el;}).join(', ');

        $.each($[deck]('getSlides'), function(i, $el) {
            if (!$el.parentsUntil(opts.selectors.container).length) {
                rootSlides.push($el);
            }
        });
        $.each(rootSlides, function(i, $slide) {
            $slide.css('width', sdw);
            $slide.css('height', sdh);
            $.each('Webkit Moz O ms Khtml'.split(' '), function(i, prefix) {
                if (scale == 1) {
                    $slide.css(prefix + 'Transform', '');
                } else {
                    if (fitMode == "left top" || fitMode == "top left") {
                        // ok align left/top (ok with the percents)
                        $slide.css(prefix + 'Transform', 'translate(-50%,-50%) scale(' + scale + ' , ' + scale + ') translate(50%,50%) translate('+(addMarginX/2)+'px,'+(addMarginY/2)+'px)');
                    } else if (fitMode == "center middle") {
                        // ok align center/middle
                        $slide.css(prefix + 'Transform', 'translate(-50%,-50%) scale(' + scale + ' , ' + scale + ') translate(50%, 50%) translate('+($container.innerWidth()/2/scale - sdw/2)+'px,'+($container.innerHeight()/2/scale - sdh/2)+'px)');
                    } else if (fitMode == "right bottom" || fitMode == "bottom right") {
                        // ok align right/bottom
                        $slide.css(prefix + 'Transform', 'translate(-50%,-50%) scale(' + scale + ' , ' + scale + ') translate(50%, 50%) translate('+($container.innerWidth()/scale - sdw - addMarginX/2)+'px,'+($container.innerHeight()/scale - sdh - addMarginY/2)+'px)');
                    } else if (fitMode == "stretched") {
                        // ok stretched (with respect of the margin, i.e., it is center/middle)
                        $slide.css(prefix + 'Transform', 'scale(' + scaleX + ' , ' + scaleY + ') translate('+(($container.innerWidth()-sdw)/2/scaleX)+'px,'+(($container.innerHeight()-sdh)/2/scaleY)+'px)');
                    }
                }
            });
        });
        
    }
    
    /*
      Extends defaults/options.
      
      options.designWidth
      Defaults to 800. You may instead specify a width as a number
      of px and all slides will be scaled in the same way, considering their
      size is the provided one.
      
      options.designHeight
      Defaults to 600. You may instead specify a height as a number
      of px and all slides will be scaled in the same way, considering their
      size is the provided one.
      
      options.fitMode
      How to adapt the slide to the container.
      Only the following combinations are available for now:
      "center middle", "top left", "bottom right", "stretched"
    
      options.fitMarginX
      options.fitMarginY
      Defaults to 5. Adds some margin in design space units.
      E.g., if the designe width is 800 and the margin is 5, the slide will be
      810 pixel wide before rescaling.
    
      options.scaleDebounce
      Scaling on the browser resize event is debounced. This number is the
      threshold in milliseconds. You can learn more about debouncing here:
      http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
      
    */
    $.extend(true, $[deck].defaults, {
        classes: {
            globalscale: 'deck-globalscale'
        },
        keys: {
            scale: 83 // s
        },
        
        designWidth: 800,
        designHeight: 600,
        fitMode: "center middle",
        fitMarginX: 0,
        fitMarginY: 0,
        scaleDebounce: 200
    });
    
    /*
      jQuery.deck('disableScale')
      
      Disables scaling and removes the scale class from the deck container.
    */
    $[deck]('extend', 'disableScale', function() {
        $[deck]('getContainer').removeClass($[deck]('getOptions').classes.globalscale);
        scaleDeck();
    });
    
    /*
      jQuery.deck('enableScale')
      
      Enables scaling and adds the scale class to the deck container.
    */
    $[deck]('extend', 'enableScale', function() {
        $[deck]('getContainer').addClass($[deck]('getOptions').classes.globalscale);
        scaleDeck();
    });
    
    /*
      jQuery.deck('toggleScale')
      
      Toggles between enabling and disabling scaling.
    */
    $[deck]('extend', 'toggleScale', function() {
        var $c = $[deck]('getContainer');
        $[deck]($c.hasClass($[deck]('getOptions').classes.globalscale) ?
                'disableScale' : 'enableScale');
    });
    
    $d.bind('deck.init', function() {
        var opts = $[deck]('getOptions');
        
        // Debounce the resize scaling
        $w.unbind('resize.deckscale').bind('resize.deckscale', function() {
            window.clearTimeout(timer);
            timer = window.setTimeout(scaleDeck, opts.scaleDebounce);
        })
        // Scale once on load, in case images or something change layout
            .unbind('load.deckscale').bind('load.deckscale', scaleDeck);
        
        // Bind key events
        $d.unbind('keydown.deckscale').bind('keydown.deckscale', function(e) {
            if (e.which === opts.keys.scale || $.inArray(e.which, opts.keys.scale) > -1) {
                $[deck]('toggleScale');
                e.preventDefault();
            }
        });
        
        // Enable scale on init
        $[deck]('enableScale');
    });
})(jQuery, 'deck', this);


(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var t;if(typeof window!=="undefined"){t=window}else if(typeof global!=="undefined"){t=global}else if(typeof self!=="undefined"){t=self}else{t=this}t.katex=e()}})(function(){var e,t,r;return function e(t,r,a){function i(l,s){if(!r[l]){if(!t[l]){var o=typeof require=="function"&&require;if(!s&&o)return o(l,!0);if(n)return n(l,!0);var u=new Error("Cannot find module '"+l+"'");throw u.code="MODULE_NOT_FOUND",u}var f=r[l]={exports:{}};t[l][0].call(f.exports,function(e){var r=t[l][1][e];return i(r?r:e)},f,f.exports,e,t,r,a)}return r[l].exports}var n=typeof require=="function"&&require;for(var l=0;l<a.length;l++)i(a[l]);return i}({1:[function(e,t,r){"use strict";var a=e("./src/ParseError");var i=h(a);var n=e("./src/Settings");var l=h(n);var s=e("./src/buildTree");var o=h(s);var u=e("./src/parseTree");var f=h(u);var d=e("./src/utils");var c=h(d);function h(e){return e&&e.__esModule?e:{default:e}}var v=function e(t,r,a){c.default.clearNode(r);var i=new l.default(a);var n=(0,f.default)(t,i);var s=(0,o.default)(n,t,i).toNode();r.appendChild(s)};if(typeof document!=="undefined"){if(document.compatMode!=="CSS1Compat"){typeof console!=="undefined"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your "+"website has a suitable doctype.");v=function e(){throw new i.default("KaTeX doesn't work in quirks mode.")}}}var p=function e(t,r){var a=new l.default(r);var i=(0,f.default)(t,a);return(0,o.default)(i,t,a).toMarkup()};var m=function e(t,r){var a=new l.default(r);return(0,f.default)(t,a)};t.exports={render:v,renderToString:p,__parse:m,ParseError:i.default}},{"./src/ParseError":29,"./src/Settings":32,"./src/buildTree":37,"./src/parseTree":46,"./src/utils":51}],2:[function(e,t,r){t.exports={default:e("core-js/library/fn/json/stringify"),__esModule:true}},{"core-js/library/fn/json/stringify":6}],3:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/define-property"),__esModule:true}},{"core-js/library/fn/object/define-property":7}],4:[function(e,t,r){"use strict";r.__esModule=true;r.default=function(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}},{}],5:[function(e,t,r){"use strict";r.__esModule=true;var a=e("../core-js/object/define-property");var i=n(a);function n(e){return e&&e.__esModule?e:{default:e}}r.default=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;(0,i.default)(e,a.key,a)}}return function(t,r,a){if(r)e(t.prototype,r);if(a)e(t,a);return t}}()},{"../core-js/object/define-property":3}],6:[function(e,t,r){var a=e("../../modules/_core");var i=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function e(t){return i.stringify.apply(i,arguments)}},{"../../modules/_core":10}],7:[function(e,t,r){e("../../modules/es6.object.define-property");var a=e("../../modules/_core").Object;t.exports=function e(t,r,i){return a.defineProperty(t,r,i)}},{"../../modules/_core":10,"../../modules/es6.object.define-property":23}],8:[function(e,t,r){t.exports=function(e){if(typeof e!="function")throw TypeError(e+" is not a function!");return e}},{}],9:[function(e,t,r){var a=e("./_is-object");t.exports=function(e){if(!a(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":19}],10:[function(e,t,r){var a=t.exports={version:"2.5.0"};if(typeof __e=="number")__e=a},{}],11:[function(e,t,r){var a=e("./_a-function");t.exports=function(e,t,r){a(e);if(t===undefined)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,a){return e.call(t,r,a)};case 3:return function(r,a,i){return e.call(t,r,a,i)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":8}],12:[function(e,t,r){t.exports=!e("./_fails")(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},{"./_fails":15}],13:[function(e,t,r){var a=e("./_is-object");var i=e("./_global").document;var n=a(i)&&a(i.createElement);t.exports=function(e){return n?i.createElement(e):{}}},{"./_global":16,"./_is-object":19}],14:[function(e,t,r){var a=e("./_global");var i=e("./_core");var n=e("./_ctx");var l=e("./_hide");var s="prototype";var o=function(e,t,r){var u=e&o.F;var f=e&o.G;var d=e&o.S;var c=e&o.P;var h=e&o.B;var v=e&o.W;var p=f?i:i[t]||(i[t]={});var m=p[s];var g=f?a:d?a[t]:(a[t]||{})[s];var y,b,x;if(f)r=t;for(y in r){b=!u&&g&&g[y]!==undefined;if(b&&y in p)continue;x=b?g[y]:r[y];p[y]=f&&typeof g[y]!="function"?r[y]:h&&b?n(x,a):v&&g[y]==x?function(e){var t=function(t,r,a){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,a)}return e.apply(this,arguments)};t[s]=e[s];return t}(x):c&&typeof x=="function"?n(Function.call,x):x;if(c){(p.virtual||(p.virtual={}))[y]=x;if(e&o.R&&m&&!m[y])l(m,y,x)}}};o.F=1;o.G=2;o.S=4;o.P=8;o.B=16;o.W=32;o.U=64;o.R=128;t.exports=o},{"./_core":10,"./_ctx":11,"./_global":16,"./_hide":17}],15:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(e){return true}}},{}],16:[function(e,t,r){var a=t.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();if(typeof __g=="number")__g=a},{}],17:[function(e,t,r){var a=e("./_object-dp");var i=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return a.f(e,t,i(1,r))}:function(e,t,r){e[t]=r;return e}},{"./_descriptors":12,"./_object-dp":20,"./_property-desc":21}],18:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a!=7})},{"./_descriptors":12,"./_dom-create":13,"./_fails":15}],19:[function(e,t,r){t.exports=function(e){return typeof e==="object"?e!==null:typeof e==="function"}},{}],20:[function(e,t,r){var a=e("./_an-object");var i=e("./_ie8-dom-define");var n=e("./_to-primitive");var l=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function e(t,r,s){a(t);r=n(r,true);a(s);if(i)try{return l(t,r,s)}catch(e){}if("get"in s||"set"in s)throw TypeError("Accessors not supported!");if("value"in s)t[r]=s.value;return t}},{"./_an-object":9,"./_descriptors":12,"./_ie8-dom-define":18,"./_to-primitive":22}],21:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}}},{}],22:[function(e,t,r){var a=e("./_is-object");t.exports=function(e,t){if(!a(e))return e;var r,i;if(t&&typeof(r=e.toString)=="function"&&!a(i=r.call(e)))return i;if(typeof(r=e.valueOf)=="function"&&!a(i=r.call(e)))return i;if(!t&&typeof(r=e.toString)=="function"&&!a(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":19}],23:[function(e,t,r){var a=e("./_export");a(a.S+a.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":12,"./_export":14,"./_object-dp":20}],24:[function(e,t,r){"use strict";function a(e){if(!e.__matchAtRelocatable){var t=e.source+"|()";var r="g"+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"");e.__matchAtRelocatable=new RegExp(t,r)}return e.__matchAtRelocatable}function i(e,t,r){if(e.global||e.sticky){throw new Error("matchAt(...): Only non-global regexes are supported")}var i=a(e);i.lastIndex=r;var n=i.exec(t);if(n[n.length-1]==null){n.length=n.length-1;return n}else{return null}}t.exports=i},{}],25:[function(e,t,r){"use strict";var a=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty;var n=Object.prototype.propertyIsEnumerable;function l(e){if(e===null||e===undefined){throw new TypeError("Object.assign cannot be called with null or undefined")}return Object(e)}function s(){try{if(!Object.assign){return false}var e=new String("abc");e[5]="de";if(Object.getOwnPropertyNames(e)[0]==="5"){return false}var t={};for(var r=0;r<10;r++){t["_"+String.fromCharCode(r)]=r}var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if(a.join("")!=="0123456789"){return false}var i={};"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e});if(Object.keys(Object.assign({},i)).join("")!=="abcdefghijklmnopqrst"){return false}return true}catch(e){return false}}t.exports=s()?Object.assign:function(e,t){var r;var s=l(e);var o;for(var u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var f in r){if(i.call(r,f)){s[f]=r[f]}}if(a){o=a(r);for(var d=0;d<o.length;d++){if(n.call(r,o[d])){s[o[d]]=r[o[d]]}}}}return s}},{}],26:[function(e,t,r){"use strict";var a=e("babel-runtime/helpers/classCallCheck");var i=d(a);var n=e("babel-runtime/helpers/createClass");var l=d(n);var s=e("match-at");var o=d(s);var u=e("./ParseError");var f=d(u);function d(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(t,r,a,n){(0,i.default)(this,e);this.text=t;this.start=r;this.end=a;this.lexer=n}(0,l.default)(e,[{key:"range",value:function t(r,a){if(r.lexer!==this.lexer){return new e(a)}return new e(a,this.start,r.end,this.lexer)}}]);return e}();var h=new RegExp("([ \r\n\t]+)|"+"([!-\\[\\]-\u2027\u202a-\ud7ff\uf900-\uffff]"+"|[\ud800-\udbff][\udc00-\udfff]"+"|\\\\(?:[a-zA-Z]+|[^\ud800-\udfff])"+")");var v=function(){function e(t){(0,i.default)(this,e);this.input=t;this.pos=0}(0,l.default)(e,[{key:"lex",value:function e(){var t=this.input;var r=this.pos;if(r===t.length){return new c("EOF",r,r,this)}var a=(0,o.default)(h,t,r);if(a===null){throw new f.default("Unexpected character: '"+t[r]+"'",new c(t[r],r,r+1,this))}var i=a[2]||" ";var n=this.pos;this.pos+=a[0].length;var l=this.pos;return new c(i,n,l,this)}}]);return e}();t.exports=v},{"./ParseError":29,"babel-runtime/helpers/classCallCheck":4,"babel-runtime/helpers/createClass":5,"match-at":24}],27:[function(e,t,r){"use strict";var a=e("babel-runtime/helpers/classCallCheck");var i=p(a);var n=e("babel-runtime/helpers/createClass");var l=p(n);var s=e("./Lexer");var o=p(s);var u=e("./macros");var f=p(u);var d=e("./ParseError");var c=p(d);var h=e("object-assign");var v=p(h);function p(e){return e&&e.__esModule?e:{default:e}}var m=function(){function e(t,r){(0,i.default)(this,e);this.lexer=new o.default(t);this.macros=(0,v.default)({},f.default,r);this.stack=[];this.discardedWhiteSpace=[]}(0,l.default)(e,[{key:"nextToken",value:function e(){for(;;){if(this.stack.length===0){this.stack.push(this.lexer.lex())}var t=this.stack.pop();var r=t.text;if(!(r.charAt(0)==="\\"&&this.macros.hasOwnProperty(r))){return t}var a=void 0;var i=this.macros[r];if(typeof i==="string"){var n=0;if(i.indexOf("#")!==-1){var l=i.replace(/##/g,"");while(l.indexOf("#"+(n+1))!==-1){++n}}var s=new o.default(i);i=[];a=s.lex();while(a.text!=="EOF"){i.push(a);a=s.lex()}i.reverse();i.numArgs=n;this.macros[r]=i}if(i.numArgs){var u=[];var f=void 0;for(f=0;f<i.numArgs;++f){var d=this.get(true);if(d.text==="{"){var h=[];var v=1;while(v!==0){a=this.get(false);h.push(a);if(a.text==="{"){++v}else if(a.text==="}"){--v}else if(a.text==="EOF"){throw new c.default("End of input in macro argument",d)}}h.pop();h.reverse();u[f]=h}else if(d.text==="EOF"){throw new c.default("End of input expecting macro argument",t)}else{u[f]=[d]}}i=i.slice();for(f=i.length-1;f>=0;--f){a=i[f];if(a.text==="#"){if(f===0){throw new c.default("Incomplete placeholder at end of macro body",a)}a=i[--f];if(a.text==="#"){i.splice(f+1,1)}else if(/^[1-9]$/.test(a.text)){i.splice.apply(i,[f,2].concat(u[a.text-1]))}else{throw new c.default("Not a valid argument number",a)}}}}this.stack=this.stack.concat(i)}}},{key:"get",value:function e(t){this.discardedWhiteSpace=[];var r=this.nextToken();if(t){while(r.text===" "){this.discardedWhiteSpace.push(r);r=this.nextToken()}}return r}},{key:"unget",value:function e(t){this.stack.push(t);while(this.discardedWhiteSpace.length!==0){this.stack.push(this.discardedWhiteSpace.pop())}}}]);return e}();t.exports=m},{"./Lexer":26,"./ParseError":29,"./macros":44,"babel-runtime/helpers/classCallCheck":4,"babel-runtime/helpers/createClass":5,"object-assign":25}],28:[function(e,t,r){"use strict";var a=e("babel-runtime/helpers/classCallCheck");var i=u(a);var n=e("babel-runtime/helpers/createClass");var l=u(n);var s=e("./fontMetrics");var o=u(s);function u(e){return e&&e.__esModule?e:{default:e}}var f=6;var d=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]];var c=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488];var h=function e(t,r){return r.size<2?t:d[t-1][r.size-1]};var v=function(){function e(t){(0,i.default)(this,e);this.style=t.style;this.color=t.color;this.size=t.size||f;this.textSize=t.textSize||this.size;this.phantom=t.phantom;this.font=t.font;this.sizeMultiplier=c[this.size-1];this._fontMetrics=null}(0,l.default)(e,[{key:"extend",value:function t(r){var a={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font};for(var i in r){if(r.hasOwnProperty(i)){a[i]=r[i]}}return new e(a)}},{key:"havingStyle",value:function e(t){if(this.style===t){return this}else{return this.extend({style:t,size:h(this.textSize,t)})}}},{key:"havingCrampedStyle",value:function e(){return this.havingStyle(this.style.cramp())}},{key:"havingSize",value:function e(t){if(this.size===t&&this.textSize===t){return this}else{return this.extend({style:this.style.text(),size:t,textSize:t})}}},{key:"havingBaseStyle",value:function e(t){t=t||this.style.text();var r=h(f,t);if(this.size===r&&this.textSize===f&&this.style===t){return this}else{return this.extend({style:t,size:r,baseSize:f})}}},{key:"withColor",value:function e(t){return this.extend({color:t})}},{key:"withPhantom",value:function e(){return this.extend({phantom:true})}},{key:"withFont",value:function e(t){return this.extend({font:t||this.font})}},{key:"sizingClasses",value:function e(t){if(t.size!==this.size){return["sizing","reset-size"+t.size,"size"+this.size]}else{return[]}}},{key:"baseSizingClasses",value:function e(){if(this.size!==f){return["sizing","reset-size"+this.size,"size"+f]}else{return[]}}},{key:"fontMetrics",value:function e(){if(!this._fontMetrics){this._fontMetrics=o.default.getFontMetrics(this.size)}return this._fontMetrics}},{key:"getColor",value:function t(){if(this.phantom){return"transparent"}else{return e.colorMap[this.color]||this.color}}}]);return e}();v.colorMap={"katex-blue":"#6495ed","katex-orange":"#ffa500","katex-pink":"#ff00af","katex-red":"#df0030","katex-green":"#28ae7b","katex-gray":"gray","katex-purple":"#9d38bd","katex-blueA":"#ccfaff","katex-blueB":"#80f6ff","katex-blueC":"#63d9ea","katex-blueD":"#11accd","katex-blueE":"#0c7f99","katex-tealA":"#94fff5","katex-tealB":"#26edd5","katex-tealC":"#01d1c1","katex-tealD":"#01a995","katex-tealE":"#208170","katex-greenA":"#b6ffb0","katex-greenB":"#8af281","katex-greenC":"#74cf70","katex-greenD":"#1fab54","katex-greenE":"#0d923f","katex-goldA":"#ffd0a9","katex-goldB":"#ffbb71","katex-goldC":"#ff9c39","katex-goldD":"#e07d10","katex-goldE":"#a75a05","katex-redA":"#fca9a9","katex-redB":"#ff8482","katex-redC":"#f9685d","katex-redD":"#e84d39","katex-redE":"#bc2612","katex-maroonA":"#ffbde0","katex-maroonB":"#ff92c6","katex-maroonC":"#ed5fa6","katex-maroonD":"#ca337c","katex-maroonE":"#9e034e","katex-purpleA":"#ddd7ff","katex-purpleB":"#c6b9fc","katex-purpleC":"#aa87ff","katex-purpleD":"#7854ab","katex-purpleE":"#543b78","katex-mintA":"#f5f9e8","katex-mintB":"#edf2df","katex-mintC":"#e0e5cc","katex-grayA":"#f6f7f7","katex-grayB":"#f0f1f2","katex-grayC":"#e3e5e6","katex-grayD":"#d6d8da","katex-grayE":"#babec2","katex-grayF":"#888d93","katex-grayG":"#626569","katex-grayH":"#3b3e40","katex-grayI":"#21242c","katex-kaBlue":"#314453","katex-kaGreen":"#71B307"};v.BASESIZE=f;t.exports=v},{"./fontMetrics":41,"babel-runtime/helpers/classCallCheck":4,"babel-runtime/helpers/createClass":5}],29:[function(e,t,r){"use strict";var a=e("babel-runtime/helpers/classCallCheck");var i=n(a);function n(e){return e&&e.__esModule?e:{default:e}}var l=function e(t,r){(0,i.default)(this,e);var a="KaTeX parse error: "+t;var n=void 0;var l=void 0;if(r&&r.lexer&&r.start<=r.end){var s=r.lexer.input;n=r.start;l=r.end;if(n===s.length){a+=" at end of input: "}else{a+=" at position "+(n+1)+": "}var o=s.slice(n,l).replace(/[^]/g,"$&\u0332");var u=void 0;if(n>15){u="\u2026"+s.slice(n-15,n)}else{u=s.slice(0,n)}var f=void 0;if(l+15<s.length){f=s.slice(l,l+15)+"\u2026"}else{f=s.slice(l)}a+=u+o+f}var d=new Error(a);d.name="ParseError";d.__proto__=e.prototype;d.position=n;return d};l.prototype.__proto__=Error.prototype;t.exports=l},{"babel-runtime/helpers/classCallCheck":4}],30:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:true});var a=e("babel-runtime/helpers/classCallCheck");var i=n(a);function n(e){return e&&e.__esModule?e:{default:e}}var l=function e(t,r,a,n,l){(0,i.default)(this,e);this.type=t;this.value=r;this.mode=a;if(n&&(!l||l.lexer===n.lexer)){this.lexer=n.lexer;this.start=n.start;this.end=(l||n).end}};r.default=l},{"babel-runtime/helpers/classCallCheck":4}],31:[function(e,t,r){"use strict";var a=e("babel-runtime/helpers/classCallCheck");var i=M(a);var n=e("babel-runtime/helpers/createClass");var l=M(n);var s=e("./functions");var o=M(s);var u=e("./environments");var f=M(u);var d=e("./MacroExpander");var c=M(d);var h=e("./symbols");var v=M(h);var p=e("./utils");var m=M(p);var g=e("./units");var y=M(g);var b=e("./unicodeRegexes");var x=e("./ParseNode");var w=M(x);var k=e("./ParseError");var S=M(k);function M(e){return e&&e.__esModule?e:{default:e}}function z(e,t,r){this.result=e;this.isFunction=t;this.token=r}var C=function(){function e(t,r){(0,i.default)(this,e);this.gullet=new c.default(t,r.macros);if(r.colorIsTextColor){this.gullet.macros["\\color"]="\\textcolor"}this.settings=r;this.leftrightDepth=0}(0,l.default)(e,[{key:"expect",value:function e(t,r){if(this.nextToken.text!==t){throw new S.default("Expected '"+t+"', got '"+this.nextToken.text+"'",this.nextToken)}if(r!==false){this.consume()}}},{key:"consume",value:function e(){this.nextToken=this.gullet.get(this.mode==="math")}},{key:"switchMode",value:function e(t){this.gullet.unget(this.nextToken);this.mode=t;this.consume()}},{key:"parse",value:function e(){this.mode="math";this.consume();var e=this.parseInput();return e}},{key:"parseInput",value:function e(){var t=this.parseExpression(false);this.expect("EOF",false);return t}},{key:"parseExpression",value:function t(r,a){var i=[];while(true){var n=this.nextToken;if(e.endOfExpression.indexOf(n.text)!==-1){break}if(a&&n.text===a){break}if(r&&o.default[n.text]&&o.default[n.text].infix){break}var l=this.parseAtom();if(!l){if(!this.settings.throwOnError&&n.text[0]==="\\"){var s=this.handleUnsupportedCmd();i.push(s);continue}break}i.push(l)}return this.handleInfixNodes(i)}},{key:"handleInfixNodes",value:function e(t){var r=-1;var a=void 0;for(var i=0;i<t.length;i++){var n=t[i];if(n.type==="infix"){if(r!==-1){throw new S.default("only one infix operator per group",n.value.token)}r=i;a=n.value.replaceWith}}if(r!==-1){var l=void 0;var s=void 0;var o=t.slice(0,r);var u=t.slice(r+1);if(o.length===1&&o[0].type==="ordgroup"){l=o[0]}else{l=new w.default("ordgroup",o,this.mode)}if(u.length===1&&u[0].type==="ordgroup"){s=u[0]}else{s=new w.default("ordgroup",u,this.mode)}var f=this.callFunction(a,[l,s],null);return[new w.default(f.type,f,this.mode)]}else{return t}}},{key:"handleSupSubscript",value:function t(r){var a=this.nextToken;var i=a.text;this.consume();var n=this.parseGroup();if(!n){if(!this.settings.throwOnError&&this.nextToken.text[0]==="\\"){return this.handleUnsupportedCmd()}else{throw new S.default("Expected group after '"+i+"'",a)}}else if(n.isFunction){var l=o.default[n.result].greediness;if(l>e.SUPSUB_GREEDINESS){return this.parseFunction(n)}else{throw new S.default("Got function '"+n.result+"' with no arguments "+"as "+r,a)}}else{return n.result}}},{key:"handleUnsupportedCmd",value:function e(){var t=this.nextToken.text;var r=[];for(var a=0;a<t.length;a++){r.push(new w.default("textord",t[a],"text"))}var i=new w.default("text",{body:r,type:"text"},this.mode);var n=new w.default("color",{color:this.settings.errorColor,value:[i],type:"color"},this.mode);this.consume();return n}},{key:"parseAtom",value:function e(){var t=this.parseImplicitGroup();if(this.mode==="text"){return t}var r=void 0;var a=void 0;while(true){var i=this.nextToken;if(i.text==="\\limits"||i.text==="\\nolimits"){if(!t||t.type!=="op"){throw new S.default("Limit controls must follow a math operator",i)}else{var n=i.text==="\\limits";t.value.limits=n;t.value.alwaysHandleSupSub=true}this.consume()}else if(i.text==="^"){if(r){throw new S.default("Double superscript",i)}r=this.handleSupSubscript("superscript")}else if(i.text==="_"){if(a){throw new S.default("Double subscript",i)}a=this.handleSupSubscript("subscript")}else if(i.text==="'"){if(r){throw new S.default("Double superscript",i)}var l=new w.default("textord","\\prime",this.mode);var s=[l];this.consume();while(this.nextToken.text==="'"){s.push(l);this.consume()}if(this.nextToken.text==="^"){s.push(this.handleSupSubscript("superscript"))}r=new w.default("ordgroup",s,this.mode)}else{break}}if(r||a){return new w.default("supsub",{base:t,sup:r,sub:a},this.mode)}else{return t}}},{key:"parseImplicitGroup",value:function t(){var r=this.parseSymbol();if(r==null){return this.parseFunction()}var a=r.result;if(a==="\\left"){var i=this.parseFunction(r);++this.leftrightDepth;var n=this.parseExpression(false);--this.leftrightDepth;this.expect("\\right",false);var l=this.parseFunction();return new w.default("leftright",{body:n,left:i.value.value,right:l.value.value},this.mode)}else if(a==="\\begin"){var s=this.parseFunction(r);var o=s.value.name;if(!f.default.hasOwnProperty(o)){throw new S.default("No such environment: "+o,s.value.nameGroup)}var u=f.default[o];var d=this.parseArguments("\\begin{"+o+"}",u);var c={mode:this.mode,envName:o,parser:this,positions:d.pop()};var h=u.handler(c,d);this.expect("\\end",false);var v=this.nextToken;var p=this.parseFunction();if(p.value.name!==o){throw new S.default("Mismatch: \\begin{"+o+"} matched "+"by \\end{"+p.value.name+"}",v)}h.position=p.position;return h}else if(m.default.contains(e.sizeFuncs,a)){this.consumeSpaces();var g=this.parseExpression(false);return new w.default("sizing",{size:m.default.indexOf(e.sizeFuncs,a)+1,value:g},this.mode)}else if(m.default.contains(e.styleFuncs,a)){this.consumeSpaces();var y=this.parseExpression(true);return new w.default("styling",{style:a.slice(1,a.length-5),value:y},this.mode)}else if(a in e.oldFontFuncs){var b=e.oldFontFuncs[a];this.consumeSpaces();var x=this.parseExpression(true);if(b.slice(0,4)==="text"){return new w.default("text",{style:b,body:new w.default("ordgroup",x,this.mode)},this.mode)}else{return new w.default("font",{font:b,body:new w.default("ordgroup",x,this.mode)},this.mode)}}else if(a==="\\color"){var k=this.parseColorGroup(false);if(!k){throw new S.default("\\color not followed by color")}var M=this.parseExpression(true);return new w.default("color",{type:"color",color:k.result.value,value:M},this.mode)}else if(a==="$"){if(this.mode==="math"){throw new S.default("$ within math mode")}this.consume();var z=this.mode;this.switchMode("math");var C=this.parseExpression(false,"$");this.expect("$",true);this.switchMode(z);return new w.default("styling",{style:"text",value:C},"math")}else{return this.parseFunction(r)}}},{key:"parseFunction",value:function e(t){if(!t){t=this.parseGroup()}if(t){if(t.isFunction){var r=t.result;var a=o.default[r];if(this.mode==="text"&&!a.allowedInText){throw new S.default("Can't use function '"+r+"' in text mode",t.token)}var i=this.parseArguments(r,a);var n=t.token;var l=this.callFunction(r,i,i.pop(),n);return new w.default(l.type,l,this.mode)}else{return t.result}}else{return null}}},{key:"callFunction",value:function e(t,r,a,i){var n={funcName:t,parser:this,positions:a,token:i};return o.default[t].handler(n,r)}},{key:"parseArguments",value:function e(t,r){var a=r.numArgs+r.numOptionalArgs;if(a===0){return[[this.pos]]}var i=r.greediness;var n=[this.pos];var l=[];for(var s=0;s<a;s++){var u=this.nextToken;var f=r.argTypes&&r.argTypes[s];var d=void 0;if(s<r.numOptionalArgs){if(f){d=this.parseGroupOfType(f,true)}else{d=this.parseGroup(true)}if(!d){l.push(null);n.push(this.pos);continue}}else{if(f){d=this.parseGroupOfType(f)}else{d=this.parseGroup()}if(!d){if(!this.settings.throwOnError&&this.nextToken.text[0]==="\\"){d=new z(this.handleUnsupportedCmd(this.nextToken.text),false)}else{throw new S.default("Expected group after '"+t+"'",u)}}}var c=void 0;if(d.isFunction){var h=o.default[d.result].greediness;if(h>i){c=this.parseFunction(d)}else{throw new S.default("Got function '"+d.result+"' as "+"argument to '"+t+"'",u)}}else{c=d.result}l.push(c);n.push(this.pos)}l.push(n);return l}},{key:"parseGroupOfType",value:function e(t,r){var a=this.mode;if(t==="original"){t=a}if(t==="color"){return this.parseColorGroup(r)}if(t==="size"){return this.parseSizeGroup(r)}this.switchMode(t);if(t==="text"){this.consumeSpaces()}var i=this.parseGroup(r);this.switchMode(a);return i}},{key:"consumeSpaces",value:function e(){while(this.nextToken.text===" "){this.consume()}}},{key:"parseStringGroup",value:function e(t,r){if(r&&this.nextToken.text!=="["){return null}var a=this.mode;this.mode="text";this.expect(r?"[":"{");var i="";var n=this.nextToken;var l=n;while(this.nextToken.text!==(r?"]":"}")){if(this.nextToken.text==="EOF"){throw new S.default("Unexpected end of input in "+t,n.range(this.nextToken,i))}l=this.nextToken;i+=l.text;this.consume()}this.mode=a;this.expect(r?"]":"}");return n.range(l,i)}},{key:"parseRegexGroup",value:function e(t,r){var a=this.mode;this.mode="text";var i=this.nextToken;var n=i;var l="";while(this.nextToken.text!=="EOF"&&t.test(l+this.nextToken.text)){n=this.nextToken;l+=n.text;this.consume()}if(l===""){throw new S.default("Invalid "+r+": '"+i.text+"'",i)}this.mode=a;return i.range(n,l)}},{key:"parseColorGroup",value:function e(t){var r=this.parseStringGroup("color",t);if(!r){return null}var a=/^(#[a-z0-9]+|[a-z]+)$/i.exec(r.text);if(!a){throw new S.default("Invalid color: '"+r.text+"'",r)}return new z(new w.default("color",a[0],this.mode),false)}},{key:"parseSizeGroup",value:function e(t){var r=void 0;if(!t&&this.nextToken.text!=="{"){r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size")}else{r=this.parseStringGroup("size",t)}if(!r){return null}var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!a){throw new S.default("Invalid size: '"+r.text+"'",r)}var i={number:+(a[1]+a[2]),unit:a[3]};if(!y.default.validUnit(i)){throw new S.default("Invalid unit: '"+i.unit+"'",r)}return new z(new w.default("size",i,this.mode),false)}},{key:"parseGroup",value:function e(t){var r=this.nextToken;if(this.nextToken.text===(t?"[":"{")){this.consume();var a=this.parseExpression(false,t?"]":null);var i=this.nextToken;this.expect(t?"]":"}");if(this.mode==="text"){this.formLigatures(a)}return new z(new w.default("ordgroup",a,this.mode,r,i),false)}else{return t?null:this.parseSymbol()}}},{key:"formLigatures",value:function e(t){var r=t.length-1;for(var a=0;a<r;++a){var i=t[a];var n=i.value;if(n==="-"&&t[a+1].value==="-"){if(a+1<r&&t[a+2].value==="-"){t.splice(a,3,new w.default("textord","---","text",i,t[a+2]));r-=2}else{t.splice(a,2,new w.default("textord","--","text",i,t[a+1]));r-=1}}if((n==="'"||n==="`")&&t[a+1].value===n){t.splice(a,2,new w.default("textord",n+n,"text",i,t[a+1]));r-=1}}}},{key:"parseSymbol",value:function e(){var t=this.nextToken;if(o.default[t.text]){this.consume();return new z(t.text,true,t)}else if(v.default[this.mode][t.text]){this.consume();return new z(new w.default(v.default[this.mode][t.text].group,t.text,this.mode,t),false,t)}else if(this.mode==="text"&&b.cjkRegex.test(t.text)){this.consume();return new z(new w.default("textord",t.text,this.mode,t),false,t)}else if(t.text==="$"){return new z(t.text,false,t)}else{return null}}}]);return e}();C.endOfExpression=["}","\\end","\\right","&","\\\\","\\cr"];C.SUPSUB_GREEDINESS=1;C.sizeFuncs=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"];C.styleFuncs=["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"];C.oldFontFuncs={"\\rm":"mathrm","\\sf":"mathsf","\\tt":"mathtt","\\bf":"mathbf","\\it":"mathit"};C.prototype.ParseNode=w.default;t.exports=C},{"./MacroExpander":27,"./ParseError":29,"./ParseNode":30,"./environments":40,"./functions":43,"./symbols":48,"./unicodeRegexes":49,"./units":50,"./utils":51,"babel-runtime/helpers/classCallCheck":4,"babel-runtime/helpers/createClass":5}],32:[function(e,t,r){"use strict";var a=e("babel-runtime/helpers/classCallCheck");var i=s(a);var n=e("./utils");var l=s(n);function s(e){return e&&e.__esModule?e:{default:e}}var o=function e(t){(0,i.default)(this,e);t=t||{};this.displayMode=l.default.deflt(t.displayMode,false);this.throwOnError=l.default.deflt(t.throwOnError,true);this.errorColor=l.default.deflt(t.errorColor,"#cc0000");this.macros=t.macros||{};this.colorIsTextColor=l.default.deflt(t.colorIsTextColor,false)};t.exports=o},{"./utils":51,"babel-runtime/helpers/classCallCheck":4}],33:[function(e,t,r){"use strict";var a=e("babel-runtime/helpers/classCallCheck");var i=s(a);var n=e("babel-runtime/helpers/createClass");var l=s(n);function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(t,r,a){(0,i.default)(this,e);this.id=t;this.size=r;this.cramped=a}(0,l.default)(e,[{key:"sup",value:function e(){return g[y[this.id]]}},{key:"sub",value:function e(){return g[b[this.id]]}},{key:"fracNum",value:function e(){return g[x[this.id]]}},{key:"fracDen",value:function e(){return g[w[this.id]]}},{key:"cramp",value:function e(){return g[k[this.id]]}},{key:"text",value:function e(){return g[S[this.id]]}},{key:"isTight",value:function e(){return this.size>=2}}]);return e}();var u=0;var f=1;var d=2;var c=3;var h=4;var v=5;var p=6;var m=7;var g=[new o(u,0,false),new o(f,0,true),new o(d,1,false),new o(c,1,true),new o(h,2,false),new o(v,2,true),new o(p,3,false),new o(m,3,true)];var y=[h,v,h,v,p,m,p,m];var b=[v,v,v,v,m,m,m,m];var x=[d,c,h,v,p,m,p,m];var w=[c,c,v,v,m,m,m,m];var k=[f,f,c,c,v,v,m,m];var S=[u,f,d,c,d,c,d,c];t.exports={DISPLAY:g[u],TEXT:g[d],SCRIPT:g[h],SCRIPTSCRIPT:g[p]}},{"babel-runtime/helpers/classCallCheck":4,"babel-runtime/helpers/createClass":5}],34:[function(e,t,r){"use strict";var a=e("./domTree");var i=d(a);var n=e("./fontMetrics");var l=d(n);var s=e("./symbols");var o=d(s);var u=e("./utils");var f=d(u);function d(e){return e&&e.__esModule?e:{default:e}}var c=["\\imath","\\jmath","\\pounds"];var h=function e(t,r,a){if(o.default[a][t]&&o.default[a][t].replace){t=o.default[a][t].replace}return{value:t,metrics:l.default.getCharacterMetrics(t,r)}};var v=function e(t,r,a,n,l){var s=h(t,r,a);var o=s.metrics;t=s.value;var u=void 0;if(o){var f=o.italic;if(a==="text"){f=0}u=new i.default.symbolNode(t,o.height,o.depth,f,o.skew,l)}else{typeof console!=="undefined"&&console.warn("No character metrics for '"+t+"' in style '"+r+"'");u=new i.default.symbolNode(t,0,0,0,0,l)}if(n){u.maxFontSize=n.sizeMultiplier;if(n.style.isTight()){u.classes.push("mtight")}if(n.getColor()){u.style.color=n.getColor()}}return u};var p=function e(t,r,a,i){if(t==="\\"||o.default[r][t].font==="main"){return v(t,"Main-Regular",r,a,i)}else{return v(t,"AMS-Regular",r,a,i.concat(["amsrm"]))}};var m=function e(t,r,a,i,n){if(n==="mathord"){var l=g(t,r,a,i);return v(t,l.fontName,r,a,i.concat([l.fontClass]))}else if(n==="textord"){var s=o.default[r][t]&&o.default[r][t].font;if(s==="ams"){return v(t,"AMS-Regular",r,a,i.concat(["amsrm"]))}else{return v(t,"Main-Regular",r,a,i.concat(["mathrm"]))}}else{throw new Error("unexpected type: "+n+" in mathDefault")}};var g=function e(t,r,a,i){if(/[0-9]/.test(t.charAt(0))||f.default.contains(c,t)){return{fontName:"Main-Italic",fontClass:"mainit"
}}else{return{fontName:"Math-Italic",fontClass:"mathit"}}};var y=function e(t,r,a){var i=t.mode;var n=t.value;var l=["mord"];var s=r.font;if(s){var o=void 0;if(s==="mathit"||f.default.contains(c,n)){o=g(n,i,r,l)}else{o=z[s]}if(h(n,o.fontName,i).metrics){return v(n,o.fontName,i,r,l.concat([o.fontClass||s]))}else{return m(n,i,r,l,a)}}else{return m(n,i,r,l,a)}};var b=function e(t){var r=0;var a=0;var i=0;if(t.children){for(var n=0;n<t.children.length;n++){if(t.children[n].height>r){r=t.children[n].height}if(t.children[n].depth>a){a=t.children[n].depth}if(t.children[n].maxFontSize>i){i=t.children[n].maxFontSize}}}t.height=r;t.depth=a;t.maxFontSize=i};var x=function e(t,r,a){var n=new i.default.span(t,r,a);b(n);return n};var w=function e(t,r){t.children=r.concat(t.children);b(t)};var k=function e(t){var r=new i.default.documentFragment(t);b(r);return r};var S=function e(t,r,a,n){var l=void 0;var s=void 0;var o=void 0;if(r==="individualShift"){var u=t;t=[u[0]];l=-u[0].shift-u[0].elem.depth;s=l;for(o=1;o<u.length;o++){var f=-u[o].shift-s-u[o].elem.depth;var d=f-(u[o-1].elem.height+u[o-1].elem.depth);s=s+f;t.push({type:"kern",size:d});t.push(u[o])}}else if(r==="top"){var c=a;for(o=0;o<t.length;o++){if(t[o].type==="kern"){c-=t[o].size}else{c-=t[o].elem.height+t[o].elem.depth}}l=c}else if(r==="bottom"){l=-a}else if(r==="shift"){l=-t[0].elem.depth-a}else if(r==="firstBaseline"){l=-t[0].elem.depth}else{l=0}var h=0;for(o=0;o<t.length;o++){if(t[o].type==="elem"){var v=t[o].elem;h=Math.max(h,v.maxFontSize,v.height)}}h+=2;var p=x(["pstrut"],[]);p.style.height=h+"em";var m=[];var g=l;var y=l;s=l;for(o=0;o<t.length;o++){if(t[o].type==="kern"){s+=t[o].size}else{var b=t[o].elem;var w=x([],[p,b]);w.style.top=-h-s-b.depth+"em";if(t[o].marginLeft){w.style.marginLeft=t[o].marginLeft}if(t[o].marginRight){w.style.marginRight=t[o].marginRight}m.push(w);s+=b.height+b.depth}g=Math.min(g,s);y=Math.max(y,s)}var k=x(["vlist"],m);k.style.height=y+"em";var S=void 0;if(g<0){var M=x(["vlist"],[]);M.style.height=-g+"em";var z=x(["vlist-s"],[new i.default.symbolNode("\u200b")]);S=[x(["vlist-r"],[k,z]),x(["vlist-r"],[M])]}else{S=[x(["vlist-r"],[k])]}var C=x(["vlist-t"],S);if(S.length===2){C.classes.push("vlist-t2")}C.height=y;C.depth=-g;return C};var M={"\\qquad":{size:"2em",className:"qquad"},"\\quad":{size:"1em",className:"quad"},"\\enspace":{size:"0.5em",className:"enspace"},"\\;":{size:"0.277778em",className:"thickspace"},"\\:":{size:"0.22222em",className:"mediumspace"},"\\,":{size:"0.16667em",className:"thinspace"},"\\!":{size:"-0.16667em",className:"negativethinspace"}};var z={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}};t.exports={fontMap:z,makeSymbol:v,mathsym:p,makeSpan:x,makeFragment:k,makeVList:S,makeOrd:y,prependChildren:w,spacingFunctions:M}},{"./domTree":39,"./fontMetrics":41,"./symbols":48,"./utils":51}],35:[function(e,t,r){"use strict";var a=e("babel-runtime/core-js/json/stringify");var i=w(a);var n=e("./ParseError");var l=w(n);var s=e("./Style");var o=w(s);var u=e("./buildCommon");var f=w(u);var d=e("./delimiter");var c=w(d);var h=e("./domTree");var v=w(h);var p=e("./units");var m=w(p);var g=e("./utils");var y=w(g);var b=e("./stretchy");var x=w(b);function w(e){return e&&e.__esModule?e:{default:e}}var k=function e(t){return t instanceof v.default.span&&t.classes[0]==="mspace"};var S=function e(t){return t&&t.classes[0]==="mbin"};var M=function e(t,r){if(t){return y.default.contains(["mbin","mopen","mrel","mop","mpunct"],t.classes[0])}else{return r}};var z=function e(t,r){if(t){return y.default.contains(["mrel","mclose","mpunct"],t.classes[0])}else{return r}};var C=function e(t,r){var a=r;while(a<t.length&&k(t[a])){a++}if(a===r){return null}else{return t.splice(r,a-r)}};var T=function e(t,r,a){var i=[];for(var n=0;n<t.length;n++){var l=t[n];var s=L(l,r);if(s instanceof v.default.documentFragment){Array.prototype.push.apply(i,s.children)}else{i.push(s)}}for(var o=0;o<i.length;o++){var d=C(i,o);if(d){if(o<i.length){if(i[o]instanceof v.default.symbolNode){i[o]=(0,u.makeSpan)([].concat(i[o].classes),[i[o]])}f.default.prependChildren(i[o],d)}else{Array.prototype.push.apply(i,d);break}}}for(var c=0;c<i.length;c++){if(S(i[c])&&(M(i[c-1],a)||z(i[c+1],a))){i[c].classes[0]="mord"}}return i};var N=function e(t){if(t instanceof v.default.documentFragment){if(t.children.length){return e(t.children[t.children.length-1])}}else{if(y.default.contains(["mord","mop","mbin","mrel","mopen","mclose","mpunct","minner"],t.classes[0])){return t.classes[0]}}return null};var A=function e(t,r){if(!t.value.base){return false}else{var a=t.value.base;if(a.type==="op"){return a.value.limits&&(r.style.size===o.default.DISPLAY.size||a.value.alwaysHandleSupSub)}else if(a.type==="accent"){return _(a.value.base)}else if(a.type==="horizBrace"){var i=t.value.sub?false:true;return i===a.value.isOver}else{return null}}};var q=function e(t){if(!t){return false}else if(t.type==="ordgroup"){if(t.value.length===1){return e(t.value[0])}else{return t}}else if(t.type==="color"){if(t.value.value.length===1){return e(t.value.value[0])}else{return t}}else if(t.type==="font"){return e(t.value.body)}else{return t}};var _=function e(t){var r=q(t);return r.type==="mathord"||r.type==="textord"||r.type==="bin"||r.type==="rel"||r.type==="inner"||r.type==="open"||r.type==="close"||r.type==="punct"};var E=function e(t,r){var a=["nulldelimiter"].concat(t.baseSizingClasses());return(0,u.makeSpan)(r.concat(a))};var O={};O.mathord=function(e,t){return f.default.makeOrd(e,t,"mathord")};O.textord=function(e,t){return f.default.makeOrd(e,t,"textord")};O.bin=function(e,t){return f.default.mathsym(e.value,e.mode,t,["mbin"])};O.rel=function(e,t){return f.default.mathsym(e.value,e.mode,t,["mrel"])};O.open=function(e,t){return f.default.mathsym(e.value,e.mode,t,["mopen"])};O.close=function(e,t){return f.default.mathsym(e.value,e.mode,t,["mclose"])};O.inner=function(e,t){return f.default.mathsym(e.value,e.mode,t,["minner"])};O.punct=function(e,t){return f.default.mathsym(e.value,e.mode,t,["mpunct"])};O.ordgroup=function(e,t){return(0,u.makeSpan)(["mord"],T(e.value,t,true),t)};O.text=function(e,t){var r=t.withFont(e.value.style);var a=T(e.value.body,r,true);for(var i=0;i<a.length-1;i++){if(a[i].tryCombine(a[i+1])){a.splice(i+1,1);i--}}return(0,u.makeSpan)(["mord","text"],a,r)};O.color=function(e,t){var r=T(e.value.value,t.withColor(e.value.color),false);return new f.default.makeFragment(r)};O.supsub=function(e,t){if(A(e,t)){return O[e.value.base.type](e,t)}var r=L(e.value.base,t);var a=void 0;var i=void 0;var n=t.fontMetrics();var l=void 0;var s=0;var d=0;if(e.value.sup){l=t.havingStyle(t.style.sup());a=L(e.value.sup,l,t);if(!_(e.value.base)){s=r.height-l.fontMetrics().supDrop*l.sizeMultiplier/t.sizeMultiplier}}if(e.value.sub){l=t.havingStyle(t.style.sub());i=L(e.value.sub,l,t);if(!_(e.value.base)){d=r.depth+l.fontMetrics().subDrop*l.sizeMultiplier/t.sizeMultiplier}}var c=void 0;if(t.style===o.default.DISPLAY){c=n.sup1}else if(t.style.cramped){c=n.sup3}else{c=n.sup2}var h=t.sizeMultiplier;var p=.5/n.ptPerEm/h+"em";var m=void 0;if(!e.value.sup){d=Math.max(d,n.sub1,i.height-.8*n.xHeight);var g=[{type:"elem",elem:i,marginRight:p}];if(r instanceof v.default.symbolNode){g[0].marginLeft=-r.italic+"em"}m=f.default.makeVList(g,"shift",d,t)}else if(!e.value.sub){s=Math.max(s,c,a.depth+.25*n.xHeight);m=f.default.makeVList([{type:"elem",elem:a,marginRight:p}],"shift",-s,t)}else{s=Math.max(s,c,a.depth+.25*n.xHeight);d=Math.max(d,n.sub2);var y=n.defaultRuleThickness;if(s-a.depth-(i.height-d)<4*y){d=4*y-(s-a.depth)+i.height;var b=.8*n.xHeight-(s-a.depth);if(b>0){s+=b;d-=b}}var x=[{type:"elem",elem:i,shift:d,marginRight:p},{type:"elem",elem:a,shift:-s,marginRight:p}];if(r instanceof v.default.symbolNode){x[0].marginLeft=-r.italic+"em"}m=f.default.makeVList(x,"individualShift",null,t)}var w=N(r)||"mord";return(0,u.makeSpan)([w],[r,(0,u.makeSpan)(["msupsub"],[m])],t)};O.genfrac=function(e,t){var r=t.style;if(e.value.size==="display"){r=o.default.DISPLAY}else if(e.value.size==="text"){r=o.default.TEXT}var a=r.fracNum();var i=r.fracDen();var n=void 0;n=t.havingStyle(a);var l=L(e.value.numer,n,t);n=t.havingStyle(i);var s=L(e.value.denom,n,t);var d=void 0;var h=void 0;var v=void 0;if(e.value.hasBarLine){d=R("frac-line",t);h=d.height;v=d.height}else{d=null;h=0;v=t.fontMetrics().defaultRuleThickness}var p=void 0;var m=void 0;var g=void 0;if(r.size===o.default.DISPLAY.size){p=t.fontMetrics().num1;if(h>0){m=3*v}else{m=7*v}g=t.fontMetrics().denom1}else{if(h>0){p=t.fontMetrics().num2;m=v}else{p=t.fontMetrics().num3;m=3*v}g=t.fontMetrics().denom2}var y=void 0;if(h===0){var b=p-l.depth-(s.height-g);if(b<m){p+=.5*(m-b);g+=.5*(m-b)}y=f.default.makeVList([{type:"elem",elem:s,shift:g},{type:"elem",elem:l,shift:-p}],"individualShift",null,t)}else{var x=t.fontMetrics().axisHeight;if(p-l.depth-(x+.5*h)<m){p+=m-(p-l.depth-(x+.5*h))}if(x-.5*h-(s.height-g)<m){g+=m-(x-.5*h-(s.height-g))}var w=-(x-.5*h);y=f.default.makeVList([{type:"elem",elem:s,shift:g},{type:"elem",elem:d,shift:w},{type:"elem",elem:l,shift:-p}],"individualShift",null,t)}n=t.havingStyle(r);y.height*=n.sizeMultiplier/t.sizeMultiplier;y.depth*=n.sizeMultiplier/t.sizeMultiplier;var k=void 0;if(r.size===o.default.DISPLAY.size){k=t.fontMetrics().delim1}else{k=t.fontMetrics().delim2}var S=void 0;var M=void 0;if(e.value.leftDelim==null){S=E(t,["mopen"])}else{S=c.default.customSizedDelim(e.value.leftDelim,k,true,t.havingStyle(r),e.mode,["mopen"])}if(e.value.rightDelim==null){M=E(t,["mclose"])}else{M=c.default.customSizedDelim(e.value.rightDelim,k,true,t.havingStyle(r),e.mode,["mclose"])}return(0,u.makeSpan)(["mord"].concat(n.sizingClasses(t)),[S,(0,u.makeSpan)(["mfrac"],[y]),M],t)};O.array=function(e,t){var r=void 0;var a=void 0;var i=e.value.body.length;var n=0;var s=new Array(i);var o=1/t.fontMetrics().ptPerEm;var d=5*o;var c=12*o;var h=3*o;var v=y.default.deflt(e.value.arraystretch,1);var p=v*c;var g=.7*p;var b=.3*p;var x=0;for(r=0;r<e.value.body.length;++r){var w=e.value.body[r];var k=g;var S=b;if(n<w.length){n=w.length}var M=new Array(w.length);for(a=0;a<w.length;++a){var z=L(w[a],t);if(S<z.depth){S=z.depth}if(k<z.height){k=z.height}M[a]=z}var C=0;if(e.value.rowGaps[r]){C=m.default.calculateSize(e.value.rowGaps[r].value,t);if(C>0){C+=b;if(S<C){S=C}C=0}}if(e.value.addJot){S+=h}M.height=k;M.depth=S;x+=k;M.pos=x;x+=S+C;s[r]=M}var T=x/2+t.fontMetrics().axisHeight;var N=e.value.cols||[];var A=[];var q=void 0;var _=void 0;for(a=0,_=0;a<n||_<N.length;++a,++_){var E=N[_]||{};var O=true;while(E.type==="separator"){if(!O){q=(0,u.makeSpan)(["arraycolsep"],[]);q.style.width=t.fontMetrics().doubleRuleSep+"em";A.push(q)}if(E.separator==="|"){var R=(0,u.makeSpan)(["vertical-separator"],[]);R.style.height=x+"em";R.style.verticalAlign=-(x-T)+"em";A.push(R)}else{throw new l.default("Invalid separator type: "+E.separator)}_++;E=N[_]||{};O=false}if(a>=n){continue}var P=void 0;if(a>0||e.value.hskipBeforeAndAfter){P=y.default.deflt(E.pregap,d);if(P!==0){q=(0,u.makeSpan)(["arraycolsep"],[]);q.style.width=P+"em";A.push(q)}}var F=[];for(r=0;r<i;++r){var D=s[r];var B=D[a];if(!B){continue}var I=D.pos-T;B.depth=D.depth;B.height=D.height;F.push({type:"elem",elem:B,shift:I})}F=f.default.makeVList(F,"individualShift",null,t);F=(0,u.makeSpan)(["col-align-"+(E.align||"c")],[F]);A.push(F);if(a<n-1||e.value.hskipBeforeAndAfter){P=y.default.deflt(E.postgap,d);if(P!==0){q=(0,u.makeSpan)(["arraycolsep"],[]);q.style.width=P+"em";A.push(q)}}}s=(0,u.makeSpan)(["mtable"],A);return(0,u.makeSpan)(["mord"],[s],t)};O.spacing=function(e,t){if(e.value==="\\ "||e.value==="\\space"||e.value===" "||e.value==="~"){if(e.mode==="text"){return f.default.makeOrd(e,t,"textord")}else{return(0,u.makeSpan)(["mspace"],[f.default.mathsym(e.value,e.mode,t)],t)}}else{return(0,u.makeSpan)(["mspace",f.default.spacingFunctions[e.value].className],[],t)}};O.llap=function(e,t){var r=(0,u.makeSpan)(["inner"],[L(e.value.body,t)]);var a=(0,u.makeSpan)(["fix"],[]);return(0,u.makeSpan)(["mord","llap"],[r,a],t)};O.rlap=function(e,t){var r=(0,u.makeSpan)(["inner"],[L(e.value.body,t)]);var a=(0,u.makeSpan)(["fix"],[]);return(0,u.makeSpan)(["mord","rlap"],[r,a],t)};O.op=function(e,t){var r=void 0;var a=void 0;var i=false;if(e.type==="supsub"){r=e.value.sup;a=e.value.sub;e=e.value.base;i=true}var n=t.style;var l=["\\smallint"];var s=false;if(n.size===o.default.DISPLAY.size&&e.value.symbol&&!y.default.contains(l,e.value.body)){s=true}var d=void 0;if(e.value.symbol){var c=s?"Size2-Regular":"Size1-Regular";d=f.default.makeSymbol(e.value.body,c,"math",t,["mop","op-symbol",s?"large-op":"small-op"])}else if(e.value.value){var h=T(e.value.value,t,true);if(h.length===1&&h[0]instanceof v.default.symbolNode){d=h[0];d.classes[0]="mop"}else{d=(0,u.makeSpan)(["mop"],h,t)}}else{var p=[];for(var m=1;m<e.value.body.length;m++){p.push(f.default.mathsym(e.value.body[m],e.mode))}d=(0,u.makeSpan)(["mop"],p,t)}var g=0;var b=0;if(d instanceof v.default.symbolNode){g=(d.height-d.depth)/2-t.fontMetrics().axisHeight;b=d.italic}if(i){d=(0,u.makeSpan)([],[d]);var x=void 0;var w=void 0;var k=void 0;var S=void 0;var M=void 0;if(r){M=t.havingStyle(n.sup());x=L(r,M,t);w=Math.max(t.fontMetrics().bigOpSpacing1,t.fontMetrics().bigOpSpacing3-x.depth)}if(a){M=t.havingStyle(n.sub());k=L(a,M,t);S=Math.max(t.fontMetrics().bigOpSpacing2,t.fontMetrics().bigOpSpacing4-k.height)}var z=void 0;var C=void 0;var N=void 0;if(!r){C=d.height-g;z=f.default.makeVList([{type:"kern",size:t.fontMetrics().bigOpSpacing5},{type:"elem",elem:k,marginLeft:-b+"em"},{type:"kern",size:S},{type:"elem",elem:d}],"top",C,t)}else if(!a){N=d.depth+g;z=f.default.makeVList([{type:"elem",elem:d},{type:"kern",size:w},{type:"elem",elem:x,marginLeft:b+"em"},{type:"kern",size:t.fontMetrics().bigOpSpacing5}],"bottom",N,t)}else if(!r&&!a){return d}else{N=t.fontMetrics().bigOpSpacing5+k.height+k.depth+S+d.depth+g;z=f.default.makeVList([{type:"kern",size:t.fontMetrics().bigOpSpacing5},{type:"elem",elem:k,marginLeft:-b+"em"},{type:"kern",size:S},{type:"elem",elem:d},{type:"kern",size:w},{type:"elem",elem:x,marginLeft:b+"em"},{type:"kern",size:t.fontMetrics().bigOpSpacing5}],"bottom",N,t)}return(0,u.makeSpan)(["mop","op-limits"],[z],t)}else{if(g){d.style.position="relative";d.style.top=g+"em"}return d}};O.mod=function(e,t){var r=[];if(e.value.modType==="bmod"){if(!t.style.isTight()){r.push((0,u.makeSpan)(["mspace","negativemediumspace"],[],t))}r.push((0,u.makeSpan)(["mspace","thickspace"],[],t))}else if(t.style.size===o.default.DISPLAY.size){r.push((0,u.makeSpan)(["mspace","quad"],[],t))}else if(e.value.modType==="mod"){r.push((0,u.makeSpan)(["mspace","twelvemuspace"],[],t))}else{r.push((0,u.makeSpan)(["mspace","eightmuspace"],[],t))}if(e.value.modType==="pod"||e.value.modType==="pmod"){r.push(f.default.mathsym("(",e.mode))}if(e.value.modType!=="pod"){var a=[f.default.mathsym("m",e.mode),f.default.mathsym("o",e.mode),f.default.mathsym("d",e.mode)];if(e.value.modType==="bmod"){r.push((0,u.makeSpan)(["mbin"],a,t));r.push((0,u.makeSpan)(["mspace","thickspace"],[],t));if(!t.style.isTight()){r.push((0,u.makeSpan)(["mspace","negativemediumspace"],[],t))}}else{Array.prototype.push.apply(r,a);r.push((0,u.makeSpan)(["mspace","sixmuspace"],[],t))}}if(e.value.value){Array.prototype.push.apply(r,T(e.value.value,t,false))}if(e.value.modType==="pod"||e.value.modType==="pmod"){r.push(f.default.mathsym(")",e.mode))}return f.default.makeFragment(r)};O.katex=function(e,t){var r=(0,u.makeSpan)(["k"],[f.default.mathsym("K",e.mode)],t);var a=(0,u.makeSpan)(["a"],[f.default.mathsym("A",e.mode)],t);a.height=(a.height+.2)*.75;a.depth=(a.height-.2)*.75;var i=(0,u.makeSpan)(["t"],[f.default.mathsym("T",e.mode)],t);var n=(0,u.makeSpan)(["e"],[f.default.mathsym("E",e.mode)],t);n.height=n.height-.2155;n.depth=n.depth+.2155;var l=(0,u.makeSpan)(["x"],[f.default.mathsym("X",e.mode)],t);return(0,u.makeSpan)(["mord","katex-logo"],[r,a,i,n,l],t)};var R=function e(t,r,a){var i=(0,u.makeSpan)([t],[],r);i.height=a||r.fontMetrics().defaultRuleThickness;i.style.borderBottomWidth=i.height+"em";i.maxFontSize=1;return i};O.overline=function(e,t){var r=L(e.value.body,t.havingCrampedStyle());var a=R("overline-line",t);var i=f.default.makeVList([{type:"elem",elem:r},{type:"kern",size:3*a.height},{type:"elem",elem:a},{type:"kern",size:a.height}],"firstBaseline",null,t);return(0,u.makeSpan)(["mord","overline"],[i],t)};O.underline=function(e,t){var r=L(e.value.body,t);var a=R("underline-line",t);var i=f.default.makeVList([{type:"kern",size:a.height},{type:"elem",elem:a},{type:"kern",size:3*a.height},{type:"elem",elem:r}],"top",r.height,t);return(0,u.makeSpan)(["mord","underline"],[i],t)};O.sqrt=function(e,t){var r=L(e.value.body,t.havingCrampedStyle());var a=t.fontMetrics();var i=a.defaultRuleThickness;var n=i;if(t.style.id<o.default.TEXT.id){n=t.fontMetrics().xHeight}var l=i+n/4;var s=(r.height+r.depth+l+i)*t.sizeMultiplier;var d=c.default.customSizedDelim("\\surd",s,false,t,e.mode);var h=(0,u.makeSpan)(["sqrt-sign"],[d],t);var v=t.fontMetrics().sqrtRuleThickness*d.delimSizeMultiplier;var p=R("sqrt-line",t,v);var m=h.height+h.depth-v;if(m>r.height+r.depth+l){l=(l+m-r.height-r.depth)/2}var g=-(r.height+l+v)+h.height;h.style.top=g+"em";h.height-=g;h.depth+=g;var y=void 0;if(r.height===0&&r.depth===0){y=(0,u.makeSpan)()}else{y=f.default.makeVList([{type:"elem",elem:r},{type:"kern",size:l},{type:"elem",elem:p},{type:"kern",size:v}],"firstBaseline",null,t)}if(!e.value.index){return(0,u.makeSpan)(["mord","sqrt"],[h,y],t)}else{var b=t.havingStyle(o.default.SCRIPTSCRIPT);var x=L(e.value.index,b,t);var w=Math.max(h.height,y.height);var k=Math.max(h.depth,y.depth);var S=.6*(w-k);var M=f.default.makeVList([{type:"elem",elem:x}],"shift",-S,t);var z=(0,u.makeSpan)(["root"],[M]);return(0,u.makeSpan)(["mord","sqrt"],[z,h,y],t)}};function P(e,t,r){var a=T(e,t,false);var i=t.sizeMultiplier/r.sizeMultiplier;for(var n=0;n<a.length;n++){var l=y.default.indexOf(a[n].classes,"sizing");if(l<0){Array.prototype.push.apply(a[n].classes,t.sizingClasses(r))}else if(a[n].classes[l+1]==="reset-size"+t.size){a[n].classes[l+1]="reset-size"+r.size}a[n].height*=i;a[n].depth*=i}return f.default.makeFragment(a)}O.sizing=function(e,t){var r=t.havingSize(e.value.size);return P(e.value.value,r,t)};O.styling=function(e,t){var r={display:o.default.DISPLAY,text:o.default.TEXT,script:o.default.SCRIPT,scriptscript:o.default.SCRIPTSCRIPT};var a=r[e.value.style];var i=t.havingStyle(a);return P(e.value.value,i,t)};O.font=function(e,t){var r=e.value.font;return L(e.value.body,t.withFont(r))};O.delimsizing=function(e,t){var r=e.value.value;if(r==="."){return(0,u.makeSpan)([e.value.mclass])}return c.default.sizedDelim(r,e.value.size,t,e.mode,[e.value.mclass])};O.leftright=function(e,t){var r=T(e.value.body,t,true);var a=0;var i=0;var n=false;for(var l=0;l<r.length;l++){if(r[l].isMiddle){n=true}else{a=Math.max(r[l].height,a);i=Math.max(r[l].depth,i)}}a*=t.sizeMultiplier;i*=t.sizeMultiplier;var s=void 0;if(e.value.left==="."){s=E(t,["mopen"])}else{s=c.default.leftRightDelim(e.value.left,a,i,t,e.mode,["mopen"])}r.unshift(s);if(n){for(var o=1;o<r.length;o++){var d=r[o];if(d.isMiddle){r[o]=c.default.leftRightDelim(d.isMiddle.value,a,i,d.isMiddle.options,e.mode,[]);var h=C(d.children,0);if(h){f.default.prependChildren(r[o],h)}}}}var v=void 0;if(e.value.right==="."){v=E(t,["mclose"])}else{v=c.default.leftRightDelim(e.value.right,a,i,t,e.mode,["mclose"])}r.push(v);return(0,u.makeSpan)(["minner"],r,t)};O.middle=function(e,t){var r=void 0;if(e.value.value==="."){r=E(t,[])}else{r=c.default.sizedDelim(e.value.value,1,t,e.mode,[]);r.isMiddle={value:e.value.value,options:t}}return r};O.rule=function(e,t){var r=(0,u.makeSpan)(["mord","rule"],[],t);var a=0;if(e.value.shift){a=m.default.calculateSize(e.value.shift,t)}var i=m.default.calculateSize(e.value.width,t);var n=m.default.calculateSize(e.value.height,t);r.style.borderRightWidth=i+"em";r.style.borderTopWidth=n+"em";r.style.bottom=a+"em";r.width=i;r.height=n+a;r.depth=-a;r.maxFontSize=n*1.125*t.sizeMultiplier;return r};O.kern=function(e,t){var r=(0,u.makeSpan)(["mord","rule"],[],t);if(e.value.dimension){var a=m.default.calculateSize(e.value.dimension,t);r.style.marginLeft=a+"em"}return r};O.accent=function(e,t){var r=e.value.base;var a=void 0;if(e.type==="supsub"){var i=e;e=i.value.base;r=e.value.base;i.value.base=r;a=L(i,t)}var n=L(r,t.havingCrampedStyle());var l=e.value.isShifty&&_(r);var s=0;if(l){var o=q(r);var d=L(o,t.havingCrampedStyle());s=d.skew}var c=Math.min(n.height,t.fontMetrics().xHeight);var h=void 0;if(!e.value.isStretchy){var v=f.default.makeSymbol(e.value.label,"Main-Regular","math",t);v.italic=0;var p=e.value.label==="\\vec"?"accent-vec":null;h=(0,u.makeSpan)(["accent-body",p],[(0,u.makeSpan)([],[v])]);h.style.marginLeft=2*s+"em";h=f.default.makeVList([{type:"elem",elem:n},{type:"kern",size:-c},{type:"elem",elem:h}],"firstBaseline",null,t)}else{h=x.default.svgSpan(e,t);if(s>0){var m="calc(100% - "+2*s+"em) 100%";h.style.backgroundSize=m}h=f.default.makeVList([{type:"elem",elem:n},{type:"elem",elem:h}],"firstBaseline",null,t)}var g=(0,u.makeSpan)(["mord","accent"],[h],t);if(a){a.children[0]=g;a.height=Math.max(g.height,a.height);a.classes[0]="mord";return a}else{return g}};O.horizBrace=function(e,t){var r=t.style;var a=e.type==="supsub";var i=void 0;var n=void 0;if(a){if(e.value.sup){n=t.havingStyle(r.sup());i=L(e.value.sup,n,t)}else{n=t.havingStyle(r.sub());i=L(e.value.sub,n,t)}e=e.value.base}var l=L(e.value.base,t.havingBaseStyle(o.default.DISPLAY));var s=x.default.svgSpan(e,t);var d=void 0;if(e.value.isOver){d=f.default.makeVList([{type:"elem",elem:l},{type:"kern",size:.1},{type:"elem",elem:s}],"firstBaseline",null,t)}else{d=f.default.makeVList([{type:"elem",elem:s},{type:"kern",size:.1},{type:"elem",elem:l}],"bottom",l.depth+.1+s.height,t)}if(a){var c=(0,u.makeSpan)(["mord",e.value.isOver?"mover":"munder"],[d],t);if(e.value.isOver){d=f.default.makeVList([{type:"elem",elem:c},{type:"kern",size:.2},{type:"elem",elem:i}],"firstBaseline",null,t)}else{d=f.default.makeVList([{type:"elem",elem:i},{type:"kern",size:.2},{type:"elem",elem:c}],"bottom",c.depth+.2+i.height,t)}}return(0,u.makeSpan)(["mord",e.value.isOver?"mover":"munder"],[d],t)};O.accentUnder=function(e,t){var r=L(e.value.body,t);var a=x.default.svgSpan(e,t);var i=/tilde/.test(e.value.label)?.12:0;var n=f.default.makeVList([{type:"elem",elem:a},{type:"kern",size:i},{type:"elem",elem:r}],"bottom",a.height+i,t);return(0,u.makeSpan)(["mord","accentunder"],[n],t)};O.enclose=function(e,t){var r=L(e.value.body,t);var a=e.value.label.substr(1);var i=t.sizeMultiplier;var n=void 0;var l=0;var s=0;if(a==="sout"){n=(0,u.makeSpan)(["stretchy","sout"]);n.height=t.fontMetrics().defaultRuleThickness/i;n.maxFontSize=1;s=-.5*t.fontMetrics().xHeight}else{r.classes.push(a==="fbox"?"boxpad":"cancel-pad");var o=_(e.value.body);l=a==="fbox"?.34:o?.2:0;s=r.depth+l;n=x.default.encloseSpan(r,o,a,l,t)}var d=f.default.makeVList([{type:"elem",elem:r,shift:0},{type:"elem",elem:n,shift:s}],"individualShift",null,t);if(/cancel/.test(a)){return(0,u.makeSpan)(["mord","cancel-lap"],[d],t)}else{return(0,u.makeSpan)(["mord"],[d],t)}};O.xArrow=function(e,t){var r=t.style;var a=t.havingStyle(r.sup());var i=L(e.value.body,a,t);i.classes.push("x-arrow-pad");var n=void 0;if(e.value.below){a=t.havingStyle(r.sub());n=L(e.value.below,a,t);n.classes.push("x-arrow-pad")}var l=x.default.svgSpan(e,t);var s=-t.fontMetrics().axisHeight+l.depth;var o=-t.fontMetrics().axisHeight-l.height-.111;var d=void 0;if(e.value.below){var c=-t.fontMetrics().axisHeight+n.height+l.height+.111;d=f.default.makeVList([{type:"elem",elem:i,shift:o},{type:"elem",elem:l,shift:s},{type:"elem",elem:n,shift:c}],"individualShift",null,t)}else{d=f.default.makeVList([{type:"elem",elem:i,shift:o},{type:"elem",elem:l,shift:s}],"individualShift",null,t)}return(0,u.makeSpan)(["mrel","x-arrow"],[d],t)};O.phantom=function(e,t){var r=T(e.value.value,t.withPhantom(),false);return new f.default.makeFragment(r)};O.mclass=function(e,t){var r=T(e.value.value,t,true);return(0,u.makeSpan)([e.value.mclass],r,t)};var L=function e(t,r,a){if(!t){return(0,u.makeSpan)()}if(O[t.type]){var i=O[t.type](t,r);if(a&&r.size!==a.size){i=(0,u.makeSpan)(r.sizingClasses(a),[i],r);var n=r.sizeMultiplier/a.sizeMultiplier;i.height*=n;i.depth*=n}return i}else{throw new l.default("Got group of unknown type: '"+t.type+"'")}};var F=function e(t,r){t=JSON.parse((0,i.default)(t));var a=T(t,r,true);var n=(0,u.makeSpan)(["base"],a,r);var l=(0,u.makeSpan)(["strut"]);var s=(0,u.makeSpan)(["strut","bottom"]);l.style.height=n.height+"em";s.style.height=n.height+n.depth+"em";s.style.verticalAlign=-n.depth+"em";var o=(0,u.makeSpan)(["katex-html"],[l,s,n]);o.setAttribute("aria-hidden","true");return o};t.exports=F},{"./ParseError":29,"./Style":33,"./buildCommon":34,"./delimiter":38,"./domTree":39,"./stretchy":47,"./units":50,"./utils":51,"babel-runtime/core-js/json/stringify":2}],36:[function(e,t,r){"use strict";var a=e("./buildCommon");var i=b(a);var n=e("./fontMetrics");var l=b(n);var s=e("./mathMLTree");var o=b(s);var u=e("./ParseError");var f=b(u);var d=e("./Style");var c=b(d);var h=e("./symbols");var v=b(h);var p=e("./utils");var m=b(p);var g=e("./stretchy");var y=b(g);function b(e){return e&&e.__esModule?e:{default:e}}var x=function e(t,r){if(v.default[r][t]&&v.default[r][t].replace){t=v.default[r][t].replace}return new o.default.TextNode(t)};var w=function e(t,r){var i=r.font;if(!i){return null}var n=t.mode;if(i==="mathit"){return"italic"}var s=t.value;if(m.default.contains(["\\imath","\\jmath"],s)){return null}if(v.default[n][s]&&v.default[n][s].replace){s=v.default[n][s].replace}var o=a.fontMap[i].fontName;if(l.default.getCharacterMetrics(s,o)){return a.fontMap[r.font].variant}return null};var k={};var S={mi:"italic",mn:"normal",mtext:"normal"};k.mathord=function(e,t){var r=new o.default.MathNode("mi",[x(e.value,e.mode)]);var a=w(e,t)||"italic";if(a!==S[r.type]){r.setAttribute("mathvariant",a)}return r};k.textord=function(e,t){var r=x(e.value,e.mode);var a=w(e,t)||"normal";var i=void 0;if(e.mode==="text"){i=new o.default.MathNode("mtext",[r])}else if(/[0-9]/.test(e.value)){i=new o.default.MathNode("mn",[r])}else if(e.value==="\\prime"){i=new o.default.MathNode("mo",[r])}else{i=new o.default.MathNode("mi",[r])}if(a!==S[i.type]){i.setAttribute("mathvariant",a)}return i};k.bin=function(e){var t=new o.default.MathNode("mo",[x(e.value,e.mode)]);return t};k.rel=function(e){var t=new o.default.MathNode("mo",[x(e.value,e.mode)]);return t};k.open=function(e){var t=new o.default.MathNode("mo",[x(e.value,e.mode)]);return t};k.close=function(e){var t=new o.default.MathNode("mo",[x(e.value,e.mode)]);return t};k.inner=function(e){var t=new o.default.MathNode("mo",[x(e.value,e.mode)]);return t};k.punct=function(e){var t=new o.default.MathNode("mo",[x(e.value,e.mode)]);t.setAttribute("separator","true");return t};k.ordgroup=function(e,t){var r=M(e.value,t);var a=new o.default.MathNode("mrow",r);return a};k.text=function(e,t){var r=e.value.body;var a=[];var i=null;for(var n=0;n<r.length;n++){var l=z(r[n],t);if(l.type==="mtext"&&i!=null){Array.prototype.push.apply(i.children,l.children)}else{a.push(l);if(l.type==="mtext"){i=l}}}if(a.length===1){return a[0]}else{return new o.default.MathNode("mrow",a)}};k.color=function(e,t){var r=M(e.value.value,t);var a=new o.default.MathNode("mstyle",r);a.setAttribute("mathcolor",e.value.color);return a};k.supsub=function(e,t){var r=false;var a=void 0;var i=void 0;if(e.value.base){if(e.value.base.value.type==="horizBrace"){i=e.value.sup?true:false;if(i===e.value.base.value.isOver){r=true;a=e.value.base.value.isOver}}}var n=true;var l=[z(e.value.base,t,n)];if(e.value.sub){l.push(z(e.value.sub,t,n))}if(e.value.sup){l.push(z(e.value.sup,t,n))}var s=void 0;if(r){s=a?"mover":"munder"}else if(!e.value.sub){s="msup"}else if(!e.value.sup){s="msub"}else{var u=e.value.base;if(u&&u.value.limits&&t.style===c.default.DISPLAY){s="munderover"}else{s="msubsup"}}var f=new o.default.MathNode(s,l);return f};k.genfrac=function(e,t){var r=new o.default.MathNode("mfrac",[z(e.value.numer,t),z(e.value.denom,t)]);if(!e.value.hasBarLine){r.setAttribute("linethickness","0px")}if(e.value.leftDelim!=null||e.value.rightDelim!=null){var a=[];if(e.value.leftDelim!=null){var i=new o.default.MathNode("mo",[new o.default.TextNode(e.value.leftDelim)]);i.setAttribute("fence","true");a.push(i)}a.push(r);if(e.value.rightDelim!=null){var n=new o.default.MathNode("mo",[new o.default.TextNode(e.value.rightDelim)]);n.setAttribute("fence","true");a.push(n)}var l=new o.default.MathNode("mrow",a);return l}return r};k.array=function(e,t){return new o.default.MathNode("mtable",e.value.body.map(function(e){return new o.default.MathNode("mtr",e.map(function(e){return new o.default.MathNode("mtd",[z(e,t)])}))}))};k.sqrt=function(e,t){var r=void 0;if(e.value.index){r=new o.default.MathNode("mroot",[z(e.value.body,t),z(e.value.index,t)])}else{r=new o.default.MathNode("msqrt",[z(e.value.body,t)])}return r};k.leftright=function(e,t){var r=M(e.value.body,t);if(e.value.left!=="."){var a=new o.default.MathNode("mo",[x(e.value.left,e.mode)]);a.setAttribute("fence","true");r.unshift(a)}if(e.value.right!=="."){var i=new o.default.MathNode("mo",[x(e.value.right,e.mode)]);i.setAttribute("fence","true");r.push(i)}var n=new o.default.MathNode("mrow",r);return n};k.middle=function(e,t){var r=new o.default.MathNode("mo",[x(e.value.middle,e.mode)]);r.setAttribute("fence","true");return r};k.accent=function(e,t){var r=void 0;if(e.value.isStretchy){r=y.default.mathMLnode(e.value.label)}else{r=new o.default.MathNode("mo",[x(e.value.label,e.mode)])}var a=new o.default.MathNode("mover",[z(e.value.base,t),r]);a.setAttribute("accent","true");return a};k.spacing=function(e){var t=void 0;if(e.value==="\\ "||e.value==="\\space"||e.value===" "||e.value==="~"){t=new o.default.MathNode("mtext",[new o.default.TextNode("\xa0")])}else{t=new o.default.MathNode("mspace");t.setAttribute("width",i.default.spacingFunctions[e.value].size)}return t};k.op=function(e,t){var r=void 0;if(e.value.symbol){r=new o.default.MathNode("mo",[x(e.value.body,e.mode)])}else if(e.value.value){r=new o.default.MathNode("mo",M(e.value.value,t))}else{r=new o.default.MathNode("mi",[new o.default.TextNode(e.value.body.slice(1))])}return r};k.mod=function(e,t){var r=[];if(e.value.modType==="pod"||e.value.modType==="pmod"){r.push(new o.default.MathNode("mo",[x("(",e.mode)]))}if(e.value.modType!=="pod"){r.push(new o.default.MathNode("mo",[x("mod",e.mode)]))}if(e.value.value){var a=new o.default.MathNode("mspace");a.setAttribute("width","0.333333em");r.push(a);r=r.concat(M(e.value.value,t))}if(e.value.modType==="pod"||e.value.modType==="pmod"){r.push(new o.default.MathNode("mo",[x(")",e.mode)]))}return new o.default.MathNode("mo",r)};k.katex=function(e){var t=new o.default.MathNode("mtext",[new o.default.TextNode("KaTeX")]);return t};k.font=function(e,t){var r=e.value.font;return z(e.value.body,t.withFont(r))};k.delimsizing=function(e){var t=[];if(e.value.value!=="."){t.push(x(e.value.value,e.mode))}var r=new o.default.MathNode("mo",t);if(e.value.mclass==="mopen"||e.value.mclass==="mclose"){r.setAttribute("fence","true")}else{r.setAttribute("fence","false")}return r};k.styling=function(e,t){var r={display:c.default.DISPLAY,text:c.default.TEXT,script:c.default.SCRIPT,scriptscript:c.default.SCRIPTSCRIPT};var a=r[e.value.style];var i=t.havingStyle(a);var n=M(e.value.value,i);var l=new o.default.MathNode("mstyle",n);var s={display:["0","true"],text:["0","false"],script:["1","false"],
scriptscript:["2","false"]};var u=s[e.value.style];l.setAttribute("scriptlevel",u[0]);l.setAttribute("displaystyle",u[1]);return l};k.sizing=function(e,t){var r=t.havingSize(e.value.size);var a=M(e.value.value,r);var i=new o.default.MathNode("mstyle",a);i.setAttribute("mathsize",r.sizeMultiplier+"em");return i};k.overline=function(e,t){var r=new o.default.MathNode("mo",[new o.default.TextNode("\u203e")]);r.setAttribute("stretchy","true");var a=new o.default.MathNode("mover",[z(e.value.body,t),r]);a.setAttribute("accent","true");return a};k.underline=function(e,t){var r=new o.default.MathNode("mo",[new o.default.TextNode("\u203e")]);r.setAttribute("stretchy","true");var a=new o.default.MathNode("munder",[z(e.value.body,t),r]);a.setAttribute("accentunder","true");return a};k.accentUnder=function(e,t){var r=y.default.mathMLnode(e.value.label);var a=new o.default.MathNode("munder",[z(e.value.body,t),r]);a.setAttribute("accentunder","true");return a};k.enclose=function(e,t){var r=new o.default.MathNode("menclose",[z(e.value.body,t)]);var a="";switch(e.value.label){case"\\bcancel":a="downdiagonalstrike";break;case"\\sout":a="horizontalstrike";break;case"\\fbox":a="box";break;default:a="updiagonalstrike"}r.setAttribute("notation",a);return r};k.horizBrace=function(e,t){var r=y.default.mathMLnode(e.value.label);return new o.default.MathNode(e.value.isOver?"mover":"munder",[z(e.value.base,t),r])};k.xArrow=function(e,t){var r=y.default.mathMLnode(e.value.label);var a=void 0;var i=void 0;if(e.value.body){var n=z(e.value.body,t);if(e.value.below){i=z(e.value.below,t);a=new o.default.MathNode("munderover",[r,i,n])}else{a=new o.default.MathNode("mover",[r,n])}}else if(e.value.below){i=z(e.value.below,t);a=new o.default.MathNode("munder",[r,i])}else{a=new o.default.MathNode("mover",[r])}return a};k.rule=function(e){var t=new o.default.MathNode("mrow");return t};k.kern=function(e){var t=new o.default.MathNode("mrow");return t};k.llap=function(e,t){var r=new o.default.MathNode("mpadded",[z(e.value.body,t)]);r.setAttribute("lspace","-1width");r.setAttribute("width","0px");return r};k.rlap=function(e,t){var r=new o.default.MathNode("mpadded",[z(e.value.body,t)]);r.setAttribute("width","0px");return r};k.phantom=function(e,t){var r=M(e.value.value,t);return new o.default.MathNode("mphantom",r)};k.mclass=function(e,t){var r=M(e.value.value,t);return new o.default.MathNode("mstyle",r)};var M=function e(t,r){var a=[];for(var i=0;i<t.length;i++){var n=t[i];a.push(z(n,r))}return a};var z=function e(t,r){var a=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(!t){return new o.default.MathNode("mrow")}if(k[t.type]){var i=k[t.type](t,r);if(a){if(i.type==="mrow"&&i.children.length===1){return i.children[0]}}return i}else{throw new f.default("Got group of unknown type: '"+t.type+"'")}};var C=function e(t,r,i){var n=M(t,i);var l=new o.default.MathNode("mrow",n);var s=new o.default.MathNode("annotation",[new o.default.TextNode(r)]);s.setAttribute("encoding","application/x-tex");var u=new o.default.MathNode("semantics",[l,s]);var f=new o.default.MathNode("math",[u]);return(0,a.makeSpan)(["katex-mathml"],[f])};t.exports=C},{"./ParseError":29,"./Style":33,"./buildCommon":34,"./fontMetrics":41,"./mathMLTree":45,"./stretchy":47,"./symbols":48,"./utils":51}],37:[function(e,t,r){"use strict";var a=e("./buildHTML");var i=v(a);var n=e("./buildMathML");var l=v(n);var s=e("./buildCommon");var o=e("./Options");var u=v(o);var f=e("./Settings");var d=v(f);var c=e("./Style");var h=v(c);function v(e){return e&&e.__esModule?e:{default:e}}var p=function e(t,r,a){a=a||new d.default({});var n=h.default.TEXT;if(a.displayMode){n=h.default.DISPLAY}var o=new u.default({style:n});var f=(0,l.default)(t,r,o);var c=(0,i.default)(t,o);var v=(0,s.makeSpan)(["katex"],[f,c]);if(a.displayMode){return(0,s.makeSpan)(["katex-display"],[v])}else{return v}};t.exports=p},{"./Options":28,"./Settings":32,"./Style":33,"./buildCommon":34,"./buildHTML":35,"./buildMathML":36}],38:[function(e,t,r){"use strict";var a=e("./ParseError");var i=p(a);var n=e("./Style");var l=p(n);var s=e("./buildCommon");var o=p(s);var u=e("./fontMetrics");var f=p(u);var d=e("./symbols");var c=p(d);var h=e("./utils");var v=p(h);function p(e){return e&&e.__esModule?e:{default:e}}var m=function e(t,r){if(c.default.math[t]&&c.default.math[t].replace){return f.default.getCharacterMetrics(c.default.math[t].replace,r)}else{return f.default.getCharacterMetrics(t,r)}};var g=function e(t,r,a,i){var n=a.havingBaseStyle(r);var l=(0,s.makeSpan)((i||[]).concat(n.sizingClasses(a)),[t],a);l.delimSizeMultiplier=n.sizeMultiplier/a.sizeMultiplier;l.height*=l.delimSizeMultiplier;l.depth*=l.delimSizeMultiplier;l.maxFontSize=n.sizeMultiplier;return l};var y=function e(t,r,a){var i=r.havingBaseStyle(a);var n=(1-r.sizeMultiplier/i.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter");t.style.top=n+"em";t.height-=n;t.depth+=n};var b=function e(t,r,a,i,n,l){var s=o.default.makeSymbol(t,"Main-Regular",n,i);var u=g(s,r,i,l);if(a){y(u,i,r)}return u};var x=function e(t,r,a,i){return o.default.makeSymbol(t,"Size"+r+"-Regular",a,i)};var w=function e(t,r,a,i,n,o){var u=x(t,r,n,i);var f=g((0,s.makeSpan)(["delimsizing","size"+r],[u],i),l.default.TEXT,i,o);if(a){y(f,i,l.default.TEXT)}return f};var k=function e(t,r,a){var i=void 0;if(r==="Size1-Regular"){i="delim-size1"}else if(r==="Size4-Regular"){i="delim-size4"}var n=(0,s.makeSpan)(["delimsizinginner",i],[(0,s.makeSpan)([],[o.default.makeSymbol(t,r,a)])]);return{type:"elem",elem:n}};var S=function e(t,r,a,i,n,u){var f=void 0;var d=void 0;var c=void 0;var h=void 0;f=c=h=t;d=null;var v="Size1-Regular";if(t==="\\uparrow"){c=h="\u23d0"}else if(t==="\\Uparrow"){c=h="\u2016"}else if(t==="\\downarrow"){f=c="\u23d0"}else if(t==="\\Downarrow"){f=c="\u2016"}else if(t==="\\updownarrow"){f="\\uparrow";c="\u23d0";h="\\downarrow"}else if(t==="\\Updownarrow"){f="\\Uparrow";c="\u2016";h="\\Downarrow"}else if(t==="["||t==="\\lbrack"){f="\u23a1";c="\u23a2";h="\u23a3";v="Size4-Regular"}else if(t==="]"||t==="\\rbrack"){f="\u23a4";c="\u23a5";h="\u23a6";v="Size4-Regular"}else if(t==="\\lfloor"){c=f="\u23a2";h="\u23a3";v="Size4-Regular"}else if(t==="\\lceil"){f="\u23a1";c=h="\u23a2";v="Size4-Regular"}else if(t==="\\rfloor"){c=f="\u23a5";h="\u23a6";v="Size4-Regular"}else if(t==="\\rceil"){f="\u23a4";c=h="\u23a5";v="Size4-Regular"}else if(t==="("){f="\u239b";c="\u239c";h="\u239d";v="Size4-Regular"}else if(t===")"){f="\u239e";c="\u239f";h="\u23a0";v="Size4-Regular"}else if(t==="\\{"||t==="\\lbrace"){f="\u23a7";d="\u23a8";h="\u23a9";c="\u23aa";v="Size4-Regular"}else if(t==="\\}"||t==="\\rbrace"){f="\u23ab";d="\u23ac";h="\u23ad";c="\u23aa";v="Size4-Regular"}else if(t==="\\lgroup"){f="\u23a7";h="\u23a9";c="\u23aa";v="Size4-Regular"}else if(t==="\\rgroup"){f="\u23ab";h="\u23ad";c="\u23aa";v="Size4-Regular"}else if(t==="\\lmoustache"){f="\u23a7";h="\u23ad";c="\u23aa";v="Size4-Regular"}else if(t==="\\rmoustache"){f="\u23ab";h="\u23a9";c="\u23aa";v="Size4-Regular"}else if(t==="\\surd"){f="\ue001";h="\u23b7";c="\ue000";v="Size4-Regular"}var p=m(f,v);var y=p.height+p.depth;var b=m(c,v);var x=b.height+b.depth;var w=m(h,v);var S=w.height+w.depth;var M=0;var z=1;if(d!==null){var C=m(d,v);M=C.height+C.depth;z=2}var T=y+S+M;var N=Math.ceil((r-T)/(z*x));var A=T+N*z*x;var q=i.fontMetrics().axisHeight;if(a){q*=i.sizeMultiplier}var _=A/2-q;var E=[];E.push(k(h,v,n));if(d===null){for(var O=0;O<N;O++){E.push(k(c,v,n))}}else{for(var R=0;R<N;R++){E.push(k(c,v,n))}E.push(k(d,v,n));for(var P=0;P<N;P++){E.push(k(c,v,n))}}E.push(k(f,v,n));var L=i.havingBaseStyle(l.default.TEXT);var F=o.default.makeVList(E,"bottom",_,L);return g((0,s.makeSpan)(["delimsizing","mult"],[F],L),l.default.TEXT,i,u)};var M=["(",")","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","\\lceil","\\rceil","\\surd"];var z=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","\\lmoustache","\\rmoustache"];var C=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"];var T=[0,1.2,1.8,2.4,3];var N=function e(t,r,a,n,l){if(t==="<"||t==="\\lt"){t="\\langle"}else if(t===">"||t==="\\gt"){t="\\rangle"}if(v.default.contains(M,t)||v.default.contains(C,t)){return w(t,r,false,a,n,l)}else if(v.default.contains(z,t)){return S(t,T[r],false,a,n,l)}else{throw new i.default("Illegal delimiter: '"+t+"'")}};var A=[{type:"small",style:l.default.SCRIPTSCRIPT},{type:"small",style:l.default.SCRIPT},{type:"small",style:l.default.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}];var q=[{type:"small",style:l.default.SCRIPTSCRIPT},{type:"small",style:l.default.SCRIPT},{type:"small",style:l.default.TEXT},{type:"stack"}];var _=[{type:"small",style:l.default.SCRIPTSCRIPT},{type:"small",style:l.default.SCRIPT},{type:"small",style:l.default.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}];var E=function e(t){if(t.type==="small"){return"Main-Regular"}else if(t.type==="large"){return"Size"+t.size+"-Regular"}else if(t.type==="stack"){return"Size4-Regular"}};var O=function e(t,r,a,i){var n=Math.min(2,3-i.style.size);for(var l=n;l<a.length;l++){if(a[l].type==="stack"){break}var s=m(t,E(a[l]));var o=s.height+s.depth;if(a[l].type==="small"){var u=i.havingBaseStyle(a[l].style);o*=u.sizeMultiplier}if(o>r){return a[l]}}return a[a.length-1]};var R=function e(t,r,a,i,n,l){if(t==="<"||t==="\\lt"){t="\\langle"}else if(t===">"||t==="\\gt"){t="\\rangle"}var s=void 0;if(v.default.contains(C,t)){s=A}else if(v.default.contains(M,t)){s=_}else{s=q}var o=O(t,r,s,i);if(o.type==="small"){return b(t,o.style,a,i,n,l)}else if(o.type==="large"){return w(t,o.size,a,i,n,l)}else if(o.type==="stack"){return S(t,r,a,i,n,l)}};var P=function e(t,r,a,i,n,l){var s=i.fontMetrics().axisHeight*i.sizeMultiplier;var o=901;var u=5/i.fontMetrics().ptPerEm;var f=Math.max(r-s,a+s);var d=Math.max(f/500*o,2*f-u);return R(t,d,true,i,n,l)};t.exports={sizedDelim:N,customSizedDelim:R,leftRightDelim:P}},{"./ParseError":29,"./Style":33,"./buildCommon":34,"./fontMetrics":41,"./symbols":48,"./utils":51}],39:[function(e,t,r){"use strict";var a=e("babel-runtime/helpers/classCallCheck");var i=d(a);var n=e("babel-runtime/helpers/createClass");var l=d(n);var s=e("./unicodeRegexes");var o=d(s);var u=e("./utils");var f=d(u);function d(e){return e&&e.__esModule?e:{default:e}}var c=function e(t){t=t.slice();for(var r=t.length-1;r>=0;r--){if(!t[r]){t.splice(r,1)}}return t.join(" ")};var h=function(){function e(t,r,a){(0,i.default)(this,e);this.classes=t||[];this.children=r||[];this.height=0;this.depth=0;this.maxFontSize=0;this.style={};this.attributes={};if(a){if(a.style.isTight()){this.classes.push("mtight")}if(a.getColor()){this.style.color=a.getColor()}}}(0,l.default)(e,[{key:"setAttribute",value:function e(t,r){this.attributes[t]=r}},{key:"tryCombine",value:function e(t){return false}},{key:"toNode",value:function e(){var t=document.createElement("span");t.className=c(this.classes);for(var r in this.style){if(Object.prototype.hasOwnProperty.call(this.style,r)){t.style[r]=this.style[r]}}for(var a in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,a)){t.setAttribute(a,this.attributes[a])}}for(var i=0;i<this.children.length;i++){t.appendChild(this.children[i].toNode())}return t}},{key:"toMarkup",value:function e(){var t="<span";if(this.classes.length){t+=' class="';t+=f.default.escape(c(this.classes));t+='"'}var r="";for(var a in this.style){if(this.style.hasOwnProperty(a)){r+=f.default.hyphenate(a)+":"+this.style[a]+";"}}if(r){t+=' style="'+f.default.escape(r)+'"'}for(var i in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,i)){t+=" "+i+'="';t+=f.default.escape(this.attributes[i]);t+='"'}}t+=">";for(var n=0;n<this.children.length;n++){t+=this.children[n].toMarkup()}t+="</span>";return t}}]);return e}();var v=function(){function e(t){(0,i.default)(this,e);this.children=t||[];this.height=0;this.depth=0;this.maxFontSize=0}(0,l.default)(e,[{key:"toNode",value:function e(){var t=document.createDocumentFragment();for(var r=0;r<this.children.length;r++){t.appendChild(this.children[r].toNode())}return t}},{key:"toMarkup",value:function e(){var t="";for(var r=0;r<this.children.length;r++){t+=this.children[r].toMarkup()}return t}}]);return e}();var p={"\xee":"\u0131\u0302","\xef":"\u0131\u0308","\xed":"\u0131\u0301","\xec":"\u0131\u0300"};var m=function(){function e(t,r,a,n,l,s,u){(0,i.default)(this,e);this.value=t||"";this.height=r||0;this.depth=a||0;this.italic=n||0;this.skew=l||0;this.classes=s||[];this.style=u||{};this.maxFontSize=0;if(o.default.cjkRegex.test(t)){if(o.default.hangulRegex.test(t)){this.classes.push("hangul_fallback")}else{this.classes.push("cjk_fallback")}}if(/[\xee\xef\xed\xec]/.test(this.value)){this.value=p[this.value]}}(0,l.default)(e,[{key:"tryCombine",value:function t(r){if(!r||!(r instanceof e)||this.italic>0||c(this.classes)!==c(r.classes)||this.skew!==r.skew||this.maxFontSize!==r.maxFontSize){return false}for(var a in this.style){if(this.style.hasOwnProperty(a)&&this.style[a]!==r.style[a]){return false}}for(var i in r.style){if(r.style.hasOwnProperty(i)&&this.style[i]!==r.style[i]){return false}}this.value+=r.value;this.height=Math.max(this.height,r.height);this.depth=Math.max(this.depth,r.depth);this.italic=r.italic;return true}},{key:"toNode",value:function e(){var t=document.createTextNode(this.value);var r=null;if(this.italic>0){r=document.createElement("span");r.style.marginRight=this.italic+"em"}if(this.classes.length>0){r=r||document.createElement("span");r.className=c(this.classes)}for(var a in this.style){if(this.style.hasOwnProperty(a)){r=r||document.createElement("span");r.style[a]=this.style[a]}}if(r){r.appendChild(t);return r}else{return t}}},{key:"toMarkup",value:function e(){var t=false;var r="<span";if(this.classes.length){t=true;r+=' class="';r+=f.default.escape(c(this.classes));r+='"'}var a="";if(this.italic>0){a+="margin-right:"+this.italic+"em;"}for(var i in this.style){if(this.style.hasOwnProperty(i)){a+=f.default.hyphenate(i)+":"+this.style[i]+";"}}if(a){t=true;r+=' style="'+f.default.escape(a)+'"'}var n=f.default.escape(this.value);if(t){r+=">";r+=n;r+="</span>";return r}else{return n}}}]);return e}();t.exports={span:h,documentFragment:v,symbolNode:m}},{"./unicodeRegexes":49,"./utils":51,"babel-runtime/helpers/classCallCheck":4,"babel-runtime/helpers/createClass":5}],40:[function(e,t,r){"use strict";var a=e("./ParseNode");var i=s(a);var n=e("./ParseError");var l=s(n);function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){var a=[];var n=[a];var s=[];while(true){var o=e.parseExpression(false,null);o=new i.default("ordgroup",o,e.mode);if(r){o=new i.default("styling",{style:r,value:[o]},e.mode)}a.push(o);var u=e.nextToken.text;if(u==="&"){e.consume()}else if(u==="\\end"){break}else if(u==="\\\\"||u==="\\cr"){var f=e.parseFunction();s.push(f.value.size);a=[];n.push(a)}else{throw new l.default("Expected & or \\\\ or \\end",e.nextToken)}}t.body=n;t.rowGaps=s;return new i.default(t.type,t,e.mode)}function u(e,r,a){if(typeof e==="string"){e=[e]}if(typeof r==="number"){r={numArgs:r}}var i={numArgs:r.numArgs||0,argTypes:r.argTypes,greediness:1,allowedInText:!!r.allowedInText,numOptionalArgs:r.numOptionalArgs||0,handler:a};for(var n=0;n<e.length;++n){t.exports[e[n]]=i}}function f(e){if(e.substr(0,1)==="d"){return"display"}else{return"text"}}u(["array","darray"],{numArgs:1},function(e,t){var r=t[0];r=r.value.map?r.value:[r];var a=r.map(function(e){var t=e.value;if("lcr".indexOf(t)!==-1){return{type:"align",align:t}}else if(t==="|"){return{type:"separator",separator:"|"}}throw new l.default("Unknown column alignment: "+e.value,e)});var i={type:"array",cols:a,hskipBeforeAndAfter:true};i=o(e.parser,i,f(e.envName));return i});u(["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix"],{},function(e){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName];var r={type:"array",hskipBeforeAndAfter:false};r=o(e.parser,r,f(e.envName));if(t){r=new i.default("leftright",{body:[r],left:t[0],right:t[1]},e.mode)}return r});u(["cases","dcases"],{},function(e){var t={type:"array",arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]};t=o(e.parser,t,f(e.envName));t=new i.default("leftright",{body:[t],left:"\\{",right:"."},e.mode);return t});u("aligned",{},function(e){var t={type:"array",cols:[],addJot:true};t=o(e.parser,t,"display");var r=new i.default("ordgroup",[],e.mode);var a=0;t.value.body.forEach(function(e){for(var t=1;t<e.length;t+=2){var i=e[t].value.value[0];i.value.unshift(r)}if(a<e.length){a=e.length}});for(var n=0;n<a;++n){var l="r";var s=0;if(n%2===1){l="l"}else if(n>0){s=2}t.value.cols[n]={type:"align",align:l,pregap:s,postgap:0}}return t});u("gathered",{},function(e){var t={type:"array",cols:[{type:"align",align:"c"}],addJot:true};t=o(e.parser,t,"display");return t})},{"./ParseError":29,"./ParseNode":30}],41:[function(e,t,r){"use strict";var a=e("./unicodeRegexes");var i=e("./fontMetricsData");var n=l(i);function l(e){return e&&e.__esModule?e:{default:e}}var s={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2]};var o={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"A","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"o","\xdf":"B","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"a","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"o","\xff":"y","\u0410":"A","\u0411":"B","\u0412":"B","\u0413":"F","\u0414":"A","\u0415":"E","\u0416":"K","\u0417":"3","\u0418":"N","\u0419":"N","\u041a":"K","\u041b":"N","\u041c":"M","\u041d":"H","\u041e":"O","\u041f":"N","\u0420":"P","\u0421":"C","\u0422":"T","\u0423":"y","\u0424":"O","\u0425":"X","\u0426":"U","\u0427":"h","\u0428":"W","\u0429":"W","\u042a":"B","\u042b":"X","\u042c":"B","\u042d":"3","\u042e":"X","\u042f":"R","\u0430":"a","\u0431":"b","\u0432":"a","\u0433":"r","\u0434":"y","\u0435":"e","\u0436":"m","\u0437":"e","\u0438":"n","\u0439":"n","\u043a":"n","\u043b":"n","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"n","\u0440":"p","\u0441":"c","\u0442":"o","\u0443":"y","\u0444":"b","\u0445":"x","\u0446":"n","\u0447":"n","\u0448":"w","\u0449":"w","\u044a":"a","\u044b":"m","\u044c":"a","\u044d":"e","\u044e":"m","\u044f":"r"};var u=function e(t,r){var i=t.charCodeAt(0);if(t[0]in o){i=o[t[0]].charCodeAt(0)}else if(a.cjkRegex.test(t[0])){i="M".charCodeAt(0)}var l=n.default[r][i];if(l){return{depth:l[0],height:l[1],italic:l[2],skew:l[3],width:l[4]}}};var f={};var d=function e(t){var r=void 0;if(t>=5){r=0}else if(t>=3){r=1}else{r=2}if(!f[r]){var a=f[r]={};for(var i in s){if(s.hasOwnProperty(i)){a[i]=s[i][r]}}a.cssEmPerMu=a.quad/18}return f[r]};t.exports={getFontMetrics:d,getCharacterMetrics:u}},{"./fontMetricsData":42,"./unicodeRegexes":49}],42:[function(e,t,r){"use strict";t.exports={"AMS-Regular":{65:[0,.68889,0,0],66:[0,.68889,0,0],67:[0,.68889,0,0],68:[0,.68889,0,0],69:[0,.68889,0,0],70:[0,.68889,0,0],71:[0,.68889,0,0],72:[0,.68889,0,0],73:[0,.68889,0,0],74:[.16667,.68889,0,0],75:[0,.68889,0,0],76:[0,.68889,0,0],77:[0,.68889,0,0],78:[0,.68889,0,0],79:[.16667,.68889,0,0],80:[0,.68889,0,0],81:[.16667,.68889,0,0],82:[0,.68889,0,0],83:[0,.68889,0,0],84:[0,.68889,0,0],85:[0,.68889,0,0],86:[0,.68889,0,0],87:[0,.68889,0,0],88:[0,.68889,0,0],89:[0,.68889,0,0],90:[0,.68889,0,0],107:[0,.68889,0,0],165:[0,.675,.025,0],174:[.15559,.69224,0,0],240:[0,.68889,0,0],295:[0,.68889,0,0],710:[0,.825,0,0],732:[0,.9,0,0],770:[0,.825,0,0],771:[0,.9,0,0],989:[.08167,.58167,0,0],1008:[0,.43056,.04028,0],8245:[0,.54986,0,0],8463:[0,.68889,0,0],8487:[0,.68889,0,0],8498:[0,.68889,0,0],8502:[0,.68889,0,0],8503:[0,.68889,0,0],8504:[0,.68889,0,0],8513:[0,.68889,0,0],8592:[-.03598,.46402,0,0],8594:[-.03598,.46402,0,0],8602:[-.13313,.36687,0,0],8603:[-.13313,.36687,0,0],8606:[.01354,.52239,0,0],8608:[.01354,.52239,0,0],8610:[.01354,.52239,0,0],8611:[.01354,.52239,0,0],8619:[0,.54986,0,0],8620:[0,.54986,0,0],8621:[-.13313,.37788,0,0],8622:[-.13313,.36687,0,0],8624:[0,.69224,0,0],8625:[0,.69224,0,0],8630:[0,.43056,0,0],8631:[0,.43056,0,0],8634:[.08198,.58198,0,0],8635:[.08198,.58198,0,0],8638:[.19444,.69224,0,0],8639:[.19444,.69224,0,0],8642:[.19444,.69224,0,0],8643:[.19444,.69224,0,0],8644:[.1808,.675,0,0],8646:[.1808,.675,0,0],8647:[.1808,.675,0,0],8648:[.19444,.69224,0,0],8649:[.1808,.675,0,0],8650:[.19444,.69224,0,0],8651:[.01354,.52239,0,0],8652:[.01354,.52239,0,0],8653:[-.13313,.36687,0,0],8654:[-.13313,.36687,0,0],8655:[-.13313,.36687,0,0],8666:[.13667,.63667,0,0],8667:[.13667,.63667,0,0],8669:[-.13313,.37788,0,0],8672:[-.064,.437,0,0],8674:[-.064,.437,0,0],8705:[0,.825,0,0],8708:[0,.68889,0,0],8709:[.08167,.58167,0,0],8717:[0,.43056,0,0],8722:[-.03598,.46402,0,0],8724:[.08198,.69224,0,0],8726:[.08167,.58167,0,0],8733:[0,.69224,0,0],8736:[0,.69224,0,0],8737:[0,.69224,0,0],8738:[.03517,.52239,0,0],8739:[.08167,.58167,0,0],8740:[.25142,.74111,0,0],8741:[.08167,.58167,0,0],8742:[.25142,.74111,0,0],8756:[0,.69224,0,0],8757:[0,.69224,0,0],8764:[-.13313,.36687,0,0],8765:[-.13313,.37788,0,0],8769:[-.13313,.36687,0,0],8770:[-.03625,.46375,0,0],8774:[.30274,.79383,0,0],8776:[-.01688,.48312,0,0],8778:[.08167,.58167,0,0],8782:[.06062,.54986,0,0],8783:[.06062,.54986,0,0],8785:[.08198,.58198,0,0],8786:[.08198,.58198,0,0],8787:[.08198,.58198,0,0],8790:[0,.69224,0,0],8791:[.22958,.72958,0,0],8796:[.08198,.91667,0,0],8806:[.25583,.75583,0,0],8807:[.25583,.75583,0,0],8808:[.25142,.75726,0,0],8809:[.25142,.75726,0,0],8812:[.25583,.75583,0,0],8814:[.20576,.70576,0,0],8815:[.20576,.70576,0,0],8816:[.30274,.79383,0,0],8817:[.30274,.79383,0,0],8818:[.22958,.72958,0,0],8819:[.22958,.72958,0,0],8822:[.1808,.675,0,0],8823:[.1808,.675,0,0],8828:[.13667,.63667,0,0],8829:[.13667,.63667,0,0],8830:[.22958,.72958,0,0],8831:[.22958,.72958,0,0],8832:[.20576,.70576,0,0],8833:[.20576,.70576,0,0],8840:[.30274,.79383,0,0],8841:[.30274,.79383,0,0],8842:[.13597,.63597,0,0],8843:[.13597,.63597,0,0],8847:[.03517,.54986,0,0],8848:[.03517,.54986,0,0],8858:[.08198,.58198,0,0],8859:[.08198,.58198,0,0],8861:[.08198,.58198,0,0],8862:[0,.675,0,0],8863:[0,.675,0,0],8864:[0,.675,0,0],8865:[0,.675,0,0],8872:[0,.69224,0,0],8873:[0,.69224,0,0],8874:[0,.69224,0,0],8876:[0,.68889,0,0],8877:[0,.68889,0,0],8878:[0,.68889,0,0],8879:[0,.68889,0,0],8882:[.03517,.54986,0,0],8883:[.03517,.54986,0,0],8884:[.13667,.63667,0,0],8885:[.13667,.63667,0,0],8888:[0,.54986,0,0],8890:[.19444,.43056,0,0],8891:[.19444,.69224,0,0],8892:[.19444,.69224,0,0],8901:[0,.54986,0,0],8903:[.08167,.58167,0,0],8905:[.08167,.58167,0,0],8906:[.08167,.58167,0,0],8907:[0,.69224,0,0],8908:[0,.69224,0,0],8909:[-.03598,.46402,0,0],8910:[0,.54986,0,0],8911:[0,.54986,0,0],8912:[.03517,.54986,0,0],8913:[.03517,.54986,0,0],8914:[0,.54986,0,0],8915:[0,.54986,0,0],8916:[0,.69224,0,0],8918:[.0391,.5391,0,0],8919:[.0391,.5391,0,0],8920:[.03517,.54986,0,0],8921:[.03517,.54986,0,0],8922:[.38569,.88569,0,0],8923:[.38569,.88569,0,0],8926:[.13667,.63667,0,0],8927:[.13667,.63667,0,0],8928:[.30274,.79383,0,0],8929:[.30274,.79383,0,0],8934:[.23222,.74111,0,0],8935:[.23222,.74111,0,0],8936:[.23222,.74111,0,0],8937:[.23222,.74111,0,0],8938:[.20576,.70576,0,0],8939:[.20576,.70576,0,0],8940:[.30274,.79383,0,0],8941:[.30274,.79383,0,0],8994:[.19444,.69224,0,0],8995:[.19444,.69224,0,0],9416:[.15559,.69224,0,0],9484:[0,.69224,0,0],9488:[0,.69224,0,0],9492:[0,.37788,0,0],9496:[0,.37788,0,0],9585:[.19444,.68889,0,0],9586:[.19444,.74111,0,0],9632:[0,.675,0,0],9633:[0,.675,0,0],9650:[0,.54986,0,0],9651:[0,.54986,0,0],9654:[.03517,.54986,0,0],9660:[0,.54986,0,0],9661:[0,.54986,0,0],9664:[.03517,.54986,0,0],9674:[.11111,.69224,0,0],9733:[.19444,.69224,0,0],10003:[0,.69224,0,0],10016:[0,.69224,0,0],10731:[.11111,.69224,0,0],10846:[.19444,.75583,0,0],10877:[.13667,.63667,0,0],10878:[.13667,.63667,0,0],10885:[.25583,.75583,0,0],10886:[.25583,.75583,0,0],10887:[.13597,.63597,0,0],10888:[.13597,.63597,0,0],10889:[.26167,.75726,0,0],10890:[.26167,.75726,0,0],10891:[.48256,.98256,0,0],10892:[.48256,.98256,0,0],10901:[.13667,.63667,0,0],10902:[.13667,.63667,0,0],10933:[.25142,.75726,0,0],10934:[.25142,.75726,0,0],10935:[.26167,.75726,0,0],10936:[.26167,.75726,0,0],10937:[.26167,.75726,0,0],10938:[.26167,.75726,0,0],10949:[.25583,.75583,0,0],10950:[.25583,.75583,0,0],10955:[.28481,.79383,0,0],10956:[.28481,.79383,0,0],57350:[.08167,.58167,0,0],57351:[.08167,.58167,0,0],57352:[.08167,.58167,0,0],57353:[0,.43056,.04028,0],57356:[.25142,.75726,0,0],57357:[.25142,.75726,0,0],57358:[.41951,.91951,0,0],57359:[.30274,.79383,0,0],57360:[.30274,.79383,0,0],57361:[.41951,.91951,0,0],57366:[.25142,.75726,0,0],57367:[.25142,.75726,0,0],57368:[.25142,.75726,0,0],57369:[.25142,.75726,0,0],57370:[.13597,.63597,0,0],57371:[.13597,.63597,0,0]},"Caligraphic-Regular":{48:[0,.43056,0,0],49:[0,.43056,0,0],50:[0,.43056,0,0],51:[.19444,.43056,0,0],52:[.19444,.43056,0,0],53:[.19444,.43056,0,0],54:[0,.64444,0,0],55:[.19444,.43056,0,0],56:[0,.64444,0,0],57:[.19444,.43056,0,0],65:[0,.68333,0,.19445],66:[0,.68333,.03041,.13889],67:[0,.68333,.05834,.13889],68:[0,.68333,.02778,.08334],69:[0,.68333,.08944,.11111],70:[0,.68333,.09931,.11111],71:[.09722,.68333,.0593,.11111],72:[0,.68333,.00965,.11111],73:[0,.68333,.07382,0],74:[.09722,.68333,.18472,.16667],75:[0,.68333,.01445,.05556],76:[0,.68333,0,.13889],77:[0,.68333,0,.13889],78:[0,.68333,.14736,.08334],79:[0,.68333,.02778,.11111],80:[0,.68333,.08222,.08334],81:[.09722,.68333,0,.11111],82:[0,.68333,0,.08334],83:[0,.68333,.075,.13889],84:[0,.68333,.25417,0],85:[0,.68333,.09931,.08334],86:[0,.68333,.08222,0],87:[0,.68333,.08222,.08334],88:[0,.68333,.14643,.13889],89:[.09722,.68333,.08222,.08334],90:[0,.68333,.07944,.13889]},"Fraktur-Regular":{33:[0,.69141,0,0],34:[0,.69141,0,0],38:[0,.69141,0,0],39:[0,.69141,0,0],40:[.24982,.74947,0,0],41:[.24982,.74947,0,0],42:[0,.62119,0,0],43:[.08319,.58283,0,0],44:[0,.10803,0,0],45:[.08319,.58283,0,0],46:[0,.10803,0,0],47:[.24982,.74947,0,0],48:[0,.47534,0,0],49:[0,.47534,0,0],50:[0,.47534,0,0],51:[.18906,.47534,0,0],52:[.18906,.47534,0,0],53:[.18906,.47534,0,0],54:[0,.69141,0,0],55:[.18906,.47534,0,0],56:[0,.69141,0,0],57:[.18906,.47534,0,0],58:[0,.47534,0,0],59:[.12604,.47534,0,0],61:[-.13099,.36866,0,0],63:[0,.69141,0,0],65:[0,.69141,0,0],66:[0,.69141,0,0],67:[0,.69141,0,0],68:[0,.69141,0,0],69:[0,.69141,0,0],70:[.12604,.69141,0,0],71:[0,.69141,0,0],72:[.06302,.69141,0,0],73:[0,.69141,0,0],74:[.12604,.69141,0,0],75:[0,.69141,0,0],76:[0,.69141,0,0],77:[0,.69141,0,0],78:[0,.69141,0,0],79:[0,.69141,0,0],80:[.18906,.69141,0,0],81:[.03781,.69141,0,0],82:[0,.69141,0,0],83:[0,.69141,0,0],84:[0,.69141,0,0],85:[0,.69141,0,0],86:[0,.69141,0,0],87:[0,.69141,0,0],88:[0,.69141,0,0],89:[.18906,.69141,0,0],90:[.12604,.69141,0,0],91:[.24982,.74947,0,0],93:[.24982,.74947,0,0],94:[0,.69141,0,0],97:[0,.47534,0,0],98:[0,.69141,0,0],99:[0,.47534,0,0],100:[0,.62119,0,0],101:[0,.47534,0,0],102:[.18906,.69141,0,0],103:[.18906,.47534,0,0],104:[.18906,.69141,0,0],105:[0,.69141,0,0],106:[0,.69141,0,0],107:[0,.69141,0,0],108:[0,.69141,0,0],109:[0,.47534,0,0],110:[0,.47534,0,0],111:[0,.47534,0,0],112:[.18906,.52396,0,0],113:[.18906,.47534,0,0],114:[0,.47534,0,0],115:[0,.47534,0,0],116:[0,.62119,0,0],117:[0,.47534,0,0],118:[0,.52396,0,0],119:[0,.52396,0,0],120:[.18906,.47534,0,0],121:[.18906,.47534,0,0],122:[.18906,.47534,0,0],8216:[0,.69141,0,0],8217:[0,.69141,0,0],58112:[0,.62119,0,0],58113:[0,.62119,0,0],58114:[.18906,.69141,0,0],58115:[.18906,.69141,0,0],58116:[.18906,.47534,0,0],58117:[0,.69141,0,0],58118:[0,.62119,0,0],58119:[0,.47534,0,0]},"Main-Bold":{33:[0,.69444,0,0],34:[0,.69444,0,0],35:[.19444,.69444,0,0],36:[.05556,.75,0,0],37:[.05556,.75,0,0],38:[0,.69444,0,0],39:[0,.69444,0,0],40:[.25,.75,0,0],41:[.25,.75,0,0],42:[0,.75,0,0],43:[.13333,.63333,0,0],44:[.19444,.15556,0,0],45:[0,.44444,0,0],46:[0,.15556,0,0],47:[.25,.75,0,0],48:[0,.64444,0,0],49:[0,.64444,0,0],50:[0,.64444,0,0],51:[0,.64444,0,0],52:[0,.64444,0,0],53:[0,.64444,0,0],54:[0,.64444,0,0],55:[0,.64444,0,0],56:[0,.64444,0,0],57:[0,.64444,0,0],58:[0,.44444,0,0],59:[.19444,.44444,0,0],60:[.08556,.58556,0,0],61:[-.10889,.39111,0,0],62:[.08556,.58556,0,0],63:[0,.69444,0,0],64:[0,.69444,0,0],65:[0,.68611,0,0],66:[0,.68611,0,0],67:[0,.68611,0,0],68:[0,.68611,0,0],69:[0,.68611,0,0],70:[0,.68611,0,0],71:[0,.68611,0,0],72:[0,.68611,0,0],73:[0,.68611,0,0],74:[0,.68611,0,0],75:[0,.68611,0,0],76:[0,.68611,0,0],77:[0,.68611,0,0],78:[0,.68611,0,0],79:[0,.68611,0,0],80:[0,.68611,0,0],81:[.19444,.68611,0,0],82:[0,.68611,0,0],83:[0,.68611,0,0],84:[0,.68611,0,0],85:[0,.68611,0,0],86:[0,.68611,.01597,0],87:[0,.68611,.01597,0],88:[0,.68611,0,0],89:[0,.68611,.02875,0],90:[0,.68611,0,0],91:[.25,.75,0,0],92:[.25,.75,0,0],93:[.25,.75,0,0],94:[0,.69444,0,0],95:[.31,.13444,.03194,0],96:[0,.69444,0,0],97:[0,.44444,0,0],98:[0,.69444,0,0],99:[0,.44444,0,0],100:[0,.69444,0,0],101:[0,.44444,0,0],102:[0,.69444,.10903,0],103:[.19444,.44444,.01597,0],104:[0,.69444,0,0],105:[0,.69444,0,0],106:[.19444,.69444,0,0],107:[0,.69444,0,0],108:[0,.69444,0,0],109:[0,.44444,0,0],110:[0,.44444,0,0],111:[0,.44444,0,0],112:[.19444,.44444,0,0],113:[.19444,.44444,0,0],114:[0,.44444,0,0],115:[0,.44444,0,0],116:[0,.63492,0,0],117:[0,.44444,0,0],118:[0,.44444,.01597,0],119:[0,.44444,.01597,0],120:[0,.44444,0,0],121:[.19444,.44444,.01597,0],122:[0,.44444,0,0],123:[.25,.75,0,0],124:[.25,.75,0,0],125:[.25,.75,0,0],126:[.35,.34444,0,0],168:[0,.69444,0,0],172:[0,.44444,0,0],175:[0,.59611,0,0],176:[0,.69444,0,0],177:[.13333,.63333,0,0],180:[0,.69444,0,0],215:[.13333,.63333,0,0],247:[.13333,.63333,0,0],305:[0,.44444,0,0],567:[.19444,.44444,0,0],710:[0,.69444,0,0],711:[0,.63194,0,0],713:[0,.59611,0,0],714:[0,.69444,0,0],715:[0,.69444,0,0],728:[0,.69444,0,0],729:[0,.69444,0,0],730:[0,.69444,0,0],732:[0,.69444,0,0],768:[0,.69444,0,0],769:[0,.69444,0,0],770:[0,.69444,0,0],771:[0,.69444,0,0],772:[0,.59611,0,0],774:[0,.69444,0,0],775:[0,.69444,0,0],776:[0,.69444,0,0],778:[0,.69444,0,0],779:[0,.69444,0,0],780:[0,.63194,0,0],824:[.19444,.69444,0,0],915:[0,.68611,0,0],916:[0,.68611,0,0],920:[0,.68611,0,0],923:[0,.68611,0,0],926:[0,.68611,0,0],928:[0,.68611,0,0],931:[0,.68611,0,0],933:[0,.68611,0,0],934:[0,.68611,0,0],936:[0,.68611,0,0],937:[0,.68611,0,0],8211:[0,.44444,.03194,0],8212:[0,.44444,.03194,0],8216:[0,.69444,0,0],8217:[0,.69444,0,0],8220:[0,.69444,0,0],8221:[0,.69444,0,0],8224:[.19444,.69444,0,0],8225:[.19444,.69444,0,0],8242:[0,.55556,0,0],8407:[0,.72444,.15486,0],8463:[0,.69444,0,0],8465:[0,.69444,0,0],8467:[0,.69444,0,0],8472:[.19444,.44444,0,0],8476:[0,.69444,0,0],8501:[0,.69444,0,0],8592:[-.10889,.39111,0,0],8593:[.19444,.69444,0,0],8594:[-.10889,.39111,0,0],8595:[.19444,.69444,0,0],
8596:[-.10889,.39111,0,0],8597:[.25,.75,0,0],8598:[.19444,.69444,0,0],8599:[.19444,.69444,0,0],8600:[.19444,.69444,0,0],8601:[.19444,.69444,0,0],8636:[-.10889,.39111,0,0],8637:[-.10889,.39111,0,0],8640:[-.10889,.39111,0,0],8641:[-.10889,.39111,0,0],8656:[-.10889,.39111,0,0],8657:[.19444,.69444,0,0],8658:[-.10889,.39111,0,0],8659:[.19444,.69444,0,0],8660:[-.10889,.39111,0,0],8661:[.25,.75,0,0],8704:[0,.69444,0,0],8706:[0,.69444,.06389,0],8707:[0,.69444,0,0],8709:[.05556,.75,0,0],8711:[0,.68611,0,0],8712:[.08556,.58556,0,0],8715:[.08556,.58556,0,0],8722:[.13333,.63333,0,0],8723:[.13333,.63333,0,0],8725:[.25,.75,0,0],8726:[.25,.75,0,0],8727:[-.02778,.47222,0,0],8728:[-.02639,.47361,0,0],8729:[-.02639,.47361,0,0],8730:[.18,.82,0,0],8733:[0,.44444,0,0],8734:[0,.44444,0,0],8736:[0,.69224,0,0],8739:[.25,.75,0,0],8741:[.25,.75,0,0],8743:[0,.55556,0,0],8744:[0,.55556,0,0],8745:[0,.55556,0,0],8746:[0,.55556,0,0],8747:[.19444,.69444,.12778,0],8764:[-.10889,.39111,0,0],8768:[.19444,.69444,0,0],8771:[.00222,.50222,0,0],8776:[.02444,.52444,0,0],8781:[.00222,.50222,0,0],8801:[.00222,.50222,0,0],8804:[.19667,.69667,0,0],8805:[.19667,.69667,0,0],8810:[.08556,.58556,0,0],8811:[.08556,.58556,0,0],8826:[.08556,.58556,0,0],8827:[.08556,.58556,0,0],8834:[.08556,.58556,0,0],8835:[.08556,.58556,0,0],8838:[.19667,.69667,0,0],8839:[.19667,.69667,0,0],8846:[0,.55556,0,0],8849:[.19667,.69667,0,0],8850:[.19667,.69667,0,0],8851:[0,.55556,0,0],8852:[0,.55556,0,0],8853:[.13333,.63333,0,0],8854:[.13333,.63333,0,0],8855:[.13333,.63333,0,0],8856:[.13333,.63333,0,0],8857:[.13333,.63333,0,0],8866:[0,.69444,0,0],8867:[0,.69444,0,0],8868:[0,.69444,0,0],8869:[0,.69444,0,0],8900:[-.02639,.47361,0,0],8901:[-.02639,.47361,0,0],8902:[-.02778,.47222,0,0],8968:[.25,.75,0,0],8969:[.25,.75,0,0],8970:[.25,.75,0,0],8971:[.25,.75,0,0],8994:[-.13889,.36111,0,0],8995:[-.13889,.36111,0,0],9651:[.19444,.69444,0,0],9657:[-.02778,.47222,0,0],9661:[.19444,.69444,0,0],9667:[-.02778,.47222,0,0],9711:[.19444,.69444,0,0],9824:[.12963,.69444,0,0],9825:[.12963,.69444,0,0],9826:[.12963,.69444,0,0],9827:[.12963,.69444,0,0],9837:[0,.75,0,0],9838:[.19444,.69444,0,0],9839:[.19444,.69444,0,0],10216:[.25,.75,0,0],10217:[.25,.75,0,0],10815:[0,.68611,0,0],10927:[.19667,.69667,0,0],10928:[.19667,.69667,0,0]},"Main-Italic":{33:[0,.69444,.12417,0],34:[0,.69444,.06961,0],35:[.19444,.69444,.06616,0],37:[.05556,.75,.13639,0],38:[0,.69444,.09694,0],39:[0,.69444,.12417,0],40:[.25,.75,.16194,0],41:[.25,.75,.03694,0],42:[0,.75,.14917,0],43:[.05667,.56167,.03694,0],44:[.19444,.10556,0,0],45:[0,.43056,.02826,0],46:[0,.10556,0,0],47:[.25,.75,.16194,0],48:[0,.64444,.13556,0],49:[0,.64444,.13556,0],50:[0,.64444,.13556,0],51:[0,.64444,.13556,0],52:[.19444,.64444,.13556,0],53:[0,.64444,.13556,0],54:[0,.64444,.13556,0],55:[.19444,.64444,.13556,0],56:[0,.64444,.13556,0],57:[0,.64444,.13556,0],58:[0,.43056,.0582,0],59:[.19444,.43056,.0582,0],61:[-.13313,.36687,.06616,0],63:[0,.69444,.1225,0],64:[0,.69444,.09597,0],65:[0,.68333,0,0],66:[0,.68333,.10257,0],67:[0,.68333,.14528,0],68:[0,.68333,.09403,0],69:[0,.68333,.12028,0],70:[0,.68333,.13305,0],71:[0,.68333,.08722,0],72:[0,.68333,.16389,0],73:[0,.68333,.15806,0],74:[0,.68333,.14028,0],75:[0,.68333,.14528,0],76:[0,.68333,0,0],77:[0,.68333,.16389,0],78:[0,.68333,.16389,0],79:[0,.68333,.09403,0],80:[0,.68333,.10257,0],81:[.19444,.68333,.09403,0],82:[0,.68333,.03868,0],83:[0,.68333,.11972,0],84:[0,.68333,.13305,0],85:[0,.68333,.16389,0],86:[0,.68333,.18361,0],87:[0,.68333,.18361,0],88:[0,.68333,.15806,0],89:[0,.68333,.19383,0],90:[0,.68333,.14528,0],91:[.25,.75,.1875,0],93:[.25,.75,.10528,0],94:[0,.69444,.06646,0],95:[.31,.12056,.09208,0],97:[0,.43056,.07671,0],98:[0,.69444,.06312,0],99:[0,.43056,.05653,0],100:[0,.69444,.10333,0],101:[0,.43056,.07514,0],102:[.19444,.69444,.21194,0],103:[.19444,.43056,.08847,0],104:[0,.69444,.07671,0],105:[0,.65536,.1019,0],106:[.19444,.65536,.14467,0],107:[0,.69444,.10764,0],108:[0,.69444,.10333,0],109:[0,.43056,.07671,0],110:[0,.43056,.07671,0],111:[0,.43056,.06312,0],112:[.19444,.43056,.06312,0],113:[.19444,.43056,.08847,0],114:[0,.43056,.10764,0],115:[0,.43056,.08208,0],116:[0,.61508,.09486,0],117:[0,.43056,.07671,0],118:[0,.43056,.10764,0],119:[0,.43056,.10764,0],120:[0,.43056,.12042,0],121:[.19444,.43056,.08847,0],122:[0,.43056,.12292,0],126:[.35,.31786,.11585,0],163:[0,.69444,0,0],305:[0,.43056,0,.02778],567:[.19444,.43056,0,.08334],768:[0,.69444,0,0],769:[0,.69444,.09694,0],770:[0,.69444,.06646,0],771:[0,.66786,.11585,0],772:[0,.56167,.10333,0],774:[0,.69444,.10806,0],775:[0,.66786,.11752,0],776:[0,.66786,.10474,0],778:[0,.69444,0,0],779:[0,.69444,.1225,0],780:[0,.62847,.08295,0],915:[0,.68333,.13305,0],916:[0,.68333,0,0],920:[0,.68333,.09403,0],923:[0,.68333,0,0],926:[0,.68333,.15294,0],928:[0,.68333,.16389,0],931:[0,.68333,.12028,0],933:[0,.68333,.11111,0],934:[0,.68333,.05986,0],936:[0,.68333,.11111,0],937:[0,.68333,.10257,0],8211:[0,.43056,.09208,0],8212:[0,.43056,.09208,0],8216:[0,.69444,.12417,0],8217:[0,.69444,.12417,0],8220:[0,.69444,.1685,0],8221:[0,.69444,.06961,0],8463:[0,.68889,0,0]},"Main-Regular":{32:[0,0,0,0],33:[0,.69444,0,0],34:[0,.69444,0,0],35:[.19444,.69444,0,0],36:[.05556,.75,0,0],37:[.05556,.75,0,0],38:[0,.69444,0,0],39:[0,.69444,0,0],40:[.25,.75,0,0],41:[.25,.75,0,0],42:[0,.75,0,0],43:[.08333,.58333,0,0],44:[.19444,.10556,0,0],45:[0,.43056,0,0],46:[0,.10556,0,0],47:[.25,.75,0,0],48:[0,.64444,0,0],49:[0,.64444,0,0],50:[0,.64444,0,0],51:[0,.64444,0,0],52:[0,.64444,0,0],53:[0,.64444,0,0],54:[0,.64444,0,0],55:[0,.64444,0,0],56:[0,.64444,0,0],57:[0,.64444,0,0],58:[0,.43056,0,0],59:[.19444,.43056,0,0],60:[.0391,.5391,0,0],61:[-.13313,.36687,0,0],62:[.0391,.5391,0,0],63:[0,.69444,0,0],64:[0,.69444,0,0],65:[0,.68333,0,0],66:[0,.68333,0,0],67:[0,.68333,0,0],68:[0,.68333,0,0],69:[0,.68333,0,0],70:[0,.68333,0,0],71:[0,.68333,0,0],72:[0,.68333,0,0],73:[0,.68333,0,0],74:[0,.68333,0,0],75:[0,.68333,0,0],76:[0,.68333,0,0],77:[0,.68333,0,0],78:[0,.68333,0,0],79:[0,.68333,0,0],80:[0,.68333,0,0],81:[.19444,.68333,0,0],82:[0,.68333,0,0],83:[0,.68333,0,0],84:[0,.68333,0,0],85:[0,.68333,0,0],86:[0,.68333,.01389,0],87:[0,.68333,.01389,0],88:[0,.68333,0,0],89:[0,.68333,.025,0],90:[0,.68333,0,0],91:[.25,.75,0,0],92:[.25,.75,0,0],93:[.25,.75,0,0],94:[0,.69444,0,0],95:[.31,.12056,.02778,0],96:[0,.69444,0,0],97:[0,.43056,0,0],98:[0,.69444,0,0],99:[0,.43056,0,0],100:[0,.69444,0,0],101:[0,.43056,0,0],102:[0,.69444,.07778,0],103:[.19444,.43056,.01389,0],104:[0,.69444,0,0],105:[0,.66786,0,0],106:[.19444,.66786,0,0],107:[0,.69444,0,0],108:[0,.69444,0,0],109:[0,.43056,0,0],110:[0,.43056,0,0],111:[0,.43056,0,0],112:[.19444,.43056,0,0],113:[.19444,.43056,0,0],114:[0,.43056,0,0],115:[0,.43056,0,0],116:[0,.61508,0,0],117:[0,.43056,0,0],118:[0,.43056,.01389,0],119:[0,.43056,.01389,0],120:[0,.43056,0,0],121:[.19444,.43056,.01389,0],122:[0,.43056,0,0],123:[.25,.75,0,0],124:[.25,.75,0,0],125:[.25,.75,0,0],126:[.35,.31786,0,0],160:[0,0,0,0],168:[0,.66786,0,0],172:[0,.43056,0,0],175:[0,.56778,0,0],176:[0,.69444,0,0],177:[.08333,.58333,0,0],180:[0,.69444,0,0],215:[.08333,.58333,0,0],247:[.08333,.58333,0,0],305:[0,.43056,0,0],567:[.19444,.43056,0,0],710:[0,.69444,0,0],711:[0,.62847,0,0],713:[0,.56778,0,0],714:[0,.69444,0,0],715:[0,.69444,0,0],728:[0,.69444,0,0],729:[0,.66786,0,0],730:[0,.69444,0,0],732:[0,.66786,0,0],768:[0,.69444,0,0],769:[0,.69444,0,0],770:[0,.69444,0,0],771:[0,.66786,0,0],772:[0,.56778,0,0],774:[0,.69444,0,0],775:[0,.66786,0,0],776:[0,.66786,0,0],778:[0,.69444,0,0],779:[0,.69444,0,0],780:[0,.62847,0,0],824:[.19444,.69444,0,0],915:[0,.68333,0,0],916:[0,.68333,0,0],920:[0,.68333,0,0],923:[0,.68333,0,0],926:[0,.68333,0,0],928:[0,.68333,0,0],931:[0,.68333,0,0],933:[0,.68333,0,0],934:[0,.68333,0,0],936:[0,.68333,0,0],937:[0,.68333,0,0],8211:[0,.43056,.02778,0],8212:[0,.43056,.02778,0],8216:[0,.69444,0,0],8217:[0,.69444,0,0],8220:[0,.69444,0,0],8221:[0,.69444,0,0],8224:[.19444,.69444,0,0],8225:[.19444,.69444,0,0],8230:[0,.12,0,0],8242:[0,.55556,0,0],8407:[0,.71444,.15382,0],8463:[0,.68889,0,0],8465:[0,.69444,0,0],8467:[0,.69444,0,.11111],8472:[.19444,.43056,0,.11111],8476:[0,.69444,0,0],8501:[0,.69444,0,0],8592:[-.13313,.36687,0,0],8593:[.19444,.69444,0,0],8594:[-.13313,.36687,0,0],8595:[.19444,.69444,0,0],8596:[-.13313,.36687,0,0],8597:[.25,.75,0,0],8598:[.19444,.69444,0,0],8599:[.19444,.69444,0,0],8600:[.19444,.69444,0,0],8601:[.19444,.69444,0,0],8614:[.011,.511,0,0],8617:[.011,.511,0,0],8618:[.011,.511,0,0],8636:[-.13313,.36687,0,0],8637:[-.13313,.36687,0,0],8640:[-.13313,.36687,0,0],8641:[-.13313,.36687,0,0],8652:[.011,.671,0,0],8656:[-.13313,.36687,0,0],8657:[.19444,.69444,0,0],8658:[-.13313,.36687,0,0],8659:[.19444,.69444,0,0],8660:[-.13313,.36687,0,0],8661:[.25,.75,0,0],8704:[0,.69444,0,0],8706:[0,.69444,.05556,.08334],8707:[0,.69444,0,0],8709:[.05556,.75,0,0],8711:[0,.68333,0,0],8712:[.0391,.5391,0,0],8715:[.0391,.5391,0,0],8722:[.08333,.58333,0,0],8723:[.08333,.58333,0,0],8725:[.25,.75,0,0],8726:[.25,.75,0,0],8727:[-.03472,.46528,0,0],8728:[-.05555,.44445,0,0],8729:[-.05555,.44445,0,0],8730:[.2,.8,0,0],8733:[0,.43056,0,0],8734:[0,.43056,0,0],8736:[0,.69224,0,0],8739:[.25,.75,0,0],8741:[.25,.75,0,0],8743:[0,.55556,0,0],8744:[0,.55556,0,0],8745:[0,.55556,0,0],8746:[0,.55556,0,0],8747:[.19444,.69444,.11111,0],8764:[-.13313,.36687,0,0],8768:[.19444,.69444,0,0],8771:[-.03625,.46375,0,0],8773:[-.022,.589,0,0],8776:[-.01688,.48312,0,0],8781:[-.03625,.46375,0,0],8784:[-.133,.67,0,0],8800:[.215,.716,0,0],8801:[-.03625,.46375,0,0],8804:[.13597,.63597,0,0],8805:[.13597,.63597,0,0],8810:[.0391,.5391,0,0],8811:[.0391,.5391,0,0],8826:[.0391,.5391,0,0],8827:[.0391,.5391,0,0],8834:[.0391,.5391,0,0],8835:[.0391,.5391,0,0],8838:[.13597,.63597,0,0],8839:[.13597,.63597,0,0],8846:[0,.55556,0,0],8849:[.13597,.63597,0,0],8850:[.13597,.63597,0,0],8851:[0,.55556,0,0],8852:[0,.55556,0,0],8853:[.08333,.58333,0,0],8854:[.08333,.58333,0,0],8855:[.08333,.58333,0,0],8856:[.08333,.58333,0,0],8857:[.08333,.58333,0,0],8866:[0,.69444,0,0],8867:[0,.69444,0,0],8868:[0,.69444,0,0],8869:[0,.69444,0,0],8872:[.249,.75,0,0],8900:[-.05555,.44445,0,0],8901:[-.05555,.44445,0,0],8902:[-.03472,.46528,0,0],8904:[.005,.505,0,0],8942:[.03,.9,0,0],8943:[-.19,.31,0,0],8945:[-.1,.82,0,0],8968:[.25,.75,0,0],8969:[.25,.75,0,0],8970:[.25,.75,0,0],8971:[.25,.75,0,0],8994:[-.14236,.35764,0,0],8995:[-.14236,.35764,0,0],9136:[.244,.744,0,0],9137:[.244,.744,0,0],9651:[.19444,.69444,0,0],9657:[-.03472,.46528,0,0],9661:[.19444,.69444,0,0],9667:[-.03472,.46528,0,0],9711:[.19444,.69444,0,0],9824:[.12963,.69444,0,0],9825:[.12963,.69444,0,0],9826:[.12963,.69444,0,0],9827:[.12963,.69444,0,0],9837:[0,.75,0,0],9838:[.19444,.69444,0,0],9839:[.19444,.69444,0,0],10216:[.25,.75,0,0],10217:[.25,.75,0,0],10222:[.244,.744,0,0],10223:[.244,.744,0,0],10229:[.011,.511,0,0],10230:[.011,.511,0,0],10231:[.011,.511,0,0],10232:[.024,.525,0,0],10233:[.024,.525,0,0],10234:[.024,.525,0,0],10236:[.011,.511,0,0],10815:[0,.68333,0,0],10927:[.13597,.63597,0,0],10928:[.13597,.63597,0,0]},"Math-BoldItalic":{47:[.19444,.69444,0,0],65:[0,.68611,0,0],66:[0,.68611,.04835,0],67:[0,.68611,.06979,0],68:[0,.68611,.03194,0],69:[0,.68611,.05451,0],70:[0,.68611,.15972,0],71:[0,.68611,0,0],72:[0,.68611,.08229,0],73:[0,.68611,.07778,0],74:[0,.68611,.10069,0],75:[0,.68611,.06979,0],76:[0,.68611,0,0],77:[0,.68611,.11424,0],78:[0,.68611,.11424,0],79:[0,.68611,.03194,0],80:[0,.68611,.15972,0],81:[.19444,.68611,0,0],82:[0,.68611,.00421,0],83:[0,.68611,.05382,0],84:[0,.68611,.15972,0],85:[0,.68611,.11424,0],86:[0,.68611,.25555,0],87:[0,.68611,.15972,0],88:[0,.68611,.07778,0],89:[0,.68611,.25555,0],90:[0,.68611,.06979,0],97:[0,.44444,0,0],98:[0,.69444,0,0],99:[0,.44444,0,0],100:[0,.69444,0,0],101:[0,.44444,0,0],102:[.19444,.69444,.11042,0],103:[.19444,.44444,.03704,0],104:[0,.69444,0,0],105:[0,.69326,0,0],106:[.19444,.69326,.0622,0],107:[0,.69444,.01852,0],108:[0,.69444,.0088,0],109:[0,.44444,0,0],110:[0,.44444,0,0],111:[0,.44444,0,0],112:[.19444,.44444,0,0],113:[.19444,.44444,.03704,0],114:[0,.44444,.03194,0],115:[0,.44444,0,0],116:[0,.63492,0,0],117:[0,.44444,0,0],118:[0,.44444,.03704,0],119:[0,.44444,.02778,0],120:[0,.44444,0,0],121:[.19444,.44444,.03704,0],122:[0,.44444,.04213,0],915:[0,.68611,.15972,0],916:[0,.68611,0,0],920:[0,.68611,.03194,0],923:[0,.68611,0,0],926:[0,.68611,.07458,0],928:[0,.68611,.08229,0],931:[0,.68611,.05451,0],933:[0,.68611,.15972,0],934:[0,.68611,0,0],936:[0,.68611,.11653,0],937:[0,.68611,.04835,0],945:[0,.44444,0,0],946:[.19444,.69444,.03403,0],947:[.19444,.44444,.06389,0],948:[0,.69444,.03819,0],949:[0,.44444,0,0],950:[.19444,.69444,.06215,0],951:[.19444,.44444,.03704,0],952:[0,.69444,.03194,0],953:[0,.44444,0,0],954:[0,.44444,0,0],955:[0,.69444,0,0],956:[.19444,.44444,0,0],957:[0,.44444,.06898,0],958:[.19444,.69444,.03021,0],959:[0,.44444,0,0],960:[0,.44444,.03704,0],961:[.19444,.44444,0,0],962:[.09722,.44444,.07917,0],963:[0,.44444,.03704,0],964:[0,.44444,.13472,0],965:[0,.44444,.03704,0],966:[.19444,.44444,0,0],967:[.19444,.44444,0,0],968:[.19444,.69444,.03704,0],969:[0,.44444,.03704,0],977:[0,.69444,0,0],981:[.19444,.69444,0,0],982:[0,.44444,.03194,0],1009:[.19444,.44444,0,0],1013:[0,.44444,0,0]},"Math-Italic":{47:[.19444,.69444,0,0],65:[0,.68333,0,.13889],66:[0,.68333,.05017,.08334],67:[0,.68333,.07153,.08334],68:[0,.68333,.02778,.05556],69:[0,.68333,.05764,.08334],70:[0,.68333,.13889,.08334],71:[0,.68333,0,.08334],72:[0,.68333,.08125,.05556],73:[0,.68333,.07847,.11111],74:[0,.68333,.09618,.16667],75:[0,.68333,.07153,.05556],76:[0,.68333,0,.02778],77:[0,.68333,.10903,.08334],78:[0,.68333,.10903,.08334],79:[0,.68333,.02778,.08334],80:[0,.68333,.13889,.08334],81:[.19444,.68333,0,.08334],82:[0,.68333,.00773,.08334],83:[0,.68333,.05764,.08334],84:[0,.68333,.13889,.08334],85:[0,.68333,.10903,.02778],86:[0,.68333,.22222,0],87:[0,.68333,.13889,0],88:[0,.68333,.07847,.08334],89:[0,.68333,.22222,0],90:[0,.68333,.07153,.08334],97:[0,.43056,0,0],98:[0,.69444,0,0],99:[0,.43056,0,.05556],100:[0,.69444,0,.16667],101:[0,.43056,0,.05556],102:[.19444,.69444,.10764,.16667],103:[.19444,.43056,.03588,.02778],104:[0,.69444,0,0],105:[0,.65952,0,0],106:[.19444,.65952,.05724,0],107:[0,.69444,.03148,0],108:[0,.69444,.01968,.08334],109:[0,.43056,0,0],110:[0,.43056,0,0],111:[0,.43056,0,.05556],112:[.19444,.43056,0,.08334],113:[.19444,.43056,.03588,.08334],114:[0,.43056,.02778,.05556],115:[0,.43056,0,.05556],116:[0,.61508,0,.08334],117:[0,.43056,0,.02778],118:[0,.43056,.03588,.02778],119:[0,.43056,.02691,.08334],120:[0,.43056,0,.02778],121:[.19444,.43056,.03588,.05556],122:[0,.43056,.04398,.05556],915:[0,.68333,.13889,.08334],916:[0,.68333,0,.16667],920:[0,.68333,.02778,.08334],923:[0,.68333,0,.16667],926:[0,.68333,.07569,.08334],928:[0,.68333,.08125,.05556],931:[0,.68333,.05764,.08334],933:[0,.68333,.13889,.05556],934:[0,.68333,0,.08334],936:[0,.68333,.11,.05556],937:[0,.68333,.05017,.08334],945:[0,.43056,.0037,.02778],946:[.19444,.69444,.05278,.08334],947:[.19444,.43056,.05556,0],948:[0,.69444,.03785,.05556],949:[0,.43056,0,.08334],950:[.19444,.69444,.07378,.08334],951:[.19444,.43056,.03588,.05556],952:[0,.69444,.02778,.08334],953:[0,.43056,0,.05556],954:[0,.43056,0,0],955:[0,.69444,0,0],956:[.19444,.43056,0,.02778],957:[0,.43056,.06366,.02778],958:[.19444,.69444,.04601,.11111],959:[0,.43056,0,.05556],960:[0,.43056,.03588,0],961:[.19444,.43056,0,.08334],962:[.09722,.43056,.07986,.08334],963:[0,.43056,.03588,0],964:[0,.43056,.1132,.02778],965:[0,.43056,.03588,.02778],966:[.19444,.43056,0,.08334],967:[.19444,.43056,0,.05556],968:[.19444,.69444,.03588,.11111],969:[0,.43056,.03588,0],977:[0,.69444,0,.08334],981:[.19444,.69444,0,.08334],982:[0,.43056,.02778,0],1009:[.19444,.43056,0,.08334],1013:[0,.43056,0,.05556]},"Math-Regular":{65:[0,.68333,0,.13889],66:[0,.68333,.05017,.08334],67:[0,.68333,.07153,.08334],68:[0,.68333,.02778,.05556],69:[0,.68333,.05764,.08334],70:[0,.68333,.13889,.08334],71:[0,.68333,0,.08334],72:[0,.68333,.08125,.05556],73:[0,.68333,.07847,.11111],74:[0,.68333,.09618,.16667],75:[0,.68333,.07153,.05556],76:[0,.68333,0,.02778],77:[0,.68333,.10903,.08334],78:[0,.68333,.10903,.08334],79:[0,.68333,.02778,.08334],80:[0,.68333,.13889,.08334],81:[.19444,.68333,0,.08334],82:[0,.68333,.00773,.08334],83:[0,.68333,.05764,.08334],84:[0,.68333,.13889,.08334],85:[0,.68333,.10903,.02778],86:[0,.68333,.22222,0],87:[0,.68333,.13889,0],88:[0,.68333,.07847,.08334],89:[0,.68333,.22222,0],90:[0,.68333,.07153,.08334],97:[0,.43056,0,0],98:[0,.69444,0,0],99:[0,.43056,0,.05556],100:[0,.69444,0,.16667],101:[0,.43056,0,.05556],102:[.19444,.69444,.10764,.16667],103:[.19444,.43056,.03588,.02778],104:[0,.69444,0,0],105:[0,.65952,0,0],106:[.19444,.65952,.05724,0],107:[0,.69444,.03148,0],108:[0,.69444,.01968,.08334],109:[0,.43056,0,0],110:[0,.43056,0,0],111:[0,.43056,0,.05556],112:[.19444,.43056,0,.08334],113:[.19444,.43056,.03588,.08334],114:[0,.43056,.02778,.05556],115:[0,.43056,0,.05556],116:[0,.61508,0,.08334],117:[0,.43056,0,.02778],118:[0,.43056,.03588,.02778],119:[0,.43056,.02691,.08334],120:[0,.43056,0,.02778],121:[.19444,.43056,.03588,.05556],122:[0,.43056,.04398,.05556],915:[0,.68333,.13889,.08334],916:[0,.68333,0,.16667],920:[0,.68333,.02778,.08334],923:[0,.68333,0,.16667],926:[0,.68333,.07569,.08334],928:[0,.68333,.08125,.05556],931:[0,.68333,.05764,.08334],933:[0,.68333,.13889,.05556],934:[0,.68333,0,.08334],936:[0,.68333,.11,.05556],937:[0,.68333,.05017,.08334],945:[0,.43056,.0037,.02778],946:[.19444,.69444,.05278,.08334],947:[.19444,.43056,.05556,0],948:[0,.69444,.03785,.05556],949:[0,.43056,0,.08334],950:[.19444,.69444,.07378,.08334],951:[.19444,.43056,.03588,.05556],952:[0,.69444,.02778,.08334],953:[0,.43056,0,.05556],954:[0,.43056,0,0],955:[0,.69444,0,0],956:[.19444,.43056,0,.02778],957:[0,.43056,.06366,.02778],958:[.19444,.69444,.04601,.11111],959:[0,.43056,0,.05556],960:[0,.43056,.03588,0],961:[.19444,.43056,0,.08334],962:[.09722,.43056,.07986,.08334],963:[0,.43056,.03588,0],964:[0,.43056,.1132,.02778],965:[0,.43056,.03588,.02778],966:[.19444,.43056,0,.08334],967:[.19444,.43056,0,.05556],968:[.19444,.69444,.03588,.11111],969:[0,.43056,.03588,0],977:[0,.69444,0,.08334],981:[.19444,.69444,0,.08334],982:[0,.43056,.02778,0],1009:[.19444,.43056,0,.08334],1013:[0,.43056,0,.05556]},"SansSerif-Regular":{33:[0,.69444,0,0],34:[0,.69444,0,0],35:[.19444,.69444,0,0],36:[.05556,.75,0,0],37:[.05556,.75,0,0],38:[0,.69444,0,0],39:[0,.69444,0,0],40:[.25,.75,0,0],41:[.25,.75,0,0],42:[0,.75,0,0],43:[.08333,.58333,0,0],44:[.125,.08333,0,0],45:[0,.44444,0,0],46:[0,.08333,0,0],47:[.25,.75,0,0],48:[0,.65556,0,0],49:[0,.65556,0,0],50:[0,.65556,0,0],51:[0,.65556,0,0],52:[0,.65556,0,0],53:[0,.65556,0,0],54:[0,.65556,0,0],55:[0,.65556,0,0],56:[0,.65556,0,0],57:[0,.65556,0,0],58:[0,.44444,0,0],59:[.125,.44444,0,0],61:[-.13,.37,0,0],63:[0,.69444,0,0],64:[0,.69444,0,0],65:[0,.69444,0,0],66:[0,.69444,0,0],67:[0,.69444,0,0],68:[0,.69444,0,0],69:[0,.69444,0,0],70:[0,.69444,0,0],71:[0,.69444,0,0],72:[0,.69444,0,0],73:[0,.69444,0,0],74:[0,.69444,0,0],75:[0,.69444,0,0],76:[0,.69444,0,0],77:[0,.69444,0,0],78:[0,.69444,0,0],79:[0,.69444,0,0],80:[0,.69444,0,0],81:[.125,.69444,0,0],82:[0,.69444,0,0],83:[0,.69444,0,0],84:[0,.69444,0,0],85:[0,.69444,0,0],86:[0,.69444,.01389,0],87:[0,.69444,.01389,0],88:[0,.69444,0,0],89:[0,.69444,.025,0],90:[0,.69444,0,0],91:[.25,.75,0,0],93:[.25,.75,0,0],94:[0,.69444,0,0],95:[.35,.09444,.02778,0],97:[0,.44444,0,0],98:[0,.69444,0,0],99:[0,.44444,0,0],100:[0,.69444,0,0],101:[0,.44444,0,0],102:[0,.69444,.06944,0],103:[.19444,.44444,.01389,0],104:[0,.69444,0,0],105:[0,.67937,0,0],106:[.19444,.67937,0,0],107:[0,.69444,0,0],108:[0,.69444,0,0],109:[0,.44444,0,0],110:[0,.44444,0,0],111:[0,.44444,0,0],112:[.19444,.44444,0,0],113:[.19444,.44444,0,0],114:[0,.44444,.01389,0],115:[0,.44444,0,0],116:[0,.57143,0,0],117:[0,.44444,0,0],118:[0,.44444,.01389,0],119:[0,.44444,.01389,0],120:[0,.44444,0,0],121:[.19444,.44444,.01389,0],122:[0,.44444,0,0],126:[.35,.32659,0,0],305:[0,.44444,0,0],567:[.19444,.44444,0,0],768:[0,.69444,0,0],769:[0,.69444,0,0],770:[0,.69444,0,0],771:[0,.67659,0,0],772:[0,.60889,0,0],774:[0,.69444,0,0],775:[0,.67937,0,0],776:[0,.67937,0,0],778:[0,.69444,0,0],779:[0,.69444,0,0],780:[0,.63194,0,0],915:[0,.69444,0,0],916:[0,.69444,0,0],920:[0,.69444,0,0],923:[0,.69444,0,0],926:[0,.69444,0,0],928:[0,.69444,0,0],931:[0,.69444,0,0],933:[0,.69444,0,0],934:[0,.69444,0,0],936:[0,.69444,0,0],937:[0,.69444,0,0],8211:[0,.44444,.02778,0],8212:[0,.44444,.02778,0],8216:[0,.69444,0,0],8217:[0,.69444,0,0],8220:[0,.69444,0,0],8221:[0,.69444,0,0]},"Script-Regular":{65:[0,.7,.22925,0],66:[0,.7,.04087,0],67:[0,.7,.1689,0],68:[0,.7,.09371,0],69:[0,.7,.18583,0],70:[0,.7,.13634,0],71:[0,.7,.17322,0],72:[0,.7,.29694,0],73:[0,.7,.19189,0],74:[.27778,.7,.19189,0],75:[0,.7,.31259,0],76:[0,.7,.19189,0],77:[0,.7,.15981,0],78:[0,.7,.3525,0],79:[0,.7,.08078,0],80:[0,.7,.08078,0],81:[0,.7,.03305,0],82:[0,.7,.06259,0],83:[0,.7,.19189,0],84:[0,.7,.29087,0],85:[0,.7,.25815,0],86:[0,.7,.27523,0],87:[0,.7,.27523,0],88:[0,.7,.26006,0],89:[0,.7,.2939,0],90:[0,.7,.24037,0]},"Size1-Regular":{40:[.35001,.85,0,0],41:[.35001,.85,0,0],47:[.35001,.85,0,0],91:[.35001,.85,0,0],92:[.35001,.85,0,0],93:[.35001,.85,0,0],123:[.35001,.85,0,0],125:[.35001,.85,0,0],710:[0,.72222,0,0],732:[0,.72222,0,0],770:[0,.72222,0,0],771:[0,.72222,0,0],8214:[-99e-5,.601,0,0],8593:[1e-5,.6,0,0],8595:[1e-5,.6,0,0],8657:[1e-5,.6,0,0],8659:[1e-5,.6,0,0],8719:[.25001,.75,0,0],8720:[.25001,.75,0,0],8721:[.25001,.75,0,0],8730:[.35001,.85,0,0],8739:[-.00599,.606,0,0],8741:[-.00599,.606,0,0],8747:[.30612,.805,.19445,0],8748:[.306,.805,.19445,0],8749:[.306,.805,.19445,0],8750:[.30612,.805,.19445,0],8896:[.25001,.75,0,0],8897:[.25001,.75,0,0],8898:[.25001,.75,0,0],8899:[.25001,.75,0,0],8968:[.35001,.85,0,0],8969:[.35001,.85,0,0],8970:[.35001,.85,0,0],8971:[.35001,.85,0,0],9168:[-99e-5,.601,0,0],10216:[.35001,.85,0,0],10217:[.35001,.85,0,0],10752:[.25001,.75,0,0],10753:[.25001,.75,0,0],10754:[.25001,.75,0,0],10756:[.25001,.75,0,0],10758:[.25001,.75,0,0]},"Size2-Regular":{40:[.65002,1.15,0,0],41:[.65002,1.15,0,0],47:[.65002,1.15,0,0],91:[.65002,1.15,0,0],92:[.65002,1.15,0,0],93:[.65002,1.15,0,0],123:[.65002,1.15,0,0],125:[.65002,1.15,0,0],710:[0,.75,0,0],732:[0,.75,0,0],770:[0,.75,0,0],771:[0,.75,0,0],8719:[.55001,1.05,0,0],8720:[.55001,1.05,0,0],8721:[.55001,1.05,0,0],8730:[.65002,1.15,0,0],8747:[.86225,1.36,.44445,0],8748:[.862,1.36,.44445,0],8749:[.862,1.36,.44445,0],8750:[.86225,1.36,.44445,0],8896:[.55001,1.05,0,0],8897:[.55001,1.05,0,0],8898:[.55001,1.05,0,0],8899:[.55001,1.05,0,0],8968:[.65002,1.15,0,0],8969:[.65002,1.15,0,0],8970:[.65002,1.15,0,0],8971:[.65002,1.15,0,0],10216:[.65002,1.15,0,0],10217:[.65002,1.15,0,0],10752:[.55001,1.05,0,0],10753:[.55001,1.05,0,0],10754:[.55001,1.05,0,0],10756:[.55001,1.05,0,0],10758:[.55001,1.05,0,0]},"Size3-Regular":{40:[.95003,1.45,0,0],41:[.95003,1.45,0,0],47:[.95003,1.45,0,0],91:[.95003,1.45,0,0],92:[.95003,1.45,0,0],93:[.95003,1.45,0,0],123:[.95003,1.45,0,0],125:[.95003,1.45,0,0],710:[0,.75,0,0],732:[0,.75,0,0],770:[0,.75,0,0],771:[0,.75,0,0],8730:[.95003,1.45,0,0],8968:[.95003,1.45,0,0],8969:[.95003,1.45,0,0],8970:[.95003,1.45,0,0],8971:[.95003,1.45,0,0],10216:[.95003,1.45,0,0],10217:[.95003,1.45,0,0]},"Size4-Regular":{40:[1.25003,1.75,0,0],41:[1.25003,1.75,0,0],47:[1.25003,1.75,0,0],91:[1.25003,1.75,0,0],92:[1.25003,1.75,0,0],93:[1.25003,1.75,0,0],123:[1.25003,1.75,0,0],125:[1.25003,1.75,0,0],710:[0,.825,0,0],732:[0,.825,0,0],770:[0,.825,0,0],771:[0,.825,0,0],8730:[1.25003,1.75,0,0],8968:[1.25003,1.75,0,0],8969:[1.25003,1.75,0,0],8970:[1.25003,1.75,0,0],8971:[1.25003,1.75,0,0],9115:[.64502,1.155,0,0],9116:[1e-5,.6,0,0],9117:[.64502,1.155,0,0],9118:[.64502,1.155,0,0],9119:[1e-5,.6,0,0],9120:[.64502,1.155,0,0],9121:[.64502,1.155,0,0],9122:[-99e-5,.601,0,0],9123:[.64502,1.155,0,0],9124:[.64502,1.155,0,0],9125:[-99e-5,.601,0,0],9126:[.64502,1.155,0,0],9127:[1e-5,.9,0,0],9128:[.65002,1.15,0,0],9129:[.90001,0,0,0],9130:[0,.3,0,0],9131:[1e-5,.9,0,0],9132:[.65002,1.15,0,0],9133:[.90001,0,0,0],9143:[.88502,.915,0,0],10216:[1.25003,1.75,0,0],10217:[1.25003,1.75,0,0],57344:[-.00499,.605,0,0],57345:[-.00499,.605,0,0],57680:[0,.12,0,0],57681:[0,.12,0,0],57682:[0,.12,0,0],57683:[0,.12,0,0]},"Typewriter-Regular":{33:[0,.61111,0,0],34:[0,.61111,0,0],35:[0,.61111,0,0],36:[.08333,.69444,0,0],37:[.08333,.69444,0,0],38:[0,.61111,0,0],39:[0,.61111,0,0],40:[.08333,.69444,0,0],41:[.08333,.69444,0,0],42:[0,.52083,0,0],43:[-.08056,.53055,0,0],44:[.13889,.125,0,0],45:[-.08056,.53055,0,0],46:[0,.125,0,0],47:[.08333,.69444,0,0],48:[0,.61111,0,0],49:[0,.61111,0,0],50:[0,.61111,0,0],51:[0,.61111,0,0],52:[0,.61111,0,0],53:[0,.61111,0,0],54:[0,.61111,0,0],55:[0,.61111,0,0],56:[0,.61111,0,0],57:[0,.61111,0,0],58:[0,.43056,0,0],59:[.13889,.43056,0,0],60:[-.05556,.55556,0,0],61:[-.19549,.41562,0,0],62:[-.05556,.55556,0,0],63:[0,.61111,0,0],64:[0,.61111,0,0],65:[0,.61111,0,0],66:[0,.61111,0,0],67:[0,.61111,0,0],68:[0,.61111,0,0],69:[0,.61111,0,0],70:[0,.61111,0,0],71:[0,.61111,0,0],72:[0,.61111,0,0],73:[0,.61111,0,0],74:[0,.61111,0,0],75:[0,.61111,0,0],76:[0,.61111,0,0],77:[0,.61111,0,0],78:[0,.61111,0,0],79:[0,.61111,0,0],80:[0,.61111,0,0],81:[.13889,.61111,0,0],82:[0,.61111,0,0],83:[0,.61111,0,0],84:[0,.61111,0,0],85:[0,.61111,0,0],86:[0,.61111,0,0],87:[0,.61111,0,0],88:[0,.61111,0,0],89:[0,.61111,0,0],90:[0,.61111,0,0],91:[.08333,.69444,0,0],92:[.08333,.69444,0,0],93:[.08333,.69444,0,0],94:[0,.61111,0,0],95:[.09514,0,0,0],96:[0,.61111,0,0],97:[0,.43056,0,0],98:[0,.61111,0,0],99:[0,.43056,0,0],100:[0,.61111,0,0],101:[0,.43056,0,0],102:[0,.61111,0,0],103:[.22222,.43056,0,0],104:[0,.61111,0,0],105:[0,.61111,0,0],106:[.22222,.61111,0,0],107:[0,.61111,0,0],108:[0,.61111,0,0],109:[0,.43056,0,0],110:[0,.43056,0,0],111:[0,.43056,0,0],112:[.22222,.43056,0,0],113:[.22222,.43056,0,0],114:[0,.43056,0,0],115:[0,.43056,0,0],116:[0,.55358,0,0],117:[0,.43056,0,0],118:[0,.43056,0,0],119:[0,.43056,0,0],120:[0,.43056,0,0],121:[.22222,.43056,0,0],122:[0,.43056,0,0],123:[.08333,.69444,0,0],124:[.08333,.69444,0,0],125:[.08333,.69444,0,0],126:[0,.61111,0,0],127:[0,.61111,0,0],305:[0,.43056,0,0],567:[.22222,.43056,0,0],768:[0,.61111,0,0],769:[0,.61111,0,0],770:[0,.61111,0,0],771:[0,.61111,0,0],772:[0,.56555,0,0],774:[0,.61111,0,0],776:[0,.61111,0,0],778:[0,.61111,0,0],780:[0,.56597,0,0],915:[0,.61111,0,0],916:[0,.61111,0,0],920:[0,.61111,0,0],923:[0,.61111,0,0],926:[0,.61111,0,0],928:[0,.61111,0,0],931:[0,.61111,0,0],933:[0,.61111,0,0],934:[0,.61111,0,0],936:[0,.61111,0,0],937:[0,.61111,0,0],2018:[0,.61111,0,0],2019:[0,.61111,0,0],8242:[0,.61111,0,0]}}},{}],43:[function(e,t,r){"use strict";var a=e("./utils");var i=u(a);var n=e("./ParseError");var l=u(n);var s=e("./ParseNode");var o=u(s);function u(e){return e&&e.__esModule?e:{default:e}}function f(e,r,a){if(typeof e==="string"){e=[e]}if(typeof r==="number"){r={numArgs:r}}var i={numArgs:r.numArgs,argTypes:r.argTypes,greediness:r.greediness===undefined?1:r.greediness,allowedInText:!!r.allowedInText,numOptionalArgs:r.numOptionalArgs||0,infix:!!r.infix,handler:a};for(var n=0;n<e.length;++n){t.exports[e[n]]=i}}var d=function e(t){if(t.type==="ordgroup"){return t.value}else{return[t]}};f("\\sqrt",{numArgs:1,numOptionalArgs:1},function(e,t){var r=t[0];var a=t[1];return{type:"sqrt",body:a,index:r}});var c={"\\text":undefined,"\\textrm":"mathrm","\\textsf":"mathsf","\\texttt":"mathtt","\\textnormal":"mathrm","\\textbf":"mathbf","\\textit":"textit"};f(["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textit"],{numArgs:1,argTypes:["text"],greediness:2,allowedInText:true},function(e,t){var r=t[0];return{type:"text",body:d(r),style:c[e.funcName]}});f("\\textcolor",{numArgs:2,allowedInText:true,greediness:3,argTypes:["color","original"]},function(e,t){var r=t[0];var a=t[1];return{type:"color",color:r.value,value:d(a)}});f("\\color",{numArgs:1,allowedInText:true,greediness:3,argTypes:["color"]},null);f("\\overline",{numArgs:1},function(e,t){var r=t[0];return{type:"overline",body:r}});f("\\underline",{numArgs:1},function(e,t){var r=t[0];return{type:"underline",body:r}});f("\\rule",{numArgs:2,numOptionalArgs:1,argTypes:["size","size","size"]},function(e,t){var r=t[0];var a=t[1];var i=t[2];return{type:"rule",shift:r&&r.value,width:a.value,height:i.value}});f(["\\kern","\\mkern"],{numArgs:1,argTypes:["size"]},function(e,t){return{type:"kern",dimension:t[0].value}});f("\\KaTeX",{numArgs:0},function(e){return{type:"katex"}});f("\\phantom",{numArgs:1},function(e,t){var r=t[0];return{type:"phantom",value:d(r)}});f(["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],{numArgs:1},function(e,t){var r=t[0];return{type:"mclass",mclass:"m"+e.funcName.substr(5),value:d(r)}});f("\\stackrel",{numArgs:2},function(e,t){var r=t[0];var a=t[1];var i=new o.default("op",{type:"op",limits:true,alwaysHandleSupSub:true,symbol:false,value:d(a)},a.mode);var n=new o.default("supsub",{base:i,sup:r,sub:null},r.mode);return{type:"mclass",mclass:"mrel",value:[n]}});f("\\bmod",{numArgs:0},function(e,t){return{type:"mod",modType:"bmod",value:null}});f(["\\pod","\\pmod","\\mod"],{numArgs:1},function(e,t){var r=t[0];return{type:"mod",modType:e.funcName.substr(1),value:d(r)}});var h={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}};var v=["(",")","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","\\lceil","\\rceil","<",">","\\langle","\\rangle","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","\\lmoustache","\\rmoustache","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];var p={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};f(["\\blue","\\orange","\\pink","\\red","\\green","\\gray","\\purple","\\blueA","\\blueB","\\blueC","\\blueD","\\blueE","\\tealA","\\tealB","\\tealC","\\tealD","\\tealE","\\greenA","\\greenB","\\greenC","\\greenD","\\greenE","\\goldA","\\goldB","\\goldC","\\goldD","\\goldE","\\redA","\\redB","\\redC","\\redD","\\redE","\\maroonA","\\maroonB","\\maroonC","\\maroonD","\\maroonE","\\purpleA","\\purpleB","\\purpleC","\\purpleD","\\purpleE","\\mintA","\\mintB","\\mintC","\\grayA","\\grayB","\\grayC","\\grayD","\\grayE","\\grayF","\\grayG","\\grayH","\\grayI","\\kaBlue","\\kaGreen"],{numArgs:1,allowedInText:true,greediness:3},function(e,t){var r=t[0];return{type:"color",color:"katex-"+e.funcName.slice(1),value:d(r)}});f(["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],{numArgs:0},function(e){return{type:"op",limits:false,symbol:false,body:e.funcName}});f(["\\det","\\gcd","\\inf","\\lim","\\liminf","\\limsup","\\max","\\min","\\Pr","\\sup"],{numArgs:0},function(e){return{type:"op",limits:true,symbol:false,body:e.funcName}});f(["\\int","\\iint","\\iiint","\\oint"],{numArgs:0},function(e){return{type:"op",limits:false,symbol:true,body:e.funcName}});f(["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint"],{numArgs:0},function(e){return{type:"op",limits:true,symbol:true,body:e.funcName}});f("\\mathop",{numArgs:1},function(e,t){var r=t[0];return{type:"op",limits:false,symbol:false,value:d(r)}});f(["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac"],{
numArgs:2,greediness:2},function(e,t){var r=t[0];var a=t[1];var i=void 0;var n=null;var l=null;var s="auto";switch(e.funcName){case"\\dfrac":case"\\frac":case"\\tfrac":i=true;break;case"\\\\atopfrac":i=false;break;case"\\dbinom":case"\\binom":case"\\tbinom":i=false;n="(";l=")";break;default:throw new Error("Unrecognized genfrac command")}switch(e.funcName){case"\\dfrac":case"\\dbinom":s="display";break;case"\\tfrac":case"\\tbinom":s="text";break}return{type:"genfrac",numer:r,denom:a,hasBarLine:i,leftDelim:n,rightDelim:l,size:s}});f(["\\llap","\\rlap"],{numArgs:1,allowedInText:true},function(e,t){var r=t[0];return{type:e.funcName.slice(1),body:r}});var m=function e(t,r){if(i.default.contains(v,t.value)){return t}else{throw new l.default("Invalid delimiter: '"+t.value+"' after '"+r.funcName+"'",t)}};f(["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],{numArgs:1},function(e,t){var r=m(t[0],e);return{type:"delimsizing",size:h[e.funcName].size,mclass:h[e.funcName].mclass,value:r.value}});f(["\\left","\\right"],{numArgs:1},function(e,t){var r=m(t[0],e);return{type:"leftright",value:r.value}});f("\\middle",{numArgs:1},function(e,t){var r=m(t[0],e);if(!e.parser.leftrightDepth){throw new l.default("\\middle without preceding \\left",r)}return{type:"middle",value:r.value}});f(["\\tiny","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],0,null);f(["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],0,null);f(["\\rm","\\sf","\\tt","\\bf","\\it"],0,null);f(["\\mathrm","\\mathit","\\mathbf","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],{numArgs:1,greediness:2},function(e,t){var r=t[0];var a=e.funcName;if(a in p){a=p[a]}return{type:"font",font:a.slice(1),body:r}});f(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],{numArgs:1},function(e,t){var r=t[0];var a=!i.default.contains(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot"],e.funcName);var n=!a||i.default.contains(["\\widehat","\\widetilde"],e.funcName);return{type:"accent",label:e.funcName,isStretchy:a,isShifty:n,value:d(r),base:r}});f(["\\overbrace","\\underbrace"],{numArgs:1},function(e,t){var r=t[0];return{type:"horizBrace",label:e.funcName,isOver:/^\\over/.test(e.funcName),base:r}});f(["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\undertilde"],{numArgs:1},function(e,t){var r=t[0];return{type:"accentUnder",label:e.funcName,value:d(r),body:r}});f(["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xLongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xLongequal","\\xtofrom"],{numArgs:1,numOptionalArgs:1},function(e,t){var r=t[0];var a=t[1];return{type:"xArrow",label:e.funcName,body:a,below:r}});f(["\\cancel","\\bcancel","\\xcancel","\\sout","\\fbox"],{numArgs:1},function(e,t){var r=t[0];return{type:"enclose",label:e.funcName,body:r}});f(["\\over","\\choose","\\atop"],{numArgs:0,infix:true},function(e){var t=void 0;switch(e.funcName){case"\\over":t="\\frac";break;case"\\choose":t="\\binom";break;case"\\atop":t="\\\\atopfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",replaceWith:t,token:e.token}});f(["\\\\","\\cr"],{numArgs:0,numOptionalArgs:1,argTypes:["size"]},function(e,t){var r=t[0];return{type:"cr",size:r}});f(["\\begin","\\end"],{numArgs:1,argTypes:["text"]},function(e,t){var r=t[0];if(r.type!=="ordgroup"){throw new l.default("Invalid environment name",r)}var a="";for(var i=0;i<r.value.length;++i){a+=r.value[i].value}return{type:"environment",name:a,nameGroup:r}})},{"./ParseError":29,"./ParseNode":30,"./utils":51}],44:[function(e,t,r){"use strict";function a(e,r){t.exports[e]=r}a("\\bgroup","{");a("\\egroup","}");a("\\begingroup","{");a("\\endgroup","}");a("\\mkern","\\kern");a("\\overset","\\mathop{#2}\\limits^{#1}");a("\\underset","\\mathop{#2}\\limits_{#1}");a("\\boxed","\\fbox{\\displaystyle{#1}}");a("\\iff","\\;\\Longleftrightarrow\\;");a("\\implies","\\;\\Longrightarrow\\;");a("\\impliedby","\\;\\Longleftarrow\\;");a("\\ordinarycolon",":");a("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");a("\\dblcolon","\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon");a("\\coloneqq","\\vcentcolon\\mathrel{\\mkern-1.2mu}=");a("\\Coloneqq","\\dblcolon\\mathrel{\\mkern-1.2mu}=");a("\\coloneq","\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}");a("\\Coloneq","\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}");a("\\eqqcolon","=\\mathrel{\\mkern-1.2mu}\\vcentcolon");a("\\Eqqcolon","=\\mathrel{\\mkern-1.2mu}\\dblcolon");a("\\eqcolon","\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon");a("\\Eqcolon","\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon");a("\\colonapprox","\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx");a("\\Colonapprox","\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx");a("\\colonsim","\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim");a("\\Colonsim","\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim");a("\\ratio","\\vcentcolon");a("\\coloncolon","\\dblcolon");a("\\colonequals","\\coloneqq");a("\\coloncolonequals","\\Coloneqq");a("\\equalscolon","\\eqqcolon");a("\\equalscoloncolon","\\Eqqcolon");a("\\colonminus","\\coloneq");a("\\coloncolonminus","\\Coloneq");a("\\minuscolon","\\eqcolon");a("\\minuscoloncolon","\\Eqcolon");a("\\coloncolonapprox","\\Colonapprox");a("\\coloncolonsim","\\Colonsim");a("\\simcolon","\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon");a("\\simcoloncolon","\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon");a("\\approxcolon","\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon");a("\\approxcoloncolon","\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon")},{}],45:[function(e,t,r){"use strict";var a=e("babel-runtime/helpers/classCallCheck");var i=u(a);var n=e("babel-runtime/helpers/createClass");var l=u(n);var s=e("./utils");var o=u(s);function u(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(t,r){(0,i.default)(this,e);this.type=t;this.attributes={};this.children=r||[]}(0,l.default)(e,[{key:"setAttribute",value:function e(t,r){this.attributes[t]=r}},{key:"toNode",value:function e(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,r)){t.setAttribute(r,this.attributes[r])}}for(var a=0;a<this.children.length;a++){t.appendChild(this.children[a].toNode())}return t}},{key:"toMarkup",value:function e(){var t="<"+this.type;for(var r in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,r)){t+=" "+r+'="';t+=o.default.escape(this.attributes[r]);t+='"'}}t+=">";for(var a=0;a<this.children.length;a++){t+=this.children[a].toMarkup()}t+="</"+this.type+">";return t}}]);return e}();var d=function(){function e(t){(0,i.default)(this,e);this.text=t}(0,l.default)(e,[{key:"toNode",value:function e(){return document.createTextNode(this.text)}},{key:"toMarkup",value:function e(){return o.default.escape(this.text)}}]);return e}();t.exports={MathNode:f,TextNode:d}},{"./utils":51,"babel-runtime/helpers/classCallCheck":4,"babel-runtime/helpers/createClass":5}],46:[function(e,t,r){"use strict";var a=e("./Parser");var i=n(a);function n(e){return e&&e.__esModule?e:{default:e}}var l=function e(t,r){if(!(typeof t==="string"||t instanceof String)){throw new TypeError("KaTeX can only parse string typed expression")}var a=new i.default(t,r);return a.parse()};t.exports=l},{"./Parser":31}],47:[function(e,t,r){"use strict";var a=e("./buildCommon");var i=e("./mathMLTree");var n=e("./utils");var l={widehat:"^",widetilde:"~",undertilde:"~",overleftarrow:"\u2190",underleftarrow:"\u2190",xleftarrow:"\u2190",overrightarrow:"\u2192",underrightarrow:"\u2192",xrightarrow:"\u2192",underbrace:"\u23b5",overbrace:"\u23de",overleftrightarrow:"\u2194",underleftrightarrow:"\u2194",xleftrightarrow:"\u2194",Overrightarrow:"\u21d2",xRightarrow:"\u21d2",overleftharpoon:"\u21bc",xleftharpoonup:"\u21bc",overrightharpoon:"\u21c0",xrightharpoonup:"\u21c0",xLeftarrow:"\u21d0",xLeftrightarrow:"\u21d4",xhookleftarrow:"\u21a9",xhookrightarrow:"\u21aa",xmapsto:"\u21a6",xrightharpoondown:"\u21c1",xleftharpoondown:"\u21bd",xrightleftharpoons:"\u21cc",xleftrightharpoons:"\u21cb",xtwoheadleftarrow:"\u219e",xtwoheadrightarrow:"\u21a0",xLongequal:"=",xtofrom:"\u21c4"};var s=function e(t){var r=new i.MathNode("mo",[new i.TextNode(l[t.substr(1)])]);r.setAttribute("stretchy","true");return r};var o={overleftarrow:[.522,0,"leftarrow"],underleftarrow:[.522,0,"leftarrow"],xleftarrow:[.261,.261,"leftarrow"],overrightarrow:[.522,0,"rightarrow"],underrightarrow:[.522,0,"rightarrow"],xrightarrow:[.261,.261,"rightarrow"],overbrace:[.548,0,"overbrace"],underbrace:[.548,0,"underbrace"],overleftrightarrow:[.522,0,"leftrightarrow"],underleftrightarrow:[.522,0,"leftrightarrow"],xleftrightarrow:[.261,.261,"leftrightarrow"],Overrightarrow:[.56,0,"doublerightarrow"],xLeftarrow:[.28,.28,"doubleleftarrow"],xRightarrow:[.28,.28,"doublerightarrow"],xLeftrightarrow:[.28,.28,"doubleleftrightarrow"],overleftharpoon:[.522,0,"leftharpoon"],overrightharpoon:[.522,0,"rightharpoon"],xleftharpoonup:[.261,.261,"leftharpoon"],xrightharpoonup:[.261,.261,"rightharpoon"],xhookleftarrow:[.261,.261,"hookleftarrow"],xhookrightarrow:[.261,.261,"hookrightarrow"],overlinesegment:[.414,0,"linesegment"],underlinesegment:[.414,0,"linesegment"],xmapsto:[.261,.261,"mapsto"],xrightharpoondown:[.261,.261,"rightharpoondown"],xleftharpoondown:[.261,.261,"leftharpoondown"],xrightleftharpoons:[.358,.358,"rightleftharpoons"],xleftrightharpoons:[.358,.358,"leftrightharpoons"],overgroup:[.342,0,"overgroup"],undergroup:[.342,0,"undergroup"],xtwoheadleftarrow:[.167,.167,"twoheadleftarrow"],xtwoheadrightarrow:[.167,.167,"twoheadrightarrow"],xLongequal:[.167,.167,"longequal"],xtofrom:[.264,.264,"tofrom"]};var u=function e(t,r){var i=t.value.label.substr(1);var l=0;var s=0;var u=["stretchy"];var f="";if(n.contains(["widehat","widetilde","undertilde"],i)){var d=t.value.value.length;if(d>5){l=.312;f=(i==="widehat"?"widehat":"tilde")+"4"}else{var c=[1,1,2,2,3,3][d];if(i==="widehat"){l=[0,.24,.3,.3,.36,.36][d];f="widehat"+c}else{l=[0,.26,.3,.3,.34,.34][d];f="tilde"+c}}}else{var h=o[i];l=h[0];s=h[1];f=h[2];if(i.substr(0,1)==="x"){u.push("x-arrow")}}var v=void 0;if(r.color){u.push(f);u.push("mask");u.push(f+"-mask");v=a.makeSpan(u,[],r);v.style.backgroundColor=r.getColor()}else{u.push(f);v=a.makeSpan(u,[],r)}v.height=l;v.depth=s;v.maxFontSize=1;return v};var f=function e(t,r,i,n,l){var s=a.makeSpan(["stretchy",i],[],l);if(l.color){if(i==="fbox"){s.style.borderColor=l.getColor()}else{s.classes[2]=i+"-mask";s.style.backgroundColor=l.getColor()}}s.height=t.height+t.depth+2*n;s.style.height=s.height+"em";if(/cancel/.test(i)&&r){s.maxFontSize=1.2}else{s.maxFontSize=1}return s};t.exports={encloseSpan:f,mathMLnode:s,svgSpan:u}},{"./buildCommon":34,"./mathMLTree":45,"./utils":51}],48:[function(e,t,r){"use strict";t.exports={math:{},text:{}};function a(e,r,a,i,n,l){t.exports[e][n]={font:r,group:a,replace:i};if(l){t.exports[e][i]=t.exports[e][n]}}var i="math";var n="text";var l="main";var s="ams";var o="accent";var u="bin";var f="close";var d="inner";var c="mathord";var h="op";var v="open";var p="punct";var m="rel";var g="spacing";var y="textord";a(i,l,m,"\u2261","\\equiv");a(i,l,m,"\u227a","\\prec");a(i,l,m,"\u227b","\\succ");a(i,l,m,"\u223c","\\sim");a(i,l,m,"\u22a5","\\perp");a(i,l,m,"\u2aaf","\\preceq");a(i,l,m,"\u2ab0","\\succeq");a(i,l,m,"\u2243","\\simeq");a(i,l,m,"\u2223","\\mid");a(i,l,m,"\u226a","\\ll");a(i,l,m,"\u226b","\\gg");a(i,l,m,"\u224d","\\asymp");a(i,l,m,"\u2225","\\parallel");a(i,l,m,"\u22c8","\\bowtie");a(i,l,m,"\u2323","\\smile");a(i,l,m,"\u2291","\\sqsubseteq");a(i,l,m,"\u2292","\\sqsupseteq");a(i,l,m,"\u2250","\\doteq");a(i,l,m,"\u2322","\\frown");a(i,l,m,"\u220b","\\ni");a(i,l,m,"\u221d","\\propto");a(i,l,m,"\u22a2","\\vdash");a(i,l,m,"\u22a3","\\dashv");a(i,l,m,"\u220b","\\owns");a(i,l,p,".","\\ldotp");a(i,l,p,"\u22c5","\\cdotp");a(i,l,y,"#","\\#");a(n,l,y,"#","\\#");a(i,l,y,"&","\\&");a(n,l,y,"&","\\&");a(i,l,y,"\u2135","\\aleph");a(i,l,y,"\u2200","\\forall");a(i,l,y,"\u210f","\\hbar");a(i,l,y,"\u2203","\\exists");a(i,l,y,"\u2207","\\nabla");a(i,l,y,"\u266d","\\flat");a(i,l,y,"\u2113","\\ell");a(i,l,y,"\u266e","\\natural");a(i,l,y,"\u2663","\\clubsuit");a(i,l,y,"\u2118","\\wp");a(i,l,y,"\u266f","\\sharp");a(i,l,y,"\u2662","\\diamondsuit");a(i,l,y,"\u211c","\\Re");a(i,l,y,"\u2661","\\heartsuit");a(i,l,y,"\u2111","\\Im");a(i,l,y,"\u2660","\\spadesuit");a(i,l,y,"\u2020","\\dag");a(n,l,y,"\u2020","\\dag");a(n,l,y,"\u2020","\\textdagger");a(i,l,y,"\u2021","\\ddag");a(n,l,y,"\u2021","\\ddag");a(n,l,y,"\u2020","\\textdaggerdbl");a(i,l,f,"\u23b1","\\rmoustache");a(i,l,v,"\u23b0","\\lmoustache");a(i,l,f,"\u27ef","\\rgroup");a(i,l,v,"\u27ee","\\lgroup");a(i,l,u,"\u2213","\\mp");a(i,l,u,"\u2296","\\ominus");a(i,l,u,"\u228e","\\uplus");a(i,l,u,"\u2293","\\sqcap");a(i,l,u,"\u2217","\\ast");a(i,l,u,"\u2294","\\sqcup");a(i,l,u,"\u25ef","\\bigcirc");a(i,l,u,"\u2219","\\bullet");a(i,l,u,"\u2021","\\ddagger");a(i,l,u,"\u2240","\\wr");a(i,l,u,"\u2a3f","\\amalg");a(i,l,m,"\u27f5","\\longleftarrow");a(i,l,m,"\u21d0","\\Leftarrow");a(i,l,m,"\u27f8","\\Longleftarrow");a(i,l,m,"\u27f6","\\longrightarrow");a(i,l,m,"\u21d2","\\Rightarrow");a(i,l,m,"\u27f9","\\Longrightarrow");a(i,l,m,"\u2194","\\leftrightarrow");a(i,l,m,"\u27f7","\\longleftrightarrow");a(i,l,m,"\u21d4","\\Leftrightarrow");a(i,l,m,"\u27fa","\\Longleftrightarrow");a(i,l,m,"\u21a6","\\mapsto");a(i,l,m,"\u27fc","\\longmapsto");a(i,l,m,"\u2197","\\nearrow");a(i,l,m,"\u21a9","\\hookleftarrow");a(i,l,m,"\u21aa","\\hookrightarrow");a(i,l,m,"\u2198","\\searrow");a(i,l,m,"\u21bc","\\leftharpoonup");a(i,l,m,"\u21c0","\\rightharpoonup");a(i,l,m,"\u2199","\\swarrow");a(i,l,m,"\u21bd","\\leftharpoondown");a(i,l,m,"\u21c1","\\rightharpoondown");a(i,l,m,"\u2196","\\nwarrow");a(i,l,m,"\u21cc","\\rightleftharpoons");a(i,s,m,"\u226e","\\nless");a(i,s,m,"\ue010","\\nleqslant");a(i,s,m,"\ue011","\\nleqq");a(i,s,m,"\u2a87","\\lneq");a(i,s,m,"\u2268","\\lneqq");a(i,s,m,"\ue00c","\\lvertneqq");a(i,s,m,"\u22e6","\\lnsim");a(i,s,m,"\u2a89","\\lnapprox");a(i,s,m,"\u2280","\\nprec");a(i,s,m,"\u22e0","\\npreceq");a(i,s,m,"\u22e8","\\precnsim");a(i,s,m,"\u2ab9","\\precnapprox");a(i,s,m,"\u2241","\\nsim");a(i,s,m,"\ue006","\\nshortmid");a(i,s,m,"\u2224","\\nmid");a(i,s,m,"\u22ac","\\nvdash");a(i,s,m,"\u22ad","\\nvDash");a(i,s,m,"\u22ea","\\ntriangleleft");a(i,s,m,"\u22ec","\\ntrianglelefteq");a(i,s,m,"\u228a","\\subsetneq");a(i,s,m,"\ue01a","\\varsubsetneq");a(i,s,m,"\u2acb","\\subsetneqq");a(i,s,m,"\ue017","\\varsubsetneqq");a(i,s,m,"\u226f","\\ngtr");a(i,s,m,"\ue00f","\\ngeqslant");a(i,s,m,"\ue00e","\\ngeqq");a(i,s,m,"\u2a88","\\gneq");a(i,s,m,"\u2269","\\gneqq");a(i,s,m,"\ue00d","\\gvertneqq");a(i,s,m,"\u22e7","\\gnsim");a(i,s,m,"\u2a8a","\\gnapprox");a(i,s,m,"\u2281","\\nsucc");a(i,s,m,"\u22e1","\\nsucceq");a(i,s,m,"\u22e9","\\succnsim");a(i,s,m,"\u2aba","\\succnapprox");a(i,s,m,"\u2246","\\ncong");a(i,s,m,"\ue007","\\nshortparallel");a(i,s,m,"\u2226","\\nparallel");a(i,s,m,"\u22af","\\nVDash");a(i,s,m,"\u22eb","\\ntriangleright");a(i,s,m,"\u22ed","\\ntrianglerighteq");a(i,s,m,"\ue018","\\nsupseteqq");a(i,s,m,"\u228b","\\supsetneq");a(i,s,m,"\ue01b","\\varsupsetneq");a(i,s,m,"\u2acc","\\supsetneqq");a(i,s,m,"\ue019","\\varsupsetneqq");a(i,s,m,"\u22ae","\\nVdash");a(i,s,m,"\u2ab5","\\precneqq");a(i,s,m,"\u2ab6","\\succneqq");a(i,s,m,"\ue016","\\nsubseteqq");a(i,s,u,"\u22b4","\\unlhd");a(i,s,u,"\u22b5","\\unrhd");a(i,s,m,"\u219a","\\nleftarrow");a(i,s,m,"\u219b","\\nrightarrow");a(i,s,m,"\u21cd","\\nLeftarrow");a(i,s,m,"\u21cf","\\nRightarrow");a(i,s,m,"\u21ae","\\nleftrightarrow");a(i,s,m,"\u21ce","\\nLeftrightarrow");a(i,s,m,"\u25b3","\\vartriangle");a(i,s,y,"\u210f","\\hslash");a(i,s,y,"\u25bd","\\triangledown");a(i,s,y,"\u25ca","\\lozenge");a(i,s,y,"\u24c8","\\circledS");a(i,s,y,"\xae","\\circledR");a(n,s,y,"\xae","\\circledR");a(i,s,y,"\u2221","\\measuredangle");a(i,s,y,"\u2204","\\nexists");a(i,s,y,"\u2127","\\mho");a(i,s,y,"\u2132","\\Finv");a(i,s,y,"\u2141","\\Game");a(i,s,y,"k","\\Bbbk");a(i,s,y,"\u2035","\\backprime");a(i,s,y,"\u25b2","\\blacktriangle");a(i,s,y,"\u25bc","\\blacktriangledown");a(i,s,y,"\u25a0","\\blacksquare");a(i,s,y,"\u29eb","\\blacklozenge");a(i,s,y,"\u2605","\\bigstar");a(i,s,y,"\u2222","\\sphericalangle");a(i,s,y,"\u2201","\\complement");a(i,s,y,"\xf0","\\eth");a(i,s,y,"\u2571","\\diagup");a(i,s,y,"\u2572","\\diagdown");a(i,s,y,"\u25a1","\\square");a(i,s,y,"\u25a1","\\Box");a(i,s,y,"\u25ca","\\Diamond");a(i,s,y,"\xa5","\\yen");a(i,s,y,"\u2713","\\checkmark");a(n,s,y,"\u2713","\\checkmark");a(i,s,y,"\u2136","\\beth");a(i,s,y,"\u2138","\\daleth");a(i,s,y,"\u2137","\\gimel");a(i,s,y,"\u03dd","\\digamma");a(i,s,y,"\u03f0","\\varkappa");a(i,s,v,"\u250c","\\ulcorner");a(i,s,f,"\u2510","\\urcorner");a(i,s,v,"\u2514","\\llcorner");a(i,s,f,"\u2518","\\lrcorner");a(i,s,m,"\u2266","\\leqq");a(i,s,m,"\u2a7d","\\leqslant");a(i,s,m,"\u2a95","\\eqslantless");a(i,s,m,"\u2272","\\lesssim");a(i,s,m,"\u2a85","\\lessapprox");a(i,s,m,"\u224a","\\approxeq");a(i,s,u,"\u22d6","\\lessdot");a(i,s,m,"\u22d8","\\lll");a(i,s,m,"\u2276","\\lessgtr");a(i,s,m,"\u22da","\\lesseqgtr");a(i,s,m,"\u2a8b","\\lesseqqgtr");a(i,s,m,"\u2251","\\doteqdot");a(i,s,m,"\u2253","\\risingdotseq");a(i,s,m,"\u2252","\\fallingdotseq");a(i,s,m,"\u223d","\\backsim");a(i,s,m,"\u22cd","\\backsimeq");a(i,s,m,"\u2ac5","\\subseteqq");a(i,s,m,"\u22d0","\\Subset");a(i,s,m,"\u228f","\\sqsubset");a(i,s,m,"\u227c","\\preccurlyeq");a(i,s,m,"\u22de","\\curlyeqprec");a(i,s,m,"\u227e","\\precsim");a(i,s,m,"\u2ab7","\\precapprox");a(i,s,m,"\u22b2","\\vartriangleleft");a(i,s,m,"\u22b4","\\trianglelefteq");a(i,s,m,"\u22a8","\\vDash");a(i,s,m,"\u22aa","\\Vvdash");a(i,s,m,"\u2323","\\smallsmile");a(i,s,m,"\u2322","\\smallfrown");a(i,s,m,"\u224f","\\bumpeq");a(i,s,m,"\u224e","\\Bumpeq");a(i,s,m,"\u2267","\\geqq");a(i,s,m,"\u2a7e","\\geqslant");a(i,s,m,"\u2a96","\\eqslantgtr");a(i,s,m,"\u2273","\\gtrsim");a(i,s,m,"\u2a86","\\gtrapprox");a(i,s,u,"\u22d7","\\gtrdot");a(i,s,m,"\u22d9","\\ggg");a(i,s,m,"\u2277","\\gtrless");a(i,s,m,"\u22db","\\gtreqless");a(i,s,m,"\u2a8c","\\gtreqqless");a(i,s,m,"\u2256","\\eqcirc");a(i,s,m,"\u2257","\\circeq");a(i,s,m,"\u225c","\\triangleq");a(i,s,m,"\u223c","\\thicksim");a(i,s,m,"\u2248","\\thickapprox");a(i,s,m,"\u2ac6","\\supseteqq");a(i,s,m,"\u22d1","\\Supset");a(i,s,m,"\u2290","\\sqsupset");a(i,s,m,"\u227d","\\succcurlyeq");a(i,s,m,"\u22df","\\curlyeqsucc");a(i,s,m,"\u227f","\\succsim");a(i,s,m,"\u2ab8","\\succapprox");a(i,s,m,"\u22b3","\\vartriangleright");a(i,s,m,"\u22b5","\\trianglerighteq");a(i,s,m,"\u22a9","\\Vdash");a(i,s,m,"\u2223","\\shortmid");a(i,s,m,"\u2225","\\shortparallel");a(i,s,m,"\u226c","\\between");a(i,s,m,"\u22d4","\\pitchfork");a(i,s,m,"\u221d","\\varpropto");a(i,s,m,"\u25c0","\\blacktriangleleft");a(i,s,m,"\u2234","\\therefore");a(i,s,m,"\u220d","\\backepsilon");a(i,s,m,"\u25b6","\\blacktriangleright");a(i,s,m,"\u2235","\\because");a(i,s,m,"\u22d8","\\llless");a(i,s,m,"\u22d9","\\gggtr");a(i,s,u,"\u22b2","\\lhd");a(i,s,u,"\u22b3","\\rhd");a(i,s,m,"\u2242","\\eqsim");a(i,l,m,"\u22c8","\\Join");a(i,s,m,"\u2251","\\Doteq");a(i,s,u,"\u2214","\\dotplus");a(i,s,u,"\u2216","\\smallsetminus");a(i,s,u,"\u22d2","\\Cap");a(i,s,u,"\u22d3","\\Cup");a(i,s,u,"\u2a5e","\\doublebarwedge");a(i,s,u,"\u229f","\\boxminus");a(i,s,u,"\u229e","\\boxplus");a(i,s,u,"\u22c7","\\divideontimes");a(i,s,u,"\u22c9","\\ltimes");a(i,s,u,"\u22ca","\\rtimes");a(i,s,u,"\u22cb","\\leftthreetimes");a(i,s,u,"\u22cc","\\rightthreetimes");a(i,s,u,"\u22cf","\\curlywedge");a(i,s,u,"\u22ce","\\curlyvee");a(i,s,u,"\u229d","\\circleddash");a(i,s,u,"\u229b","\\circledast");a(i,s,u,"\u22c5","\\centerdot");a(i,s,u,"\u22ba","\\intercal");a(i,s,u,"\u22d2","\\doublecap");a(i,s,u,"\u22d3","\\doublecup");a(i,s,u,"\u22a0","\\boxtimes");a(i,s,m,"\u21e2","\\dashrightarrow");a(i,s,m,"\u21e0","\\dashleftarrow");a(i,s,m,"\u21c7","\\leftleftarrows");a(i,s,m,"\u21c6","\\leftrightarrows");a(i,s,m,"\u21da","\\Lleftarrow");a(i,s,m,"\u219e","\\twoheadleftarrow");a(i,s,m,"\u21a2","\\leftarrowtail");a(i,s,m,"\u21ab","\\looparrowleft");a(i,s,m,"\u21cb","\\leftrightharpoons");a(i,s,m,"\u21b6","\\curvearrowleft");a(i,s,m,"\u21ba","\\circlearrowleft");a(i,s,m,"\u21b0","\\Lsh");a(i,s,m,"\u21c8","\\upuparrows");a(i,s,m,"\u21bf","\\upharpoonleft");a(i,s,m,"\u21c3","\\downharpoonleft");a(i,s,m,"\u22b8","\\multimap");a(i,s,m,"\u21ad","\\leftrightsquigarrow");a(i,s,m,"\u21c9","\\rightrightarrows");a(i,s,m,"\u21c4","\\rightleftarrows");a(i,s,m,"\u21a0","\\twoheadrightarrow");a(i,s,m,"\u21a3","\\rightarrowtail");a(i,s,m,"\u21ac","\\looparrowright");a(i,s,m,"\u21b7","\\curvearrowright");a(i,s,m,"\u21bb","\\circlearrowright");a(i,s,m,"\u21b1","\\Rsh");a(i,s,m,"\u21ca","\\downdownarrows");a(i,s,m,"\u21be","\\upharpoonright");a(i,s,m,"\u21c2","\\downharpoonright");a(i,s,m,"\u21dd","\\rightsquigarrow");a(i,s,m,"\u21dd","\\leadsto");a(i,s,m,"\u21db","\\Rrightarrow");a(i,s,m,"\u21be","\\restriction");a(i,l,y,"\u2018","`");a(i,l,y,"$","\\$");a(n,l,y,"$","\\$");a(n,l,y,"$","\\textdollar");a(i,l,y,"%","\\%");a(n,l,y,"%","\\%");a(i,l,y,"_","\\_");a(n,l,y,"_","\\_");a(n,l,y,"_","\\textunderscore");a(i,l,y,"\u2220","\\angle");a(i,l,y,"\u221e","\\infty");a(i,l,y,"\u2032","\\prime");a(i,l,y,"\u25b3","\\triangle");a(i,l,y,"\u0393","\\Gamma",true);a(i,l,y,"\u0394","\\Delta",true);a(i,l,y,"\u0398","\\Theta",true);a(i,l,y,"\u039b","\\Lambda",true);a(i,l,y,"\u039e","\\Xi",true);a(i,l,y,"\u03a0","\\Pi",true);a(i,l,y,"\u03a3","\\Sigma",true);a(i,l,y,"\u03a5","\\Upsilon",true);a(i,l,y,"\u03a6","\\Phi",true);a(i,l,y,"\u03a8","\\Psi",true);a(i,l,y,"\u03a9","\\Omega",true);a(i,l,y,"\xac","\\neg");a(i,l,y,"\xac","\\lnot");a(i,l,y,"\u22a4","\\top");a(i,l,y,"\u22a5","\\bot");a(i,l,y,"\u2205","\\emptyset");a(i,s,y,"\u2205","\\varnothing");a(i,l,c,"\u03b1","\\alpha",true);a(i,l,c,"\u03b2","\\beta",true);a(i,l,c,"\u03b3","\\gamma",true);a(i,l,c,"\u03b4","\\delta",true);a(i,l,c,"\u03f5","\\epsilon",true);a(i,l,c,"\u03b6","\\zeta",true);a(i,l,c,"\u03b7","\\eta",true);a(i,l,c,"\u03b8","\\theta",true);a(i,l,c,"\u03b9","\\iota",true);a(i,l,c,"\u03ba","\\kappa",true);a(i,l,c,"\u03bb","\\lambda",true);a(i,l,c,"\u03bc","\\mu",true);a(i,l,c,"\u03bd","\\nu",true);a(i,l,c,"\u03be","\\xi",true);a(i,l,c,"\u03bf","\\omicron",true);a(i,l,c,"\u03c0","\\pi",true);a(i,l,c,"\u03c1","\\rho",true);a(i,l,c,"\u03c3","\\sigma",true);a(i,l,c,"\u03c4","\\tau",true);a(i,l,c,"\u03c5","\\upsilon",true);a(i,l,c,"\u03d5","\\phi",true);a(i,l,c,"\u03c7","\\chi",true);a(i,l,c,"\u03c8","\\psi",true);a(i,l,c,"\u03c9","\\omega",true);a(i,l,c,"\u03b5","\\varepsilon",true);a(i,l,c,"\u03d1","\\vartheta",true);a(i,l,c,"\u03d6","\\varpi",true);a(i,l,c,"\u03f1","\\varrho",true);a(i,l,c,"\u03c2","\\varsigma",true);a(i,l,c,"\u03c6","\\varphi",true);a(i,l,u,"\u2217","*");a(i,l,u,"+","+");a(i,l,u,"\u2212","-");a(i,l,u,"\u22c5","\\cdot");a(i,l,u,"\u2218","\\circ");a(i,l,u,"\xf7","\\div");a(i,l,u,"\xb1","\\pm");a(i,l,u,"\xd7","\\times");a(i,l,u,"\u2229","\\cap");a(i,l,u,"\u222a","\\cup");a(i,l,u,"\u2216","\\setminus");a(i,l,u,"\u2227","\\land");a(i,l,u,"\u2228","\\lor");a(i,l,u,"\u2227","\\wedge");a(i,l,u,"\u2228","\\vee");a(i,l,y,"\u221a","\\surd");a(i,l,v,"(","(");a(i,l,v,"[","[");a(i,l,v,"\u27e8","\\langle");a(i,l,v,"\u2223","\\lvert");a(i,l,v,"\u2225","\\lVert");a(i,l,f,")",")");a(i,l,f,"]","]");a(i,l,f,"?","?");a(i,l,f,"!","!");a(i,l,f,"\u27e9","\\rangle");a(i,l,f,"\u2223","\\rvert");a(i,l,f,"\u2225","\\rVert");a(i,l,m,"=","=");a(i,l,m,"<","<");a(i,l,m,">",">");a(i,l,m,":",":");a(i,l,m,"\u2248","\\approx");a(i,l,m,"\u2245","\\cong");a(i,l,m,"\u2265","\\ge");a(i,l,m,"\u2265","\\geq");a(i,l,m,"\u2190","\\gets");a(i,l,m,">","\\gt");a(i,l,m,"\u2208","\\in");a(i,l,m,"\u2209","\\notin");a(i,l,m,"\u2282","\\subset");a(i,l,m,"\u2283","\\supset");a(i,l,m,"\u2286","\\subseteq");a(i,l,m,"\u2287","\\supseteq");a(i,s,m,"\u2288","\\nsubseteq");a(i,s,m,"\u2289","\\nsupseteq");a(i,l,m,"\u22a8","\\models");a(i,l,m,"\u2190","\\leftarrow");a(i,l,m,"\u2264","\\le");a(i,l,m,"\u2264","\\leq");a(i,l,m,"<","\\lt");a(i,l,m,"\u2260","\\ne");a(i,l,m,"\u2260","\\neq");a(i,l,m,"\u2192","\\rightarrow");a(i,l,m,"\u2192","\\to");a(i,s,m,"\u2271","\\ngeq");a(i,s,m,"\u2270","\\nleq");a(i,l,g,null,"\\!");a(i,l,g,"\xa0","\\ ");a(i,l,g,"\xa0","~");a(i,l,g,null,"\\,");a(i,l,g,null,"\\:");a(i,l,g,null,"\\;");a(i,l,g,null,"\\enspace");a(i,l,g,null,"\\qquad");a(i,l,g,null,"\\quad");a(i,l,g,"\xa0","\\space");a(i,l,p,",",",");a(i,l,p,";",";");a(i,l,p,":","\\colon");a(i,s,u,"\u22bc","\\barwedge");a(i,s,u,"\u22bb","\\veebar");a(i,l,u,"\u2299","\\odot");a(i,l,u,"\u2295","\\oplus");a(i,l,u,"\u2297","\\otimes");a(i,l,y,"\u2202","\\partial");a(i,l,u,"\u2298","\\oslash");a(i,s,u,"\u229a","\\circledcirc");a(i,s,u,"\u22a1","\\boxdot");a(i,l,u,"\u25b3","\\bigtriangleup");a(i,l,u,"\u25bd","\\bigtriangledown");a(i,l,u,"\u2020","\\dagger");a(i,l,u,"\u22c4","\\diamond");a(i,l,u,"\u22c6","\\star");a(i,l,u,"\u25c3","\\triangleleft");a(i,l,u,"\u25b9","\\triangleright");a(i,l,v,"{","\\{");a(n,l,y,"{","\\{");a(n,l,y,"{","\\textbraceleft");a(i,l,f,"}","\\}");a(n,l,y,"}","\\}");a(n,l,y,"}","\\textbraceright");a(i,l,v,"{","\\lbrace");a(i,l,f,"}","\\rbrace");a(i,l,v,"[","\\lbrack");a(i,l,f,"]","\\rbrack");a(n,l,y,"<","\\textless");a(n,l,y,">","\\textgreater");a(i,l,v,"\u230a","\\lfloor");a(i,l,f,"\u230b","\\rfloor");a(i,l,v,"\u2308","\\lceil");a(i,l,f,"\u2309","\\rceil");a(i,l,y,"\\","\\backslash");a(i,l,y,"\u2223","|");a(i,l,y,"\u2223","\\vert");a(n,l,y,"|","\\textbar");a(i,l,y,"\u2225","\\|");a(i,l,y,"\u2225","\\Vert");a(n,l,y,"\u2225","\\textbardbl");a(i,l,m,"\u2191","\\uparrow");a(i,l,m,"\u21d1","\\Uparrow");a(i,l,m,"\u2193","\\downarrow");a(i,l,m,"\u21d3","\\Downarrow");a(i,l,m,"\u2195","\\updownarrow");a(i,l,m,"\u21d5","\\Updownarrow");a(i,l,h,"\u2210","\\coprod");a(i,l,h,"\u22c1","\\bigvee");a(i,l,h,"\u22c0","\\bigwedge");a(i,l,h,"\u2a04","\\biguplus");a(i,l,h,"\u22c2","\\bigcap");a(i,l,h,"\u22c3","\\bigcup");a(i,l,h,"\u222b","\\int");a(i,l,h,"\u222b","\\intop");a(i,l,h,"\u222c","\\iint");a(i,l,h,"\u222d","\\iiint");a(i,l,h,"\u220f","\\prod");a(i,l,h,"\u2211","\\sum");a(i,l,h,"\u2a02","\\bigotimes");a(i,l,h,"\u2a01","\\bigoplus");a(i,l,h,"\u2a00","\\bigodot");a(i,l,h,"\u222e","\\oint");a(i,l,h,"\u2a06","\\bigsqcup");a(i,l,h,"\u222b","\\smallint");a(n,l,d,"\u2026","\\textellipsis");a(i,l,d,"\u2026","\\mathellipsis");a(n,l,d,"\u2026","\\ldots");a(i,l,d,"\u2026","\\ldots");a(i,l,d,"\u22ef","\\cdots");a(i,l,d,"\u22f1","\\ddots");a(i,l,y,"\u22ee","\\vdots");a(i,l,o,"\xb4","\\acute");a(i,l,o,"`","\\grave");a(i,l,o,"\xa8","\\ddot");a(i,l,o,"~","\\tilde");a(i,l,o,"\xaf","\\bar");a(i,l,o,"\u02d8","\\breve");a(i,l,o,"\u02c7","\\check");a(i,l,o,"^","\\hat");a(i,l,o,"\u20d7","\\vec");a(i,l,o,"\u02d9","\\dot");a(i,l,c,"\u0131","\\imath");a(i,l,c,"\u0237","\\jmath");a(n,l,y,"\u2013","--");a(n,l,y,"\u2013","\\textendash");a(n,l,y,"\u2014","---");a(n,l,y,"\u2014","\\textemdash");a(n,l,y,"\u2018","`");a(n,l,y,"\u2018","\\textquoteleft");a(n,l,y,"\u2019","'");a(n,l,y,"\u2019","\\textquoteright");a(n,l,y,"\u201c","``");a(n,l,y,"\u201c","\\textquotedblleft");a(n,l,y,"\u201d","''");a(n,l,y,"\u201d","\\textquotedblright");a(i,l,y,"\xb0","\\degree");a(n,l,y,"\xb0","\\degree");a(i,l,c,"\xa3","\\pounds");a(i,l,c,"\xa3","\\mathsterling");a(n,l,c,"\xa3","\\pounds");a(n,l,c,"\xa3","\\textsterling");a(i,s,y,"\u2720","\\maltese");a(n,s,y,"\u2720","\\maltese");a(n,l,g,"\xa0","\\ ");a(n,l,g,"\xa0"," ");a(n,l,g,"\xa0","~");var b='0123456789/@."';for(var x=0;x<b.length;x++){var w=b.charAt(x);a(i,l,y,w,w)}var k='0123456789!@*()-=+[]<>|";:?/.,';for(var S=0;S<k.length;S++){var M=k.charAt(S);a(n,l,y,M,M)}var z="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(var C=0;C<z.length;C++){var T=z.charAt(C);a(i,l,c,T,T);a(n,l,y,T,T)}for(var N=192;N<=214;N++){var A=String.fromCharCode(N);a(n,l,y,A,A)}for(var q=216;q<=246;q++){var _=String.fromCharCode(q);a(n,l,y,_,_)}for(var E=248;E<=255;E++){var O=String.fromCharCode(E);a(n,l,y,O,O)}for(var R=1040;R<=1103;R++){var P=String.fromCharCode(R);a(n,l,y,P,P)}a(n,l,y,"\u2013","\u2013");a(n,l,y,"\u2014","\u2014");a(n,l,y,"\u2018","\u2018");a(n,l,y,"\u2019","\u2019");a(n,l,y,"\u201c","\u201c");a(n,l,y,"\u201d","\u201d")},{}],49:[function(e,t,r){"use strict";var a=/[\uAC00-\uD7AF]/;var i=/[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4E00-\u9FAF]|[\uAC00-\uD7AF]/;t.exports={cjkRegex:i,hangulRegex:a}},{}],50:[function(e,t,r){"use strict";var a=e("./ParseError");var i=n(a);function n(e){return e&&e.__esModule?e:{default:e}}var l={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800};var s={ex:true,em:true,mu:true};var o=function e(t){if(t.unit){t=t.unit}return t in l||t in s||t==="ex"};var u=function e(t,r){var a=void 0;if(t.unit in l){a=l[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier}else if(t.unit==="mu"){a=r.fontMetrics().cssEmPerMu}else{var n=void 0;if(r.style.isTight()){n=r.havingStyle(r.style.text())}else{n=r}if(t.unit==="ex"){a=n.fontMetrics().xHeight}else if(t.unit==="em"){a=n.fontMetrics().quad}else{throw new i.default("Invalid unit: '"+t.unit+"'")}if(n!==r){a*=n.sizeMultiplier/r.sizeMultiplier}}return t.number*a};t.exports={validUnit:o,calculateSize:u}},{"./ParseError":29}],51:[function(e,t,r){"use strict";var a=Array.prototype.indexOf;var i=function e(t,r){if(t==null){return-1}if(a&&t.indexOf===a){return t.indexOf(r)}var i=t.length;for(var n=0;n<i;n++){if(t[n]===r){return n}}return-1};var n=function e(t,r){return i(t,r)!==-1};var l=function e(t,r){return t===undefined?r:t};var s=/([A-Z])/g;var o=function e(t){return t.replace(s,"-$1").toLowerCase()};var u={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"};var f=/[&><"']/g;function d(e){return u[e]}function c(e){return(""+e).replace(f,d)}var h=void 0;if(typeof document!=="undefined"){var v=document.createElement("span");if("textContent"in v){h=function e(t,r){t.textContent=r}}else{h=function e(t,r){t.innerText=r}}}function p(e){h(e,"")}t.exports={contains:n,deflt:l,escape:c,hyphenate:o,indexOf:i,setTextContent:h,clearNode:p}},{}]},{},[1])(1)});

/*!
Deck JS - deck.katex.js
Copyright (c) 2015-2017 Rémi Emonet,
Formatting "latex" maths using the katex library (lighter than mathjax)
*/

/*
This module provides a support for latex equation syntax.
http://khan.github.io/KaTeX/

current version twitwi/0.8.2-fordeckjs
*/

(function($, deck, undefined) {
    var $d = $(document);
    var may = function(f) {return f ? f : function() {}};
    
    $d.bind('deck.init', function() {
        var container = $[deck]('getContainer');
        $('.latex', container).each(function() {
            this.classList.remove('latex');
            var v = $(this).text();
            v = "\\displaystyle "+v+"";
            katex.render(v, this, {breakOnUnsupportedCmds: false});
        });
    });
})(jQuery, 'deck');

/*!
Deck JS - deck.clone
Copyright (c) 2011-2016 Rémi Emonet, original version from Rémi BARRAQUAND
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module provides a support for cloning the deck and enabling a presenter view.
It also provides the behavior that copies the current "notes" to a "notes-target", to be used in the presenter view.
*/

(function($, deck, undefined) {
    var $d = $(document);
    var clones = new Array();
        
    $.extend(true, $[deck].defaults, {	
        selectors: {
            clonepointer: '.clonepointer',
            cloneNotes: '.notes',
            cloneNotesTarget: '.notes-target',
            cloneSync: '.sync'
        },
        classes: {
            isClone: 'is-clone',
            hasClones: 'has-clones',
            pointerClick: 'pointer-click',
            cloneSyncReadPrefix: 'clone-',
            cloneSyncWritePrefix: 'write-'
        },
        snippets: {
            clone: true
        },
        keys: {
            clone: 67 // c
        },
        fitFollowsClone: true
    });

    var hadClones = false;
    var cleanClones = function() {
        var opts = $[deck]('getOptions');
        // remove closed windows
        $.each(clones, function(index, clone) {
            if (clone.closed()) {
                clones.splice(index, 1); // remove element "index"
            }
        });
        // tag/untag the current container depending on the presence of clones
        if (clones.length > 0) {
            $("body").addClass(opts.classes.hasClones);
            if (opts.fitFollowsClone && !hadClones) $[deck]('disableScale');
            hadClones = true;
        } else {
            $("body").removeClass(opts.classes.hasClones);
            if (opts.fitFollowsClone && hadClones) $[deck]('enableScale');
            hadClones = false;
        }
    };

    /*
      jQuery.deck('addClone')
      Create a clone of this window and add it to the clones list.
    */
    $[deck]('extend', 'addClone', function() {
        clone = new DeckClone();
        clones.push(clone);
        cleanClones();
        return clone;
    });
    $[deck]('extend', 'cleanClones', function() { // to be triggered by the closing of a clone window
        setTimeout(cleanClones, 1);
    });
    $[deck]('extend', 'cloneSetItem', function(k, v, propagating) {
        if (isClone && !propagating) {
            parentDeck('cloneSetItem', k, v);
            return;
        }
        // TODO: should probably trigger an event for other extensions to leverage this cloneSetItem as a way of communicating between clones
        var opts = $[deck]('getOptions');
        var oldValue = localStorage.getItem(k, v);
        $(opts.selectors.cloneSync+'.'+k).val(v);
        // should we broadcast to other clones
        if (oldValue == v) {
            return;
        }
        localStorage.setItem(k, v);
        cleanClones();
        $.each(clones, function(index, clone) {
            clone.deck('cloneSetItem', k, v, true);
        });
    });
    $[deck]('extend', 'cloneGetItem', function(k) {
        return localStorage.getItem(k, v);
    });
    $[deck]('extend', 'pointerAt', function(rx, ry) {
        var pos = {left: (rx*100)+"%", top: (ry*100)+"%"};
        var opts = $[deck]('getOptions');
        var current = $[deck]('getToplevelSlideOf', $[deck]('getSlide')).node; // actually uses the step extension
        var pointers = $(opts.selectors.clonepointer);
        if (!current.is(pointers.parent())) { // move them within the new slide if it changed
            pointers.show().appendTo(current);
        }
        pointers.css(pos);
        // using % position instead of ".offset" as there are jitter/glitches with it
    });
    $[deck]('extend', 'pointerDown', function() {
        var opts = $[deck]('getOptions');
        var pointers = $(opts.selectors.clonepointer);
        pointers.addClass(opts.classes.pointerClick);
    });
    $[deck]('extend', 'pointerUp', function() {
        var opts = $[deck]('getOptions');
        var pointers = $(opts.selectors.clonepointer);
        pointers.removeClass(opts.classes.pointerClick);
    });
    
    var isClone = false;
    var parentDeck = null;
    /*
      jQuery.deck('Init')
    */
    $d.bind('deck.init', function() {
        var opts = $[deck]('getOptions');
        var container = $[deck]('getContainer');
        
        if (opts.snippets.clone) {
            $('.clonepointer.auto-inserted').remove();
            var d = function() {return $('<div/>');}
            d().addClass("clonepointer scale-on-click auto-inserted").append(
                d().attr("style", "border: 2px solid red; border-radius: 50%; z-index:10;"
                         +"margin: -11px 0 0 -11px; width:20px; height:20px; opacity: .5;")
                ).appendTo(container);
            d().addClass("clonepointer scale-on-click auto-inserted").append(
                d().attr("style", "border: 2px solid red; border-radius: 50%; z-index:10;"
                         +"margin: -16px 0 0 -16px; width:30px; height:30px;")
                ).appendTo(container);
            d().addClass(opts.selectors.cloneNotesTarget.replace(/\./, ''))
                .appendTo(container);
        }

        $(opts.selectors.clonepointer).hide();

        
        $('.sync').each(function(ii) {
            var classes = this.classList;
            for (var i = 0; i < classes.length; i++) {
                var c = classes.item(i);
                if (c.startsWith(opts.classes.cloneSyncWritePrefix)) {
                    $(this).on('keyup', function(e) {
                        var k = opts.classes.cloneSyncReadPrefix + c.substr(opts.classes.cloneSyncWritePrefix.length);
                        $[deck]('cloneSetItem', k, $(e.target).val());
                    });
                }
            }
        });
        
        function safeIsClone(w) {
            try {
                return w.opener && w.opener.___iscloner___;
            } catch(e) {
                // when linked from another origin, there is an opener
                // but accessing its properties throws a security exception
                return false;
            }
        }

        isClone = safeIsClone(window);

        if (isClone) { // it's a clone!
            $("body").addClass(opts.classes.isClone);
            $(".anim-continue", container).removeClass("anim-continue"); // friend with anim extension
            window.___fromparent___ = false;
            parentDeck = function() {
                if (! window.___fromparent___) {
                    window.opener.$.deck.apply(window.opener.$, arguments);
                }
            }
            $(window).on('unload', function() {
                parentDeck('cleanClones');
            });
        } else { // it is a normal window
            /* bind clone key events */
            $d.unbind('keydown.deckclone').bind('keydown.deckclone', function(e) {
                if (e.which === opts.keys.clone || $.inArray(e.which, opts.keys.clone) > -1) {
                    if (e.ctrlKey || e.metaKey) return; // do not trigger on Ctrl+C (by default)
                    $[deck]('addClone');
                    window.___iscloner___ = true;
                    e.preventDefault();
                }
            });
        }

        if (window.helpAreaAvailable) { // always add, as a means of discovery
            $.deck('helpAdvertiseKey', 'clone', 'Pop-up a clone window for the presenter view');
        }
    })
    /* Update current slide number with each change event */
    .bind('deck.change', function(e, from, to) {
        if (isClone) {
            parentDeck('go', to);
        } else {
            cleanClones();
            $.each(clones, function(index, clone) {
                clone.deck('go', to);
            });
            
            var opts = $[deck]('getOptions');
            var currentTopLevel = $[deck]('getToplevelSlideOf', $[deck]('getSlide', to)).node;
            var notes = $(opts.selectors.cloneNotes, currentTopLevel).html();
            if (notes === undefined) {
                $(opts.selectors.cloneNotesTarget).html("");
            } else {
                $(opts.selectors.cloneNotesTarget).html(notes);
            }
        }
    })
    /* Replicate mouse cursor */
    .bind('mousemove', function(e) {
        if (isClone) return;
        var current = $[deck]('getToplevelSlideOf', $[deck]('getSlide')).node; // actually uses the step extension (dependency can be removed if needed)
        var r = current.get(0).getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width;
        var y = (e.clientY - r.top) / r.height;
        cleanClones();
        if (x < 0 || y < 0 || x > 1 || y > 1) return;
        $.each(clones, function(index, clone) {
            clone.deck('pointerAt', x, y);
        });
    })
    .bind('mousedown', function(e) {
        if (isClone) return;
        cleanClones();
        $.each(clones, function(index, clone) {
            clone.deck('pointerDown');
        });
    })
    .bind('mouseup', function(e) {
        if (isClone) return;
        cleanClones();
        $.each(clones, function(index, clone) {
            clone.deck('pointerUp');
        });
    });

    /*
        Simple Clone manager (must be improved, by for instance adding cloning
        option e.g. propagate change, etc.)
        */
    var DeckClone = function() {
        var clone = window.open(window.location);
        this.closed = function() {return clone.closed;}
        this.deck = function() {
            if (clone.closed) return;
            if (clone.$) {
                clone.___fromparent___ = true;
                clone.$.deck.apply(clone.$, arguments);
                clone.___fromparent___ = false;
            }
        }
    }
})(jQuery, 'deck');


/*!
Deck JS - deck.goto
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds the necessary methods and key bindings to show and hide a form
for jumping to any slide number/id in the deck (and processes that form
accordingly). The form-showing state is indicated by the presence of a class on
the deck container.
*/
(function($, undefined) {
  var $document = $(document);
  var rootCounter;

  var maybeAddSnippet = function() {
    var options = $.deck('getOptions');
    if (options.snippets.goto) {
      $('.goto-form.auto-inserted').remove();
      if ($(options.selectors.gotoForm).size() > 0 && options.alert.goto) {
        alert("'options.snippets.goto' is true but a "+options.selectors.gotoForm+" has been found."
              +"\nThis might cause interaction glitches."
              +"\n"
              +"\nSuggestion: remove your html snippet or pass the {snippets: {goto: false}} option."
             );
      }
      $('<form/>').addClass('goto-form').addClass('auto-inserted').attr('action', '.').attr('method', 'get')
        .append($('<label/>').attr('for', 'goto-slide').text('Go to slide:'))
        .append($('<input/>').attr('type', 'text').attr('id', 'goto-slide').attr('name', 'slidenum').attr('list', 'goto-datalist'))
        .append($('<datalist/>').attr('id', 'goto-datalist'))
        .append($('<input/>').attr('type', 'submit').attr('value', 'Go'))
      .appendTo($.deck('getContainer'));
    }
  };

  var bindKeyEvents = function() {
    $document.unbind('keydown.deckgoto');
    $document.bind('keydown.deckgoto', function(event) {
      var key = $.deck('getOptions').keys.goto;
      if (event.which === key || $.inArray(event.which, key) > -1) {
        event.preventDefault();
        $.deck('toggleGoTo');
      }
    });
  };

  var populateDatalist = function() {
    var options = $.deck('getOptions');
    var $datalist = $(options.selectors.gotoDatalist);

    $.each($.deck('getSlides'), function(i, $slide) {
      var id = $slide.attr('id');
      if (id) {
        $datalist.append('<option value="' + id + '">');
      }
    });
  };

  var markRootSlides = function() {
    var options = $.deck('getOptions');
    var slideTest = $.map([
      options.classes.before,
      options.classes.previous,
      options.classes.current,
      options.classes.next,
      options.classes.after
    ], function(el, i) {
      return '.' + el;
    }).join(', ');

    rootCounter = 0;
    $.each($.deck('getSlides'), function(i, $slide) {
      var $parentSlides = $slide.parentsUntil(
        options.selectors.container,
        slideTest
      );

      if ($parentSlides.length) {
        $slide.removeData('rootIndex');
      }
      else if (!options.countNested) {
        ++rootCounter;
        $slide.data('rootIndex', rootCounter);
      }
    });
  };

  var handleFormSubmit = function() {
    var options = $.deck('getOptions');
    var $form = $(options.selectors.gotoForm);

    $form.unbind('submit.deckgoto');
    $form.bind('submit.deckgoto', function(event) {
      var $field = $(options.selectors.gotoInput);
      var indexOrId = $field.val();
      var index = parseInt(indexOrId, 10);

      if (!options.countNested) {
        if (!isNaN(index) && (index > rootCounter || index <= 0)) {
          return false;
        }
        $.each($.deck('getSlides'), function(i, $slide) {
          if ($slide.data('rootIndex') === index) {
            index = i + 1;
            return false;
          }
        });
      }

      $.deck('go', isNaN(index) ? indexOrId : index - 1);
      $.deck('hideGoTo');
      $field.val('');
      event.preventDefault();
    });
  };

  /*
  Extends defaults/options.

  options.classes.goto
    This class is added to the deck container when showing the Go To Slide
    form.

  options.selectors.gotoDatalist
    The element that matches this selector is the datalist element that will
    be populated with options for each of the slide ids.  In browsers that
    support the datalist element, this provides a drop list of slide ids to
    aid the user in selecting a slide.

  options.selectors.gotoForm
    The element that matches this selector is the form that is submitted
    when a user hits enter after typing a slide number/id in the gotoInput
    element.

  options.selectors.gotoInput
    The element that matches this selector is the text input field for
    entering a slide number/id in the Go To Slide form.

  options.keys.goto
    The numeric keycode used to show the Go To Slide form.

  options.countNested
    If false, only top level slides will be counted when entering a
    slide number.
  */
  $.extend(true, $.deck.defaults, {
    classes: {
      goto: 'deck-goto'
    },

    selectors: {
      gotoDatalist: '#goto-datalist',
      gotoForm: '.goto-form',
      gotoInput: '#goto-slide'
    },

    snippets: {
      goto: true
    },

    alert: {
      goto: true
    },

    keys: {
      goto: 71 // g
    },

    countNested: true
  });

  /*
  jQuery.deck('showGoTo')

  Shows the Go To Slide form by adding the class specified by the goto class
  option to the deck container.
  */
  $.deck('extend', 'showGoTo', function() {
    var options = $.deck('getOptions');
    $.deck('getContainer').addClass(options.classes.goto);
    $(options.selectors.gotoForm).attr('aria-hidden', false);
    $(options.selectors.gotoInput).focus();
  });

  /*
  jQuery.deck('hideGoTo')

  Hides the Go To Slide form by removing the class specified by the goto class
  option from the deck container.
  */
  $.deck('extend', 'hideGoTo', function() {
    var options = $.deck('getOptions');
    $(options.selectors.gotoInput).blur();
    $.deck('getContainer').removeClass(options.classes.goto);
    $(options.selectors.gotoForm).attr('aria-hidden', true);
  });

  /*
  jQuery.deck('toggleGoTo')

  Toggles between showing and hiding the Go To Slide form.
  */
  $.deck('extend', 'toggleGoTo', function() {
    var options = $.deck('getOptions');
    var hasGotoClass = $.deck('getContainer').hasClass(options.classes.goto);
    $.deck(hasGotoClass ? 'hideGoTo' : 'showGoTo');
  });

  $document.bind('deck.init', function() {
    maybeAddSnippet();
    bindKeyEvents();
    populateDatalist();
    markRootSlides();
    handleFormSubmit();
    if (window.helpAreaAvailable) { // always add, as a means of discovery
      $.deck('helpAdvertiseKey', 'goto', 'Go to slide');
    }
  });
})(jQuery);


/*!
Deck JS - deck.progress
Copyright (c) 2014 Rémi Emonet
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds a (current)/(total) style status indicator to the deck.

It is designed to be a drop-in replacement of deck.status, but on steroïds.
Note however, that it does not handle the countNested=true case.
*/
(function($, undefined) {
    var $document = $(document);
    var rootCounter;
    var INITEVENT = "dummyinit";
    var SIZEEVENT = "dummysize";
    
    var updateCurrent = function(event, from, to) {
        var opts = $.deck('getOptions');
        var currentSlideNumber = to + 1;
        var $container = $.deck('getContainer');
        currentSlideNumber = $.deck('getSlide', to).data('rootSlide');
        $(opts.selectors.statusCurrent).text(currentSlideNumber);

        var icur = 0;
        for (; icur < $.deck('getSlides').length; icur++) {
            var top = $.deck('getSlide', icur).data('rootSlide');
            if (top == currentSlideNumber) {
                break;
            }
        }
        var last = null;
        var currentDetail = to;
        var lastDetail = icur;
        for (; icur < $.deck('getSlides').length; icur++) {
            last = $.deck('getSlide', icur).data('rootSlide');
            lastDetail = icur+1;
            if ($.deck('getSlide', icur).filter(opts.selectors.statusFakeEnd).size() > 0) break;
        }
	$(opts.selectors.statusTotal).text(last);

        // handle the data-progress
        var progresses = $('*['+opts.dataProgress+'], *['+opts.dataProgressOnce+'], *['+opts.dataProgressSize+']');
        if (progresses.size() > 0) {
            var visibleSlide = $.deck('getSlide').parentsUntil(opts.selectors.container).addBack().filter(opts.selectors.slides);
            // the eval context
            var slide = visibleSlide.get(0).getBoundingClientRect();
            var screen = {width: $container.innerWidth(), height: $container.innerHeight()};
            var n = currentSlideNumber;
            var N = last;
            var fullTotal = $.deck('getTopLevelSlides').length;
            var detail = {n: currentDetail+1, N: lastDetail, fullTotal: $.deck('getSlides').length};
            var designRatio = Math.max(slide.width / opts.designWidth, slide.height / opts.designHeight);
            var o = opts;
            var p = n/N;
            var pFull = n/fullTotal;
            detail.p = detail.n/detail.N;
            detail.pFull = detail.n/detail.fullTotal;
            // 
            progresses.each(function(i, el) {
                var spe = {
                    bottom: function(fontSize, botByRatio, botFixed) {
                        botFixed = botFixed || 0;
                        $(el).css('font-size', (fontSize * designRatio)+"px");
                        $(el).css('top', (slide.bottom - botFixed - botByRatio*designRatio)+'px');
                    },
                    top: function(fontSize, topByRatio, topFixed) {
                        topFixed = topFixed || 0;
                        $(el).css('font-size', (fontSize * designRatio)+"px");
                        $(el).css('top', (slide.top + topFixed + topByRatio*designRatio)+'px');
                    }
                };
                var att = $(el).attr(event == INITEVENT ? opts.dataProgressOnce : event == SIZEEVENT ? opts.dataProgressSize : opts.dataProgress);
                if (att == null || att.length == 0) return;
                var tasks = att.split(/ *; */);
                for (t in tasks) {
                    var parts = tasks[t].split(/ *: */);
                    if (parts.length != 2) {
                        if (opts.alert.wrongDataProgress) alert(
                            "There seem to be a problem with the following data-progress of\n   '" +tasks[t]+ "'\n");
                    } else {
                        var what = parts[0];
                        var expr = parts[1];
                        var val = eval(expr);
                        if (what == "") {
                            // skip: expected to be some "magic", e.g. custom code or call to helpers
                        } else if (what.substring(0,1) == "@") {
                            // special attribute setting, not css
                            what = what.substring(1);
                            $(el).attr(what, val);
                        } else if (what == "$text") {
                            $(el).text(val);
                        } else if (what == "$html") {
                            $(el).html(val);
                        } else {
                            $(el).css(what, val);
                        }
                    }
                }
            });
        }
    };
    
    var markRootSlides = function() {
        var opts = $.deck('getOptions');
        var slideTest = $.map([
            opts.classes.before,
            opts.classes.previous,
            opts.classes.current,
            opts.classes.next,
            opts.classes.after
        ], function(el, i) {
            return '.' + el;
        }).join(', ');
        
        rootCounter = 0;
        $.each($.deck('getSlides'), function(i, $slide) {
            var $parentSlides = $slide.parentsUntil(
                opts.selectors.container,
                slideTest
            );
            
            if ($parentSlides.length) {
                $slide.data('rootSlide', $parentSlides.last().data('rootSlide'));
            }
            else {
                ++rootCounter;
                $slide.data('rootSlide', rootCounter);
            }
        });
    };
    
    var fireEventOnCurrentSlide = function(ev) {
        var slides = $.deck('getSlides');
        var $currentSlide = $.deck('getSlide');
        var index;
        
        $.each(slides, function(i, $slide) {
            if ($slide === $currentSlide) {
                index = i;
                return false;
            }
        });
        updateCurrent(ev, index, index);
    };
    
    var setTotalSlideNumber = function() {
        var opts = $.deck('getOptions');
        var slides = $.deck('getSlides');
        
        var nSlides = $.deck('getTopLevelSlides').length;
	$(opts.selectors.statusFullTotal).text(nSlides);

    };
    
    /*
      Extends defaults/options.
      
      opts.selectors.statusCurrent
      The element matching this selector displays the current slide number.
      
      opts.selectors.statusTotal
      The element matching this selector displays the total number of slides.
      
      opts.countNested
      If false, only top level slides will be counted in the current and
      total numbers.
    */
    $.extend(true, $.deck.defaults, {
        selectors: {
            statusCurrent: '.deck-status-current',
	    statusTotal: '.deck-status-total',
	    statusFakeEnd: '.deck-status-fake-end',
	    statusFullTotal: '.deck-status-full-total',
	    progress10: '.deck-progress-10'
        },
        alert: {
            wrongDataProgress: true,
            possibleDebounceProblem: true
        },
        dataProgress: "data-progress",
        dataProgressOnce: "data-progress-once",
        dataProgressSize: "data-progress-size",
        progressSizeDebounce: 201 /* somewhat, it should be bigger that the fit debounce */
    });
    
    $document.bind('deck.init', function() {
        var opts = $.deck('getOptions');
        $(opts.selectors.progress10).attr(opts.dataProgressSize, ':spe.bottom(10, 12)')
        markRootSlides();
        fireEventOnCurrentSlide(INITEVENT);
        fireEventOnCurrentSlide(SIZEEVENT);
        setTotalSlideNumber();
    });
    var timer = -1;
    $(window).unbind('resize.deckprogress').bind('resize.deckprogress', function() {
        var opts = $.deck('getOptions');
        if (opts.alert.possibleDebounceProblem && opts.progressSizeDebounce < opts.scaleDebounce + 1) {
            alert(
                "There might be a problem with the respective debounce value:\n   progressSizeDebounce: "+opts.progressSizeDebounce+"\n   scaleDebounce: "+opts.scaleDebounce);

        }
        window.clearTimeout(timer);
        timer = window.setTimeout( function() {
            fireEventOnCurrentSlide(SIZEEVENT);
            fireEventOnCurrentSlide("fire also the update event as some things might also need resizing");
        }, opts.progressSizeDebounce);
    });
    $document.bind('deck.change', updateCurrent);
})(jQuery, 'deck');


/*!
Deck JS - deck.navigation
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds clickable previous and next links to the deck.
*/
(function($, undefined) {
  var $document = $(document);

  /* Updates link hrefs, and disabled states if last/first slide */
  var updateButtons = function(event, from, to) {
    var options = $.deck('getOptions');
    var lastIndex = $.deck('getSlides').length - 1;
    var $prevSlide = $.deck('getSlide', to - 1);
    var $nextSlide = $.deck('getSlide', to + 1);
    var hrefBase = window.location.href.replace(/#.*/, '');
    var prevId = $prevSlide ? $prevSlide.attr('id') : undefined;
    var nextId = $nextSlide ? $nextSlide.attr('id') : undefined;
    var $prevButton = $(options.selectors.previousLink);
    var $nextButton = $(options.selectors.nextLink);

    $prevButton.toggleClass(options.classes.navDisabled, to === 0);
    $prevButton.attr('aria-disabled', to === 0);
    $prevButton.attr('href', hrefBase + '#' + (prevId ? prevId : ''));
    $nextButton.toggleClass(options.classes.navDisabled, to === lastIndex);
    $nextButton.attr('aria-disabled', to === lastIndex);
    $nextButton.attr('href', hrefBase + '#' + (nextId ? nextId : ''));
  };

  /*
  Extends defaults/options.

  options.classes.navDisabled
    This class is added to a navigation link when that action is disabled.
    It is added to the previous link when on the first slide, and to the
    next link when on the last slide.

  options.selectors.nextLink
    The elements that match this selector will move the deck to the next
    slide when clicked.

  options.selectors.previousLink
    The elements that match this selector will move to deck to the previous
    slide when clicked.
  */
  $.extend(true, $.deck.defaults, {
    classes: {
      navDisabled: 'deck-nav-disabled'
    },

    selectors: {
      nextLink: '.deck-next-link',
      previousLink: '.deck-prev-link'
    }
  });

  $document.bind('deck.init', function() {
    var options = $.deck('getOptions');
    var slides = $.deck('getSlides');
    var $current = $.deck('getSlide');
    var $prevButton = $(options.selectors.previousLink);
    var $nextButton = $(options.selectors.nextLink);
    var index;

    // Setup prev/next link events
    $prevButton.unbind('click.decknavigation');
    $prevButton.bind('click.decknavigation', function(event) {
      $.deck('prev');
      event.preventDefault();
    });

    $nextButton.unbind('click.decknavigation');
    $nextButton.bind('click.decknavigation', function(event) {
      $.deck('next');
      event.preventDefault();
    });

    // Find where we started in the deck and set initial states
    $.each(slides, function(i, $slide) {
      if ($slide === $current) {
        index = i;
        return false;
      }
    });
    updateButtons(null, index, index);
  });

  $document.bind('deck.change', updateButtons);
})(jQuery);


/*!
Deck JS - deck.menu
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds the methods and key binding to show and hide a menu of all
slides in the deck. The deck menu state is indicated by the presence of a class
on the deck container.
*/
(function($, undefined) {
  var $document = $(document);
  var $html = $('html');
  var rootSlides;

  var populateRootSlidesArray = function() {
    var options = $.deck('getOptions');
    var slideTest = $.map([
      options.classes.before,
      options.classes.previous,
      options.classes.current,
      options.classes.next,
      options.classes.after
    ], function(el, i) {
      return '.' + el;
    }).join(', ');

    rootSlides = [];
    $.each($.deck('getSlides'), function(i, $slide) {
      var $parentSlides = $slide.parentsUntil(
        options.selectors.container,
        slideTest
      );
      if (!$parentSlides.length) {
        rootSlides.push($slide);
      }
    });
  };

  var bindKeyEvents = function() {
    var options = $.deck('getOptions');
    $document.unbind('keydown.deckmenu');
    $document.bind('keydown.deckmenu', function(event) {
      var isMenuKey = event.which === options.keys.menu;
      isMenuKey = isMenuKey || $.inArray(event.which, options.keys.menu) > -1;
      if (isMenuKey && !event.ctrlKey) {
        $.deck('toggleMenu');
        event.preventDefault();
      }
    });
  };

  var bindTouchEvents = function() {
    var $container = $.deck('getContainer');
    var options = $.deck('getOptions');
    var touchEndTime = 0;
    var currentSlide;

    $container.unbind('touchstart.deckmenu');
    $container.bind('touchstart.deckmenu', function() {
      currentSlide = $.deck('getSlide');
    });
    $container.unbind('touchend.deckmenu');
    $container.bind('touchend.deckmenu', function(event) {
      var now = Date.now();
      var isDoubletap = now - touchEndTime < options.touch.doubletapWindow;

      // Ignore this touch event if it caused a nav change (swipe)
      if (currentSlide !== $.deck('getSlide')) {
        return;
      }
      if (isDoubletap) {
        $.deck('toggleMenu');
        event.preventDefault();
      }
      touchEndTime = now;
    });
  };

  var setupMenuSlideSelection = function() {
    var options = $.deck('getOptions');

    $.each($.deck('getSlides'), function(i, $slide) {
      $slide.unbind('click.deckmenu');
      $slide.bind('click.deckmenu', function(event) {
        if (!$.deck('getContainer').hasClass(options.classes.menu)) {
          return;
        }
        $.deck('go', i);
        $.deck('hideMenu');
        event.stopPropagation();
        event.preventDefault();
      });
    });
  };

  /*
  Extends defaults/options.

  options.classes.menu
    This class is added to the deck container when showing the slide menu.

  options.keys.menu
    The numeric keycode used to toggle between showing and hiding the slide
    menu.

  options.touch.doubletapWindow
    Two consecutive touch events within this number of milliseconds will
    be considered a double tap, and will toggle the menu on touch devices.
  */
  $.extend(true, $.deck.defaults, {
    classes: {
      menu: 'deck-menu'
    },

    keys: {
      menu: 77 // m
    },

    touch: {
      doubletapWindow: 400
    }
  });

  /*
  jQuery.deck('showMenu')

  Shows the slide menu by adding the class specified by the menu class option
  to the deck container.
  */
  $.deck('extend', 'showMenu', function() {
    var $container = $.deck('getContainer');
    var options = $.deck('getOptions');

    if ($container.hasClass(options.classes.menu)) {
      return;
    }

    // Hide through loading class to short-circuit transitions (perf)
    $container.addClass([
      options.classes.loading,
      options.classes.menu
    ].join(' '));

    /* Forced to do this in JS until CSS learns second-grade math. Save old
    style value for restoration when menu is hidden. */
    if (Modernizr.csstransforms) {
      $.each(rootSlides, function(i, $slide) {
        $slide.data('oldStyle', $slide.attr('style'));
        $slide.css({
          'position': 'absolute',
          'left': ((i % 4) * 25) + '%',
          'top': (Math.floor(i / 4) * 25) + '%'
        });
      });
    }

    // Need to ensure the loading class renders first, then remove
    window.setTimeout(function() {
      $container.removeClass(options.classes.loading);
      $container.scrollTop($.deck('getSlide').position().top);
    }, 0);
  });

  /*
  jQuery.deck('hideMenu')

  Hides the slide menu by removing the class specified by the menu class
  option from the deck container.
  */
  $.deck('extend', 'hideMenu', function() {
    var $container = $.deck('getContainer');
    var options = $.deck('getOptions');

    if (!$container.hasClass(options.classes.menu)) {
      return;
    }

    $container.removeClass(options.classes.menu);
    $container.addClass(options.classes.loading);

    /* Restore old style value */
    if (Modernizr.csstransforms) {
      $.each(rootSlides, function(i, $slide) {
        var oldStyle = $slide.data('oldStyle');
        $slide.attr('style', oldStyle ? oldStyle : '');
      });
    }

    window.setTimeout(function() {
      $container.removeClass(options.classes.loading);
      $container.scrollTop(0);
    }, 0);
  });

  /*
  jQuery.deck('toggleMenu')

  Toggles between showing and hiding the slide menu.
  */
  $.deck('extend', 'toggleMenu', function() {
    $.deck('getContainer').hasClass($.deck('getOptions').classes.menu) ?
    $.deck('hideMenu') : $.deck('showMenu');
  });

  $document.bind('deck.init', function() {
    populateRootSlidesArray();
    bindKeyEvents();
    bindTouchEvents();
    setupMenuSlideSelection();
    if (window.helpAreaAvailable) { // always add, as a means of discovery
      $.deck('helpAdvertiseKey', 'menu', 'Open slide selector (menu)');
    }
  });

  $document.bind('deck.change', function(event, from, to) {
    var $container = $.deck('getContainer');
    var containerScroll, slideTop;

    if ($container.hasClass($.deck('getOptions').classes.menu)) {
      containerScroll = $container.scrollTop();
      slideTop = $.deck('getSlide', to).position().top;
      $container.scrollTop(containerScroll + slideTop);
    }
  });
})(jQuery);

/*!
Deck JS - deck.step
Copyright (c) 2011-2014 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module provides new methods for stepping without considering sub-slides, together with tools for finding toplevel slides etc.
It also overrides the defaults keybinding and countNested value (so it is better to include it after "goto" and "status" extensions).
It also adds provides better handling of subslides, for the purpose of animations and styling.
*/

(function($, deck, undefined) {
    var $d = $(document);
    // undo the defaults (to be sure jquery behaves properly when overriding it)
    $.extend(true, $[deck].defaults, { keys: {next:null, previous:null}});
    // and go on
    $.extend(true, $[deck].defaults, {
        selectors: {
            subslidesToNotify: ".slide,.onshowtoplevel",
            subslidesToAlwaysNotify: ".slide.withglobalimpact"
        },
        classes: {
            containerLastSubSlide: "lastsubslide"
        },
        // Here we redefined the defaults:
        //  - we avoid counting nested slides
        //  - we keep up/down for top-level slides
        //  - we still use pgup/pgdown for inner slides as they are sent by some pluggable remote controls
        keys: {
            // backspace, left arrow, page down
            previous: [8, 37, 33],
            // enter, space, right arrow, page up
            next: [13, 32, 39, 34],
            // up arrow
            previousTopLevel: [38],
            // down arrow,
            nextTopLevel: [40],
            // key 'z'
            nextEndOfTopLevel: [90],
            // key 'a'
            previousEndOfTopLevel: [65]
        },
        countNested: false
    });
    var myInArray = function(el, arr) {
        for (i in arr) if (arr[i].is(el)) return i*1; // cast to int
        return -1;
    };
    $[deck]('extend', 'getSlideIndex', function(node) {
        var slides = $[deck]('getSlides');
        var ind = myInArray(node, slides);
        return ind;
    });
    $[deck]('extend', 'getToplevelSlideOf', function(node) {
        var opts = $[deck]('getOptions');
        var slides = $[deck]('getSlides');
        var last = {node: $(node), index: myInArray(node, slides)};
        $(node).parentsUntil(opts.selectors.container).each( function(ii, v) {
            var ind = myInArray(v, slides);
            if (ind != -1) {
                last = {node: $(v), index: ind};
            }
        });
        return last;
    });
    $[deck]('extend', 'getToplevelSlideOfIndex', function(ind) {
        return $[deck]('getToplevelSlideOf', $[deck]('getSlide', ind));
    });
    $[deck]('extend', 'previousTopLevelSlide', function() {
        /* Find the real previous parent */
        var current = $[deck]('getSlide');
        var currentParent = $[deck]('getToplevelSlideOf', current);
        var toGo = currentParent.index;
        if (current.is(currentParent.node) && toGo > 0) {
            // This is already toplevel slide, just go to the previous toplevel one (parent of the previous one)
            toGo = $[deck]('getToplevelSlideOfIndex', toGo-1).index;
        }
        $[deck]('go', toGo);
        
    });
    $[deck]('extend', 'nextTopLevelSlide', function() {
        /* Find the real next parent */
        var current = $[deck]('getSlide');
        var currentParent = $[deck]('getToplevelSlideOf', current);
        var icur = currentParent.index;
        for (; icur < $[deck]('getSlides').length; icur++) {
            var cursorParent = $[deck]('getToplevelSlideOfIndex', icur).node;
            if (!cursorParent.is(currentParent.node)) {
                $[deck]('go', icur);
                break;
            }
        }
    });
    $[deck]('extend', 'nextEndOfTopLevelSlide', function() {
        /* Find the real next parent */
        var current = $[deck]('getSlideIndex', $[deck]('getSlide'));
        var nextParent = $[deck]('getToplevelSlideOfIndex', current + 1);
        var icur = nextParent.index;
        for (; icur < $[deck]('getSlides').length; icur++) {
            var cursorParent = $[deck]('getToplevelSlideOfIndex', icur).node;
            if (!cursorParent.is(nextParent.node)) {
                $[deck]('go', icur-1);
                break;
            }
        }
        if (icur == $[deck]('getSlides').length) {
            $[deck]('go', icur-1);            
        }
    });
    $[deck]('extend', 'previousEndOfTopLevelSlide', function() {
        /* Find the current parent and take the previous slide (last of previous top level) */
        var current = $[deck]('getSlideIndex', $[deck]('getSlide'));
        var currentParent = $[deck]('getToplevelSlideOfIndex', current).index;
        if (currentParent > 0) {
            $[deck]('go', currentParent - 1);
        }
    });
    $d.bind('deck.beforeInit', function() {
        var appendClass = function(o, at, cl) {
            if (typeof(o.attr(at)) == 'undefined') {
                o.attr(at, cl);
            } else {
                o.attr(at, o.attr(at) + " " + cl);
            }
        };
        /* Add data-container-class, handled by deck.container-styling.js (if included) */
        var opts = $[deck]('getOptions');
        var icur = 0;
        var L = $[deck]('getSlides').length;
        var lastParent = $[deck]('getToplevelSlideOfIndex', icur).node;
        for (; icur < L; icur++) {
            var cursorParent = $[deck]('getToplevelSlideOfIndex', icur).node;
            if (! cursorParent.is(lastParent)) {
                lastParent = cursorParent;
                appendClass($[deck]('getSlides')[icur-1], 'data-container-class', opts.classes.containerLastSubSlide);
            }
        }
    });
    $d.bind('deck.init', function() {
        /* Add key bindings */
        $d.unbind('keydown.decknexttoplevel').bind('keydown.decknexttoplevel', function(e) {
            var $opts = $[deck]('getOptions');
            var key = $opts.keys.nextTopLevel;
            if (e.which === key || $.inArray(e.which, key) > -1) {
                e.preventDefault();
                $[deck]('nextTopLevelSlide');
            }
        });
        $d.unbind('keydown.decknextendoftoplevel').bind('keydown.decknextendoftoplevel', function(e) {
            var $opts = $[deck]('getOptions');
            var key = $opts.keys.nextEndOfTopLevel;
            if (e.which === key || $.inArray(e.which, key) > -1) {
                e.preventDefault();
                $[deck]('nextEndOfTopLevelSlide');
            }
        });
        $d.unbind('keydown.deckprevioustoplevel').bind('keydown.deckprevioustoplevel', function(e) {
            var $opts = $[deck]('getOptions');
            var key = $opts.keys.previousTopLevel;
            if (e.which === key || $.inArray(e.which, key) > -1) {
                e.preventDefault();
                $[deck]('previousTopLevelSlide');
            }
        });
        $d.unbind('keydown.deckpreviousendoftoplevel').bind('keydown.deckpreviousendoftoplevel', function(e) {
            var $opts = $[deck]('getOptions');
            var key = $opts.keys.previousEndOfTopLevel;
            if (e.which === key || $.inArray(e.which, key) > -1) {
                e.preventDefault();
                $[deck]('previousEndOfTopLevelSlide');
            }
        });
        if (window.helpAreaAvailable) { // always add, as a means of discovery
            $.deck('helpAdvertiseKey', 'previous', 'Step/animate back to the previous (inner) slide');
            $.deck('helpAdvertiseKey', 'next', 'Step/animate to the next (inner) slide');
            $.deck('helpAdvertiseKey', 'previousEndOfTopLevel', 'View previous top-level slide');
            $.deck('helpAdvertiseKey', 'nextEndOfTopLevel', 'View next top-level slide');
            $.deck('helpAdvertiseKey', 'nextTopLevel', 'Skip to the (start of the) next slide');
            $.deck('helpAdvertiseKey', 'previousTopLevel', 'Go back to the start of the Previous slide');
        };
    });
    // When jumping (not steping), we will init the subslides (in case they are animations), in a backward order, and then fast forward necessary animations
    var bigJump = function(from, to) {
        var direction = "forward";
        if (from > to){
            direction = "reverse";
        }
        var opts = $[deck]('getOptions');
        // Notify slides between 'from' and 'to' that are special, and touch a global state
        var all = $[deck]('getSlides').map(function(q, i) {return q.get(0);});
        $(
            all.slice(from+1, to+1)
                .filter(function(e) { return e.matches(opts.selectors.subslidesToAlwaysNotify); })
        )
            .each(function() {
                $(this).triggerHandler('deck.bigJumped', direction);
            });
        $(
            all.slice(to+1, from+1).reverse()
                .filter(function(e) { return e.matches(opts.selectors.subslidesToAlwaysNotify); })
        )
            .each(function() {
                $(this).triggerHandler('deck.bigJumped', direction);
            });
        // Notify slides inside the 'to' toplevel: first all for init, then the one before the 'to' target
        $($[deck]('getToplevelSlideOfIndex', to).node.find(opts.selectors.subslidesToNotify).get().reverse()).each(function(ind, el) {$(el).triggerHandler('deck.toplevelBecameCurrent', direction)});
        for (icur = $[deck]('getToplevelSlideOfIndex', to).index + 1; icur < to+1; icur++) {
            $[deck]('getSlides')[icur].triggerHandler('deck.afterToplevelBecameCurrent', 'forward');
        }
    }
    $d.bind('deck.change', function(e, from, to) {
        if (  Math.abs(from - to) > 1 || ! $[deck]('getToplevelSlideOfIndex', to).node.is($[deck]('getToplevelSlideOfIndex', from).node)) {
            // consider natural jumps and the case where we actually changed (top level) slide (even with a step)
            bigJump(from, to);
        }
    });
})(jQuery, 'deck');

(function($, deck, undefined) {
   $(document).bind('deck.change', function(e, from, to) {
      var $prev = $[deck]('getSlide', to-1),
      $next = $[deck]('getSlide', to+1),
      $oldprev = $[deck]('getSlide', from-1),
      $oldnext = $[deck]('getSlide', from+1);
      
      var direction = "forward";
      if(from > to){
        direction = "reverse";
      }

      $[deck]('getSlide', from).triggerHandler('deck.lostCurrent', [direction, from, to]);
      $[deck]('getSlide', to).triggerHandler('deck.becameCurrent', [direction, from, to]);

      $oldprev && $oldprev.triggerHandler('deck.lostPrevious', [direction, from, to]);
      $oldnext && $oldnext.triggerHandler('deck.lostNext', [direction, from, to]);

      $prev && $prev.triggerHandler('deck.becamePrevious', [direction, from, to]);
      $next && $next.triggerHandler('deck.becameNext', [direction, from, to]);
   });
})(jQuery, 'deck');


/*!
Deck JS - deck.anim
Copyright (c) 2012-2014 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/


(function($, deck, undefined) {
    // The next two lines are the color plugin from jquery
    /*! jQuery Color v@2.1.2 http://github.com/jquery/jquery-color | jquery.org/license */
    (function(a,b){function m(a,b,c){var d=h[b.type]||{};return a==null?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function n(b){var c=f(),d=c._rgba=[];return b=b.toLowerCase(),l(e,function(a,e){var f,h=e.re.exec(b),i=h&&e.parse(h),j=e.space||"rgba";if(i)return f=c[j](i),c[g[j].cache]=f[g[j].cache],d=c._rgba=f._rgba,!1}),d.length?(d.join()==="0,0,0,0"&&a.extend(d,k.transparent),c):k[b]}function o(a,b,c){return c=(c+1)%1,c*6<1?a+(b-a)*c*6:c*2<1?b:c*3<2?a+(b-a)*(2/3-c)*6:a}var c="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",d=/^([\-+])=\s*(\d+\.?\d*)/,e=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1]*2.55,a[2]*2.55,a[3]*2.55,a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],f=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},g={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},i=f.support={},j=a("<p>")[0],k,l=a.each;j.style.cssText="background-color:rgba(1,1,1,.5)",i.rgba=j.style.backgroundColor.indexOf("rgba")>-1,l(g,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),f.fn=a.extend(f.prototype,{parse:function(c,d,e,h){if(c===b)return this._rgba=[null,null,null,null],this;if(c.jquery||c.nodeType)c=a(c).css(d),d=b;var i=this,j=a.type(c),o=this._rgba=[];d!==b&&(c=[c,d,e,h],j="array");if(j==="string")return this.parse(n(c)||k._default);if(j==="array")return l(g.rgba.props,function(a,b){o[b.idx]=m(c[b.idx],b)}),this;if(j==="object")return c instanceof f?l(g,function(a,b){c[b.cache]&&(i[b.cache]=c[b.cache].slice())}):l(g,function(b,d){var e=d.cache;l(d.props,function(a,b){if(!i[e]&&d.to){if(a==="alpha"||c[a]==null)return;i[e]=d.to(i._rgba)}i[e][b.idx]=m(c[a],b,!0)}),i[e]&&a.inArray(null,i[e].slice(0,3))<0&&(i[e][3]=1,d.from&&(i._rgba=d.from(i[e])))}),this},is:function(a){var b=f(a),c=!0,d=this;return l(g,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],l(e.props,function(a,b){if(g[b.idx]!=null)return c=g[b.idx]===f[b.idx],c})),c}),c},_space:function(){var a=[],b=this;return l(g,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var c=f(a),d=c._space(),e=g[d],i=this.alpha()===0?f("transparent"):this,j=i[e.cache]||e.to(i._rgba),k=j.slice();return c=c[e.cache],l(e.props,function(a,d){var e=d.idx,f=j[e],g=c[e],i=h[d.type]||{};if(g===null)return;f===null?k[e]=g:(i.mod&&(g-f>i.mod/2?f+=i.mod:f-g>i.mod/2&&(f-=i.mod)),k[e]=m((g-f)*b+f,d))}),this[d](k)},blend:function(b){if(this._rgba[3]===1)return this;var c=this._rgba.slice(),d=c.pop(),e=f(b)._rgba;return f(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return a==null?b>2?1:0:a});return c[3]===1&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return a==null&&(a=b>2?1:0),b&&b<3&&(a=Math.round(a*100)+"%"),a});return c[3]===1&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(d*255)),"#"+a.map(c,function(a){return a=(a||0).toString(16),a.length===1?"0"+a:a}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),f.fn.parse.prototype=f.fn,g.hsla.to=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/255,c=a[1]/255,d=a[2]/255,e=a[3],f=Math.max(b,c,d),g=Math.min(b,c,d),h=f-g,i=f+g,j=i*.5,k,l;return g===f?k=0:b===f?k=60*(c-d)/h+360:c===f?k=60*(d-b)/h+120:k=60*(b-c)/h+240,h===0?l=0:j<=.5?l=h/i:l=h/(2-i),[Math.round(k)%360,l,j,e==null?1:e]},g.hsla.from=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],e=a[3],f=d<=.5?d*(1+c):d+c-d*c,g=2*d-f;return[Math.round(o(g,f,b+1/3)*255),Math.round(o(g,f,b)*255),Math.round(o(g,f,b-1/3)*255),e]},l(g,function(c,e){var g=e.props,h=e.cache,i=e.to,j=e.from;f.fn[c]=function(c){i&&!this[h]&&(this[h]=i(this._rgba));if(c===b)return this[h].slice();var d,e=a.type(c),k=e==="array"||e==="object"?c:arguments,n=this[h].slice();return l(g,function(a,b){var c=k[e==="object"?a:b.idx];c==null&&(c=n[b.idx]),n[b.idx]=m(c,b)}),j?(d=f(j(n)),d[h]=n,d):f(n)},l(g,function(b,e){if(f.fn[b])return;f.fn[b]=function(f){var g=a.type(f),h=b==="alpha"?this._hsla?"hsla":"rgba":c,i=this[h](),j=i[e.idx],k;return g==="undefined"?j:(g==="function"&&(f=f.call(this,j),g=a.type(f)),f==null&&e.empty?this:(g==="string"&&(k=d.exec(f),k&&(f=j+parseFloat(k[2])*(k[1]==="+"?1:-1))),i[e.idx]=f,this[h](i)))}})}),f.hook=function(b){var c=b.split(" ");l(c,function(b,c){a.cssHooks[c]={set:function(b,d){var e,g,h="";if(d!=="transparent"&&(a.type(d)!=="string"||(e=n(d)))){d=f(e||d);if(!i.rgba&&d._rgba[3]!==1){g=c==="backgroundColor"?b.parentNode:b;while((h===""||h==="transparent")&&g&&g.style)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(j){}d=d.blend(h&&h!=="transparent"?h:"_default")}d=d.toRgbaString()}try{b.style[c]=d}catch(j){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=f(b.elem,c),b.end=f(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},f.hook(c),a.cssHooks.borderColor={expand:function(a){var b={};return l(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},k=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);

    var $d = $(document);
    var may = function(o,f) {return f ? f.bind(o) : function() {}};

    $.extend(true, $[deck].defaults, {
        selectors: {
            animShow: ".anim-show",
            animHide: ".anim-hide",
            animAddClass: ".anim-addclass",
            animRemoveClass: ".anim-removeclass",
            animAddContainerClass: ".anim-addcontainerclass",
            animRemoveContainerClass: ".anim-removecontainerclass",
            animAttribute: ".anim-attribute",
            animWait: ".anim-wait",
            // specific ones
            animPlay: ".anim-play",
            animPause: ".anim-pause",
            animViewboxAs: ".anim-viewboxas",
            animAlong: ".anim-along",
            //
            animContinue: ".anim-continue"
        },
        classes: {
            animReady: "deck-anim-ready"
        },
        anim: {
            duration: 400
        }
    });

    var doInit = function() {
        // first we define some tools and grab some info from deck.js
        var o = $[deck]('getOptions');
        var context = function(el) {
            return {
                what: function() {return $(el).attr("data-what")},
                dur: function() {return $(el).attr("data-dur")*1 || o.anim.duration},
                delay: function() {return $(el).attr("data-delay")*1 || 0},
                classs: function() {return $(el).attr("data-class")},
                attribute: function() {return $(el).attr("data-attr").split(':')[0]},
                as: function() {return $(el).attr("data-as")},
                path: function() {return $(el).attr("data-path")},
                reverse: function() {var r = $(el).attr("data-reverse"); return r && r.toUpperCase() == "TRUE";},
                value: function() {return $(el).attr("data-attr").split(':')[1]},
                toplevel: function() {return $[deck]('getToplevelSlideOf', el).node},
                all: function() {return $(this.what(),this.toplevel())}
            }
        };
        var globalHasAnimContinue = false;
        var classical = function(selector, methods) {
            $(selector).each(function(i, el) {
                var c = context(el);
                may(methods, methods.create)(c);
                $(el).bind('deck.toplevelBecameCurrent', function(_, direction) {
                    may(methods, methods.init)(c);
                }).bind('deck.afterToplevelBecameCurrent', function(_, direction) {
                    may(methods, methods.fast)(c);
                }).bind('deck.lostCurrent', function(_, direction, from, to) {
                    if (direction == 'forward' || Math.abs(from - to)>1 ) return; // if a big step, let the "step" extension do its job
                    may(methods, methods.undo)(c);
                }).bind('deck.becameCurrent', function(_, direction, from, to) {
                    if (direction == 'reverse' || Math.abs(from - to)>1 ) return; // if a big step, let the "step" extension do its job
                    if (c.delay()>0) {
                        setTimeout(function() {
                            may(methods, methods.doit)(c);
                        }, c.delay());
                    } else {
                        may(methods, methods.doit)(c);
                    }
                });
            });
        };
        var simpleWithGlobalState = function(selector, methods) {
            $(selector).each(function(i, el) {
                var c = context(el);
                may(methods, methods.create)(c);
                $(el).bind('deck.bigJumped', function(_, direction) {
                    if (direction == 'forward') {
                        may(methods, methods.doit)(c);
                    } else {
                        may(methods, methods.undo)(c);
                    }
                }).bind('deck.lostCurrent', function(_, direction, from, to) {
                    if (direction == 'forward' || Math.abs(from - to)>1 ) return; // if a big step, let the "step" extension do its job
                    may(methods, methods.undo)(c);
                }).bind('deck.becameCurrent', function(_, direction, from, to) {
                    if (direction == 'reverse' || Math.abs(from - to)>1 ) return; // if a big step, let the "step" extension do its job
                    if (c.delay()>0) {
                        setTimeout(function() {
                            may(methods, methods.doit)(c);
                        }, c.delay());
                    } else {
                        may(methods, methods.doit)(c);
                    }
                });
            });
        };
        
        // here come the real animations
        classical(o.selectors.animShow, {
            init: function(c) {c.all().animate({'opacity': 0.}, 0)},
            undo: function(c) {c.all().animate({'opacity': 0.}, c.dur()/100)},
            doit: function(c) {c.all().animate({'opacity': 1.}, c.dur())},
            fast: function(c) {c.all().animate({'opacity': 1.}, 0)}
        });
        classical(o.selectors.animHide, {
            init: function(c) {c.all().animate({'opacity': 1.}, 0)},
            undo: function(c) {c.all().animate({'opacity': 1.}, c.dur()/100)},
            doit: function(c) {c.all().animate({'opacity': 0.}, c.dur())},
            fast: function(c) {c.all().animate({'opacity': 0.}, 0)}
        });
        classical(o.selectors.animAddClass, {
            init: function(c) {c.all().each(function() { this.classList.remove(c.classs()) })},
            undo: function(c) {c.all().each(function() { this.classList.remove(c.classs()) })},
            doit: function(c) {c.all().each(function() { this.classList.add(c.classs()) })},
            fast: function(c) {c.all().each(function() { this.classList.add(c.classs()) })} 
        });
        classical(o.selectors.animRemoveClass, {
            init: function(c) {c.all().each(function() { this.classList.add(c.classs()) })},
            undo: function(c) {c.all().each(function() { this.classList.add(c.classs()) })},
            doit: function(c) {c.all().each(function() { this.classList.remove(c.classs()) })},
            fast: function(c) {c.all().each(function() { this.classList.remove(c.classs()) })} 
        });
        simpleWithGlobalState(o.selectors.animAddContainerClass, {
            undo: function(c) {$[deck]('getContainer').get(0).classList.remove(c.classs()) },
            doit: function(c) {$[deck]('getContainer').get(0).classList.add(c.classs()) },
        });
        simpleWithGlobalState(o.selectors.animRemoveContainerClass, {
            undo: function(c) {$[deck]('getContainer').get(0).classList.add(c.classs()) },
            doit: function(c) {$[deck]('getContainer').get(0).classList.remove(c.classs()) },
        });
        function svgRealAttrName(a) {
            if (startsWith(a, "svg")) {
                return REST.substr(0, 1).toLowerCase() + REST.slice(1);
            }
            return null;
        }
        function startsWith(longStr, part) {
            var res = longStr.substr(0, part.length) == part;
            REST = res ? longStr.slice(part.length) : null;
            return res;
        }
        classical(o.selectors.animAttribute, {
            init: function(c) {
                this.undo(c);
            },
            undo: function(c) {
                // TODO: [feature] could allow multiple attributes to be passed and animated simultaneously
                var k = c.attribute()
                for (i in c.previousElement) { // use the saved list of elements and values
                    var whatTo = {};
                    whatTo[k] = c.previousCss[i];
                    $(c.previousElement[i]).finish();
                    if (c.previousElement[i] instanceof SVGElement) {
                        if (whatTo[k] != null) {
	                    var realAttrName = svgRealAttrName(k) || k;
                            c.previousElement[i].attributes.getNamedItem(realAttrName).value = whatTo[k];
                        } else {
	                    var realAttrName = svgRealAttrName(k) || k;
                            c.previousElement[i].attributes.removeNamedItem(realAttrName);
                        }
                    } else {
                        $(c.previousElement[i]).animate(whatTo, 0);
                    }
                }
            },
            doit: function(c, factor) {
                if (factor === undefined) factor = 1
                c.all().each( function() {
                    // finish all previous animations
                    if (!globalHasAnimContinue && $(this).queue().length) {
                        $(this).finish();
                    }
                });
                var k = c.attribute()
                c.previousCss = []
                c.previousElement = []
                c.all().each( function(){
                    c.previousElement.push(this);
                    var v = $(this).css(k);
                    if (v == null && this instanceof SVGElement) {
	                var realAttrName = svgRealAttrName(k) || k;
                        var attr = this.attributes.getNamedItem(realAttrName);
                        c.previousCss.push(attr ? attr.value : null);
                    } else {
                        c.previousCss.push(v);
                    }
                }); // save a list of elements and values
                var whatTo = {}
                whatTo[c.attribute()] = c.value()
                c.all().animate(whatTo, c.dur()*factor)
            },
            fast: function(c) {this.doit(c,0)}
        });
        classical(o.selectors.animViewboxAs, {
            create: function(c) {
                c.attribute = function() {return "svgViewBox"};
                c.value = function() {
                    var asWhat = $(c.as());
                    var a = function (i) {return asWhat.attr(i)}
                    var toViewBox = a('x')+" "+a('y')+" "+a('width')+" "+a('height');
                    return toViewBox;
                };
            },
            init: function(c) {this.undo(c)},
            undo: function(c) {
                var k = c.attribute()
                for (i in c.previousElement) { // use the saved list of elements and values
                    var whatTo = {}
                    whatTo[k] = c.previousValue[i]
                    $(c.previousElement[i]).finish();
                    $(c.previousElement[i]).animate(whatTo, 0)
                }
            },
            doit: function(c, factor) {
                if (factor === undefined) factor = 1
                c.all().each( function() {
                    // finish all previous animations
                    if (!globalHasAnimContinue && $(this).queue().length) {
                        $(this).finish();
                    }
                });
                var k = c.attribute()
                c.previousValue = []
                c.previousElement = []
                c.all().each( function() {
                    c.previousElement.push(this);
                    c.previousValue.push(this.attributes.getNamedItem('viewBox').value);
                }); // save a list of elements and values
                var whatTo = {}
                whatTo[k] = c.value()
                c.all().animate(whatTo, c.dur()*factor)
            },
            fast: function(c) {this.doit(c,0)}
        });
        classical(o.selectors.animAlong, {
            init: function(c) {this.undo(c)},
            undo: function(c) {
                for (i in c.previousElement) { // use the saved list of elements and values
                    var prev = c.previousValue[i];
                    $(c.previousElement[i]).finish();
                    $(c.previousElement[i]).attr("transform", prev);
                }
            },
            doit: function(c, factor) {
                if (factor === undefined) factor = 1;
                c.all().each( function() {
                    // finish all previous animations
                    if (!globalHasAnimContinue && $(this).queue().length) {
                        $(this).finish();
                    }
                });
                var path = $(c.path()).get(0);
                var rev = c.reverse();
                var len = path.getTotalLength()
                var s = path.getPointAtLength(rev?len:0);
                c.previousValue = [];
                c.previousElement = [];
                c.all().each( function() {
                    var base = "";
                    if ($(this).attr("transform") != null) {
                        base = $(this).attr("transform"); // TODO maybe can use attr also above (anim-attr)
                        c.previousValue.push(base);
                    } else {
                        c.previousValue.push(null);
                    }
                    c.previousElement.push(this);
                    $(this).css({svgDeckAnim: 0.});
                    $(this).animate({svgDeckAnim: 1.}, {
                        duration: c.dur()*factor,
                        step: function(v) {
                            if (rev) v = 1-v;
                            var p = path.getPointAtLength(v * len);
                            $(this).attr("transform", 'translate('+(p.x-s.x)+','+(p.y-s.y)+')' + base);
                        }
                    });
                });
            },
            fast: function(c) {this.doit(c, 0);}
        });
        classical(o.selectors.animPlay, {
            init: function(c) {c.all().each(function(){this.pause(); try{this.currentTime=0}catch(e){} })},
            undo: function(c) {c.all().each(function(){this.pause()})},
            doit: function(c) {c.all().each(function(){this.play()})},
            fast: function(c) {c.all().each(function(){this.play()})}
        });
        classical(o.selectors.animPause, {
            undo: function(c) {c.all().each(function(){this.play()})},
            doit: function(c) {c.all().each(function(){this.pause()})},
            fast: function(c) {c.all().each(function(){this.pause()})}
        });
        classical(o.selectors.animContinue, {
            doit: function(c) {setTimeout(function(){ globalHasAnimContinue = true; $[deck]('next') ; globalHasAnimContinue = false; }, 1)}
            // do not do it in fast mode
        });
        classical(o.selectors.animWait, {
            doit: function(c) {setTimeout(function(){ globalHasAnimContinue = true; $[deck]('next') ; globalHasAnimContinue = false; }, c.dur())}
        });
        // handle the chained undo for "anim-continue"
        $(o.selectors.animContinue + "," + o.selectors.animWait).each(function(i, curSlide) {
            $(curSlide).bind('deck.becameCurrent', function(_, direction) {
                if (direction == 'forward') return;
                setTimeout(function(){$[deck]('prev')}, 1)
            });

        });

        // finally force "refresh" (notification of slide change)
        var current = $[deck]('getSlide')
        var icur = 0
        for (; icur < $[deck]('getSlides').length; icur++) {
            if ($[deck]('getSlides')[icur] == current) break;                
        }
	$d.trigger("deck.change", [icur, 0]);
	$d.trigger("deck.change", [0, icur]);

        var container = $[deck]('getContainer');
        $(container).addClass(o.classes.animReady)
    }
    // automatically enrich the "step" default
    $(document).bind('deck.beforeInit', function() {
        var sel = $[deck]('getOptions').selectors;
        sel.subslidesToAlwaysNotify = [sel.subslidesToAlwaysNotify, sel.animAddContainerClass, sel.animRemoveContainerClass].join(",");
    });
    // call init
    $(document).bind('deck.init', function() {
        doInit();
    });
        
})(jQuery, 'deck');


(function(e){function d(){this._settings=[];this._extensions=[];this.regional=[];this.regional[""]={errorLoadingText:"Error loading",notSupportedText:"This browser does not support SVG"};this.local=this.regional[""];this._uuid=new Date().getTime();this._renesis=c("RenesisX.RenesisCtrl")}function c(i){try{return !!(window.ActiveXObject&&new ActiveXObject(i))}catch(j){return false}}var g="svgwrapper";e.extend(d.prototype,{markerClassName:"hasSVG",svgNS:"http://www.w3.org/2000/svg",xlinkNS:"http://www.w3.org/1999/xlink",_wrapperClass:b,_attrNames:{class_:"class",in_:"in",alignmentBaseline:"alignment-baseline",baselineShift:"baseline-shift",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",underlinePosition:"underline-position",underlineThickness:"underline-thickness",vertAdvY:"vert-adv-y",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode"},_attachSVG:function(i,k){var j=(i.namespaceURI==this.svgNS?i:null);var i=(j?null:i);if(e(i||j).hasClass(this.markerClassName)){return}if(typeof k=="string"){k={loadURL:k}}else{if(typeof k=="function"){k={onLoad:k}}}e(i||j).addClass(this.markerClassName);try{if(!j){j=document.createElementNS(this.svgNS,"svg");j.setAttribute("version","1.1");if(i.clientWidth>0){j.setAttribute("width",i.clientWidth)}if(i.clientHeight>0){j.setAttribute("height",i.clientHeight)}i.appendChild(j)}this._afterLoad(i,j,k||{})}catch(l){if(!e.support.noCloneChecked){if(!i.id){i.id="svg"+(this._uuid++)}this._settings[i.id]=k;i.innerHTML='<embed type="image/svg+xml" width="100%" height="100%" src="'+(k.initPath||"")+'blank.svg" pluginspage="http://www.adobe.com/svg/viewer/install/main.html"/>'}else{i.innerHTML='<p class="svg_error">'+this.local.notSupportedText+"</p>"}}},_registerSVG:function(){for(var l=0;l<document.embeds.length;l++){var j=document.embeds[l].parentNode;if(!e(j).hasClass(e.svg.markerClassName)||e.data(j,g)){continue}var k=null;try{k=document.embeds[l].getSVGDocument()}catch(m){setTimeout(e.svg._registerSVG,250);return}k=(k?k.documentElement:null);if(k){e.svg._afterLoad(j,k)}}},_afterLoad:function(i,j,k){var k=k||this._settings[i.id];this._settings[i?i.id:""]=null;var m=new this._wrapperClass(j,i);e.data(i||j,g,m);try{if(k.loadURL){m.load(k.loadURL,k)}if(k.settings){m.configure(k.settings)}if(k.onLoad&&!k.loadURL){k.onLoad.apply(i||j,[m])}}catch(l){alert(l)}},_getSVG:function(i){i=(typeof i=="string"?e(i)[0]:(i.jquery?i[0]:i));return e.data(i,g)},_destroySVG:function(i){var j=e(i);if(!j.hasClass(this.markerClassName)){return}j.removeClass(this.markerClassName);if(i.namespaceURI!=this.svgNS){j.empty()}e.removeData(i,g)},addExtension:function(j,i){this._extensions.push([j,i])},isSVGElem:function(i){return(i.nodeType==1&&i.namespaceURI==e.svg.svgNS)}});function b(k,j){this._svg=k;this._container=j;for(var l=0;l<e.svg._extensions.length;l++){var m=e.svg._extensions[l];this[m[0]]=new m[1](this)}}e.extend(b.prototype,{_width:function(){return(this._container?this._container.clientWidth:this._svg.width)},_height:function(){return(this._container?this._container.clientHeight:this._svg.height)},root:function(){return this._svg},configure:function(o,n,k){if(!o.nodeName){k=n;n=o;o=this._svg}if(k){for(var m=o.attributes.length-1;m>=0;m--){var j=o.attributes.item(m);if(!(j.nodeName=="onload"||j.nodeName=="version"||j.nodeName.substring(0,5)=="xmlns")){o.attributes.removeNamedItem(j.nodeName)}}}for(var l in n){o.setAttribute(e.svg._attrNames[l]||l,n[l])}return this},getElementById:function(i){return this._svg.ownerDocument.getElementById(i)},change:function(j,k){if(j){for(var i in k){if(k[i]==null){j.removeAttribute(e.svg._attrNames[i]||i)}else{j.setAttribute(e.svg._attrNames[i]||i,k[i])}}}return this},_args:function(k,n,j){n.splice(0,0,"parent");n.splice(n.length,0,"settings");var l={};var o=0;if(k[0]!=null&&k[0].jquery){k[0]=k[0][0]}if(k[0]!=null&&!(typeof k[0]=="object"&&k[0].nodeName)){l.parent=null;o=1}for(var m=0;m<k.length;m++){l[n[m+o]]=k[m]}if(j){e.each(j,function(p,q){if(typeof l[q]=="object"){l.settings=l[q];l[q]=null}})}return l},title:function(k,m,j){var i=this._args(arguments,["text"]);var l=this._makeNode(i.parent,"title",i.settings||{});l.appendChild(this._svg.ownerDocument.createTextNode(i.text));return l},describe:function(k,m,j){var i=this._args(arguments,["text"]);var l=this._makeNode(i.parent,"desc",i.settings||{});l.appendChild(this._svg.ownerDocument.createTextNode(i.text));return l},defs:function(k,l,j){var i=this._args(arguments,["id"],["id"]);return this._makeNode(i.parent,"defs",e.extend((i.id?{id:i.id}:{}),i.settings||{}))},symbol:function(o,p,k,n,m,i,l){var j=this._args(arguments,["id","x1","y1","width","height"]);return this._makeNode(j.parent,"symbol",e.extend({id:j.id,viewBox:j.x1+" "+j.y1+" "+j.width+" "+j.height},j.settings||{}))},marker:function(o,i,q,p,l,j,m,k){var n=this._args(arguments,["id","refX","refY","mWidth","mHeight","orient"],["orient"]);return this._makeNode(n.parent,"marker",e.extend({id:n.id,refX:n.refX,refY:n.refY,markerWidth:n.mWidth,markerHeight:n.mHeight,orient:n.orient||"auto"},n.settings||{}))},style:function(k,m,j){var i=this._args(arguments,["styles"]);var l=this._makeNode(i.parent,"style",e.extend({type:"text/css"},i.settings||{}));l.appendChild(this._svg.ownerDocument.createTextNode(i.styles));return l},script:function(m,i,l,k){var j=this._args(arguments,["script","type"],["type"]);var n=this._makeNode(j.parent,"script",e.extend({type:j.type||"text/javascript"},j.settings||{}));n.appendChild(this._svg.ownerDocument.createTextNode(j.script));return n},linearGradient:function(q,j,r,k,p,i,o,l){var n=this._args(arguments,["id","stops","x1","y1","x2","y2"],["x1"]);var m=e.extend({id:n.id},(n.x1!=null?{x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2}:{}));return this._gradient(n.parent,"linearGradient",e.extend(m,n.settings||{}),n.stops)},radialGradient:function(s,j,t,o,m,i,n,k,l){var q=this._args(arguments,["id","stops","cx","cy","r","fx","fy"],["cx"]);var p=e.extend({id:q.id},(q.cx!=null?{cx:q.cx,cy:q.cy,r:q.r,fx:q.fx,fy:q.fy}:{}));return this._gradient(q.parent,"radialGradient",e.extend(p,q.settings||{}),q.stops)},_gradient:function(n,j,m,p){var o=this._makeNode(n,j,m);for(var l=0;l<p.length;l++){var k=p[l];this._makeNode(o,"stop",e.extend({offset:k[0],stopColor:k[1]},(k[2]!=null?{stopOpacity:k[2]}:{})))}return o},pattern:function(s,i,r,p,j,t,q,o,l,u,k){var n=this._args(arguments,["id","x","y","width","height","vx","vy","vwidth","vheight"],["vx"]);var m=e.extend({id:n.id,x:n.x,y:n.y,width:n.width,height:n.height},(n.vx!=null?{viewBox:n.vx+" "+n.vy+" "+n.vwidth+" "+n.vheight}:{}));return this._makeNode(n.parent,"pattern",e.extend(m,n.settings||{}))},clipPath:function(l,m,i,k){var j=this._args(arguments,["id","units"]);j.units=j.units||"userSpaceOnUse";return this._makeNode(j.parent,"clipPath",e.extend({id:j.id,clipPathUnits:j.units},j.settings||{}))},mask:function(n,p,j,o,m,i,l){var k=this._args(arguments,["id","x","y","width","height"]);return this._makeNode(k.parent,"mask",e.extend({id:k.id,x:k.x,y:k.y,width:k.width,height:k.height},k.settings||{}))},createPath:function(){return new f()},createText:function(){return new h()},svg:function(r,q,o,i,s,p,n,k,t,j){var m=this._args(arguments,["x","y","width","height","vx","vy","vwidth","vheight"],["vx"]);var l=e.extend({x:m.x,y:m.y,width:m.width,height:m.height},(m.vx!=null?{viewBox:m.vx+" "+m.vy+" "+m.vwidth+" "+m.vheight}:{}));return this._makeNode(m.parent,"svg",e.extend(l,m.settings||{}))},group:function(k,l,j){var i=this._args(arguments,["id"],["id"]);return this._makeNode(i.parent,"g",e.extend({id:i.id},i.settings||{}))},use:function(p,o,n,i,q,j,l){var m=this._args(arguments,["x","y","width","height","ref"]);if(typeof m.x=="string"){m.ref=m.x;m.settings=m.y;m.x=m.y=m.width=m.height=null}var k=this._makeNode(m.parent,"use",e.extend({x:m.x,y:m.y,width:m.width,height:m.height},m.settings||{}));k.setAttributeNS(e.svg.xlinkNS,"href",m.ref);return k},link:function(k,m,j){var i=this._args(arguments,["ref"]);var l=this._makeNode(i.parent,"a",i.settings);l.setAttributeNS(e.svg.xlinkNS,"href",i.ref);return l},image:function(p,o,n,i,q,j,l){var m=this._args(arguments,["x","y","width","height","ref"]);var k=this._makeNode(m.parent,"image",e.extend({x:m.x,y:m.y,width:m.width,height:m.height},m.settings||{}));k.setAttributeNS(e.svg.xlinkNS,"href",m.ref);return k},path:function(k,l,j){var i=this._args(arguments,["path"]);return this._makeNode(i.parent,"path",e.extend({d:(i.path.path?i.path.path():i.path)},i.settings||{}))},rect:function(p,o,n,k,q,j,i,l){var m=this._args(arguments,["x","y","width","height","rx","ry"],["rx"]);return this._makeNode(m.parent,"rect",e.extend({x:m.x,y:m.y,width:m.width,height:m.height},(m.rx?{rx:m.rx,ry:m.ry}:{}),m.settings||{}))},circle:function(l,i,n,m,k){var j=this._args(arguments,["cx","cy","r"]);return this._makeNode(j.parent,"circle",e.extend({cx:j.cx,cy:j.cy,r:j.r},j.settings||{}))},ellipse:function(l,i,o,n,m,k){var j=this._args(arguments,["cx","cy","rx","ry"]);return this._makeNode(j.parent,"ellipse",e.extend({cx:j.cx,cy:j.cy,rx:j.rx,ry:j.ry},j.settings||{}))},line:function(o,k,n,i,l,m){var j=this._args(arguments,["x1","y1","x2","y2"]);return this._makeNode(j.parent,"line",e.extend({x1:j.x1,y1:j.y1,x2:j.x2,y2:j.y2},j.settings||{}))},polyline:function(l,k,j){var i=this._args(arguments,["points"]);return this._poly(i.parent,"polyline",i.points,i.settings)},polygon:function(l,k,j){var i=this._args(arguments,["points"]);return this._poly(i.parent,"polygon",i.points,i.settings)},_poly:function(n,j,m,l){var o="";for(var k=0;k<m.length;k++){o+=m[k].join()+" "}return this._makeNode(n,j,e.extend({points:e.trim(o)},l||{}))},text:function(l,i,n,m,k){var j=this._args(arguments,["x","y","value"]);if(typeof j.x=="string"&&arguments.length<4){j.value=j.x;j.settings=j.y;j.x=j.y=null}return this._text(j.parent,"text",j.value,e.extend({x:(j.x&&a(j.x)?j.x.join(" "):j.x),y:(j.y&&a(j.y)?j.y.join(" "):j.y)},j.settings||{}))},textpath:function(k,n,m,j){var i=this._args(arguments,["path","value"]);var l=this._text(i.parent,"textPath",i.value,i.settings||{});l.setAttributeNS(e.svg.xlinkNS,"href",i.path);return l},_text:function(r,j,q,n){var m=this._makeNode(r,j,n);if(typeof q=="string"){m.appendChild(m.ownerDocument.createTextNode(q))}else{for(var o=0;o<q._parts.length;o++){var l=q._parts[o];if(l[0]=="tspan"){var k=this._makeNode(m,l[0],l[2]);k.appendChild(m.ownerDocument.createTextNode(l[1]));m.appendChild(k)}else{if(l[0]=="tref"){var k=this._makeNode(m,l[0],l[2]);k.setAttributeNS(e.svg.xlinkNS,"href",l[1]);m.appendChild(k)}else{if(l[0]=="textpath"){var p=e.extend({},l[2]);p.href=null;var k=this._makeNode(m,l[0],p);k.setAttributeNS(e.svg.xlinkNS,"href",l[2].href);k.appendChild(m.ownerDocument.createTextNode(l[1]));m.appendChild(k)}else{m.appendChild(m.ownerDocument.createTextNode(l[1]))}}}}}return m},other:function(l,j,k){var i=this._args(arguments,["name"]);return this._makeNode(i.parent,i.name,i.settings||{})},_makeNode:function(k,i,j){k=k||this._svg;var l=this._svg.ownerDocument.createElementNS(e.svg.svgNS,i);for(var i in j){var m=j[i];if(m!=null&&m!=null&&(typeof m!="string"||m!="")){l.setAttribute(e.svg._attrNames[i]||i,m)}}k.appendChild(l);return l},add:function(k,l){var j=this._args((arguments.length==1?[null,k]:arguments),["node"]);var i=this;j.parent=j.parent||this._svg;j.node=(j.node.jquery?j.node:e(j.node));try{if(e.svg._renesis){throw"Force traversal"}j.parent.appendChild(j.node.cloneNode(true))}catch(m){j.node.each(function(){var n=i._cloneAsSVG(this);if(n){j.parent.appendChild(n)}})}return this},clone:function(l,m){var i=this;var k=this._args((arguments.length==1?[null,l]:arguments),["node"]);k.parent=k.parent||this._svg;k.node=(k.node.jquery?k.node:e(k.node));var j=[];k.node.each(function(){var n=i._cloneAsSVG(this);if(n){n.id="";k.parent.appendChild(n);j.push(n)}});return j},_cloneAsSVG:function(m){var l=null;if(m.nodeType==1){l=this._svg.ownerDocument.createElementNS(e.svg.svgNS,this._checkName(m.nodeName));for(var k=0;k<m.attributes.length;k++){var j=m.attributes.item(k);if(j.nodeName!="xmlns"&&j.nodeValue){if(j.prefix=="xlink"){l.setAttributeNS(e.svg.xlinkNS,j.localName||j.baseName,j.nodeValue)}else{l.setAttribute(this._checkName(j.nodeName),j.nodeValue)}}}for(var k=0;k<m.childNodes.length;k++){var o=this._cloneAsSVG(m.childNodes[k]);if(o){l.appendChild(o)}}}else{if(m.nodeType==3){if(e.trim(m.nodeValue)){l=this._svg.ownerDocument.createTextNode(m.nodeValue)}}else{if(m.nodeType==4){if(e.trim(m.nodeValue)){try{l=this._svg.ownerDocument.createCDATASection(m.nodeValue)}catch(n){l=this._svg.ownerDocument.createTextNode(m.nodeValue.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"))}}}}}return l},_checkName:function(i){i=(i.substring(0,1)>="A"&&i.substring(0,1)<="Z"?i.toLowerCase():i);return(i.substring(0,4)=="svg:"?i.substring(4):i)},load:function(i,l){l=(typeof l=="boolean"?{addTo:l}:(typeof l=="function"?{onLoad:l}:(typeof l=="string"?{parent:l}:(typeof l=="object"&&l.nodeName?{parent:l}:(typeof l=="object"&&l.jquery?{parent:l}:l||{})))));if(!l.parent&&!l.addTo){this.clear(false)}var j=[this._svg.getAttribute("width"),this._svg.getAttribute("height")];var o=this;var n=function(p){p=e.svg.local.errorLoadingText+": "+p;if(l.onLoad){l.onLoad.apply(o._container||o._svg,[o,p])}else{o.text(null,10,20,p)}};var m=function(q){var p=new ActiveXObject("Microsoft.XMLDOM");p.validateOnParse=false;p.resolveExternals=false;p.async=false;p.loadXML(q);if(p.parseError.errorCode!=0){n(p.parseError.reason);return null}return p};var k=function(s){if(!s){return}if(s.documentElement.nodeName!="svg"){var z=s.getElementsByTagName("parsererror");var r=(z.length?z[0].getElementsByTagName("div"):[]);n(!z.length?"???":(r.length?r[0]:z[0]).firstChild.nodeValue);return}if(!l.forceKeepRelativePath&&i.search(/\//)!=-1){var q=i.replace(/\/[^\/]*$/,"/");e("*[xlink\\:href]",s.documentElement).each(function(C,D){var w=e(D).attr("xlink:href")+"";if(!w.match(/(^[a-z]([-a-z0-9+.])*:.*$)|(^\/.*$)/i)&&w[0]!="#"){e(D).attr("xlink:href",q+e(D).attr("xlink:href"))}})}var A=(l.parent?e(l.parent)[0]:o._svg);var B={};for(var t=0;t<s.documentElement.attributes.length;t++){var x=s.documentElement.attributes.item(t);if(!(x.nodeName=="version"||x.nodeName.substring(0,5)=="xmlns")){B[x.nodeName]=x.nodeValue}}o.configure(A,B,!l.parent);var p=s.documentElement.childNodes;for(var t=0;t<p.length;t++){try{if(e.svg._renesis){throw"Force traversal"}A.appendChild(o._svg.ownerDocument.importNode(p[t],true));if(p[t].nodeName=="script"){e.globalEval(p[t].textContent)}}catch(v){o.add(A,p[t])}}if(!l.changeSize){o.configure(A,{width:j[0],height:j[1]})}if(l.onLoad){var y=s.documentElement.getAttribute("width");var u=s.documentElement.getAttribute("height");l.onLoad.apply(o._container||o._svg,[o,y,u])}};if(i.match("<svg")){k(!e.support.noCloneChecked?m(i):new DOMParser().parseFromString(i,"text/xml"))}else{e.ajax({url:i,dataType:(!e.support.noCloneChecked?"text":"xml"),success:function(p){k(!e.support.noCloneChecked?m(p):p)},error:function(q,r,p){n(r+(p?" "+p.message:""))}})}return this},remove:function(i){i=(i.jquery?i[0]:i);i.parentNode.removeChild(i);return this},clear:function(i){if(i){this.configure({},true)}while(this._svg.firstChild){this._svg.removeChild(this._svg.firstChild)}return this},toSVG:function(i){i=i||this._svg;return(typeof XMLSerializer=="undefined"?this._toSVG(i):new XMLSerializer().serializeToString(i))},_toSVG:function(m){var l="";if(!m){return l}if(m.nodeType==3){l=m.nodeValue}else{if(m.nodeType==4){l="<![CDATA["+m.nodeValue+"]]>"}else{l="<"+m.nodeName;if(m.attributes){for(var k=0;k<m.attributes.length;k++){var j=m.attributes.item(k);if(!(e.trim(j.nodeValue)==""||j.nodeValue.match(/^\[object/)||j.nodeValue.match(/^function/))){l+=" "+(j.namespaceURI==e.svg.xlinkNS?"xlink:":"")+j.nodeName+'="'+j.nodeValue+'"'}}}if(m.firstChild){l+=">";var n=m.firstChild;while(n){l+=this._toSVG(n);n=n.nextSibling}l+="</"+m.nodeName+">"}else{l+="/>"}}}return l}});function f(){this._path=""}e.extend(f.prototype,{reset:function(){this._path="";return this},move:function(i,k,j){j=(a(i)?k:j);return this._coords((j?"m":"M"),i,k)},line:function(i,k,j){j=(a(i)?k:j);return this._coords((j?"l":"L"),i,k)},horiz:function(i,j){this._path+=(j?"h":"H")+(a(i)?i.join(" "):i);return this},vert:function(j,i){this._path+=(i?"v":"V")+(a(j)?j.join(" "):j);return this},curveC:function(k,m,j,l,i,o,n){n=(a(k)?m:n);return this._coords((n?"c":"C"),k,m,j,l,i,o)},smoothC:function(j,k,i,m,l){l=(a(j)?k:l);return this._coords((l?"s":"S"),j,k,i,m)},curveQ:function(j,k,i,m,l){l=(a(j)?k:l);return this._coords((l?"q":"Q"),j,k,i,m)},smoothQ:function(i,k,j){j=(a(i)?k:j);return this._coords((j?"t":"T"),i,k)},_coords:function(m,l,r,k,q,j,p){if(a(l)){for(var n=0;n<l.length;n++){var o=l[n];this._path+=(n==0?m:" ")+o[0]+","+o[1]+(o.length<4?"":" "+o[2]+","+o[3]+(o.length<6?"":" "+o[4]+","+o[5]))}}else{this._path+=m+l+","+r+(k==null?"":" "+k+","+q+(j==null?"":" "+j+","+p))}return this},arc:function(m,j,p,s,l,r,q,k){k=(a(m)?j:k);this._path+=(k?"a":"A");if(a(m)){for(var n=0;n<m.length;n++){var o=m[n];this._path+=(n==0?"":" ")+o[0]+","+o[1]+" "+o[2]+" "+(o[3]?"1":"0")+","+(o[4]?"1":"0")+" "+o[5]+","+o[6]}}else{this._path+=m+","+j+" "+p+" "+(s?"1":"0")+","+(l?"1":"0")+" "+r+","+q}return this},close:function(){this._path+="z";return this},path:function(){return this._path}});f.prototype.moveTo=f.prototype.move;f.prototype.lineTo=f.prototype.line;f.prototype.horizTo=f.prototype.horiz;f.prototype.vertTo=f.prototype.vert;f.prototype.curveCTo=f.prototype.curveC;f.prototype.smoothCTo=f.prototype.smoothC;f.prototype.curveQTo=f.prototype.curveQ;f.prototype.smoothQTo=f.prototype.smoothQ;f.prototype.arcTo=f.prototype.arc;function h(){this._parts=[]}e.extend(h.prototype,{reset:function(){this._parts=[];return this},string:function(i){this._parts[this._parts.length]=["text",i];return this},span:function(j,i){this._parts[this._parts.length]=["tspan",j,i];return this},ref:function(j,i){this._parts[this._parts.length]=["tref",j,i];return this},path:function(k,j,i){this._parts[this._parts.length]=["textpath",j,e.extend({href:k},i||{})];return this}});e.fn.svg=function(j){var i=Array.prototype.slice.call(arguments,1);if(typeof j=="string"&&j=="get"){return e.svg["_"+j+"SVG"].apply(e.svg,[this[0]].concat(i))}return this.each(function(){if(typeof j=="string"){e.svg["_"+j+"SVG"].apply(e.svg,[this].concat(i))}else{e.svg._attachSVG(this,j||{})}})};function a(i){return(i&&i.constructor==Array)}e.svg=new d()})(jQuery);
(function(a){a.each(["x","y","width","height","rx","ry","cx","cy","r","x1","y1","x2","y2","stroke-width","strokeWidth","opacity","fill-opacity","fillOpacity","stroke-opacity","strokeOpacity","stroke-dashoffset","strokeDashOffset","font-size","fontSize","font-weight","fontWeight","letter-spacing","letterSpacing","word-spacing","wordSpacing"],function(h,g){var f=g.charAt(0).toUpperCase()+g.substr(1);if(a.cssProps){a.cssProps["svg"+f]=a.cssProps["svg-"+g]=g}a.fx.step["svg"+f]=a.fx.step["svg-"+g]=function(k){var j=a.svg._attrNames[g]||g;var i=k.elem.attributes.getNamedItem(j);if(!k.set){k.start=(i?parseFloat(i.value):0);var m="";if(/^[+-]=/.exec(m)){k.end=k.start+parseFloat(m.replace(/=/,""))}a(k.elem).css(j,"");k.set=true}var l=(k.pos*(k.end-k.start)+k.start)+(k.unit=="%"?"%":"");(i?i.value=l:k.elem.setAttribute(j,l))}});a.fx.step.svgStrokeDashArray=a.fx.step["svg-strokeDashArray"]=a.fx.step["svgStroke-dasharray"]=a.fx.step["svg-stroke-dasharray"]=function(j){var g=j.elem.attributes.getNamedItem("stroke-dasharray");if(!j.set){j.start=c(g?g.value:"");var l=j.end;j.end=c(l);if(/^[+-]=/.exec(l)){l=l.split(/[, ]+/);if(l.length%2==1){var f=l.length;for(var h=0;h<f;h++){l.push(l[h])}}for(var h=0;h<l.length;h++){if(/^[+-]=/.exec(l[h])){j.end[h]=j.start[h]+parseFloat(l[h].replace(/=/,""))}}}j.set=true}var k=a.map(j.start,function(o,m){return(j.pos*(j.end[m]-o)+o)}).join(",");(g?g.value=k:j.elem.setAttribute("stroke-dasharray",k))};function c(j){var g=j.split(/[, ]+/);for(var h=0;h<g.length;h++){g[h]=parseFloat(g[h]);if(isNaN(g[h])){g[h]=0}}if(g.length%2==1){var f=g.length;for(var h=0;h<f;h++){g.push(g[h])}}return g}a.fx.step.svgViewBox=a.fx.step["svg-viewBox"]=function(h){var f=h.elem.attributes.getNamedItem("viewBox");if(!h.set){h.start=b(f?f.value:"");var k=h.end;h.end=b(k);if(/^[+-]=/.exec(k)){k=k.split(/[, ]+/);while(k.length<4){k.push("0")}for(var g=0;g<4;g++){if(/^[+-]=/.exec(k[g])){h.end[g]=h.start[g]+parseFloat(k[g].replace(/=/,""))}}}h.set=true}var j=a.map(h.start,function(m,l){return(h.pos*(h.end[l]-m)+m)}).join(" ");(f?f.value=j:h.elem.setAttribute("viewBox",j))};function b(g){var h=g.split(/[, ]+/);for(var f=0;f<h.length;f++){h[f]=parseFloat(h[f]);if(isNaN(h[f])){h[f]=0}}while(h.length<4){h.push(0)}return h}a.fx.step.svgTransform=a.fx.step["svg-transform"]=function(m){var f=m.elem.attributes.getNamedItem("transform");if(!m.set){m.start=e(f?f.value:"");m.end=e(m.end,m.start);m.set=true}var k="";for(var l=0;l<m.end.order.length;l++){switch(m.end.order.charAt(l)){case"t":k+=" translate("+(m.pos*(m.end.translateX-m.start.translateX)+m.start.translateX)+","+(m.pos*(m.end.translateY-m.start.translateY)+m.start.translateY)+")";break;case"s":k+=" scale("+(m.pos*(m.end.scaleX-m.start.scaleX)+m.start.scaleX)+","+(m.pos*(m.end.scaleY-m.start.scaleY)+m.start.scaleY)+")";break;case"r":k+=" rotate("+(m.pos*(m.end.rotateA-m.start.rotateA)+m.start.rotateA)+","+(m.pos*(m.end.rotateX-m.start.rotateX)+m.start.rotateX)+","+(m.pos*(m.end.rotateY-m.start.rotateY)+m.start.rotateY)+")";break;case"x":k+=" skewX("+(m.pos*(m.end.skewX-m.start.skewX)+m.start.skewX)+")";case"y":k+=" skewY("+(m.pos*(m.end.skewY-m.start.skewY)+m.start.skewY)+")";break;case"m":var g="";for(var h=0;h<6;h++){g+=","+(m.pos*(m.end.matrix[h]-m.start.matrix[h])+m.start.matrix[h])}k+=" matrix("+g.substr(1)+")";break}}(f?f.value=k:m.elem.setAttribute("transform",k))};function e(j,h){j=j||"";if(typeof j=="object"){j=j.value}var g=a.extend({translateX:0,translateY:0,scaleX:0,scaleY:0,rotateA:0,rotateX:0,rotateY:0,skewX:0,skewY:0,matrix:[0,0,0,0,0,0]},h||{});g.order="";var i=/([a-zA-Z]+)\(\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*)?)?)?\)/g;var f=i.exec(j);while(f){switch(f[1]){case"translate":g.order+="t";g.translateX=parseFloat(f[2]);g.translateY=(f[3]?parseFloat(f[3]):0);break;case"scale":g.order+="s";g.scaleX=parseFloat(f[2]);g.scaleY=(f[3]?parseFloat(f[3]):g.scaleX);break;case"rotate":g.order+="r";g.rotateA=parseFloat(f[2]);g.rotateX=(f[3]?parseFloat(f[3]):0);g.rotateY=(f[4]?parseFloat(f[4]):0);break;case"skewX":g.order+="x";g.skewX=parseFloat(f[2]);break;case"skewY":g.order+="y";g.skewY=parseFloat(f[2]);break;case"matrix":g.order+="m";g.matrix=[parseFloat(f[2]),parseFloat(f[3]),parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6]),parseFloat(f[7])];break}f=i.exec(j)}if(g.order=="m"&&Math.abs(g.matrix[0])==Math.abs(g.matrix[3])&&g.matrix[1]!=0&&Math.abs(g.matrix[1])==Math.abs(g.matrix[2])){var k=Math.acos(g.matrix[0])*180/Math.PI;k=(g.matrix[1]<0?360-k:k);g.order="rt";g.rotateA=k;g.rotateX=g.rotateY=0;g.translateX=g.matrix[4];g.translateY=g.matrix[5]}return g}a.each(["fill","stroke"],function(h,g){var f=g.charAt(0).toUpperCase()+g.substr(1);a.fx.step["svg"+f]=a.fx.step["svg-"+g]=function(k){if(!k.set){k.start=a.svg._getColour(k.elem,g);var j=(k.end=="none");k.end=(j?a.svg._getColour(k.elem.parentNode,g):a.svg._getRGB(k.end));k.end[3]=j;a(k.elem).css(g,"");k.set=true}var i=k.elem.attributes.getNamedItem(g);var l="rgb("+[Math.min(Math.max(parseInt((k.pos*(k.end[0]-k.start[0]))+k.start[0],10),0),255),Math.min(Math.max(parseInt((k.pos*(k.end[1]-k.start[1]))+k.start[1],10),0),255),Math.min(Math.max(parseInt((k.pos*(k.end[2]-k.start[2]))+k.start[2],10),0),255)].join(",")+")";l=(k.end[3]&&k.state==1?"none":l);(i?i.value=l:k.elem.setAttribute(g,l))}});a.svg._getColour=function(g,f){g=a(g);var h;do{h=g.attr(f)||g.css(f);if((h!=""&&h!="none")||g.hasClass(a.svg.markerClassName)){break}}while(g=g.parent());return a.svg._getRGB(h)};a.svg._getRGB=function(g){var f;if(g&&g.constructor==Array){return(g.length==3||g.length==4?g:d.none)}if(f=/^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/.exec(g)){return[parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)]}if(f=/^rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)$/.exec(g)){return[parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55]}if(f=/^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(g)){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]}if(f=/^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/.exec(g)){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]}return d[a.trim(g).toLowerCase()]||d.none};var d={"":[255,255,255,1],none:[255,255,255,1],aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],grey:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}})(jQuery);
/*!
Deck JS - deck.svg
Copyright (c) 2012-2014 Rémi Emonet, as a major refactor from an early version from Rémi Barraquand.
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module provides a support for managed svg inclusion (allowing proper DOM access subsequently for animations, etc.).
*/

(function($, deck, undefined) {
    var $d = $(document);
    var may = function(f) {return f ? f : function() {}};

    $.extend(true, $[deck].defaults, {
        classes: {
            svgPlaceholder: 'deck-svg'
        },
	      selectors: {
            svgObject: "object[type='deckjs/svg'], div.svg-object",
            svgObjectDisable: {
                idrewrite: ".no-idrewrite",
                stylerewrite: ".no-stylerewrite"
            }
        },
        alert: {
            missingSVG: true
        }
    });

    function walk(node, fn) {
        if (node) do {
            if (node.nodeType === 1) {
                fn.call(node);
                walk(node.firstChild, fn);
            }
        } while (node = node.nextSibling);
    }
    var svgPatcher = {
        styleToAttributes: function(root, svgfile) {
            walk(root, function() {
                var $n = $(this);
                if ($n.attr("style")) {
                    $($n.attr("style").trim().split(/ *; */)).each(function(index, style) {
                        if (style && style.substring(0,1) != "-") {
                            var s = style.trim().split(/ *: */);
                            $n.attr(s[0], s[1]);
                        }
                    });
                }
                $n.attr("style", null);
            })
        },
        referencingAttributes: ["clip-path", "color-profile", "fill", "filter", "marker-start", "marker-mid", "marker-end", "mask", "stroke"],
        nextId: 1,
        generateId: function(oldId) {
            var id = "uniquesvg"+svgPatcher.nextId;
            svgPatcher.nextId++;
            return id;
        },
        makeReferencedIdsUnique: function(root, svgfile, continuation) {
            var andThen = continuation || function(){}
            var byId = {};
            var referencersIds = {};
            var pushAdd = function(k, o) {
                if (referencersIds[k]) {
                    referencersIds[k].push(o);
                } else {
                    referencersIds[k] = [ o ];
                }
            };
            // gather all ids and references
            walk(root, function() {
                var that = this;
                var $n = $(this);
                var id = that.id;
                if (id) {
                    byId[id] = this;
                }
                $(svgPatcher.referencingAttributes).each(function(i,attr) {
                    var val = $n.attr(attr);
                    if (val) {
                        var groups = val.trim().match(/^url\(#(.+?)\)$/)
                        if (groups) pushAdd(groups[1], {o:that, a:attr})
                    }
                });
                var xlink = $n.attr("xlink:href");
                if (xlink) {
                    var groups = xlink.trim().match(/^#(.+?)$/)
                    if (groups) pushAdd(groups[1], {o:that, a:"xlink:href"})
                }
            })
            // patch used ids and references (keep unreferenced ids fixed (to allow for identification from the editor to the css, even if classes should be preferred))
            var newIds = {};
            for (id in referencersIds) {
                var newId = svgPatcher.generateId(id);
                byId[id].id = newId;
                newIds[id] = newId;
            }

            setTimeout( // to help firefox in having updated ids
                (function() {
                for (id in referencersIds) {
                    var newId = newIds[id];
                    var refs = referencersIds[id];
                    $(refs).each(function(i,pair){
                        var prev = $(pair.o).attr(pair.a);
                        if (pair.a == "xlink:href") {
                            pair.o.setAttributeNS($.svg.xlinkNS, "href", prev.replace("#" + id, "#" + newId));
                        } else {
                            $(pair.o).attr(pair.a, prev.replace("#" + id, "#" + newId));
                        }
                    })
                        }
                    andThen();
                }), 0)

        }
    }


    $d.bind('deck.beforeInit', function (event) {
        event.lockInit();
        var opts = $[deck]('getOptions');
        var container = $[deck]('getContainer');

        /*
          Load parameters from an Object element
        */
        var loadObjectParams = function(objectElement) {
            var attributes = {};
            $(objectElement).children("param").each(function(index){
                attributes[$(this).attr("name")] = $(this).attr("value");
            });
            $.each(objectElement.attributes, function (index, attr) {
                if ("data-" == attr.name.substr(0, 5)) {
                    attributes[attr.name.substr(5)] = attr.value;
                }
            });
            return attributes;
        }
        
        /*
          Return true if default params are set.
        */
        var validateParams = function(params) {
            return params['src'];// && params['width'] && params['height'];// && params['animator'];
        }
        
        /*
          Create SVG placeholder
        */
        var createSVG = function(object, attributes) {
            var $canvas, $control, $next, $reload, $placeholder;
            /* Create svg canvas */
            $canvas = $("<span />").attr({
                'id':  $(object).attr('id'),
                'data-src': attributes['src'],
                'class': opts.classes.svgPlaceholder + " " + $(object).attr('class')
            }).css({
                'height': attributes['height'],
                'width': attributes['width']
            });
            return $canvas;
        }

        
        /* Go through all toplevel slides */
        $($[deck]('getTopLevelSlides')).each( function(i, $slide) {

            /* Find all the object of type deckjs/svg */
            $slide.find(opts.selectors.svgObject).each(function(index, obj) {
                /* Load attributes and validate them */
                var attributes = loadObjectParams(obj);
                if (!validateParams(attributes) ) {
                    throw "Error while initializing "+$(obj).attr('id')+", please ensure you have setup the required parameters."
                    return false;
                }
                
                /* Create SVG placeholder */
                var SVG = createSVG(obj, attributes);
                $(obj).replaceWith(SVG);
                
                // Finaly load the SVG data
                event.lockInit();

                var notDisabled = function(k) {
                    var kk = 'no'+k;
                    var disabled = (attributes[kk] && attributes[kk] == "true") || $(obj).filter(opts.selectors.svgObjectDisable[k]).length > 0
                    return !disabled;
                };

                SVG.svg({
                    loadURL: attributes['src'],
                    onLoad: function($svg, w, h) {
                        var aa = $($svg.root());
                        aa.attr('width', '100%');
                        aa.attr('height', '100%');
                        if (aa.attr('viewBox') !== undefined) {
                            event.releaseInit();
                        } else {
                            // jquery cannot see the viewBox, so we have to create/propagate it

                            if (w===undefined || h===undefined) {
                                // could not load...
                                if (opts.alert.missingSVG) alert(
                                    "There seem to be a problem with the loading of\n   '"+attributes['src'] + "'\n"
                                        +"\nMaybe the file does not exist?"
                                        +"\nOr maybe"
                                        +"\n - it has no w or h attribute?"
                                        +"\n - you're using a file that is within a symbolic-link folder?"
                                        +"\n - you're using chrome with local files?"
                                        +"\n   ⇒ try to restart chrome with '--disable-web-security'");
                                event.releaseInit();
                            } else {
                                var vb = $svg.root().getAttribute('viewBox');
                                if (vb === null) {
                                    // no viewBox attribute, use the w and h to force the viewBox
                                    var px = function (str) {
                                        // see https://www.w3.org/TR/css3-values/#absolute-lengths
                                        var units = {'': 1,
                                                     px: 1,
                                                     cm: 96/2.54,
                                                     mm: 96/10/2.54,
                                                     Q:  96/40/2.54,
                                                     in: 96,
                                                     pc: 96/6,
                                                     pt: 96/72,
                                                    };
                                        var parts = str.split(/^([\d.]+)/).slice(1);
                                        return parseFloat(parts[0]) * units[parts[1]];
                                    }
                                    vb = "0 0 " + px(w) + " " + px(h);
                                }
                                $svg.root().setAttribute("viewBox", vb);
                                aa.attr("svgViewBox", vb);
                                if (attributes['stretch'] == 'true') $svg.root().setAttribute('preserveAspectRatio', "none");
                                if (notDisabled('stylerewrite')) {
                                    svgPatcher.styleToAttributes($svg.root(), attributes['src']);
                                }
                                if (notDisabled('idrewrite')) {
                                    svgPatcher.makeReferencedIdsUnique($svg.root(), attributes['src'], function() {
                                        event.releaseInit();
                                    });
                                } else {
                                    event.releaseInit();
                                }
                            }
                        }
                    }
                });
            });
        });
        event.releaseInit();
    })
    
    
})(jQuery, 'deck');


/*!
Deck JS - deck.metadata
Copyright (c) 2014 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module automatically takes each meta tag (e.g., author, date, ...) and the page title.
It then replaces the content of all elements having a var-... class by the value of the metadata.

This is very useful for example to repeat the date, title, venue name, author name, etc… in a title page, in the footer and in a closing page (without copy pasting).
*/

(function($, deck, undefined) {
    $.extend(true, $.deck.defaults, {
        selectors: {
            metadataPrefix: '.var-',
            metadataBrSuffix: '-br',
            metadataFullSuffix: '-full'
        },
        metadataSeparator: /(&nbsp;| )/gi   /* we need to handle '&nbsp;' and ' ' because in the title, ' ' becomes '&nbsp;' */
    });

    var $d = $(document);
    $d.bind('deck.init', function() {
        var o = $.deck('getOptions');
        var app = function(_sel, v) {
            var sel = o.selectors.metadataPrefix + _sel;
            var sep = o.metadataSeparator;
            $(sel).html(v.replace(sep, ""));
            $(sel+o.selectors.metadataFullSuffix).html(v);
            $(sel+o.selectors.metadataBrSuffix).html(v.replace(sep, "<br/>"));
        };
        app("title", $("html>head>title").html());
        $("html>head>meta[name]").each(function(i,e) {
            app($(e).attr('name'), $(e).attr('content'))
        });
    });
})(jQuery, 'deck');

/*!
Deck JS - deck.attribution
Copyright (c) 2014 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module automatically adds some text and a link for elements having a "data-attribution" attributes.
*/

(function($, deck, undefined) {
    $.extend(true, $.deck.defaults, {
        classes: {
            attributionWrapper: 'attribution-wrap',
            attributionLink: 'attribution-link'
        },
        dataAttribution: "data-attribution",
        dataAttributionContent: "data-attribution-content",
        dataAttributionClass: "data-attribution-class"
    });

    var $d = $(document);
    $d.bind('deck.init', function() {
        var o = $.deck('getOptions');
        $('*['+o.dataAttribution+']').each(function(i, el){
            var c = $(el).attr(o.dataAttributionContent);
            var cc = $(el).attr(o.dataAttributionClass);
            var a = $(el).attr(o.dataAttribution);
            var w = $("<div>");
            w.addClass(o.classes.attributionWrapper);
            var link = $("<a>");
            link.addClass(o.classes.attributionLink);
            if (!! cc) link.addClass(cc);
            link.attr("href", a);
            link.attr("target", "_blank");
            if (!! c) {
                link.html(c);
            } else {
                link.html(a);
            }
            $(el).after(w);
            $(w).append(link);
        });
    });
})(jQuery, 'deck');

/*!
Deck JS - deck.container-styling
Copyright (c) 2014 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module automatically adds/removes to the container the class specified in data-container-class (for toplevel slides).

This extension relies on the events extension.
*/

(function($, deck, undefined) {
    var $d = $(document);
    $d.bind('deck.init', function() {
        $('*[data-container-class]').each(function(i, el) {
            var toRemove = ""; // one 'toRemove' per element (that's why we do .each
            $(el).bind('deck.becameCurrent', function(_, direction) {
                var target = $(_.target);
                var toAdd = target.attr('data-container-class');
                $[deck]('getContainer').addClass(toAdd);
                toRemove = toAdd;
            }).bind('deck.lostCurrent', function(_, direction) {
                $[deck]('getContainer').removeClass(toRemove);
                toRemove = "";
            });
        });
    });
    $(document).bind('deck.init', function() { // force trigger even if no #slide-... is provided
        var current = $[deck]('getSlide')
        var icur = 0
        for (; icur < $[deck]('getSlides').length; icur++) {
            if ($[deck]('getSlides')[icur] == current) break;                
        }
        $(document).trigger("deck.change", [icur, icur]);
    });
})(jQuery, 'deck');

/*!
Deck JS - deck.timekeeper
Copyright (c) 2013-2016 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module provides a support for displaying current time, time from start and logging the time spent on each slide etc.
It also injects some default html for it if none is found (and styles it for the presenter/clone view).
*/

(function($, deck, undefined) {
    var $d = $(document);

    $.extend(true, $[deck].defaults, {	
        selectors: {
            timekeeper: ".timekeeper", /* inject if this is not present */ // TODO inject
            timekeeperTime: ".timekeeper-time",
            timekeeperRelativeTime: ".timekeeper-relative-time",
            timekeeperLocalRelativeTime: ".timekeeper-local-relative-time",
            timekeeperLogs: ".timekeeper-logs",
            timekeeperLogsPre: ".timekeeper-logs pre",
            timekeeperLogsToggle: ".timekeeper-logs-toggle",
            timekeeperBang: ".timekeeper-bang",
            timekeeperClear: ".timekeeper-clear"
        },
        classes: {
            timekeeperNotification: "timekeeper-notification",
            timekeeperLogsVisible: "timekeeper-logs-visible"
        },
        snippets: {
            timekeeper: true
        },
        alert: {
            localStorageUnsupported: true
        },
        localStorage: {
            timekeeperArchivesMaxSize: 500*1000,
            timekeeperArchives: 'deckjs-timekeeper-archives',
            timekeeperLogs: 'deckjs-timekeeper-logs',
            timekeeperBase: 'deckjs-timekeeper-base',
            timekeeperLocalBase: 'deckjs-timekeeper-local-base'
        },
        timekeeperPeriod: 1000,
        timekeeperNotificationPeriod: 100,
        keys: {
            timekeeper: [27, 75] // escape, k (combine with SHIFT to reset the counter (when starting presenting))
        }
    });

    $d.bind('deck.init', function() {
        var opts = $[deck]('getOptions');
        var container = $[deck]('getContainer');

        // sligthly edited from
        var selectText = function(text) {
            var doc = document
            , range, selection
            ;
            if (doc.body.createTextRange) { //ms
                range = doc.body.createTextRange();
                range.moveToElementText(text);
                range.select();
            } else if (window.getSelection) { //all others
                selection = window.getSelection();
                range = doc.createRange();
                range.selectNodeContents(text);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }

        if (opts.snippets.timekeeper) {
            $('.timekeeper.auto-inserted, .timekeeper-logs.auto-inserted').remove();
            var d = function() {return $('<div/>');}
            var divTK = d().addClass("timekeeper timekeeper-logs-toggle auto-inserted");
            divTK.append(d().addClass("timekeeper-local-relative-time"));
            divTK.append(d().addClass("timekeeper-time"));
            divTK.append(d().addClass("timekeeper-relative-time"));
            divTK.append(d().addClass("timekeeper-clear"));
            divTK.append(d().addClass("timekeeper-bang"));
            divTK.appendTo(container);
            var divLog = d().addClass("timekeeper-logs auto-inserted");
            var pre = $('<pre/>').appendTo(divLog);
            divLog.append(d().addClass("button").click(function() { doBang() }).html("Bang!"));
            divLog.append(d().addClass("button").click(function() { selectText(pre.get(0)) }).html("select all"));
            divLog.append(d().addClass("button").click(function() { clearStorage() }).html("Clear").css({color:'#f44', marginLeft: '2em'}));
            divLog.append(d().addClass("button").addClass("timekeeper-logs-toggle").css({position:'float', float:'right', color:'#0f0'}).html("X"));
            divLog.appendTo(container);
        }

        if (!window.localStorage && opts.alert.localStorageUnsupported) { alert(
            "LocalStorage is unsupported in your browser, timing features are disabled (timekeeper extension).");
            return;
        }

        var pad = function(base, right) {
            var s = ""+right;
            if (s.length >= base.length) return s;
            else return base.substring(0, base.length - s.length) + s
        }
        var formatTime = function(t, daily) {
            daily = daily || false;
            var min = parseInt(t / 1000 / 60);
            var sec = parseInt(t / 1000 - 60 * min);
            if (min > 60) {
                var hours = parseInt(t / 1000 / 60 / 60);
                min = parseInt(t / 1000 / 60 - 60 * hours);
                if (daily) {
                    hours = t.getHours();
                }
                return pad("00", hours) +":"+ pad("00", min) + ":" + pad("00", sec);
            } else {
                return pad("00", min) + ":" + pad("00", sec);
            }
        }
        var formatDate = function(t) {
            var y = t.getFullYear();
            var m = t.getMonth() + 1;
            var d = t.getDate();
            return y + "-" + pad("00", m) + "-" + pad("00", d);
        }
        var clearStorage = function(what) {
            { // archive
                var currentArchives = localStorage.getItem(opts.localStorage.timekeeperArchives);
                var currentLogs = localStorage.getItem(opts.localStorage.timekeeperLogs);
                currentArchives = currentLogs + "\n\n" + currentArchives;
                currentArchives = currentArchives.substr(0, opts.localStorage.timekeeperArchivesMaxSize);
                localStorage.setItem(opts.localStorage.timekeeperArchives, currentArchives);
            }
            // clear
            localStorage.setItem(opts.localStorage.timekeeperLogs, null);
            log("CLEARED BY USER");
            localStorage.setItem(opts.localStorage.timekeeperBase, JSON.stringify(new Date()));
            $(opts.selectors.timekeeperClear).addClass(opts.classes.timekeeperNotification);
            setTimeout(function() {
                $(opts.selectors.timekeeperClear).removeClass(opts.classes.timekeeperNotification);
            }, opts.timekeeperNotificationPeriod);
        }
        var reset = function() {
            localStorage.setItem(opts.localStorage.timekeeperLocalBase, JSON.stringify(new Date()));
        }
        var getDateOrSet = function(k, or) {
            var res = localStorage.getItem(k);
            if (res == null) {
                res = JSON.stringify(or);
                localStorage.setItem(k, res);
            } else {
                res = new Date(JSON.parse(res));
            }
            return res;
        }
        var log = function(what) {
            var now = new Date();
            var dateString = formatDate(now);
            var timeString = formatTime(now, true);
            var localBase = getDateOrSet(opts.localStorage.timekeeperLocalBase, now);
            var base = getDateOrSet(opts.localStorage.timekeeperBase, now);
            var db = (now - localBase)/1000;
            var dcb = (now - base)/1000;
            var dbtime = formatTime(now - localBase);
            var dcbtime = formatTime(now - base);
            var log = dateString + " " + timeString + " " + what + " " + dcb + " " + db + " " + dcbtime + " " + dbtime;
            
            var data = localStorage.getItem(opts.localStorage.timekeeperLogs);
            data = log + "\n" + data;
            localStorage.setItem(opts.localStorage.timekeeperLogs, data);
            $(opts.selectors.timekeeperLogsPre).html(data);
        }

        $[deck]('extend', 'addToTimekeeperLog', log);


        var saveCurrent = -1;
        $(document).bind('deck.change', function(e, from, to) {
            log(from + " " + to);
            saveCurrent = to;
        });
        
        // Bind key event to add a marker in the logs
        var $d = $(document);
        var doBang = function() {
            log("BANG " + saveCurrent);
            $(opts.selectors.timekeeperBang).addClass(opts.classes.timekeeperNotification);
            setTimeout(function() {
                $(opts.selectors.timekeeperBang).removeClass(opts.classes.timekeeperNotification);
            }, opts.timekeeperNotificationPeriod);
            reset();
        }
        $d.unbind('keydown.logbang').bind('keydown.logbang', function(e) {
            if (e.ctrlKey) return;
            var K = opts.keys.timekeeper;
            if (e.which === K || $.inArray(e.which, K) > -1) {
                doBang();
                if (e.shiftKey) {
                    clearStorage();
                }
            }
        });
        $(opts.selectors.timekeeperLogsToggle).unbind('click.timekeeper').bind('click.timekeeper', function(e) {
            $(opts.selectors.timekeeperLogs).toggleClass(opts.classes.timekeeperLogsVisible);
        });


        // Refresh display
        var period = opts.timekeeperPeriod;
        setInterval(function() {
            var today = new Date();
            today.setMinutes(0);
            today.setHours(0);
            today.setSeconds(0);
            var now = new Date();
            $(opts.selectors.timekeeperTime).html(formatTime(now - today));
            var v = localStorage.getItem(opts.localStorage.timekeeperBase);
            if (v != null) {
                var t = now - new Date(JSON.parse(v));
                var time = formatTime(t);
                $(opts.selectors.timekeeperRelativeTime).html(time);
            }
            var v2 = localStorage.getItem(opts.localStorage.timekeeperLocalBase);
            if (v2 != null) {
                var t = now - new Date(JSON.parse(v2));
                var time = formatTime(t);
                $(opts.selectors.timekeeperLocalRelativeTime).html(time);
            }
        }, period);
    
    });

})(jQuery, 'deck');


!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define("hljs",[],function(){return window.hljs}))}(function(e){function t(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function r(e){return e.nodeName.toLowerCase()}function a(e,t){var r=e&&e.exec(t);return r&&0==r.index}function n(e){return/^(no-?highlight|plain|text)$/i.test(e)}function i(e){var t,r,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",r=/\blang(?:uage)?-([\w-]+)\b/i.exec(i))return y(r[1])?r[1]:"no-highlight";for(i=i.split(/\s+/),t=0,a=i.length;a>t;t++)if(y(i[t])||n(i[t]))return i[t]}function s(e,t){var r,a={};for(r in e)a[r]=e[r];if(t)for(r in t)a[r]=t[r];return a}function c(e){var t=[];return function a(e,n){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?n+=i.nodeValue.length:1==i.nodeType&&(t.push({event:"start",offset:n,node:i}),n=a(i,n),r(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:n,node:i}));return n}(e,0),t}function o(e,a,n){function i(){return e.length&&a.length?e[0].offset!=a[0].offset?e[0].offset<a[0].offset?e:a:"start"==a[0].event?e:a:e.length?e:a}function s(e){function a(e){return" "+e.nodeName+'="'+t(e.value)+'"'}u+="<"+r(e)+Array.prototype.map.call(e.attributes,a).join("")+">"}function c(e){u+="</"+r(e)+">"}function o(e){("start"==e.event?s:c)(e.node)}for(var l=0,u="",d=[];e.length||a.length;){var b=i();if(u+=t(n.substr(l,b[0].offset-l)),l=b[0].offset,b==e){d.reverse().forEach(c);do o(b.splice(0,1)[0]),b=i();while(b==e&&b.length&&b[0].offset==l);d.reverse().forEach(s)}else"start"==b[0].event?d.push(b[0].node):d.pop(),o(b.splice(0,1)[0])}return u+t(n.substr(l))}function l(e){function t(e){return e&&e.source||e}function r(r,a){return new RegExp(t(r),"m"+(e.cI?"i":"")+(a?"g":""))}function a(n,i){if(!n.compiled){if(n.compiled=!0,n.k=n.k||n.bK,n.k){var c={},o=function(t,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");c[r[0]]=[t,r[1]?Number(r[1]):1]})};"string"==typeof n.k?o("keyword",n.k):Object.keys(n.k).forEach(function(e){o(e,n.k[e])}),n.k=c}n.lR=r(n.l||/\b\w+\b/,!0),i&&(n.bK&&(n.b="\\b("+n.bK.split(" ").join("|")+")\\b"),n.b||(n.b=/\B|\b/),n.bR=r(n.b),n.e||n.eW||(n.e=/\B|\b/),n.e&&(n.eR=r(n.e)),n.tE=t(n.e)||"",n.eW&&i.tE&&(n.tE+=(n.e?"|":"")+i.tE)),n.i&&(n.iR=r(n.i)),void 0===n.r&&(n.r=1),n.c||(n.c=[]);var l=[];n.c.forEach(function(e){e.v?e.v.forEach(function(t){l.push(s(e,t))}):l.push("self"==e?n:e)}),n.c=l,n.c.forEach(function(e){a(e,n)}),n.starts&&a(n.starts,i);var u=n.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([n.tE,n.i]).map(t).filter(Boolean);n.t=u.length?r(u.join("|"),!0):{exec:function(){return null}}}}a(e)}function u(e,r,n,i){function s(e,t){for(var r=0;r<t.c.length;r++)if(a(t.c[r].bR,e))return t.c[r]}function c(e,t){if(a(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?c(e.parent,t):void 0}function o(e,t){return!n&&a(t.iR,e)}function b(e,t){var r=v.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function p(e,t,r,a){var n=a?"":w.classPrefix,i='<span class="'+n,s=r?"":"</span>";return i+=e+'">',i+t+s}function m(){if(!x.k)return t(E);var e="",r=0;x.lR.lastIndex=0;for(var a=x.lR.exec(E);a;){e+=t(E.substr(r,a.index-r));var n=b(x,a);n?(B+=n[1],e+=p(n[0],t(a[0]))):e+=t(a[0]),r=x.lR.lastIndex,a=x.lR.exec(E)}return e+t(E.substr(r))}function f(){var e="string"==typeof x.sL;if(e&&!N[x.sL])return t(E);var r=e?u(x.sL,E,!0,C[x.sL]):d(E,x.sL.length?x.sL:void 0);return x.r>0&&(B+=r.r),e&&(C[x.sL]=r.top),p(r.language,r.value,!1,!0)}function g(){return void 0!==x.sL?f():m()}function h(e,r){var a=e.cN?p(e.cN,"",!0):"";e.rB?(M+=a,E=""):e.eB?(M+=t(r)+a,E=""):(M+=a,E=r),x=Object.create(e,{parent:{value:x}})}function _(e,r){if(E+=e,void 0===r)return M+=g(),0;var a=s(r,x);if(a)return M+=g(),h(a,r),a.rB?0:r.length;var n=c(x,r);if(n){var i=x;i.rE||i.eE||(E+=r),M+=g();do x.cN&&(M+="</span>"),B+=x.r,x=x.parent;while(x!=n.parent);return i.eE&&(M+=t(r)),E="",n.starts&&h(n.starts,""),i.rE?0:r.length}if(o(r,x))throw new Error('Illegal lexeme "'+r+'" for mode "'+(x.cN||"<unnamed>")+'"');return E+=r,r.length||1}var v=y(e);if(!v)throw new Error('Unknown language: "'+e+'"');l(v);var k,x=i||v,C={},M="";for(k=x;k!=v;k=k.parent)k.cN&&(M=p(k.cN,"",!0)+M);var E="",B=0;try{for(var $,z,L=0;;){if(x.t.lastIndex=L,$=x.t.exec(r),!$)break;z=_(r.substr(L,$.index-L),$[0]),L=$.index+z}for(_(r.substr(L)),k=x;k.parent;k=k.parent)k.cN&&(M+="</span>");return{r:B,value:M,language:e,top:x}}catch(q){if(-1!=q.message.indexOf("Illegal"))return{r:0,value:t(r)};throw q}}function d(e,r){r=r||w.languages||Object.keys(N);var a={r:0,value:t(e)},n=a;return r.forEach(function(t){if(y(t)){var r=u(t,e,!1);r.language=t,r.r>n.r&&(n=r),r.r>a.r&&(n=a,a=r)}}),n.language&&(a.second_best=n),a}function b(e){return w.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,w.tabReplace)})),w.useBR&&(e=e.replace(/\n/g,"<br>")),e}function p(e,t,r){var a=t?k[t]:r,n=[e.trim()];return e.match(/\bhljs\b/)||n.push("hljs"),-1===e.indexOf(a)&&n.push(a),n.join(" ").trim()}function m(e){var t=i(e);if(!n(t)){var r;w.useBR?(r=document.createElementNS("http://www.w3.org/1999/xhtml","div"),r.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):r=e;var a=r.textContent,s=t?u(t,a,!0):d(a),l=c(r);if(l.length){var m=document.createElementNS("http://www.w3.org/1999/xhtml","div");m.innerHTML=s.value,s.value=o(l,c(m),a)}s.value=b(s.value),e.innerHTML=s.value,e.className=p(e.className,t,s.language),e.result={language:s.language,re:s.r},s.second_best&&(e.second_best={language:s.second_best.language,re:s.second_best.r})}}function f(e){w=s(w,e)}function g(){if(!g.called){g.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,m)}}function h(){addEventListener("DOMContentLoaded",g,!1),addEventListener("load",g,!1)}function _(t,r){var a=N[t]=r(e);a.aliases&&a.aliases.forEach(function(e){k[e]=t})}function v(){return Object.keys(N)}function y(e){return e=e.toLowerCase(),N[e]||N[k[e]]}var w={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},N={},k={};return e.highlight=u,e.highlightAuto=d,e.fixMarkup=b,e.highlightBlock=m,e.configure=f,e.initHighlighting=g,e.initHighlightingOnLoad=h,e.registerLanguage=_,e.listLanguages=v,e.getLanguage=y,e.inherit=s,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.C=function(t,r,a){var n=e.inherit({cN:"comment",b:t,e:r,c:[]},a||{});return n.c.push(e.PWM),n.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),n},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.registerLanguage("apache",function(e){var t={cN:"number",b:"[\\$%]\\d+"};return{aliases:["apacheconf"],cI:!0,c:[e.HCM,{cN:"tag",b:"</?",e:">"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",t]},t,e.QSM]}}],i:/\S/}}),e.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},a={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,e.NM,r,a,t]}}),e.registerLanguage("coffeescript",function(e){var t={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",built_in:"npm require console print module global window document"},r="[A-Za-z$_][0-9A-Za-z$_]*",a={cN:"subst",b:/#\{/,e:/}/,k:t},n=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,a]},{b:/"/,e:/"/,c:[e.BE,a]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[a,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{cN:"property",b:"@"+r},{b:"`",e:"`",eB:!0,eE:!0,sL:"javascript"}];a.c=n;var i=e.inherit(e.TM,{b:r}),s="(\\(.*\\))?\\s*\\B[-=]>",c={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:t,c:["self"].concat(n)}]};return{aliases:["coffee","cson","iced"],k:t,i:/\/\*/,c:n.concat([e.C("###","###"),e.HCM,{cN:"function",b:"^\\s*"+r+"\\s*=\\s*"+s,e:"[-=]>",rB:!0,c:[i,c]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:s,e:"[-=]>",rB:!0,c:[c]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[i]},i]},{cN:"attribute",b:r+":",e:":",rB:!0,rE:!0,r:0}])}}),e.registerLanguage("cpp",function(e){var t={cN:"keyword",b:"\\b[a-z\\d_]*_t\\b"},r={cN:"string",v:[e.inherit(e.QSM,{b:'((u8?|U)|L)?"'}),{b:'(u8?|U)?R"',e:'"',c:[e.BE]},{b:"'\\\\?.",e:"'",i:"."}]},a={cN:"number",v:[{b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},{b:e.CNR}]},n={cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line pragma ifdef ifndef",c:[{b:/\\\n/,r:0},{bK:"include",e:"$",c:[r,{cN:"string",b:"<",e:">",i:"\\n"}]},r,a,e.CLCM,e.CBCM]},i=e.IR+"\\s*\\(",s={keyword:"int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",built_in:"std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf",literal:"true false nullptr NULL"};return{aliases:["c","cc","h","c++","h++","hpp"],k:s,i:"</",c:[t,e.CLCM,e.CBCM,a,r,n,{b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:s,c:["self",t]},{b:e.IR+"::",k:s},{bK:"new throw return else",r:0},{cN:"function",b:"("+e.IR+"[\\*&\\s]+)+"+i,rB:!0,e:/[{;=]/,eE:!0,k:s,i:/[^\w\s\*&]/,c:[{b:i,rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:s,r:0,c:[e.CLCM,e.CBCM,r,a]},e.CLCM,e.CBCM,n]}]}}),e.registerLanguage("cs",function(e){var t="abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",r=e.IR+"(<"+e.IR+">)?";return{aliases:["csharp"],k:t,i:/::/,c:[e.C("///","$",{rB:!0,c:[{cN:"xmlDocTag",v:[{b:"///",r:0},{b:"<!--|-->"},{b:"</?",e:">"}]}]}),e.CLCM,e.CBCM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},e.ASM,e.QSM,e.CNM,{bK:"class interface",e:/[{;=]/,i:/[^\s:]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:"namespace",e:/[{;=]/,i:/[^\s:]/,c:[{cN:"title",b:"[a-zA-Z](\\.?\\w)*",r:0},e.CLCM,e.CBCM]},{bK:"new return throw await",r:0},{cN:"function",b:"("+r+"\\s+)+"+e.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:t,c:[{b:e.IR+"\\s*\\(",rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]}]}}),e.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",r={cN:"function",b:t+"\\(",rB:!0,eE:!0,e:"\\("},a={cN:"rule",b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{cN:"value",eW:!0,eE:!0,c:[r,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,a,{cN:"id",b:/\#[A-Za-z0-9_-]+/},{cN:"class",b:/\.[A-Za-z0-9_-]+/},{cN:"attr_selector",b:/\[/,e:/\]/,i:"$"},{cN:"pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[r,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:t,r:0},{cN:"rules",b:"{",e:"}",i:/\S/,c:[e.CBCM,a]}]}}),e.registerLanguage("diff",function(e){return{aliases:["patch"],c:[{cN:"chunk",r:10,v:[{b:/^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"header",v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\-\-\-/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+\+\+/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}}),e.registerLanguage("http",function(e){return{aliases:["https"],i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}}),e.registerLanguage("ini",function(e){var t={cN:"string",c:[e.BE],v:[{b:"'''",e:"'''",r:10},{b:'"""',e:'"""',r:10},{b:'"',e:'"'},{b:"'",e:"'"}]};return{aliases:["toml"],cI:!0,i:/\S/,c:[e.C(";","$"),e.HCM,{cN:"title",b:/^\s*\[+/,e:/\]+/},{cN:"setting",b:/^[a-z0-9\[\]_-]+\s*=\s*/,e:"$",c:[{cN:"value",eW:!0,k:"on off true false yes no",c:[{cN:"variable",v:[{b:/\$[\w\d"][\w\d_]*/},{b:/\$\{(.*?)}/}]},t,{cN:"number",b:/([\+\-]+)?[\d]+_[\d_]+/},e.NM],r:0}]}]}}),e.registerLanguage("java",function(e){var t=e.UIR+"(<"+e.UIR+">)?",r="false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",a="\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",n={cN:"number",b:a,r:0};return{aliases:["jsp"],k:r,i:/<\/|#/,c:[e.C("/\\*\\*","\\*/",{r:0,c:[{cN:"doctag",b:"@[A-Za-z]+"}]}),e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:"class",bK:"class interface",e:/[{;=]/,eE:!0,k:"class interface",i:/[:"\[\]]/,c:[{bK:"extends implements"},e.UTM]},{bK:"new throw return else",r:0},{cN:"function",b:"("+t+"\\s+)+"+e.UIR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:r,c:[{b:e.UIR+"\\s*\\(",rB:!0,r:0,c:[e.UTM]},{cN:"params",b:/\(/,e:/\)/,k:r,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},n,{cN:"annotation",b:"@[A-Za-z]+"}]}}),e.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"pi",r:10,b:/^\s*['"]use (strict|asm)['"]/},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>\s*[);\]]/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:[e.CLCM,e.CBCM]}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},{bK:"import",e:"[;$]",k:"import from as",c:[e.ASM,e.QSM]},{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]}],i:/#/}}),e.registerLanguage("json",function(e){var t={literal:"true false null"},r=[e.QSM,e.CNM],a={cN:"value",e:",",eW:!0,eE:!0,c:r,k:t},n={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:a}],i:"\\S"},i={b:"\\[",e:"\\]",c:[e.inherit(a,{cN:null})],i:"\\S"};return r.splice(r.length,0,n,i),{c:r,k:t,i:"\\S"}}),e.registerLanguage("makefile",function(e){var t={cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]};return{aliases:["mk","mak"],c:[e.HCM,{b:/^\w+\s*\W*=/,rB:!0,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:!0,starts:{e:/$/,r:0,c:[t]}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,r:0,c:[e.QSM,t]}]}}),e.registerLanguage("xml",function(e){var t="[A-Za-z0-9\\._:-]+",r={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php"},a={eW:!0,i:/</,r:0,c:[r,{cN:"attribute",b:t,r:0},{b:"=",r:0,c:[{cN:"value",c:[r],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[a],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[a],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars"]}},r,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},a]}]}}),e.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]:",eB:!0,eE:!0,starts:{cN:"link_url",e:"$"}}]}]}}),e.registerLanguage("nginx",function(e){var t={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+e.UIR}]},r={eW:!0,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[e.HCM,{cN:"string",c:[e.BE,t],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0,c:[t]},{cN:"regexp",c:[e.BE,t],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},t]};return{aliases:["nginxconf"],c:[e.HCM,{b:e.UIR+"\\s",e:";|{",rB:!0,c:[{cN:"title",b:e.UIR,starts:r}],r:0}],i:"[^\\s\\}]"}}),e.registerLanguage("objectivec",function(e){var t={cN:"built_in",b:"(AV|CA|CF|CG|CI|MK|MP|NS|UI)\\w+"},r={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"},a=/[a-zA-Z@][a-zA-Z0-9_]*/,n="@interface @class @protocol @implementation";return{aliases:["mm","objc","obj-c"],k:r,l:a,i:"</",c:[t,e.CLCM,e.CBCM,e.CNM,e.QSM,{cN:"string",v:[{b:'@"',e:'"',i:"\\n",c:[e.BE]},{b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"}]},{cN:"preprocessor",b:"#",e:"$",c:[{cN:"title",v:[{b:'"',e:'"'},{b:"<",e:">"}]}]},{cN:"class",b:"("+n.split(" ").join("|")+")\\b",e:"({|$)",eE:!0,k:n,l:a,c:[e.UTM]},{cN:"variable",b:"\\."+e.UIR,r:0}]}}),e.registerLanguage("perl",function(e){var t="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",r={cN:"subst",b:"[$@]\\{",e:"\\}",k:t},a={b:"->{",e:"}"},n={cN:"variable",v:[{b:/\$\d/},{b:/[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},{b:/[\$%@][^\s\w{]/,r:0}]},i=[e.BE,r,n],s=[n,e.HCM,e.C("^\\=\\w","\\=cut",{eW:!0}),a,{cN:"string",c:i,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[e.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[e.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"sub",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",r:5},{cN:"operator",b:"-\\w\\b",r:0},{b:"^__DATA__$",e:"^__END__$",sL:"mojolicious",c:[{b:"^@@.*",e:"$",cN:"comment"}]}];return r.c=s,a.c=s,{aliases:["pl"],k:t,c:s}}),e.registerLanguage("php",function(e){var t={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},r={cN:"preprocessor",b:/<\?(php)?|\?>/},a={cN:"string",c:[e.BE,r],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},n={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.CLCM,e.HCM,e.C("/\\*","\\*/",{c:[{cN:"doctag",b:"@[A-Za-z]+"},r]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:/<<<['"]?\w+['"]?$/,e:/^\w+;?$/,c:[e.BE,{cN:"subst",v:[{b:/\$\w+/},{b:/\{\$/,e:/\}/}]}]},r,t,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",t,e.CBCM,a,n]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},a,n]}}),e.registerLanguage("python",function(e){var t={cN:"prompt",b:/^(>>>|\.\.\.) /},r={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[t],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[t],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},e.ASM,e.QSM]},a={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},n={cN:"params",b:/\(/,e:/\)/,c:["self",t,a,r]};return{aliases:["py","gyp"],k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[t,a,r,e.HCM,{v:[{cN:"function",bK:"def",r:10},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n,]/,c:[e.UTM,n]},{cN:"decorator",b:/^[\t ]*@/,e:/$/},{b:/\b(print|exec)\(/}]}}),e.registerLanguage("ruby",function(e){var t="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r="and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",a={cN:"doctag",b:"@[A-Za-z]+"},n={cN:"value",b:"#<",e:">"},i=[e.C("#","$",{c:[a]}),e.C("^\\=begin","^\\=end",{c:[a],r:10}),e.C("^__END__","\\n$")],s={cN:"subst",b:"#\\{",e:"}",k:r},c={cN:"string",c:[e.BE,s],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]},o={cN:"params",b:"\\(",e:"\\)",k:r},l=[c,n,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]}].concat(i)},{cN:"function",bK:"def",e:"$|;",c:[e.inherit(e.TM,{b:t}),o].concat(i)},{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":",c:[c,{b:t}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:[n,{cN:"regexp",c:[e.BE,s],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}].concat(i),r:0}].concat(i);s.c=l,o.c=l;var u="[>?]>",d="[\\w#]+\\(\\w+\\):\\d+:\\d+>",b="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",p=[{b:/^\s*=>/,cN:"status",starts:{e:"$",c:l}},{cN:"prompt",b:"^("+u+"|"+d+"|"+b+")",starts:{e:"$",c:l}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,c:i.concat(p).concat(l)}}),e.registerLanguage("sql",function(e){var t=e.C("--","$");return{cI:!0,i:/[<>{}*]/,c:[{cN:"operator",bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",e:/;/,eW:!0,k:{keyword:"abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes c cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle d data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration e each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract f failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function g general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http i id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists k keep keep_duplicates key keys kill l language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim m main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex n name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding p package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime t table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}}),e});
/*!
Deck JS - deck.highlight
Copyright (c) 2015 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module wraps highlight.js (https://github.com/isagalaev/highlight.js/blob/master/LICENSE).
If one wants to add line numbers, this can be done with css:

      div.deck-container pre code { counter-reset: code-lines; }
      div.deck-container pre code > span { counter-increment: code-lines; }
      div.deck-container pre code > span:before {
          content: counter(code-lines);
          color: lightgrey;
          min-width: 2ch;
          padding-right: 1em;
          display: inline-block;
          text-align: right;
      }
*/

(function($, deck, undefined) {
    $.extend(true, $.deck.defaults, {
        classes: {
        },
    });

    var modesAndAliases = [];

    var highlight = function(slide) {
        var o = $.deck('getOptions');

        $(slide).find('pre>code').each(function(i, e) {
            hljs.highlightBlock(e);
            // wrap each line such that we can easily add line numbers with CSS (see above)
            e.innerHTML = '<span>'+e.innerHTML.replace(/\n/g, '</span>\n<span>')+'</span>';
        });
    };

    var $d = $(document);
    $d.bind('deck.init', function() {
        var o = $.deck('getOptions');
        highlight($(".deck-container"))
    });
})(jQuery, 'deck');

/*!
Deck JS - deck.savedom
Copyright (c) 2017 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds a function (and buttons) to export the current DOM.
The feature is useful in the process of make a single-file presentation.
*/

(function($, deck, undefined) {
    $.extend(true, $.deck.defaults, {
        selectors: {
            savedomOnClick: '.save-dom-button'
        },
        keys: {
            // 'd'
            saveDOM: [68],
        },
        alert: {
            howToInline: true
        }
    });
    var $d = $(document);
    $[deck]('extend', 'saveDOM', function(directDownload) {
        console.log("Save DOM");

        var addSaveLink = function() {
            var scrpt = document.createElement('script');
            scrpt.textContent = 'IS_AN_EXPORTED_DECK = true;';
            document.body.prepend(scrpt);
            var content = '<!DOCTYPE html>\n<html>\n'+document.body.parentElement.innerHTML+'\n</html>';
            scrpt.remove();
            IS_AN_EXPORTED_DECK = undefined;

            var objectURL = URL.createObjectURL(new Blob([content], {type : 'text/html'}));
            var a = document.createElement('a');
            a.classList.add('save-dom-link');
            a.innerText = "GO" ;
            a.download = 'export.html';
            a.href = objectURL;
            a.onclick = function() {
                var opts = $.deck('getOptions');
                if (opts.alert.howToInline) alert(
                    "To make a single-file standalone presentation:"
                        +"\n"
                        +"\n 1) save the download next to your presentation file"
                        +"\n 2) name it for example export.html"
                        +"\n 3) install nodejs and https://github.com/remy/inliner"
                        +"\n 4) invoke the inliner with this command:"
                        +"\n       inliner -n -m export.html > standalone.html"
                        +"\n"
                        +"\n ⇒⇒⇒ 'standalone.html' should now contain everything,"
                        +"\n                       you can move where you want.");
                setTimeout(function() {
                    a.parentElement.removeChild(a);
                }, 222);
            };
            /*
            var refresh = function() {
                setTimeout(function(){a.parentElement.removeChild(a);}, 800);
                setTimeout(addSaveLink, 1000);
            };*/
            document.body.prepend(a);
            //refresh();
            if (!directDownload) {
                a.click();
            }
        };
        addSaveLink();
    });
    $d.bind('deck.init', function() {
        var o = $.deck('getOptions');
        $(o.selectors.savedomOnClick).click(function(i, el){
            $[deck]('saveDOM');
        });
        $d.unbind('keydown.saveDOM').bind('keydown.saveDOM', function(e) {
            var $opts = $[deck]('getOptions');
            var key = $opts.keys.saveDOM;
            if (e.which === key || $.inArray(e.which, key) > -1) {
                e.preventDefault();
                $[deck]('saveDOM');
            }
        });
        if (window.helpAreaAvailable) { // always add, as a means of discovery
            $.deck('helpAdvertiseKey', 'saveDOM', 'Dump current slides (DOM) to a .html file');
        }
    });
})(jQuery, 'deck');

(function($, deck, undefined) {
  var $deck = $[deck];
  var $d = $(document);
  var canvases;

  var x; // function to transform click events
  var y; // function to transform click events

 var now = function() { return +Date.now(); }

	// Each shape has this interface:
  //
  // canvas: DOM object for the canvas
  // params: {
  //   color: shape color,
  //   diameter: shape diameter
  // }
  //
  // function Shape(canvas, params){
  //   // Begin the shape. This is called when the user clicks.
  //   this.begin = function(event);
  //
  //   // Continue the shape. On mousemove.
  //   this.extend = function(event);
  //
  //   // End the shape. On mouseup.
  //   this.end = function(event);
  //
  //   // Draw the shape.
  //   // Use the given 2dcontext to draw the object.
  //   this.draw = function(context);
  var shapes = {
    line: function(canvas, params){
      var _canvas = canvas;
      this.params = params;
      var _lineJoin = "round";
      var _lineCap = "round";
      
      var clicks = []
      function addClick(x, y, dragging){
        clicks.push({
          x: x,
          y: y,
          dragging: dragging,
          t: now()
        });
      }
      
      // Start drawing this shape.
      this.begin = function(e){
        var mouseX = x(e);
        var mouseY = y(e);
        addClick(mouseX, mouseY);
      };
      
      // The shape is being extended.
      // This is typically due to a mouse drag
      this.extend = function(e){
        var mouseX = x(e);
        var mouseY = y(e);
        addClick(mouseX, mouseY, true);
      }
      
      this.draw = function(context){
        var opts = $deck('getOptions');
        var m = opts.annotate.designSizeMultiplier;

        context.strokeStyle = this.params.color;
        context.lineJoin = _lineJoin;
        context.lineCap = _lineCap;
        context.lineWidth = this.params.diameter;
        context.beginPath();
        for(var i = 0; i < clicks.length; i++){
          if(clicks[i].dragging && i){
            context.moveTo(clicks[i - 1].x, clicks[i - 1].y);
          }
          else{
            context.moveTo(clicks[i].x - 1, clicks[i].y);
          }
          context.lineTo(clicks[i].x, clicks[i].y);
        }
        context.closePath();
        context.stroke();
      }

      this.log = function(l) {
        l("line " + JSON.stringify(params) + " " + JSON.stringify(clicks));
      }
    },
    
    circle: function(canvas, params){
      var _canvas = canvas;
      this.params = params;
      
      var start;
      var end;
      
      this.begin = function(e){
        var mouseX = x(e);
        var mouseY = y(e);
        
        start = {x: mouseX, y: mouseY, t: now()};
        end = start;
      };
      
      this.extend = function(e){
        var mouseX = x(e);
        var mouseY = y(e);
        end = {x: mouseX, y: mouseY, t: now()};
      };
      
      this.draw = function(context){
        if(start){
          context.beginPath();
          var radius = Math.sqrt(
            Math.pow(Math.abs(start.x - end.x), 2) +
            Math.pow(Math.abs(start.y - end.y), 2));
          
          var centerX = start.x; // + (end.x - start.x) / 2;
          var centerY = start.y; // + (end.y - start.y) / 2;
          
          context.strokeStyle = this.params.color;
          context.lineWidth = this.params.diameter;
          context.arc(centerX, centerY, radius, 2 * Math.PI, false);
          context.stroke();
        }

      };

      this.log = function(l) {
        l("circle " + JSON.stringify(params) + " " + JSON.stringify([start, end]));
      };
    },
    
    rectangle: function(canvas, params){
      var _canvas = canvas;
      this.params = params;
      var start;
      var end;
      
      this.begin = function(e){
          var mouseX = x(e);
          var mouseY = y(e);
        start = {x: mouseX, y: mouseY, t: now()};
        end = start;
      };
      
      this.extend = function(e){
        var mouseX = x(e);
        var mouseY = y(e);
        end = {x: mouseX, y: mouseY, t: now()};
      };
      
      this.draw = function(context){
        if(start && end){
          context.beginPath();
          context.rect(start.x, start.y, end.x - start.x, end.y - start.y);
          context.strokeStyle = this.params.color;
          context.lineWidth = this.params.diameter;
          context.stroke();        
        }
      };

      this.log = function(l) {
        l("rectangle " + JSON.stringify(params) + " " + JSON.stringify([start, end]));
      };
    }
  };
  
  $.extend(true, $deck.defaults, {
    ids: {
      annotateTools: 'deck-annotate-tools'
    },
    classes: {
      annotateCanvas: 'deck-annotate-canvas'
    },
    keys: {
      annotate: {
        undo: {
          mod: "ctrl",
          val: 90  // "z"
        },
        redo: {
          mod: ["ctrl", "shift"],
          val: 90  // "z"
        },
        toggleCanvas: 80,  // "p"
        clearCanvas: 67,  // "c"
        clearAll: {
          mod: "ctrl",
          val: 67
        }
      }
		},
    annotate: {
      enabled: false,
      showTools: true,
			colorsPerRow: 3,
      currentColor: '#00f',
      colors: {
        'blue': '#00f',
        'green': '#0f0',
        'red': '#f00',
        'white': '#fff',
        'black': '#000',
        'gray': '#666',
        'cyan': '#0ff',
        'yellow': '#ff0',
        'magenta': '#f0f',
      },
      currentShape: null,
			shapes: shapes,
      currentLineDiameter: null,
			lineDiameters: {
        'small': 2,
        'medium': 6,
        'large': 12,
        'Large': 18,
        'tiny': 1,
      },
      persistentStorage: false,  // Uses localStorage to keep annotations beyond a refresh
      designSizeMultiplier: 1.5,
    }
	});
  
  var Canvas = function(domCanvas){
    var _shapes = [];
    var _redo = [];
    this.dom = domCanvas;
    
    this.enable = function(){
      // TODO
    }
    
    this.disable = function(){
      // TODO
    }
    
    this.addShape = function(shape){
      _shapes.push(shape);
      _redo = [];
      this.redraw();
    };
    
    this.clear = function(){
      _shapes = [];
      _redo = []; 
      this.previousCanvas = null;
      this.previousDrawnIndex = -1;
      this.backupCanvas = null;
      this.redraw();
      log("CLEAR");
    }
    
    this.undo = function(){
      if(_shapes.length > 0){
        _redo.push(_shapes.pop());
        this.previousCanvas = null;
        this.previousDrawnIndex = -1;
        this.backupCanvas = null;
        log("UNDO");
      }
      this.redraw();
    }
    
    this.redo = function(){
      if(_redo.length > 0){
        _shapes.push(_redo.pop());
        log("REDO");
      }
      this.redraw();
    }

    this.previousCanvas = null;
    this.previousDrawnIndex = -1;
    this.backupCanvas = null;

    this.redraw = function(){
      if(!this.dom){
        return;
      }
      
      var elem = this.dom[0];

      if (this.previousCanvas !== elem) {
          this.previousDrawnIndex = -1;
      }
      this.previousCanvas = elem;

      var opts = $deck("getOptions");

      var m = opts.annotate.designSizeMultiplier;
      {
          let w = opts.designWidth * m;
          let h = opts.designHeight * m;
          if (elem.width != w || elem.height != h) {
              elem.width = opts.designWidth * m;
              elem.height = opts.designHeight * m;
              this.previousDrawnIndex = -1;
          }
          if (!this.backupCanvas || this.backupCanvas.width != w || this.backupCanvas.height != h) {
              this.backupCanvas = document.createElement('canvas');
              this.backupCanvas.width = w;
              this.backupCanvas.height = h;
          }
      }

      if(!$deck("getOptions").annotate.enabled || !elem){
        return;
      }
      
      var context = elem.getContext("2d");
      if(_shapes){
        context.resetTransform();
        context.clearRect(0, 0, elem.width, elem.height);
        context.drawImage(this.backupCanvas, 0, 0);
        context.scale(m, m);
        let start = Math.max(0, this.previousDrawnIndex+1);
        for(var i = start; i < _shapes.length-1; i++){
          _shapes[i].draw(context);
          this.previousDrawnIndex = i;
        }
        if (start < _shapes.length-1) {
          var backCtx = this.backupCanvas.getContext('2d');
          backCtx.drawImage(elem, 0, 0);
        }
        if (_shapes.length > 0) {
          _shapes[_shapes.length-1].draw(context);
        }
      }
    }
  }
  
  var ShapeMap = function(useLocalstorage){ // TODO localstorage keyed by canvas id?
    var _map = {};
    
    this.add = function(id, shape, dom){
      if(!_map[id]){
        _map[id] = new Canvas(dom);
      }
      _map[id].addShape(shape);
    }
    
    this.get = function(id){
      return _map[id];
    }
    
    this.clear = function(){
      $.each(_map, function(id, canvas){
        canvas.clear();
      });
    }
  };
  
  function isKeypress(event, bindings){
    if (!event || !bindings){
      return false;
    }
    
    var mods = $.grep(["ctrl", "alt", "shift"], function(obj){
      return event[obj + "Key"];
    });
    
    // Try single key
    if (event.which === bindings && mods.length === 0){
      return true;
    }
    
    // Try array of keys
    if ($.inArray(event.which, bindings) > -1 && mods.length === 0){
      return true;
    }
    
    function arraysAreEqual(a, b){
      return $.isArray(a) && $.isArray(b) &&
        $(a).not(b).length == 0 && $(b).not(a).length == 0;
    }
    
    // If {mod, val} match pressed modifiers and key
    if(event.which == bindings.val &&
       (mods.length == 1 && mods[0] === bindings.mod ||
       arraysAreEqual(mods, bindings.mod))){
      return true;
    }
    
    if($.isArray(bindings)){
      for(var i = 0; i < bindings.length; i++){
        if(isKeypress(event, bindings[i])){
          return true;
        }
      };
    }
    
    return false;
  }
	
  // Create tools
  function createTools(opts){
    var tools = $("<div>").attr('id', opts.ids.annotateTools);
    
    $("<div>")
      .attr('id', 'tools-title')
      .text("Drawing Tools")
      .appendTo(tools);
    
    var pickers = $("<div>")
      .attr('id', 'picker-tools')
      .addClass("hidden")
      .appendTo(tools);
    
    // Create shape chooser
    var shapePicker = $("<div>")
      .attr('id', 'shape-picker')
      .appendTo(pickers);
    $("<div>")
      .addClass('shape')
      .attr('title', 'line')
      .append($("<div>")
        .attr('id', 'shape-line'))
      .click(function(e){
        var opts = $deck('getOptions');
        $('.shape.active').removeClass('active');
        $(this).addClass('active');
        opts.annotate.currentShape = 'line';
      })
      .appendTo(shapePicker)
    
    $("<div>")
      .addClass('shape')
      .attr('title', 'rectangle')
      .append($("<div>")
        .attr('id', 'shape-rectangle'))
      .click(function(e){
        var opts = $deck('getOptions');
        $('.shape.active').removeClass('active');
        $(this).addClass('active');
        opts.annotate.currentShape = 'rectangle';
      })
      .appendTo(shapePicker);
    
    $("<div>")
      .addClass('shape')
      .attr('title', 'circle')
      .append($("<div>")
        .attr('id', 'shape-circle'))
      .click(function(e){
        var opts = $deck('getOptions');
        $('.shape.active').removeClass('active');
        $(this).addClass('active');
        opts.annotate.currentShape = 'circle';
      })
      .appendTo(shapePicker);
    
    // Select default shape
    shapePicker.children().first().click();
    
    // Create size chooser
    var sizePicker = $("<div>")
      .attr('id', 'size-picker')
      .appendTo(pickers);
    $.each(opts.annotate.lineDiameters, function(name, size){
      $("<div/>")
        .addClass('sizebox')
        .appendTo(sizePicker)
        .attr('title', name)
        .click(function(e){
            var opts = $deck('getOptions');
            $('.sizebox.active').removeClass('active');
            $(this).addClass('active');
            opts.annotate.currentLineDiameter = size;
        })
        .append(
          $("<span>")
            .addClass('size')
            .width(size)
            .height(size)
            .css('background-color', 'black')
        );
    });
    
    // Select default size
    sizePicker.children().first().click();
    
    // Create color picker
    var colorPicker = $("<table>")
      .attr('id', 'color-picker')
      .appendTo(pickers);

    var currentRow;
    var idx = 0;
    $.each(opts.annotate.colors, function(name, color){
      if(idx % opts.annotate.colorsPerRow == 0){
        currentRow = $("<tr>");
        colorPicker.append(currentRow);
      }
      
      var col = $('<td>');
      var picker = $('<div>')
        .css('background-color', color)
        .addClass('color')
        .appendTo(col)
        .click(function(e){
          var opts = $deck('getOptions');
          $('.color.active').removeClass('active');
          $(this).addClass('active');
          opts.annotate.currentColor = $(this).css('background-color');
        }
      );
      if(idx == 0){
        picker.addClass('active');
      }
      picker.attr('title', name);
      currentRow.append(col);
      idx++;
    });
    
    // Select default color
    colorPicker.children().first().click();

    // Create undo/do/clear buttons
    let button = function(text, method) {
      $("<div/>")
        .addClass('actionbutton')
        .appendTo(tools)
        .click(function() {
          var cv = getCanvas();
          if(cv){
            cv[method]();
          }
        })
        .text(text);
    };
    button('↶', 'undo');
    button('↷', 'redo');
    button('↯', 'clear');

    // Create expand link.
    $("<div>")
      .addClass('expand-arrow')
      .addClass('right')
      .appendTo(tools)
      .click( function (e){
          $(this).toggleClass('right left');
          $("#picker-tools").toggleClass("hidden");
      });
      
    $(document.body).append(tools);
  }

  var getSlide = function(ind) {
    return $[deck]('getToplevelSlideOf', $[deck]('getSlide', ind)).node;
  }

  // Add canvases to slides
	$d.bind('deck.init', function(){
    var opts = $deck('getOptions');
    var slides = $deck('getTopLevelSlides');
    canvases = new ShapeMap(opts.annotate.persistentStorage);
    
    $.each(slides, function(idx, slide){
      var container = $("<div>");
      container.hide().addClass(opts.classes.annotateCanvas);
      
      var canvas = $("<canvas>");
      canvas[0].id = opts.classes.annotateCanvas + "-" + idx;
      initializeCanvas(canvas);
      
      container.append(canvas);
      slide.prepend(container);
    });
    
    createTools(opts);
    
    if(opts.annotate.enabled){
      enableCanvasOnSlide(getSlide());
      if(opts.annotate.showTools){
        $("#" + opts.ids.annotateTools).show();
      }
    }

    if (window.helpAreaAvailable) { // always add, as a means of discovery
      $.deck('helpAdvertiseKey', 'annotate.toggleCanvas', 'Toggle paint tools (manual slide annotation)');
    }
    
    // Slide change event
    $d.bind('deck.change', function(event, from, to){

      if ($[deck]('getToplevelSlideOfIndex', to).node.is($[deck]('getToplevelSlideOfIndex', from).node)) {
        return;
      }

      $('.' + opts.classes.annotateCanvas).hide();  // Hide all canvases

        {
          let w = opts.designWidth;
          let h = opts.designHeight;
          // set the coordinates extractors
          x = function(e) {
              let current = getSlide();
              let r = current.get(0).getBoundingClientRect();
              return w * (e.clientX - r.left) / r.width;
          };
          y = function(e) {
              let current = getSlide();
              let r = current.get(0).getBoundingClientRect();
              return h * (e.clientY - r.top) / r.height;
          };
      }

      if(opts.annotate.enabled){
        var slide = getSlide(to);
        enableCanvasOnSlide(slide);
        var cv = getCanvas(slide);
        if(cv){
          cv.redraw();
        }
      }
    });
    
    $d.bind('keyup.deck', function(e){
      var opts = $deck('getOptions');
      if(isKeypress(e, opts.keys.annotate.toggleCanvas)){
        opts.annotate.enabled = !opts.annotate.enabled;
        if(opts.annotate.enabled){
          if(opts.annotate.showTools){
            $("#" + opts.ids.annotateTools).show();
          }
          enableCanvasOnSlide();
        }
        else{
          $("#" + opts.ids.annotateTools).hide();
          disableCanvasOnSlide();
        }
        var cv = getCanvas();
        if(cv){
          cv.redraw();
        }
      }
      else if(opts.annotate.enabled){
        if(isKeypress(e, opts.keys.annotate.clearCanvas)){
          var cv = getCanvas();
          if(cv){
            cv.clear();
          }
        }
        else if(isKeypress(e, opts.keys.annotate.clearAll)){
          canvases.clear();
        }
        else if(isKeypress(e, opts.keys.annotate.undo)){
          var cv = getCanvas();
          if(cv){
            cv.undo();
          }
        }
        else if(isKeypress(e, opts.keys.annotate.redo)){
          var cv = getCanvas();
          if(cv){
            cv.redo();
          }
        }
      }
    });
  });
  
  function getContainer(slide){
    slide = slide || getSlide();
    var opts = $deck('getOptions');
    return slide.children('.' + opts.classes.annotateCanvas);
  }
  
  // Get the canvas for a slide
  function getCanvas(slide){
    var dom = getContainer(slide).children("canvas");
    return canvases.get(dom.attr('id'));
  }
  
  // Enable the canvas on the given slide
  // or the current slide if not provided
  function enableCanvasOnSlide(slide){
    $deck("getOptions").annotate.enabled = true;
    getContainer(slide).show();
  }
  
  // Disable the canvas on the given slide
  // or the current slide if not provided
  function disableCanvasOnSlide(slide){
    $deck("getOptions").annotate.enabled = false;
    getContainer(slide).hide();
  }

  function log(what) {
    // could make it robust to the absence of timekeeper if needed (e.g., try catch)
    $[deck]('addToTimekeeperLog', "@NN1 "+what); // simple versioning
  }
  
  // Set up the click hooks for a canvas
  function initializeCanvas(canvas){
    var opts = $deck('getOptions');
    var currentShape;
    var painting = false;
    var canvasId = canvas.attr('id');
    
    canvas.mousedown(function(e){
      // Left click only
      if(e.which == 1) {
        currentShape = new shapes[opts.annotate.currentShape](
          this,
          {
            color: opts.annotate.currentColor,
            diameter: opts.annotate.currentLineDiameter
          }
        );
        canvases.add(canvasId, currentShape, canvas);
        currentShape.begin(e);
        canvases.get(canvasId).redraw();
        painting = true;
      }
    });
    
    canvas.mousemove(function(e){
      if(painting && currentShape && currentShape.extend){
        currentShape.extend(e);
        canvases.get(canvasId).redraw();
      }
    });
      
    var endShape = function(e){
      if(currentShape && currentShape.end){
         currentShape.end(e);
      }
      if(currentShape && currentShape.log){
         currentShape.log(log);
      }
      currentShape = null;
      painting = false;
    }

    canvas.mouseup(endShape);

    canvas.mouseleave(endShape);
    
  }
    
  // Make sure resizing the window changes the canvas size
  $(window).resize(function(){
    var cv = getCanvas();
    if(cv){
      cv.redraw();
    }
  });
  
})(jQuery, 'deck');


$(function() {
    // Bind key event
    var $d = $(document);
    $d.unbind('keydown.togglecomments').bind('keydown.togglecomments', function(e) {
        var K = 86;
        if (e.which === K || $.inArray(e.which, K) > -1) {
            $("body").toggleClass("show-comments");
            e.preventDefault();
        }
    });
});


(function($, deck, undefined) {
    // Should be included after any slide-generating extension (like smartdown).
    $(document).bind('deck.beforeInit', function() {
        var $d = $(document);
        var container = $[deck]('getContainer');

        // range a-b, for heavy decks, to avoid loading everything
        // specify the range of slides (top-level) to keep.
        if (sessionStorage.getItem('range')) {
            var slides = $('>.slide', container);
            var parts = sessionStorage.getItem('range').split('-');
            var start = parts[0] == '' ? 0 : parseInt(parts[0]);
            var end = parts[1] == '' ? slides.size() : parseInt(parts[1]);
            slides.each(function (i, e) {
                if (i < start || i >= end) {
                    e.parentNode.removeChild(e);
                }
            });
        }
    });
    $(document).bind('deck.init', function() {
        if (window.helpAreaAvailable) { // always add, as a means of discovery
            $[deck]('helpSessionStorage', 'range', 'Select a subset of the slides to load (e.g., 12-15 or 0-5 or 10-).', true, true);
        }
    });
})(jQuery, 'deck');
function ACTUALLY_FILL_CSS(el) { $(el).text("\n"+
".deck-container {\n"+
"  position: relative;\n"+
"  overflow: hidden;\n"+
"  margin: 0;\n"+
"}\n"+
"\n"+
".deck-container:not(.show-all-slides):not(.deck-menu):not(.deck-loading) > .slide:not(.deck-current), .deck-container:not(.show-all-slides):not(.deck-menu):not(.deck-loading) > .slide:not(.deck-child-current) {\n"+
"  display: none;\n"+
"}\n"+
".deck-container:not(.show-all-slides):not(.deck-menu):not(.deck-loading) > .slide.deck-current, .deck-container:not(.show-all-slides):not(.deck-menu):not(.deck-loading) > .slide.deck-child-current {\n"+
"  display: block;\n"+
"}\n"+
"\n"+
".deck-container.deck-loading > *:not(.deck-loading-splash) {\n"+
"  visibility: hidden;\n"+
"}\n"+
".touch .deck-container {\n"+
"  -webkit-text-size-adjust: none;\n"+
"  -moz-text-size-adjust: none;\n"+
"}\n"+
".deck-container > .slide {\n"+
"  position: absolute;\n"+
"}\n"+
".deck-container > .slide.deck-current, .deck-container > .slide.deck-child-current {\n"+
"  position: absolute;\n"+
"  /* relative to parent */\n"+
"}\n"+
".deck-container > .slide.deck-current .slide, .deck-container > .slide.deck-child-current .slide {\n"+
"  visibility: hidden;\n"+
"}\n"+
".deck-container > .slide.deck-current .deck-previous, .deck-container > .slide.deck-current .deck-before, .deck-container > .slide.deck-current .deck-current, .deck-container > .slide.deck-child-current .deck-previous, .deck-container > .slide.deck-child-current .deck-before, .deck-container > .slide.deck-child-current .deck-current {\n"+
"  visibility: visible;\n"+
"}\n"+
".deck-container.deck-anim-ready .deck-loading-splash {\n"+
"  visibility: hidden;\n"+
"  opacity: 0;\n"+
"  /*\n"+
"      right: 100%;\n"+
"      left: -100%;\n"+
"  */\n"+
"  -webkit-transition: visibility 0s linear 0.5s, all 0.5s linear;\n"+
"  transition: visibility 0s linear .5s, all 0.5s linear;\n"+
"}\n"+
".deck-container .deck-loading-splash {\n"+
"  visibility: visible;\n"+
"  opacity: 1;\n"+
"  position: absolute;\n"+
"  text-align: center;\n"+
"  padding-top: 200px;\n"+
"  display: flex;\n"+
"  margin: 0 auto;\n"+
"  left: 0;\n"+
"  top: 0;\n"+
"  right: 0;\n"+
"  bottom: 0;\n"+
"  background: black;\n"+
"  color: white;\n"+
"  z-index: 100;\n"+
"}\n"+
"\n"+
".helparea-div {\n"+
"  position: absolute;\n"+
"  overflow: hidden;\n"+
"  z-index: 5;\n"+
"  /* */\n"+
"  right: 15%;\n"+
"  width: 70%;\n"+
"  bottom: 0;\n"+
"  /* */\n"+
"  background: rgba(50, 70, 50, 0.9);\n"+
"  border: 2px solid lime;\n"+
"  border-bottom: 0;\n"+
"  border-top-left-radius: 10px;\n"+
"  border-top-right-radius: 10px;\n"+
"}\n"+
".helparea-div .helparea {\n"+
"  overflow: auto;\n"+
"  min-height: 300px;\n"+
"  max-height: 700px; /* overriden by the progress extension if available */\n"+
"}\n"+
".helparea-div .helparea h3 {\n"+
"  padding: .6em;\n"+
"}\n"+
"/* */\n"+
".helparea-div .helpkeys {\n"+
"  display: grid;\n"+
"  grid-template-columns: 150px auto;\n"+
"}\n"+
".helparea-div .helpkeys>div:nth-of-type(2n+1) {\n"+
"  text-align: center;\n"+
"}\n"+
"/* */\n"+
".helparea-div .sessionvars {\n"+
"  display: grid;\n"+
"  grid-template-columns: 100px auto;\n"+
"}\n"+
".helparea-div .sessionvars>div:nth-of-type(2n+1) {\n"+
"  text-align: center;\n"+
"}\n"+
"\n"+
".helparea-div {\n"+
"  display: none;\n"+
"}\n"+
".deck-helparea .helparea-div {\n"+
"  display: block;\n"+
"}\n"+
".helpkeys .kbd {\n"+
"  background-color: rgb(225, 227, 229);\n"+
"  border-color: rgb(173, 179, 185);\n"+
"  border-radius: 3px;\n"+
"  border-style: solid;\n"+
"  border-width: 1px;\n"+
"  box-shadow: rgba(12, 13, 14, 0.2) 0px 1px 0px 0px, rgb(255, 255, 255) 0px 0px 0px 2px inset;\n"+
"  color: rgb(36, 39, 41);\n"+
"  display: inline-block;\n"+
"  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n"+
"  margin: 0 1.1px;\n"+
"  padding: 1.1px 6.6px;\n"+
"  text-shadow: rgb(255, 255, 255) 0px 1px 0px;\n"+
"  font-size: 18px;\n"+
"}\n"+
"@media print {\n"+
"  .helparea-div {\n"+
"    display: none;\n"+
"  }\n"+
"}\n"+
"\n"+
"\n"+
".deck-container {\n"+
"    width: 100%; height: 100%; /* to get a proper filling of the parent */\n"+
"    margin: 0; padding: 0; /* any margin is handled by the parent or the fit extension */\n"+
"    position: absolute;\n"+
"    left:0; top:0; width:100%; height:100%;\n"+
"    border: 0;\n"+
"}\n"+
".deck-container>.slide {\n"+
"    width: 100%; height: 100%; /* to get a proper filling of the parent */\n"+
"    min-width:0; min-height:0; /* undoing some hurting style in the defaults of deck.js */\n"+
"    overflow: hidden; /* don't show slides outside of their box */\n"+
"    /* margin:0; padding:0; /* remove possible margins */\n"+
"}\n"+
"\n"+
"@font-face{font-family:KaTeX_AMS;src:url(fonts/KaTeX_AMS-Regular.eot);src:url(fonts/KaTeX_AMS-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_AMS-Regular.eot),url(fonts/KaTeX_AMS-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_AMS-Regular.woff2) format('woff2'),url(fonts/KaTeX_AMS-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_AMS-Regular.woff) format('woff'),url(fonts/KaTeX_AMS-Regular.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_AMS-Regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(fonts/KaTeX_Caligraphic-Bold.eot);src:url(fonts/KaTeX_Caligraphic-Bold.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Caligraphic-Bold.eot),url(fonts/KaTeX_Caligraphic-Bold.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Caligraphic-Bold.woff2) format('woff2'),url(fonts/KaTeX_Caligraphic-Bold.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Caligraphic-Bold.woff) format('woff'),url(fonts/KaTeX_Caligraphic-Bold.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Caligraphic-Bold.ttf) format('truetype');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(fonts/KaTeX_Caligraphic-Regular.eot);src:url(fonts/KaTeX_Caligraphic-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Caligraphic-Regular.eot),url(fonts/KaTeX_Caligraphic-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Caligraphic-Regular.woff2) format('woff2'),url(fonts/KaTeX_Caligraphic-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Caligraphic-Regular.woff) format('woff'),url(fonts/KaTeX_Caligraphic-Regular.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Caligraphic-Regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(fonts/KaTeX_Fraktur-Bold.eot);src:url(fonts/KaTeX_Fraktur-Bold.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Fraktur-Bold.eot),url(fonts/KaTeX_Fraktur-Bold.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Fraktur-Bold.woff2) format('woff2'),url(fonts/KaTeX_Fraktur-Bold.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Fraktur-Bold.woff) format('woff'),url(fonts/KaTeX_Fraktur-Bold.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Fraktur-Bold.ttf) format('truetype');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(fonts/KaTeX_Fraktur-Regular.eot);src:url(fonts/KaTeX_Fraktur-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Fraktur-Regular.eot),url(fonts/KaTeX_Fraktur-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Fraktur-Regular.woff2) format('woff2'),url(fonts/KaTeX_Fraktur-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Fraktur-Regular.woff) format('woff'),url(fonts/KaTeX_Fraktur-Regular.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Fraktur-Regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Bold.eot);src:url(fonts/KaTeX_Main-Bold.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Main-Bold.eot),url(fonts/KaTeX_Main-Bold.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Main-Bold.woff2) format('woff2'),url(fonts/KaTeX_Main-Bold.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Main-Bold.woff) format('woff'),url(fonts/KaTeX_Main-Bold.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Main-Bold.ttf) format('truetype');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Italic.eot);src:url(fonts/KaTeX_Main-Italic.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Main-Italic.eot),url(fonts/KaTeX_Main-Italic.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Main-Italic.woff2) format('woff2'),url(fonts/KaTeX_Main-Italic.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Main-Italic.woff) format('woff'),url(fonts/KaTeX_Main-Italic.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Main-Italic.ttf) format('truetype');font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Regular.eot);src:url(fonts/KaTeX_Main-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Main-Regular.eot),url(fonts/KaTeX_Main-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Main-Regular.woff2) format('woff2'),url(fonts/KaTeX_Main-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Main-Regular.woff) format('woff'),url(fonts/KaTeX_Main-Regular.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Main-Regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Math;src:url(fonts/KaTeX_Math-Italic.eot);src:url(fonts/KaTeX_Math-Italic.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Math-Italic.eot),url(fonts/KaTeX_Math-Italic.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Math-Italic.woff2) format('woff2'),url(fonts/KaTeX_Math-Italic.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Math-Italic.woff) format('woff'),url(fonts/KaTeX_Math-Italic.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Math-Italic.ttf) format('truetype');font-weight:400;font-style:italic}@font-face{font-family:KaTeX_SansSerif;src:url(fonts/KaTeX_SansSerif-Regular.eot);src:url(fonts/KaTeX_SansSerif-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_SansSerif-Regular.eot),url(fonts/KaTeX_SansSerif-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_SansSerif-Regular.woff2) format('woff2'),url(fonts/KaTeX_SansSerif-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_SansSerif-Regular.woff) format('woff'),url(fonts/KaTeX_SansSerif-Regular.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_SansSerif-Regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Script;src:url(fonts/KaTeX_Script-Regular.eot);src:url(fonts/KaTeX_Script-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Script-Regular.eot),url(fonts/KaTeX_Script-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Script-Regular.woff2) format('woff2'),url(fonts/KaTeX_Script-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Script-Regular.woff) format('woff'),url(fonts/KaTeX_Script-Regular.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Script-Regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size1;src:url(fonts/KaTeX_Size1-Regular.eot);src:url(fonts/KaTeX_Size1-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size1-Regular.eot),url(fonts/KaTeX_Size1-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size1-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size1-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size1-Regular.woff) format('woff'),url(fonts/KaTeX_Size1-Regular.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size1-Regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size2;src:url(fonts/KaTeX_Size2-Regular.eot);src:url(fonts/KaTeX_Size2-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size2-Regular.eot),url(fonts/KaTeX_Size2-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size2-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size2-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size2-Regular.woff) format('woff'),url(fonts/KaTeX_Size2-Regular.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size2-Regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size3;src:url(fonts/KaTeX_Size3-Regular.eot);src:url(fonts/KaTeX_Size3-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size3-Regular.eot),url(fonts/KaTeX_Size3-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size3-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size3-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size3-Regular.woff) format('woff'),url(fonts/KaTeX_Size3-Regular.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size3-Regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size4;src:url(fonts/KaTeX_Size4-Regular.eot);src:url(fonts/KaTeX_Size4-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size4-Regular.eot),url(fonts/KaTeX_Size4-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size4-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size4-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size4-Regular.woff) format('woff'),url(fonts/KaTeX_Size4-Regular.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Size4-Regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Typewriter;src:url(fonts/KaTeX_Typewriter-Regular.eot);src:url(fonts/KaTeX_Typewriter-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Typewriter-Regular.eot),url(fonts/KaTeX_Typewriter-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Typewriter-Regular.woff2) format('woff2'),url(fonts/KaTeX_Typewriter-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Typewriter-Regular.woff) format('woff'),url(fonts/KaTeX_Typewriter-Regular.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.2/fonts/KaTeX_Typewriter-Regular.ttf) format('truetype');font-weight:400;font-style:normal}.katex-display{display:block;margin:1em 0;text-align:center}.katex .base,.katex .katex-html,.katex .strut{display:inline-block}.katex-display>.katex{display:inline-block;text-align:initial}.katex{font:400 1.21em KaTeX_Main,Times New Roman,serif;line-height:1.2;white-space:nowrap;text-indent:0;text-rendering:auto}.katex *{-ms-high-contrast-adjust:none!important}.katex .katex-mathml{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.katex .mathrm{font-style:normal}.katex .mainit,.katex .mathit,.katex .textit{font-style:italic}.katex .mathit{font-family:KaTeX_Math}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .amsrm,.katex .mathbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak{font-family:KaTeX_Fraktur}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr{font-family:KaTeX_Script}.katex .mathsf{font-family:KaTeX_SansSerif}.katex .mainit{font-family:KaTeX_Main}.katex .mord+.mop{margin-left:.16667em}.katex .mord+.mbin{margin-left:.22222em}.katex .mord+.mrel{margin-left:.27778em}.katex .mop+.mop,.katex .mop+.mord,.katex .mord+.minner{margin-left:.16667em}.katex .mop+.mrel{margin-left:.27778em}.katex .mop+.minner{margin-left:.16667em}.katex .mbin+.minner,.katex .mbin+.mop,.katex .mbin+.mopen,.katex .mbin+.mord{margin-left:.22222em}.katex .mrel+.minner,.katex .mrel+.mop,.katex .mrel+.mopen,.katex .mrel+.mord{margin-left:.27778em}.katex .mclose+.mop{margin-left:.16667em}.katex .mclose+.mbin{margin-left:.22222em}.katex .mclose+.mrel{margin-left:.27778em}.katex .mclose+.minner,.katex .minner+.mop,.katex .minner+.mord,.katex .mpunct+.mclose,.katex .mpunct+.minner,.katex .mpunct+.mop,.katex .mpunct+.mopen,.katex .mpunct+.mord,.katex .mpunct+.mpunct,.katex .mpunct+.mrel{margin-left:.16667em}.katex .minner+.mbin{margin-left:.22222em}.katex .minner+.mrel{margin-left:.27778em}.katex .minner+.minner,.katex .minner+.mopen,.katex .minner+.mpunct{margin-left:.16667em}.katex .mbin.mtight,.katex .mclose.mtight,.katex .minner.mtight,.katex .mop.mtight,.katex .mopen.mtight,.katex .mord.mtight,.katex .mpunct.mtight,.katex .mrel.mtight{margin-left:0}.katex .mclose+.mop.mtight,.katex .minner+.mop.mtight,.katex .mop+.mop.mtight,.katex .mop+.mord.mtight,.katex .mord+.mop.mtight{margin-left:.16667em}.katex .vlist-t{display:inline-table;table-layout:fixed}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;vertical-align:bottom;position:relative}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;vertical-align:bottom;font-size:1px;width:2px}.katex .llap>.fix,.katex .mspace,.katex .rlap>.fix,.katex .rule{display:inline-block}.katex .msupsub{text-align:left}.katex .accent>.vlist-t,.katex .mfrac>span>span,.katex .mtable .col-align-c>.vlist-t,.katex .op-limits>.vlist-t{text-align:center}.katex .mfrac .frac-line{display:inline-block;width:100%;border-bottom-style:solid}.katex .mspace.negativethinspace{margin-left:-.16667em}.katex .mspace.thinspace{width:.16667em}.katex .mspace.negativemediumspace{margin-left:-.22222em}.katex .mspace.mediumspace{width:.22222em}.katex .mspace.thickspace{width:.27778em}.katex .mspace.sixmuspace{width:.333333em}.katex .mspace.eightmuspace{width:.444444em}.katex .mspace.enspace{width:.5em}.katex .mspace.twelvemuspace{width:.666667em}.katex .mspace.quad{width:1em}.katex .mspace.qquad{width:2em}.katex .llap,.katex .rlap{width:0;position:relative}.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .delimcenter,.katex .katex-logo .a,.katex .katex-logo .e,.katex .op-symbol,.katex .rule,.katex .sqrt .sqrt-line,.katex .sqrt>.sqrt-sign{position:relative}.katex .llap>.inner{right:0}.katex .rlap>.inner{left:0}.katex .katex-logo .a{font-size:.75em;margin-left:-.32em;top:-.2em}.katex .katex-logo .t{margin-left:-.23em}.katex .katex-logo .e{margin-left:-.1667em;top:.2155em}.katex .katex-logo .x{margin-left:-.125em}.katex .rule{border:0 solid}.katex .overline .overline-line,.katex .sqrt .sqrt-line,.katex .underline .underline-line{width:100%;border-bottom-style:solid;display:inline-block}.katex .sqrt>.root{margin-left:.27777778em;margin-right:-.55555556em}.katex .fontsize-ensurer,.katex .sizing{display:inline-block}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.2em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:3.456em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.148em}.katex .fontsize-ensurer.reset-size1.size11,.katex .sizing.reset-size1.size11{font-size:4.976em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.83333333em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.16666667em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.5em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.66666667em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.4em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.88em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.45666667em}.katex .fontsize-ensurer.reset-size2.size11,.katex .sizing.reset-size2.size11{font-size:4.14666667em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.71428571em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.85714286em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.14285714em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.28571429em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.42857143em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.71428571em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.05714286em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.46857143em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:2.96285714em}.katex .fontsize-ensurer.reset-size3.size11,.katex .sizing.reset-size3.size11{font-size:3.55428571em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.75em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.875em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.125em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.25em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.5em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.8em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.16em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.5925em}.katex .fontsize-ensurer.reset-size4.size11,.katex .sizing.reset-size4.size11{font-size:3.11em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.55555556em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.66666667em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.77777778em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.88888889em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.11111111em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.6em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:1.92em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.30444444em}.katex .fontsize-ensurer.reset-size5.size11,.katex .sizing.reset-size5.size11{font-size:2.76444444em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.6em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.7em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.8em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.9em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.728em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.074em}.katex .fontsize-ensurer.reset-size6.size11,.katex .sizing.reset-size6.size11{font-size:2.488em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.41666667em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.5em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.58333333em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.66666667em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.75em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.83333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.2em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.44em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.72833333em}.katex .fontsize-ensurer.reset-size7.size11,.katex .sizing.reset-size7.size11{font-size:2.07333333em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.34722222em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.41666667em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.48611111em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.55555556em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.625em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.69444444em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.83333333em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.2em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.44027778em}.katex .fontsize-ensurer.reset-size8.size11,.katex .sizing.reset-size8.size11{font-size:1.72777778em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.28935185em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.34722222em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.40509259em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.46296296em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.52083333em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.5787037em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.69444444em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.83333333em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.20023148em}.katex .fontsize-ensurer.reset-size9.size11,.katex .sizing.reset-size9.size11{font-size:1.43981481em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.24108004em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.28929605em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.33751205em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.38572806em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.43394407em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.48216008em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.57859209em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.69431051em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.83317261em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .fontsize-ensurer.reset-size10.size11,.katex .sizing.reset-size10.size11{font-size:1.19961427em}.katex .fontsize-ensurer.reset-size11.size1,.katex .sizing.reset-size11.size1{font-size:.20096463em}.katex .fontsize-ensurer.reset-size11.size2,.katex .sizing.reset-size11.size2{font-size:.24115756em}.katex .fontsize-ensurer.reset-size11.size3,.katex .sizing.reset-size11.size3{font-size:.28135048em}.katex .fontsize-ensurer.reset-size11.size4,.katex .sizing.reset-size11.size4{font-size:.32154341em}.katex .fontsize-ensurer.reset-size11.size5,.katex .sizing.reset-size11.size5{font-size:.36173633em}.katex .fontsize-ensurer.reset-size11.size6,.katex .sizing.reset-size11.size6{font-size:.40192926em}.katex .fontsize-ensurer.reset-size11.size7,.katex .sizing.reset-size11.size7{font-size:.48231511em}.katex .fontsize-ensurer.reset-size11.size8,.katex .sizing.reset-size11.size8{font-size:.57877814em}.katex .fontsize-ensurer.reset-size11.size9,.katex .sizing.reset-size11.size9{font-size:.69453376em}.katex .fontsize-ensurer.reset-size11.size10,.katex .sizing.reset-size11.size10{font-size:.83360129em}.katex .fontsize-ensurer.reset-size11.size11,.katex .sizing.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .accent .accent-body>span{width:0}.katex .accent .accent-body.accent-vec>span{position:relative;left:.326em}.katex .mtable .vertical-separator{display:inline-block;margin:0 -.025em;border-right:.05em solid #000}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .stretchy{width:100%;display:block;background-repeat:no-repeat;background-position:right center;background-size:100% 100%}.katex .stretchy:after,.katex .stretchy:before{content:\"\"}.katex .x-arrow-pad{padding:0 .5em}.katex .mover,.katex .munder,.katex .x-arrow{text-align:center}.katex .boxpad{padding:0 .3em}.katex .fbox{box-sizing:border-box;border:.04em solid #000}.katex .cancel-pad{padding:0 .2em}.katex .cancel-lap+.mbin,.katex .cancel-lap+.mord,.katex .cancel-lap+.msupsub,.katex .mbin+.cancel-lap,.katex .mord+.cancel-lap{margin-left:-.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:.08em}.katex .widehat1{height:.24em;background-image:url(images/widehat1.svg)}.katex .widehat2{height:.3em;background-image:url(images/widehat2.svg)}.katex .widehat3{height:.36em;background-image:url(images/widehat3.svg)}.katex .widehat4{height:.42em;background-image:url(images/widehat4.svg)}.katex .tilde1{height:.26em;background-image:url(images/tilde1.svg)}.katex .tilde2{height:.29em;background-image:url(images/tilde2.svg)}.katex .tilde3{height:.306em;background-image:url(images/tilde3.svg)}.katex .tilde4{height:.312em;background-image:url(images/tilde4.svg)}.katex .rightarrow,.katex .xrightarrow{height:.522em;background-image:url(images/rightarrow.svg)}.katex .rightarrow{min-width:.5em}.katex .xrightarrow{min-width:.783em}.katex .leftarrow,.katex .xleftarrow{height:.522em;background-image:url(images/leftarrow.svg)}.katex .leftarrow{min-width:.5em}.katex .xleftarrow{min-width:.783em}.katex .overbrace{height:.548em;min-width:1.6em;background-image:url(images/overbrace.svg)}.katex .underbrace{height:.548em;min-width:1.6em;background-image:url(images/underbrace.svg)}.katex .leftrightarrow,.katex .xleftrightarrow{background-image:url(images/leftrightarrow.svg);height:.522em}.katex .leftrightarrow{min-width:.5em}.katex .xleftrightarrow{min-width:.783em}.katex .doublerightarrow{height:.56em;min-width:.783em;background-image:url(images/doublerightarrow.svg)}.katex .doubleleftarrow{height:.56em;min-width:.783em;background-image:url(images/doubleleftarrow.svg)}.katex .doubleleftrightarrow{height:.56em;min-width:.955em;background-image:url(images/doubleleftrightarrow.svg)}.katex .leftharpoon{height:.522em;min-width:.783em;background-image:url(images/leftharpoon.svg)}.katex .rightharpoon,.katex .xrightharpoon{background-image:url(images/rightharpoon.svg);height:.522em}.katex .rightharpoon{min-width:.5em}.katex .xrightharpoon{min-width:.783em}.katex .hookleftarrow{height:.522em;min-width:.87em;background-image:url(images/hookleftarrow.svg)}.katex .hookrightarrow{min-width:.87em;height:.522em;background-image:url(images/hookrightarrow.svg)}.katex .mapsto{height:.522em;min-width:.783em;background-image:url(images/mapsto.svg)}.katex .leftharpoondown{height:.522em;min-width:.783em;background-image:url(images/leftharpoondown.svg)}.katex .rightharpoondown,.katex .xrightharpoondown{height:.522em;background-image:url(images/rightharpoondown.svg)}.katex .rightharpoondown{min-width:.5em}.katex .xrightharpoondown{min-width:.783em}.katex .rightleftharpoons{height:.716em;min-width:.783em;background-image:url(images/rightleftharpoons.svg)}.katex .leftrightharpoons{height:.716em;min-width:.783em;background-image:url(images/leftrightharpoons.svg)}.katex .overgroup{height:.342em;min-width:.87em;background-image:url(images/overgroup.svg)}.katex .undergroup{height:.342em;min-width:.87em;background-image:url(images/undergroup.svg)}.katex .twoheadleftarrow{height:.334em;min-width:.86em;background-image:url(images/twoheadleftarrow.svg)}.katex .twoheadrightarrow{height:.334em;min-width:.86em;background-image:url(images/twoheadrightarrow.svg)}.katex .linesegment{height:.414em;min-width:.5em;background-image:url(images/linesegment.svg)}.katex .longequal{height:.334em;min-width:.5em;background-image:url(images/longequal.svg)}.katex .tofrom{height:.528em;min-width:.86em;background-image:url(images/tofrom.svg)}.katex .cancel{background:linear-gradient(to top left,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%)}.katex .bcancel{background:linear-gradient(to top right,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%)}.katex .xcancel{background:linear-gradient(to top left,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%),linear-gradient(to top right,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%)}@media screen and (min-width:0\\0){.katex .bcancel,.katex .bcancel-mask,.katex .cancel,.katex .cancel-mask,.katex .mask,.katex .xcancel,.katex .xcancel-mask{background-color:transparent!important}.katex .bcancel,.katex .bcancel-mask{background-image:url(images/bcancel.svg)}.katex .cancel,.katex .cancel-mask{background-image:url(images/cancel.svg)}.katex .xcancel,.katex .xcancel-mask{background-image:url(images/xcancel.svg)}}@supports ((mask-image:none) or (-webkit-mask:none)){.katex .bcancel-mask,.katex .cancel-mask,.katex .mask,.katex .xcancel-mask{background-image:none}}@supports not ((mask-image:none) or (-webkit-mask:none)){.katex .bcancel-mask,.katex .cancel-mask,.katex .mask{background-color:transparent!important}.katex .cancel-mask{background:linear-gradient(to top left,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%)}.katex .bcancel-mask{background:linear-gradient(to top right,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%)}.katex .xcancel-mask{background-color:transparent!important;background:linear-gradient(to top left,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%),linear-gradient(to top right,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%)}}.katex .cancel-mask{mask-image:linear-gradient(to top left,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%);-webkit-mask-image:linear-gradient(to top left,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%)}.katex .bcancel-mask{mask-image:linear-gradient(to top right,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%);-webkit-mask-image:linear-gradient(to top right,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%)}.katex .xcancel-mask{mask-image:linear-gradient(to top left,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%),linear-gradient(to top right,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%);-webkit-mask-image:linear-gradient(to top left,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%),linear-gradient(to top right,rgba(0,0,0,0) 0,rgba(0,0,0,0) calc(50% - .04em - .5px),#000 calc(50% - .04em),#000 calc(50% + .04em),rgba(0,0,0,0) calc(50% + .04em + .5px),rgba(0,0,0,0) 100%)}@supports (-ms-touch-action:none){.katex .bcancel,.katex .bcancel-mask{background-color:transparent!important;background-image:url(images/bcancel.svg)}.katex .cancel,.katex .cancel-mask{background-color:transparent!important;background-image:url(images/cancel.svg)}.katex .xcancel,.katex .xcancel-mask{background-color:transparent!important;background-image:url(images/xcancel.svg)}}.katex .widehat1-mask{-webkit-mask:url(images/widehat1.svg);mask:url(images/widehat1.svg) no-repeat}.katex .widehat2-mask{-webkit-mask:url(images/widehat2.svg);mask:url(images/widehat2.svg) no-repeat}.katex .widehat3-mask{-webkit-mask:url(images/widehat3.svg);mask:url(images/widehat3.svg) no-repeat}.katex .widehat4-mask{-webkit-mask:url(images/widehat4.svg);mask:url(images/widehat4.svg) no-repeat}.katex .tilde1-mask{-webkit-mask:url(images/tilde1.svg);mask:url(images/tilde1.svg) no-repeat}.katex .tilde2-mask{-webkit-mask:url(images/tilde2.svg);mask:url(images/tilde2.svg) no-repeat}.katex .tilde3-mask{-webkit-mask:url(images/tilde3.svg);mask:url(images/tilde3.svg) no-repeat}.katex .tilde4-mask{-webkit-mask:url(images/tilde4.svg);mask:url(images/tilde4.svg) no-repeat}.katex .rightarrow-mask,.katex .xrightarrow-mask{mask:url(images/rightarrow.svg);-webkit-mask:url(images/rightarrow.svg)}.katex .leftarrow-mask,.katex .xleftarrow-mask{mask:url(images/leftarrow.svg);-webkit-mask:url(images/leftarrow.svg)}.katex .overbrace-mask{min-width:1.6em;mask:url(images/overbrace.svg);-webkit-mask:url(images/overbrace.svg)}.katex .underbrace-mask{min-width:1.6em;mask:url(images/underbrace.svg);-webkit-mask:url(images/underbrace.svg)}.katex .leftrightarrow-mask,.katex .xleftrightarrow-mask{mask:url(images/leftrightarrow.svg);-webkit-mask:url(images/leftrightarrow.svg)}.katex .doublerightarrow-mask{mask:url(images/doublerightarrow.svg);-webkit-mask:url(images/doublerightarrow.svg)}.katex .doubleleftarrow-mask{mask:url(images/doubleleftarrow.svg);-webkit-mask:url(images/doubleleftarrow.svg)}.katex .doubleleftrightarrow-mask{mask:url(images/doubleleftrightarrow.svg);-webkit-mask:url(images/doubleleftrightarrow.svg)}.katex .leftharpoon-mask,.katex .xleftharpoon-mask{mask:url(images/leftharpoon.svg);-webkit-mask:url(images/leftharpoon.svg)}.katex .rightharpoon-mask,.katex .xrightharpoon-mask{mask:url(images/rightharpoon.svg);-webkit-mask:url(images/rightharpoon.svg)}.katex .hookleftarrow-mask{mask:url(images/hookleftarrow.svg);-webkit-mask:url(images/hookleftarrow.svg)}.katex .hookrightarrow-mask{mask:url(images/hookrightarrow.svg);-webkit-mask:url(images/hookrightarrow.svg)}.katex .mapsto-mask{mask:url(images/mapsto.svg);-webkit-mask:url(images/mapsto.svg)}.katex .leftharpoondown-mask,.katex .xleftharpoondown-mask{mask:url(images/leftharpoondown.svg);-webkit-mask:url(images/leftharpoondown.svg)}.katex .rightharpoondown-mask,.katex .xrightharpoondown-mask{mask:url(images/rightharpoondown.svg);-webkit-mask:url(images/rightharpoondown.svg)}.katex .rightleftharpoons-mask{mask:url(images/rightleftharpoons.svg);-webkit-mask:url(images/rightleftharpoons.svg)}.katex .leftrightharpoons-mask{mask:url(images/leftrightharpoons.svg);-webkit-mask:url(images/leftrightharpoons.svg)}.katex .overgroup-mask{mask:url(images/overgroup.svg);-webkit-mask:url(images/overgroup.svg)}.katex .undergroup-mask{mask:url(images/undergroup.svg);-webkit-mask:url(images/undergroup.svg)}.katex .twoheadleftarrow-mask{mask:url(images/twoheadleftarrow.svg);-webkit-mask:url(images/twoheadleftarrow.svg)}.katex .twoheadrightarrow-mask{mask:url(images/twoheadrightarrow.svg);-webkit-mask:url(images/twoheadrightarrow.svg)}.katex .linesegment-mask{mask:url(images/linesegment.svg);-webkit-mask:url(images/linesegment.svg)}.katex .longequal-mask{mask:url(images/longequal.svg);-webkit-mask:url(images/longequal.svg)}.katex .tofrom-mask{mask:url(images/tofrom.svg);-webkit-mask:url(images/tofrom.svg)}\n"+
"body.is-clone .clonepointer {\n"+
"  /* default convenient positioning for clone pointers */\n"+
"  position: absolute;\n"+
"  z-index: 10; }\n"+
"  body.is-clone .clonepointer.scale-on-click {\n"+
"    transition: transform 80ms linear;\n"+
"    -webkit-transition: -webkit-transform 80ms linear; }\n"+
"    body.is-clone .clonepointer.scale-on-click.pointer-click {\n"+
"      transition: transform 150ms linear;\n"+
"      -webkit-transition: -webkit-transform 150ms linear;\n"+
"      transform: translate(-50%, -50%) scale(1.5, 1.5) translate(50%, 50%);\n"+
"      -webkit-transform: translate(-50%, -50%) scale(1.5, 1.5) translate(50%, 50%); }\n"+
"\n"+
".notes, .notes-target {\n"+
"  display: none; }\n"+
"\n"+
"body.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) > .slide.deck-current, body.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) > .slide.deck-child-current {\n"+
"  outline: 5px solid grey;\n"+
"  /* use outline to avoid layout issues with old themes and allow for precise pointer position estimation */\n"+
"  overflow: hidden;\n"+
"  left: 0;\n"+
"  top: 0;\n"+
"  transform: translate(20px, 20px);\n"+
"  -webkit-transform: translate(20px, 20px); }\n"+
"  body.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) > .slide.deck-current + .slide, body.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) > .slide.deck-child-current + .slide {\n"+
"    outline: 5px solid grey;\n"+
"    overflow: hidden;\n"+
"    display: block !important;\n"+
"    visibility: visible;\n"+
"    top: 0;\n"+
"    left: 0;\n"+
"    transform: translate(-50%, -50%) scale(0.5) translate(50%, 50%) translate(200%, 0) translate(80px, 40px);\n"+
"    -webkit-transform: translate(-50%, -50%) scale(0.5) translate(50%, 50%) translate(200%, 0) translate(80px, 40px); }\n"+
"    body.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) > .slide.deck-current + .slide.deck-next, body.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) > .slide.deck-child-current + .slide.deck-next {\n"+
"      outline-color: red; }\n"+
"body.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) .notes-target {\n"+
"  display: block;\n"+
"  background: black;\n"+
"  color: #FFB;\n"+
"  padding: 5px;\n"+
"  position: absolute;\n"+
"  left: 840px;\n"+
"  right: 0;\n"+
"  top: 340px;\n"+
"  bottom: 0; }\n"+
"\n"+
".goto-form {\n"+
"  position: absolute;\n"+
"  z-index: 3;\n"+
"  bottom: 10px;\n"+
"  left: 50%;\n"+
"  height: 1.75em;\n"+
"  margin: 0 0 0 -9.125em;\n"+
"  line-height: 1.75em;\n"+
"  padding: 0.625em;\n"+
"  display: none;\n"+
"  background: #ccc;\n"+
"  overflow: hidden;\n"+
"  border-radius: 10px;\n"+
"}\n"+
".goto-form label {\n"+
"  font-weight: bold;\n"+
"}\n"+
".goto-form label, .goto-form input {\n"+
"  display: inline-block;\n"+
"  font-family: inherit;\n"+
"}\n"+
".deck-goto .goto-form {\n"+
"  display: block;\n"+
"}\n"+
"\n"+
"#goto-slide {\n"+
"  width: 8.375em;\n"+
"  margin: 0 0.625em;\n"+
"  height: 1.4375em;\n"+
"}\n"+
"\n"+
"@media print {\n"+
"  .goto-form, #goto-slide {\n"+
"    display: none;\n"+
"  }\n"+
"}\n"+
"\n"+
".deck-container.no-status .deck-status {\n"+
"  display: none;\n"+
"}\n"+
"\n"+
".deck-status {\n"+
"  position: absolute;\n"+
"  z-index: 3;\n"+
"  left: 0;\n"+
"  bottom: 10px;\n"+
"  margin: 0;\n"+
"  padding: 0;\n"+
"  font-size: 10px;\n"+
"  /*outline: 1px solid red;*/\n"+
"  width: 100%;\n"+
"  text-align: center;\n"+
"  color: #888;\n"+
"}\n"+
"\n"+
".deck-prev-link, .deck-next-link {\n"+
"  display: none;\n"+
"  position: absolute;\n"+
"  z-index: 3;\n"+
"  top: 50%;\n"+
"  width: 32px;\n"+
"  height: 32px;\n"+
"  margin-top: -16px;\n"+
"  font-size: 20px;\n"+
"  font-weight: bold;\n"+
"  line-height: 32px;\n"+
"  vertical-align: middle;\n"+
"  text-align: center;\n"+
"  text-decoration: none;\n"+
"  color: #fff;\n"+
"  background: #888;\n"+
"  border-radius: 16px;\n"+
"}\n"+
".deck-prev-link:hover, .deck-prev-link:focus, .deck-prev-link:active, .deck-prev-link:visited, .deck-next-link:hover, .deck-next-link:focus, .deck-next-link:active, .deck-next-link:visited {\n"+
"  color: #fff;\n"+
"}\n"+
"\n"+
".deck-prev-link {\n"+
"  left: 8px;\n"+
"}\n"+
"\n"+
".deck-next-link {\n"+
"  right: 8px;\n"+
"}\n"+
"\n"+
".deck-container:hover .deck-prev-link, .deck-container:hover .deck-next-link {\n"+
"  display: block;\n"+
"}\n"+
".deck-container:hover .deck-prev-link.deck-nav-disabled, .touch .deck-container:hover .deck-prev-link, .deck-container:hover .deck-next-link.deck-nav-disabled, .touch .deck-container:hover .deck-next-link {\n"+
"  display: none;\n"+
"}\n"+
"\n"+
"@media print {\n"+
"  .deck-prev-link, .deck-next-link {\n"+
"    display: none !important;\n"+
"  }\n"+
"}\n"+
"\n"+
".deck-menu {\n"+
"  overflow: auto;\n"+
"}\n"+
".deck-menu .slide {\n"+
"  background: #eee;\n"+
"  position: relative;\n"+
"  left: 0;\n"+
"  top: 0;\n"+
"  visibility: visible;\n"+
"  cursor: pointer;\n"+
"}\n"+
".no-csstransforms .deck-menu > .slide {\n"+
"  float: left;\n"+
"  width: 22%;\n"+
"  height: 22%;\n"+
"  min-height: 0;\n"+
"  margin: 1%;\n"+
"  font-size: 0.22em;\n"+
"  overflow: hidden;\n"+
"  padding: 0 0.5%;\n"+
"}\n"+
".csstransforms .deck-menu > .slide {\n"+
"  -webkit-transform: scale(0.22) !important;\n"+
"  -ms-transform: scale(0.22) !important;\n"+
"  transform: scale(0.22) !important;\n"+
"  -webkit-transform-origin: 0 0;\n"+
"  -ms-transform-origin: 0 0;\n"+
"  transform-origin: 0 0;\n"+
"  -moz-box-sizing: border-box;\n"+
"  box-sizing: border-box;\n"+
"  width: 100%;\n"+
"  height: 100%;\n"+
"  overflow: hidden;\n"+
"  padding: 0 48px;\n"+
"  margin: 12px;\n"+
"}\n"+
".deck-menu iframe, .deck-menu img, .deck-menu video {\n"+
"  max-width: 100%;\n"+
"}\n"+
".deck-menu .deck-current, .no-touch .deck-menu .slide:hover {\n"+
"  background: #ddf;\n"+
"}\n"+
".deck-menu.deck-container:hover .deck-prev-link, .deck-menu.deck-container:hover .deck-next-link {\n"+
"  display: none;\n"+
"}\n"+
"\n"+
"\n"+
".svg-object { display: block; } /* used to be a div */\n"+
"\n"+
"\n"+
".deck-container .attribution-wrap {\n"+
"  /* cover the complete offset parent */\n"+
"  position: absolute;\n"+
"  left: 0;\n"+
"  width: 100%;\n"+
"  top: 0;\n"+
"  height: 100%;\n"+
"}\n"+
".deck-container .attribution-link {\n"+
"  font-size: 10px;\n"+
"  color: white;\n"+
"  background: black;\n"+
"  border: 1px solid darkgrey;\n"+
"  opacity: 0.6;\n"+
"  right: 0;\n"+
"  bottom: 5px;\n"+
"  position: absolute;\n"+
"  padding: 0 5px;\n"+
"}\n"+
"\n"+
"/* the time etc */\n"+
".timekeeper {\n"+
"  font-size: 28px;\n"+
"  border-radius: 3px;\n"+
"  background: black;\n"+
"  color: white;\n"+
"  display: inline-block;\n"+
"  position: absolute;\n"+
"  left: 840px;\n"+
"  top: 340px;\n"+
"  width: 400px;\n"+
"  padding: 4px;\n"+
"  margin: -4px; }\n"+
"  body:not(.has-clones) .timekeeper {\n"+
"    visibility: hidden; }\n"+
"  .timekeeper .timekeeper-time, .timekeeper .timekeeper-local-relative-time {\n"+
"    margin: 0;\n"+
"    padding: 0;\n"+
"    display: inline-block;\n"+
"    width: 50%;\n"+
"    text-align: center;\n"+
"    vertical-align: middle; }\n"+
"    .timekeeper .timekeeper-time.timekeeper-local-relative-time, .timekeeper .timekeeper-local-relative-time.timekeeper-local-relative-time {\n"+
"      color: grey; }\n"+
"    .timekeeper .timekeeper-time.timekeeper-time, .timekeeper .timekeeper-local-relative-time.timekeeper-time {\n"+
"      border-left: 2px solid grey;\n"+
"      /*margin-left: -10px; not needed with the injected template (no space in it)*/\n"+
"      margin-right: -15px; }\n"+
"  .timekeeper .timekeeper-relative-time {\n"+
"    margin-top: 5px;\n"+
"    border-top: 2px solid grey;\n"+
"    text-align: center;\n"+
"    font-size: 300%; }\n"+
"  .timekeeper .timekeeper-bang, .timekeeper .timekeeper-clear {\n"+
"    display: inline-block;\n"+
"    position: absolute;\n"+
"    width: 10px;\n"+
"    height: 10px;\n"+
"    left: 45%;\n"+
"    border: 2px solid grey;\n"+
"    border-radius: 15px;\n"+
"    background: black; }\n"+
"    .timekeeper .timekeeper-bang.timekeeper-bang, .timekeeper .timekeeper-clear.timekeeper-bang {\n"+
"      top: 10px; }\n"+
"    .timekeeper .timekeeper-bang.timekeeper-clear, .timekeeper .timekeeper-clear.timekeeper-clear {\n"+
"      top: 23px; }\n"+
"    .timekeeper .timekeeper-bang:not(.timekeeper-notification), .timekeeper .timekeeper-clear:not(.timekeeper-notification) {\n"+
"      transition: background 300ms linear;\n"+
"      -webkit-transition: background 300ms linear; }\n"+
"    .timekeeper .timekeeper-bang.timekeeper-notification, .timekeeper .timekeeper-clear.timekeeper-notification {\n"+
"      border-color: white;\n"+
"      background: green; }\n"+
"      .timekeeper .timekeeper-bang.timekeeper-notification.timekeeper-clear, .timekeeper .timekeeper-clear.timekeeper-notification.timekeeper-clear {\n"+
"        background: red; }\n"+
"\n"+
"/* the logs */\n"+
".timekeeper-logs {\n"+
"  visibility: hidden;\n"+
"  border: 2px solid black;\n"+
"  border-radius: 2px;\n"+
"  background: #181818;\n"+
"  color: yellow;\n"+
"  padding: 5px;\n"+
"  position: absolute;\n"+
"  width: 500px;\n"+
"  right: 0;\n"+
"  top: 0;\n"+
"  bottom: 0;\n"+
"  opacity: .8; }\n"+
"  .timekeeper-logs.timekeeper-logs-visible {\n"+
"    visibility: visible; }\n"+
"  .timekeeper-logs pre {\n"+
"    font-size: 10px;\n"+
"    overflow-y: scroll;\n"+
"    position: absolute;\n"+
"    top: 50px;\n"+
"    bottom: 0;\n"+
"    left: 0;\n"+
"    right: 0; }\n"+
"  .timekeeper-logs .button {\n"+
"    color: white;\n"+
"    background: black;\n"+
"    display: inline-block;\n"+
"    padding: 0 5px;\n"+
"    margin-right: 10px;\n"+
"    border: 1px solid white;\n"+
"    border-radius: 3px; }\n"+
"\n"+
"body.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) div.notes-target {\n"+
"  top: 490px; }\n"+
"\n"+
".deck-container .slide.image-full > .attribution-wrap, .deck-container .slide.image-full > img, .deck-container .slide.image-full > div.img, .deck-container .slide.image-fit > .attribution-wrap, .deck-container .slide.image-fit > img, .deck-container .slide.image-fit > div.img {\n"+
"  z-index: -1;\n"+
"}\n"+
".deck-container .slide.image-full > img, .deck-container .slide.image-full > div.img, .deck-container .slide.image-fit > img, .deck-container .slide.image-fit > div.img {\n"+
"  margin: 0;\n"+
"  padding: 0;\n"+
"  position: relative;\n"+
"  left: 0;\n"+
"  top: 0;\n"+
"  width: 100%;\n"+
"  min-height: 100%;\n"+
"}\n"+
".deck-container .slide.image-full div.img, .deck-container .slide.image-fit div.img {\n"+
"  width: 100%;\n"+
"  height: 100%;\n"+
"  outline: 2px solid red;\n"+
"  background-position: center center;\n"+
"  background-repeat: no-repeat;\n"+
"}\n"+
".deck-container .slide.image-full.image-full div.img, .deck-container .slide.image-fit.image-full div.img {\n"+
"  -webkit-background-size: cover;\n"+
"  -moz-background-size: cover;\n"+
"  -o-background-size: cover;\n"+
"  background-size: cover;\n"+
"}\n"+
".deck-container .slide.image-full.image-fit div.img, .deck-container .slide.image-fit.image-fit div.img {\n"+
"  -webkit-background-size: contain;\n"+
"  -moz-background-size: contain;\n"+
"  -o-background-size: contain;\n"+
"  background-size: contain;\n"+
"}\n"+
".deck-container .slide.top-left h2 {\n"+
"  position: absolute;\n"+
"  border: 0px;\n"+
"  top: 50px;\n"+
"  left: 50px;\n"+
"}\n"+
".deck-container .slide.top-right h2 {\n"+
"  position: absolute;\n"+
"  border: 0px;\n"+
"  top: 50px;\n"+
"  right: 50px;\n"+
"}\n"+
".deck-container .slide.bottom-left h2 {\n"+
"  position: absolute;\n"+
"  border: 0px;\n"+
"  bottom: 50px;\n"+
"  left: 50px;\n"+
"}\n"+
".deck-container .slide.bottom-right h2 {\n"+
"  position: absolute;\n"+
"  border: 0px;\n"+
"  bottom: 50px;\n"+
"  right: 50px;\n"+
"}\n"+
".deck-container .slide.no-title h1, .deck-container .slide.no-title h2 {\n"+
"  display: none;\n"+
"}\n"+
".deck-container .slide.darkened h2 {\n"+
"  background: rgba(0, 0, 0, 0.75);\n"+
"  padding: 15px;\n"+
"  margin: -15px;\n"+
"}\n"+
".deck-container .in3d-table {\n"+
"  transform: scale(0.7) perspective(600px) rotateX(40deg) rotateZ(-15deg) translate(-30px, -120px);\n"+
"}\n"+
"\n"+
".deck-container:not(.deck-globalscale) div.comment, .deck-container:not(.deck-globalscale) .comment {\n"+
"  z-index: 1000 !important;\n"+
"  /* might need theme specific thing here */\n"+
"  background-color: yellow;\n"+
"  /* force opaque... */\n"+
"  color: darkred;\n"+
"}\n"+
"\n"+
".deck-container:not(.deck-globalscale) .hasSVG .comment {\n"+
"  /*transform: none;*/\n"+
"  -webkit-transform: none;\n"+
"}\n"+
"\n"+
"body:not(.has-clones):not(.show-comments) .deck-container > .slide .comment, body:not(.has-clones):not(.show-comments) .deck-container > .slide .showwhencomment {\n"+
"  display: none;\n"+
"}\n"+
"\n"+
".deck-container > .slide .comment {\n"+
"  display: block; /* used to be a div, so... */\n"+
"  -webkit-box-sizing: border-box;\n"+
"  -moz-box-sizing: border-box;\n"+
"  box-sizing: border-box;\n"+
"  /*outline: 1px solid red;*/\n"+
"  border-radius: 3px;\n"+
"  color: darkred;\n"+
"  background: rgba(255, 255, 128, 0.7);\n"+
"  /*        opacity: .8;*/\n"+
"  font-size: 14px;\n"+
"  line-height: initial;\n"+
"  padding: 1px 15px;\n"+
"  width: auto;\n"+
"  height: 20px;\n"+
"  margin: 0;\n"+
"  margin-left: 100px;\n"+
"  margin-top: -6.6px;\n"+
"  margin-bottom: -13.2px;\n"+
"}\n"+
"\n"+
".deck-container > .slide .comment.small {\n"+
"  width: 120px;\n"+
"  margin-left: -100px;\n"+
"}\n"+
"\n"+
".deck-container > .slide .comment.twolines {\n"+
"  height: 40px;\n"+
"  margin-top: -13.333px;\n"+
"  margin-bottom: -26.667px;\n"+
"}\n"+
"\n"+
".hljs{display:block;overflow-x:auto;padding:0.5em;color:#333;background:#f8f8f8;-webkit-text-size-adjust:none}.hljs-comment,.diff .hljs-header{color:#998;font-style:italic}.hljs-keyword,.css .rule .hljs-keyword,.hljs-winutils,.nginx .hljs-title,.hljs-subst,.hljs-request,.hljs-status{color:#333;font-weight:bold}.hljs-number,.hljs-hexcolor,.ruby .hljs-constant{color:#008080}.hljs-string,.hljs-tag .hljs-value,.hljs-doctag,.tex .hljs-formula{color:#d14}.hljs-title,.hljs-id,.scss .hljs-preprocessor{color:#900;font-weight:bold}.hljs-list .hljs-keyword,.hljs-subst{font-weight:normal}.hljs-class .hljs-title,.hljs-type,.vhdl .hljs-literal,.tex .hljs-command{color:#458;font-weight:bold}.hljs-tag,.hljs-tag .hljs-title,.hljs-rule .hljs-property,.django .hljs-tag .hljs-keyword{color:#000080;font-weight:normal}.hljs-attribute,.hljs-variable,.lisp .hljs-body,.hljs-name{color:#008080}.hljs-regexp{color:#009926}.hljs-symbol,.ruby .hljs-symbol .hljs-string,.lisp .hljs-keyword,.clojure .hljs-keyword,.scheme .hljs-keyword,.tex .hljs-special,.hljs-prompt{color:#990073}.hljs-built_in{color:#0086b3}.hljs-preprocessor,.hljs-pragma,.hljs-pi,.hljs-doctype,.hljs-shebang,.hljs-cdata{color:#999;font-weight:bold}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.diff .hljs-change{background:#0086b3}.hljs-chunk{color:#aaa}\n"+
".save-dom-link { position: fixed; z-index: 1000; }\n"+
"\n"+
"\n"+
"﻿.deck-annotate-canvas {\n"+
"    display: none;\n"+
"    position: absolute;\n"+
"    top: 0;\n"+
"    left: 0;\n"+
"    width: 100%;\n"+
"    height: 100%;\n"+
"    z-index: 1000;\n"+
"}\n"+
"\n"+
".deck-annotate-canvas > canvas {\n"+
"    width: 100%;\n"+
"    height: 100%;\n"+
"}\n"+
"\n"+
"#deck-annotate-tools {\n"+
"    display: none;\n"+
"    z-index: 1001;\n"+
"    bottom: 40px;\n"+
"    right: 15px;\n"+
"    padding: 10px;\n"+
"    padding-top: 0;\n"+
"    position: absolute;\n"+
"    background-color: white;\n"+
"}\n"+
"\n"+
"@media print {\n"+
"    #deck-annotate-tools {\n"+
"        display: none;\n"+
"    }\n"+
"}\n"+
"\n"+
"#deck-annotate-tools > .hidden {\n"+
"    display: none;\n"+
"}\n"+
"\n"+
"#tools-title {\n"+
"    font-size: medium;\n"+
"}\n"+
"\n"+
"#shape-picker .shape {\n"+
"    display: inline-block;\n"+
"    width: 26px;\n"+
"    height: 26px;\n"+
"    padding: 1px;\n"+
"    margin: 1px;\n"+
"    border: 2px solid black;\n"+
"}\n"+
"\n"+
"#shape-line {\n"+
"    margin: auto;\n"+
"    border: 0;\n"+
"    background-color: black;\n"+
"    margin-top: 12px;\n"+
"    height: 5px;\n"+
"    width: 80%;\n"+
"}\n"+
"\n"+
"#shape-rectangle {\n"+
"    margin: auto;\n"+
"    border: 3px solid black;\n"+
"    margin-top: 2px;\n"+
"    height: 60%;\n"+
"    width: 60%;\n"+
"}\n"+
"\n"+
"#shape-circle {\n"+
"    margin: auto;\n"+
"    border: 3px solid black;\n"+
"    margin-top: 2px;\n"+
"    height: 60%;\n"+
"    width: 60%;\n"+
"    border-radius: 50%;\n"+
"}\n"+
"\n"+
"#size-picker .sizebox {\n"+
"    display: inline-flex;\n"+
"    vertical-align: middle;\n"+
"    align-items: center;\n"+
"    justify-content: center;\n"+
"    min-height: 1.5em;\n"+
"    min-width: 1.5em;\n"+
"    border: 2px solid black;\n"+
"    margin: 1px;\n"+
"}\n"+
"\n"+
"#size-picker .size {\n"+
"    display: inline-block;\n"+
"    vertical-align: middle;\n"+
"    padding: 2px;\n"+
"    margin: 4px 2px;\n"+
"    border-radius: 50%;\n"+
"    border: 2px solid black;\n"+
"}\n"+
"\n"+
"#color-picker .color {\n"+
"    width: 25px;\n"+
"    height: 25px;\n"+
"    margin: 1px;\n"+
"    border: 2px solid black;\n"+
"}\n"+
"\n"+
"#deck-annotate-tools .active {\n"+
"    border: 2px solid green;\n"+
"}\n"+
"\n"+
"#deck-annotate-tools > .expand-arrow {\n"+
"    float:right;\n"+
"    border-top: 10px solid transparent;\n"+
"	  border-bottom: 10px solid transparent;\n"+
"}\n"+
"\n"+
"#deck-annotate-tools > .left.expand-arrow {\n"+
"    border-right:10px solid blue; \n"+
"}\n"+
"\n"+
"#deck-annotate-tools > .right.expand-arrow {\n"+
"    display: inline-block;\n"+
"    border-left: 10px solid blue;\n"+
"}\n"+
"\n"+
"#deck-annotate-tools .actionbutton {\n"+
"    display: inline-flex;\n"+
"    vertical-align: middle;\n"+
"    align-items: center;\n"+
"    justify-content: center;\n"+
"    min-height: 1.5em;\n"+
"    min-width: 1.5em;\n"+
"    border: 2px solid black;\n"+
"    margin: 1px;\n"+
"}\n"+
"\n"+
".slide .floatright {\n"+
"  float: right; }\n"+
"\n"+
".slide .floatleft {\n"+
"  float: left; }\n"+
"\n"+
".slide .displaynone {\n"+
"  display: none; }\n"+
"\n"+
".slide li.no {\n"+
"  list-style: none !important; }\n"+
"\n"+
".slide.no-bullets ol, .slide.no-bullets ul {\n"+
"  list-style: none; }\n"+
"\n"+
".slide .center {\n"+
"  text-align: center; }\n"+
"\n"+
".slide .left {\n"+
"  float: left;\n"+
"  width: 50%; }\n"+
"\n"+
".slide .right {\n"+
"  float: right;\n"+
"  width: 50%; }\n"+
"\n"+
".slide .c1 {\n"+
"  width: 8.333% !important; }\n"+
"\n"+
".slide .c2 {\n"+
"  width: 16.667% !important; }\n"+
"\n"+
".slide .c3 {\n"+
"  width: 25% !important; }\n"+
"\n"+
".slide .c4 {\n"+
"  width: 33.333% !important; }\n"+
"\n"+
".slide .c5 {\n"+
"  width: 41.667% !important; }\n"+
"\n"+
".slide .c6 {\n"+
"  width: 50% !important; }\n"+
"\n"+
".slide .c7 {\n"+
"  width: 58.333% !important; }\n"+
"\n"+
".slide .c8 {\n"+
"  width: 66.667% !important; }\n"+
"\n"+
".slide .c9 {\n"+
"  width: 75% !important; }\n"+
"\n"+
".slide .c10 {\n"+
"  width: 83.333% !important; }\n"+
"\n"+
".slide .c11 {\n"+
"  width: 91.667% !important; }\n"+
"\n"+
".slide .c12 {\n"+
"  width: 100% !important; }\n"+
"\n"+
".slide .C1 {\n"+
"  width: 4.167% !important; }\n"+
"\n"+
".slide .C2 {\n"+
"  width: 8.333% !important; }\n"+
"\n"+
".slide .C3 {\n"+
"  width: 12.5% !important; }\n"+
"\n"+
".slide .C4 {\n"+
"  width: 16.667% !important; }\n"+
"\n"+
".slide .C5 {\n"+
"  width: 20.833% !important; }\n"+
"\n"+
".slide .C6 {\n"+
"  width: 25% !important; }\n"+
"\n"+
".slide .C7 {\n"+
"  width: 29.167% !important; }\n"+
"\n"+
".slide .C8 {\n"+
"  width: 33.333% !important; }\n"+
"\n"+
".slide .C9 {\n"+
"  width: 37.5% !important; }\n"+
"\n"+
".slide .C10 {\n"+
"  width: 41.667% !important; }\n"+
"\n"+
".slide .C11 {\n"+
"  width: 45.833% !important; }\n"+
"\n"+
".slide .C12 {\n"+
"  width: 50% !important; }\n"+
"\n"+
".slide .C13 {\n"+
"  width: 54.167% !important; }\n"+
"\n"+
".slide .C14 {\n"+
"  width: 58.333% !important; }\n"+
"\n"+
".slide .C15 {\n"+
"  width: 62.5% !important; }\n"+
"\n"+
".slide .C16 {\n"+
"  width: 66.667% !important; }\n"+
"\n"+
".slide .C17 {\n"+
"  width: 70.833% !important; }\n"+
"\n"+
".slide .C18 {\n"+
"  width: 75% !important; }\n"+
"\n"+
".slide .C19 {\n"+
"  width: 79.167% !important; }\n"+
"\n"+
".slide .C20 {\n"+
"  width: 83.333% !important; }\n"+
"\n"+
".slide .C21 {\n"+
"  width: 87.5% !important; }\n"+
"\n"+
".slide .C22 {\n"+
"  width: 91.667% !important; }\n"+
"\n"+
".slide .C23 {\n"+
"  width: 95.833% !important; }\n"+
"\n"+
".slide .C24 {\n"+
"  width: 100% !important; }\n"+
"\n"+
".slide .clearboth {\n"+
"  clear: both; }\n"+
"\n"+
".slide.media-left > *:not(h2):not(h1):not(img):not(blockquote):not(pre):not(div):not(figure):not(.media) {\n"+
"  margin-left: 400px; }\n"+
".slide.media-left > figure, .slide.media-left > img, .slide.media-left > blockquote, .slide.media-left > pre, .slide.media-left > .media {\n"+
"  float: left;\n"+
"  width: 50%;\n"+
"  box-sizing: border-box; }\n"+
"\n"+
".slide.media-right > *:not(h2):not(h1):not(img):not(blockquote):not(pre):not(div):not(figure):not(.media) {\n"+
"  margin-right: 400px; }\n"+
".slide.media-right > figure, .slide.media-right > img, .slide.media-right > blockquote, .slide.media-right > pre, .slide.media-right > .media {\n"+
"  float: right;\n"+
"  width: 50%;\n"+
"  box-sizing: border-box; }\n"+
"\n"+
".slide.image-stripes > div {\n"+
"  overflow: hidden;\n"+
"  align-content: center; }\n"+
".slide.image-stripes img {\n"+
"  height: 400px;\n"+
"  max-width: none;\n"+
"  position: relative;\n"+
"  left: 50%;\n"+
"  transform: translate(-50%, 0); }\n"+
"") }