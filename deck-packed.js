/*
  This is a packed deck.js with some extensions and styles.
  It has been generated from version 45b7bcbe55519ecaa8fbf732494f1ebef6131ee8 .
  It includes:
     ..../extensions/includedeck/load.js
     ..../jquery.min.js
     ..../modernizr.custom.js
     ..../core/deck.core.js
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
     ..../extensions/codemirror/codemirror-compressed.js
     ..../extensions/codemirror/deck.codemirror.js
     ..../extensions/style-chunks/core.css
     ..../extensions/fit/deck.fit-fs.css
     ..../extensions/katex/katex.min.css
     ..../extensions/clone/deck.clone.css
     ..../extensions/goto/deck.goto.css
     ..../extensions/progress/deck.progress.css
     ..../extensions/navigation/deck.navigation.css
     ..../extensions/menu/deck.menu.css
     ..../extensions/attribution/deck.attribution.css
     ..../extensions/timekeeper/deck.timekeeper.css
     ..../extensions/style-chunks/simple.css
     ..../extensions/style-chunks/comments.css
     ..../extensions/codemirror/codemirror.css
*/


/*!
 * Includedeck.
 *
 * Copyright (c) 2013-2014 Rémi Emonet.
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
        // Style extensions
        "style-chunks": [
	    prefix + "/extensions/style-chunks/simple.css",
	    prefix + "/extensions/style-chunks/comments.css"
        ],
        /////////////////////////////////////////
        // external extensions (not in this repository at the time of writting)
        "codemirror": [
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
        /// profile-6: same as profile 5 but use smartdown+katex
        "profile-6": ["@_newdeck", "@_smartdown", "@_fit-fs", "@_katex", "@_clone", "@_goto", "@_progress", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg",
                      "@_metadata", "@_attribution", "@_container-styling", "@_timekeeper", "@_style-chunks"],
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

    // if there are two '#' in the url, take everything after the second as a theme name
    var forceTheme = null;
    if ((typeof ACTUALLY_EXPORT_A_LIST_OF_FILES == 'undefined') && (window.location.hash.replace(/[^#]/gi, '').length == 2)) {
        var theme = window.location.hash.replace(/^.*#/gi, '')
        var base = window.location.hash.replace(/#[^#]*$/gi, '')
        forceTheme = theme;
        window.location.hash = base;
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

;/*! showdown 02-08-2015 */
(function(){
/**
 * Created by Tivie on 13-07-2015.
 */

function getDefaultOpts(simple) {
  'use strict';

  var defaultOptions = {
    omitExtraWLInCodeBlocks: {
      default: false,
      describe: 'Omit the default extra whiteline added to code blocks',
      type: 'boolean'
    },
    noHeaderId: {
      default: false,
      describe: 'Turn on/off generated header id',
      type: 'boolean'
    },
    prefixHeaderId: {
      default: false,
      describe: 'Specify a prefix to generated header ids',
      type: 'string'
    },
    headerLevelStart: {
      default: false,
      describe: 'The header blocks level start',
      type: 'integer'
    },
    parseImgDimensions: {
      default: false,
      describe: 'Turn on/off image dimension parsing',
      type: 'boolean'
    },
    simplifiedAutoLink: {
      default: false,
      describe: 'Turn on/off GFM autolink style',
      type: 'boolean'
    },
    literalMidWordUnderscores: {
      default: false,
      describe: 'Parse midword underscores as literal underscores',
      type: 'boolean'
    },
    strikethrough: {
      default: false,
      describe: 'Turn on/off strikethrough support',
      type: 'boolean'
    },
    tables: {
      default: false,
      describe: 'Turn on/off tables support',
      type: 'boolean'
    },
    tablesHeaderId: {
      default: false,
      describe: 'Add an id to table headers',
      type: 'boolean'
    },
    ghCodeBlocks: {
      default: true,
      describe: 'Turn on/off GFM fenced code blocks support',
      type: 'boolean'
    },
    tasklists: {
      default: false,
      describe: 'Turn on/off GFM tasklist support',
      type: 'boolean'
    },
    smoothLivePreview: {
      default: false,
      describe: 'Prevents weird effects in live previews due to incomplete input',
      type: 'boolean'
    }
  };
  if (simple === false) {
    return JSON.parse(JSON.stringify(defaultOptions));
  }
  var ret = {};
  for (var opt in defaultOptions) {
    if (defaultOptions.hasOwnProperty(opt)) {
      ret[opt] = defaultOptions[opt].default;
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
    flavor = {
      github: {
        omitExtraWLInCodeBlocks:   true,
        prefixHeaderId:            'user-content-',
        simplifiedAutoLink:        true,
        literalMidWordUnderscores: true,
        strikethrough:             true,
        tables:                    true,
        tablesHeaderId:            true,
        ghCodeBlocks:              true,
        tasklists:                 true
      },
      vanilla: getDefaultOpts(true)
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
  if (flavor.hasOwnProperty(name)) {
    var preset = flavor[name];
    for (var option in preset) {
      if (preset.hasOwnProperty(option)) {
        globalOptions[option] = preset[option];
      }
    }
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
function validate(extension, name) {
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

    if (type !== 'lang' && type !== 'output') {
      ret.valid = false;
      ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang" or "output"';
      return ret;
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
      if (!ext.regex instanceof RegExp) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' +
          typeof ext.regex + ' given';
        return ret;
      }
      if (showdown.helper.isUndefined(ext.replace)) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
        return ret;
      }

    } else {
      ret.valid = false;
      ret.error = baseMsg + 'extensions must define either a "regex" property or a "filter" method';
      return ret;
    }

    if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
      ret.valid = false;
      ret.error = baseMsg + 'output extensions must define a filter property';
      return ret;
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
showdown.helper.isString = function isString(a) {
  'use strict';
  return (typeof a === 'string' || a instanceof String);
};

/**
 * ForEach helper function
 * @static
 * @param {*} obj
 * @param {function} callback
 */
showdown.helper.forEach = function forEach(obj, callback) {
  'use strict';
  if (typeof obj.forEach === 'function') {
    obj.forEach(callback);
  } else {
    for (var i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj);
    }
  }
};

/**
 * isArray helper function
 * @static
 * @param {*} a
 * @returns {boolean}
 */
showdown.helper.isArray = function isArray(a) {
  'use strict';
  return a.constructor === Array;
};

/**
 * Check if value is undefined
 * @static
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 */
showdown.helper.isUndefined = function isUndefined(value) {
  'use strict';
  return typeof value === 'undefined';
};

/**
 * Standardidize extension name
 * @static
 * @param {string} s extension name
 * @returns {string}
 */
showdown.helper.stdExtName = function (s) {
  'use strict';
  return s.replace(/[_-]||\s/g, '').toLowerCase();
};

function escapeCharactersCallback(wholeMatch, m1) {
  'use strict';
  var charCodeToEscape = m1.charCodeAt(0);
  return '~E' + charCodeToEscape + 'E';
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
showdown.helper.escapeCharacters = function escapeCharacters(text, charsToEscape, afterBackslash) {
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

/**
 * POLYFILLS
 */
if (showdown.helper.isUndefined(console)) {
  console = {
    warn: function (msg) {
      'use strict';
      alert(msg);
    },
    log: function (msg) {
      'use strict';
      alert(msg);
    }
  };
}

/**
 * Created by Estevao on 31-05-2015.
 */

/**
 * Showdown Converter class
 * @class
 * @param {object} [converterOptions]
 * @returns {
 *  {makeHtml: Function},
 *  {setOption: Function},
 *  {getOption: Function},
 *  {getOptions: Function}
 * }
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
       * The parser Order
       * @private
       * @type {string[]}
       */
      parserOrder = [
        'githubCodeBlocks',
        'hashHTMLBlocks',
        'stripLinkDefinitions',
        'blockGamut',
        'unescapeSpecialChars'
      ];

  _constructor();

  /**
   * Converter constructor
   * @private
   */
  function _constructor() {
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
  function _parseExtension(ext, name) {

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

        default:
          // should never reach here
          throw Error('Extension loader error: Type unrecognized!!!');
      }
    }
  }

  /**
   * LEGACY_SUPPORT
   * @param {*} ext
   * @param {string} name
   */
  function legacyExtensionLoading(ext, name) {
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
      gUrls:           {},
      gTitles:         {},
      gDimensions:     {},
      gListLevel:      0,
      hashLinkCounts:  {},
      langExtensions:  langExtensions,
      outputModifiers: outputModifiers,
      converter:       this
    };

    // attacklab: Replace ~ with ~T
    // This lets us use tilde as an escape char to avoid md5 hashes
    // The choice of character is arbitrary; anything that isn't
    // magic in Markdown will work.
    text = text.replace(/~/g, '~T');

    // attacklab: Replace $ with ~D
    // RegExp interprets $ as a special character
    // when it's in a replacement string
    text = text.replace(/\$/g, '~D');

    // Standardize line endings
    text = text.replace(/\r\n/g, '\n'); // DOS to Unix
    text = text.replace(/\r/g, '\n'); // Mac to Unix

    // Make sure text begins and ends with a couple of newlines:
    text = '\n\n' + text + '\n\n';

    // detab
    text = showdown.subParser('detab')(text, options, globals);

    // stripBlankLines
    text = showdown.subParser('stripBlankLines')(text, options, globals);

    //run languageExtensions
    showdown.helper.forEach(langExtensions, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });

    // Run all registered parsers
    for (var i = 0; i < parserOrder.length; ++i) {
      var name = parserOrder[i];
      text = parsers[name](text, options, globals);
    }

    // attacklab: Restore dollar signs
    text = text.replace(/~D/g, '$$');

    // attacklab: Restore tildes
    text = text.replace(/~T/g, '~');

    // Run output modifiers
    showdown.helper.forEach(outputModifiers, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });

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
    if (flavor.hasOwnProperty(name)) {
      var preset = flavor[name];
      for (var option in preset) {
        if (preset.hasOwnProperty(option)) {
          options[option] = preset[option];
        }
      }
    }
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
};

/**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */
showdown.subParser('anchors', function (text, config, globals) {
  'use strict';

  var writeAnchorTag = function (wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
    if (showdown.helper.isUndefined(m7)) {
      m7 = '';
    }
    wholeMatch = m1;
    var linkText = m2,
        linkId = m3.toLowerCase(),
        url = m4,
        title = m7;

    if (!url) {
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
        if (wholeMatch.search(/\(\s*\)$/m) > -1) {
          // Special case for explicit empty url
          url = '';
        } else {
          return wholeMatch;
        }
      }
    }

    url = showdown.helper.escapeCharacters(url, '*_', false);
    var result = '<a href="' + url + '"';

    if (title !== '' && title !== null) {
      title = title.replace(/"/g, '&quot;');
      title = showdown.helper.escapeCharacters(title, '*_', false);
      result += ' title="' + title + '"';
    }

    result += '>' + linkText + '</a>';

    return result;
  };

  // First, handle reference-style links: [link text] [id]
  /*
   text = text.replace(/
   (							// wrap whole match in $1
   \[
   (
   (?:
   \[[^\]]*\]		// allow brackets nested one level
   |
   [^\[]			// or anything else
   )*
   )
   \]

   [ ]?					// one optional space
   (?:\n[ ]*)?				// one optional newline followed by spaces

   \[
   (.*?)					// id = $3
   \]
   )()()()()					// pad remaining backreferences
   /g,_DoAnchors_callback);
   */
  text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeAnchorTag);

  //
  // Next, inline-style links: [link text](url "optional title")
  //

  /*
   text = text.replace(/
   (						// wrap whole match in $1
   \[
   (
   (?:
   \[[^\]]*\]	// allow brackets nested one level
   |
   [^\[\]]			// or anything else
   )
   )
   \]
   \(						// literal paren
   [ \t]*
   ()						// no id, so leave $3 empty
   <?(.*?)>?				// href = $4
   [ \t]*
   (						// $5
   (['"])				// quote char = $6
   (.*?)				// Title = $7
   \6					// matching quote
   [ \t]*				// ignore any spaces/tabs between closing quote and )
   )?						// title is optional
   \)
   )
   /g,writeAnchorTag);
   */
  text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,
                      writeAnchorTag);

  //
  // Last, handle reference-style shortcuts: [link text]
  // These must come last in case you've also got [link test][1]
  // or [link test](/foo)
  //

  /*
   text = text.replace(/
   (                // wrap whole match in $1
   \[
   ([^\[\]]+)       // link text = $2; can't contain '[' or ']'
   \]
   )()()()()()      // pad rest of backreferences
   /g, writeAnchorTag);
   */
  text = text.replace(/(\[([^\[\]]+)\])()()()()()/g, writeAnchorTag);

  return text;

});

showdown.subParser('autoLinks', function (text, options) {
  'use strict';

  //simpleURLRegex  = /\b(((https?|ftp|dict):\/\/|www\.)[-.+~:?#@!$&'()*,;=[\]\w]+)\b/gi,

  var simpleURLRegex  = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi,
      delimUrlRegex   = /<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,
      simpleMailRegex = /\b(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)\b/gi,
      delimMailRegex  = /<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;

  text = text.replace(delimUrlRegex, '<a href=\"$1\">$1</a>');
  text = text.replace(delimMailRegex, replaceMail);
  //simpleURLRegex  = /\b(((https?|ftp|dict):\/\/|www\.)[-.+~:?#@!$&'()*,;=[\]\w]+)\b/gi,
  // Email addresses: <address@domain.foo>

  if (options.simplifiedAutoLink) {
    text = text.replace(simpleURLRegex, '<a href=\"$1\">$1</a>');
    text = text.replace(simpleMailRegex, '<a href=\"$1\">$1</a>');
  }

  function replaceMail(wholeMatch, m1) {
    var unescapedStr = showdown.subParser('unescapeSpecialChars')(m1);
    return showdown.subParser('encodeEmailAddress')(unescapedStr);
  }

  return text;
});

/**
 * These are all the transformations that form block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('blockGamut', function (text, options, globals) {
  'use strict';

  text = showdown.subParser('headers')(text, options, globals);

  // Do Horizontal Rules:
  var key = showdown.subParser('hashBlock')('<hr />', options, globals);
  text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, key);
  text = text.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, key);
  text = text.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, key);

  text = showdown.subParser('tables')(text, options, globals);
  text = showdown.subParser('lists')(text, options, globals);
  text = showdown.subParser('codeBlocks')(text, options, globals);
  text = showdown.subParser('blockQuotes')(text, options, globals);

  // We already ran _HashHTMLBlocks() before, in Markdown(), but that
  // was to escape raw HTML in the original Markdown source. This time,
  // we're escaping the markup we've just created, so that we don't wrap
  // <p> tags around block-level tags.
  text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
  text = showdown.subParser('paragraphs')(text, options, globals);

  return text;

});

showdown.subParser('blockQuotes', function (text, options, globals) {
  'use strict';

  /*
   text = text.replace(/
   (								// Wrap whole match in $1
   (
   ^[ \t]*>[ \t]?			// '>' at the start of a line
   .+\n					// rest of the first line
   (.+\n)*					// subsequent consecutive lines
   \n*						// blanks
   )+
   )
   /gm, function(){...});
   */

  text = text.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function (wholeMatch, m1) {
    var bq = m1;

    // attacklab: hack around Konqueror 3.5.4 bug:
    // "----------bug".replace(/^-/g,"") == "bug"
    bq = bq.replace(/^[ \t]*>[ \t]?/gm, '~0'); // trim one level of quoting

    // attacklab: clean up hack
    bq = bq.replace(/~0/g, '');

    bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines
    bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse

    bq = bq.replace(/(^|\n)/g, '$1  ');
    // These leading spaces screw with <pre> content, so we need to fix that:
    bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
      var pre = m1;
      // attacklab: hack around Konqueror 3.5.4 bug:
      pre = pre.replace(/^  /mg, '~0');
      pre = pre.replace(/~0/g, '');
      return pre;
    });

    return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
  });
  return text;
});

/**
 * Process Markdown `<pre><code>` blocks.
 */
showdown.subParser('codeBlocks', function (text, options, globals) {
  'use strict';

  /*
   text = text.replace(text,
   /(?:\n\n|^)
   (								// $1 = the code block -- one or more lines, starting with a space/tab
   (?:
   (?:[ ]{4}|\t)			// Lines must start with a tab or a tab-width of spaces - attacklab: g_tab_width
   .*\n+
   )+
   )
   (\n*[ ]{0,3}[^ \t\n]|(?=~0))	// attacklab: g_tab_width
   /g,function(){...});
   */

  // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '~0';

  var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g;
  text = text.replace(pattern, function (wholeMatch, m1, m2) {
    var codeblock = m1,
        nextChar = m2,
        end = '\n';

    codeblock = showdown.subParser('outdent')(codeblock);
    codeblock = showdown.subParser('encodeCode')(codeblock);
    codeblock = showdown.subParser('detab')(codeblock);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines

    if (options.omitExtraWLInCodeBlocks) {
      end = '';
    }

    codeblock = '<pre><code>' + codeblock + end + '</code></pre>';

    return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
  });

  // attacklab: strip sentinel
  text = text.replace(/~0/, '');

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
showdown.subParser('codeSpans', function (text) {
  'use strict';

  //special case -> literal html code tag
  text = text.replace(/(<code[^><]*?>)([^]*?)<\/code>/g, function (wholeMatch, tag, c) {
    c = c.replace(/^([ \t]*)/g, '');	// leading whitespace
    c = c.replace(/[ \t]*$/g, '');	// trailing whitespace
    c = showdown.subParser('encodeCode')(c);
    return tag + c + '</code>';
  });

  /*
   text = text.replace(/
   (^|[^\\])					// Character before opening ` can't be a backslash
   (`+)						// $2 = Opening run of `
   (							// $3 = The code block
   [^\r]*?
   [^`]					// attacklab: work around lack of lookbehind
   )
   \2							// Matching closer
   (?!`)
   /gm, function(){...});
   */
  text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
    function (wholeMatch, m1, m2, m3) {
      var c = m3;
      c = c.replace(/^([ \t]*)/g, '');	// leading whitespace
      c = c.replace(/[ \t]*$/g, '');	// trailing whitespace
      c = showdown.subParser('encodeCode')(c);
      return m1 + '<code>' + c + '</code>';
    }
  );

  return text;
});

/**
 * Convert all tabs to spaces
 */
showdown.subParser('detab', function (text) {
  'use strict';

  // expand first n-1 tabs
  text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width

  // replace the nth with two sentinels
  text = text.replace(/\t/g, '~A~B');

  // use the sentinel to anchor our regex so it doesn't explode
  text = text.replace(/~B(.+?)~A/g, function (wholeMatch, m1) {
    var leadingText = m1,
        numSpaces = 4 - leadingText.length % 4;  // g_tab_width

    // there *must* be a better way to do this:
    for (var i = 0; i < numSpaces; i++) {
      leadingText += ' ';
    }

    return leadingText;
  });

  // clean up sentinels
  text = text.replace(/~A/g, '    ');  // g_tab_width
  text = text.replace(/~B/g, '');

  return text;

});

/**
 * Smart processing for ampersands and angle brackets that need to be encoded.
 */
showdown.subParser('encodeAmpsAndAngles', function (text) {
  'use strict';
  // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
  // http://bumppo.net/projects/amputator/
  text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');

  // Encode naked <'s
  text = text.replace(/<(?![a-z\/?\$!])/gi, '&lt;');

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
showdown.subParser('encodeBackslashEscapes', function (text) {
  'use strict';
  text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
  text = text.replace(/\\([`*_{}\[\]()>#+-.!])/g, showdown.helper.escapeCharactersCallback);
  return text;
});

/**
 * Encode/escape certain characters inside Markdown code runs.
 * The point is that in code, these characters are literals,
 * and lose their special Markdown meanings.
 */
showdown.subParser('encodeCode', function (text) {
  'use strict';

  // Encode all ampersands; HTML entities are not
  // entities within a Markdown code span.
  text = text.replace(/&/g, '&amp;');

  // Do the angle bracket song and dance:
  text = text.replace(/</g, '&lt;');
  text = text.replace(/>/g, '&gt;');

  // Now, escape characters that are magic in Markdown:
  text = showdown.helper.escapeCharacters(text, '*_{}[]\\', false);

  // jj the line above breaks this:
  //---
  //* Item
  //   1. Subitem
  //            special char: *
  // ---

  return text;
});

/**
 *  Input: an email address, e.g. "foo@example.com"
 *
 *  Output: the email address as a mailto link, with each character
 *    of the address encoded as either a decimal or hex entity, in
 *    the hopes of foiling most address harvesting spam bots. E.g.:
 *
 *    <a href="&#x6D;&#97;&#105;&#108;&#x74;&#111;:&#102;&#111;&#111;&#64;&#101;
 *       x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;">&#102;&#111;&#111;
 *       &#64;&#101;x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;</a>
 *
 *  Based on a filter by Matthew Wickline, posted to the BBEdit-Talk
 *  mailing list: <http://tinyurl.com/yu7ue>
 *
 */
showdown.subParser('encodeEmailAddress', function (addr) {
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

  addr = 'mailto:' + addr;

  addr = addr.replace(/./g, function (ch) {
    if (ch === '@') {
      // this *must* be encoded. I insist.
      ch = encode[Math.floor(Math.random() * 2)](ch);
    } else if (ch !== ':') {
      // leave ':' alone (to spot mailto: later)
      var r = Math.random();
      // roughly 10% raw, 45% hex, 45% dec
      ch = (
        r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch)
      );
    }
    return ch;
  });

  addr = '<a href="' + addr + '">' + addr + '</a>';
  addr = addr.replace(/">.+:/g, '">'); // strip the mailto: from the visible part

  return addr;
});

/**
 * Within tags -- meaning between < and > -- encode [\ ` * _] so they
 * don't conflict with their use in Markdown for code, italics and strong.
 */
showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text) {
  'use strict';

  // Build a regex to find HTML tags and comments.  See Friedl's
  // "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
  var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;

  text = text.replace(regex, function (wholeMatch) {
    var tag = wholeMatch.replace(/(.)<\/?code>(?=.)/g, '$1`');
    tag = showdown.helper.escapeCharacters(tag, '\\`*_', false);
    return tag;
  });

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

  text += '~0';

  text = text.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function (wholeMatch, language, codeblock) {
    var end = (options.omitExtraWLInCodeBlocks) ? '' : '\n';

    codeblock = showdown.subParser('encodeCode')(codeblock);
    codeblock = showdown.subParser('detab')(codeblock);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

    codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';

    return showdown.subParser('hashBlock')(codeblock, options, globals);
  });

  // attacklab: strip sentinel
  text = text.replace(/~0/, '');

  return text;

});

showdown.subParser('hashBlock', function (text, options, globals) {
  'use strict';
  text = text.replace(/(^\n+|\n+$)/g, '');
  return '\n\n~K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
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

    // Replace the element text with a marker ("~KxK" where x is its key)
    blockText = '\n\n~K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';

    return blockText;
  };
});

showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
  'use strict';

  // attacklab: Double up blank lines to reduce lookaround
  text = text.replace(/\n/g, '\n\n');

  // Hashify HTML blocks:
  // We only want to do this for block-level HTML tags, such as headers,
  // lists, and tables. That's because we still want to wrap <p>s around
  // "paragraphs" that are wrapped in non-block-level tags, such as anchors,
  // phrase emphasis, and spans. The list of tags we're looking for is
  // hard-coded:
  //var block_tags_a =
  // 'p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside';
  // var block_tags_b =
  // 'p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside';

  // First, look for nested blocks, e.g.:
  //   <div>
  //     <div>
  //     tags for inner block must be indented.
  //     </div>
  //   </div>
  //
  // The outermost tags must start at the left margin for this to match, and
  // the inner nested divs must be indented.
  // We need to do this before the next, more liberal match, because the next
  // match will start at the first `<div>` and stop at the first `</div>`.

  // attacklab: This regex can be expensive when it fails.
  /*
   var text = text.replace(/
   (						// save in $1
   ^					// start of line  (with /m)
   <($block_tags_a)	// start tag = $2
   \b					// word break
   // attacklab: hack around khtml/pcre bug...
   [^\r]*?\n			// any number of lines, minimally matching
   </\2>				// the matching end tag
   [ \t]*				// trailing spaces/tabs
   (?=\n+)				// followed by a newline
   )						// attacklab: there are sentinel newlines at end of document
   /gm,function(){...}};
   */
  text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,
                      showdown.subParser('hashElement')(text, options, globals));

  //
  // Now match more liberally, simply from `\n<tag>` to `</tag>\n`
  //

  /*
   var text = text.replace(/
   (						// save in $1
   ^					// start of line  (with /m)
   <($block_tags_b)	// start tag = $2
   \b					// word break
   // attacklab: hack around khtml/pcre bug...
   [^\r]*?				// any number of lines, minimally matching
   </\2>				// the matching end tag
   [ \t]*				// trailing spaces/tabs
   (?=\n+)				// followed by a newline
   )						// attacklab: there are sentinel newlines at end of document
   /gm,function(){...}};
   */
  text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside|address|audio|canvas|figure|hgroup|output|video)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm,
                      showdown.subParser('hashElement')(text, options, globals));

  // Special case just for <hr />. It was easier to make a special case than
  // to make the other regex more complicated.

  /*
   text = text.replace(/
   (						// save in $1
   \n\n				// Starting after a blank line
   [ ]{0,3}
   (<(hr)				// start tag = $2
   \b					// word break
   ([^<>])*?			//
   \/?>)				// the matching end tag
   [ \t]*
   (?=\n{2,})			// followed by a blank line
   )
   /g,showdown.subParser('hashElement')(text, options, globals));
   */
  text = text.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
                      showdown.subParser('hashElement')(text, options, globals));

  // Special case for standalone HTML comments:

  /*
   text = text.replace(/
   (						// save in $1
   \n\n				// Starting after a blank line
   [ ]{0,3}			// attacklab: g_tab_width - 1
   <!
   (--[^\r]*?--\s*)+
   >
   [ \t]*
   (?=\n{2,})			// followed by a blank line
   )
   /g,showdown.subParser('hashElement')(text, options, globals));
   */
  text = text.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,
                      showdown.subParser('hashElement')(text, options, globals));

  // PHP and ASP-style processor instructions (<?...?> and <%...%>)

  /*
   text = text.replace(/
   (?:
   \n\n				// Starting after a blank line
   )
   (						// save in $1
   [ ]{0,3}			// attacklab: g_tab_width - 1
   (?:
   <([?%])			// $2
   [^\r]*?
   \2>
   )
   [ \t]*
   (?=\n{2,})			// followed by a blank line
   )
   /g,showdown.subParser('hashElement')(text, options, globals));
   */
  text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
                      showdown.subParser('hashElement')(text, options, globals));

  // attacklab: Undo double lines (see comment at top of this function)
  text = text.replace(/\n\n/g, '\n');
  return text;

});

showdown.subParser('headers', function (text, options, globals) {
  'use strict';

  var prefixHeader = options.prefixHeaderId,
      headerLevelStart = (isNaN(parseInt(options.headerLevelStart))) ? 1 : parseInt(options.headerLevelStart),

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
  text = text.replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm, function (wholeMatch, m1, m2) {
    var span = showdown.subParser('spanGamut')(m2, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m2) + '"',
        hLevel = headerLevelStart - 1 + m1.length,
        header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';

    return showdown.subParser('hashBlock')(header, options, globals);
  });

  function headerId(m) {
    var title, escapedId = m.replace(/[^\w]/g, '').toLowerCase();

    if (globals.hashLinkCounts[escapedId]) {
      title = escapedId + '-' + (globals.hashLinkCounts[escapedId]++);
    } else {
      title = escapedId;
      globals.hashLinkCounts[escapedId] = 1;
    }

    // Prefix id to prevent causing inadvertent pre-existing style matches.
    if (prefixHeader === true) {
      prefixHeader = 'section';
    }

    if (showdown.helper.isString(prefixHeader)) {
      return prefixHeader + title;
    }
    return title;
  }

  return text;
});

/**
 * Turn Markdown image shortcuts into <img> tags.
 */
showdown.subParser('images', function (text, options, globals) {
  'use strict';

  var inlineRegExp    = /!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,
      referenceRegExp = /!\[(.*?)][ ]?(?:\n[ ]*)?\[(.*?)]()()()()()/g;

  function writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title) {

    var gUrls   = globals.gUrls,
        gTitles = globals.gTitles,
        gDims   = globals.gDimensions;

    linkId = linkId.toLowerCase();

    if (!title) {
      title = '';
    }

    if (url === '' || url === null) {
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

    altText = altText.replace(/"/g, '&quot;');
    altText = showdown.helper.escapeCharacters(altText, '*_', false);
    url = showdown.helper.escapeCharacters(url, '*_', false);
    var result = '<img src="' + url + '" alt="' + altText + '"';

    if (title) {
      title = title.replace(/"/g, '&quot;');
      title = showdown.helper.escapeCharacters(title, '*_', false);
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
  text = text.replace(inlineRegExp, writeImageTag);

  return text;
});

showdown.subParser('italicsAndBold', function (text, options) {
  'use strict';

  if (options.literalMidWordUnderscores) {
    //underscores
    // Since we are consuming a \s character, we need to add it
    text = text.replace(/(^|\s|>|\b)__(?=\S)([^]+?)__(?=\b|<|\s|$)/gm, '$1<strong>$2</strong>');
    text = text.replace(/(^|\s|>|\b)_(?=\S)([^]+?)_(?=\b|<|\s|$)/gm, '$1<em>$2</em>');
    //asterisks
    text = text.replace(/\*\*(?=\S)([^]+?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(?=\S)([^]+?)\*/g, '<em>$1</em>');

  } else {
    // <strong> must go first:
    text = text.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, '<strong>$2</strong>');
    text = text.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, '<em>$2</em>');
  }
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
    listStr += '~0';

    var rgx = /(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,
        isParagraphed = (/\n[ \t]*\n(?!~0)/.test(listStr));

    listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
      checked = (checked && checked.trim() !== '');
      var item = showdown.subParser('outdent')(m4, options, globals),
          bulletStyle = '';

      // Support for github tasklists
      if (taskbtn && options.tasklists) {
        bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
        item = item.replace(/^[ \t]*\[(x| )?]/m, function () {
          var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
          if (checked) {
            otp += ' checked';
          }
          otp += '>';
          return otp;
        });
      }
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
        if (isParagraphed) {
          item = showdown.subParser('paragraphs')(item, options, globals);
        } else {
          item = showdown.subParser('spanGamut')(item, options, globals);
        }
      }
      item =  '\n<li' + bulletStyle + '>' + item + '</li>\n';
      return item;
    });

    // attacklab: strip sentinel
    listStr = listStr.replace(/~0/g, '');

    globals.gListLevel--;

    if (trimTrailing) {
      listStr = listStr.replace(/\s+$/, '');
    }

    return listStr;
  }

  /**
   * Check and parse consecutive lists (better fix for issue #142)
   * @param {string} list
   * @param {string} listType
   * @returns {string}
   */
  function parseConsecutiveLists(list, listType, trimTrailing) {
    // check if we caught 2 or more consecutive lists by mistake
    // we use the counterRgx, meaning if listType is UL we look for UL and vice versa
    var counterRxg = (listType === 'ul') ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm,
      subLists = [],
      result = '';

    if (list.search(counterRxg) !== -1) {
      (function parseCL(txt) {
        var pos = txt.search(counterRxg);
        if (pos !== -1) {
          // slice
          result += '\n\n<' + listType + '>' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n\n';

          // invert counterType and listType
          listType = (listType === 'ul') ? 'ol' : 'ul';
          counterRxg = (listType === 'ul') ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm;

          //recurse
          parseCL(txt.slice(pos));
        } else {
          result += '\n\n<' + listType + '>' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n\n';
        }
      })(list);
      for (var i = 0; i < subLists.length; ++i) {

      }
    } else {
      result = '\n\n<' + listType + '>' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n\n';
    }

    return result;
  }

  // attacklab: add sentinel to hack around khtml/safari bug:
  // http://bugs.webkit.org/show_bug.cgi?id=11231
  text += '~0';

  // Re-usable pattern to match any entire ul or ol list:
  var wholeList = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;

  if (globals.gListLevel) {
    text = text.replace(wholeList, function (wholeMatch, list, m2) {
      var listType = (m2.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
      return parseConsecutiveLists(list, listType, true);
    });
  } else {
    wholeList = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
    //wholeList = /(\n\n|^\n?)( {0,3}([*+-]|\d+\.)[ \t]+[\s\S]+?)(?=(~0)|(\n\n(?!\t| {2,}| {0,3}([*+-]|\d+\.)[ \t])))/g;
    text = text.replace(wholeList, function (wholeMatch, m1, list, m3) {

      var listType = (m3.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
      return parseConsecutiveLists(list, listType);
    });
  }

  // attacklab: strip sentinel
  text = text.replace(/~0/, '');

  return text;
});

/**
 * Remove one level of line-leading tabs or spaces
 */
showdown.subParser('outdent', function (text) {
  'use strict';

  // attacklab: hack around Konqueror 3.5.4 bug:
  // "----------bug".replace(/^-/g,"") == "bug"
  text = text.replace(/^(\t|[ ]{1,4})/gm, '~0'); // attacklab: g_tab_width

  // attacklab: clean up hack
  text = text.replace(/~0/g, '');

  return text;
});

/**
 *
 */
showdown.subParser('paragraphs', function (text, options, globals) {
  'use strict';

  // Strip leading and trailing lines:
  text = text.replace(/^\n+/g, '');
  text = text.replace(/\n+$/g, '');

  var grafs = text.split(/\n{2,}/g),
      grafsOut = [],
      end = grafs.length; // Wrap <p> tags

  for (var i = 0; i < end; i++) {
    var str = grafs[i];

    // if this is an HTML marker, copy it
    if (str.search(/~K(\d+)K/g) >= 0) {
      grafsOut.push(str);
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
    // if this is a marker for an html block...
    while (grafsOut[i].search(/~K(\d+)K/) >= 0) {
      var blockText = globals.gHtmlBlocks[RegExp.$1];
      blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs
      grafsOut[i] = grafsOut[i].replace(/~K\d+K/, blockText);
    }
  }

  return grafsOut.join('\n\n');
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
    if (!re instanceof RegExp) {
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

  text = showdown.subParser('codeSpans')(text, options, globals);
  text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
  text = showdown.subParser('encodeBackslashEscapes')(text, options, globals);

  // Process anchor and image tags. Images must come first,
  // because ![foo][f] looks like an anchor.
  text = showdown.subParser('images')(text, options, globals);
  text = showdown.subParser('anchors')(text, options, globals);

  // Make links out of things like `<http://example.com/>`
  // Must come after _DoAnchors(), because you can use < and >
  // delimiters in inline links like [this](<url>).
  text = showdown.subParser('autoLinks')(text, options, globals);
  text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals);
  text = showdown.subParser('italicsAndBold')(text, options, globals);
  text = showdown.subParser('strikethrough')(text, options, globals);

  // Do hard breaks:
  text = text.replace(/  +\n/g, ' <br />\n');

  return text;

});

showdown.subParser('strikethrough', function (text, options) {
  'use strict';

  if (options.strikethrough) {
    text = text.replace(/(?:~T){2}([^~]+)(?:~T){2}/g, '<del>$1</del>');
  }

  return text;
});

/**
 * Strip any lines consisting only of spaces and tabs.
 * This makes subsequent regexs easier to write, because we can
 * match consecutive blank lines with /\n+/ instead of something
 * contorted like /[ \t]*\n+/
 */
showdown.subParser('stripBlankLines', function (text) {
  'use strict';
  return text.replace(/^[ \t]+$/mg, '');
});

/**
 * Strips link definitions from text, stores the URLs and titles in
 * hash references.
 * Link defs are in the form: ^[id]: url "optional title"
 *
 * ^[ ]{0,3}\[(.+)\]: // id = $1  attacklab: g_tab_width - 1
 * [ \t]*
 * \n?                  // maybe *one* newline
 * [ \t]*
 * <?(\S+?)>?          // url = $2
 * [ \t]*
 * \n?                // maybe one newline
 * [ \t]*
 * (?:
 * (\n*)              // any lines skipped = $3 attacklab: lookbehind removed
 * ["(]
 * (.+?)              // title = $4
 * [")]
 * [ \t]*
 * )?                 // title is optional
 * (?:\n+|$)
 * /gm,
 * function(){...});
 *
 */
showdown.subParser('stripLinkDefinitions', function (text, options, globals) {
  'use strict';

  var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm;

  // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '~0';

  text = text.replace(regex, function (wholeMatch, linkId, url, width, height, blankLines, title) {
    linkId = linkId.toLowerCase();
    globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url);  // Link IDs are case-insensitive

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
  });

  // attacklab: strip sentinel
  text = text.replace(/~0/, '');

  return text;
});

showdown.subParser('tables', function (text, options, globals) {
  'use strict';

  var table = function () {

    var tables = {},
        filter;

    tables.th = function (header, style) {
      var id = '';
      header = header.trim();
      if (header === '') {
        return '';
      }
      if (options.tableHeaderId) {
        id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
      }
      header = showdown.subParser('spanGamut')(header, options, globals);
      if (!style || style.trim() === '') {
        style = '';
      } else {
        style = ' style="' + style + '"';
      }
      return '<th' + id + style + '>' + header + '</th>';
    };

    tables.td = function (cell, style) {
      var subText = showdown.subParser('spanGamut')(cell.trim(), options, globals);
      if (!style || style.trim() === '') {
        style = '';
      } else {
        style = ' style="' + style + '"';
      }
      return '<td' + style + '>' + subText + '</td>';
    };

    tables.ths = function () {
      var out = '',
          i = 0,
          hs = [].slice.apply(arguments[0]),
          style = [].slice.apply(arguments[1]);

      for (i; i < hs.length; i += 1) {
        out += tables.th(hs[i], style[i]) + '\n';
      }

      return out;
    };

    tables.tds = function () {
      var out = '',
          i = 0,
          ds = [].slice.apply(arguments[0]),
          style = [].slice.apply(arguments[1]);

      for (i; i < ds.length; i += 1) {
        out += tables.td(ds[i], style[i]) + '\n';
      }
      return out;
    };

    tables.thead = function () {
      var out,
          hs = [].slice.apply(arguments[0]),
          style = [].slice.apply(arguments[1]);

      out = '<thead>\n';
      out += '<tr>\n';
      out += tables.ths.apply(this, [hs, style]);
      out += '</tr>\n';
      out += '</thead>\n';
      return out;
    };

    tables.tr = function () {
      var out,
        cs = [].slice.apply(arguments[0]),
        style = [].slice.apply(arguments[1]);

      out = '<tr>\n';
      out += tables.tds.apply(this, [cs, style]);
      out += '</tr>\n';
      return out;
    };

    filter = function (text) {
      var i = 0,
        lines = text.split('\n'),
        line,
        hs,
        out = [];

      for (i; i < lines.length; i += 1) {
        line = lines[i];
        // looks like a table heading
        if (line.trim().match(/^[|].*[|]$/)) {
          line = line.trim();

          var tbl = [],
              align = lines[i + 1].trim(),
              styles = [],
              j = 0;

          if (align.match(/^[|][-=|: ]+[|]$/)) {
            styles = align.substring(1, align.length - 1).split('|');
            for (j = 0; j < styles.length; ++j) {
              styles[j] = styles[j].trim();
              if (styles[j].match(/^[:][-=| ]+[:]$/)) {
                styles[j] = 'text-align:center;';

              } else if (styles[j].match(/^[-=| ]+[:]$/)) {
                styles[j] = 'text-align:right;';

              } else if (styles[j].match(/^[:][-=| ]+$/)) {
                styles[j] = 'text-align:left;';
              } else {
                styles[j] = '';
              }
            }
          }
          tbl.push('<table>');
          hs = line.substring(1, line.length - 1).split('|');

          if (styles.length === 0) {
            for (j = 0; j < hs.length; ++j) {
              styles.push('text-align:left');
            }
          }
          tbl.push(tables.thead.apply(this, [hs, styles]));
          line = lines[++i];
          if (!line.trim().match(/^[|][-=|: ]+[|]$/)) {
            // not a table rolling back
            line = lines[--i];
          } else {
            line = lines[++i];
            tbl.push('<tbody>');
            while (line.trim().match(/^[|].*[|]$/)) {
              line = line.trim();
              tbl.push(tables.tr.apply(this, [line.substring(1, line.length - 1).split('|'), styles]));
              line = lines[++i];
            }
            tbl.push('</tbody>');
            tbl.push('</table>');
            // we are done with this table and we move along
            out.push(tbl.join('\n'));
            continue;
          }
        }
        out.push(line);
      }
      return out.join('\n');
    };
    return {parse: filter};
  };

  if (options.tables) {
    var tableParser = table();
    return tableParser.parse(text);
  } else {
    return text;
  }
});

/**
 * Swap back in all the special characters we've hidden.
 */
showdown.subParser('unescapeSpecialChars', function (text) {
  'use strict';

  text = text.replace(/~E(\d+)E/g, function (wholeMatch, m1) {
    var charCodeToReplace = parseInt(m1);
    return String.fromCharCode(charCodeToReplace);
  });
  return text;
});

var root = this;

// CommonJS/nodeJS Loader
if (typeof module !== 'undefined' && module.exports) {
  module.exports = showdown;

// AMD Loader
} else if (typeof define === 'function' && define.amd) {
  define('showdown', function () {
    'use strict';
    return showdown;
  });

// Regular Browser loader
} else {
  root.showdown = showdown;
}
}).call(this);
//# sourceMappingURL=showdown.js.map
/*!
Deck JS - deck.smartdown
Copyright (c) 2015-2015 Rémi Emonet
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
    function hasIDOrClassDecoration(s) {
        return s.match(/^(|([\s\S]*[^\n\r\s]))[\n\r\s]*\{([^{}<>]*)\}[\n\r]*$/);
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
                $('<div>').text('@anim:'+animPart).insertBefore(slide.firstChild);
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
    function maybeProcessIDOrClassDecoration(txtNode) {
        var txt = txtNode.textContent;
        var matched = hasIDOrClassDecoration(txt); // make sure the group is set
        if (!matched) { return; }
        var base = RegExp.$1; // set by hasIDOrClassDecoration
        var decorations = RegExp.$3.split(/ +/);
        var node = txtNode.parentNode;
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
        if (line.match(/^([\s\S]*) \/\/(.*)$/) || line.match(/^()\/\/(.*)$/)) {
            var d1 = RegExp.$1;
            var d2 = RegExp.$2;
            txtNode.textContent = clean(d1);
            var node = txtNode.parentNode;
            var comm = document.createElement('div');
            comm.classList.add('comment');
            $(comm).text(clean(d2));
            
            if (txtNode.textContent == '') {
                // in the case the comment is on an empty thingthen move it to previous sibling
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
                    var toAdd = document.createElement('div');
                    addClass(toAdd, 'slide');
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
                        addClass(toAdd, "anim-addclass");
                        addSpaceSeparatedAttr(toAdd, "data-class", main[0]);
                        addSpaceSeparatedAttr(toAdd, "data-what", main.slice(1).join(":"));
                    } else if (startsWith(what, "%-class:")) {
                        var main = RESTRIM.split(/ *: */);
                        addClass(toAdd, "anim-removeclass");
                        addSpaceSeparatedAttr(toAdd, "data-class", main[0]);
                        addSpaceSeparatedAttr(toAdd, "data-what", main.slice(1).join(":"));
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
            // replacing the parent node with allToAdd elements
            txtNode.remove();
            replaceNodeByNodes(node, allToAdd);
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
    function isElement(node) {
        return node.nodeType == node.ELEMENT_NODE;
    }
    function isText(node) {
        return node.nodeType == node.TEXT_NODE;
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

    var interpretationOfSmartLanguage = function(smart, doc, isRoot) {

        isRoot = typeof isRoot !== 'undefined' ? isRoot : true;

        var converter = new showdown.Converter({
            noHeaderId: true,
        });
        var wrap = document.createElement('div');
        wrap.innerHTML = converter.makeHtml(smart);

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

            // TODO used to:: cleanup: first, remove first "p" in a "li" (happens when one put an empty line in a bullet list, but it would break the decorations) ..... check it still poses a real problem

            // process @anim... and {} decoration
            (function patch(tree){ // tree is a slide or a subelement
                eachNode(tree, function(i, node) {
                    if (isElement(node)) {
                        patch(node);
                    } else if (isText(node)) {
                        var txt = node.textContent;
                        // return -1 means reprocess from the same position
                        if (maybeProcessChunk(node)) return -1;
                        if (maybeProcessComment(node)) return -1;
                        if (maybeProcessAtSomething(node)) return -1;
                        if (maybeProcessIDOrClassDecoration(node)) return -1;
                    } else {
                        alert('Should not happen: '+node.nodeType);
                    }
                });
            })(slide);
            // process the $math$
            (function patch(tree){ // tree is a slide or a subelement
                if (hasClass(tree, 'smark-nomath')) return;
                eachNode(tree, function(i, node) {
                    if (isElement(node)) {
                        patch(node);
                    } else if (isText(node) && node.textContent.contains('$')) {
                        var wrap = document.createElement('div');
                        wrap.innerHTML = processMath(node.textContent);
                        replaceNodeByNodes(node, wrap.childNodes);
                    }
                });
            })(slide);
            // change things to textarea (to help with codemirror) https://github.com/iros/deck.js-codemirror/issues/19
            (function patch(tree){ // tree is a slide or a subelement
                eachNode(tree, function(i, node) {
                    if (isElement(node)) {
                        var unwrapIt = hasClass(node, "smartarea");
                        if (!unwrapIt) { // auto for codemirror language-...
                            if (node.tagName.match(/^code$/i) &&
                                node.parentNode.tagName.match(/^pre$/i)) {
                                // we found a code>pre, look for language-... in its classes
                                for (var i = 0; i < node.classList.length; i++) {
                                    if (node.classList[i].match(/^language-/)) {
                                        unwrapIt = true;
                                        break;
                                    }
                                }
                            }
                        }
                        if (unwrapIt) {
                            node.innerHTML = node.textContent; // unescape entities
                            replaceNodeByNodes(node.parentNode, [node]); // pre unwrap
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


(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var t;if(typeof window!=="undefined"){t=window}else if(typeof global!=="undefined"){t=global}else if(typeof self!=="undefined"){t=self}else{t=this}t.katex=e()}})(function(){var e,t,i;return function h(e,t,i){function a(l,s){if(!t[l]){if(!e[l]){var p=typeof require=="function"&&require;if(!s&&p)return p(l,!0);if(r)return r(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var n=t[l]={exports:{}};e[l][0].call(n.exports,function(t){var i=e[l][1][t];return a(i?i:t)},n,n.exports,h,e,t,i)}return t[l].exports}var r=typeof require=="function"&&require;for(var l=0;l<i.length;l++)a(i[l]);return a}({1:[function(e,t,i){var h=e("./src/ParseError");var a=e("./src/Settings");var r=e("./src/buildTree");var l=e("./src/parseTree");var s=e("./src/utils");var p=function(e,t,i){s.clearNode(t);var h=new a(i);var p=l(e,h);var c=r(p,e,h).toNode();t.appendChild(c)};if(typeof document!=="undefined"){if(document.compatMode!=="CSS1Compat"){typeof console!=="undefined"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your "+"website has a suitable doctype.");p=function(){throw new h("KaTeX doesn't work in quirks mode.")}}}var c=function(e,t){var i=new a(t);var h=l(e,i);return r(h,e,i).toMarkup()};var n=function(e,t){var i=new a(t);return l(e,i)};t.exports={render:p,renderToString:c,__parse:n,ParseError:h}},{"./src/ParseError":5,"./src/Settings":7,"./src/buildTree":12,"./src/parseTree":21,"./src/utils":23}],2:[function(e,t,i){"use strict";function h(e){if(!e.__matchAtRelocatable){var t=e.source+"|()";var i="g"+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"");e.__matchAtRelocatable=new RegExp(t,i)}return e.__matchAtRelocatable}function a(e,t,i){if(e.global||e.sticky){throw new Error("matchAt(...): Only non-global regexes are supported")}var a=h(e);a.lastIndex=i;var r=a.exec(t);if(r[r.length-1]==null){r.length=r.length-1;return r}else{return null}}t.exports=a},{}],3:[function(e,t,i){var h=e("match-at");var a=e("./ParseError");function r(e){this._input=e}function l(e,t,i){this.text=e;this.data=t;this.position=i}var s=[/[/|@.""`0-9a-zA-Z]/,/[*+-]/,/[=<>:]/,/[,;]/,/['\^_{}]/,/[(\[]/,/[)\]?!]/,/~/,/&/,/\\\\/];var p=[/[a-zA-Z0-9`!@*()-=+\[\]'";:?\/.,]/,/[{}]/,/~/,/&/,/\\\\/];var c=/\s*/;var n=/ +|\\  +/;var o=/\\(?:[a-zA-Z]+|.)/;r.prototype._innerLex=function(e,t,i){var r=this._input;var s;if(i){s=h(c,r,e)[0];e+=s.length}else{s=h(n,r,e);if(s!==null){return new l(" ",null,e+s[0].length)}}if(e===r.length){return new l("EOF",null,e)}var p;if(p=h(o,r,e)){return new l(p[0],null,e+p[0].length)}else{for(var g=0;g<t.length;g++){var d=t[g];if(p=h(d,r,e)){return new l(p[0],null,e+p[0].length)}}}throw new a("Unexpected character: '"+r[e]+"'",this,e)};var g=/#[a-z0-9]+|[a-z]+/i;r.prototype._innerLexColor=function(e){var t=this._input;var i=h(c,t,e)[0];e+=i.length;var r;if(r=h(g,t,e)){return new l(r[0],null,e+r[0].length)}else{throw new a("Invalid color",this,e)}};var d=/(-?)\s*(\d+(?:\.\d*)?|\.\d+)\s*([a-z]{2})/;r.prototype._innerLexSize=function(e){var t=this._input;var i=h(c,t,e)[0];e+=i.length;var r;if(r=h(d,t,e)){var s=r[3];if(s!=="em"&&s!=="ex"){throw new a("Invalid unit: '"+s+"'",this,e)}return new l(r[0],{number:+(r[1]+r[2]),unit:s},e+r[0].length)}throw new a("Invalid size",this,e)};r.prototype._innerLexWhitespace=function(e){var t=this._input;var i=h(c,t,e)[0];e+=i.length;return new l(i[0],null,e)};r.prototype.lex=function(e,t){if(t==="math"){return this._innerLex(e,s,true)}else if(t==="text"){return this._innerLex(e,p,false)}else if(t==="color"){return this._innerLexColor(e)}else if(t==="size"){return this._innerLexSize(e)}else if(t==="whitespace"){return this._innerLexWhitespace(e)}};t.exports=r},{"./ParseError":5,"match-at":2}],4:[function(e,t,i){function h(e){this.style=e.style;this.color=e.color;this.size=e.size;this.phantom=e.phantom;this.font=e.font;if(e.parentStyle===undefined){this.parentStyle=e.style}else{this.parentStyle=e.parentStyle}if(e.parentSize===undefined){this.parentSize=e.size}else{this.parentSize=e.parentSize}}h.prototype.extend=function(e){var t={style:this.style,size:this.size,color:this.color,parentStyle:this.style,parentSize:this.size,phantom:this.phantom,font:this.font};for(var i in e){if(e.hasOwnProperty(i)){t[i]=e[i]}}return new h(t)};h.prototype.withStyle=function(e){return this.extend({style:e})};h.prototype.withSize=function(e){return this.extend({size:e})};h.prototype.withColor=function(e){return this.extend({color:e})};h.prototype.withPhantom=function(){return this.extend({phantom:true})};h.prototype.withFont=function(e){return this.extend({font:e})};h.prototype.reset=function(){return this.extend({})};var a={"katex-blue":"#6495ed","katex-orange":"#ffa500","katex-pink":"#ff00af","katex-red":"#df0030","katex-green":"#28ae7b","katex-gray":"gray","katex-purple":"#9d38bd","katex-blueA":"#c7e9f1","katex-blueB":"#9cdceb","katex-blueC":"#58c4dd","katex-blueD":"#29abca","katex-blueE":"#1c758a","katex-tealA":"#acead7","katex-tealB":"#76ddc0","katex-tealC":"#5cd0b3","katex-tealD":"#55c1a7","katex-tealE":"#49a88f","katex-greenA":"#c9e2ae","katex-greenB":"#a6cf8c","katex-greenC":"#83c167","katex-greenD":"#77b05d","katex-greenE":"#699c52","katex-goldA":"#f7c797","katex-goldB":"#f9b775","katex-goldC":"#f0ac5f","katex-goldD":"#e1a158","katex-goldE":"#c78d46","katex-redA":"#f7a1a3","katex-redB":"#ff8080","katex-redC":"#fc6255","katex-redD":"#e65a4c","katex-redE":"#cf5044","katex-maroonA":"#ecabc1","katex-maroonB":"#ec92ab","katex-maroonC":"#c55f73","katex-maroonD":"#a24d61","katex-maroonE":"#94424f","katex-purpleA":"#caa3e8","katex-purpleB":"#b189c6","katex-purpleC":"#9a72ac","katex-purpleD":"#715582","katex-purpleE":"#644172","katex-mintA":"#f5f9e8","katex-mintB":"#edf2df","katex-mintC":"#e0e5cc","katex-grayA":"#fdfdfd","katex-grayB":"#f7f7f7","katex-grayC":"#eeeeee","katex-grayD":"#dddddd","katex-grayE":"#cccccc","katex-grayF":"#aaaaaa","katex-grayG":"#999999","katex-grayH":"#555555","katex-grayI":"#333333","katex-kaBlue":"#314453","katex-kaGreen":"#639b24"};h.prototype.getColor=function(){if(this.phantom){return"transparent"}else{return a[this.color]||this.color}};t.exports=h},{}],5:[function(e,t,i){function h(e,t,i){var a="KaTeX parse error: "+e;if(t!==undefined&&i!==undefined){a+=" at position "+i+": ";var r=t._input;r=r.slice(0,i)+"\u0332"+r.slice(i);var l=Math.max(0,i-15);var s=i+15;a+=r.slice(l,s)}var p=new Error(a);p.name="ParseError";p.__proto__=h.prototype;p.position=i;return p}h.prototype.__proto__=Error.prototype;t.exports=h},{}],6:[function(e,t,i){var h=e("./functions");var a=e("./environments");var r=e("./Lexer");var l=e("./symbols");var s=e("./utils");var p=e("./parseData");var c=e("./ParseError");function n(e,t){this.lexer=new r(e);this.settings=t}var o=p.ParseNode;var g=p.ParseResult;function d(e,t){this.result=e;this.isFunction=t}n.prototype.expect=function(e,t){if(e.text!==t){throw new c("Expected '"+t+"', got '"+e.text+"'",this.lexer,e.position)}};n.prototype.parse=function(e){var t=this.parseInput(0,"math");return t.result};n.prototype.parseInput=function(e,t){var i=this.parseExpression(e,t,false);this.expect(i.peek,"EOF");return i};var w=["}","\\end","\\right","&","\\\\","\\cr"];n.prototype.parseExpression=function(e,t,i,h){var a=[];var r=null;while(true){r=this.lexer.lex(e,t);if(w.indexOf(r.text)!==-1){break}if(h&&r.text===h){break}var l=this.parseAtom(e,t);if(!l){if(!this.settings.breakOnUnsupportedCmds&&r.text[0]==="\\"){var s=this.handleUnsupportedCmd(r.text,t);a.push(s);e=r.position;continue}break}if(i&&l.result.type==="infix"){break}a.push(l.result);e=l.position}var p=new g(this.handleInfixNodes(a,t),e);p.peek=r;return p};n.prototype.handleInfixNodes=function(e,t){var i=-1;var a;var r;for(var l=0;l<e.length;l++){var s=e[l];if(s.type==="infix"){if(i!==-1){throw new c("only one infix operator per group",this.lexer,-1)}i=l;r=s.value.replaceWith;a=h.funcs[r]}}if(i!==-1){var p,n;var g=e.slice(0,i);var d=e.slice(i+1);if(g.length===1&&g[0].type==="ordgroup"){p=g[0]}else{p=new o("ordgroup",g,t)}if(d.length===1&&d[0].type==="ordgroup"){n=d[0]}else{n=new o("ordgroup",d,t)}var w=a.handler(r,p,n);return[new o(w.type,w,t)]}else{return e}};var u=1;n.prototype.handleSupSubscript=function(e,t,i,a){var r=this.parseGroup(e,t);if(!r){var l=this.lexer.lex(e,t);if(!this.settings.breakOnUnsupportedCmds&&l.text[0]==="\\"){return new g(this.handleUnsupportedCmd(l.text,t),l.position)}else{throw new c("Expected group after '"+i+"'",this.lexer,e)}}else if(r.isFunction){var s=h.funcs[r.result.result].greediness;if(s>u){return this.parseFunction(e,t)}else{throw new c("Got function '"+r.result.result+"' with no arguments "+"as "+a,this.lexer,e)}}else{return r.result}};n.prototype.handleUnsupportedCmd=function(e,t){var i=[];for(var h=0;h<e.length;h++){i.push(new o("textord",e[h],"text"))}var a=new o("text",{body:i,type:"text"},t);var r=new o("color",{color:this.settings.errorColor,value:[a],type:"color"},t);return r};n.prototype.parseAtom=function(e,t){var i=this.parseImplicitGroup(e,t);if(t==="text"){return i}var h;if(!i){h=e;i=undefined}else{h=i.position}var a;var r;var l;while(true){var s=this.lexer.lex(h,t);if(s.text==="\\limits"||s.text==="\\nolimits"){if(!i||i.result.type!=="op"){throw new c("Limit controls must follow a math operator",this.lexer,h)}else{var p=s.text==="\\limits";i.result.value.limits=p;i.result.value.alwaysHandleSupSub=true;h=s.position}}else if(s.text==="^"){if(a){throw new c("Double superscript",this.lexer,h)}l=this.handleSupSubscript(s.position,t,s.text,"superscript");h=l.position;a=l.result}else if(s.text==="_"){if(r){throw new c("Double subscript",this.lexer,h)}l=this.handleSupSubscript(s.position,t,s.text,"subscript");h=l.position;r=l.result}else if(s.text==="'"){var n=new o("textord","\\prime",t);var d=[n];h=s.position;while((s=this.lexer.lex(h,t)).text==="'"){d.push(n);h=s.position}a=new o("ordgroup",d,t)}else{break}}if(a||r){return new g(new o("supsub",{base:i&&i.result,sup:a,sub:r},t),h)}else{return i}};var k=["\\tiny","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"];var m=["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"];n.prototype.parseImplicitGroup=function(e,t){var i=this.parseSymbol(e,t);if(!i||!i.result){return this.parseFunction(e,t)}var h=i.result.result;var r;if(h==="\\left"){var l=this.parseFunction(e,t);r=this.parseExpression(l.position,t,false);this.expect(r.peek,"\\right");var p=this.parseFunction(r.position,t);return new g(new o("leftright",{body:r.result,left:l.result.value.value,right:p.result.value.value},t),p.position)}else if(h==="\\begin"){var n=this.parseFunction(e,t);var d=n.result.value.name;if(!a.hasOwnProperty(d)){throw new c("No such environment: "+d,this.lexer,n.result.value.namepos)}var w=a[d];var u=[null,t,d];var f=this.parseArguments(n.position,t,"\\begin{"+d+"}",w,u);u[0]=f;var v=w.handler.apply(this,u);var y=this.lexer.lex(v.position,t);this.expect(y,"\\end");var x=this.parseFunction(v.position,t);if(x.result.value.name!==d){throw new c("Mismatch: \\begin{"+d+"} matched "+"by \\end{"+x.result.value.name+"}",this.lexer,x.namepos)}v.position=x.position;return v}else if(s.contains(k,h)){r=this.parseExpression(i.result.position,t,false);return new g(new o("sizing",{size:"size"+(s.indexOf(k,h)+1),value:r.result},t),r.position)}else if(s.contains(m,h)){r=this.parseExpression(i.result.position,t,true);return new g(new o("styling",{style:h.slice(1,h.length-5),value:r.result},t),r.position)}else{return this.parseFunction(e,t)}};n.prototype.parseFunction=function(e,t){var i=this.parseGroup(e,t);if(i){if(i.isFunction){var a=i.result.result;var r=h.funcs[a];if(t==="text"&&!r.allowedInText){throw new c("Can't use function '"+a+"' in text mode",this.lexer,i.position)}var l=[a];var s=this.parseArguments(i.result.position,t,a,r,l);var p=h.funcs[a].handler.apply(this,l);return new g(new o(p.type,p,t),s)}else{return i.result}}else{return null}};n.prototype.parseArguments=function(e,t,i,a,r){var l=a.numArgs+a.numOptionalArgs;if(l===0){return e}var s=e;var p=a.greediness;var n=[s];for(var o=0;o<l;o++){var w=a.argTypes&&a.argTypes[o];var u;if(o<a.numOptionalArgs){if(w){u=this.parseSpecialGroup(s,w,t,true)}else{u=this.parseOptionalGroup(s,t)}if(!u){r.push(null);n.push(s);continue}}else{if(w){u=this.parseSpecialGroup(s,w,t)}else{u=this.parseGroup(s,t)}if(!u){var k=this.lexer.lex(s,t);if(!this.settings.breakOnUnsupportedCmds&&k.text[0]==="\\"){u=new d(new g(this.handleUnsupportedCmd(k.text,t),k.position),false)}else{throw new c("Expected group after '"+i+"'",this.lexer,e)}}}var m;if(u.isFunction){var f=h.funcs[u.result.result].greediness;if(f>p){m=this.parseFunction(s,t)}else{throw new c("Got function '"+u.result.result+"' as "+"argument to '"+i+"'",this.lexer,u.result.position-1)}}else{m=u.result}r.push(m.result);n.push(m.position);s=m.position}r.push(n);return s};n.prototype.parseSpecialGroup=function(e,t,i,h){if(t==="original"){t=i}if(t==="color"||t==="size"){var a=this.lexer.lex(e,i);if(h&&a.text!=="["){return null}this.expect(a,h?"[":"{");var r=this.lexer.lex(a.position,t);var l;if(t==="color"){l=r.text}else{l=r.data}var s=this.lexer.lex(r.position,i);this.expect(s,h?"]":"}");return new d(new g(new o(t,l,i),s.position),false)}else if(t==="text"){var p=this.lexer.lex(e,"whitespace");e=p.position}if(h){return this.parseOptionalGroup(e,t)}else{return this.parseGroup(e,t)}};n.prototype.parseGroup=function(e,t){var i=this.lexer.lex(e,t);if(i.text==="{"){var h=this.parseExpression(i.position,t,false);var a=this.lexer.lex(h.position,t);this.expect(a,"}");return new d(new g(new o("ordgroup",h.result,t),a.position),false)}else{return this.parseSymbol(e,t)}};n.prototype.parseOptionalGroup=function(e,t){var i=this.lexer.lex(e,t);if(i.text==="["){var h=this.parseExpression(i.position,t,false,"]");var a=this.lexer.lex(h.position,t);this.expect(a,"]");return new d(new g(new o("ordgroup",h.result,t),a.position),false)}else{return null}};n.prototype.parseSymbol=function(e,t){var i=this.lexer.lex(e,t);if(h.funcs[i.text]){return new d(new g(i.text,i.position),true)}else if(l[t][i.text]){return new d(new g(new o(l[t][i.text].group,i.text,t),i.position),false)}else{return null}};n.prototype.ParseNode=o;t.exports=n},{"./Lexer":3,"./ParseError":5,"./environments":15,"./functions":18,"./parseData":20,"./symbols":22,"./utils":23}],7:[function(e,t,i){function h(e,t){return e===undefined?t:e}function a(e){e=e||{};this.displayMode=h(e.displayMode,false);this.breakOnUnsupportedCmds=h(e.breakOnUnsupportedCmds,true);this.errorColor=h(e.errorColor,"#cc0000")}t.exports=a},{}],8:[function(e,t,i){function h(e,t,i,h){this.id=e;this.size=t;this.cramped=h;this.sizeMultiplier=i}h.prototype.sup=function(){return w[u[this.id]]};h.prototype.sub=function(){return w[k[this.id]]};h.prototype.fracNum=function(){return w[m[this.id]]};h.prototype.fracDen=function(){return w[f[this.id]]};h.prototype.cramp=function(){return w[v[this.id]]};h.prototype.cls=function(){return g[this.size]+(this.cramped?" cramped":" uncramped")};h.prototype.reset=function(){return d[this.size]};var a=0;var r=1;var l=2;var s=3;var p=4;var c=5;var n=6;var o=7;var g=["displaystyle textstyle","textstyle","scriptstyle","scriptscriptstyle"];var d=["reset-textstyle","reset-textstyle","reset-scriptstyle","reset-scriptscriptstyle"];var w=[new h(a,0,1,false),new h(r,0,1,true),new h(l,1,1,false),new h(s,1,1,true),new h(p,2,.7,false),new h(c,2,.7,true),new h(n,3,.5,false),new h(o,3,.5,true)];var u=[p,c,p,c,n,o,n,o];var k=[c,c,c,c,o,o,o,o];var m=[l,s,p,c,n,o,n,o];var f=[s,s,c,c,o,o,o,o];var v=[r,r,s,s,c,c,o,o];t.exports={DISPLAY:w[a],TEXT:w[l],SCRIPT:w[p],SCRIPTSCRIPT:w[n]}},{}],9:[function(e,t,i){var h=e("./domTree");var a=e("./fontMetrics");var r=e("./symbols");var l=e("./utils");var s=["\\Gamma","\\Delta","\\Theta","\\Lambda","\\Xi","\\Pi","\\Sigma","\\Upsilon","\\Phi","\\Psi","\\Omega"];var p=["\u0131","\u0237"];var c=function(e,t,i,l,s){if(r[i][e]&&r[i][e].replace){e=r[i][e].replace}var p=a.getCharacterMetrics(e,t);var c;if(p){c=new h.symbolNode(e,p.height,p.depth,p.italic,p.skew,s)}else{typeof console!=="undefined"&&console.warn("No character metrics for '"+e+"' in style '"+t+"'");c=new h.symbolNode(e,0,0,0,0,s)}if(l){c.style.color=l}return c};var n=function(e,t,i,h){if(e==="\\"||r[t][e].font==="main"){return c(e,"Main-Regular",t,i,h)}else{return c(e,"AMS-Regular",t,i,h.concat(["amsrm"]))}};var o=function(e,t,i,h,a){if(a==="mathord"){return g(e,t,i,h)}else if(a==="textord"){return c(e,"Main-Regular",t,i,h.concat(["mathrm"]))}else{throw new Error("unexpected type: "+a+" in mathDefault")}};var g=function(e,t,i,h){if(/[0-9]/.test(e.charAt(0))||l.contains(p,e)||l.contains(s,e)){return c(e,"Main-Italic",t,i,h.concat(["mainit"]))}else{return c(e,"Math-Italic",t,i,h.concat(["mathit"]))}};var d=function(e,t,i){var h=e.mode;var s=e.value;if(r[h][s]&&r[h][s].replace){s=r[h][s].replace}var n=["mord"];var d=t.getColor();var w=t.font;if(w){if(w==="mathit"||l.contains(p,s)){return g(s,h,d,n)}else{var u=x[w].fontName;if(a.getCharacterMetrics(s,u)){return c(s,u,h,d,n.concat([w]))}else{return o(s,h,d,n,i)}}}else{return o(s,h,d,n,i)}};var w=function(e){var t=0;var i=0;var h=0;if(e.children){for(var a=0;a<e.children.length;a++){if(e.children[a].height>t){t=e.children[a].height}if(e.children[a].depth>i){i=e.children[a].depth}if(e.children[a].maxFontSize>h){h=e.children[a].maxFontSize}}}e.height=t;e.depth=i;e.maxFontSize=h};var u=function(e,t,i){var a=new h.span(e,t);w(a);if(i){a.style.color=i}return a};var k=function(e){var t=new h.documentFragment(e);w(t);return t};var m=function(e,t){var i=u([],[new h.symbolNode("\u200b")]);i.style.fontSize=t/e.style.sizeMultiplier+"em";var a=u(["fontsize-ensurer","reset-"+e.size,"size5"],[i]);return a};var f=function(e,t,i,a){var r;var l;var s;if(t==="individualShift"){var p=e;e=[p[0]];r=-p[0].shift-p[0].elem.depth;l=r;for(s=1;s<p.length;s++){var c=-p[s].shift-l-p[s].elem.depth;var n=c-(p[s-1].elem.height+p[s-1].elem.depth);l=l+c;e.push({type:"kern",size:n});e.push(p[s])}}else if(t==="top"){var o=i;for(s=0;s<e.length;s++){if(e[s].type==="kern"){o-=e[s].size}else{o-=e[s].elem.height+e[s].elem.depth}}r=o}else if(t==="bottom"){r=-i}else if(t==="shift"){r=-e[0].elem.depth-i}else if(t==="firstBaseline"){r=-e[0].elem.depth}else{r=0}var g=0;for(s=0;s<e.length;s++){if(e[s].type==="elem"){g=Math.max(g,e[s].elem.maxFontSize)}}var d=m(a,g);var w=[];l=r;for(s=0;s<e.length;s++){if(e[s].type==="kern"){l+=e[s].size}else{var k=e[s].elem;var f=-k.depth-l;l+=k.height+k.depth;var v=u([],[d,k]);v.height-=f;v.depth+=f;v.style.top=f+"em";w.push(v)}}var y=u(["baseline-fix"],[d,new h.symbolNode("\u200b")]);w.push(y);var x=u(["vlist"],w);x.height=Math.max(l,x.height);x.depth=Math.max(-r,x.depth);return x};var v={size1:.5,size2:.7,size3:.8,size4:.9,size5:1,size6:1.2,size7:1.44,size8:1.73,size9:2.07,size10:2.49};var y={"\\qquad":{size:"2em",className:"qquad"},"\\quad":{size:"1em",className:"quad"},"\\enspace":{size:"0.5em",className:"enspace"},"\\;":{size:"0.277778em",className:"thickspace"},"\\:":{size:"0.22222em",className:"mediumspace"},"\\,":{size:"0.16667em",className:"thinspace"},"\\!":{size:"-0.16667em",className:"negativethinspace"}};var x={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}};t.exports={makeSymbol:c,mathsym:n,makeSpan:u,makeFragment:k,makeVList:f,makeOrd:d,sizingMultiplier:v,spacingFunctions:y}},{"./domTree":14,"./fontMetrics":16,"./symbols":22,"./utils":23}],10:[function(e,t,i){var h=e("./Options");var a=e("./ParseError");var r=e("./Style");var l=e("./buildCommon");var s=e("./delimiter");var p=e("./domTree");var c=e("./fontMetrics");var n=e("./utils");var o=l.makeSpan;var g=function(e,t,i){var h=[];for(var a=0;a<e.length;a++){var r=e[a];h.push(y(r,t,i));i=r}return h};var d={mathord:"mord",textord:"mord",bin:"mbin",rel:"mrel",text:"mord",open:"mopen",close:"mclose",inner:"minner",genfrac:"mord",array:"mord",spacing:"mord",punct:"mpunct",ordgroup:"mord",op:"mop",katex:"mord",overline:"mord",rule:"mord",leftright:"minner",sqrt:"mord",accent:"mord"};var w=function(e){if(e==null){return d.mathord}else if(e.type==="supsub"){return w(e.value.base)}else if(e.type==="llap"||e.type==="rlap"){return w(e.value)}else if(e.type==="color"){return w(e.value.value)}else if(e.type==="sizing"){return w(e.value.value)}else if(e.type==="styling"){return w(e.value.value)}else if(e.type==="delimsizing"){return d[e.value.delimType]}else{return d[e.type]}};var u=function(e,t){if(!e){return false}else if(e.type==="op"){return e.value.limits&&(t.style.size===r.DISPLAY.size||e.value.alwaysHandleSupSub)}else if(e.type==="accent"){return m(e.value.base)}else{return null}};var k=function(e){if(!e){return false}else if(e.type==="ordgroup"){if(e.value.length===1){return k(e.value[0])}else{return e}}else if(e.type==="color"){if(e.value.value.length===1){return k(e.value.value[0])}else{return e}}else{return e}};var m=function(e){var t=k(e);return t.type==="mathord"||t.type==="textord"||t.type==="bin"||t.type==="rel"||t.type==="inner"||t.type==="open"||t.type==="close"||t.type==="punct"};var f=function(e){return o(["sizing","reset-"+e.size,"size5",e.style.reset(),r.TEXT.cls(),"nulldelimiter"])};var v={mathord:function(e,t,i){return l.makeOrd(e,t,"mathord")},textord:function(e,t,i){return l.makeOrd(e,t,"textord")},bin:function(e,t,i){var h="mbin";var a=i;while(a&&a.type==="color"){var r=a.value.value;a=r[r.length-1]}if(!i||n.contains(["mbin","mopen","mrel","mop","mpunct"],w(a))){e.type="textord";h="mord"}return l.mathsym(e.value,e.mode,t.getColor(),[h])},rel:function(e,t,i){return l.mathsym(e.value,e.mode,t.getColor(),["mrel"])},open:function(e,t,i){return l.mathsym(e.value,e.mode,t.getColor(),["mopen"])},close:function(e,t,i){return l.mathsym(e.value,e.mode,t.getColor(),["mclose"])},inner:function(e,t,i){return l.mathsym(e.value,e.mode,t.getColor(),["minner"])},punct:function(e,t,i){return l.mathsym(e.value,e.mode,t.getColor(),["mpunct"])},ordgroup:function(e,t,i){return o(["mord",t.style.cls()],g(e.value,t.reset()))},text:function(e,t,i){return o(["text","mord",t.style.cls()],g(e.value.body,t.reset()))},color:function(e,t,i){var h=g(e.value.value,t.withColor(e.value.color),i);return new l.makeFragment(h)},supsub:function(e,t,i){if(u(e.value.base,t)){return v[e.value.base.type](e,t,i)}var h=y(e.value.base,t.reset());var a,s,n,g;if(e.value.sup){n=y(e.value.sup,t.withStyle(t.style.sup()));a=o([t.style.reset(),t.style.sup().cls()],[n])}if(e.value.sub){g=y(e.value.sub,t.withStyle(t.style.sub()));s=o([t.style.reset(),t.style.sub().cls()],[g])}var d,k;if(m(e.value.base)){d=0;k=0}else{d=h.height-c.metrics.supDrop;k=h.depth+c.metrics.subDrop}var f;if(t.style===r.DISPLAY){f=c.metrics.sup1}else if(t.style.cramped){f=c.metrics.sup3}else{f=c.metrics.sup2}var x=r.TEXT.sizeMultiplier*t.style.sizeMultiplier;var b=.5/c.metrics.ptPerEm/x+"em";var z;if(!e.value.sup){k=Math.max(k,c.metrics.sub1,g.height-.8*c.metrics.xHeight);z=l.makeVList([{type:"elem",elem:s}],"shift",k,t);z.children[0].style.marginRight=b;if(h instanceof p.symbolNode){z.children[0].style.marginLeft=-h.italic+"em"}}else if(!e.value.sub){d=Math.max(d,f,n.depth+.25*c.metrics.xHeight);z=l.makeVList([{type:"elem",elem:a}],"shift",-d,t);z.children[0].style.marginRight=b}else{d=Math.max(d,f,n.depth+.25*c.metrics.xHeight);k=Math.max(k,c.metrics.sub2);var S=c.metrics.defaultRuleThickness;if(d-n.depth-(g.height-k)<4*S){k=4*S-(d-n.depth)+g.height;var M=.8*c.metrics.xHeight-(d-n.depth);if(M>0){d+=M;k-=M}}z=l.makeVList([{type:"elem",elem:s,shift:k},{type:"elem",elem:a,shift:-d}],"individualShift",null,t);if(h instanceof p.symbolNode){z.children[0].style.marginLeft=-h.italic+"em"}z.children[0].style.marginRight=b;z.children[1].style.marginRight=b}return o([w(e.value.base)],[h,z])},genfrac:function(e,t,i){var h=t.style;if(e.value.size==="display"){h=r.DISPLAY}else if(e.value.size==="text"){h=r.TEXT}var a=h.fracNum();var p=h.fracDen();var n=y(e.value.numer,t.withStyle(a));var g=o([h.reset(),a.cls()],[n]);var d=y(e.value.denom,t.withStyle(p));var w=o([h.reset(),p.cls()],[d]);var u;if(e.value.hasBarLine){u=c.metrics.defaultRuleThickness/t.style.sizeMultiplier}else{u=0}var k;var m;var v;if(h.size===r.DISPLAY.size){k=c.metrics.num1;if(u>0){m=3*u}else{m=7*c.metrics.defaultRuleThickness}v=c.metrics.denom1}else{if(u>0){k=c.metrics.num2;m=u}else{k=c.metrics.num3;m=3*c.metrics.defaultRuleThickness}v=c.metrics.denom2}var x;if(u===0){var b=k-n.depth-(d.height-v);if(b<m){k+=.5*(m-b);v+=.5*(m-b)}x=l.makeVList([{type:"elem",elem:w,shift:v},{type:"elem",elem:g,shift:-k}],"individualShift",null,t)}else{var z=c.metrics.axisHeight;if(k-n.depth-(z+.5*u)<m){k+=m-(k-n.depth-(z+.5*u))}if(z-.5*u-(d.height-v)<m){v+=m-(z-.5*u-(d.height-v))}var S=o([t.style.reset(),r.TEXT.cls(),"frac-line"]);S.height=u;var M=-(z-.5*u);x=l.makeVList([{type:"elem",elem:w,shift:v},{type:"elem",elem:S,shift:M},{type:"elem",elem:g,shift:-k}],"individualShift",null,t)}x.height*=h.sizeMultiplier/t.style.sizeMultiplier;x.depth*=h.sizeMultiplier/t.style.sizeMultiplier;var q;if(h.size===r.DISPLAY.size){q=c.metrics.delim1}else{q=c.metrics.getDelim2(h)}var A,T;if(e.value.leftDelim==null){A=f(t)}else{A=s.customSizedDelim(e.value.leftDelim,q,true,t.withStyle(h),e.mode)}if(e.value.rightDelim==null){T=f(t)}else{T=s.customSizedDelim(e.value.rightDelim,q,true,t.withStyle(h),e.mode)}return o(["mord",t.style.reset(),h.cls()],[A,o(["mfrac"],[x]),T],t.getColor())},array:function(e,t,i){var h,r;var s=e.value.body.length;var p=0;var g=new Array(s);var d=1/c.metrics.ptPerEm;var w=5*d;var u=12*d;var k=n.deflt(e.value.arraystretch,1);var m=k*u;var f=.7*m;var v=.3*m;var x=0;for(h=0;h<e.value.body.length;++h){var b=e.value.body[h];var z=f;var S=v;if(p<b.length){p=b.length}var M=new Array(b.length);for(r=0;r<b.length;++r){var q=y(b[r],t);if(S<q.depth){S=q.depth}if(z<q.height){z=q.height}M[r]=q}var A=0;if(e.value.rowGaps[h]){A=e.value.rowGaps[h].value;switch(A.unit){case"em":A=A.number;break;case"ex":A=A.number*c.metrics.emPerEx;break;default:console.error("Can't handle unit "+A.unit);A=0}if(A>0){A+=v;if(S<A){S=A}A=0}}M.height=z;M.depth=S;x+=z;M.pos=x;x+=S+A;g[h]=M}var T=x/2+c.metrics.axisHeight;var C=e.value.cols||[];var N=[];var R;var E;for(r=0,E=0;r<p||E<C.length;++r,++E){var P=C[E]||{};var D=true;while(P.type==="separator"){if(!D){R=o(["arraycolsep"],[]);R.style.width=c.metrics.doubleRuleSep+"em";N.push(R)}if(P.separator==="|"){var L=o(["vertical-separator"],[]);L.style.height=x+"em";L.style.verticalAlign=-(x-T)+"em";N.push(L)}else{throw new a("Invalid separator type: "+P.separator)}E++;P=C[E]||{};D=false}if(r>=p){continue}var O;if(r>0||e.value.hskipBeforeAndAfter){O=n.deflt(P.pregap,w);if(O!==0){R=o(["arraycolsep"],[]);R.style.width=O+"em";N.push(R)}}var I=[];for(h=0;h<s;++h){var B=g[h];var F=B[r];if(!F){continue}var _=B.pos-T;F.depth=B.depth;F.height=B.height;I.push({type:"elem",elem:F,shift:_})}I=l.makeVList(I,"individualShift",null,t);I=o(["col-align-"+(P.align||"c")],[I]);N.push(I);if(r<p-1||e.value.hskipBeforeAndAfter){O=n.deflt(P.postgap,w);if(O!==0){R=o(["arraycolsep"],[]);R.style.width=O+"em";N.push(R)}}}g=o(["mtable"],N);return o(["mord"],[g],t.getColor())},spacing:function(e,t,i){if(e.value==="\\ "||e.value==="\\space"||e.value===" "||e.value==="~"){return o(["mord","mspace"],[l.mathsym(e.value,e.mode)])}else{return o(["mord","mspace",l.spacingFunctions[e.value].className])}},llap:function(e,t,i){var h=o(["inner"],[y(e.value.body,t.reset())]);var a=o(["fix"],[]);return o(["llap",t.style.cls()],[h,a])},rlap:function(e,t,i){var h=o(["inner"],[y(e.value.body,t.reset())]);var a=o(["fix"],[]);return o(["rlap",t.style.cls()],[h,a])},op:function(e,t,i){var h;var a;var s=false;if(e.type==="supsub"){h=e.value.sup;a=e.value.sub;e=e.value.base;s=true}var p=["\\smallint"];var g=false;if(t.style.size===r.DISPLAY.size&&e.value.symbol&&!n.contains(p,e.value.body)){g=true}var d;var w=0;var u=0;if(e.value.symbol){var k=g?"Size2-Regular":"Size1-Regular";d=l.makeSymbol(e.value.body,k,"math",t.getColor(),["op-symbol",g?"large-op":"small-op","mop"]);w=(d.height-d.depth)/2-c.metrics.axisHeight*t.style.sizeMultiplier;u=d.italic}else{var m=[];for(var f=1;f<e.value.body.length;f++){m.push(l.mathsym(e.value.body[f],e.mode))}d=o(["mop"],m,t.getColor())}if(s){d=o([],[d]);var v,x,b,z;if(h){var S=y(h,t.withStyle(t.style.sup()));v=o([t.style.reset(),t.style.sup().cls()],[S]);x=Math.max(c.metrics.bigOpSpacing1,c.metrics.bigOpSpacing3-S.depth)}if(a){var M=y(a,t.withStyle(t.style.sub()));b=o([t.style.reset(),t.style.sub().cls()],[M]);z=Math.max(c.metrics.bigOpSpacing2,c.metrics.bigOpSpacing4-M.height)}var q,A,T;if(!h){A=d.height-w;q=l.makeVList([{type:"kern",size:c.metrics.bigOpSpacing5},{type:"elem",elem:b},{type:"kern",size:z},{type:"elem",elem:d}],"top",A,t);q.children[0].style.marginLeft=-u+"em"}else if(!a){T=d.depth+w;q=l.makeVList([{type:"elem",elem:d},{type:"kern",size:x},{type:"elem",elem:v},{type:"kern",size:c.metrics.bigOpSpacing5}],"bottom",T,t);q.children[1].style.marginLeft=u+"em"}else if(!h&&!a){return d}else{T=c.metrics.bigOpSpacing5+b.height+b.depth+z+d.depth+w;q=l.makeVList([{type:"kern",size:c.metrics.bigOpSpacing5},{type:"elem",elem:b},{type:"kern",size:z},{type:"elem",elem:d},{type:"kern",size:x},{type:"elem",elem:v},{type:"kern",size:c.metrics.bigOpSpacing5}],"bottom",T,t);q.children[0].style.marginLeft=-u+"em";q.children[2].style.marginLeft=u+"em"}return o(["mop","op-limits"],[q])}else{if(e.value.symbol){d.style.top=w+"em"}return d}},katex:function(e,t,i){var h=o(["k"],[l.mathsym("K",e.mode)]);var a=o(["a"],[l.mathsym("A",e.mode)]);a.height=(a.height+.2)*.75;a.depth=(a.height-.2)*.75;var r=o(["t"],[l.mathsym("T",e.mode)]);var s=o(["e"],[l.mathsym("E",e.mode)]);s.height=s.height-.2155;s.depth=s.depth+.2155;var p=o(["x"],[l.mathsym("X",e.mode)]);return o(["katex-logo","mord"],[h,a,r,s,p],t.getColor())},overline:function(e,t,i){var h=y(e.value.body,t.withStyle(t.style.cramp()));var a=c.metrics.defaultRuleThickness/t.style.sizeMultiplier;var s=o([t.style.reset(),r.TEXT.cls(),"overline-line"]);s.height=a;s.maxFontSize=1;var p=l.makeVList([{type:"elem",elem:h},{type:"kern",size:3*a},{type:"elem",elem:s},{type:"kern",size:a}],"firstBaseline",null,t);return o(["overline","mord"],[p],t.getColor())},sqrt:function(e,t,i){var h=y(e.value.body,t.withStyle(t.style.cramp()));var a=c.metrics.defaultRuleThickness/t.style.sizeMultiplier;var p=o([t.style.reset(),r.TEXT.cls(),"sqrt-line"],[],t.getColor());p.height=a;p.maxFontSize=1;var n=a;if(t.style.id<r.TEXT.id){n=c.metrics.xHeight}var g=a+n/4;var d=(h.height+h.depth)*t.style.sizeMultiplier;var w=d+g+a;var u=o(["sqrt-sign"],[s.customSizedDelim("\\surd",w,false,t,e.mode)],t.getColor());var k=u.height+u.depth-a;if(k>h.height+h.depth+g){g=(g+k-h.height-h.depth)/2}var m=-(h.height+g+a)+u.height;u.style.top=m+"em";u.height-=m;u.depth+=m;var f;if(h.height===0&&h.depth===0){f=o()}else{f=l.makeVList([{type:"elem",elem:h},{type:"kern",size:g},{type:"elem",elem:p},{type:"kern",size:a}],"firstBaseline",null,t)}if(!e.value.index){return o(["sqrt","mord"],[u,f])}else{var v=y(e.value.index,t.withStyle(r.SCRIPTSCRIPT));var x=o([t.style.reset(),r.SCRIPTSCRIPT.cls()],[v]);var b=Math.max(u.height,f.height);var z=Math.max(u.depth,f.depth);var S=.6*(b-z);var M=l.makeVList([{type:"elem",elem:x}],"shift",-S,t);var q=o(["root"],[M]);return o(["sqrt","mord"],[q,u,f])}},sizing:function(e,t,i){var h=g(e.value.value,t.withSize(e.value.size),i);var a=o(["mord"],[o(["sizing","reset-"+t.size,e.value.size,t.style.cls()],h)]);
var r=l.sizingMultiplier[e.value.size];a.maxFontSize=r*t.style.sizeMultiplier;return a},styling:function(e,t,i){var h={display:r.DISPLAY,text:r.TEXT,script:r.SCRIPT,scriptscript:r.SCRIPTSCRIPT};var a=h[e.value.style];var l=g(e.value.value,t.withStyle(a),i);return o([t.style.reset(),a.cls()],l)},font:function(e,t,i){var h=e.value.font;return y(e.value.body,t.withFont(h),i)},delimsizing:function(e,t,i){var h=e.value.value;if(h==="."){return o([d[e.value.delimType]])}return o([d[e.value.delimType]],[s.sizedDelim(h,e.value.size,t,e.mode)])},leftright:function(e,t,i){var h=g(e.value.body,t.reset());var a=0;var r=0;for(var l=0;l<h.length;l++){a=Math.max(h[l].height,a);r=Math.max(h[l].depth,r)}a*=t.style.sizeMultiplier;r*=t.style.sizeMultiplier;var p;if(e.value.left==="."){p=f(t)}else{p=s.leftRightDelim(e.value.left,a,r,t,e.mode)}h.unshift(p);var c;if(e.value.right==="."){c=f(t)}else{c=s.leftRightDelim(e.value.right,a,r,t,e.mode)}h.push(c);return o(["minner",t.style.cls()],h,t.getColor())},rule:function(e,t,i){var h=o(["mord","rule"],[],t.getColor());var a=0;if(e.value.shift){a=e.value.shift.number;if(e.value.shift.unit==="ex"){a*=c.metrics.xHeight}}var r=e.value.width.number;if(e.value.width.unit==="ex"){r*=c.metrics.xHeight}var l=e.value.height.number;if(e.value.height.unit==="ex"){l*=c.metrics.xHeight}a/=t.style.sizeMultiplier;r/=t.style.sizeMultiplier;l/=t.style.sizeMultiplier;h.style.borderRightWidth=r+"em";h.style.borderTopWidth=l+"em";h.style.bottom=a+"em";h.width=r;h.height=l+a;h.depth=-a;return h},accent:function(e,t,i){var h=e.value.base;var a;if(e.type==="supsub"){var r=e;e=r.value.base;h=e.value.base;r.value.base=h;a=y(r,t.reset(),i)}var s=y(h,t.withStyle(t.style.cramp()));var p;if(m(h)){var n=k(h);var g=y(n,t.withStyle(t.style.cramp()));p=g.skew}else{p=0}var d=Math.min(s.height,c.metrics.xHeight);var w=l.makeSymbol(e.value.accent,"Main-Regular","math",t.getColor());w.italic=0;var u=e.value.accent==="\\vec"?"accent-vec":null;var f=o(["accent-body",u],[o([],[w])]);f=l.makeVList([{type:"elem",elem:s},{type:"kern",size:-d},{type:"elem",elem:f}],"firstBaseline",null,t);f.children[1].style.marginLeft=2*p+"em";var v=o(["mord","accent"],[f]);if(a){a.children[0]=v;a.height=Math.max(v.height,a.height);a.classes[0]="mord";return a}else{return v}},phantom:function(e,t,i){var h=g(e.value.value,t.withPhantom(),i);return new l.makeFragment(h)}};var y=function(e,t,i){if(!e){return o()}if(v[e.type]){var h=v[e.type](e,t,i);var r;if(t.style!==t.parentStyle){r=t.style.sizeMultiplier/t.parentStyle.sizeMultiplier;h.height*=r;h.depth*=r}if(t.size!==t.parentSize){r=l.sizingMultiplier[t.size]/l.sizingMultiplier[t.parentSize];h.height*=r;h.depth*=r}return h}else{throw new a("Got group of unknown type: '"+e.type+"'")}};var x=function(e,t){e=JSON.parse(JSON.stringify(e));var i=r.TEXT;if(t.displayMode){i=r.DISPLAY}var a=new h({style:i,size:"size5"});var l=g(e,a);var s=o(["base",a.style.cls()],l);var p=o(["strut"]);var c=o(["strut","bottom"]);p.style.height=s.height+"em";c.style.height=s.height+s.depth+"em";c.style.verticalAlign=-s.depth+"em";var n=o(["katex-html"],[p,c,s]);n.setAttribute("aria-hidden","true");return n};t.exports=x},{"./Options":4,"./ParseError":5,"./Style":8,"./buildCommon":9,"./delimiter":13,"./domTree":14,"./fontMetrics":16,"./utils":23}],11:[function(e,t,i){var h=e("./buildCommon");var a=e("./mathMLTree");var r=e("./ParseError");var l=e("./symbols");var s=h.makeSpan;var p=function(e,t){if(l[t][e]&&l[t][e].replace){e=l[t][e].replace}return new a.TextNode(e)};var c={mathord:function(e){var t=new a.MathNode("mi",[p(e.value,e.mode)]);return t},textord:function(e){var t=p(e.value,e.mode);var i;if(/[0-9]/.test(e.value)){i=new a.MathNode("mn",[t])}else{i=new a.MathNode("mi",[t]);i.setAttribute("mathvariant","normal")}return i},bin:function(e){var t=new a.MathNode("mo",[p(e.value,e.mode)]);return t},rel:function(e){var t=new a.MathNode("mo",[p(e.value,e.mode)]);return t},open:function(e){var t=new a.MathNode("mo",[p(e.value,e.mode)]);return t},close:function(e){var t=new a.MathNode("mo",[p(e.value,e.mode)]);return t},inner:function(e){var t=new a.MathNode("mo",[p(e.value,e.mode)]);return t},punct:function(e){var t=new a.MathNode("mo",[p(e.value,e.mode)]);t.setAttribute("separator","true");return t},ordgroup:function(e){var t=n(e.value);var i=new a.MathNode("mrow",t);return i},text:function(e){var t=n(e.value.body);var i=new a.MathNode("mtext",t);return i},color:function(e){var t=n(e.value.value);var i=new a.MathNode("mstyle",t);i.setAttribute("mathcolor",e.value.color);return i},supsub:function(e){var t=[o(e.value.base)];if(e.value.sub){t.push(o(e.value.sub))}if(e.value.sup){t.push(o(e.value.sup))}var i;if(!e.value.sub){i="msup"}else if(!e.value.sup){i="msub"}else{i="msubsup"}var h=new a.MathNode(i,t);return h},genfrac:function(e){var t=new a.MathNode("mfrac",[o(e.value.numer),o(e.value.denom)]);if(!e.value.hasBarLine){t.setAttribute("linethickness","0px")}if(e.value.leftDelim!=null||e.value.rightDelim!=null){var i=[];if(e.value.leftDelim!=null){var h=new a.MathNode("mo",[new a.TextNode(e.value.leftDelim)]);h.setAttribute("fence","true");i.push(h)}i.push(t);if(e.value.rightDelim!=null){var r=new a.MathNode("mo",[new a.TextNode(e.value.rightDelim)]);r.setAttribute("fence","true");i.push(r)}var l=new a.MathNode("mrow",i);return l}return t},array:function(e){return new a.MathNode("mtable",e.value.body.map(function(e){return new a.MathNode("mtr",e.map(function(e){return new a.MathNode("mtd",[o(e)])}))}))},sqrt:function(e){var t;if(e.value.index){t=new a.MathNode("mroot",[o(e.value.body),o(e.value.index)])}else{t=new a.MathNode("msqrt",[o(e.value.body)])}return t},leftright:function(e){var t=n(e.value.body);if(e.value.left!=="."){var i=new a.MathNode("mo",[p(e.value.left,e.mode)]);i.setAttribute("fence","true");t.unshift(i)}if(e.value.right!=="."){var h=new a.MathNode("mo",[p(e.value.right,e.mode)]);h.setAttribute("fence","true");t.push(h)}var r=new a.MathNode("mrow",t);return r},accent:function(e){var t=new a.MathNode("mo",[p(e.value.accent,e.mode)]);var i=new a.MathNode("mover",[o(e.value.base),t]);i.setAttribute("accent","true");return i},font:function(e){return o(e.value.body)},spacing:function(e){var t;if(e.value==="\\ "||e.value==="\\space"||e.value===" "||e.value==="~"){t=new a.MathNode("mtext",[new a.TextNode("\xa0")])}else{t=new a.MathNode("mspace");t.setAttribute("width",h.spacingFunctions[e.value].size)}return t},op:function(e){var t;if(e.value.symbol){t=new a.MathNode("mo",[p(e.value.body,e.mode)])}else{t=new a.MathNode("mi",[new a.TextNode(e.value.body.slice(1))])}return t},katex:function(e){var t=new a.MathNode("mtext",[new a.TextNode("KaTeX")]);return t},delimsizing:function(e){var t=[];if(e.value.value!=="."){t.push(p(e.value.value,e.mode))}var i=new a.MathNode("mo",t);if(e.value.delimType==="open"||e.value.delimType==="close"){i.setAttribute("fence","true")}else{i.setAttribute("fence","false")}return i},styling:function(e){var t=n(e.value.value,t);var i=new a.MathNode("mstyle",t);var h={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]};var r=h[e.value.style];i.setAttribute("scriptlevel",r[0]);i.setAttribute("displaystyle",r[1]);return i},sizing:function(e){var t=n(e.value.value);var i=new a.MathNode("mstyle",t);i.setAttribute("mathsize",h.sizingMultiplier[e.value.size]+"em");return i},overline:function(e){var t=new a.MathNode("mo",[new a.TextNode("\u203e")]);t.setAttribute("stretchy","true");var i=new a.MathNode("mover",[o(e.value.body),t]);i.setAttribute("accent","true");return i},rule:function(e){var t=new a.MathNode("mrow");return t},llap:function(e){var t=new a.MathNode("mpadded",[o(e.value.body)]);t.setAttribute("lspace","-1width");t.setAttribute("width","0px");return t},rlap:function(e){var t=new a.MathNode("mpadded",[o(e.value.body)]);t.setAttribute("width","0px");return t},phantom:function(e,t,i){var h=n(e.value.value);return new a.MathNode("mphantom",h)}};var n=function(e){var t=[];for(var i=0;i<e.length;i++){var h=e[i];t.push(o(h))}return t};var o=function(e){if(!e){return new a.MathNode("mrow")}if(c[e.type]){return c[e.type](e)}else{throw new r("Got group of unknown type: '"+e.type+"'")}};var g=function(e,t,i){var h=n(e);var r=new a.MathNode("mrow",h);var l=new a.MathNode("annotation",[new a.TextNode(t)]);l.setAttribute("encoding","application/x-tex");var p=new a.MathNode("semantics",[r,l]);var c=new a.MathNode("math",[p]);return s(["katex-mathml"],[c])};t.exports=g},{"./ParseError":5,"./buildCommon":9,"./mathMLTree":19,"./symbols":22}],12:[function(e,t,i){var h=e("./buildHTML");var a=e("./buildMathML");var r=e("./buildCommon");var l=r.makeSpan;var s=function(e,t,i){var r=a(e,t,i);var s=h(e,i);var p=l(["katex"],[r,s]);if(i.displayMode){return l(["katex-display"],[p])}else{return p}};t.exports=s},{"./buildCommon":9,"./buildHTML":10,"./buildMathML":11}],13:[function(e,t,i){var h=e("./ParseError");var a=e("./Style");var r=e("./buildCommon");var l=e("./fontMetrics");var s=e("./symbols");var p=e("./utils");var c=r.makeSpan;var n=function(e,t){if(s.math[e]&&s.math[e].replace){return l.getCharacterMetrics(s.math[e].replace,t)}else{return l.getCharacterMetrics(e,t)}};var o=function(e,t,i){return r.makeSymbol(e,"Size"+t+"-Regular",i)};var g=function(e,t,i){var h=c(["style-wrap",i.style.reset(),t.cls()],[e]);var a=t.sizeMultiplier/i.style.sizeMultiplier;h.height*=a;h.depth*=a;h.maxFontSize=t.sizeMultiplier;return h};var d=function(e,t,i,h,a){var s=r.makeSymbol(e,"Main-Regular",a);var p=g(s,t,h);if(i){var c=(1-h.style.sizeMultiplier/t.sizeMultiplier)*l.metrics.axisHeight;p.style.top=c+"em";p.height-=c;p.depth+=c}return p};var w=function(e,t,i,h,r){var s=o(e,t,r);var p=g(c(["delimsizing","size"+t],[s],h.getColor()),a.TEXT,h);if(i){var n=(1-h.style.sizeMultiplier)*l.metrics.axisHeight;p.style.top=n+"em";p.height-=n;p.depth+=n}return p};var u=function(e,t,i){var h;if(t==="Size1-Regular"){h="delim-size1"}else if(t==="Size4-Regular"){h="delim-size4"}var a=c(["delimsizinginner",h],[c([],[r.makeSymbol(e,t,i)])]);return{type:"elem",elem:a}};var k=function(e,t,i,h,s){var p,o,d,w;p=d=w=e;o=null;var k="Size1-Regular";if(e==="\\uparrow"){d=w="\u23d0"}else if(e==="\\Uparrow"){d=w="\u2016"}else if(e==="\\downarrow"){p=d="\u23d0"}else if(e==="\\Downarrow"){p=d="\u2016"}else if(e==="\\updownarrow"){p="\\uparrow";d="\u23d0";w="\\downarrow"}else if(e==="\\Updownarrow"){p="\\Uparrow";d="\u2016";w="\\Downarrow"}else if(e==="["||e==="\\lbrack"){p="\u23a1";d="\u23a2";w="\u23a3";k="Size4-Regular"}else if(e==="]"||e==="\\rbrack"){p="\u23a4";d="\u23a5";w="\u23a6";k="Size4-Regular"}else if(e==="\\lfloor"){d=p="\u23a2";w="\u23a3";k="Size4-Regular"}else if(e==="\\lceil"){p="\u23a1";d=w="\u23a2";k="Size4-Regular"}else if(e==="\\rfloor"){d=p="\u23a5";w="\u23a6";k="Size4-Regular"}else if(e==="\\rceil"){p="\u23a4";d=w="\u23a5";k="Size4-Regular"}else if(e==="("){p="\u239b";d="\u239c";w="\u239d";k="Size4-Regular"}else if(e===")"){p="\u239e";d="\u239f";w="\u23a0";k="Size4-Regular"}else if(e==="\\{"||e==="\\lbrace"){p="\u23a7";o="\u23a8";w="\u23a9";d="\u23aa";k="Size4-Regular"}else if(e==="\\}"||e==="\\rbrace"){p="\u23ab";o="\u23ac";w="\u23ad";d="\u23aa";k="Size4-Regular"}else if(e==="\\lgroup"){p="\u23a7";w="\u23a9";d="\u23aa";k="Size4-Regular"}else if(e==="\\rgroup"){p="\u23ab";w="\u23ad";d="\u23aa";k="Size4-Regular"}else if(e==="\\lmoustache"){p="\u23a7";w="\u23ad";d="\u23aa";k="Size4-Regular"}else if(e==="\\rmoustache"){p="\u23ab";w="\u23a9";d="\u23aa";k="Size4-Regular"}else if(e==="\\surd"){p="\ue001";w="\u23b7";d="\ue000";k="Size4-Regular"}var m=n(p,k);var f=m.height+m.depth;var v=n(d,k);var y=v.height+v.depth;var x=n(w,k);var b=x.height+x.depth;var z=0;var S=1;if(o!==null){var M=n(o,k);z=M.height+M.depth;S=2}var q=f+b+z;var A=Math.ceil((t-q)/(S*y));var T=q+A*S*y;var C=l.metrics.axisHeight;if(i){C*=h.style.sizeMultiplier}var N=T/2-C;var R=[];R.push(u(w,k,s));var E;if(o===null){for(E=0;E<A;E++){R.push(u(d,k,s))}}else{for(E=0;E<A;E++){R.push(u(d,k,s))}R.push(u(o,k,s));for(E=0;E<A;E++){R.push(u(d,k,s))}}R.push(u(p,k,s));var P=r.makeVList(R,"bottom",N,h);return g(c(["delimsizing","mult"],[P],h.getColor()),a.TEXT,h)};var m=["(",")","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","\\lceil","\\rceil","\\surd"];var f=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","\\lmoustache","\\rmoustache"];var v=["<",">","\\langle","\\rangle","/","\\backslash"];var y=[0,1.2,1.8,2.4,3];var x=function(e,t,i,a){if(e==="<"){e="\\langle"}else if(e===">"){e="\\rangle"}if(p.contains(m,e)||p.contains(v,e)){return w(e,t,false,i,a)}else if(p.contains(f,e)){return k(e,y[t],false,i,a)}else{throw new h("Illegal delimiter: '"+e+"'")}};var b=[{type:"small",style:a.SCRIPTSCRIPT},{type:"small",style:a.SCRIPT},{type:"small",style:a.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}];var z=[{type:"small",style:a.SCRIPTSCRIPT},{type:"small",style:a.SCRIPT},{type:"small",style:a.TEXT},{type:"stack"}];var S=[{type:"small",style:a.SCRIPTSCRIPT},{type:"small",style:a.SCRIPT},{type:"small",style:a.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}];var M=function(e){if(e.type==="small"){return"Main-Regular"}else if(e.type==="large"){return"Size"+e.size+"-Regular"}else if(e.type==="stack"){return"Size4-Regular"}};var q=function(e,t,i,h){var a=Math.min(2,3-h.style.size);for(var r=a;r<i.length;r++){if(i[r].type==="stack"){break}var l=n(e,M(i[r]));var s=l.height+l.depth;if(i[r].type==="small"){s*=i[r].style.sizeMultiplier}if(s>t){return i[r]}}return i[i.length-1]};var A=function(e,t,i,h,a){if(e==="<"){e="\\langle"}else if(e===">"){e="\\rangle"}var r;if(p.contains(v,e)){r=b}else if(p.contains(m,e)){r=S}else{r=z}var l=q(e,t,r,h);if(l.type==="small"){return d(e,l.style,i,h,a)}else if(l.type==="large"){return w(e,l.size,i,h,a)}else if(l.type==="stack"){return k(e,t,i,h,a)}};var T=function(e,t,i,h,a){var r=l.metrics.axisHeight*h.style.sizeMultiplier;var s=901;var p=5/l.metrics.ptPerEm;var c=Math.max(t-r,i+r);var n=Math.max(c/500*s,2*c-p);return A(e,n,true,h,a)};t.exports={sizedDelim:x,customSizedDelim:A,leftRightDelim:T}},{"./ParseError":5,"./Style":8,"./buildCommon":9,"./fontMetrics":16,"./symbols":22,"./utils":23}],14:[function(e,t,i){var h=e("./utils");var a=function(e){e=e.slice();for(var t=e.length-1;t>=0;t--){if(!e[t]){e.splice(t,1)}}return e.join(" ")};function r(e,t,i,h,a,r){this.classes=e||[];this.children=t||[];this.height=i||0;this.depth=h||0;this.maxFontSize=a||0;this.style=r||{};this.attributes={}}r.prototype.setAttribute=function(e,t){this.attributes[e]=t};r.prototype.toNode=function(){var e=document.createElement("span");e.className=a(this.classes);for(var t in this.style){if(Object.prototype.hasOwnProperty.call(this.style,t)){e.style[t]=this.style[t]}}for(var i in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,i)){e.setAttribute(i,this.attributes[i])}}for(var h=0;h<this.children.length;h++){e.appendChild(this.children[h].toNode())}return e};r.prototype.toMarkup=function(){var e="<span";if(this.classes.length){e+=' class="';e+=h.escape(a(this.classes));e+='"'}var t="";for(var i in this.style){if(this.style.hasOwnProperty(i)){t+=h.hyphenate(i)+":"+this.style[i]+";"}}if(t){e+=' style="'+h.escape(t)+'"'}for(var r in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,r)){e+=" "+r+'="';e+=h.escape(this.attributes[r]);e+='"'}}e+=">";for(var l=0;l<this.children.length;l++){e+=this.children[l].toMarkup()}e+="</span>";return e};function l(e,t,i,h){this.children=e||[];this.height=t||0;this.depth=i||0;this.maxFontSize=h||0}l.prototype.toNode=function(){var e=document.createDocumentFragment();for(var t=0;t<this.children.length;t++){e.appendChild(this.children[t].toNode())}return e};l.prototype.toMarkup=function(){var e="";for(var t=0;t<this.children.length;t++){e+=this.children[t].toMarkup()}return e};function s(e,t,i,h,a,r,l){this.value=e||"";this.height=t||0;this.depth=i||0;this.italic=h||0;this.skew=a||0;this.classes=r||[];this.style=l||{};this.maxFontSize=0}s.prototype.toNode=function(){var e=document.createTextNode(this.value);var t=null;if(this.italic>0){t=document.createElement("span");t.style.marginRight=this.italic+"em"}if(this.classes.length>0){t=t||document.createElement("span");t.className=a(this.classes)}for(var i in this.style){if(this.style.hasOwnProperty(i)){t=t||document.createElement("span");t.style[i]=this.style[i]}}if(t){t.appendChild(e);return t}else{return e}};s.prototype.toMarkup=function(){var e=false;var t="<span";if(this.classes.length){e=true;t+=' class="';t+=h.escape(a(this.classes));t+='"'}var i="";if(this.italic>0){i+="margin-right:"+this.italic+"em;"}for(var r in this.style){if(this.style.hasOwnProperty(r)){i+=h.hyphenate(r)+":"+this.style[r]+";"}}if(i){e=true;t+=' style="'+h.escape(i)+'"'}var l=h.escape(this.value);if(e){t+=">";t+=l;t+="</span>";return t}else{return l}};t.exports={span:r,documentFragment:l,symbolNode:s}},{"./utils":23}],15:[function(e,t,i){var h=e("./fontMetrics");var a=e("./parseData");var r=e("./ParseError");var l=a.ParseNode;var s=a.ParseResult;function p(e,t,i,h){var a=[],p=[a],c=[];while(true){var n=e.parseExpression(t,i,false,null);a.push(new l("ordgroup",n.result,i));t=n.position;var o=n.peek.text;if(o==="&"){t=n.peek.position}else if(o==="\\end"){break}else if(o==="\\\\"||o==="\\cr"){var g=e.parseFunction(t,i);c.push(g.result.value.size);t=g.position;a=[];p.push(a)}else{throw new r("Expected & or \\\\ or \\end",e.lexer,n.peek.position)}}h.body=p;h.rowGaps=c;return new s(new l(h.type,h,i),t)}var c=[{names:["array"],numArgs:1,handler:function(e,t,i,h,a){var l=this;h=h.value.map?h.value:[h];var s=h.map(function(e){var t=e.value;if("lcr".indexOf(t)!==-1){return{type:"align",align:t}}else if(t==="|"){return{type:"separator",separator:"|"}}throw new r("Unknown column alignment: "+e.value,l.lexer,a[1])});var c={type:"array",cols:s,hskipBeforeAndAfter:true};c=p(l,e,t,c);return c}},{names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix"],handler:function(e,t,i){var h={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[i];var a={type:"array",hskipBeforeAndAfter:false};a=p(this,e,t,a);if(h){a.result=new l("leftright",{body:[a.result],left:h[0],right:h[1]},t)}return a}},{names:["cases"],handler:function(e,t,i){var a={type:"array",arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:h.metrics.quad},{type:"align",align:"l",pregap:0,postgap:0}]};a=p(this,e,t,a);a.result=new l("leftright",{body:[a.result],left:"\\{",right:"."},t);return a}}];t.exports=function(){var e={};for(var t=0;t<c.length;++t){var i=c[t];i.greediness=1;i.allowedInText=!!i.allowedInText;i.numArgs=i.numArgs||0;i.numOptionalArgs=i.numOptionalArgs||0;for(var h=0;h<i.names.length;++h){e[i.names[h]]=i}}return e}()},{"./ParseError":5,"./fontMetrics":16,"./parseData":20}],16:[function(e,t,i){var h=e("./Style");var a=.025;var r=0;var l=0;var s=0;var p=.431;var c=1;var n=0;var o=.677;var g=.394;var d=.444;var w=.686;var u=.345;var k=.413;var m=.363;var f=.289;var v=.15;var y=.247;var x=.386;var b=.05;var z=2.39;var S=1.01;var M=.81;var q=.71;var A=.25;var T=0;var C=0;var N=0;var R=0;var E=.431;var P=1;var D=0;var L=.04;var O=.111;var I=.166;var B=.2;var F=.6;var _=.1;var V=10;var G=2/V;var U={xHeight:p,quad:c,num1:o,num2:g,num3:d,denom1:w,denom2:u,sup1:k,sup2:m,sup3:f,sub1:v,sub2:y,supDrop:x,subDrop:b,axisHeight:A,defaultRuleThickness:L,bigOpSpacing1:O,bigOpSpacing2:I,bigOpSpacing3:B,bigOpSpacing4:F,bigOpSpacing5:_,ptPerEm:V,emPerEx:p/c,doubleRuleSep:G,delim1:z,getDelim2:function(e){if(e.size===h.TEXT.size){return S}else if(e.size===h.SCRIPT.size){return M}else if(e.size===h.SCRIPTSCRIPT.size){return q}throw new Error("Unexpected style size: "+e.size)}};var H=e("./fontMetricsData");var X=function(e,t){return H[t][e.charCodeAt(0)]};t.exports={metrics:U,getCharacterMetrics:X}},{"./Style":8,"./fontMetricsData":17}],17:[function(e,t,i){t.exports={"AMS-Regular":{65:{depth:0,height:.68889,italic:0,skew:0},66:{depth:0,height:.68889,italic:0,skew:0},67:{depth:0,height:.68889,italic:0,skew:0},68:{depth:0,height:.68889,italic:0,skew:0},69:{depth:0,height:.68889,italic:0,skew:0},70:{depth:0,height:.68889,italic:0,skew:0},71:{depth:0,height:.68889,italic:0,skew:0},72:{depth:0,height:.68889,italic:0,skew:0},73:{depth:0,height:.68889,italic:0,skew:0},74:{depth:.16667,height:.68889,italic:0,skew:0},75:{depth:0,height:.68889,italic:0,skew:0},76:{depth:0,height:.68889,italic:0,skew:0},77:{depth:0,height:.68889,italic:0,skew:0},78:{depth:0,height:.68889,italic:0,skew:0},79:{depth:.16667,height:.68889,italic:0,skew:0},80:{depth:0,height:.68889,italic:0,skew:0},81:{depth:.16667,height:.68889,italic:0,skew:0},82:{depth:0,height:.68889,italic:0,skew:0},83:{depth:0,height:.68889,italic:0,skew:0},84:{depth:0,height:.68889,italic:0,skew:0},85:{depth:0,height:.68889,italic:0,skew:0},86:{depth:0,height:.68889,italic:0,skew:0},87:{depth:0,height:.68889,italic:0,skew:0},88:{depth:0,height:.68889,italic:0,skew:0},89:{depth:0,height:.68889,italic:0,skew:0},90:{depth:0,height:.68889,italic:0,skew:0},107:{depth:0,height:.68889,italic:0,skew:0},165:{depth:0,height:.675,italic:.025,skew:0},174:{depth:.15559,height:.69224,italic:0,skew:0},240:{depth:0,height:.68889,italic:0,skew:0},295:{depth:0,height:.68889,italic:0,skew:0},710:{depth:0,height:.825,italic:0,skew:0},732:{depth:0,height:.9,italic:0,skew:0},770:{depth:0,height:.825,italic:0,skew:0},771:{depth:0,height:.9,italic:0,skew:0},989:{depth:.08167,height:.58167,italic:0,skew:0},1008:{depth:0,height:.43056,italic:.04028,skew:0},8245:{depth:0,height:.54986,italic:0,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0},8487:{depth:0,height:.68889,italic:0,skew:0},8498:{depth:0,height:.68889,italic:0,skew:0},8502:{depth:0,height:.68889,italic:0,skew:0},8503:{depth:0,height:.68889,italic:0,skew:0},8504:{depth:0,height:.68889,italic:0,skew:0},8513:{depth:0,height:.68889,italic:0,skew:0},8592:{depth:-.03598,height:.46402,italic:0,skew:0},8594:{depth:-.03598,height:.46402,italic:0,skew:0},8602:{depth:-.13313,height:.36687,italic:0,skew:0},8603:{depth:-.13313,height:.36687,italic:0,skew:0},8606:{depth:.01354,height:.52239,italic:0,skew:0},8608:{depth:.01354,height:.52239,italic:0,skew:0},8610:{depth:.01354,height:.52239,italic:0,skew:0},8611:{depth:.01354,height:.52239,italic:0,skew:0},8619:{depth:0,height:.54986,italic:0,skew:0},8620:{depth:0,height:.54986,italic:0,skew:0},8621:{depth:-.13313,height:.37788,italic:0,skew:0},8622:{depth:-.13313,height:.36687,italic:0,skew:0},8624:{depth:0,height:.69224,italic:0,skew:0},8625:{depth:0,height:.69224,italic:0,skew:0},8630:{depth:0,height:.43056,italic:0,skew:0},8631:{depth:0,height:.43056,italic:0,skew:0},8634:{depth:.08198,height:.58198,italic:0,skew:0},8635:{depth:.08198,height:.58198,italic:0,skew:0},8638:{depth:.19444,height:.69224,italic:0,skew:0},8639:{depth:.19444,height:.69224,italic:0,skew:0},8642:{depth:.19444,height:.69224,italic:0,skew:0},8643:{depth:.19444,height:.69224,italic:0,skew:0},8644:{depth:.1808,height:.675,italic:0,skew:0},8646:{depth:.1808,height:.675,italic:0,skew:0},8647:{depth:.1808,height:.675,italic:0,skew:0},8648:{depth:.19444,height:.69224,italic:0,skew:0},8649:{depth:.1808,height:.675,italic:0,skew:0},8650:{depth:.19444,height:.69224,italic:0,skew:0},8651:{depth:.01354,height:.52239,italic:0,skew:0},8652:{depth:.01354,height:.52239,italic:0,skew:0},8653:{depth:-.13313,height:.36687,italic:0,skew:0},8654:{depth:-.13313,height:.36687,italic:0,skew:0},8655:{depth:-.13313,height:.36687,italic:0,skew:0},8666:{depth:.13667,height:.63667,italic:0,skew:0},8667:{depth:.13667,height:.63667,italic:0,skew:0},8669:{depth:-.13313,height:.37788,italic:0,skew:0},8672:{depth:-.064,height:.437,italic:0,skew:0},8674:{depth:-.064,height:.437,italic:0,skew:0},8705:{depth:0,height:.825,italic:0,skew:0},8708:{depth:0,height:.68889,italic:0,skew:0},8709:{depth:.08167,height:.58167,italic:0,skew:0},8717:{depth:0,height:.43056,italic:0,skew:0},8722:{depth:-.03598,height:.46402,italic:0,skew:0},8724:{depth:.08198,height:.69224,italic:0,skew:0},8726:{depth:.08167,height:.58167,italic:0,skew:0},8733:{depth:0,height:.69224,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8737:{depth:0,height:.69224,italic:0,skew:0},8738:{depth:.03517,height:.52239,italic:0,skew:0},8739:{depth:.08167,height:.58167,italic:0,skew:0},8740:{depth:.25142,height:.74111,italic:0,skew:0},8741:{depth:.08167,height:.58167,italic:0,skew:0},8742:{depth:.25142,height:.74111,italic:0,skew:0},8756:{depth:0,height:.69224,italic:0,skew:0},8757:{depth:0,height:.69224,italic:0,skew:0},8764:{depth:-.13313,height:.36687,italic:0,skew:0},8765:{depth:-.13313,height:.37788,italic:0,skew:0},8769:{depth:-.13313,height:.36687,italic:0,skew:0},8770:{depth:-.03625,height:.46375,italic:0,skew:0},8774:{depth:.30274,height:.79383,italic:0,skew:0},8776:{depth:-.01688,height:.48312,italic:0,skew:0},8778:{depth:.08167,height:.58167,italic:0,skew:0},8782:{depth:.06062,height:.54986,italic:0,skew:0},8783:{depth:.06062,height:.54986,italic:0,skew:0},8785:{depth:.08198,height:.58198,italic:0,skew:0},8786:{depth:.08198,height:.58198,italic:0,skew:0},8787:{depth:.08198,height:.58198,italic:0,skew:0},8790:{depth:0,height:.69224,italic:0,skew:0},8791:{depth:.22958,height:.72958,italic:0,skew:0},8796:{depth:.08198,height:.91667,italic:0,skew:0},8806:{depth:.25583,height:.75583,italic:0,skew:0},8807:{depth:.25583,height:.75583,italic:0,skew:0},8808:{depth:.25142,height:.75726,italic:0,skew:0},8809:{depth:.25142,height:.75726,italic:0,skew:0},8812:{depth:.25583,height:.75583,italic:0,skew:0},8814:{depth:.20576,height:.70576,italic:0,skew:0},8815:{depth:.20576,height:.70576,italic:0,skew:0},8816:{depth:.30274,height:.79383,italic:0,skew:0},8817:{depth:.30274,height:.79383,italic:0,skew:0},8818:{depth:.22958,height:.72958,italic:0,skew:0},8819:{depth:.22958,height:.72958,italic:0,skew:0},8822:{depth:.1808,height:.675,italic:0,skew:0},8823:{depth:.1808,height:.675,italic:0,skew:0},8828:{depth:.13667,height:.63667,italic:0,skew:0},8829:{depth:.13667,height:.63667,italic:0,skew:0},8830:{depth:.22958,height:.72958,italic:0,skew:0},8831:{depth:.22958,height:.72958,italic:0,skew:0},8832:{depth:.20576,height:.70576,italic:0,skew:0},8833:{depth:.20576,height:.70576,italic:0,skew:0},8840:{depth:.30274,height:.79383,italic:0,skew:0},8841:{depth:.30274,height:.79383,italic:0,skew:0},8842:{depth:.13597,height:.63597,italic:0,skew:0},8843:{depth:.13597,height:.63597,italic:0,skew:0},8847:{depth:.03517,height:.54986,italic:0,skew:0},8848:{depth:.03517,height:.54986,italic:0,skew:0},8858:{depth:.08198,height:.58198,italic:0,skew:0},8859:{depth:.08198,height:.58198,italic:0,skew:0},8861:{depth:.08198,height:.58198,italic:0,skew:0},8862:{depth:0,height:.675,italic:0,skew:0},8863:{depth:0,height:.675,italic:0,skew:0},8864:{depth:0,height:.675,italic:0,skew:0},8865:{depth:0,height:.675,italic:0,skew:0},8872:{depth:0,height:.69224,italic:0,skew:0},8873:{depth:0,height:.69224,italic:0,skew:0},8874:{depth:0,height:.69224,italic:0,skew:0},8876:{depth:0,height:.68889,italic:0,skew:0},8877:{depth:0,height:.68889,italic:0,skew:0},8878:{depth:0,height:.68889,italic:0,skew:0},8879:{depth:0,height:.68889,italic:0,skew:0},8882:{depth:.03517,height:.54986,italic:0,skew:0},8883:{depth:.03517,height:.54986,italic:0,skew:0},8884:{depth:.13667,height:.63667,italic:0,skew:0},8885:{depth:.13667,height:.63667,italic:0,skew:0},8888:{depth:0,height:.54986,italic:0,skew:0},8890:{depth:.19444,height:.43056,italic:0,skew:0},8891:{depth:.19444,height:.69224,italic:0,skew:0},8892:{depth:.19444,height:.69224,italic:0,skew:0},8901:{depth:0,height:.54986,italic:0,skew:0},8903:{depth:.08167,height:.58167,italic:0,skew:0},8905:{depth:.08167,height:.58167,italic:0,skew:0},8906:{depth:.08167,height:.58167,italic:0,skew:0},8907:{depth:0,height:.69224,italic:0,skew:0},8908:{depth:0,height:.69224,italic:0,skew:0},8909:{depth:-.03598,height:.46402,italic:0,skew:0},8910:{depth:0,height:.54986,italic:0,skew:0},8911:{depth:0,height:.54986,italic:0,skew:0},8912:{depth:.03517,height:.54986,italic:0,skew:0},8913:{depth:.03517,height:.54986,italic:0,skew:0},8914:{depth:0,height:.54986,italic:0,skew:0},8915:{depth:0,height:.54986,italic:0,skew:0},8916:{depth:0,height:.69224,italic:0,skew:0},8918:{depth:.0391,height:.5391,italic:0,skew:0},8919:{depth:.0391,height:.5391,italic:0,skew:0},8920:{depth:.03517,height:.54986,italic:0,skew:0},8921:{depth:.03517,height:.54986,italic:0,skew:0},8922:{depth:.38569,height:.88569,italic:0,skew:0},8923:{depth:.38569,height:.88569,italic:0,skew:0},8926:{depth:.13667,height:.63667,italic:0,skew:0},8927:{depth:.13667,height:.63667,italic:0,skew:0},8928:{depth:.30274,height:.79383,italic:0,skew:0},8929:{depth:.30274,height:.79383,italic:0,skew:0},8934:{depth:.23222,height:.74111,italic:0,skew:0},8935:{depth:.23222,height:.74111,italic:0,skew:0},8936:{depth:.23222,height:.74111,italic:0,skew:0},8937:{depth:.23222,height:.74111,italic:0,skew:0},8938:{depth:.20576,height:.70576,italic:0,skew:0},8939:{depth:.20576,height:.70576,italic:0,skew:0},8940:{depth:.30274,height:.79383,italic:0,skew:0},8941:{depth:.30274,height:.79383,italic:0,skew:0},8994:{depth:.19444,height:.69224,italic:0,skew:0},8995:{depth:.19444,height:.69224,italic:0,skew:0},9416:{depth:.15559,height:.69224,italic:0,skew:0},9484:{depth:0,height:.69224,italic:0,skew:0},9488:{depth:0,height:.69224,italic:0,skew:0},9492:{depth:0,height:.37788,italic:0,skew:0},9496:{depth:0,height:.37788,italic:0,skew:0},9585:{depth:.19444,height:.68889,italic:0,skew:0},9586:{depth:.19444,height:.74111,italic:0,skew:0},9632:{depth:0,height:.675,italic:0,skew:0},9633:{depth:0,height:.675,italic:0,skew:0},9650:{depth:0,height:.54986,italic:0,skew:0},9651:{depth:0,height:.54986,italic:0,skew:0},9654:{depth:.03517,height:.54986,italic:0,skew:0},9660:{depth:0,height:.54986,italic:0,skew:0},9661:{depth:0,height:.54986,italic:0,skew:0},9664:{depth:.03517,height:.54986,italic:0,skew:0},9674:{depth:.11111,height:.69224,italic:0,skew:0},9733:{depth:.19444,height:.69224,italic:0,skew:0},10003:{depth:0,height:.69224,italic:0,skew:0},10016:{depth:0,height:.69224,italic:0,skew:0},10731:{depth:.11111,height:.69224,italic:0,skew:0},10846:{depth:.19444,height:.75583,italic:0,skew:0},10877:{depth:.13667,height:.63667,italic:0,skew:0},10878:{depth:.13667,height:.63667,italic:0,skew:0},10885:{depth:.25583,height:.75583,italic:0,skew:0},10886:{depth:.25583,height:.75583,italic:0,skew:0},10887:{depth:.13597,height:.63597,italic:0,skew:0},10888:{depth:.13597,height:.63597,italic:0,skew:0},10889:{depth:.26167,height:.75726,italic:0,skew:0},10890:{depth:.26167,height:.75726,italic:0,skew:0},10891:{depth:.48256,height:.98256,italic:0,skew:0},10892:{depth:.48256,height:.98256,italic:0,skew:0},10901:{depth:.13667,height:.63667,italic:0,skew:0},10902:{depth:.13667,height:.63667,italic:0,skew:0},10933:{depth:.25142,height:.75726,italic:0,skew:0},10934:{depth:.25142,height:.75726,italic:0,skew:0},10935:{depth:.26167,height:.75726,italic:0,skew:0},10936:{depth:.26167,height:.75726,italic:0,skew:0},10937:{depth:.26167,height:.75726,italic:0,skew:0},10938:{depth:.26167,height:.75726,italic:0,skew:0},10949:{depth:.25583,height:.75583,italic:0,skew:0},10950:{depth:.25583,height:.75583,italic:0,skew:0},10955:{depth:.28481,height:.79383,italic:0,skew:0},10956:{depth:.28481,height:.79383,italic:0,skew:0},57350:{depth:.08167,height:.58167,italic:0,skew:0},57351:{depth:.08167,height:.58167,italic:0,skew:0},57352:{depth:.08167,height:.58167,italic:0,skew:0},57353:{depth:0,height:.43056,italic:.04028,skew:0},57356:{depth:.25142,height:.75726,italic:0,skew:0},57357:{depth:.25142,height:.75726,italic:0,skew:0},57358:{depth:.41951,height:.91951,italic:0,
skew:0},57359:{depth:.30274,height:.79383,italic:0,skew:0},57360:{depth:.30274,height:.79383,italic:0,skew:0},57361:{depth:.41951,height:.91951,italic:0,skew:0},57366:{depth:.25142,height:.75726,italic:0,skew:0},57367:{depth:.25142,height:.75726,italic:0,skew:0},57368:{depth:.25142,height:.75726,italic:0,skew:0},57369:{depth:.25142,height:.75726,italic:0,skew:0},57370:{depth:.13597,height:.63597,italic:0,skew:0},57371:{depth:.13597,height:.63597,italic:0,skew:0}},"Caligraphic-Regular":{48:{depth:0,height:.43056,italic:0,skew:0},49:{depth:0,height:.43056,italic:0,skew:0},50:{depth:0,height:.43056,italic:0,skew:0},51:{depth:.19444,height:.43056,italic:0,skew:0},52:{depth:.19444,height:.43056,italic:0,skew:0},53:{depth:.19444,height:.43056,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:.19444,height:.43056,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},57:{depth:.19444,height:.43056,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:.19445},66:{depth:0,height:.68333,italic:.03041,skew:.13889},67:{depth:0,height:.68333,italic:.05834,skew:.13889},68:{depth:0,height:.68333,italic:.02778,skew:.08334},69:{depth:0,height:.68333,italic:.08944,skew:.11111},70:{depth:0,height:.68333,italic:.09931,skew:.11111},71:{depth:.09722,height:.68333,italic:.0593,skew:.11111},72:{depth:0,height:.68333,italic:.00965,skew:.11111},73:{depth:0,height:.68333,italic:.07382,skew:0},74:{depth:.09722,height:.68333,italic:.18472,skew:.16667},75:{depth:0,height:.68333,italic:.01445,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.13889},77:{depth:0,height:.68333,italic:0,skew:.13889},78:{depth:0,height:.68333,italic:.14736,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.11111},80:{depth:0,height:.68333,italic:.08222,skew:.08334},81:{depth:.09722,height:.68333,italic:0,skew:.11111},82:{depth:0,height:.68333,italic:0,skew:.08334},83:{depth:0,height:.68333,italic:.075,skew:.13889},84:{depth:0,height:.68333,italic:.25417,skew:0},85:{depth:0,height:.68333,italic:.09931,skew:.08334},86:{depth:0,height:.68333,italic:.08222,skew:0},87:{depth:0,height:.68333,italic:.08222,skew:.08334},88:{depth:0,height:.68333,italic:.14643,skew:.13889},89:{depth:.09722,height:.68333,italic:.08222,skew:.08334},90:{depth:0,height:.68333,italic:.07944,skew:.13889}},"Fraktur-Regular":{33:{depth:0,height:.69141,italic:0,skew:0},34:{depth:0,height:.69141,italic:0,skew:0},38:{depth:0,height:.69141,italic:0,skew:0},39:{depth:0,height:.69141,italic:0,skew:0},40:{depth:.24982,height:.74947,italic:0,skew:0},41:{depth:.24982,height:.74947,italic:0,skew:0},42:{depth:0,height:.62119,italic:0,skew:0},43:{depth:.08319,height:.58283,italic:0,skew:0},44:{depth:0,height:.10803,italic:0,skew:0},45:{depth:.08319,height:.58283,italic:0,skew:0},46:{depth:0,height:.10803,italic:0,skew:0},47:{depth:.24982,height:.74947,italic:0,skew:0},48:{depth:0,height:.47534,italic:0,skew:0},49:{depth:0,height:.47534,italic:0,skew:0},50:{depth:0,height:.47534,italic:0,skew:0},51:{depth:.18906,height:.47534,italic:0,skew:0},52:{depth:.18906,height:.47534,italic:0,skew:0},53:{depth:.18906,height:.47534,italic:0,skew:0},54:{depth:0,height:.69141,italic:0,skew:0},55:{depth:.18906,height:.47534,italic:0,skew:0},56:{depth:0,height:.69141,italic:0,skew:0},57:{depth:.18906,height:.47534,italic:0,skew:0},58:{depth:0,height:.47534,italic:0,skew:0},59:{depth:.12604,height:.47534,italic:0,skew:0},61:{depth:-.13099,height:.36866,italic:0,skew:0},63:{depth:0,height:.69141,italic:0,skew:0},65:{depth:0,height:.69141,italic:0,skew:0},66:{depth:0,height:.69141,italic:0,skew:0},67:{depth:0,height:.69141,italic:0,skew:0},68:{depth:0,height:.69141,italic:0,skew:0},69:{depth:0,height:.69141,italic:0,skew:0},70:{depth:.12604,height:.69141,italic:0,skew:0},71:{depth:0,height:.69141,italic:0,skew:0},72:{depth:.06302,height:.69141,italic:0,skew:0},73:{depth:0,height:.69141,italic:0,skew:0},74:{depth:.12604,height:.69141,italic:0,skew:0},75:{depth:0,height:.69141,italic:0,skew:0},76:{depth:0,height:.69141,italic:0,skew:0},77:{depth:0,height:.69141,italic:0,skew:0},78:{depth:0,height:.69141,italic:0,skew:0},79:{depth:0,height:.69141,italic:0,skew:0},80:{depth:.18906,height:.69141,italic:0,skew:0},81:{depth:.03781,height:.69141,italic:0,skew:0},82:{depth:0,height:.69141,italic:0,skew:0},83:{depth:0,height:.69141,italic:0,skew:0},84:{depth:0,height:.69141,italic:0,skew:0},85:{depth:0,height:.69141,italic:0,skew:0},86:{depth:0,height:.69141,italic:0,skew:0},87:{depth:0,height:.69141,italic:0,skew:0},88:{depth:0,height:.69141,italic:0,skew:0},89:{depth:.18906,height:.69141,italic:0,skew:0},90:{depth:.12604,height:.69141,italic:0,skew:0},91:{depth:.24982,height:.74947,italic:0,skew:0},93:{depth:.24982,height:.74947,italic:0,skew:0},94:{depth:0,height:.69141,italic:0,skew:0},97:{depth:0,height:.47534,italic:0,skew:0},98:{depth:0,height:.69141,italic:0,skew:0},99:{depth:0,height:.47534,italic:0,skew:0},100:{depth:0,height:.62119,italic:0,skew:0},101:{depth:0,height:.47534,italic:0,skew:0},102:{depth:.18906,height:.69141,italic:0,skew:0},103:{depth:.18906,height:.47534,italic:0,skew:0},104:{depth:.18906,height:.69141,italic:0,skew:0},105:{depth:0,height:.69141,italic:0,skew:0},106:{depth:0,height:.69141,italic:0,skew:0},107:{depth:0,height:.69141,italic:0,skew:0},108:{depth:0,height:.69141,italic:0,skew:0},109:{depth:0,height:.47534,italic:0,skew:0},110:{depth:0,height:.47534,italic:0,skew:0},111:{depth:0,height:.47534,italic:0,skew:0},112:{depth:.18906,height:.52396,italic:0,skew:0},113:{depth:.18906,height:.47534,italic:0,skew:0},114:{depth:0,height:.47534,italic:0,skew:0},115:{depth:0,height:.47534,italic:0,skew:0},116:{depth:0,height:.62119,italic:0,skew:0},117:{depth:0,height:.47534,italic:0,skew:0},118:{depth:0,height:.52396,italic:0,skew:0},119:{depth:0,height:.52396,italic:0,skew:0},120:{depth:.18906,height:.47534,italic:0,skew:0},121:{depth:.18906,height:.47534,italic:0,skew:0},122:{depth:.18906,height:.47534,italic:0,skew:0},8216:{depth:0,height:.69141,italic:0,skew:0},8217:{depth:0,height:.69141,italic:0,skew:0},58112:{depth:0,height:.62119,italic:0,skew:0},58113:{depth:0,height:.62119,italic:0,skew:0},58114:{depth:.18906,height:.69141,italic:0,skew:0},58115:{depth:.18906,height:.69141,italic:0,skew:0},58116:{depth:.18906,height:.47534,italic:0,skew:0},58117:{depth:0,height:.69141,italic:0,skew:0},58118:{depth:0,height:.62119,italic:0,skew:0},58119:{depth:0,height:.47534,italic:0,skew:0}},"Main-Bold":{33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.13333,height:.63333,italic:0,skew:0},44:{depth:.19444,height:.15556,italic:0,skew:0},45:{depth:0,height:.44444,italic:0,skew:0},46:{depth:0,height:.15556,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.64444,italic:0,skew:0},49:{depth:0,height:.64444,italic:0,skew:0},50:{depth:0,height:.64444,italic:0,skew:0},51:{depth:0,height:.64444,italic:0,skew:0},52:{depth:0,height:.64444,italic:0,skew:0},53:{depth:0,height:.64444,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:0,height:.64444,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},57:{depth:0,height:.64444,italic:0,skew:0},58:{depth:0,height:.44444,italic:0,skew:0},59:{depth:.19444,height:.44444,italic:0,skew:0},60:{depth:.08556,height:.58556,italic:0,skew:0},61:{depth:-.10889,height:.39111,italic:0,skew:0},62:{depth:.08556,height:.58556,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.68611,italic:0,skew:0},66:{depth:0,height:.68611,italic:0,skew:0},67:{depth:0,height:.68611,italic:0,skew:0},68:{depth:0,height:.68611,italic:0,skew:0},69:{depth:0,height:.68611,italic:0,skew:0},70:{depth:0,height:.68611,italic:0,skew:0},71:{depth:0,height:.68611,italic:0,skew:0},72:{depth:0,height:.68611,italic:0,skew:0},73:{depth:0,height:.68611,italic:0,skew:0},74:{depth:0,height:.68611,italic:0,skew:0},75:{depth:0,height:.68611,italic:0,skew:0},76:{depth:0,height:.68611,italic:0,skew:0},77:{depth:0,height:.68611,italic:0,skew:0},78:{depth:0,height:.68611,italic:0,skew:0},79:{depth:0,height:.68611,italic:0,skew:0},80:{depth:0,height:.68611,italic:0,skew:0},81:{depth:.19444,height:.68611,italic:0,skew:0},82:{depth:0,height:.68611,italic:0,skew:0},83:{depth:0,height:.68611,italic:0,skew:0},84:{depth:0,height:.68611,italic:0,skew:0},85:{depth:0,height:.68611,italic:0,skew:0},86:{depth:0,height:.68611,italic:.01597,skew:0},87:{depth:0,height:.68611,italic:.01597,skew:0},88:{depth:0,height:.68611,italic:0,skew:0},89:{depth:0,height:.68611,italic:.02875,skew:0},90:{depth:0,height:.68611,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},92:{depth:.25,height:.75,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.31,height:.13444,italic:.03194,skew:0},96:{depth:0,height:.69444,italic:0,skew:0},97:{depth:0,height:.44444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.44444,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},102:{depth:0,height:.69444,italic:.10903,skew:0},103:{depth:.19444,height:.44444,italic:.01597,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.69444,italic:0,skew:0},106:{depth:.19444,height:.69444,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:0,skew:0},114:{depth:0,height:.44444,italic:0,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.63492,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.01597,skew:0},119:{depth:0,height:.44444,italic:.01597,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.01597,skew:0},122:{depth:0,height:.44444,italic:0,skew:0},123:{depth:.25,height:.75,italic:0,skew:0},124:{depth:.25,height:.75,italic:0,skew:0},125:{depth:.25,height:.75,italic:0,skew:0},126:{depth:.35,height:.34444,italic:0,skew:0},168:{depth:0,height:.69444,italic:0,skew:0},172:{depth:0,height:.44444,italic:0,skew:0},175:{depth:0,height:.59611,italic:0,skew:0},176:{depth:0,height:.69444,italic:0,skew:0},177:{depth:.13333,height:.63333,italic:0,skew:0},180:{depth:0,height:.69444,italic:0,skew:0},215:{depth:.13333,height:.63333,italic:0,skew:0},247:{depth:.13333,height:.63333,italic:0,skew:0},305:{depth:0,height:.44444,italic:0,skew:0},567:{depth:.19444,height:.44444,italic:0,skew:0},710:{depth:0,height:.69444,italic:0,skew:0},711:{depth:0,height:.63194,italic:0,skew:0},713:{depth:0,height:.59611,italic:0,skew:0},714:{depth:0,height:.69444,italic:0,skew:0},715:{depth:0,height:.69444,italic:0,skew:0},728:{depth:0,height:.69444,italic:0,skew:0},729:{depth:0,height:.69444,italic:0,skew:0},730:{depth:0,height:.69444,italic:0,skew:0},732:{depth:0,height:.69444,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.69444,italic:0,skew:0},772:{depth:0,height:.59611,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.69444,italic:0,skew:0},776:{depth:0,height:.69444,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},780:{depth:0,height:.63194,italic:0,skew:0},824:{depth:.19444,height:.69444,italic:0,skew:0},915:{depth:0,height:.68611,italic:0,skew:0},916:{depth:0,height:.68611,italic:0,skew:0},920:{depth:0,height:.68611,italic:0,skew:0},923:{depth:0,height:.68611,italic:0,skew:0},926:{depth:0,height:.68611,italic:0,skew:0},928:{depth:0,height:.68611,italic:0,skew:0},931:{depth:0,height:.68611,italic:0,skew:0},933:{depth:0,height:.68611,italic:0,skew:0},934:{depth:0,height:.68611,italic:0,skew:0},936:{depth:0,height:.68611,italic:0,skew:0},937:{depth:0,height:.68611,italic:0,skew:0},8211:{depth:0,height:.44444,italic:.03194,skew:0},8212:{depth:0,height:.44444,italic:.03194,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0},8224:{depth:.19444,height:.69444,italic:0,skew:0},8225:{depth:.19444,height:.69444,italic:0,skew:0},8242:{depth:0,height:.55556,italic:0,skew:0},8407:{depth:0,height:.72444,italic:.15486,skew:0},8463:{depth:0,height:.69444,italic:0,skew:0},8465:{depth:0,height:.69444,italic:0,skew:0},8467:{depth:0,height:.69444,italic:0,skew:0},8472:{depth:.19444,height:.44444,italic:0,skew:0},8476:{depth:0,height:.69444,italic:0,skew:0},8501:{depth:0,height:.69444,italic:0,skew:0},8592:{depth:-.10889,height:.39111,italic:0,skew:0},8593:{depth:.19444,height:.69444,italic:0,skew:0},8594:{depth:-.10889,height:.39111,italic:0,skew:0},8595:{depth:.19444,height:.69444,italic:0,skew:0},8596:{depth:-.10889,height:.39111,italic:0,skew:0},8597:{depth:.25,height:.75,italic:0,skew:0},8598:{depth:.19444,height:.69444,italic:0,skew:0},8599:{depth:.19444,height:.69444,italic:0,skew:0},8600:{depth:.19444,height:.69444,italic:0,skew:0},8601:{depth:.19444,height:.69444,italic:0,skew:0},8636:{depth:-.10889,height:.39111,italic:0,skew:0},8637:{depth:-.10889,height:.39111,italic:0,skew:0},8640:{depth:-.10889,height:.39111,italic:0,skew:0},8641:{depth:-.10889,height:.39111,italic:0,skew:0},8656:{depth:-.10889,height:.39111,italic:0,skew:0},8657:{depth:.19444,height:.69444,italic:0,skew:0},8658:{depth:-.10889,height:.39111,italic:0,skew:0},8659:{depth:.19444,height:.69444,italic:0,skew:0},8660:{depth:-.10889,height:.39111,italic:0,skew:0},8661:{depth:.25,height:.75,italic:0,skew:0},8704:{depth:0,height:.69444,italic:0,skew:0},8706:{depth:0,height:.69444,italic:.06389,skew:0},8707:{depth:0,height:.69444,italic:0,skew:0},8709:{depth:.05556,height:.75,italic:0,skew:0},8711:{depth:0,height:.68611,italic:0,skew:0},8712:{depth:.08556,height:.58556,italic:0,skew:0},8715:{depth:.08556,height:.58556,italic:0,skew:0},8722:{depth:.13333,height:.63333,italic:0,skew:0},8723:{depth:.13333,height:.63333,italic:0,skew:0},8725:{depth:.25,height:.75,italic:0,skew:0},8726:{depth:.25,height:.75,italic:0,skew:0},8727:{depth:-.02778,height:.47222,italic:0,skew:0},8728:{depth:-.02639,height:.47361,italic:0,skew:0},8729:{depth:-.02639,height:.47361,italic:0,skew:0},8730:{depth:.18,height:.82,italic:0,skew:0},8733:{depth:0,height:.44444,italic:0,skew:0},8734:{depth:0,height:.44444,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8739:{depth:.25,height:.75,italic:0,skew:0},8741:{depth:.25,height:.75,italic:0,skew:0},8743:{depth:0,height:.55556,italic:0,skew:0},8744:{depth:0,height:.55556,italic:0,skew:0},8745:{depth:0,height:.55556,italic:0,skew:0},8746:{depth:0,height:.55556,italic:0,skew:0},8747:{depth:.19444,height:.69444,italic:.12778,skew:0},8764:{depth:-.10889,height:.39111,italic:0,skew:0},8768:{depth:.19444,height:.69444,italic:0,skew:0},8771:{depth:.00222,height:.50222,italic:0,skew:0},8776:{depth:.02444,height:.52444,italic:0,skew:0},8781:{depth:.00222,height:.50222,italic:0,skew:0},8801:{depth:.00222,height:.50222,italic:0,skew:0},8804:{depth:.19667,height:.69667,italic:0,skew:0},8805:{depth:.19667,height:.69667,italic:0,skew:0},8810:{depth:.08556,height:.58556,italic:0,skew:0},8811:{depth:.08556,height:.58556,italic:0,skew:0},8826:{depth:.08556,height:.58556,italic:0,skew:0},8827:{depth:.08556,height:.58556,italic:0,skew:0},8834:{depth:.08556,height:.58556,italic:0,skew:0},8835:{depth:.08556,height:.58556,italic:0,skew:0},8838:{depth:.19667,height:.69667,italic:0,skew:0},8839:{depth:.19667,height:.69667,italic:0,skew:0},8846:{depth:0,height:.55556,italic:0,skew:0},8849:{depth:.19667,height:.69667,italic:0,skew:0},8850:{depth:.19667,height:.69667,italic:0,skew:0},8851:{depth:0,height:.55556,italic:0,skew:0},8852:{depth:0,height:.55556,italic:0,skew:0},8853:{depth:.13333,height:.63333,italic:0,skew:0},8854:{depth:.13333,height:.63333,italic:0,skew:0},8855:{depth:.13333,height:.63333,italic:0,skew:0},8856:{depth:.13333,height:.63333,italic:0,skew:0},8857:{depth:.13333,height:.63333,italic:0,skew:0},8866:{depth:0,height:.69444,italic:0,skew:0},8867:{depth:0,height:.69444,italic:0,skew:0},8868:{depth:0,height:.69444,italic:0,skew:0},8869:{depth:0,height:.69444,italic:0,skew:0},8900:{depth:-.02639,height:.47361,italic:0,skew:0},8901:{depth:-.02639,height:.47361,italic:0,skew:0},8902:{depth:-.02778,height:.47222,italic:0,skew:0},8968:{depth:.25,height:.75,italic:0,skew:0},8969:{depth:.25,height:.75,italic:0,skew:0},8970:{depth:.25,height:.75,italic:0,skew:0},8971:{depth:.25,height:.75,italic:0,skew:0},8994:{depth:-.13889,height:.36111,italic:0,skew:0},8995:{depth:-.13889,height:.36111,italic:0,skew:0},9651:{depth:.19444,height:.69444,italic:0,skew:0},9657:{depth:-.02778,height:.47222,italic:0,skew:0},9661:{depth:.19444,height:.69444,italic:0,skew:0},9667:{depth:-.02778,height:.47222,italic:0,skew:0},9711:{depth:.19444,height:.69444,italic:0,skew:0},9824:{depth:.12963,height:.69444,italic:0,skew:0},9825:{depth:.12963,height:.69444,italic:0,skew:0},9826:{depth:.12963,height:.69444,italic:0,skew:0},9827:{depth:.12963,height:.69444,italic:0,skew:0},9837:{depth:0,height:.75,italic:0,skew:0},9838:{depth:.19444,height:.69444,italic:0,skew:0},9839:{depth:.19444,height:.69444,italic:0,skew:0},10216:{depth:.25,height:.75,italic:0,skew:0},10217:{depth:.25,height:.75,italic:0,skew:0},10815:{depth:0,height:.68611,italic:0,skew:0},10927:{depth:.19667,height:.69667,italic:0,skew:0},10928:{depth:.19667,height:.69667,italic:0,skew:0}},"Main-Italic":{33:{depth:0,height:.69444,italic:.12417,skew:0},34:{depth:0,height:.69444,italic:.06961,skew:0},35:{depth:.19444,height:.69444,italic:.06616,skew:0},37:{depth:.05556,height:.75,italic:.13639,skew:0},38:{depth:0,height:.69444,italic:.09694,skew:0},39:{depth:0,height:.69444,italic:.12417,skew:0},40:{depth:.25,height:.75,italic:.16194,skew:0},41:{depth:.25,height:.75,italic:.03694,skew:0},42:{depth:0,height:.75,italic:.14917,skew:0},43:{depth:.05667,height:.56167,italic:.03694,skew:0},44:{depth:.19444,height:.10556,italic:0,skew:0},45:{depth:0,height:.43056,italic:.02826,skew:0},46:{depth:0,height:.10556,italic:0,skew:0},47:{depth:.25,height:.75,italic:.16194,skew:0},48:{depth:0,height:.64444,italic:.13556,skew:0},49:{depth:0,height:.64444,italic:.13556,skew:0},50:{depth:0,height:.64444,italic:.13556,skew:0},51:{depth:0,height:.64444,italic:.13556,skew:0},52:{depth:.19444,height:.64444,italic:.13556,skew:0},53:{depth:0,height:.64444,italic:.13556,skew:0},54:{depth:0,height:.64444,italic:.13556,skew:0},55:{depth:.19444,height:.64444,italic:.13556,skew:0},56:{depth:0,height:.64444,italic:.13556,skew:0},57:{depth:0,height:.64444,italic:.13556,skew:0},58:{depth:0,height:.43056,italic:.0582,skew:0},59:{depth:.19444,height:.43056,italic:.0582,skew:0},61:{depth:-.13313,height:.36687,italic:.06616,skew:0},63:{depth:0,height:.69444,italic:.1225,skew:0},64:{depth:0,height:.69444,italic:.09597,skew:0},65:{depth:0,height:.68333,italic:0,skew:0},66:{depth:0,height:.68333,italic:.10257,skew:0},67:{depth:0,height:.68333,italic:.14528,skew:0},68:{depth:0,height:.68333,italic:.09403,skew:0},69:{depth:0,height:.68333,italic:.12028,skew:0},70:{depth:0,height:.68333,italic:.13305,skew:0},71:{depth:0,height:.68333,italic:.08722,skew:0},72:{depth:0,height:.68333,italic:.16389,skew:0},73:{depth:0,height:.68333,italic:.15806,skew:0},74:{depth:0,height:.68333,italic:.14028,skew:0},75:{depth:0,height:.68333,italic:.14528,skew:0},76:{depth:0,height:.68333,italic:0,skew:0},77:{depth:0,height:.68333,italic:.16389,skew:0},78:{depth:0,height:.68333,italic:.16389,skew:0},79:{depth:0,height:.68333,italic:.09403,skew:0},80:{depth:0,height:.68333,italic:.10257,skew:0},81:{depth:.19444,height:.68333,italic:.09403,skew:0},82:{depth:0,height:.68333,italic:.03868,skew:0},83:{depth:0,height:.68333,italic:.11972,skew:0},84:{depth:0,height:.68333,italic:.13305,skew:0},85:{depth:0,height:.68333,italic:.16389,skew:0},86:{depth:0,height:.68333,italic:.18361,skew:0},87:{depth:0,height:.68333,italic:.18361,skew:0},88:{depth:0,height:.68333,italic:.15806,skew:0},89:{depth:0,height:.68333,italic:.19383,skew:0},90:{depth:0,height:.68333,italic:.14528,skew:0},91:{depth:.25,height:.75,italic:.1875,skew:0},93:{depth:.25,height:.75,italic:.10528,skew:0},94:{depth:0,height:.69444,italic:.06646,skew:0},95:{depth:.31,height:.12056,italic:.09208,skew:0},97:{depth:0,height:.43056,italic:.07671,skew:0},98:{depth:0,height:.69444,italic:.06312,skew:0},99:{depth:0,height:.43056,italic:.05653,skew:0},100:{depth:0,height:.69444,italic:.10333,skew:0},101:{depth:0,height:.43056,italic:.07514,skew:0},102:{depth:.19444,height:.69444,italic:.21194,skew:0},103:{depth:.19444,height:.43056,italic:.08847,skew:0},104:{depth:0,height:.69444,italic:.07671,skew:0},105:{depth:0,height:.65536,italic:.1019,skew:0},106:{depth:.19444,height:.65536,italic:.14467,skew:0},107:{depth:0,height:.69444,italic:.10764,skew:0},108:{depth:0,height:.69444,italic:.10333,skew:0},109:{depth:0,height:.43056,italic:.07671,skew:0},110:{depth:0,height:.43056,italic:.07671,skew:0},111:{depth:0,height:.43056,italic:.06312,skew:0},112:{depth:.19444,height:.43056,italic:.06312,skew:0},113:{depth:.19444,height:.43056,italic:.08847,skew:0},114:{depth:0,height:.43056,italic:.10764,skew:0},115:{depth:0,height:.43056,italic:.08208,skew:0},116:{depth:0,height:.61508,italic:.09486,skew:0},117:{depth:0,height:.43056,italic:.07671,skew:0},118:{depth:0,height:.43056,italic:.10764,skew:0},119:{depth:0,height:.43056,italic:.10764,skew:0},120:{depth:0,height:.43056,italic:.12042,skew:0},121:{depth:.19444,height:.43056,italic:.08847,skew:0},122:{depth:0,height:.43056,italic:.12292,skew:0},126:{depth:.35,height:.31786,italic:.11585,skew:0},163:{depth:0,height:.69444,italic:0,skew:0},305:{depth:0,height:.43056,italic:0,skew:.02778},567:{depth:.19444,height:.43056,italic:0,skew:.08334},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:.09694,skew:0},770:{depth:0,height:.69444,italic:.06646,skew:0},771:{depth:0,height:.66786,italic:.11585,skew:0},772:{depth:0,height:.56167,italic:.10333,skew:0},774:{depth:0,height:.69444,italic:.10806,skew:0},775:{depth:0,height:.66786,italic:.11752,skew:0},776:{depth:0,height:.66786,italic:.10474,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:.1225,skew:0},780:{depth:0,height:.62847,italic:.08295,skew:0},915:{depth:0,height:.68333,italic:.13305,skew:0},916:{depth:0,height:.68333,italic:0,skew:0},920:{depth:0,height:.68333,italic:.09403,skew:0},923:{depth:0,height:.68333,italic:0,skew:0},926:{depth:0,height:.68333,italic:.15294,skew:0},928:{depth:0,height:.68333,italic:.16389,skew:0},931:{depth:0,height:.68333,italic:.12028,skew:0},933:{depth:0,height:.68333,italic:.11111,skew:0},934:{depth:0,height:.68333,italic:.05986,skew:0},936:{depth:0,height:.68333,italic:.11111,skew:0},937:{depth:0,height:.68333,italic:.10257,skew:0},8211:{depth:0,height:.43056,italic:.09208,skew:0},8212:{depth:0,height:.43056,italic:.09208,skew:0},8216:{depth:0,height:.69444,italic:.12417,skew:0},8217:{depth:0,height:.69444,italic:.12417,skew:0},8220:{depth:0,height:.69444,italic:.1685,skew:0},8221:{depth:0,height:.69444,italic:.06961,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0}},"Main-Regular":{32:{depth:0,height:0,italic:0,skew:0},33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.08333,height:.58333,italic:0,skew:0},44:{depth:.19444,height:.10556,italic:0,skew:0},45:{depth:0,height:.43056,italic:0,skew:0},46:{depth:0,height:.10556,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.64444,italic:0,skew:0},49:{depth:0,height:.64444,italic:0,skew:0},50:{depth:0,height:.64444,italic:0,skew:0},51:{depth:0,height:.64444,italic:0,skew:0},52:{depth:0,height:.64444,italic:0,skew:0},53:{depth:0,height:.64444,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:0,height:.64444,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},57:{depth:0,height:.64444,italic:0,skew:0},58:{depth:0,height:.43056,italic:0,skew:0},59:{depth:.19444,height:.43056,italic:0,skew:0},60:{depth:.0391,height:.5391,italic:0,skew:0},61:{depth:-.13313,height:.36687,italic:0,skew:0},62:{depth:.0391,height:.5391,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:0},66:{depth:0,height:.68333,italic:0,skew:0},67:{depth:0,height:.68333,italic:0,skew:0},68:{depth:0,height:.68333,italic:0,skew:0},69:{depth:0,height:.68333,italic:0,skew:0},70:{depth:0,height:.68333,italic:0,skew:0},71:{depth:0,height:.68333,italic:0,skew:0},72:{depth:0,height:.68333,italic:0,skew:0},73:{depth:0,height:.68333,italic:0,skew:0},74:{depth:0,height:.68333,italic:0,skew:0},75:{depth:0,height:.68333,italic:0,skew:0},76:{depth:0,height:.68333,italic:0,skew:0},77:{depth:0,height:.68333,italic:0,skew:0},78:{depth:0,height:.68333,italic:0,skew:0},79:{depth:0,height:.68333,italic:0,skew:0},80:{depth:0,height:.68333,italic:0,skew:0},81:{depth:.19444,height:.68333,italic:0,skew:0},82:{depth:0,height:.68333,italic:0,skew:0},83:{depth:0,height:.68333,italic:0,skew:0},84:{depth:0,height:.68333,italic:0,skew:0},85:{depth:0,height:.68333,italic:0,skew:0},86:{depth:0,height:.68333,italic:.01389,skew:0},87:{depth:0,height:.68333,italic:.01389,skew:0},88:{depth:0,height:.68333,italic:0,skew:0},89:{depth:0,height:.68333,italic:.025,skew:0},90:{depth:0,height:.68333,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},92:{depth:.25,height:.75,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.31,height:.12056,italic:.02778,skew:0},96:{depth:0,height:.69444,italic:0,skew:0},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.43056,italic:0,skew:0},102:{depth:0,height:.69444,italic:.07778,skew:0},103:{depth:.19444,height:.43056,italic:.01389,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.66786,italic:0,skew:0},106:{depth:.19444,height:.66786,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:0},112:{depth:.19444,height:.43056,italic:0,skew:0},113:{depth:.19444,height:.43056,italic:0,skew:0},114:{depth:0,height:.43056,italic:0,skew:0},115:{depth:0,height:.43056,italic:0,skew:0},116:{depth:0,height:.61508,italic:0,skew:0},117:{depth:0,height:.43056,italic:0,skew:0},118:{depth:0,height:.43056,italic:.01389,skew:0},119:{depth:0,height:.43056,italic:.01389,skew:0},120:{depth:0,height:.43056,italic:0,skew:0},121:{depth:.19444,height:.43056,italic:.01389,skew:0},122:{depth:0,height:.43056,italic:0,skew:0},123:{depth:.25,height:.75,italic:0,skew:0},124:{depth:.25,height:.75,italic:0,skew:0},125:{depth:.25,height:.75,italic:0,skew:0},126:{depth:.35,height:.31786,italic:0,skew:0},160:{depth:0,height:0,italic:0,skew:0},168:{depth:0,height:.66786,italic:0,skew:0},172:{depth:0,height:.43056,italic:0,skew:0},175:{depth:0,height:.56778,italic:0,skew:0},176:{depth:0,height:.69444,italic:0,skew:0},177:{depth:.08333,height:.58333,italic:0,skew:0},180:{depth:0,height:.69444,italic:0,skew:0},215:{depth:.08333,height:.58333,italic:0,skew:0},247:{depth:.08333,height:.58333,italic:0,skew:0},305:{depth:0,height:.43056,italic:0,skew:0},567:{depth:.19444,height:.43056,italic:0,skew:0},710:{depth:0,height:.69444,italic:0,skew:0},711:{depth:0,height:.62847,italic:0,skew:0},713:{depth:0,height:.56778,italic:0,skew:0},714:{depth:0,height:.69444,italic:0,skew:0},715:{depth:0,height:.69444,italic:0,skew:0},728:{depth:0,height:.69444,italic:0,skew:0},729:{depth:0,height:.66786,italic:0,skew:0},730:{depth:0,height:.69444,italic:0,skew:0},732:{depth:0,height:.66786,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.66786,italic:0,skew:0},772:{depth:0,height:.56778,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.66786,italic:0,skew:0},776:{depth:0,height:.66786,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},780:{depth:0,height:.62847,italic:0,skew:0},824:{depth:.19444,height:.69444,italic:0,skew:0},915:{depth:0,height:.68333,italic:0,skew:0},916:{depth:0,height:.68333,italic:0,skew:0},920:{depth:0,height:.68333,italic:0,skew:0},923:{depth:0,height:.68333,italic:0,skew:0},926:{depth:0,height:.68333,italic:0,skew:0},928:{depth:0,height:.68333,italic:0,skew:0},931:{depth:0,height:.68333,italic:0,skew:0},933:{depth:0,height:.68333,italic:0,skew:0},934:{depth:0,height:.68333,italic:0,skew:0},936:{depth:0,height:.68333,italic:0,skew:0},937:{depth:0,height:.68333,italic:0,skew:0},8211:{depth:0,height:.43056,italic:.02778,skew:0},8212:{depth:0,height:.43056,italic:.02778,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0},8224:{depth:.19444,height:.69444,italic:0,skew:0},8225:{depth:.19444,height:.69444,italic:0,skew:0},8230:{depth:0,height:.12,italic:0,skew:0},8242:{depth:0,height:.55556,italic:0,skew:0},8407:{depth:0,height:.71444,italic:.15382,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0},8465:{depth:0,height:.69444,italic:0,skew:0},8467:{depth:0,height:.69444,italic:0,skew:.11111},8472:{depth:.19444,height:.43056,italic:0,skew:.11111},8476:{depth:0,height:.69444,italic:0,skew:0},8501:{depth:0,height:.69444,italic:0,skew:0},8592:{depth:-.13313,height:.36687,italic:0,skew:0},8593:{depth:.19444,height:.69444,italic:0,skew:0},8594:{depth:-.13313,height:.36687,italic:0,skew:0},8595:{depth:.19444,height:.69444,italic:0,skew:0},8596:{depth:-.13313,height:.36687,italic:0,skew:0},8597:{depth:.25,height:.75,italic:0,skew:0},8598:{depth:.19444,height:.69444,italic:0,skew:0},8599:{depth:.19444,height:.69444,italic:0,skew:0},8600:{depth:.19444,height:.69444,italic:0,skew:0},8601:{depth:.19444,height:.69444,italic:0,skew:0},8614:{depth:.011,height:.511,italic:0,skew:0},8617:{depth:.011,height:.511,italic:0,skew:0},8618:{depth:.011,height:.511,italic:0,skew:0},8636:{depth:-.13313,height:.36687,italic:0,skew:0},8637:{depth:-.13313,height:.36687,italic:0,skew:0},8640:{depth:-.13313,height:.36687,italic:0,skew:0},8641:{depth:-.13313,height:.36687,italic:0,skew:0},8652:{depth:.011,height:.671,italic:0,skew:0},8656:{depth:-.13313,height:.36687,italic:0,skew:0},8657:{depth:.19444,height:.69444,italic:0,skew:0},8658:{depth:-.13313,height:.36687,italic:0,skew:0},8659:{depth:.19444,height:.69444,italic:0,skew:0},8660:{depth:-.13313,height:.36687,italic:0,skew:0},8661:{
depth:.25,height:.75,italic:0,skew:0},8704:{depth:0,height:.69444,italic:0,skew:0},8706:{depth:0,height:.69444,italic:.05556,skew:.08334},8707:{depth:0,height:.69444,italic:0,skew:0},8709:{depth:.05556,height:.75,italic:0,skew:0},8711:{depth:0,height:.68333,italic:0,skew:0},8712:{depth:.0391,height:.5391,italic:0,skew:0},8715:{depth:.0391,height:.5391,italic:0,skew:0},8722:{depth:.08333,height:.58333,italic:0,skew:0},8723:{depth:.08333,height:.58333,italic:0,skew:0},8725:{depth:.25,height:.75,italic:0,skew:0},8726:{depth:.25,height:.75,italic:0,skew:0},8727:{depth:-.03472,height:.46528,italic:0,skew:0},8728:{depth:-.05555,height:.44445,italic:0,skew:0},8729:{depth:-.05555,height:.44445,italic:0,skew:0},8730:{depth:.2,height:.8,italic:0,skew:0},8733:{depth:0,height:.43056,italic:0,skew:0},8734:{depth:0,height:.43056,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8739:{depth:.25,height:.75,italic:0,skew:0},8741:{depth:.25,height:.75,italic:0,skew:0},8743:{depth:0,height:.55556,italic:0,skew:0},8744:{depth:0,height:.55556,italic:0,skew:0},8745:{depth:0,height:.55556,italic:0,skew:0},8746:{depth:0,height:.55556,italic:0,skew:0},8747:{depth:.19444,height:.69444,italic:.11111,skew:0},8764:{depth:-.13313,height:.36687,italic:0,skew:0},8768:{depth:.19444,height:.69444,italic:0,skew:0},8771:{depth:-.03625,height:.46375,italic:0,skew:0},8773:{depth:-.022,height:.589,italic:0,skew:0},8776:{depth:-.01688,height:.48312,italic:0,skew:0},8781:{depth:-.03625,height:.46375,italic:0,skew:0},8784:{depth:-.133,height:.67,italic:0,skew:0},8800:{depth:.215,height:.716,italic:0,skew:0},8801:{depth:-.03625,height:.46375,italic:0,skew:0},8804:{depth:.13597,height:.63597,italic:0,skew:0},8805:{depth:.13597,height:.63597,italic:0,skew:0},8810:{depth:.0391,height:.5391,italic:0,skew:0},8811:{depth:.0391,height:.5391,italic:0,skew:0},8826:{depth:.0391,height:.5391,italic:0,skew:0},8827:{depth:.0391,height:.5391,italic:0,skew:0},8834:{depth:.0391,height:.5391,italic:0,skew:0},8835:{depth:.0391,height:.5391,italic:0,skew:0},8838:{depth:.13597,height:.63597,italic:0,skew:0},8839:{depth:.13597,height:.63597,italic:0,skew:0},8846:{depth:0,height:.55556,italic:0,skew:0},8849:{depth:.13597,height:.63597,italic:0,skew:0},8850:{depth:.13597,height:.63597,italic:0,skew:0},8851:{depth:0,height:.55556,italic:0,skew:0},8852:{depth:0,height:.55556,italic:0,skew:0},8853:{depth:.08333,height:.58333,italic:0,skew:0},8854:{depth:.08333,height:.58333,italic:0,skew:0},8855:{depth:.08333,height:.58333,italic:0,skew:0},8856:{depth:.08333,height:.58333,italic:0,skew:0},8857:{depth:.08333,height:.58333,italic:0,skew:0},8866:{depth:0,height:.69444,italic:0,skew:0},8867:{depth:0,height:.69444,italic:0,skew:0},8868:{depth:0,height:.69444,italic:0,skew:0},8869:{depth:0,height:.69444,italic:0,skew:0},8872:{depth:.249,height:.75,italic:0,skew:0},8900:{depth:-.05555,height:.44445,italic:0,skew:0},8901:{depth:-.05555,height:.44445,italic:0,skew:0},8902:{depth:-.03472,height:.46528,italic:0,skew:0},8904:{depth:.005,height:.505,italic:0,skew:0},8942:{depth:.03,height:.9,italic:0,skew:0},8943:{depth:-.19,height:.31,italic:0,skew:0},8945:{depth:-.1,height:.82,italic:0,skew:0},8968:{depth:.25,height:.75,italic:0,skew:0},8969:{depth:.25,height:.75,italic:0,skew:0},8970:{depth:.25,height:.75,italic:0,skew:0},8971:{depth:.25,height:.75,italic:0,skew:0},8994:{depth:-.14236,height:.35764,italic:0,skew:0},8995:{depth:-.14236,height:.35764,italic:0,skew:0},9136:{depth:.244,height:.744,italic:0,skew:0},9137:{depth:.244,height:.744,italic:0,skew:0},9651:{depth:.19444,height:.69444,italic:0,skew:0},9657:{depth:-.03472,height:.46528,italic:0,skew:0},9661:{depth:.19444,height:.69444,italic:0,skew:0},9667:{depth:-.03472,height:.46528,italic:0,skew:0},9711:{depth:.19444,height:.69444,italic:0,skew:0},9824:{depth:.12963,height:.69444,italic:0,skew:0},9825:{depth:.12963,height:.69444,italic:0,skew:0},9826:{depth:.12963,height:.69444,italic:0,skew:0},9827:{depth:.12963,height:.69444,italic:0,skew:0},9837:{depth:0,height:.75,italic:0,skew:0},9838:{depth:.19444,height:.69444,italic:0,skew:0},9839:{depth:.19444,height:.69444,italic:0,skew:0},10216:{depth:.25,height:.75,italic:0,skew:0},10217:{depth:.25,height:.75,italic:0,skew:0},10222:{depth:.244,height:.744,italic:0,skew:0},10223:{depth:.244,height:.744,italic:0,skew:0},10229:{depth:.011,height:.511,italic:0,skew:0},10230:{depth:.011,height:.511,italic:0,skew:0},10231:{depth:.011,height:.511,italic:0,skew:0},10232:{depth:.024,height:.525,italic:0,skew:0},10233:{depth:.024,height:.525,italic:0,skew:0},10234:{depth:.024,height:.525,italic:0,skew:0},10236:{depth:.011,height:.511,italic:0,skew:0},10815:{depth:0,height:.68333,italic:0,skew:0},10927:{depth:.13597,height:.63597,italic:0,skew:0},10928:{depth:.13597,height:.63597,italic:0,skew:0}},"Math-BoldItalic":{47:{depth:.19444,height:.69444,italic:0,skew:0},65:{depth:0,height:.68611,italic:0,skew:0},66:{depth:0,height:.68611,italic:.04835,skew:0},67:{depth:0,height:.68611,italic:.06979,skew:0},68:{depth:0,height:.68611,italic:.03194,skew:0},69:{depth:0,height:.68611,italic:.05451,skew:0},70:{depth:0,height:.68611,italic:.15972,skew:0},71:{depth:0,height:.68611,italic:0,skew:0},72:{depth:0,height:.68611,italic:.08229,skew:0},73:{depth:0,height:.68611,italic:.07778,skew:0},74:{depth:0,height:.68611,italic:.10069,skew:0},75:{depth:0,height:.68611,italic:.06979,skew:0},76:{depth:0,height:.68611,italic:0,skew:0},77:{depth:0,height:.68611,italic:.11424,skew:0},78:{depth:0,height:.68611,italic:.11424,skew:0},79:{depth:0,height:.68611,italic:.03194,skew:0},80:{depth:0,height:.68611,italic:.15972,skew:0},81:{depth:.19444,height:.68611,italic:0,skew:0},82:{depth:0,height:.68611,italic:.00421,skew:0},83:{depth:0,height:.68611,italic:.05382,skew:0},84:{depth:0,height:.68611,italic:.15972,skew:0},85:{depth:0,height:.68611,italic:.11424,skew:0},86:{depth:0,height:.68611,italic:.25555,skew:0},87:{depth:0,height:.68611,italic:.15972,skew:0},88:{depth:0,height:.68611,italic:.07778,skew:0},89:{depth:0,height:.68611,italic:.25555,skew:0},90:{depth:0,height:.68611,italic:.06979,skew:0},97:{depth:0,height:.44444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.44444,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},102:{depth:.19444,height:.69444,italic:.11042,skew:0},103:{depth:.19444,height:.44444,italic:.03704,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.69326,italic:0,skew:0},106:{depth:.19444,height:.69326,italic:.0622,skew:0},107:{depth:0,height:.69444,italic:.01852,skew:0},108:{depth:0,height:.69444,italic:.0088,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:.03704,skew:0},114:{depth:0,height:.44444,italic:.03194,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.63492,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.03704,skew:0},119:{depth:0,height:.44444,italic:.02778,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.03704,skew:0},122:{depth:0,height:.44444,italic:.04213,skew:0},915:{depth:0,height:.68611,italic:.15972,skew:0},916:{depth:0,height:.68611,italic:0,skew:0},920:{depth:0,height:.68611,italic:.03194,skew:0},923:{depth:0,height:.68611,italic:0,skew:0},926:{depth:0,height:.68611,italic:.07458,skew:0},928:{depth:0,height:.68611,italic:.08229,skew:0},931:{depth:0,height:.68611,italic:.05451,skew:0},933:{depth:0,height:.68611,italic:.15972,skew:0},934:{depth:0,height:.68611,italic:0,skew:0},936:{depth:0,height:.68611,italic:.11653,skew:0},937:{depth:0,height:.68611,italic:.04835,skew:0},945:{depth:0,height:.44444,italic:0,skew:0},946:{depth:.19444,height:.69444,italic:.03403,skew:0},947:{depth:.19444,height:.44444,italic:.06389,skew:0},948:{depth:0,height:.69444,italic:.03819,skew:0},949:{depth:0,height:.44444,italic:0,skew:0},950:{depth:.19444,height:.69444,italic:.06215,skew:0},951:{depth:.19444,height:.44444,italic:.03704,skew:0},952:{depth:0,height:.69444,italic:.03194,skew:0},953:{depth:0,height:.44444,italic:0,skew:0},954:{depth:0,height:.44444,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.44444,italic:0,skew:0},957:{depth:0,height:.44444,italic:.06898,skew:0},958:{depth:.19444,height:.69444,italic:.03021,skew:0},959:{depth:0,height:.44444,italic:0,skew:0},960:{depth:0,height:.44444,italic:.03704,skew:0},961:{depth:.19444,height:.44444,italic:0,skew:0},962:{depth:.09722,height:.44444,italic:.07917,skew:0},963:{depth:0,height:.44444,italic:.03704,skew:0},964:{depth:0,height:.44444,italic:.13472,skew:0},965:{depth:0,height:.44444,italic:.03704,skew:0},966:{depth:.19444,height:.44444,italic:0,skew:0},967:{depth:.19444,height:.44444,italic:0,skew:0},968:{depth:.19444,height:.69444,italic:.03704,skew:0},969:{depth:0,height:.44444,italic:.03704,skew:0},977:{depth:0,height:.69444,italic:0,skew:0},981:{depth:.19444,height:.69444,italic:0,skew:0},982:{depth:0,height:.44444,italic:.03194,skew:0},1009:{depth:.19444,height:.44444,italic:0,skew:0},1013:{depth:0,height:.44444,italic:0,skew:0}},"Math-Italic":{47:{depth:.19444,height:.69444,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:.13889},66:{depth:0,height:.68333,italic:.05017,skew:.08334},67:{depth:0,height:.68333,italic:.07153,skew:.08334},68:{depth:0,height:.68333,italic:.02778,skew:.05556},69:{depth:0,height:.68333,italic:.05764,skew:.08334},70:{depth:0,height:.68333,italic:.13889,skew:.08334},71:{depth:0,height:.68333,italic:0,skew:.08334},72:{depth:0,height:.68333,italic:.08125,skew:.05556},73:{depth:0,height:.68333,italic:.07847,skew:.11111},74:{depth:0,height:.68333,italic:.09618,skew:.16667},75:{depth:0,height:.68333,italic:.07153,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.02778},77:{depth:0,height:.68333,italic:.10903,skew:.08334},78:{depth:0,height:.68333,italic:.10903,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.08334},80:{depth:0,height:.68333,italic:.13889,skew:.08334},81:{depth:.19444,height:.68333,italic:0,skew:.08334},82:{depth:0,height:.68333,italic:.00773,skew:.08334},83:{depth:0,height:.68333,italic:.05764,skew:.08334},84:{depth:0,height:.68333,italic:.13889,skew:.08334},85:{depth:0,height:.68333,italic:.10903,skew:.02778},86:{depth:0,height:.68333,italic:.22222,skew:0},87:{depth:0,height:.68333,italic:.13889,skew:0},88:{depth:0,height:.68333,italic:.07847,skew:.08334},89:{depth:0,height:.68333,italic:.22222,skew:0},90:{depth:0,height:.68333,italic:.07153,skew:.08334},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:.05556},100:{depth:0,height:.69444,italic:0,skew:.16667},101:{depth:0,height:.43056,italic:0,skew:.05556},102:{depth:.19444,height:.69444,italic:.10764,skew:.16667},103:{depth:.19444,height:.43056,italic:.03588,skew:.02778},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.65952,italic:0,skew:0},106:{depth:.19444,height:.65952,italic:.05724,skew:0},107:{depth:0,height:.69444,italic:.03148,skew:0},108:{depth:0,height:.69444,italic:.01968,skew:.08334},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:.05556},112:{depth:.19444,height:.43056,italic:0,skew:.08334},113:{depth:.19444,height:.43056,italic:.03588,skew:.08334},114:{depth:0,height:.43056,italic:.02778,skew:.05556},115:{depth:0,height:.43056,italic:0,skew:.05556},116:{depth:0,height:.61508,italic:0,skew:.08334},117:{depth:0,height:.43056,italic:0,skew:.02778},118:{depth:0,height:.43056,italic:.03588,skew:.02778},119:{depth:0,height:.43056,italic:.02691,skew:.08334},120:{depth:0,height:.43056,italic:0,skew:.02778},121:{depth:.19444,height:.43056,italic:.03588,skew:.05556},122:{depth:0,height:.43056,italic:.04398,skew:.05556},915:{depth:0,height:.68333,italic:.13889,skew:.08334},916:{depth:0,height:.68333,italic:0,skew:.16667},920:{depth:0,height:.68333,italic:.02778,skew:.08334},923:{depth:0,height:.68333,italic:0,skew:.16667},926:{depth:0,height:.68333,italic:.07569,skew:.08334},928:{depth:0,height:.68333,italic:.08125,skew:.05556},931:{depth:0,height:.68333,italic:.05764,skew:.08334},933:{depth:0,height:.68333,italic:.13889,skew:.05556},934:{depth:0,height:.68333,italic:0,skew:.08334},936:{depth:0,height:.68333,italic:.11,skew:.05556},937:{depth:0,height:.68333,italic:.05017,skew:.08334},945:{depth:0,height:.43056,italic:.0037,skew:.02778},946:{depth:.19444,height:.69444,italic:.05278,skew:.08334},947:{depth:.19444,height:.43056,italic:.05556,skew:0},948:{depth:0,height:.69444,italic:.03785,skew:.05556},949:{depth:0,height:.43056,italic:0,skew:.08334},950:{depth:.19444,height:.69444,italic:.07378,skew:.08334},951:{depth:.19444,height:.43056,italic:.03588,skew:.05556},952:{depth:0,height:.69444,italic:.02778,skew:.08334},953:{depth:0,height:.43056,italic:0,skew:.05556},954:{depth:0,height:.43056,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.43056,italic:0,skew:.02778},957:{depth:0,height:.43056,italic:.06366,skew:.02778},958:{depth:.19444,height:.69444,italic:.04601,skew:.11111},959:{depth:0,height:.43056,italic:0,skew:.05556},960:{depth:0,height:.43056,italic:.03588,skew:0},961:{depth:.19444,height:.43056,italic:0,skew:.08334},962:{depth:.09722,height:.43056,italic:.07986,skew:.08334},963:{depth:0,height:.43056,italic:.03588,skew:0},964:{depth:0,height:.43056,italic:.1132,skew:.02778},965:{depth:0,height:.43056,italic:.03588,skew:.02778},966:{depth:.19444,height:.43056,italic:0,skew:.08334},967:{depth:.19444,height:.43056,italic:0,skew:.05556},968:{depth:.19444,height:.69444,italic:.03588,skew:.11111},969:{depth:0,height:.43056,italic:.03588,skew:0},977:{depth:0,height:.69444,italic:0,skew:.08334},981:{depth:.19444,height:.69444,italic:0,skew:.08334},982:{depth:0,height:.43056,italic:.02778,skew:0},1009:{depth:.19444,height:.43056,italic:0,skew:.08334},1013:{depth:0,height:.43056,italic:0,skew:.05556}},"Math-Regular":{65:{depth:0,height:.68333,italic:0,skew:.13889},66:{depth:0,height:.68333,italic:.05017,skew:.08334},67:{depth:0,height:.68333,italic:.07153,skew:.08334},68:{depth:0,height:.68333,italic:.02778,skew:.05556},69:{depth:0,height:.68333,italic:.05764,skew:.08334},70:{depth:0,height:.68333,italic:.13889,skew:.08334},71:{depth:0,height:.68333,italic:0,skew:.08334},72:{depth:0,height:.68333,italic:.08125,skew:.05556},73:{depth:0,height:.68333,italic:.07847,skew:.11111},74:{depth:0,height:.68333,italic:.09618,skew:.16667},75:{depth:0,height:.68333,italic:.07153,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.02778},77:{depth:0,height:.68333,italic:.10903,skew:.08334},78:{depth:0,height:.68333,italic:.10903,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.08334},80:{depth:0,height:.68333,italic:.13889,skew:.08334},81:{depth:.19444,height:.68333,italic:0,skew:.08334},82:{depth:0,height:.68333,italic:.00773,skew:.08334},83:{depth:0,height:.68333,italic:.05764,skew:.08334},84:{depth:0,height:.68333,italic:.13889,skew:.08334},85:{depth:0,height:.68333,italic:.10903,skew:.02778},86:{depth:0,height:.68333,italic:.22222,skew:0},87:{depth:0,height:.68333,italic:.13889,skew:0},88:{depth:0,height:.68333,italic:.07847,skew:.08334},89:{depth:0,height:.68333,italic:.22222,skew:0},90:{depth:0,height:.68333,italic:.07153,skew:.08334},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:.05556},100:{depth:0,height:.69444,italic:0,skew:.16667},101:{depth:0,height:.43056,italic:0,skew:.05556},102:{depth:.19444,height:.69444,italic:.10764,skew:.16667},103:{depth:.19444,height:.43056,italic:.03588,skew:.02778},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.65952,italic:0,skew:0},106:{depth:.19444,height:.65952,italic:.05724,skew:0},107:{depth:0,height:.69444,italic:.03148,skew:0},108:{depth:0,height:.69444,italic:.01968,skew:.08334},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:.05556},112:{depth:.19444,height:.43056,italic:0,skew:.08334},113:{depth:.19444,height:.43056,italic:.03588,skew:.08334},114:{depth:0,height:.43056,italic:.02778,skew:.05556},115:{depth:0,height:.43056,italic:0,skew:.05556},116:{depth:0,height:.61508,italic:0,skew:.08334},117:{depth:0,height:.43056,italic:0,skew:.02778},118:{depth:0,height:.43056,italic:.03588,skew:.02778},119:{depth:0,height:.43056,italic:.02691,skew:.08334},120:{depth:0,height:.43056,italic:0,skew:.02778},121:{depth:.19444,height:.43056,italic:.03588,skew:.05556},122:{depth:0,height:.43056,italic:.04398,skew:.05556},915:{depth:0,height:.68333,italic:.13889,skew:.08334},916:{depth:0,height:.68333,italic:0,skew:.16667},920:{depth:0,height:.68333,italic:.02778,skew:.08334},923:{depth:0,height:.68333,italic:0,skew:.16667},926:{depth:0,height:.68333,italic:.07569,skew:.08334},928:{depth:0,height:.68333,italic:.08125,skew:.05556},931:{depth:0,height:.68333,italic:.05764,skew:.08334},933:{depth:0,height:.68333,italic:.13889,skew:.05556},934:{depth:0,height:.68333,italic:0,skew:.08334},936:{depth:0,height:.68333,italic:.11,skew:.05556},937:{depth:0,height:.68333,italic:.05017,skew:.08334},945:{depth:0,height:.43056,italic:.0037,skew:.02778},946:{depth:.19444,height:.69444,italic:.05278,skew:.08334},947:{depth:.19444,height:.43056,italic:.05556,skew:0},948:{depth:0,height:.69444,italic:.03785,skew:.05556},949:{depth:0,height:.43056,italic:0,skew:.08334},950:{depth:.19444,height:.69444,italic:.07378,skew:.08334},951:{depth:.19444,height:.43056,italic:.03588,skew:.05556},952:{depth:0,height:.69444,italic:.02778,skew:.08334},953:{depth:0,height:.43056,italic:0,skew:.05556},954:{depth:0,height:.43056,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.43056,italic:0,skew:.02778},957:{depth:0,height:.43056,italic:.06366,skew:.02778},958:{depth:.19444,height:.69444,italic:.04601,skew:.11111},959:{depth:0,height:.43056,italic:0,skew:.05556},960:{depth:0,height:.43056,italic:.03588,skew:0},961:{depth:.19444,height:.43056,italic:0,skew:.08334},962:{depth:.09722,height:.43056,italic:.07986,skew:.08334},963:{depth:0,height:.43056,italic:.03588,skew:0},964:{depth:0,height:.43056,italic:.1132,skew:.02778},965:{depth:0,height:.43056,italic:.03588,skew:.02778},966:{depth:.19444,height:.43056,italic:0,skew:.08334},967:{depth:.19444,height:.43056,italic:0,skew:.05556},968:{depth:.19444,height:.69444,italic:.03588,skew:.11111},969:{depth:0,height:.43056,italic:.03588,skew:0},977:{depth:0,height:.69444,italic:0,skew:.08334},981:{depth:.19444,height:.69444,italic:0,skew:.08334},982:{depth:0,height:.43056,italic:.02778,skew:0},1009:{depth:.19444,height:.43056,italic:0,skew:.08334},1013:{depth:0,height:.43056,italic:0,skew:.05556}},"SansSerif-Regular":{33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.08333,height:.58333,italic:0,skew:0},44:{depth:.125,height:.08333,italic:0,skew:0},45:{depth:0,height:.44444,italic:0,skew:0},46:{depth:0,height:.08333,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.65556,italic:0,skew:0},49:{depth:0,height:.65556,italic:0,skew:0},50:{depth:0,height:.65556,italic:0,skew:0},51:{depth:0,height:.65556,italic:0,skew:0},52:{depth:0,height:.65556,italic:0,skew:0},53:{depth:0,height:.65556,italic:0,skew:0},54:{depth:0,height:.65556,italic:0,skew:0},55:{depth:0,height:.65556,italic:0,skew:0},56:{depth:0,height:.65556,italic:0,skew:0},57:{depth:0,height:.65556,italic:0,skew:0},58:{depth:0,height:.44444,italic:0,skew:0},59:{depth:.125,height:.44444,italic:0,skew:0},61:{depth:-.13,height:.37,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.69444,italic:0,skew:0},66:{depth:0,height:.69444,italic:0,skew:0},67:{depth:0,height:.69444,italic:0,skew:0},68:{depth:0,height:.69444,italic:0,skew:0},69:{depth:0,height:.69444,italic:0,skew:0},70:{depth:0,height:.69444,italic:0,skew:0},71:{depth:0,height:.69444,italic:0,skew:0},72:{depth:0,height:.69444,italic:0,skew:0},73:{depth:0,height:.69444,italic:0,skew:0},74:{depth:0,height:.69444,italic:0,skew:0},75:{depth:0,height:.69444,italic:0,skew:0},76:{depth:0,height:.69444,italic:0,skew:0},77:{depth:0,height:.69444,italic:0,skew:0},78:{depth:0,height:.69444,italic:0,skew:0},79:{depth:0,height:.69444,italic:0,skew:0},80:{depth:0,height:.69444,italic:0,skew:0},81:{depth:.125,height:.69444,italic:0,skew:0},82:{depth:0,height:.69444,italic:0,skew:0},83:{depth:0,height:.69444,italic:0,skew:0},84:{depth:0,height:.69444,italic:0,skew:0},85:{depth:0,height:.69444,italic:0,skew:0},86:{depth:0,height:.69444,italic:.01389,skew:0},87:{depth:0,height:.69444,italic:.01389,skew:0},88:{depth:0,height:.69444,italic:0,skew:0},89:{depth:0,height:.69444,italic:.025,skew:0},90:{depth:0,height:.69444,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.35,height:.09444,italic:.02778,skew:0},97:{depth:0,height:.44444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.44444,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},102:{depth:0,height:.69444,italic:.06944,skew:0},103:{depth:.19444,height:.44444,italic:.01389,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.67937,italic:0,skew:0},106:{depth:.19444,height:.67937,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:0,skew:0},114:{depth:0,height:.44444,italic:.01389,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.57143,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.01389,skew:0},119:{depth:0,height:.44444,italic:.01389,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.01389,skew:0},122:{depth:0,height:.44444,italic:0,skew:0},126:{depth:.35,height:.32659,italic:0,skew:0},305:{depth:0,height:.44444,italic:0,skew:0},567:{depth:.19444,height:.44444,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.67659,italic:0,skew:0},772:{depth:0,height:.60889,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.67937,italic:0,skew:0},776:{depth:0,height:.67937,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},780:{depth:0,height:.63194,italic:0,skew:0},915:{depth:0,height:.69444,italic:0,skew:0},916:{depth:0,height:.69444,italic:0,skew:0},920:{depth:0,height:.69444,italic:0,skew:0},923:{depth:0,height:.69444,italic:0,skew:0},926:{depth:0,height:.69444,italic:0,skew:0},928:{depth:0,height:.69444,italic:0,skew:0},931:{depth:0,height:.69444,italic:0,skew:0},933:{depth:0,height:.69444,italic:0,skew:0},934:{depth:0,height:.69444,italic:0,skew:0},936:{depth:0,height:.69444,italic:0,skew:0},937:{depth:0,height:.69444,italic:0,skew:0},8211:{depth:0,height:.44444,italic:.02778,skew:0},8212:{depth:0,height:.44444,italic:.02778,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0}},"Script-Regular":{65:{depth:0,height:.7,italic:.22925,skew:0},66:{depth:0,height:.7,italic:.04087,skew:0},67:{depth:0,height:.7,italic:.1689,skew:0},68:{depth:0,height:.7,italic:.09371,skew:0},69:{depth:0,height:.7,italic:.18583,skew:0},70:{depth:0,height:.7,italic:.13634,skew:0},71:{depth:0,height:.7,italic:.17322,skew:0},72:{depth:0,height:.7,italic:.29694,skew:0},73:{depth:0,height:.7,italic:.19189,skew:0},74:{depth:.27778,height:.7,italic:.19189,skew:0},75:{depth:0,height:.7,italic:.31259,skew:0},76:{depth:0,height:.7,italic:.19189,skew:0},77:{depth:0,height:.7,italic:.15981,skew:0},78:{depth:0,height:.7,italic:.3525,skew:0},79:{depth:0,height:.7,italic:.08078,skew:0},80:{depth:0,height:.7,italic:.08078,skew:0},81:{depth:0,height:.7,italic:.03305,skew:0},82:{depth:0,height:.7,italic:.06259,skew:0},83:{depth:0,height:.7,italic:.19189,skew:0},84:{depth:0,height:.7,italic:.29087,skew:0},85:{depth:0,height:.7,italic:.25815,skew:0},86:{depth:0,height:.7,italic:.27523,skew:0},87:{depth:0,height:.7,italic:.27523,skew:0},88:{depth:0,height:.7,italic:.26006,skew:0},89:{depth:0,height:.7,italic:.2939,skew:0},90:{depth:0,height:.7,italic:.24037,skew:0}},"Size1-Regular":{40:{depth:.35001,height:.85,italic:0,skew:0},41:{depth:.35001,height:.85,italic:0,skew:0},47:{depth:.35001,height:.85,italic:0,skew:0},91:{depth:.35001,height:.85,italic:0,skew:0},92:{depth:.35001,height:.85,italic:0,skew:0},93:{depth:.35001,height:.85,italic:0,skew:0},123:{depth:.35001,height:.85,italic:0,skew:0},125:{depth:.35001,height:.85,italic:0,skew:0},710:{depth:0,height:.72222,italic:0,skew:0},732:{depth:0,height:.72222,italic:0,skew:0},770:{depth:0,height:.72222,italic:0,skew:0},771:{depth:0,height:.72222,italic:0,skew:0},8214:{depth:-99e-5,height:.601,italic:0,skew:0},8593:{depth:1e-5,height:.6,italic:0,skew:0},8595:{depth:1e-5,height:.6,italic:0,skew:0},8657:{depth:1e-5,height:.6,italic:0,skew:0},8659:{depth:1e-5,height:.6,italic:0,skew:0},8719:{depth:.25001,height:.75,italic:0,skew:0},8720:{depth:.25001,height:.75,italic:0,skew:0},8721:{depth:.25001,height:.75,italic:0,skew:0},8730:{depth:.35001,height:.85,italic:0,skew:0},8739:{depth:-.00599,height:.606,italic:0,skew:0},8741:{depth:-.00599,height:.606,italic:0,skew:0},8747:{depth:.30612,height:.805,italic:.19445,skew:0},8748:{depth:.306,height:.805,italic:.19445,skew:0},8749:{depth:.306,height:.805,italic:.19445,skew:0},8750:{depth:.30612,height:.805,italic:.19445,skew:0},8896:{depth:.25001,height:.75,italic:0,skew:0},8897:{depth:.25001,height:.75,italic:0,skew:0},8898:{depth:.25001,height:.75,italic:0,skew:0},8899:{depth:.25001,height:.75,italic:0,skew:0},8968:{depth:.35001,height:.85,italic:0,skew:0},8969:{depth:.35001,height:.85,italic:0,skew:0},8970:{depth:.35001,height:.85,italic:0,skew:0},8971:{depth:.35001,height:.85,italic:0,skew:0},9168:{depth:-99e-5,height:.601,italic:0,skew:0},10216:{depth:.35001,height:.85,italic:0,skew:0},10217:{depth:.35001,height:.85,italic:0,skew:0},10752:{depth:.25001,height:.75,italic:0,skew:0},10753:{depth:.25001,height:.75,italic:0,skew:0},10754:{depth:.25001,height:.75,italic:0,skew:0},10756:{depth:.25001,height:.75,italic:0,skew:0},10758:{depth:.25001,height:.75,italic:0,skew:0}},"Size2-Regular":{40:{depth:.65002,height:1.15,italic:0,skew:0},41:{depth:.65002,height:1.15,italic:0,skew:0},47:{depth:.65002,height:1.15,italic:0,skew:0},91:{depth:.65002,height:1.15,italic:0,skew:0},92:{depth:.65002,height:1.15,italic:0,skew:0},93:{depth:.65002,height:1.15,italic:0,skew:0},123:{depth:.65002,height:1.15,italic:0,skew:0},125:{depth:.65002,height:1.15,italic:0,skew:0},710:{depth:0,height:.75,italic:0,skew:0},732:{depth:0,height:.75,italic:0,skew:0},770:{depth:0,height:.75,italic:0,skew:0},771:{depth:0,height:.75,italic:0,skew:0},8719:{depth:.55001,height:1.05,italic:0,skew:0},8720:{depth:.55001,height:1.05,italic:0,skew:0},8721:{depth:.55001,height:1.05,italic:0,skew:0},8730:{depth:.65002,height:1.15,italic:0,skew:0},8747:{depth:.86225,height:1.36,italic:.44445,skew:0},8748:{depth:.862,height:1.36,italic:.44445,skew:0},8749:{depth:.862,height:1.36,italic:.44445,skew:0},8750:{depth:.86225,height:1.36,italic:.44445,skew:0},8896:{depth:.55001,height:1.05,italic:0,skew:0},8897:{depth:.55001,height:1.05,italic:0,skew:0},8898:{depth:.55001,height:1.05,italic:0,skew:0},8899:{depth:.55001,height:1.05,italic:0,skew:0},8968:{depth:.65002,height:1.15,italic:0,skew:0},8969:{depth:.65002,height:1.15,italic:0,skew:0},8970:{depth:.65002,height:1.15,italic:0,skew:0},8971:{depth:.65002,height:1.15,italic:0,skew:0},10216:{depth:.65002,height:1.15,italic:0,skew:0},10217:{depth:.65002,height:1.15,italic:0,skew:0},10752:{depth:.55001,height:1.05,italic:0,skew:0},10753:{depth:.55001,height:1.05,italic:0,skew:0},10754:{depth:.55001,height:1.05,italic:0,skew:0},10756:{depth:.55001,height:1.05,italic:0,skew:0},10758:{depth:.55001,height:1.05,italic:0,skew:0}},"Size3-Regular":{40:{depth:.95003,height:1.45,italic:0,skew:0},41:{depth:.95003,height:1.45,italic:0,skew:0},47:{depth:.95003,height:1.45,italic:0,skew:0},91:{depth:.95003,height:1.45,italic:0,skew:0},92:{depth:.95003,height:1.45,italic:0,skew:0},93:{depth:.95003,height:1.45,italic:0,skew:0},123:{depth:.95003,height:1.45,italic:0,skew:0},125:{depth:.95003,height:1.45,italic:0,skew:0},710:{depth:0,height:.75,italic:0,skew:0},732:{depth:0,height:.75,italic:0,skew:0},770:{depth:0,height:.75,italic:0,skew:0},771:{depth:0,height:.75,italic:0,skew:0},8730:{depth:.95003,height:1.45,italic:0,skew:0},8968:{depth:.95003,height:1.45,italic:0,skew:0},8969:{depth:.95003,height:1.45,italic:0,skew:0},8970:{depth:.95003,height:1.45,italic:0,skew:0},8971:{depth:.95003,height:1.45,italic:0,skew:0},10216:{depth:.95003,height:1.45,italic:0,skew:0},10217:{depth:.95003,height:1.45,italic:0,skew:0}},"Size4-Regular":{40:{depth:1.25003,height:1.75,italic:0,skew:0},41:{depth:1.25003,height:1.75,italic:0,skew:0},47:{depth:1.25003,height:1.75,italic:0,skew:0},91:{depth:1.25003,height:1.75,italic:0,skew:0},92:{depth:1.25003,height:1.75,italic:0,skew:0},93:{depth:1.25003,height:1.75,italic:0,skew:0},123:{depth:1.25003,height:1.75,italic:0,skew:0},125:{depth:1.25003,height:1.75,italic:0,skew:0},710:{depth:0,height:.825,italic:0,skew:0},732:{depth:0,height:.825,italic:0,skew:0},770:{depth:0,height:.825,italic:0,skew:0},771:{depth:0,height:.825,italic:0,skew:0},8730:{depth:1.25003,height:1.75,italic:0,skew:0},8968:{depth:1.25003,height:1.75,italic:0,skew:0},8969:{depth:1.25003,height:1.75,italic:0,skew:0},8970:{depth:1.25003,height:1.75,italic:0,skew:0},8971:{depth:1.25003,height:1.75,italic:0,skew:0},9115:{depth:.64502,height:1.155,italic:0,skew:0},9116:{depth:1e-5,height:.6,italic:0,skew:0},9117:{depth:.64502,height:1.155,italic:0,skew:0},9118:{depth:.64502,height:1.155,italic:0,skew:0},9119:{depth:1e-5,height:.6,italic:0,skew:0},9120:{depth:.64502,height:1.155,italic:0,skew:0},9121:{depth:.64502,height:1.155,italic:0,skew:0},9122:{depth:-99e-5,height:.601,italic:0,skew:0},9123:{depth:.64502,height:1.155,italic:0,skew:0},9124:{depth:.64502,height:1.155,italic:0,skew:0},9125:{depth:-99e-5,height:.601,italic:0,skew:0},9126:{depth:.64502,height:1.155,italic:0,skew:0},9127:{depth:1e-5,height:.9,italic:0,skew:0},9128:{depth:.65002,height:1.15,italic:0,skew:0},9129:{depth:.90001,height:0,italic:0,skew:0},9130:{depth:0,height:.3,italic:0,skew:0},9131:{depth:1e-5,height:.9,italic:0,skew:0},9132:{depth:.65002,height:1.15,italic:0,skew:0},9133:{depth:.90001,height:0,italic:0,skew:0},9143:{depth:.88502,height:.915,italic:0,skew:0},10216:{depth:1.25003,height:1.75,italic:0,skew:0},10217:{depth:1.25003,height:1.75,italic:0,skew:0},57344:{depth:-.00499,height:.605,italic:0,skew:0},57345:{depth:-.00499,height:.605,italic:0,skew:0},57680:{depth:0,
height:.12,italic:0,skew:0},57681:{depth:0,height:.12,italic:0,skew:0},57682:{depth:0,height:.12,italic:0,skew:0},57683:{depth:0,height:.12,italic:0,skew:0}},"Typewriter-Regular":{33:{depth:0,height:.61111,italic:0,skew:0},34:{depth:0,height:.61111,italic:0,skew:0},35:{depth:0,height:.61111,italic:0,skew:0},36:{depth:.08333,height:.69444,italic:0,skew:0},37:{depth:.08333,height:.69444,italic:0,skew:0},38:{depth:0,height:.61111,italic:0,skew:0},39:{depth:0,height:.61111,italic:0,skew:0},40:{depth:.08333,height:.69444,italic:0,skew:0},41:{depth:.08333,height:.69444,italic:0,skew:0},42:{depth:0,height:.52083,italic:0,skew:0},43:{depth:-.08056,height:.53055,italic:0,skew:0},44:{depth:.13889,height:.125,italic:0,skew:0},45:{depth:-.08056,height:.53055,italic:0,skew:0},46:{depth:0,height:.125,italic:0,skew:0},47:{depth:.08333,height:.69444,italic:0,skew:0},48:{depth:0,height:.61111,italic:0,skew:0},49:{depth:0,height:.61111,italic:0,skew:0},50:{depth:0,height:.61111,italic:0,skew:0},51:{depth:0,height:.61111,italic:0,skew:0},52:{depth:0,height:.61111,italic:0,skew:0},53:{depth:0,height:.61111,italic:0,skew:0},54:{depth:0,height:.61111,italic:0,skew:0},55:{depth:0,height:.61111,italic:0,skew:0},56:{depth:0,height:.61111,italic:0,skew:0},57:{depth:0,height:.61111,italic:0,skew:0},58:{depth:0,height:.43056,italic:0,skew:0},59:{depth:.13889,height:.43056,italic:0,skew:0},60:{depth:-.05556,height:.55556,italic:0,skew:0},61:{depth:-.19549,height:.41562,italic:0,skew:0},62:{depth:-.05556,height:.55556,italic:0,skew:0},63:{depth:0,height:.61111,italic:0,skew:0},64:{depth:0,height:.61111,italic:0,skew:0},65:{depth:0,height:.61111,italic:0,skew:0},66:{depth:0,height:.61111,italic:0,skew:0},67:{depth:0,height:.61111,italic:0,skew:0},68:{depth:0,height:.61111,italic:0,skew:0},69:{depth:0,height:.61111,italic:0,skew:0},70:{depth:0,height:.61111,italic:0,skew:0},71:{depth:0,height:.61111,italic:0,skew:0},72:{depth:0,height:.61111,italic:0,skew:0},73:{depth:0,height:.61111,italic:0,skew:0},74:{depth:0,height:.61111,italic:0,skew:0},75:{depth:0,height:.61111,italic:0,skew:0},76:{depth:0,height:.61111,italic:0,skew:0},77:{depth:0,height:.61111,italic:0,skew:0},78:{depth:0,height:.61111,italic:0,skew:0},79:{depth:0,height:.61111,italic:0,skew:0},80:{depth:0,height:.61111,italic:0,skew:0},81:{depth:.13889,height:.61111,italic:0,skew:0},82:{depth:0,height:.61111,italic:0,skew:0},83:{depth:0,height:.61111,italic:0,skew:0},84:{depth:0,height:.61111,italic:0,skew:0},85:{depth:0,height:.61111,italic:0,skew:0},86:{depth:0,height:.61111,italic:0,skew:0},87:{depth:0,height:.61111,italic:0,skew:0},88:{depth:0,height:.61111,italic:0,skew:0},89:{depth:0,height:.61111,italic:0,skew:0},90:{depth:0,height:.61111,italic:0,skew:0},91:{depth:.08333,height:.69444,italic:0,skew:0},92:{depth:.08333,height:.69444,italic:0,skew:0},93:{depth:.08333,height:.69444,italic:0,skew:0},94:{depth:0,height:.61111,italic:0,skew:0},95:{depth:.09514,height:0,italic:0,skew:0},96:{depth:0,height:.61111,italic:0,skew:0},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.61111,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:0},100:{depth:0,height:.61111,italic:0,skew:0},101:{depth:0,height:.43056,italic:0,skew:0},102:{depth:0,height:.61111,italic:0,skew:0},103:{depth:.22222,height:.43056,italic:0,skew:0},104:{depth:0,height:.61111,italic:0,skew:0},105:{depth:0,height:.61111,italic:0,skew:0},106:{depth:.22222,height:.61111,italic:0,skew:0},107:{depth:0,height:.61111,italic:0,skew:0},108:{depth:0,height:.61111,italic:0,skew:0},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:0},112:{depth:.22222,height:.43056,italic:0,skew:0},113:{depth:.22222,height:.43056,italic:0,skew:0},114:{depth:0,height:.43056,italic:0,skew:0},115:{depth:0,height:.43056,italic:0,skew:0},116:{depth:0,height:.55358,italic:0,skew:0},117:{depth:0,height:.43056,italic:0,skew:0},118:{depth:0,height:.43056,italic:0,skew:0},119:{depth:0,height:.43056,italic:0,skew:0},120:{depth:0,height:.43056,italic:0,skew:0},121:{depth:.22222,height:.43056,italic:0,skew:0},122:{depth:0,height:.43056,italic:0,skew:0},123:{depth:.08333,height:.69444,italic:0,skew:0},124:{depth:.08333,height:.69444,italic:0,skew:0},125:{depth:.08333,height:.69444,italic:0,skew:0},126:{depth:0,height:.61111,italic:0,skew:0},127:{depth:0,height:.61111,italic:0,skew:0},305:{depth:0,height:.43056,italic:0,skew:0},567:{depth:.22222,height:.43056,italic:0,skew:0},768:{depth:0,height:.61111,italic:0,skew:0},769:{depth:0,height:.61111,italic:0,skew:0},770:{depth:0,height:.61111,italic:0,skew:0},771:{depth:0,height:.61111,italic:0,skew:0},772:{depth:0,height:.56555,italic:0,skew:0},774:{depth:0,height:.61111,italic:0,skew:0},776:{depth:0,height:.61111,italic:0,skew:0},778:{depth:0,height:.61111,italic:0,skew:0},780:{depth:0,height:.56597,italic:0,skew:0},915:{depth:0,height:.61111,italic:0,skew:0},916:{depth:0,height:.61111,italic:0,skew:0},920:{depth:0,height:.61111,italic:0,skew:0},923:{depth:0,height:.61111,italic:0,skew:0},926:{depth:0,height:.61111,italic:0,skew:0},928:{depth:0,height:.61111,italic:0,skew:0},931:{depth:0,height:.61111,italic:0,skew:0},933:{depth:0,height:.61111,italic:0,skew:0},934:{depth:0,height:.61111,italic:0,skew:0},936:{depth:0,height:.61111,italic:0,skew:0},937:{depth:0,height:.61111,italic:0,skew:0},2018:{depth:0,height:.61111,italic:0,skew:0},2019:{depth:0,height:.61111,italic:0,skew:0},8242:{depth:0,height:.61111,italic:0,skew:0}}}},{}],18:[function(e,t,i){var h=e("./utils");var a=e("./ParseError");var r={"\\sqrt":{numArgs:1,numOptionalArgs:1,handler:function(e,t,i,h){return{type:"sqrt",body:i,index:t}}},"\\text":{numArgs:1,argTypes:["text"],greediness:2,handler:function(e,t){var i;if(t.type==="ordgroup"){i=t.value}else{i=[t]}return{type:"text",body:i}}},"\\color":{numArgs:2,allowedInText:true,greediness:3,argTypes:["color","original"],handler:function(e,t,i){var h;if(i.type==="ordgroup"){h=i.value}else{h=[i]}return{type:"color",color:t.value,value:h}}},"\\overline":{numArgs:1,handler:function(e,t){return{type:"overline",body:t}}},"\\rule":{numArgs:2,numOptionalArgs:1,argTypes:["size","size","size"],handler:function(e,t,i,h){return{type:"rule",shift:t&&t.value,width:i.value,height:h.value}}},"\\KaTeX":{numArgs:0,handler:function(e){return{type:"katex"}}},"\\phantom":{numArgs:1,handler:function(e,t){var i;if(t.type==="ordgroup"){i=t.value}else{i=[t]}return{type:"phantom",value:i}}}};var l={"\\bigl":{type:"open",size:1},"\\Bigl":{type:"open",size:2},"\\biggl":{type:"open",size:3},"\\Biggl":{type:"open",size:4},"\\bigr":{type:"close",size:1},"\\Bigr":{type:"close",size:2},"\\biggr":{type:"close",size:3},"\\Biggr":{type:"close",size:4},"\\bigm":{type:"rel",size:1},"\\Bigm":{type:"rel",size:2},"\\biggm":{type:"rel",size:3},"\\Biggm":{type:"rel",size:4},"\\big":{type:"textord",size:1},"\\Big":{type:"textord",size:2},"\\bigg":{type:"textord",size:3},"\\Bigg":{type:"textord",size:4}};var s=["(",")","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","\\lceil","\\rceil","<",">","\\langle","\\rangle","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","\\lmoustache","\\rmoustache","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];var p={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};var c=[{funcs:["\\blue","\\orange","\\pink","\\red","\\green","\\gray","\\purple","\\blueA","\\blueB","\\blueC","\\blueD","\\blueE","\\tealA","\\tealB","\\tealC","\\tealD","\\tealE","\\greenA","\\greenB","\\greenC","\\greenD","\\greenE","\\goldA","\\goldB","\\goldC","\\goldD","\\goldE","\\redA","\\redB","\\redC","\\redD","\\redE","\\maroonA","\\maroonB","\\maroonC","\\maroonD","\\maroonE","\\purpleA","\\purpleB","\\purpleC","\\purpleD","\\purpleE","\\mintA","\\mintB","\\mintC","\\grayA","\\grayB","\\grayC","\\grayD","\\grayE","\\grayF","\\grayG","\\grayH","\\grayI","\\kaBlue","\\kaGreen"],data:{numArgs:1,allowedInText:true,greediness:3,handler:function(e,t){var i;if(t.type==="ordgroup"){i=t.value}else{i=[t]}return{type:"color",color:"katex-"+e.slice(1),value:i}}}},{funcs:["\\arcsin","\\arccos","\\arctan","\\arg","\\cos","\\cosh","\\cot","\\coth","\\csc","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\tan","\\tanh"],data:{numArgs:0,handler:function(e){return{type:"op",limits:false,symbol:false,body:e}}}},{funcs:["\\det","\\gcd","\\inf","\\lim","\\liminf","\\limsup","\\max","\\min","\\Pr","\\sup"],data:{numArgs:0,handler:function(e){return{type:"op",limits:true,symbol:false,body:e}}}},{funcs:["\\int","\\iint","\\iiint","\\oint"],data:{numArgs:0,handler:function(e){return{type:"op",limits:false,symbol:true,body:e}}}},{funcs:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint"],data:{numArgs:0,handler:function(e){return{type:"op",limits:true,symbol:true,body:e}}}},{funcs:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom"],data:{numArgs:2,greediness:2,handler:function(e,t,i){var h;var a=null;var r=null;var l="auto";switch(e){case"\\dfrac":case"\\frac":case"\\tfrac":h=true;break;case"\\dbinom":case"\\binom":case"\\tbinom":h=false;a="(";r=")";break;default:throw new Error("Unrecognized genfrac command")}switch(e){case"\\dfrac":case"\\dbinom":l="display";break;case"\\tfrac":case"\\tbinom":l="text";break}return{type:"genfrac",numer:t,denom:i,hasBarLine:h,leftDelim:a,rightDelim:r,size:l}}}},{funcs:["\\llap","\\rlap"],data:{numArgs:1,allowedInText:true,handler:function(e,t){return{type:e.slice(1),body:t}}}},{funcs:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg","\\left","\\right"],data:{numArgs:1,handler:function(e,t,i){if(!h.contains(s,t.value)){throw new a("Invalid delimiter: '"+t.value+"' after '"+e+"'",this.lexer,i[1])}if(e==="\\left"||e==="\\right"){return{type:"leftright",value:t.value}}else{return{type:"delimsizing",size:l[e].size,delimType:l[e].type,value:t.value}}}}},{funcs:["\\tiny","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],data:{numArgs:0}},{funcs:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],data:{numArgs:0}},{funcs:["\\mathrm","\\mathit","\\mathbf","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],data:{numArgs:1,handler:function(e,t){if(e in p){e=p[e]}return{type:"font",font:e.slice(1),body:t}}}},{funcs:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot"],data:{numArgs:1,handler:function(e,t){return{type:"accent",accent:e,base:t}}}},{funcs:["\\over","\\choose"],data:{numArgs:0,handler:function(e){var t;switch(e){case"\\over":t="\\frac";break;case"\\choose":t="\\binom";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",replaceWith:t}}}},{funcs:["\\\\","\\cr"],data:{numArgs:0,numOptionalArgs:1,argTypes:["size"],handler:function(e,t){return{type:"cr",size:t}}}},{funcs:["\\begin","\\end"],data:{numArgs:1,argTypes:["text"],handler:function(e,t,i){if(t.type!=="ordgroup"){throw new a("Invalid environment name",this.lexer,i[1])}var h="";for(var r=0;r<t.value.length;++r){h+=t.value[r].value}return{type:"environment",name:h,namepos:i[1]}}}}];var n=function(e,t){for(var i=0;i<e.length;i++){r[e[i]]=t}};for(var o=0;o<c.length;o++){n(c[o].funcs,c[o].data)}for(var g in r){if(r.hasOwnProperty(g)){var d=r[g];r[g]={numArgs:d.numArgs,argTypes:d.argTypes,greediness:d.greediness===undefined?1:d.greediness,allowedInText:d.allowedInText?d.allowedInText:false,numOptionalArgs:d.numOptionalArgs===undefined?0:d.numOptionalArgs,handler:d.handler}}}t.exports={funcs:r}},{"./ParseError":5,"./utils":23}],19:[function(e,t,i){var h=e("./utils");function a(e,t){this.type=e;this.attributes={};this.children=t||[]}a.prototype.setAttribute=function(e,t){this.attributes[e]=t};a.prototype.toNode=function(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,t)){e.setAttribute(t,this.attributes[t])}}for(var i=0;i<this.children.length;i++){e.appendChild(this.children[i].toNode())}return e};a.prototype.toMarkup=function(){var e="<"+this.type;for(var t in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,t)){e+=" "+t+'="';e+=h.escape(this.attributes[t]);e+='"'}}e+=">";for(var i=0;i<this.children.length;i++){e+=this.children[i].toMarkup()}e+="</"+this.type+">";return e};function r(e){this.text=e}r.prototype.toNode=function(){return document.createTextNode(this.text)};r.prototype.toMarkup=function(){return h.escape(this.text)};t.exports={MathNode:a,TextNode:r}},{"./utils":23}],20:[function(e,t,i){function h(e,t,i){this.type=e;this.value=t;this.mode=i}function a(e,t,i){this.result=e;this.position=t}t.exports={ParseNode:h,ParseResult:a}},{}],21:[function(e,t,i){var h=e("./Parser");var a=function(e,t){var i=new h(e,t);return i.parse()};t.exports=a},{"./Parser":6}],22:[function(e,t,i){var h={math:{"\\equiv":{font:"main",group:"rel",replace:"\u2261"},"\\prec":{font:"main",group:"rel",replace:"\u227a"},"\\succ":{font:"main",group:"rel",replace:"\u227b"},"\\sim":{font:"main",group:"rel",replace:"\u223c"},"\\perp":{font:"main",group:"rel",replace:"\u22a5"},"\\preceq":{font:"main",group:"rel",replace:"\u2aaf"},"\\succeq":{font:"main",group:"rel",replace:"\u2ab0"},"\\simeq":{font:"main",group:"rel",replace:"\u2243"},"\\mid":{font:"main",group:"rel",replace:"\u2223"},"\\ll":{font:"main",group:"rel",replace:"\u226a"},"\\gg":{font:"main",group:"rel",replace:"\u226b"},"\\asymp":{font:"main",group:"rel",replace:"\u224d"},"\\parallel":{font:"main",group:"rel",replace:"\u2225"},"\\bowtie":{font:"main",group:"rel",replace:"\u22c8"},"\\smile":{font:"main",group:"rel",replace:"\u2323"},"\\sqsubseteq":{font:"main",group:"rel",replace:"\u2291"},"\\sqsupseteq":{font:"main",group:"rel",replace:"\u2292"},"\\doteq":{font:"main",group:"rel",replace:"\u2250"},"\\frown":{font:"main",group:"rel",replace:"\u2322"},"\\ni":{font:"main",group:"rel",replace:"\u220b"},"\\propto":{font:"main",group:"rel",replace:"\u221d"},"\\vdash":{font:"main",group:"rel",replace:"\u22a2"},"\\dashv":{font:"main",group:"rel",replace:"\u22a3"},"\\owns":{font:"main",group:"rel",replace:"\u220b"},"\\ldotp":{font:"main",group:"punct",replace:"."},"\\cdotp":{font:"main",group:"punct",replace:"\u22c5"},"\\#":{font:"main",group:"textord",replace:"#"},"\\&":{font:"main",group:"textord",replace:"&"},"\\aleph":{font:"main",group:"textord",replace:"\u2135"},"\\forall":{font:"main",group:"textord",replace:"\u2200"},"\\hbar":{font:"main",group:"textord",replace:"\u210f"},"\\exists":{font:"main",group:"textord",replace:"\u2203"},"\\nabla":{font:"main",group:"textord",replace:"\u2207"},"\\flat":{font:"main",group:"textord",replace:"\u266d"},"\\ell":{font:"main",group:"textord",replace:"\u2113"},"\\natural":{font:"main",group:"textord",replace:"\u266e"},"\\clubsuit":{font:"main",group:"textord",replace:"\u2663"},"\\wp":{font:"main",group:"textord",replace:"\u2118"},"\\sharp":{font:"main",group:"textord",replace:"\u266f"},"\\diamondsuit":{font:"main",group:"textord",replace:"\u2662"},"\\Re":{font:"main",group:"textord",replace:"\u211c"},"\\heartsuit":{font:"main",group:"textord",replace:"\u2661"},"\\Im":{font:"main",group:"textord",replace:"\u2111"},"\\spadesuit":{font:"main",group:"textord",replace:"\u2660"},"\\dag":{font:"main",group:"textord",replace:"\u2020"},"\\ddag":{font:"main",group:"textord",replace:"\u2021"},"\\rmoustache":{font:"main",group:"close",replace:"\u23b1"},"\\lmoustache":{font:"main",group:"open",replace:"\u23b0"},"\\rgroup":{font:"main",group:"close",replace:"\u27ef"},"\\lgroup":{font:"main",group:"open",replace:"\u27ee"},"\\mp":{font:"main",group:"bin",replace:"\u2213"},"\\ominus":{font:"main",group:"bin",replace:"\u2296"},"\\uplus":{font:"main",group:"bin",replace:"\u228e"},"\\sqcap":{font:"main",group:"bin",replace:"\u2293"},"\\ast":{font:"main",group:"bin",replace:"\u2217"},"\\sqcup":{font:"main",group:"bin",replace:"\u2294"},"\\bigcirc":{font:"main",group:"bin",replace:"\u25ef"},"\\bullet":{font:"main",group:"bin",replace:"\u2219"},"\\ddagger":{font:"main",group:"bin",replace:"\u2021"},"\\wr":{font:"main",group:"bin",replace:"\u2240"},"\\amalg":{font:"main",group:"bin",replace:"\u2a3f"},"\\longleftarrow":{font:"main",group:"rel",replace:"\u27f5"},"\\Leftarrow":{font:"main",group:"rel",replace:"\u21d0"},"\\Longleftarrow":{font:"main",group:"rel",replace:"\u27f8"},"\\longrightarrow":{font:"main",group:"rel",replace:"\u27f6"},"\\Rightarrow":{font:"main",group:"rel",replace:"\u21d2"},"\\Longrightarrow":{font:"main",group:"rel",replace:"\u27f9"},"\\leftrightarrow":{font:"main",group:"rel",replace:"\u2194"},"\\longleftrightarrow":{font:"main",group:"rel",replace:"\u27f7"},"\\Leftrightarrow":{font:"main",group:"rel",replace:"\u21d4"},"\\Longleftrightarrow":{font:"main",group:"rel",replace:"\u27fa"},"\\mapsto":{font:"main",group:"rel",replace:"\u21a6"},"\\longmapsto":{font:"main",group:"rel",replace:"\u27fc"},"\\nearrow":{font:"main",group:"rel",replace:"\u2197"},"\\hookleftarrow":{font:"main",group:"rel",replace:"\u21a9"},"\\hookrightarrow":{font:"main",group:"rel",replace:"\u21aa"},"\\searrow":{font:"main",group:"rel",replace:"\u2198"},"\\leftharpoonup":{font:"main",group:"rel",replace:"\u21bc"},"\\rightharpoonup":{font:"main",group:"rel",replace:"\u21c0"},"\\swarrow":{font:"main",group:"rel",replace:"\u2199"},"\\leftharpoondown":{font:"main",group:"rel",replace:"\u21bd"},"\\rightharpoondown":{font:"main",group:"rel",replace:"\u21c1"},"\\nwarrow":{font:"main",group:"rel",replace:"\u2196"},"\\rightleftharpoons":{font:"main",group:"rel",replace:"\u21cc"},"\\nless":{font:"ams",group:"rel",replace:"\u226e"},"\\nleqslant":{font:"ams",group:"rel",replace:"\ue010"},"\\nleqq":{font:"ams",group:"rel",replace:"\ue011"},"\\lneq":{font:"ams",group:"rel",replace:"\u2a87"},"\\lneqq":{font:"ams",group:"rel",replace:"\u2268"},"\\lvertneqq":{font:"ams",group:"rel",replace:"\ue00c"},"\\lnsim":{font:"ams",group:"rel",replace:"\u22e6"},"\\lnapprox":{font:"ams",group:"rel",replace:"\u2a89"},"\\nprec":{font:"ams",group:"rel",replace:"\u2280"},"\\npreceq":{font:"ams",group:"rel",replace:"\u22e0"},"\\precnsim":{font:"ams",group:"rel",replace:"\u22e8"},"\\precnapprox":{font:"ams",group:"rel",replace:"\u2ab9"},"\\nsim":{font:"ams",group:"rel",replace:"\u2241"},"\\nshortmid":{font:"ams",group:"rel",replace:"\ue006"},"\\nmid":{font:"ams",group:"rel",replace:"\u2224"},"\\nvdash":{font:"ams",group:"rel",replace:"\u22ac"},"\\nvDash":{font:"ams",group:"rel",replace:"\u22ad"},"\\ntriangleleft":{font:"ams",group:"rel",replace:"\u22ea"},"\\ntrianglelefteq":{font:"ams",group:"rel",replace:"\u22ec"},"\\subsetneq":{font:"ams",group:"rel",replace:"\u228a"},"\\varsubsetneq":{font:"ams",group:"rel",replace:"\ue01a"},"\\subsetneqq":{font:"ams",group:"rel",replace:"\u2acb"},"\\varsubsetneqq":{font:"ams",group:"rel",replace:"\ue017"},"\\ngtr":{font:"ams",group:"rel",replace:"\u226f"},"\\ngeqslant":{font:"ams",group:"rel",replace:"\ue00f"},"\\ngeqq":{font:"ams",group:"rel",replace:"\ue00e"},"\\gneq":{font:"ams",group:"rel",replace:"\u2a88"},"\\gneqq":{font:"ams",group:"rel",replace:"\u2269"},"\\gvertneqq":{font:"ams",group:"rel",replace:"\ue00d"},"\\gnsim":{font:"ams",group:"rel",replace:"\u22e7"},"\\gnapprox":{font:"ams",group:"rel",replace:"\u2a8a"},"\\nsucc":{font:"ams",group:"rel",replace:"\u2281"},"\\nsucceq":{font:"ams",group:"rel",replace:"\u22e1"},"\\succnsim":{font:"ams",group:"rel",replace:"\u22e9"},"\\succnapprox":{font:"ams",group:"rel",replace:"\u2aba"},"\\ncong":{font:"ams",group:"rel",replace:"\u2246"},"\\nshortparallel":{font:"ams",group:"rel",replace:"\ue007"},"\\nparallel":{font:"ams",group:"rel",replace:"\u2226"},"\\nVDash":{font:"ams",group:"rel",replace:"\u22af"},"\\ntriangleright":{font:"ams",group:"rel",replace:"\u22eb"},"\\ntrianglerighteq":{font:"ams",group:"rel",replace:"\u22ed"},"\\nsupseteqq":{font:"ams",group:"rel",replace:"\ue018"},"\\supsetneq":{font:"ams",group:"rel",replace:"\u228b"},"\\varsupsetneq":{font:"ams",group:"rel",replace:"\ue01b"},"\\supsetneqq":{font:"ams",group:"rel",replace:"\u2acc"},"\\varsupsetneqq":{font:"ams",group:"rel",replace:"\ue019"},"\\nVdash":{font:"ams",group:"rel",replace:"\u22ae"},"\\precneqq":{font:"ams",group:"rel",replace:"\u2ab5"},"\\succneqq":{font:"ams",group:"rel",replace:"\u2ab6"},"\\nsubseteqq":{font:"ams",group:"rel",replace:"\ue016"},"\\unlhd":{font:"ams",group:"bin",replace:"\u22b4"},"\\unrhd":{font:"ams",group:"bin",replace:"\u22b5"},"\\nleftarrow":{font:"ams",group:"rel",replace:"\u219a"},"\\nrightarrow":{font:"ams",group:"rel",replace:"\u219b"},"\\nLeftarrow":{font:"ams",group:"rel",replace:"\u21cd"},"\\nRightarrow":{font:"ams",group:"rel",replace:"\u21cf"},"\\nleftrightarrow":{font:"ams",group:"rel",replace:"\u21ae"},"\\nLeftrightarrow":{font:"ams",group:"rel",replace:"\u21ce"},"\\vartriangle":{font:"ams",group:"rel",replace:"\u25b3"},"\\hslash":{font:"ams",group:"textord",replace:"\u210f"},"\\triangledown":{font:"ams",group:"textord",replace:"\u25bd"},"\\lozenge":{font:"ams",group:"textord",replace:"\u25ca"},"\\circledS":{font:"ams",group:"textord",replace:"\u24c8"},"\\circledR":{font:"ams",group:"textord",replace:"\xae"},"\\measuredangle":{font:"ams",group:"textord",replace:"\u2221"},"\\nexists":{font:"ams",group:"textord",replace:"\u2204"},"\\mho":{font:"ams",group:"textord",replace:"\u2127"},"\\Finv":{font:"ams",group:"textord",replace:"\u2132"},"\\Game":{font:"ams",group:"textord",replace:"\u2141"},"\\Bbbk":{font:"ams",group:"textord",replace:"k"},"\\backprime":{font:"ams",group:"textord",replace:"\u2035"},"\\blacktriangle":{font:"ams",group:"textord",replace:"\u25b2"},"\\blacktriangledown":{font:"ams",group:"textord",replace:"\u25bc"},"\\blacksquare":{font:"ams",group:"textord",replace:"\u25a0"},"\\blacklozenge":{font:"ams",group:"textord",replace:"\u29eb"},"\\bigstar":{font:"ams",group:"textord",replace:"\u2605"},"\\sphericalangle":{font:"ams",group:"textord",replace:"\u2222"},"\\complement":{font:"ams",group:"textord",replace:"\u2201"},"\\eth":{font:"ams",group:"textord",replace:"\xf0"},"\\diagup":{font:"ams",group:"textord",replace:"\u2571"},"\\diagdown":{font:"ams",group:"textord",replace:"\u2572"},"\\square":{font:"ams",group:"textord",replace:"\u25a1"},"\\Box":{font:"ams",group:"textord",replace:"\u25a1"},"\\Diamond":{font:"ams",group:"textord",replace:"\u25ca"},"\\yen":{font:"ams",group:"textord",replace:"\xa5"},"\\checkmark":{font:"ams",group:"textord",replace:"\u2713"},"\\beth":{font:"ams",group:"textord",replace:"\u2136"},"\\daleth":{font:"ams",group:"textord",replace:"\u2138"},"\\gimel":{font:"ams",group:"textord",replace:"\u2137"},"\\digamma":{font:"ams",group:"textord",replace:"\u03dd"},"\\varkappa":{font:"ams",group:"textord",replace:"\u03f0"},"\\ulcorner":{font:"ams",group:"open",replace:"\u250c"},"\\urcorner":{font:"ams",group:"close",replace:"\u2510"},"\\llcorner":{font:"ams",group:"open",replace:"\u2514"},"\\lrcorner":{font:"ams",group:"close",replace:"\u2518"},"\\leqq":{font:"ams",group:"rel",replace:"\u2266"},"\\leqslant":{font:"ams",group:"rel",replace:"\u2a7d"},"\\eqslantless":{font:"ams",group:"rel",replace:"\u2a95"},"\\lesssim":{font:"ams",group:"rel",replace:"\u2272"},"\\lessapprox":{font:"ams",group:"rel",replace:"\u2a85"},"\\approxeq":{font:"ams",group:"rel",replace:"\u224a"},"\\lessdot":{font:"ams",group:"bin",replace:"\u22d6"},"\\lll":{font:"ams",group:"rel",replace:"\u22d8"},"\\lessgtr":{font:"ams",group:"rel",replace:"\u2276"},"\\lesseqgtr":{font:"ams",group:"rel",replace:"\u22da"},"\\lesseqqgtr":{font:"ams",group:"rel",replace:"\u2a8b"},"\\doteqdot":{font:"ams",group:"rel",replace:"\u2251"},"\\risingdotseq":{font:"ams",group:"rel",replace:"\u2253"},"\\fallingdotseq":{font:"ams",group:"rel",replace:"\u2252"},"\\backsim":{font:"ams",group:"rel",replace:"\u223d"},"\\backsimeq":{font:"ams",group:"rel",replace:"\u22cd"},"\\subseteqq":{font:"ams",group:"rel",replace:"\u2ac5"},"\\Subset":{font:"ams",group:"rel",replace:"\u22d0"},"\\sqsubset":{font:"ams",group:"rel",replace:"\u228f"},"\\preccurlyeq":{font:"ams",group:"rel",replace:"\u227c"},"\\curlyeqprec":{font:"ams",group:"rel",replace:"\u22de"},"\\precsim":{font:"ams",group:"rel",replace:"\u227e"},"\\precapprox":{font:"ams",group:"rel",replace:"\u2ab7"},"\\vartriangleleft":{font:"ams",group:"rel",replace:"\u22b2"},"\\trianglelefteq":{font:"ams",group:"rel",replace:"\u22b4"},"\\vDash":{font:"ams",group:"rel",replace:"\u22a8"},"\\Vvdash":{font:"ams",group:"rel",replace:"\u22aa"},"\\smallsmile":{font:"ams",group:"rel",replace:"\u2323"},"\\smallfrown":{font:"ams",group:"rel",replace:"\u2322"},"\\bumpeq":{font:"ams",group:"rel",replace:"\u224f"},"\\Bumpeq":{font:"ams",group:"rel",replace:"\u224e"},"\\geqq":{font:"ams",group:"rel",replace:"\u2267"},"\\geqslant":{font:"ams",group:"rel",replace:"\u2a7e"},"\\eqslantgtr":{font:"ams",group:"rel",replace:"\u2a96"},"\\gtrsim":{font:"ams",group:"rel",replace:"\u2273"},"\\gtrapprox":{font:"ams",group:"rel",replace:"\u2a86"},"\\gtrdot":{font:"ams",group:"bin",replace:"\u22d7"},"\\ggg":{font:"ams",group:"rel",replace:"\u22d9"},"\\gtrless":{font:"ams",group:"rel",replace:"\u2277"},"\\gtreqless":{font:"ams",group:"rel",replace:"\u22db"},"\\gtreqqless":{font:"ams",group:"rel",replace:"\u2a8c"},"\\eqcirc":{font:"ams",group:"rel",replace:"\u2256"},"\\circeq":{font:"ams",group:"rel",replace:"\u2257"},"\\triangleq":{font:"ams",group:"rel",replace:"\u225c"},"\\thicksim":{font:"ams",group:"rel",replace:"\u223c"},"\\thickapprox":{font:"ams",group:"rel",replace:"\u2248"},"\\supseteqq":{font:"ams",group:"rel",replace:"\u2ac6"},"\\Supset":{font:"ams",group:"rel",replace:"\u22d1"},"\\sqsupset":{font:"ams",group:"rel",replace:"\u2290"},"\\succcurlyeq":{font:"ams",group:"rel",replace:"\u227d"},"\\curlyeqsucc":{font:"ams",group:"rel",replace:"\u22df"},"\\succsim":{font:"ams",group:"rel",replace:"\u227f"},"\\succapprox":{font:"ams",group:"rel",replace:"\u2ab8"},"\\vartriangleright":{font:"ams",group:"rel",replace:"\u22b3"},"\\trianglerighteq":{font:"ams",group:"rel",replace:"\u22b5"},"\\Vdash":{font:"ams",group:"rel",replace:"\u22a9"},"\\shortmid":{font:"ams",group:"rel",replace:"\u2223"},"\\shortparallel":{font:"ams",group:"rel",replace:"\u2225"},"\\between":{font:"ams",group:"rel",replace:"\u226c"},"\\pitchfork":{font:"ams",group:"rel",replace:"\u22d4"},"\\varpropto":{font:"ams",group:"rel",replace:"\u221d"},"\\blacktriangleleft":{font:"ams",group:"rel",replace:"\u25c0"},"\\therefore":{font:"ams",group:"rel",replace:"\u2234"},"\\backepsilon":{font:"ams",group:"rel",replace:"\u220d"},"\\blacktriangleright":{font:"ams",group:"rel",replace:"\u25b6"},"\\because":{font:"ams",group:"rel",replace:"\u2235"},"\\llless":{font:"ams",group:"rel",replace:"\u22d8"},"\\gggtr":{font:"ams",group:"rel",replace:"\u22d9"},"\\lhd":{font:"ams",group:"bin",replace:"\u22b2"},"\\rhd":{font:"ams",group:"bin",replace:"\u22b3"},"\\eqsim":{font:"ams",group:"rel",replace:"\u2242"},"\\Join":{font:"main",group:"rel",replace:"\u22c8"},"\\Doteq":{font:"ams",group:"rel",replace:"\u2251"},"\\dotplus":{font:"ams",group:"bin",replace:"\u2214"},"\\smallsetminus":{font:"ams",group:"bin",replace:"\u2216"},"\\Cap":{font:"ams",group:"bin",replace:"\u22d2"},"\\Cup":{font:"ams",group:"bin",replace:"\u22d3"},"\\doublebarwedge":{font:"ams",group:"bin",replace:"\u2a5e"},"\\boxminus":{font:"ams",group:"bin",replace:"\u229f"},"\\boxplus":{font:"ams",group:"bin",replace:"\u229e"},"\\divideontimes":{font:"ams",group:"bin",replace:"\u22c7"},"\\ltimes":{font:"ams",group:"bin",replace:"\u22c9"},"\\rtimes":{font:"ams",group:"bin",replace:"\u22ca"},"\\leftthreetimes":{font:"ams",group:"bin",replace:"\u22cb"},"\\rightthreetimes":{font:"ams",group:"bin",replace:"\u22cc"},"\\curlywedge":{font:"ams",group:"bin",replace:"\u22cf"},"\\curlyvee":{font:"ams",group:"bin",replace:"\u22ce"},"\\circleddash":{font:"ams",group:"bin",replace:"\u229d"},"\\circledast":{font:"ams",group:"bin",replace:"\u229b"},"\\centerdot":{font:"ams",group:"bin",replace:"\u22c5"},"\\intercal":{font:"ams",group:"bin",replace:"\u22ba"},"\\doublecap":{font:"ams",group:"bin",replace:"\u22d2"},"\\doublecup":{font:"ams",group:"bin",replace:"\u22d3"},"\\boxtimes":{font:"ams",group:"bin",replace:"\u22a0"},"\\dashrightarrow":{font:"ams",group:"rel",replace:"\u21e2"},"\\dashleftarrow":{font:"ams",group:"rel",replace:"\u21e0"},"\\leftleftarrows":{font:"ams",group:"rel",replace:"\u21c7"},"\\leftrightarrows":{font:"ams",group:"rel",replace:"\u21c6"},"\\Lleftarrow":{font:"ams",group:"rel",replace:"\u21da"},"\\twoheadleftarrow":{font:"ams",group:"rel",replace:"\u219e"},"\\leftarrowtail":{font:"ams",group:"rel",replace:"\u21a2"},"\\looparrowleft":{font:"ams",group:"rel",replace:"\u21ab"},"\\leftrightharpoons":{font:"ams",group:"rel",replace:"\u21cb"},"\\curvearrowleft":{font:"ams",group:"rel",replace:"\u21b6"},"\\circlearrowleft":{font:"ams",group:"rel",replace:"\u21ba"},"\\Lsh":{font:"ams",group:"rel",replace:"\u21b0"},"\\upuparrows":{font:"ams",group:"rel",replace:"\u21c8"},"\\upharpoonleft":{font:"ams",group:"rel",replace:"\u21bf"},"\\downharpoonleft":{font:"ams",group:"rel",replace:"\u21c3"},"\\multimap":{font:"ams",group:"rel",replace:"\u22b8"},"\\leftrightsquigarrow":{font:"ams",group:"rel",replace:"\u21ad"},"\\rightrightarrows":{font:"ams",group:"rel",replace:"\u21c9"},"\\rightleftarrows":{font:"ams",group:"rel",replace:"\u21c4"},"\\twoheadrightarrow":{font:"ams",group:"rel",replace:"\u21a0"},"\\rightarrowtail":{font:"ams",group:"rel",replace:"\u21a3"},"\\looparrowright":{font:"ams",group:"rel",replace:"\u21ac"},"\\curvearrowright":{font:"ams",group:"rel",replace:"\u21b7"},"\\circlearrowright":{font:"ams",group:"rel",replace:"\u21bb"},"\\Rsh":{font:"ams",group:"rel",replace:"\u21b1"},"\\downdownarrows":{font:"ams",group:"rel",replace:"\u21ca"},"\\upharpoonright":{font:"ams",group:"rel",replace:"\u21be"},"\\downharpoonright":{font:"ams",group:"rel",replace:"\u21c2"},"\\rightsquigarrow":{font:"ams",group:"rel",replace:"\u21dd"},"\\leadsto":{font:"ams",group:"rel",replace:"\u21dd"},"\\Rrightarrow":{font:"ams",group:"rel",replace:"\u21db"},"\\restriction":{font:"ams",group:"rel",replace:"\u21be"},"`":{font:"main",group:"textord",replace:"\u2018"},"\\$":{font:"main",group:"textord",replace:"$"},"\\%":{font:"main",group:"textord",replace:"%"},"\\_":{font:"main",group:"textord",replace:"_"},"\\angle":{font:"main",group:"textord",replace:"\u2220"},"\\infty":{font:"main",group:"textord",replace:"\u221e"},"\\prime":{font:"main",group:"textord",replace:"\u2032"},"\\triangle":{font:"main",group:"textord",replace:"\u25b3"},"\\Gamma":{font:"main",group:"textord",replace:"\u0393"},"\\Delta":{font:"main",group:"textord",replace:"\u0394"},"\\Theta":{font:"main",group:"textord",replace:"\u0398"},"\\Lambda":{font:"main",group:"textord",replace:"\u039b"},"\\Xi":{font:"main",group:"textord",replace:"\u039e"},"\\Pi":{font:"main",group:"textord",replace:"\u03a0"},"\\Sigma":{font:"main",group:"textord",replace:"\u03a3"},"\\Upsilon":{font:"main",group:"textord",replace:"\u03a5"},"\\Phi":{font:"main",group:"textord",replace:"\u03a6"},"\\Psi":{font:"main",group:"textord",replace:"\u03a8"},"\\Omega":{font:"main",group:"textord",replace:"\u03a9"},"\\neg":{font:"main",group:"textord",replace:"\xac"},"\\lnot":{font:"main",group:"textord",replace:"\xac"},"\\top":{font:"main",group:"textord",replace:"\u22a4"},"\\bot":{font:"main",group:"textord",replace:"\u22a5"},"\\emptyset":{font:"main",group:"textord",replace:"\u2205"},"\\varnothing":{font:"ams",group:"textord",replace:"\u2205"},"\\alpha":{font:"main",group:"mathord",replace:"\u03b1"},"\\beta":{font:"main",group:"mathord",
replace:"\u03b2"},"\\gamma":{font:"main",group:"mathord",replace:"\u03b3"},"\\delta":{font:"main",group:"mathord",replace:"\u03b4"},"\\epsilon":{font:"main",group:"mathord",replace:"\u03f5"},"\\zeta":{font:"main",group:"mathord",replace:"\u03b6"},"\\eta":{font:"main",group:"mathord",replace:"\u03b7"},"\\theta":{font:"main",group:"mathord",replace:"\u03b8"},"\\iota":{font:"main",group:"mathord",replace:"\u03b9"},"\\kappa":{font:"main",group:"mathord",replace:"\u03ba"},"\\lambda":{font:"main",group:"mathord",replace:"\u03bb"},"\\mu":{font:"main",group:"mathord",replace:"\u03bc"},"\\nu":{font:"main",group:"mathord",replace:"\u03bd"},"\\xi":{font:"main",group:"mathord",replace:"\u03be"},"\\omicron":{font:"main",group:"mathord",replace:"o"},"\\pi":{font:"main",group:"mathord",replace:"\u03c0"},"\\rho":{font:"main",group:"mathord",replace:"\u03c1"},"\\sigma":{font:"main",group:"mathord",replace:"\u03c3"},"\\tau":{font:"main",group:"mathord",replace:"\u03c4"},"\\upsilon":{font:"main",group:"mathord",replace:"\u03c5"},"\\phi":{font:"main",group:"mathord",replace:"\u03d5"},"\\chi":{font:"main",group:"mathord",replace:"\u03c7"},"\\psi":{font:"main",group:"mathord",replace:"\u03c8"},"\\omega":{font:"main",group:"mathord",replace:"\u03c9"},"\\varepsilon":{font:"main",group:"mathord",replace:"\u03b5"},"\\vartheta":{font:"main",group:"mathord",replace:"\u03d1"},"\\varpi":{font:"main",group:"mathord",replace:"\u03d6"},"\\varrho":{font:"main",group:"mathord",replace:"\u03f1"},"\\varsigma":{font:"main",group:"mathord",replace:"\u03c2"},"\\varphi":{font:"main",group:"mathord",replace:"\u03c6"},"*":{font:"main",group:"bin",replace:"\u2217"},"+":{font:"main",group:"bin"},"-":{font:"main",group:"bin",replace:"\u2212"},"\\cdot":{font:"main",group:"bin",replace:"\u22c5"},"\\circ":{font:"main",group:"bin",replace:"\u2218"},"\\div":{font:"main",group:"bin",replace:"\xf7"},"\\pm":{font:"main",group:"bin",replace:"\xb1"},"\\times":{font:"main",group:"bin",replace:"\xd7"},"\\cap":{font:"main",group:"bin",replace:"\u2229"},"\\cup":{font:"main",group:"bin",replace:"\u222a"},"\\setminus":{font:"main",group:"bin",replace:"\u2216"},"\\land":{font:"main",group:"bin",replace:"\u2227"},"\\lor":{font:"main",group:"bin",replace:"\u2228"},"\\wedge":{font:"main",group:"bin",replace:"\u2227"},"\\vee":{font:"main",group:"bin",replace:"\u2228"},"\\surd":{font:"main",group:"textord",replace:"\u221a"},"(":{font:"main",group:"open"},"[":{font:"main",group:"open"},"\\langle":{font:"main",group:"open",replace:"\u27e8"},"\\lvert":{font:"main",group:"open",replace:"\u2223"},"\\lVert":{font:"main",group:"open",replace:"\u2225"},")":{font:"main",group:"close"},"]":{font:"main",group:"close"},"?":{font:"main",group:"close"},"!":{font:"main",group:"close"},"\\rangle":{font:"main",group:"close",replace:"\u27e9"},"\\rvert":{font:"main",group:"close",replace:"\u2223"},"\\rVert":{font:"main",group:"close",replace:"\u2225"},"=":{font:"main",group:"rel"},"<":{font:"main",group:"rel"},">":{font:"main",group:"rel"},":":{font:"main",group:"rel"},"\\approx":{font:"main",group:"rel",replace:"\u2248"},"\\cong":{font:"main",group:"rel",replace:"\u2245"},"\\ge":{font:"main",group:"rel",replace:"\u2265"},"\\geq":{font:"main",group:"rel",replace:"\u2265"},"\\gets":{font:"main",group:"rel",replace:"\u2190"},"\\in":{font:"main",group:"rel",replace:"\u2208"},"\\notin":{font:"main",group:"rel",replace:"\u2209"},"\\subset":{font:"main",group:"rel",replace:"\u2282"},"\\supset":{font:"main",group:"rel",replace:"\u2283"},"\\subseteq":{font:"main",group:"rel",replace:"\u2286"},"\\supseteq":{font:"main",group:"rel",replace:"\u2287"},"\\nsubseteq":{font:"ams",group:"rel",replace:"\u2288"},"\\nsupseteq":{font:"ams",group:"rel",replace:"\u2289"},"\\models":{font:"main",group:"rel",replace:"\u22a8"},"\\leftarrow":{font:"main",group:"rel",replace:"\u2190"},"\\le":{font:"main",group:"rel",replace:"\u2264"},"\\leq":{font:"main",group:"rel",replace:"\u2264"},"\\ne":{font:"main",group:"rel",replace:"\u2260"},"\\neq":{font:"main",group:"rel",replace:"\u2260"},"\\rightarrow":{font:"main",group:"rel",replace:"\u2192"},"\\to":{font:"main",group:"rel",replace:"\u2192"},"\\ngeq":{font:"ams",group:"rel",replace:"\u2271"},"\\nleq":{font:"ams",group:"rel",replace:"\u2270"},"\\!":{font:"main",group:"spacing"},"\\ ":{font:"main",group:"spacing",replace:"\xa0"},"~":{font:"main",group:"spacing",replace:"\xa0"},"\\,":{font:"main",group:"spacing"},"\\:":{font:"main",group:"spacing"},"\\;":{font:"main",group:"spacing"},"\\enspace":{font:"main",group:"spacing"},"\\qquad":{font:"main",group:"spacing"},"\\quad":{font:"main",group:"spacing"},"\\space":{font:"main",group:"spacing",replace:"\xa0"},",":{font:"main",group:"punct"},";":{font:"main",group:"punct"},"\\colon":{font:"main",group:"punct",replace:":"},"\\barwedge":{font:"ams",group:"bin",replace:"\u22bc"},"\\veebar":{font:"ams",group:"bin",replace:"\u22bb"},"\\odot":{font:"main",group:"bin",replace:"\u2299"},"\\oplus":{font:"main",group:"bin",replace:"\u2295"},"\\otimes":{font:"main",group:"bin",replace:"\u2297"},"\\partial":{font:"main",group:"textord",replace:"\u2202"},"\\oslash":{font:"main",group:"bin",replace:"\u2298"},"\\circledcirc":{font:"ams",group:"bin",replace:"\u229a"},"\\boxdot":{font:"ams",group:"bin",replace:"\u22a1"},"\\bigtriangleup":{font:"main",group:"bin",replace:"\u25b3"},"\\bigtriangledown":{font:"main",group:"bin",replace:"\u25bd"},"\\dagger":{font:"main",group:"bin",replace:"\u2020"},"\\diamond":{font:"main",group:"bin",replace:"\u22c4"},"\\star":{font:"main",group:"bin",replace:"\u22c6"},"\\triangleleft":{font:"main",group:"bin",replace:"\u25c3"},"\\triangleright":{font:"main",group:"bin",replace:"\u25b9"},"\\{":{font:"main",group:"open",replace:"{"},"\\}":{font:"main",group:"close",replace:"}"},"\\lbrace":{font:"main",group:"open",replace:"{"},"\\rbrace":{font:"main",group:"close",replace:"}"},"\\lbrack":{font:"main",group:"open",replace:"["},"\\rbrack":{font:"main",group:"close",replace:"]"},"\\lfloor":{font:"main",group:"open",replace:"\u230a"},"\\rfloor":{font:"main",group:"close",replace:"\u230b"},"\\lceil":{font:"main",group:"open",replace:"\u2308"},"\\rceil":{font:"main",group:"close",replace:"\u2309"},"\\backslash":{font:"main",group:"textord",replace:"\\"},"|":{font:"main",group:"textord",replace:"\u2223"},"\\vert":{font:"main",group:"textord",replace:"\u2223"},"\\|":{font:"main",group:"textord",replace:"\u2225"},"\\Vert":{font:"main",group:"textord",replace:"\u2225"},"\\uparrow":{font:"main",group:"rel",replace:"\u2191"},"\\Uparrow":{font:"main",group:"rel",replace:"\u21d1"},"\\downarrow":{font:"main",group:"rel",replace:"\u2193"},"\\Downarrow":{font:"main",group:"rel",replace:"\u21d3"},"\\updownarrow":{font:"main",group:"rel",replace:"\u2195"},"\\Updownarrow":{font:"main",group:"rel",replace:"\u21d5"},"\\coprod":{font:"math",group:"op",replace:"\u2210"},"\\bigvee":{font:"math",group:"op",replace:"\u22c1"},"\\bigwedge":{font:"math",group:"op",replace:"\u22c0"},"\\biguplus":{font:"math",group:"op",replace:"\u2a04"},"\\bigcap":{font:"math",group:"op",replace:"\u22c2"},"\\bigcup":{font:"math",group:"op",replace:"\u22c3"},"\\int":{font:"math",group:"op",replace:"\u222b"},"\\intop":{font:"math",group:"op",replace:"\u222b"},"\\iint":{font:"math",group:"op",replace:"\u222c"},"\\iiint":{font:"math",group:"op",replace:"\u222d"},"\\prod":{font:"math",group:"op",replace:"\u220f"},"\\sum":{font:"math",group:"op",replace:"\u2211"},"\\bigotimes":{font:"math",group:"op",replace:"\u2a02"},"\\bigoplus":{font:"math",group:"op",replace:"\u2a01"},"\\bigodot":{font:"math",group:"op",replace:"\u2a00"},"\\oint":{font:"math",group:"op",replace:"\u222e"},"\\bigsqcup":{font:"math",group:"op",replace:"\u2a06"},"\\smallint":{font:"math",group:"op",replace:"\u222b"},"\\ldots":{font:"main",group:"inner",replace:"\u2026"},"\\cdots":{font:"main",group:"inner",replace:"\u22ef"},"\\ddots":{font:"main",group:"inner",replace:"\u22f1"},"\\vdots":{font:"main",group:"textord",replace:"\u22ee"},"\\acute":{font:"main",group:"accent",replace:"\xb4"},"\\grave":{font:"main",group:"accent",replace:"`"},"\\ddot":{font:"main",group:"accent",replace:"\xa8"},"\\tilde":{font:"main",group:"accent",replace:"~"},"\\bar":{font:"main",group:"accent",replace:"\xaf"},"\\breve":{font:"main",group:"accent",replace:"\u02d8"},"\\check":{font:"main",group:"accent",replace:"\u02c7"},"\\hat":{font:"main",group:"accent",replace:"^"},"\\vec":{font:"main",group:"accent",replace:"\u20d7"},"\\dot":{font:"main",group:"accent",replace:"\u02d9"},"\\imath":{font:"main",group:"mathord",replace:"\u0131"},"\\jmath":{font:"main",group:"mathord",replace:"\u0237"}},text:{"\\ ":{font:"main",group:"spacing",replace:"\xa0"}," ":{font:"main",group:"spacing",replace:"\xa0"},"~":{font:"main",group:"spacing",replace:"\xa0"}}};var a='0123456789/@."';for(var r=0;r<a.length;r++){var l=a.charAt(r);h.math[l]={font:"main",group:"textord"}}var s="0123456789`!@*()-=+[]'\";:?/.,";for(var r=0;r<s.length;r++){var l=s.charAt(r);h.text[l]={font:"main",group:"textord"}}var p="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(var r=0;r<p.length;r++){var l=p.charAt(r);h.math[l]={font:"main",group:"mathord"};h.text[l]={font:"main",group:"textord"}}t.exports=h},{}],23:[function(e,t,i){var h=Array.prototype.indexOf;var a=function(e,t){if(e==null){return-1}if(h&&e.indexOf===h){return e.indexOf(t)}var i=0,a=e.length;for(;i<a;i++){if(e[i]===t){return i}}return-1};var r=function(e,t){return a(e,t)!==-1};var l=function(e,t){return e===undefined?t:e};var s=/([A-Z])/g;var p=function(e){return e.replace(s,"-$1").toLowerCase()};var c={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"};var n=/[&><"']/g;function o(e){return c[e]}function g(e){return(""+e).replace(n,o)}var d;if(typeof document!=="undefined"){var w=document.createElement("span");if("textContent"in w){d=function(e,t){e.textContent=t}}else{d=function(e,t){e.innerText=t}}}function u(e){d(e,"")}t.exports={contains:r,deflt:l,escape:g,hyphenate:p,indexOf:a,setTextContent:d,clearNode:u}},{}]},{},[1])(1)});

/*!
Deck JS - deck.katek.js
Copyright (c) 2015 Rémi Emonet,
Formatting "latex" maths using the katek library (lighter than mathjax)
*/

/*
This module provides a support for latex equation syntax.
http://khan.github.io/KaTeX/
*/

(function($, deck, undefined) {
    var $d = $(document);
    var may = function(f) {return f ? f : function() {}};
    
    $d.bind('deck.init', function() {
        var container = $[deck]('getContainer');
        $('.latex', container).each(function() {
            var it = this;
            var v = $(it).text();
            v = "\\displaystyle "+v+"";
            //console.log(v);
            katex.render(v, it, {breakOnUnsupportedCmds: false});
        });
    });
})(jQuery, 'deck');

/*!
Deck JS - deck.clone
Copyright (c) 2011-2014 Rémi Emonet, original version from Rémi BARRAQUAND
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
            cloneNotesTarget: '.notes-target'
        },
        classes: {
            isClone: 'is-clone',
            hasClones: 'has-clones',
            pointerClick: 'pointer-click'
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
            var d = function() {return $('<div/>');}
            d().addClass("clonepointer scale-on-click").append(
                d().attr("style", "border: 2px solid red; border-radius: 50%; z-index:10;"
                         +"margin: -11px 0 0 -11px; width:20px; height:20px; opacity: .5;")
                ).appendTo(container);
            d().addClass("clonepointer scale-on-click").append(
                d().attr("style", "border: 2px solid red; border-radius: 50%; z-index:10;"
                         +"margin: -16px 0 0 -16px; width:30px; height:30px;")
                ).appendTo(container);
            d().addClass(opts.selectors.cloneNotesTarget.replace(/\./, ''))
                .appendTo(container);
        }

        $(opts.selectors.clonepointer).hide();

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
                    if (e.ctrlKey) return; // do not trigger on Ctrl+C (by default)
                    $[deck]('addClone');
                    window.___iscloner___ = true;
                    e.preventDefault();
                }
            });
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
      if ($(options.selectors.gotoForm).size() > 0 && options.alert.goto) {
        alert("'options.snippets.goto' is true but a "+options.selectors.gotoForm+" has been found."
              +"\nThis might cause interaction glitches."
              +"\n"
              +"\nSuggestion: remove your html snippet or pass the {snippets: {goto: false}} option."
             );
      }
      $('<form/>').addClass('goto-form').attr('action', '.').attr('method', 'get')
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
*/

(function($, deck, undefined) {
    var $d = $(document);
    // undo the defaults (to be sure jquery behaves properly when overriding it)
    $.extend(true, $[deck].defaults, { keys: {next:null, previous:null}});
    // and go on
    $.extend(true, $[deck].defaults, {
        selectors: {
            subslidesToNotify: ".slide,.onshowtoplevel"
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
    $d.bind('deck.init', function() {
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
    });
    // When jumping (not steping), we will init the subslides (in case they are animations), in a backward order, and then fast forward necessary animations
    var bigJump = function(from, to) {
        var direction = "forward";
        if (from > to){
            direction = "reverse";
        }
        var opts = $[deck]('getOptions');
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
            $canvas = $("<div />").attr({
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
                        var px = function (str) {return str.replace("px", "")}
                        var aa = $($svg.root());
                        aa.attr('width', '100%');
                        aa.attr('height', '100%');
                        if (aa.attr('viewBox') == undefined) {
                            if (w==undefined || h==undefined) {
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
                                var to = "0 0 " + px(w) + " " + px(h);
                                $svg.root().setAttribute("viewBox", to);
                                aa.attr("svgViewBox", to);
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
Copyright (c) 2013-2014 Rémi Emonet
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
            var d = function() {return $('<div/>');}
            var divTK = d().addClass("timekeeper timekeeper-logs-toggle");
            divTK.append(d().addClass("timekeeper-local-relative-time"));
            divTK.append(d().addClass("timekeeper-time"));
            divTK.append(d().addClass("timekeeper-relative-time"));
            divTK.append(d().addClass("timekeeper-clear"));
            divTK.append(d().addClass("timekeeper-bang"));
            divTK.appendTo(container);
            var divLog = d().addClass("timekeeper-logs");
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
        var formatTime = function(t) {
            var min = parseInt(t / 1000 / 60);
            var sec = parseInt(t / 1000 - 60 * min);
            if (min > 60) {
                var hours = parseInt(t / 1000 / 60 / 60);
                min = parseInt(t / 1000 / 60 - 60 * hours);
                return pad("00", hours) +":"+ pad("00", min) + ":" + pad("00", sec)
            } else {
                return pad("00", min) + ":" + pad("00", sec)
            }
        }
        var clearStorage = function(what) {
            // TODO archive
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
            var time = now.toString()
            var localBase = getDateOrSet(opts.localStorage.timekeeperLocalBase, now);
            var base = getDateOrSet(opts.localStorage.timekeeperBase, now);
            var db = (now - localBase)/1000;
            var dcb = (now - base)/1000;
            var dbtime = formatTime(now - localBase);
            var dcbtime = formatTime(now - base);
            var log = time.replace(/GMT.*/, "") + " " + what + " " + dcb + " " + db + " " + dcbtime + " " + dbtime;
            
            var data = localStorage.getItem(opts.localStorage.timekeeperLogs);
            data = log + "\n" + data;
            localStorage.setItem(opts.localStorage.timekeeperLogs, data);
            $(opts.selectors.timekeeperLogsPre).html(data);
        }


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


/* CodeMirror - Minified & Bundled
   Generated on 8/25/2015 with http://codemirror.net/doc/compress.html
   Version: HEAD

   CodeMirror Library:
   - codemirror.js
   Modes:
   - clike.js
   - python.js
   - shell.js
   Add-ons:
   - active-line.js
 */

!function(a){if("object"==typeof exports&&"object"==typeof module)module.exports=a();else{if("function"==typeof define&&define.amd)return define([],a);this.CodeMirror=a()}}(function(){"use strict";function v(a,b){if(!(this instanceof v))return new v(a,b);this.options=b=b?hh(b):{},hh(Ae,b,!1),I(b);var c=b.value;"string"==typeof c&&(c=new bg(c,b.mode,null,b.lineSeparator)),this.doc=c;var g=new v.inputStyles[b.inputStyle](this),h=this.display=new w(a,c,g);h.wrapper.CodeMirror=this,E(this),C(this),b.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),b.autofocus&&!n&&h.input.focus(),M(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,selectingText:!1,draggingText:!1,highlight:new Yg,keySeq:null,specialChars:null};var i=this;d&&11>e&&setTimeout(function(){i.display.input.reset(!0)},20),pd(this),Bh(),Vc(this),this.curOp.forceUpdate=!0,fg(this,c),b.autofocus&&!n||i.hasFocus()?setTimeout(ih(Zd,this),20):$d(this);for(var j in Be)Be.hasOwnProperty(j)&&Be[j](this,b[j],De);R(this),b.finishInit&&b.finishInit(this);for(var k=0;k<He.length;++k)He[k](this);Xc(this),f&&b.lineWrapping&&"optimizelegibility"==getComputedStyle(h.lineDiv).textRendering&&(h.lineDiv.style.textRendering="auto")}function w(b,c,g){var h=this;this.input=g,h.scrollbarFiller=ph("div",null,"CodeMirror-scrollbar-filler"),h.scrollbarFiller.setAttribute("cm-not-content","true"),h.gutterFiller=ph("div",null,"CodeMirror-gutter-filler"),h.gutterFiller.setAttribute("cm-not-content","true"),h.lineDiv=ph("div",null,"CodeMirror-code"),h.selectionDiv=ph("div",null,null,"position: relative; z-index: 1"),h.cursorDiv=ph("div",null,"CodeMirror-cursors"),h.measure=ph("div",null,"CodeMirror-measure"),h.lineMeasure=ph("div",null,"CodeMirror-measure"),h.lineSpace=ph("div",[h.measure,h.lineMeasure,h.selectionDiv,h.cursorDiv,h.lineDiv],null,"position: relative; outline: none"),h.mover=ph("div",[ph("div",[h.lineSpace],"CodeMirror-lines")],null,"position: relative"),h.sizer=ph("div",[h.mover],"CodeMirror-sizer"),h.sizerWidth=null,h.heightForcer=ph("div",null,null,"position: absolute; height: "+Tg+"px; width: 1px;"),h.gutters=ph("div",null,"CodeMirror-gutters"),h.lineGutter=null,h.scroller=ph("div",[h.sizer,h.heightForcer,h.gutters],"CodeMirror-scroll"),h.scroller.setAttribute("tabIndex","-1"),h.wrapper=ph("div",[h.scrollbarFiller,h.gutterFiller,h.scroller],"CodeMirror"),d&&8>e&&(h.gutters.style.zIndex=-1,h.scroller.style.paddingRight=0),f||a&&n||(h.scroller.draggable=!0),b&&(b.appendChild?b.appendChild(h.wrapper):b(h.wrapper)),h.viewFrom=h.viewTo=c.first,h.reportedViewFrom=h.reportedViewTo=c.first,h.view=[],h.renderedView=null,h.externalMeasured=null,h.viewOffset=0,h.lastWrapHeight=h.lastWrapWidth=0,h.updateLineNumbers=null,h.nativeBarWidth=h.barHeight=h.barWidth=0,h.scrollbarsClipped=!1,h.lineNumWidth=h.lineNumInnerWidth=h.lineNumChars=null,h.alignWidgets=!1,h.cachedCharWidth=h.cachedTextHeight=h.cachedPaddingH=null,h.maxLine=null,h.maxLineLength=0,h.maxLineChanged=!1,h.wheelDX=h.wheelDY=h.wheelStartX=h.wheelStartY=null,h.shift=!1,h.selForContextMenu=null,h.activeTouch=null,g.init(h)}function x(a){a.doc.mode=v.getMode(a.options,a.doc.modeOption),y(a)}function y(a){a.doc.iter(function(a){a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null)}),a.doc.frontier=a.doc.first,ic(a,100),a.state.modeGen++,a.curOp&&id(a)}function z(a){a.options.lineWrapping?(xh(a.display.wrapper,"CodeMirror-wrap"),a.display.sizer.style.minWidth="",a.display.sizerWidth=null):(wh(a.display.wrapper,"CodeMirror-wrap"),H(a)),B(a),id(a),Fc(a),setTimeout(function(){N(a)},100)}function A(a){var b=Rc(a.display),c=a.options.lineWrapping,d=c&&Math.max(5,a.display.scroller.clientWidth/Sc(a.display)-3);return function(e){if(xf(a.doc,e))return 0;var f=0;if(e.widgets)for(var g=0;g<e.widgets.length;g++)e.widgets[g].height&&(f+=e.widgets[g].height);return c?f+(Math.ceil(e.text.length/d)||1)*b:f+b}}function B(a){var b=a.doc,c=A(a);b.iter(function(a){var b=c(a);b!=a.height&&jg(a,b)})}function C(a){a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-"),Fc(a)}function D(a){E(a),id(a),setTimeout(function(){Q(a)},20)}function E(a){var b=a.display.gutters,c=a.options.gutters;rh(b);for(var d=0;d<c.length;++d){var e=c[d],f=b.appendChild(ph("div",null,"CodeMirror-gutter "+e));"CodeMirror-linenumbers"==e&&(a.display.lineGutter=f,f.style.width=(a.display.lineNumWidth||1)+"px")}b.style.display=d?"":"none",F(a)}function F(a){var b=a.display.gutters.offsetWidth;a.display.sizer.style.marginLeft=b+"px"}function G(a){if(0==a.height)return 0;for(var c,b=a.text.length,d=a;c=qf(d);){var e=c.find(0,!0);d=e.from.line,b+=e.from.ch-e.to.ch}for(d=a;c=rf(d);){var e=c.find(0,!0);b-=d.text.length-e.from.ch,d=e.to.line,b+=d.text.length-e.to.ch}return b}function H(a){var b=a.display,c=a.doc;b.maxLine=gg(c,c.first),b.maxLineLength=G(b.maxLine),b.maxLineChanged=!0,c.iter(function(a){var c=G(a);c>b.maxLineLength&&(b.maxLineLength=c,b.maxLine=a)})}function I(a){var b=dh(a.gutters,"CodeMirror-linenumbers");-1==b&&a.lineNumbers?a.gutters=a.gutters.concat(["CodeMirror-linenumbers"]):b>-1&&!a.lineNumbers&&(a.gutters=a.gutters.slice(0),a.gutters.splice(b,1))}function J(a){var b=a.display,c=b.gutters.offsetWidth,d=Math.round(a.doc.height+nc(a.display));return{clientHeight:b.scroller.clientHeight,viewHeight:b.wrapper.clientHeight,scrollWidth:b.scroller.scrollWidth,clientWidth:b.scroller.clientWidth,viewWidth:b.wrapper.clientWidth,barLeft:a.options.fixedGutter?c:0,docHeight:d,scrollHeight:d+pc(a)+b.barHeight,nativeBarWidth:b.nativeBarWidth,gutterWidth:c}}function K(a,b,c){this.cm=c;var f=this.vert=ph("div",[ph("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),g=this.horiz=ph("div",[ph("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");a(f),a(g),Jg(f,"scroll",function(){f.clientHeight&&b(f.scrollTop,"vertical")}),Jg(g,"scroll",function(){g.clientWidth&&b(g.scrollLeft,"horizontal")}),this.checkedOverlay=!1,d&&8>e&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}function L(){}function M(a){a.display.scrollbars&&(a.display.scrollbars.clear(),a.display.scrollbars.addClass&&wh(a.display.wrapper,a.display.scrollbars.addClass)),a.display.scrollbars=new v.scrollbarModel[a.options.scrollbarStyle](function(b){a.display.wrapper.insertBefore(b,a.display.scrollbarFiller),Jg(b,"mousedown",function(){a.state.focused&&setTimeout(function(){a.display.input.focus()},0)}),b.setAttribute("cm-not-content","true")},function(b,c){"horizontal"==c?Id(a,b):Hd(a,b)},a),a.display.scrollbars.addClass&&xh(a.display.wrapper,a.display.scrollbars.addClass)}function N(a,b){b||(b=J(a));var c=a.display.barWidth,d=a.display.barHeight;O(a,b);for(var e=0;4>e&&c!=a.display.barWidth||d!=a.display.barHeight;e++)c!=a.display.barWidth&&a.options.lineWrapping&&$(a),O(a,J(a)),c=a.display.barWidth,d=a.display.barHeight}function O(a,b){var c=a.display,d=c.scrollbars.update(b);c.sizer.style.paddingRight=(c.barWidth=d.right)+"px",c.sizer.style.paddingBottom=(c.barHeight=d.bottom)+"px",d.right&&d.bottom?(c.scrollbarFiller.style.display="block",c.scrollbarFiller.style.height=d.bottom+"px",c.scrollbarFiller.style.width=d.right+"px"):c.scrollbarFiller.style.display="",d.bottom&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(c.gutterFiller.style.display="block",c.gutterFiller.style.height=d.bottom+"px",c.gutterFiller.style.width=b.gutterWidth+"px"):c.gutterFiller.style.display=""}function P(a,b,c){var d=c&&null!=c.top?Math.max(0,c.top):a.scroller.scrollTop;d=Math.floor(d-mc(a));var e=c&&null!=c.bottom?c.bottom:d+a.wrapper.clientHeight,f=lg(b,d),g=lg(b,e);if(c&&c.ensure){var h=c.ensure.from.line,i=c.ensure.to.line;f>h?(f=h,g=lg(b,mg(gg(b,h))+a.wrapper.clientHeight)):Math.min(i,b.lastLine())>=g&&(f=lg(b,mg(gg(b,i))-a.wrapper.clientHeight),g=i)}return{from:f,to:Math.max(g,f+1)}}function Q(a){var b=a.display,c=b.view;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var d=T(b)-b.scroller.scrollLeft+a.doc.scrollLeft,e=b.gutters.offsetWidth,f=d+"px",g=0;g<c.length;g++)if(!c[g].hidden){a.options.fixedGutter&&c[g].gutter&&(c[g].gutter.style.left=f);var h=c[g].alignable;if(h)for(var i=0;i<h.length;i++)h[i].style.left=f}a.options.fixedGutter&&(b.gutters.style.left=d+e+"px")}}function R(a){if(!a.options.lineNumbers)return!1;var b=a.doc,c=S(a.options,b.first+b.size-1),d=a.display;if(c.length!=d.lineNumChars){var e=d.measure.appendChild(ph("div",[ph("div",c)],"CodeMirror-linenumber CodeMirror-gutter-elt")),f=e.firstChild.offsetWidth,g=e.offsetWidth-f;return d.lineGutter.style.width="",d.lineNumInnerWidth=Math.max(f,d.lineGutter.offsetWidth-g)+1,d.lineNumWidth=d.lineNumInnerWidth+g,d.lineNumChars=d.lineNumInnerWidth?c.length:-1,d.lineGutter.style.width=d.lineNumWidth+"px",F(a),!0}return!1}function S(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}function T(a){return a.scroller.getBoundingClientRect().left-a.sizer.getBoundingClientRect().left}function U(a,b,c){var d=a.display;this.viewport=b,this.visible=P(d,a.doc,b),this.editorIsHidden=!d.wrapper.offsetWidth,this.wrapperHeight=d.wrapper.clientHeight,this.wrapperWidth=d.wrapper.clientWidth,this.oldDisplayWidth=qc(a),this.force=c,this.dims=ab(a),this.events=[]}function V(a){var b=a.display;!b.scrollbarsClipped&&b.scroller.offsetWidth&&(b.nativeBarWidth=b.scroller.offsetWidth-b.scroller.clientWidth,b.heightForcer.style.height=pc(a)+"px",b.sizer.style.marginBottom=-b.nativeBarWidth+"px",b.sizer.style.borderRightWidth=pc(a)+"px",b.scrollbarsClipped=!0)}function W(a,b){var c=a.display,d=a.doc;if(b.editorIsHidden)return kd(a),!1;if(!b.force&&b.visible.from>=c.viewFrom&&b.visible.to<=c.viewTo&&(null==c.updateLineNumbers||c.updateLineNumbers>=c.viewTo)&&c.renderedView==c.view&&0==od(a))return!1;R(a)&&(kd(a),b.dims=ab(a));var e=d.first+d.size,f=Math.max(b.visible.from-a.options.viewportMargin,d.first),g=Math.min(e,b.visible.to+a.options.viewportMargin);c.viewFrom<f&&f-c.viewFrom<20&&(f=Math.max(d.first,c.viewFrom)),c.viewTo>g&&c.viewTo-g<20&&(g=Math.min(e,c.viewTo)),u&&(f=vf(a.doc,f),g=wf(a.doc,g));var h=f!=c.viewFrom||g!=c.viewTo||c.lastWrapHeight!=b.wrapperHeight||c.lastWrapWidth!=b.wrapperWidth;nd(a,f,g),c.viewOffset=mg(gg(a.doc,c.viewFrom)),a.display.mover.style.top=c.viewOffset+"px";var i=od(a);if(!h&&0==i&&!b.force&&c.renderedView==c.view&&(null==c.updateLineNumbers||c.updateLineNumbers>=c.viewTo))return!1;var j=uh();return i>4&&(c.lineDiv.style.display="none"),bb(a,c.updateLineNumbers,b.dims),i>4&&(c.lineDiv.style.display=""),c.renderedView=c.view,j&&uh()!=j&&j.offsetHeight&&j.focus(),rh(c.cursorDiv),rh(c.selectionDiv),c.gutters.style.height=c.sizer.style.minHeight=0,h&&(c.lastWrapHeight=b.wrapperHeight,c.lastWrapWidth=b.wrapperWidth,ic(a,400)),c.updateLineNumbers=null,!0}function X(a,b){for(var c=b.viewport,d=!0;(d&&a.options.lineWrapping&&b.oldDisplayWidth!=qc(a)||(c&&null!=c.top&&(c={top:Math.min(a.doc.height+nc(a.display)-rc(a),c.top)}),b.visible=P(a.display,a.doc,c),!(b.visible.from>=a.display.viewFrom&&b.visible.to<=a.display.viewTo)))&&W(a,b);d=!1){$(a);var e=J(a);dc(a),Z(a,e),N(a,e)}b.signal(a,"update",a),(a.display.viewFrom!=a.display.reportedViewFrom||a.display.viewTo!=a.display.reportedViewTo)&&(b.signal(a,"viewportChange",a,a.display.viewFrom,a.display.viewTo),a.display.reportedViewFrom=a.display.viewFrom,a.display.reportedViewTo=a.display.viewTo)}function Y(a,b){var c=new U(a,b);if(W(a,c)){$(a),X(a,c);var d=J(a);dc(a),Z(a,d),N(a,d),c.finish()}}function Z(a,b){a.display.sizer.style.minHeight=b.docHeight+"px";var c=b.docHeight+a.display.barHeight;a.display.heightForcer.style.top=c+"px",a.display.gutters.style.height=Math.max(c+pc(a),b.clientHeight)+"px"}function $(a){for(var b=a.display,c=b.lineDiv.offsetTop,f=0;f<b.view.length;f++){var h,g=b.view[f];if(!g.hidden){if(d&&8>e){var i=g.node.offsetTop+g.node.offsetHeight;h=i-c,c=i}else{var j=g.node.getBoundingClientRect();h=j.bottom-j.top}var k=g.line.height-h;if(2>h&&(h=Rc(b)),(k>.001||-.001>k)&&(jg(g.line,h),_(g.line),g.rest))for(var l=0;l<g.rest.length;l++)_(g.rest[l])}}}function _(a){if(a.widgets)for(var b=0;b<a.widgets.length;++b)a.widgets[b].height=a.widgets[b].node.offsetHeight}function ab(a){for(var b=a.display,c={},d={},e=b.gutters.clientLeft,f=b.gutters.firstChild,g=0;f;f=f.nextSibling,++g)c[a.options.gutters[g]]=f.offsetLeft+f.clientLeft+e,d[a.options.gutters[g]]=f.clientWidth;return{fixedPos:T(b),gutterTotalWidth:b.gutters.offsetWidth,gutterLeft:c,gutterWidth:d,wrapperWidth:b.wrapper.clientWidth}}function bb(a,b,c){function i(b){var c=b.nextSibling;return f&&o&&a.display.currentWheelTarget==b?b.style.display="none":b.parentNode.removeChild(b),c}for(var d=a.display,e=a.options.lineNumbers,g=d.lineDiv,h=g.firstChild,j=d.view,k=d.viewFrom,l=0;l<j.length;l++){var m=j[l];if(m.hidden);else if(m.node&&m.node.parentNode==g){for(;h!=m.node;)h=i(h);var p=e&&null!=b&&k>=b&&m.lineNumber;m.changes&&(dh(m.changes,"gutter")>-1&&(p=!1),cb(a,m,k,c)),p&&(rh(m.lineNumber),m.lineNumber.appendChild(document.createTextNode(S(a.options,k)))),h=m.node.nextSibling}else{var n=kb(a,m,k,c);g.insertBefore(n,h)}k+=m.size}for(;h;)h=i(h)}function cb(a,b,c,d){for(var e=0;e<b.changes.length;e++){var f=b.changes[e];"text"==f?gb(a,b):"gutter"==f?ib(a,b,c,d):"class"==f?hb(b):"widget"==f&&jb(a,b,d)}b.changes=null}function db(a){return a.node==a.text&&(a.node=ph("div",null,null,"position: relative"),a.text.parentNode&&a.text.parentNode.replaceChild(a.node,a.text),a.node.appendChild(a.text),d&&8>e&&(a.node.style.zIndex=2)),a.node}function eb(a){var b=a.bgClass?a.bgClass+" "+(a.line.bgClass||""):a.line.bgClass;if(b&&(b+=" CodeMirror-linebackground"),a.background)b?a.background.className=b:(a.background.parentNode.removeChild(a.background),a.background=null);else if(b){var c=db(a);a.background=c.insertBefore(ph("div",null,b),c.firstChild)}}function fb(a,b){var c=a.display.externalMeasured;return c&&c.line==b.line?(a.display.externalMeasured=null,b.measure=c.measure,c.built):Rf(a,b)}function gb(a,b){var c=b.text.className,d=fb(a,b);b.text==b.node&&(b.node=d.pre),b.text.parentNode.replaceChild(d.pre,b.text),b.text=d.pre,d.bgClass!=b.bgClass||d.textClass!=b.textClass?(b.bgClass=d.bgClass,b.textClass=d.textClass,hb(b)):c&&(b.text.className=c)}function hb(a){eb(a),a.line.wrapClass?db(a).className=a.line.wrapClass:a.node!=a.text&&(a.node.className="");var b=a.textClass?a.textClass+" "+(a.line.textClass||""):a.line.textClass;a.text.className=b||""}function ib(a,b,c,d){if(b.gutter&&(b.node.removeChild(b.gutter),b.gutter=null),b.gutterBackground&&(b.node.removeChild(b.gutterBackground),b.gutterBackground=null),b.line.gutterClass){var e=db(b);b.gutterBackground=ph("div",null,"CodeMirror-gutter-background "+b.line.gutterClass,"left: "+(a.options.fixedGutter?d.fixedPos:-d.gutterTotalWidth)+"px; width: "+d.gutterTotalWidth+"px"),e.insertBefore(b.gutterBackground,b.text)}var f=b.line.gutterMarkers;if(a.options.lineNumbers||f){var e=db(b),g=b.gutter=ph("div",null,"CodeMirror-gutter-wrapper","left: "+(a.options.fixedGutter?d.fixedPos:-d.gutterTotalWidth)+"px");if(a.display.input.setUneditable(g),e.insertBefore(g,b.text),b.line.gutterClass&&(g.className+=" "+b.line.gutterClass),!a.options.lineNumbers||f&&f["CodeMirror-linenumbers"]||(b.lineNumber=g.appendChild(ph("div",S(a.options,c),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+d.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+a.display.lineNumInnerWidth+"px"))),f)for(var h=0;h<a.options.gutters.length;++h){var i=a.options.gutters[h],j=f.hasOwnProperty(i)&&f[i];j&&g.appendChild(ph("div",[j],"CodeMirror-gutter-elt","left: "+d.gutterLeft[i]+"px; width: "+d.gutterWidth[i]+"px"))}}}function jb(a,b,c){b.alignable&&(b.alignable=null);for(var e,d=b.node.firstChild;d;d=e){var e=d.nextSibling;"CodeMirror-linewidget"==d.className&&b.node.removeChild(d)}lb(a,b,c)}function kb(a,b,c,d){var e=fb(a,b);return b.text=b.node=e.pre,e.bgClass&&(b.bgClass=e.bgClass),e.textClass&&(b.textClass=e.textClass),hb(b),ib(a,b,c,d),lb(a,b,d),b.node}function lb(a,b,c){if(mb(a,b.line,b,c,!0),b.rest)for(var d=0;d<b.rest.length;d++)mb(a,b.rest[d],b,c,!1)}function mb(a,b,c,d,e){if(b.widgets)for(var f=db(c),g=0,h=b.widgets;g<h.length;++g){var i=h[g],j=ph("div",[i.node],"CodeMirror-linewidget");i.handleMouseEvents||j.setAttribute("cm-ignore-events","true"),nb(i,j,c,d),a.display.input.setUneditable(j),e&&i.above?f.insertBefore(j,c.gutter||c.text):f.appendChild(j),Ng(i,"redraw")}}function nb(a,b,c,d){if(a.noHScroll){(c.alignable||(c.alignable=[])).push(b);var e=d.wrapperWidth;b.style.left=d.fixedPos+"px",a.coverGutter||(e-=d.gutterTotalWidth,b.style.paddingLeft=d.gutterTotalWidth+"px"),b.style.width=e+"px"}a.coverGutter&&(b.style.zIndex=5,b.style.position="relative",a.noHScroll||(b.style.marginLeft=-d.gutterTotalWidth+"px"))}function qb(a){return ob(a.line,a.ch)}function rb(a,b){return pb(a,b)<0?b:a}function sb(a,b){return pb(a,b)<0?a:b}function tb(a){a.state.focused||(a.display.input.focus(),Zd(a))}function ub(a){return a.options.readOnly||a.doc.cantEdit}function wb(a,b,c,d,e){var f=a.doc;a.display.shift=!1,d||(d=f.sel);var g=a.state.pasteIncoming||"paste"==e,h=f.splitLines(b),i=null;if(g&&d.ranges.length>1)if(vb&&vb.join("\n")==b){if(0==d.ranges.length%vb.length){i=[];for(var j=0;j<vb.length;j++)i.push(f.splitLines(vb[j]))}}else h.length==d.ranges.length&&(i=eh(h,function(a){return[a]}));for(var j=d.ranges.length-1;j>=0;j--){var k=d.ranges[j],l=k.from(),m=k.to();k.empty()&&(c&&c>0?l=ob(l.line,l.ch-c):a.state.overwrite&&!g&&(m=ob(m.line,Math.min(gg(f,m.line).text.length,m.ch+bh(h).length))));var n=a.curOp.updateInput,o={from:l,to:m,text:i?i[j%i.length]:h,origin:e||(g?"paste":a.state.cutIncoming?"cut":"+input")};he(a.doc,o),Ng(a,"inputRead",a,o)}b&&!g&&yb(a,b),te(a),a.curOp.updateInput=n,a.curOp.typing=!0,a.state.pasteIncoming=a.state.cutIncoming=!1}function xb(a,b){var c=a.clipboardData&&a.clipboardData.getData("text/plain");return c?(a.preventDefault(),ub(b)||b.options.disableInput||cd(b,function(){wb(b,c,0,null,"paste")}),!0):void 0}function yb(a,b){if(a.options.electricChars&&a.options.smartIndent)for(var c=a.doc.sel,d=c.ranges.length-1;d>=0;d--){var e=c.ranges[d];if(!(e.head.ch>100||d&&c.ranges[d-1].head.line==e.head.line)){var f=a.getModeAt(e.head),g=!1;if(f.electricChars){for(var h=0;h<f.electricChars.length;h++)if(b.indexOf(f.electricChars.charAt(h))>-1){g=ve(a,e.head.line,"smart");break}}else f.electricInput&&f.electricInput.test(gg(a.doc,e.head.line).text.slice(0,e.head.ch))&&(g=ve(a,e.head.line,"smart"));g&&Ng(a,"electricInput",a,e.head.line)}}}function zb(a){for(var b=[],c=[],d=0;d<a.doc.sel.ranges.length;d++){var e=a.doc.sel.ranges[d].head.line,f={anchor:ob(e,0),head:ob(e+1,0)};c.push(f),b.push(a.getRange(f.anchor,f.head))}return{text:b,ranges:c}}function Ab(a){a.setAttribute("autocorrect","off"),a.setAttribute("autocapitalize","off"),a.setAttribute("spellcheck","false")}function Bb(a){this.cm=a,this.prevInput="",this.pollingFast=!1,this.polling=new Yg,this.inaccurateSelection=!1,this.hasSelection=!1,this.composing=null}function Cb(){var a=ph("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none"),b=ph("div",[a],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return f?a.style.width="1000px":a.setAttribute("wrap","off"),m&&(a.style.border="1px solid black"),Ab(a),b}function Db(a){this.cm=a,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new Yg,this.gracePeriod=!1}function Eb(a,b){var c=wc(a,b.line);if(!c||c.hidden)return null;var d=gg(a.doc,b.line),e=tc(c,d,b.line),f=ng(d),g="left";if(f){var h=Yh(f,b.ch);g=h%2?"right":"left"}var i=Ac(e.map,b.ch,g);return i.offset="right"==i.collapse?i.end:i.start,i}function Fb(a,b){return b&&(a.bad=!0),a}function Gb(a,b,c){var d;if(b==a.display.lineDiv){if(d=a.display.lineDiv.childNodes[c],!d)return Fb(a.clipPos(ob(a.display.viewTo-1)),!0);b=null,c=0}else for(d=b;;d=d.parentNode){if(!d||d==a.display.lineDiv)return null;if(d.parentNode&&d.parentNode==a.display.lineDiv)break}for(var e=0;e<a.display.view.length;e++){var f=a.display.view[e];if(f.node==d)return Hb(f,b,c)}}function Hb(a,b,c){function k(b,c,d){for(var e=-1;e<(j?j.length:0);e++)for(var f=0>e?i.map:j[e],g=0;g<f.length;g+=3){var h=f[g+2];if(h==b||h==c){var k=kg(0>e?a.line:a.rest[e]),l=f[g]+d;return(0>d||h!=b)&&(l=f[g+(d?1:0)]),ob(k,l)}}}var d=a.text.firstChild,e=!1;if(!b||!th(d,b))return Fb(ob(kg(a.line),0),!0);if(b==d&&(e=!0,b=d.childNodes[c],c=0,!b)){var f=a.rest?bh(a.rest):a.line;return Fb(ob(kg(f),f.text.length),e)}var g=3==b.nodeType?b:null,h=b;for(g||1!=b.childNodes.length||3!=b.firstChild.nodeType||(g=b.firstChild,c&&(c=g.nodeValue.length));h.parentNode!=d;)h=h.parentNode;var i=a.measure,j=i.maps,l=k(g,h,c);if(l)return Fb(l,e);for(var m=h.nextSibling,n=g?g.nodeValue.length-c:0;m;m=m.nextSibling){if(l=k(m,m.firstChild,0))return Fb(ob(l.line,l.ch-n),e);n+=m.textContent.length}for(var o=h.previousSibling,n=c;o;o=o.previousSibling){if(l=k(o,o.firstChild,-1))return Fb(ob(l.line,l.ch+n),e);n+=m.textContent.length}}function Ib(a,b,c,d,e){function i(a){return function(b){return b.id==a}}function j(b){if(1==b.nodeType){var c=b.getAttribute("cm-text");if(null!=c)return""==c&&(c=b.textContent.replace(/\u200b/g,"")),f+=c,void 0;var l,k=b.getAttribute("cm-marker");if(k){var m=a.findMarks(ob(d,0),ob(e+1,0),i(+k));return m.length&&(l=m[0].find())&&(f+=hg(a.doc,l.from,l.to).join(h)),void 0}if("false"==b.getAttribute("contenteditable"))return;for(var n=0;n<b.childNodes.length;n++)j(b.childNodes[n]);/^(pre|div|p)$/i.test(b.nodeName)&&(g=!0)}else if(3==b.nodeType){var o=b.nodeValue;if(!o)return;g&&(f+=h,g=!1),f+=o}}for(var f="",g=!1,h=a.doc.lineSeparator();j(b),b!=c;)b=b.nextSibling;return f}function Jb(a,b){this.ranges=a,this.primIndex=b}function Kb(a,b){this.anchor=a,this.head=b}function Lb(a,b){var c=a[b];a.sort(function(a,b){return pb(a.from(),b.from())}),b=dh(a,c);for(var d=1;d<a.length;d++){var e=a[d],f=a[d-1];if(pb(f.to(),e.from())>=0){var g=sb(f.from(),e.from()),h=rb(f.to(),e.to()),i=f.empty()?e.from()==e.head:f.from()==f.head;b>=d&&--b,a.splice(--d,2,new Kb(i?h:g,i?g:h))}}return new Jb(a,b)}function Mb(a,b){return new Jb([new Kb(a,b||a)],0)}function Nb(a,b){return Math.max(a.first,Math.min(b,a.first+a.size-1))}function Ob(a,b){if(b.line<a.first)return ob(a.first,0);var c=a.first+a.size-1;return b.line>c?ob(c,gg(a,c).text.length):Pb(b,gg(a,b.line).text.length)}function Pb(a,b){var c=a.ch;return null==c||c>b?ob(a.line,b):0>c?ob(a.line,0):a}function Qb(a,b){return b>=a.first&&b<a.first+a.size}function Rb(a,b){for(var c=[],d=0;d<b.length;d++)c[d]=Ob(a,b[d]);return c}function Sb(a,b,c,d){if(a.cm&&a.cm.display.shift||a.extend){var e=b.anchor;if(d){var f=pb(c,e)<0;f!=pb(d,e)<0?(e=c,c=d):f!=pb(c,d)<0&&(c=d)}return new Kb(e,c)}return new Kb(d||c,c)}function Tb(a,b,c,d){Zb(a,new Jb([Sb(a,a.sel.primary(),b,c)],0),d)}function Ub(a,b,c){for(var d=[],e=0;e<a.sel.ranges.length;e++)d[e]=Sb(a,a.sel.ranges[e],b[e],null);var f=Lb(d,a.sel.primIndex);Zb(a,f,c)}function Vb(a,b,c,d){var e=a.sel.ranges.slice(0);e[b]=c,Zb(a,Lb(e,a.sel.primIndex),d)}function Wb(a,b,c,d){Zb(a,Mb(b,c),d)}function Xb(a,b){var c={ranges:b.ranges,update:function(b){this.ranges=[];for(var c=0;c<b.length;c++)this.ranges[c]=new Kb(Ob(a,b[c].anchor),Ob(a,b[c].head))}};return Lg(a,"beforeSelectionChange",a,c),a.cm&&Lg(a.cm,"beforeSelectionChange",a.cm,c),c.ranges!=b.ranges?Lb(c.ranges,c.ranges.length-1):b}function Yb(a,b,c){var d=a.history.done,e=bh(d);e&&e.ranges?(d[d.length-1]=b,$b(a,b,c)):Zb(a,b,c)}function Zb(a,b,c){$b(a,b,c),ug(a,a.sel,a.cm?a.cm.curOp.id:0/0,c)}function $b(a,b,c){(Rg(a,"beforeSelectionChange")||a.cm&&Rg(a.cm,"beforeSelectionChange"))&&(b=Xb(a,b));var d=c&&c.bias||(pb(b.primary().head,a.sel.primary().head)<0?-1:1);_b(a,bc(a,b,d,!0)),c&&c.scroll===!1||!a.cm||te(a.cm)}function _b(a,b){b.equals(a.sel)||(a.sel=b,a.cm&&(a.cm.curOp.updateInput=a.cm.curOp.selectionChanged=!0,Qg(a.cm)),Ng(a,"cursorActivity",a))}function ac(a){_b(a,bc(a,a.sel,null,!1),Vg)}function bc(a,b,c,d){for(var e,f=0;f<b.ranges.length;f++){var g=b.ranges[f],h=cc(a,g.anchor,c,d),i=cc(a,g.head,c,d);(e||h!=g.anchor||i!=g.head)&&(e||(e=b.ranges.slice(0,f)),e[f]=new Kb(h,i))}return e?Lb(e,b.primIndex):b}function cc(a,b,c,d){var e=!1,f=b,g=c||1;a.cantEdit=!1;a:for(;;){var h=gg(a,f.line);if(h.markedSpans)for(var i=0;i<h.markedSpans.length;++i){var j=h.markedSpans[i],k=j.marker;if((null==j.from||(k.inclusiveLeft?j.from<=f.ch:j.from<f.ch))&&(null==j.to||(k.inclusiveRight?j.to>=f.ch:j.to>f.ch))){if(d&&(Lg(k,"beforeCursorEnter"),k.explicitlyCleared)){if(h.markedSpans){--i;continue}break}if(!k.atomic)continue;var l=k.find(0>g?-1:1);if(0==pb(l,f)&&(l.ch+=g,l.ch<0?l=l.line>a.first?Ob(a,ob(l.line-1)):null:l.ch>h.text.length&&(l=l.line<a.first+a.size-1?ob(l.line+1,0):null),!l)){if(e)return d?(a.cantEdit=!0,ob(a.first,0)):cc(a,b,c,!0);e=!0,l=b,g=-g}f=l;continue a}}return f}}function dc(a){a.display.input.showSelection(a.display.input.prepareSelection())}function ec(a,b){for(var c=a.doc,d={},e=d.cursors=document.createDocumentFragment(),f=d.selection=document.createDocumentFragment(),g=0;g<c.sel.ranges.length;g++)if(b!==!1||g!=c.sel.primIndex){var h=c.sel.ranges[g],i=h.empty();(i||a.options.showCursorWhenSelecting)&&fc(a,h.head,e),i||gc(a,h,f)}return d}function fc(a,b,c){var d=Lc(a,b,"div",null,null,!a.options.singleCursorHeightPerLine),e=c.appendChild(ph("div","\xa0","CodeMirror-cursor"));if(e.style.left=d.left+"px",e.style.top=d.top+"px",e.style.height=Math.max(0,d.bottom-d.top)*a.options.cursorHeight+"px",d.other){var f=c.appendChild(ph("div","\xa0","CodeMirror-cursor CodeMirror-secondarycursor"));f.style.display="",f.style.left=d.other.left+"px",f.style.top=d.other.top+"px",f.style.height=.85*(d.other.bottom-d.other.top)+"px"}}function gc(a,b,c){function j(a,b,c,d){0>b&&(b=0),b=Math.round(b),d=Math.round(d),f.appendChild(ph("div",null,"CodeMirror-selected","position: absolute; left: "+a+"px; top: "+b+"px; width: "+(null==c?i-a:c)+"px; height: "+(d-b)+"px"))}function k(b,c,d){function m(c,d){return Kc(a,ob(b,c),"div",f,d)}var k,l,f=gg(e,b),g=f.text.length;return Oh(ng(f),c||0,null==d?g:d,function(a,b,e){var n,o,p,f=m(a,"left");if(a==b)n=f,o=p=f.left;else{if(n=m(b-1,"right"),"rtl"==e){var q=f;f=n,n=q}o=f.left,p=n.right}null==c&&0==a&&(o=h),n.top-f.top>3&&(j(o,f.top,null,f.bottom),o=h,f.bottom<n.top&&j(o,f.bottom,null,n.top)),null==d&&b==g&&(p=i),(!k||f.top<k.top||f.top==k.top&&f.left<k.left)&&(k=f),(!l||n.bottom>l.bottom||n.bottom==l.bottom&&n.right>l.right)&&(l=n),h+1>o&&(o=h),j(o,n.top,p-o,n.bottom)}),{start:k,end:l}}var d=a.display,e=a.doc,f=document.createDocumentFragment(),g=oc(a.display),h=g.left,i=Math.max(d.sizerWidth,qc(a)-d.sizer.offsetLeft)-g.right,l=b.from(),m=b.to();if(l.line==m.line)k(l.line,l.ch,m.ch);else{var n=gg(e,l.line),o=gg(e,m.line),p=tf(n)==tf(o),q=k(l.line,l.ch,p?n.text.length+1:null).end,r=k(m.line,p?0:null,m.ch).start;p&&(q.top<r.top-2?(j(q.right,q.top,null,q.bottom),j(h,r.top,r.left,r.bottom)):j(q.right,q.top,r.left-q.right,q.bottom)),q.bottom<r.top&&j(h,q.bottom,null,r.top)}c.appendChild(f)}function hc(a){if(a.state.focused){var b=a.display;clearInterval(b.blinker);var c=!0;b.cursorDiv.style.visibility="",a.options.cursorBlinkRate>0?b.blinker=setInterval(function(){b.cursorDiv.style.visibility=(c=!c)?"":"hidden"},a.options.cursorBlinkRate):a.options.cursorBlinkRate<0&&(b.cursorDiv.style.visibility="hidden")}}function ic(a,b){a.doc.mode.startState&&a.doc.frontier<a.display.viewTo&&a.state.highlight.set(b,ih(jc,a))}function jc(a){var b=a.doc;if(b.frontier<b.first&&(b.frontier=b.first),!(b.frontier>=a.display.viewTo)){var c=+new Date+a.options.workTime,d=Je(b.mode,lc(a,b.frontier)),e=[];b.iter(b.frontier,Math.min(b.first+b.size,a.display.viewTo+500),function(f){if(b.frontier>=a.display.viewFrom){var g=f.styles,h=f.text.length>a.options.maxHighlightLength,i=Lf(a,f,h?Je(b.mode,d):d,!0);f.styles=i.styles;var j=f.styleClasses,k=i.classes;k?f.styleClasses=k:j&&(f.styleClasses=null);for(var l=!g||g.length!=f.styles.length||j!=k&&(!j||!k||j.bgClass!=k.bgClass||j.textClass!=k.textClass),m=0;!l&&m<g.length;++m)l=g[m]!=f.styles[m];l&&e.push(b.frontier),f.stateAfter=h?d:Je(b.mode,d)}else f.text.length<=a.options.maxHighlightLength&&Nf(a,f.text,d),f.stateAfter=0==b.frontier%5?Je(b.mode,d):null;return++b.frontier,+new Date>c?(ic(a,a.options.workDelay),!0):void 0}),e.length&&cd(a,function(){for(var b=0;b<e.length;b++)jd(a,e[b],"text")})}}function kc(a,b,c){for(var d,e,f=a.doc,g=c?-1:b-(a.doc.mode.innerMode?1e3:100),h=b;h>g;--h){if(h<=f.first)return f.first;var i=gg(f,h-1);if(i.stateAfter&&(!c||h<=f.frontier))return h;var j=Zg(i.text,null,a.options.tabSize);(null==e||d>j)&&(e=h-1,d=j)}return e}function lc(a,b,c){var d=a.doc,e=a.display;if(!d.mode.startState)return!0;var f=kc(a,b,c),g=f>d.first&&gg(d,f-1).stateAfter;return g=g?Je(d.mode,g):Ke(d.mode),d.iter(f,b,function(c){Nf(a,c.text,g);var h=f==b-1||0==f%5||f>=e.viewFrom&&f<e.viewTo;c.stateAfter=h?Je(d.mode,g):null,++f}),c&&(d.frontier=f),g}function mc(a){return a.lineSpace.offsetTop}function nc(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function oc(a){if(a.cachedPaddingH)return a.cachedPaddingH;var b=sh(a.measure,ph("pre","x")),c=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle,d={left:parseInt(c.paddingLeft),right:parseInt(c.paddingRight)};return isNaN(d.left)||isNaN(d.right)||(a.cachedPaddingH=d),d}function pc(a){return Tg-a.display.nativeBarWidth}function qc(a){return a.display.scroller.clientWidth-pc(a)-a.display.barWidth}function rc(a){return a.display.scroller.clientHeight-pc(a)-a.display.barHeight}function sc(a,b,c){var d=a.options.lineWrapping,e=d&&qc(a);if(!b.measure.heights||d&&b.measure.width!=e){var f=b.measure.heights=[];if(d){b.measure.width=e;for(var g=b.text.firstChild.getClientRects(),h=0;h<g.length-1;h++){var i=g[h],j=g[h+1];Math.abs(i.bottom-j.bottom)>2&&f.push((i.bottom+j.top)/2-c.top)}}f.push(c.bottom-c.top)}}function tc(a,b,c){if(a.line==b)return{map:a.measure.map,cache:a.measure.cache};for(var d=0;d<a.rest.length;d++)if(a.rest[d]==b)return{map:a.measure.maps[d],cache:a.measure.caches[d]};for(var d=0;d<a.rest.length;d++)if(kg(a.rest[d])>c)return{map:a.measure.maps[d],cache:a.measure.caches[d],before:!0}}function uc(a,b){b=tf(b);var c=kg(b),d=a.display.externalMeasured=new gd(a.doc,b,c);d.lineN=c;var e=d.built=Rf(a,d);return d.text=e.pre,sh(a.display.lineMeasure,e.pre),d}function vc(a,b,c,d){return yc(a,xc(a,b),c,d)}function wc(a,b){if(b>=a.display.viewFrom&&b<a.display.viewTo)return a.display.view[ld(a,b)];var c=a.display.externalMeasured;return c&&b>=c.lineN&&b<c.lineN+c.size?c:void 0}function xc(a,b){var c=kg(b),d=wc(a,c);d&&!d.text?d=null:d&&d.changes&&(cb(a,d,c,ab(a)),a.curOp.forceUpdate=!0),d||(d=uc(a,b));var e=tc(d,b,c);return{line:b,view:d,rect:null,map:e.map,cache:e.cache,before:e.before,hasHeights:!1}}function yc(a,b,c,d,e){b.before&&(c=-1);var g,f=c+(d||"");return b.cache.hasOwnProperty(f)?g=b.cache[f]:(b.rect||(b.rect=b.view.text.getBoundingClientRect()),b.hasHeights||(sc(a,b.view,b.rect),b.hasHeights=!0),g=Bc(a,b,c,d),g.bogus||(b.cache[f]=g)),{left:g.left,right:g.right,top:e?g.rtop:g.top,bottom:e?g.rbottom:g.bottom}}function Ac(a,b,c){for(var d,e,f,g,h=0;h<a.length;h+=3){var i=a[h],j=a[h+1];if(i>b?(e=0,f=1,g="left"):j>b?(e=b-i,f=e+1):(h==a.length-3||b==j&&a[h+3]>b)&&(f=j-i,e=f-1,b>=j&&(g="right")),null!=e){if(d=a[h+2],i==j&&c==(d.insertLeft?"left":"right")&&(g=c),"left"==c&&0==e)for(;h&&a[h-2]==a[h-3]&&a[h-1].insertLeft;)d=a[(h-=3)+2],g="left";if("right"==c&&e==j-i)for(;h<a.length-3&&a[h+3]==a[h+4]&&!a[h+5].insertLeft;)d=a[(h+=3)+2],g="right";break}}return{node:d,start:e,end:f,collapse:g,coverStart:i,coverEnd:j}}function Bc(a,b,c,f){var l,g=Ac(b.map,c,f),h=g.node,i=g.start,j=g.end,k=g.collapse;if(3==h.nodeType){for(var m=0;4>m;m++){for(;i&&oh(b.line.text.charAt(g.coverStart+i));)--i;for(;g.coverStart+j<g.coverEnd&&oh(b.line.text.charAt(g.coverStart+j));)++j;
if(d&&9>e&&0==i&&j==g.coverEnd-g.coverStart)l=h.parentNode.getBoundingClientRect();else if(d&&a.options.lineWrapping){var n=qh(h,i,j).getClientRects();l=n.length?n["right"==f?n.length-1:0]:zc}else l=qh(h,i,j).getBoundingClientRect()||zc;if(l.left||l.right||0==i)break;j=i,i-=1,k="right"}d&&11>e&&(l=Cc(a.display.measure,l))}else{i>0&&(k=f="right");var n;l=a.options.lineWrapping&&(n=h.getClientRects()).length>1?n["right"==f?n.length-1:0]:h.getBoundingClientRect()}if(d&&9>e&&!i&&(!l||!l.left&&!l.right)){var o=h.parentNode.getClientRects()[0];l=o?{left:o.left,right:o.left+Sc(a.display),top:o.top,bottom:o.bottom}:zc}for(var p=l.top-b.rect.top,q=l.bottom-b.rect.top,r=(p+q)/2,s=b.view.measure.heights,m=0;m<s.length-1&&!(r<s[m]);m++);var t=m?s[m-1]:0,u=s[m],v={left:("right"==k?l.right:l.left)-b.rect.left,right:("left"==k?l.left:l.right)-b.rect.left,top:t,bottom:u};return l.left||l.right||(v.bogus=!0),a.options.singleCursorHeightPerLine||(v.rtop=p,v.rbottom=q),v}function Cc(a,b){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!Mh(a))return b;var c=screen.logicalXDPI/screen.deviceXDPI,d=screen.logicalYDPI/screen.deviceYDPI;return{left:b.left*c,right:b.right*c,top:b.top*d,bottom:b.bottom*d}}function Dc(a){if(a.measure&&(a.measure.cache={},a.measure.heights=null,a.rest))for(var b=0;b<a.rest.length;b++)a.measure.caches[b]={}}function Ec(a){a.display.externalMeasure=null,rh(a.display.lineMeasure);for(var b=0;b<a.display.view.length;b++)Dc(a.display.view[b])}function Fc(a){Ec(a),a.display.cachedCharWidth=a.display.cachedTextHeight=a.display.cachedPaddingH=null,a.options.lineWrapping||(a.display.maxLineChanged=!0),a.display.lineNumChars=null}function Gc(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function Hc(){return window.pageYOffset||(document.documentElement||document.body).scrollTop}function Ic(a,b,c,d){if(b.widgets)for(var e=0;e<b.widgets.length;++e)if(b.widgets[e].above){var f=Bf(b.widgets[e]);c.top+=f,c.bottom+=f}if("line"==d)return c;d||(d="local");var g=mg(b);if("local"==d?g+=mc(a.display):g-=a.display.viewOffset,"page"==d||"window"==d){var h=a.display.lineSpace.getBoundingClientRect();g+=h.top+("window"==d?0:Hc());var i=h.left+("window"==d?0:Gc());c.left+=i,c.right+=i}return c.top+=g,c.bottom+=g,c}function Jc(a,b,c){if("div"==c)return b;var d=b.left,e=b.top;if("page"==c)d-=Gc(),e-=Hc();else if("local"==c||!c){var f=a.display.sizer.getBoundingClientRect();d+=f.left,e+=f.top}var g=a.display.lineSpace.getBoundingClientRect();return{left:d-g.left,top:e-g.top}}function Kc(a,b,c,d,e){return d||(d=gg(a.doc,b.line)),Ic(a,d,vc(a,d,b.ch,e),c)}function Lc(a,b,c,d,e,f){function g(b,g){var h=yc(a,e,b,g?"right":"left",f);return g?h.left=h.right:h.right=h.left,Ic(a,d,h,c)}function h(a,b){var c=i[b],d=c.level%2;return a==Ph(c)&&b&&c.level<i[b-1].level?(c=i[--b],a=Qh(c)-(c.level%2?0:1),d=!0):a==Qh(c)&&b<i.length-1&&c.level<i[b+1].level&&(c=i[++b],a=Ph(c)-c.level%2,d=!1),d&&a==c.to&&a>c.from?g(a-1):g(a,d)}d=d||gg(a.doc,b.line),e||(e=xc(a,d));var i=ng(d),j=b.ch;if(!i)return g(j);var k=Yh(i,j),l=h(j,k);return null!=Xh&&(l.other=h(j,Xh)),l}function Mc(a,b){var c=0,b=Ob(a.doc,b);a.options.lineWrapping||(c=Sc(a.display)*b.ch);var d=gg(a.doc,b.line),e=mg(d)+mc(a.display);return{left:c,right:c,top:e,bottom:e+d.height}}function Nc(a,b,c,d){var e=ob(a,b);return e.xRel=d,c&&(e.outside=!0),e}function Oc(a,b,c){var d=a.doc;if(c+=a.display.viewOffset,0>c)return Nc(d.first,0,!0,-1);var e=lg(d,c),f=d.first+d.size-1;if(e>f)return Nc(d.first+d.size-1,gg(d,f).text.length,!0,1);0>b&&(b=0);for(var g=gg(d,e);;){var h=Pc(a,g,e,b,c),i=rf(g),j=i&&i.find(0,!0);if(!i||!(h.ch>j.from.ch||h.ch==j.from.ch&&h.xRel>0))return h;e=kg(g=j.to.line)}}function Pc(a,b,c,d,e){function j(d){var e=Lc(a,ob(c,d),"line",b,i);return g=!0,f>e.bottom?e.left-h:f<e.top?e.left+h:(g=!1,e.left)}var f=e-mg(b),g=!1,h=2*a.display.wrapper.clientWidth,i=xc(a,b),k=ng(b),l=b.text.length,m=Rh(b),n=Sh(b),o=j(m),p=g,q=j(n),r=g;if(d>q)return Nc(c,n,r,1);for(;;){if(k?n==m||n==$h(b,m,1):1>=n-m){for(var s=o>d||q-d>=d-o?m:n,t=d-(s==m?o:q);oh(b.text.charAt(s));)++s;var u=Nc(c,s,s==m?p:r,-1>t?-1:t>1?1:0);return u}var v=Math.ceil(l/2),w=m+v;if(k){w=m;for(var x=0;v>x;++x)w=$h(b,w,1)}var y=j(w);y>d?(n=w,q=y,(r=g)&&(q+=1e3),l=v):(m=w,o=y,p=g,l-=v)}}function Rc(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==Qc){Qc=ph("pre");for(var b=0;49>b;++b)Qc.appendChild(document.createTextNode("x")),Qc.appendChild(ph("br"));Qc.appendChild(document.createTextNode("x"))}sh(a.measure,Qc);var c=Qc.offsetHeight/50;return c>3&&(a.cachedTextHeight=c),rh(a.measure),c||1}function Sc(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=ph("span","xxxxxxxxxx"),c=ph("pre",[b]);sh(a.measure,c);var d=b.getBoundingClientRect(),e=(d.right-d.left)/10;return e>2&&(a.cachedCharWidth=e),e||10}function Vc(a){a.curOp={cm:a,viewChanged:!1,startHeight:a.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Uc},Tc?Tc.ops.push(a.curOp):a.curOp.ownsGroup=Tc={ops:[a.curOp],delayedCallbacks:[]}}function Wc(a){var b=a.delayedCallbacks,c=0;do{for(;c<b.length;c++)b[c].call(null);for(var d=0;d<a.ops.length;d++){var e=a.ops[d];if(e.cursorActivityHandlers)for(;e.cursorActivityCalled<e.cursorActivityHandlers.length;)e.cursorActivityHandlers[e.cursorActivityCalled++].call(null,e.cm)}}while(c<b.length)}function Xc(a){var b=a.curOp,c=b.ownsGroup;if(c)try{Wc(c)}finally{Tc=null;for(var d=0;d<c.ops.length;d++)c.ops[d].cm.curOp=null;Yc(c)}}function Yc(a){for(var b=a.ops,c=0;c<b.length;c++)Zc(b[c]);for(var c=0;c<b.length;c++)$c(b[c]);for(var c=0;c<b.length;c++)_c(b[c]);for(var c=0;c<b.length;c++)ad(b[c]);for(var c=0;c<b.length;c++)bd(b[c])}function Zc(a){var b=a.cm,c=b.display;V(b),a.updateMaxLine&&H(b),a.mustUpdate=a.viewChanged||a.forceUpdate||null!=a.scrollTop||a.scrollToPos&&(a.scrollToPos.from.line<c.viewFrom||a.scrollToPos.to.line>=c.viewTo)||c.maxLineChanged&&b.options.lineWrapping,a.update=a.mustUpdate&&new U(b,a.mustUpdate&&{top:a.scrollTop,ensure:a.scrollToPos},a.forceUpdate)}function $c(a){a.updatedDisplay=a.mustUpdate&&W(a.cm,a.update)}function _c(a){var b=a.cm,c=b.display;a.updatedDisplay&&$(b),a.barMeasure=J(b),c.maxLineChanged&&!b.options.lineWrapping&&(a.adjustWidthTo=vc(b,c.maxLine,c.maxLine.text.length).left+3,b.display.sizerWidth=a.adjustWidthTo,a.barMeasure.scrollWidth=Math.max(c.scroller.clientWidth,c.sizer.offsetLeft+a.adjustWidthTo+pc(b)+b.display.barWidth),a.maxScrollLeft=Math.max(0,c.sizer.offsetLeft+a.adjustWidthTo-qc(b))),(a.updatedDisplay||a.selectionChanged)&&(a.preparedSelection=c.input.prepareSelection())}function ad(a){var b=a.cm;null!=a.adjustWidthTo&&(b.display.sizer.style.minWidth=a.adjustWidthTo+"px",a.maxScrollLeft<b.doc.scrollLeft&&Id(b,Math.min(b.display.scroller.scrollLeft,a.maxScrollLeft),!0),b.display.maxLineChanged=!1),a.preparedSelection&&b.display.input.showSelection(a.preparedSelection),a.updatedDisplay&&Z(b,a.barMeasure),(a.updatedDisplay||a.startHeight!=b.doc.height)&&N(b,a.barMeasure),a.selectionChanged&&hc(b),b.state.focused&&a.updateInput&&b.display.input.reset(a.typing),a.focus&&a.focus==uh()&&tb(a.cm)}function bd(a){var b=a.cm,c=b.display,d=b.doc;if(a.updatedDisplay&&X(b,a.update),null==c.wheelStartX||null==a.scrollTop&&null==a.scrollLeft&&!a.scrollToPos||(c.wheelStartX=c.wheelStartY=null),null==a.scrollTop||c.scroller.scrollTop==a.scrollTop&&!a.forceScroll||(d.scrollTop=Math.max(0,Math.min(c.scroller.scrollHeight-c.scroller.clientHeight,a.scrollTop)),c.scrollbars.setScrollTop(d.scrollTop),c.scroller.scrollTop=d.scrollTop),null==a.scrollLeft||c.scroller.scrollLeft==a.scrollLeft&&!a.forceScroll||(d.scrollLeft=Math.max(0,Math.min(c.scroller.scrollWidth-qc(b),a.scrollLeft)),c.scrollbars.setScrollLeft(d.scrollLeft),c.scroller.scrollLeft=d.scrollLeft,Q(b)),a.scrollToPos){var e=pe(b,Ob(d,a.scrollToPos.from),Ob(d,a.scrollToPos.to),a.scrollToPos.margin);a.scrollToPos.isCursor&&b.state.focused&&oe(b,e)}var f=a.maybeHiddenMarkers,g=a.maybeUnhiddenMarkers;if(f)for(var h=0;h<f.length;++h)f[h].lines.length||Lg(f[h],"hide");if(g)for(var h=0;h<g.length;++h)g[h].lines.length&&Lg(g[h],"unhide");c.wrapper.offsetHeight&&(d.scrollTop=b.display.scroller.scrollTop),a.changeObjs&&Lg(b,"changes",b,a.changeObjs),a.update&&a.update.finish()}function cd(a,b){if(a.curOp)return b();Vc(a);try{return b()}finally{Xc(a)}}function dd(a,b){return function(){if(a.curOp)return b.apply(a,arguments);Vc(a);try{return b.apply(a,arguments)}finally{Xc(a)}}}function ed(a){return function(){if(this.curOp)return a.apply(this,arguments);Vc(this);try{return a.apply(this,arguments)}finally{Xc(this)}}}function fd(a){return function(){var b=this.cm;if(!b||b.curOp)return a.apply(this,arguments);Vc(b);try{return a.apply(this,arguments)}finally{Xc(b)}}}function gd(a,b,c){this.line=b,this.rest=uf(b),this.size=this.rest?kg(bh(this.rest))-c+1:1,this.node=this.text=null,this.hidden=xf(a,b)}function hd(a,b,c){for(var e,d=[],f=b;c>f;f=e){var g=new gd(a.doc,gg(a.doc,f),f);e=f+g.size,d.push(g)}return d}function id(a,b,c,d){null==b&&(b=a.doc.first),null==c&&(c=a.doc.first+a.doc.size),d||(d=0);var e=a.display;if(d&&c<e.viewTo&&(null==e.updateLineNumbers||e.updateLineNumbers>b)&&(e.updateLineNumbers=b),a.curOp.viewChanged=!0,b>=e.viewTo)u&&vf(a.doc,b)<e.viewTo&&kd(a);else if(c<=e.viewFrom)u&&wf(a.doc,c+d)>e.viewFrom?kd(a):(e.viewFrom+=d,e.viewTo+=d);else if(b<=e.viewFrom&&c>=e.viewTo)kd(a);else if(b<=e.viewFrom){var f=md(a,c,c+d,1);f?(e.view=e.view.slice(f.index),e.viewFrom=f.lineN,e.viewTo+=d):kd(a)}else if(c>=e.viewTo){var f=md(a,b,b,-1);f?(e.view=e.view.slice(0,f.index),e.viewTo=f.lineN):kd(a)}else{var g=md(a,b,b,-1),h=md(a,c,c+d,1);g&&h?(e.view=e.view.slice(0,g.index).concat(hd(a,g.lineN,h.lineN)).concat(e.view.slice(h.index)),e.viewTo+=d):kd(a)}var i=e.externalMeasured;i&&(c<i.lineN?i.lineN+=d:b<i.lineN+i.size&&(e.externalMeasured=null))}function jd(a,b,c){a.curOp.viewChanged=!0;var d=a.display,e=a.display.externalMeasured;if(e&&b>=e.lineN&&b<e.lineN+e.size&&(d.externalMeasured=null),!(b<d.viewFrom||b>=d.viewTo)){var f=d.view[ld(a,b)];if(null!=f.node){var g=f.changes||(f.changes=[]);-1==dh(g,c)&&g.push(c)}}}function kd(a){a.display.viewFrom=a.display.viewTo=a.doc.first,a.display.view=[],a.display.viewOffset=0}function ld(a,b){if(b>=a.display.viewTo)return null;if(b-=a.display.viewFrom,0>b)return null;for(var c=a.display.view,d=0;d<c.length;d++)if(b-=c[d].size,0>b)return d}function md(a,b,c,d){var f,e=ld(a,b),g=a.display.view;if(!u||c==a.doc.first+a.doc.size)return{index:e,lineN:c};for(var h=0,i=a.display.viewFrom;e>h;h++)i+=g[h].size;if(i!=b){if(d>0){if(e==g.length-1)return null;f=i+g[e].size-b,e++}else f=i-b;b+=f,c+=f}for(;vf(a.doc,c)!=c;){if(e==(0>d?0:g.length-1))return null;c+=d*g[e-(0>d?1:0)].size,e+=d}return{index:e,lineN:c}}function nd(a,b,c){var d=a.display,e=d.view;0==e.length||b>=d.viewTo||c<=d.viewFrom?(d.view=hd(a,b,c),d.viewFrom=b):(d.viewFrom>b?d.view=hd(a,b,d.viewFrom).concat(d.view):d.viewFrom<b&&(d.view=d.view.slice(ld(a,b))),d.viewFrom=b,d.viewTo<c?d.view=d.view.concat(hd(a,d.viewTo,c)):d.viewTo>c&&(d.view=d.view.slice(0,ld(a,c)))),d.viewTo=c}function od(a){for(var b=a.display.view,c=0,d=0;d<b.length;d++){var e=b[d];e.hidden||e.node&&!e.changes||++c}return c}function pd(a){function g(){b.activeTouch&&(c=setTimeout(function(){b.activeTouch=null},1e3),f=b.activeTouch,f.end=+new Date)}function h(a){if(1!=a.touches.length)return!1;var b=a.touches[0];return b.radiusX<=1&&b.radiusY<=1}function i(a,b){if(null==b.left)return!0;var c=b.left-a.left,d=b.top-a.top;return c*c+d*d>400}var b=a.display;Jg(b.scroller,"mousedown",dd(a,ud)),d&&11>e?Jg(b.scroller,"dblclick",dd(a,function(b){if(!Pg(a,b)){var c=td(a,b);if(c&&!Bd(a,b)&&!sd(a.display,b)){Dg(b);var d=a.findWordAt(c);Tb(a.doc,d.anchor,d.head)}}})):Jg(b.scroller,"dblclick",function(b){Pg(a,b)||Dg(b)}),s||Jg(b.scroller,"contextmenu",function(b){_d(a,b)});var c,f={end:0};Jg(b.scroller,"touchstart",function(a){if(!h(a)){clearTimeout(c);var d=+new Date;b.activeTouch={start:d,moved:!1,prev:d-f.end<=300?f:null},1==a.touches.length&&(b.activeTouch.left=a.touches[0].pageX,b.activeTouch.top=a.touches[0].pageY)}}),Jg(b.scroller,"touchmove",function(){b.activeTouch&&(b.activeTouch.moved=!0)}),Jg(b.scroller,"touchend",function(c){var d=b.activeTouch;if(d&&!sd(b,c)&&null!=d.left&&!d.moved&&new Date-d.start<300){var f,e=a.coordsChar(b.activeTouch,"page");f=!d.prev||i(d,d.prev)?new Kb(e,e):!d.prev.prev||i(d,d.prev.prev)?a.findWordAt(e):new Kb(ob(e.line,0),Ob(a.doc,ob(e.line+1,0))),a.setSelection(f.anchor,f.head),a.focus(),Dg(c)}g()}),Jg(b.scroller,"touchcancel",g),Jg(b.scroller,"scroll",function(){b.scroller.clientHeight&&(Hd(a,b.scroller.scrollTop),Id(a,b.scroller.scrollLeft,!0),Lg(a,"scroll",a))}),Jg(b.scroller,"mousewheel",function(b){Md(a,b)}),Jg(b.scroller,"DOMMouseScroll",function(b){Md(a,b)}),Jg(b.wrapper,"scroll",function(){b.wrapper.scrollTop=b.wrapper.scrollLeft=0}),b.dragFunctions={enter:function(b){Pg(a,b)||Gg(b)},over:function(b){Pg(a,b)||(Fd(a,b),Gg(b))},start:function(b){Ed(a,b)},drop:dd(a,Dd),leave:function(){Gd(a)}};var j=b.input.getField();Jg(j,"keyup",function(b){Wd.call(a,b)}),Jg(j,"keydown",dd(a,Ud)),Jg(j,"keypress",dd(a,Xd)),Jg(j,"focus",ih(Zd,a)),Jg(j,"blur",ih($d,a))}function qd(a,b,c){var d=c&&c!=v.Init;if(!b!=!d){var e=a.display.dragFunctions,f=b?Jg:Kg;f(a.display.scroller,"dragstart",e.start),f(a.display.scroller,"dragenter",e.enter),f(a.display.scroller,"dragover",e.over),f(a.display.scroller,"dragleave",e.leave),f(a.display.scroller,"drop",e.drop)}}function rd(a){var b=a.display;(b.lastWrapHeight!=b.wrapper.clientHeight||b.lastWrapWidth!=b.wrapper.clientWidth)&&(b.cachedCharWidth=b.cachedTextHeight=b.cachedPaddingH=null,b.scrollbarsClipped=!1,a.setSize())}function sd(a,b){for(var c=Hg(b);c!=a.wrapper;c=c.parentNode)if(!c||1==c.nodeType&&"true"==c.getAttribute("cm-ignore-events")||c.parentNode==a.sizer&&c!=a.mover)return!0}function td(a,b,c,d){var e=a.display;if(!c&&"true"==Hg(b).getAttribute("cm-not-content"))return null;var f,g,h=e.lineSpace.getBoundingClientRect();try{f=b.clientX-h.left,g=b.clientY-h.top}catch(b){return null}var j,i=Oc(a,f,g);if(d&&1==i.xRel&&(j=gg(a.doc,i.line).text).length==i.ch){var k=Zg(j,j.length,a.options.tabSize)-j.length;i=ob(i.line,Math.max(0,Math.round((f-oc(a.display).left)/Sc(a.display))-k))}return i}function ud(a){var b=this,c=b.display;if(!(c.activeTouch&&c.input.supportsTouch()||Pg(b,a))){if(c.shift=a.shiftKey,sd(c,a))return f||(c.scroller.draggable=!1,setTimeout(function(){c.scroller.draggable=!0},100)),void 0;if(!Bd(b,a)){var d=td(b,a);switch(window.focus(),Ig(a)){case 1:b.state.selectingText?b.state.selectingText(a):d?xd(b,a,d):Hg(a)==c.scroller&&Dg(a);break;case 2:f&&(b.state.lastMiddleDown=+new Date),d&&Tb(b.doc,d),setTimeout(function(){c.input.focus()},20),Dg(a);break;case 3:s?_d(b,a):Yd(b)}}}}function xd(a,b,c){d?setTimeout(ih(tb,a),0):a.curOp.focus=uh();var f,e=+new Date;wd&&wd.time>e-400&&0==pb(wd.pos,c)?f="triple":vd&&vd.time>e-400&&0==pb(vd.pos,c)?(f="double",wd={time:e,pos:c}):(f="single",vd={time:e,pos:c});var i,g=a.doc.sel,h=o?b.metaKey:b.ctrlKey;a.options.dragDrop&&Dh&&!ub(a)&&"single"==f&&(i=g.contains(c))>-1&&(pb((i=g.ranges[i]).from(),c)<0||c.xRel>0)&&(pb(i.to(),c)>0||c.xRel<0)?yd(a,b,c,h):zd(a,b,c,f,h)}function yd(a,b,c,g){var h=a.display,i=+new Date,j=dd(a,function(k){f&&(h.scroller.draggable=!1),a.state.draggingText=!1,Kg(document,"mouseup",j),Kg(h.scroller,"drop",j),Math.abs(b.clientX-k.clientX)+Math.abs(b.clientY-k.clientY)<10&&(Dg(k),!g&&+new Date-200<i&&Tb(a.doc,c),f||d&&9==e?setTimeout(function(){document.body.focus(),h.input.focus()},20):h.input.focus())});f&&(h.scroller.draggable=!0),a.state.draggingText=j,h.scroller.dragDrop&&h.scroller.dragDrop(),Jg(document,"mouseup",j),Jg(h.scroller,"drop",j)}function zd(a,b,c,d,e){function o(b){if(0!=pb(n,b))if(n=b,"rect"==d){for(var e=[],f=a.options.tabSize,k=Zg(gg(g,c.line).text,c.ch,f),l=Zg(gg(g,b.line).text,b.ch,f),m=Math.min(k,l),o=Math.max(k,l),p=Math.min(c.line,b.line),q=Math.min(a.lastLine(),Math.max(c.line,b.line));q>=p;p++){var r=gg(g,p).text,s=$g(r,m,f);m==o?e.push(new Kb(ob(p,s),ob(p,s))):r.length>s&&e.push(new Kb(ob(p,s),ob(p,$g(r,o,f))))}e.length||e.push(new Kb(c,c)),Zb(g,Lb(j.ranges.slice(0,i).concat(e),i),{origin:"*mouse",scroll:!1}),a.scrollIntoView(b)}else{var t=h,u=t.anchor,v=b;if("single"!=d){if("double"==d)var w=a.findWordAt(b);else var w=new Kb(ob(b.line,0),Ob(g,ob(b.line+1,0)));pb(w.anchor,u)>0?(v=w.head,u=sb(t.from(),w.anchor)):(v=w.anchor,u=rb(t.to(),w.head))}var e=j.ranges.slice(0);e[i]=new Kb(Ob(g,u),v),Zb(g,Lb(e,i),Wg)}}function r(b){var c=++q,e=td(a,b,!0,"rect"==d);if(e)if(0!=pb(e,n)){a.curOp.focus=uh(),o(e);var h=P(f,g);(e.line>=h.to||e.line<h.from)&&setTimeout(dd(a,function(){q==c&&r(b)}),150)}else{var i=b.clientY<p.top?-20:b.clientY>p.bottom?20:0;i&&setTimeout(dd(a,function(){q==c&&(f.scroller.scrollTop+=i,r(b))}),50)}}function s(b){a.state.selectingText=!1,q=1/0,Dg(b),f.input.focus(),Kg(document,"mousemove",t),Kg(document,"mouseup",u),g.history.lastSelOrigin=null}var f=a.display,g=a.doc;Dg(b);var h,i,j=g.sel,k=j.ranges;if(e&&!b.shiftKey?(i=g.sel.contains(c),h=i>-1?k[i]:new Kb(c,c)):(h=g.sel.primary(),i=g.sel.primIndex),b.altKey)d="rect",e||(h=new Kb(c,c)),c=td(a,b,!0,!0),i=-1;else if("double"==d){var l=a.findWordAt(c);h=a.display.shift||g.extend?Sb(g,h,l.anchor,l.head):l}else if("triple"==d){var m=new Kb(ob(c.line,0),Ob(g,ob(c.line+1,0)));h=a.display.shift||g.extend?Sb(g,h,m.anchor,m.head):m}else h=Sb(g,h,c);e?-1==i?(i=k.length,Zb(g,Lb(k.concat([h]),i),{scroll:!1,origin:"*mouse"})):k.length>1&&k[i].empty()&&"single"==d&&!b.shiftKey?(Zb(g,Lb(k.slice(0,i).concat(k.slice(i+1)),0),{scroll:!1,origin:"*mouse"}),j=g.sel):Vb(g,i,h,Wg):(i=0,Zb(g,new Jb([h],0),Wg),j=g.sel);var n=c,p=f.wrapper.getBoundingClientRect(),q=0,t=dd(a,function(a){Ig(a)?r(a):s(a)}),u=dd(a,s);a.state.selectingText=u,Jg(document,"mousemove",t),Jg(document,"mouseup",u)}function Ad(a,b,c,d,e){try{var f=b.clientX,g=b.clientY}catch(b){return!1}if(f>=Math.floor(a.display.gutters.getBoundingClientRect().right))return!1;d&&Dg(b);var h=a.display,i=h.lineDiv.getBoundingClientRect();if(g>i.bottom||!Rg(a,c))return Fg(b);g-=i.top-h.viewOffset;for(var j=0;j<a.options.gutters.length;++j){var k=h.gutters.childNodes[j];if(k&&k.getBoundingClientRect().right>=f){var l=lg(a.doc,g),m=a.options.gutters[j];return e(a,c,a,l,m,b),Fg(b)}}}function Bd(a,b){return Ad(a,b,"gutterClick",!0,Ng)}function Dd(a){var b=this;if(Gd(b),!Pg(b,a)&&!sd(b.display,a)){Dg(a),d&&(Cd=+new Date);var c=td(b,a,!0),e=a.dataTransfer.files;if(c&&!ub(b))if(e&&e.length&&window.FileReader&&window.File)for(var f=e.length,g=Array(f),h=0,i=function(a,d){var e=new FileReader;e.onload=dd(b,function(){if(g[d]=e.result,++h==f){c=Ob(b.doc,c);var a={from:c,to:c,text:b.doc.splitLines(g.join(b.doc.lineSeparator())),origin:"paste"};he(b.doc,a),Yb(b.doc,Mb(c,be(a)))}}),e.readAsText(a)},j=0;f>j;++j)i(e[j],j);else{if(b.state.draggingText&&b.doc.sel.contains(c)>-1)return b.state.draggingText(a),setTimeout(function(){b.display.input.focus()},20),void 0;try{var g=a.dataTransfer.getData("Text");if(g){if(b.state.draggingText&&!(o?a.altKey:a.ctrlKey))var k=b.listSelections();if($b(b.doc,Mb(c,c)),k)for(var j=0;j<k.length;++j)ne(b.doc,"",k[j].anchor,k[j].head,"drag");b.replaceSelection(g,"around","paste"),b.display.input.focus()}}catch(a){}}}}function Ed(a,b){if(d&&(!a.state.draggingText||+new Date-Cd<100))return Gg(b),void 0;if(!Pg(a,b)&&!sd(a.display,b)&&(b.dataTransfer.setData("Text",a.getSelection()),b.dataTransfer.setDragImage&&!j)){var c=ph("img",null,null,"position: fixed; left: 0; top: 0;");c.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",i&&(c.width=c.height=1,a.display.wrapper.appendChild(c),c._top=c.offsetTop),b.dataTransfer.setDragImage(c,0,0),i&&c.parentNode.removeChild(c)}}function Fd(a,b){var c=td(a,b);if(c){var d=document.createDocumentFragment();fc(a,c,d),a.display.dragCursor||(a.display.dragCursor=ph("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),a.display.lineSpace.insertBefore(a.display.dragCursor,a.display.cursorDiv)),sh(a.display.dragCursor,d)}}function Gd(a){a.display.dragCursor&&(a.display.lineSpace.removeChild(a.display.dragCursor),a.display.dragCursor=null)}function Hd(b,c){Math.abs(b.doc.scrollTop-c)<2||(b.doc.scrollTop=c,a||Y(b,{top:c}),b.display.scroller.scrollTop!=c&&(b.display.scroller.scrollTop=c),b.display.scrollbars.setScrollTop(c),a&&Y(b),ic(b,100))}function Id(a,b,c){(c?b==a.doc.scrollLeft:Math.abs(a.doc.scrollLeft-b)<2)||(b=Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth),a.doc.scrollLeft=b,Q(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbars.setScrollLeft(b))}function Md(b,c){var d=Ld(c),e=d.x,g=d.y,h=b.display,j=h.scroller;if(e&&j.scrollWidth>j.clientWidth||g&&j.scrollHeight>j.clientHeight){if(g&&o&&f)a:for(var k=c.target,l=h.view;k!=j;k=k.parentNode)for(var m=0;m<l.length;m++)if(l[m].node==k){b.display.currentWheelTarget=k;break a}if(e&&!a&&!i&&null!=Kd)return g&&Hd(b,Math.max(0,Math.min(j.scrollTop+g*Kd,j.scrollHeight-j.clientHeight))),Id(b,Math.max(0,Math.min(j.scrollLeft+e*Kd,j.scrollWidth-j.clientWidth))),Dg(c),h.wheelStartX=null,void 0;if(g&&null!=Kd){var n=g*Kd,p=b.doc.scrollTop,q=p+h.wrapper.clientHeight;0>n?p=Math.max(0,p+n-50):q=Math.min(b.doc.height,q+n+50),Y(b,{top:p,bottom:q})}20>Jd&&(null==h.wheelStartX?(h.wheelStartX=j.scrollLeft,h.wheelStartY=j.scrollTop,h.wheelDX=e,h.wheelDY=g,setTimeout(function(){if(null!=h.wheelStartX){var a=j.scrollLeft-h.wheelStartX,b=j.scrollTop-h.wheelStartY,c=b&&h.wheelDY&&b/h.wheelDY||a&&h.wheelDX&&a/h.wheelDX;h.wheelStartX=h.wheelStartY=null,c&&(Kd=(Kd*Jd+c)/(Jd+1),++Jd)}},200)):(h.wheelDX+=e,h.wheelDY+=g))}}function Nd(a,b,c){if("string"==typeof b&&(b=Le[b],!b))return!1;a.display.input.ensurePolled();var d=a.display.shift,e=!1;try{ub(a)&&(a.state.suppressEdits=!0),c&&(a.display.shift=!1),e=b(a)!=Ug}finally{a.display.shift=d,a.state.suppressEdits=!1}return e}function Od(a,b,c){for(var d=0;d<a.state.keyMaps.length;d++){var e=Oe(b,a.state.keyMaps[d],c,a);if(e)return e}return a.options.extraKeys&&Oe(b,a.options.extraKeys,c,a)||Oe(b,a.options.keyMap,c,a)}function Qd(a,b,c,d){var e=a.state.keySeq;if(e){if(Pe(b))return"handled";Pd.set(50,function(){a.state.keySeq==e&&(a.state.keySeq=null,a.display.input.reset())}),b=e+" "+b}var f=Od(a,b,d);return"multi"==f&&(a.state.keySeq=b),"handled"==f&&Ng(a,"keyHandled",a,b,c),("handled"==f||"multi"==f)&&(Dg(c),hc(a)),e&&!f&&/\'$/.test(b)?(Dg(c),!0):!!f}function Rd(a,b){var c=Qe(b,!0);return c?b.shiftKey&&!a.state.keySeq?Qd(a,"Shift-"+c,b,function(b){return Nd(a,b,!0)})||Qd(a,c,b,function(b){return("string"==typeof b?/^go[A-Z]/.test(b):b.motion)?Nd(a,b):void 0}):Qd(a,c,b,function(b){return Nd(a,b)}):!1}function Sd(a,b,c){return Qd(a,"'"+c+"'",b,function(b){return Nd(a,b,!0)})}function Ud(a){var b=this;if(b.curOp.focus=uh(),!Pg(b,a)){d&&11>e&&27==a.keyCode&&(a.returnValue=!1);var c=a.keyCode;b.display.shift=16==c||a.shiftKey;var f=Rd(b,a);i&&(Td=f?c:null,!f&&88==c&&!Kh&&(o?a.metaKey:a.ctrlKey)&&b.replaceSelection("",null,"cut")),18!=c||/\bCodeMirror-crosshair\b/.test(b.display.lineDiv.className)||Vd(b)}}function Vd(a){function c(a){18!=a.keyCode&&a.altKey||(wh(b,"CodeMirror-crosshair"),Kg(document,"keyup",c),Kg(document,"mouseover",c))}var b=a.display.lineDiv;xh(b,"CodeMirror-crosshair"),Jg(document,"keyup",c),Jg(document,"mouseover",c)}function Wd(a){16==a.keyCode&&(this.doc.sel.shift=!1),Pg(this,a)}function Xd(a){var b=this;if(!(sd(b.display,a)||Pg(b,a)||a.ctrlKey&&!a.altKey||o&&a.metaKey)){var c=a.keyCode,d=a.charCode;if(i&&c==Td)return Td=null,Dg(a),void 0;if(!i||a.which&&!(a.which<10)||!Rd(b,a)){var e=String.fromCharCode(null==d?c:d);Sd(b,a,e)||b.display.input.onKeyPress(a)}}}function Yd(a){a.state.delayingBlurEvent=!0,setTimeout(function(){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1,$d(a))},100)}function Zd(a){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1),"nocursor"!=a.options.readOnly&&(a.state.focused||(Lg(a,"focus",a),a.state.focused=!0,xh(a.display.wrapper,"CodeMirror-focused"),a.curOp||a.display.selForContextMenu==a.doc.sel||(a.display.input.reset(),f&&setTimeout(function(){a.display.input.reset(!0)},20)),a.display.input.receivedFocus()),hc(a))}function $d(a){a.state.delayingBlurEvent||(a.state.focused&&(Lg(a,"blur",a),a.state.focused=!1,wh(a.display.wrapper,"CodeMirror-focused")),clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||(a.display.shift=!1)},150))}function _d(a,b){sd(a.display,b)||ae(a,b)||a.display.input.onContextMenu(b)}function ae(a,b){return Rg(a,"gutterContextMenu")?Ad(a,b,"gutterContextMenu",!1,Lg):!1}function ce(a,b){if(pb(a,b.from)<0)return a;if(pb(a,b.to)<=0)return be(b);var c=a.line+b.text.length-(b.to.line-b.from.line)-1,d=a.ch;return a.line==b.to.line&&(d+=be(b).ch-b.to.ch),ob(c,d)}function de(a,b){for(var c=[],d=0;d<a.sel.ranges.length;d++){var e=a.sel.ranges[d];c.push(new Kb(ce(e.anchor,b),ce(e.head,b)))}return Lb(c,a.sel.primIndex)}function ee(a,b,c){return a.line==b.line?ob(c.line,a.ch-b.ch+c.ch):ob(c.line+(a.line-b.line),a.ch)}function fe(a,b,c){for(var d=[],e=ob(a.first,0),f=e,g=0;g<b.length;g++){var h=b[g],i=ee(h.from,e,f),j=ee(be(h),e,f);if(e=h.to,f=j,"around"==c){var k=a.sel.ranges[g],l=pb(k.head,k.anchor)<0;d[g]=new Kb(l?j:i,l?i:j)}else d[g]=new Kb(i,i)}return new Jb(d,a.sel.primIndex)}function ge(a,b,c){var d={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){this.canceled=!0}};return c&&(d.update=function(b,c,d,e){b&&(this.from=Ob(a,b)),c&&(this.to=Ob(a,c)),d&&(this.text=d),void 0!==e&&(this.origin=e)}),Lg(a,"beforeChange",a,d),a.cm&&Lg(a.cm,"beforeChange",a.cm,d),d.canceled?null:{from:d.from,to:d.to,text:d.text,origin:d.origin}}function he(a,b,c){if(a.cm){if(!a.cm.curOp)return dd(a.cm,he)(a,b,c);if(a.cm.state.suppressEdits)return}if(!(Rg(a,"beforeChange")||a.cm&&Rg(a.cm,"beforeChange"))||(b=ge(a,b,!0))){var d=t&&!c&&jf(a,b.from,b.to);if(d)for(var e=d.length-1;e>=0;--e)ie(a,{from:d[e].from,to:d[e].to,text:e?[""]:b.text});else ie(a,b)}}function ie(a,b){if(1!=b.text.length||""!=b.text[0]||0!=pb(b.from,b.to)){var c=de(a,b);sg(a,b,c,a.cm?a.cm.curOp.id:0/0),le(a,b,c,ff(a,b));var d=[];eg(a,function(a,c){c||-1!=dh(d,a.history)||(Cg(a.history,b),d.push(a.history)),le(a,b,null,ff(a,b))})}}function je(a,b,c){if(!a.cm||!a.cm.state.suppressEdits){for(var e,d=a.history,f=a.sel,g="undo"==b?d.done:d.undone,h="undo"==b?d.undone:d.done,i=0;i<g.length&&(e=g[i],c?!e.ranges||e.equals(a.sel):e.ranges);i++);if(i!=g.length){for(d.lastOrigin=d.lastSelOrigin=null;e=g.pop(),e.ranges;){if(vg(e,h),c&&!e.equals(a.sel))return Zb(a,e,{clearRedo:!1}),void 0;f=e}var j=[];vg(f,h),h.push({changes:j,generation:d.generation}),d.generation=e.generation||++d.maxGeneration;for(var k=Rg(a,"beforeChange")||a.cm&&Rg(a.cm,"beforeChange"),i=e.changes.length-1;i>=0;--i){var l=e.changes[i];if(l.origin=b,k&&!ge(a,l,!1))return g.length=0,void 0;j.push(pg(a,l));var m=i?de(a,l):bh(g);le(a,l,m,hf(a,l)),!i&&a.cm&&a.cm.scrollIntoView({from:l.from,to:be(l)});var n=[];eg(a,function(a,b){b||-1!=dh(n,a.history)||(Cg(a.history,l),n.push(a.history)),le(a,l,null,hf(a,l))})}}}}function ke(a,b){if(0!=b&&(a.first+=b,a.sel=new Jb(eh(a.sel.ranges,function(a){return new Kb(ob(a.anchor.line+b,a.anchor.ch),ob(a.head.line+b,a.head.ch))}),a.sel.primIndex),a.cm)){id(a.cm,a.first,a.first-b,b);for(var c=a.cm.display,d=c.viewFrom;d<c.viewTo;d++)jd(a.cm,d,"gutter")}}function le(a,b,c,d){if(a.cm&&!a.cm.curOp)return dd(a.cm,le)(a,b,c,d);if(b.to.line<a.first)return ke(a,b.text.length-1-(b.to.line-b.from.line)),void 0;if(!(b.from.line>a.lastLine())){if(b.from.line<a.first){var e=b.text.length-1-(a.first-b.from.line);ke(a,e),b={from:ob(a.first,0),to:ob(b.to.line+e,b.to.ch),text:[bh(b.text)],origin:b.origin}}var f=a.lastLine();b.to.line>f&&(b={from:b.from,to:ob(f,gg(a,f).text.length),text:[b.text[0]],origin:b.origin}),b.removed=hg(a,b.from,b.to),c||(c=de(a,b)),a.cm?me(a.cm,b,d):Zf(a,b,d),$b(a,c,Vg)}}function me(a,b,c){var d=a.doc,e=a.display,f=b.from,g=b.to,h=!1,i=f.line;a.options.lineWrapping||(i=kg(tf(gg(d,f.line))),d.iter(i,g.line+1,function(a){return a==e.maxLine?(h=!0,!0):void 0})),d.sel.contains(b.from,b.to)>-1&&Qg(a),Zf(d,b,c,A(a)),a.options.lineWrapping||(d.iter(i,f.line+b.text.length,function(a){var b=G(a);b>e.maxLineLength&&(e.maxLine=a,e.maxLineLength=b,e.maxLineChanged=!0,h=!1)}),h&&(a.curOp.updateMaxLine=!0)),d.frontier=Math.min(d.frontier,f.line),ic(a,400);var j=b.text.length-(g.line-f.line)-1;b.full?id(a):f.line!=g.line||1!=b.text.length||Yf(a.doc,b)?id(a,f.line,g.line+1,j):jd(a,f.line,"text");var k=Rg(a,"changes"),l=Rg(a,"change");if(l||k){var m={from:f,to:g,text:b.text,removed:b.removed,origin:b.origin};l&&Ng(a,"change",a,m),k&&(a.curOp.changeObjs||(a.curOp.changeObjs=[])).push(m)}a.display.selForContextMenu=null}function ne(a,b,c,d,e){if(d||(d=c),pb(d,c)<0){var f=d;d=c,c=f}"string"==typeof b&&(b=a.splitLines(b)),he(a,{from:c,to:d,text:b,origin:e})}function oe(a,b){if(!Pg(a,"scrollCursorIntoView")){var c=a.display,d=c.sizer.getBoundingClientRect(),e=null;if(b.top+d.top<0?e=!0:b.bottom+d.top>(window.innerHeight||document.documentElement.clientHeight)&&(e=!1),null!=e&&!l){var f=ph("div","\u200b",null,"position: absolute; top: "+(b.top-c.viewOffset-mc(a.display))+"px; height: "+(b.bottom-b.top+pc(a)+c.barHeight)+"px; left: "+b.left+"px; width: 2px;");a.display.lineSpace.appendChild(f),f.scrollIntoView(e),a.display.lineSpace.removeChild(f)}}}function pe(a,b,c,d){null==d&&(d=0);for(var e=0;5>e;e++){var f=!1,g=Lc(a,b),h=c&&c!=b?Lc(a,c):g,i=re(a,Math.min(g.left,h.left),Math.min(g.top,h.top)-d,Math.max(g.left,h.left),Math.max(g.bottom,h.bottom)+d),j=a.doc.scrollTop,k=a.doc.scrollLeft;if(null!=i.scrollTop&&(Hd(a,i.scrollTop),Math.abs(a.doc.scrollTop-j)>1&&(f=!0)),null!=i.scrollLeft&&(Id(a,i.scrollLeft),Math.abs(a.doc.scrollLeft-k)>1&&(f=!0)),!f)break}return g}function qe(a,b,c,d,e){var f=re(a,b,c,d,e);null!=f.scrollTop&&Hd(a,f.scrollTop),null!=f.scrollLeft&&Id(a,f.scrollLeft)}function re(a,b,c,d,e){var f=a.display,g=Rc(a.display);0>c&&(c=0);var h=a.curOp&&null!=a.curOp.scrollTop?a.curOp.scrollTop:f.scroller.scrollTop,i=rc(a),j={};e-c>i&&(e=c+i);var k=a.doc.height+nc(f),l=g>c,m=e>k-g;if(h>c)j.scrollTop=l?0:c;else if(e>h+i){var n=Math.min(c,(m?k:e)-i);n!=h&&(j.scrollTop=n)}var o=a.curOp&&null!=a.curOp.scrollLeft?a.curOp.scrollLeft:f.scroller.scrollLeft,p=qc(a)-(a.options.fixedGutter?f.gutters.offsetWidth:0),q=d-b>p;return q&&(d=b+p),10>b?j.scrollLeft=0:o>b?j.scrollLeft=Math.max(0,b-(q?0:10)):d>p+o-3&&(j.scrollLeft=d+(q?0:10)-p),j}function se(a,b,c){(null!=b||null!=c)&&ue(a),null!=b&&(a.curOp.scrollLeft=(null==a.curOp.scrollLeft?a.doc.scrollLeft:a.curOp.scrollLeft)+b),null!=c&&(a.curOp.scrollTop=(null==a.curOp.scrollTop?a.doc.scrollTop:a.curOp.scrollTop)+c)}function te(a){ue(a);var b=a.getCursor(),c=b,d=b;a.options.lineWrapping||(c=b.ch?ob(b.line,b.ch-1):b,d=ob(b.line,b.ch+1)),a.curOp.scrollToPos={from:c,to:d,margin:a.options.cursorScrollMargin,isCursor:!0}}function ue(a){var b=a.curOp.scrollToPos;if(b){a.curOp.scrollToPos=null;var c=Mc(a,b.from),d=Mc(a,b.to),e=re(a,Math.min(c.left,d.left),Math.min(c.top,d.top)-b.margin,Math.max(c.right,d.right),Math.max(c.bottom,d.bottom)+b.margin);a.scrollTo(e.scrollLeft,e.scrollTop)}}function ve(a,b,c,d){var f,e=a.doc;null==c&&(c="add"),"smart"==c&&(e.mode.indent?f=lc(a,b):c="prev");var g=a.options.tabSize,h=gg(e,b),i=Zg(h.text,null,g);h.stateAfter&&(h.stateAfter=null);var k,j=h.text.match(/^\s*/)[0];if(d||/\S/.test(h.text)){if("smart"==c&&(k=e.mode.indent(f,h.text.slice(j.length),h.text),k==Ug||k>150)){if(!d)return;c="prev"}}else k=0,c="not";"prev"==c?k=b>e.first?Zg(gg(e,b-1).text,null,g):0:"add"==c?k=i+a.options.indentUnit:"subtract"==c?k=i-a.options.indentUnit:"number"==typeof c&&(k=i+c),k=Math.max(0,k);
var l="",m=0;if(a.options.indentWithTabs)for(var n=Math.floor(k/g);n;--n)m+=g,l+="	";if(k>m&&(l+=ah(k-m)),l!=j)return ne(e,l,ob(b,0),ob(b,j.length),"+input"),h.stateAfter=null,!0;for(var n=0;n<e.sel.ranges.length;n++){var o=e.sel.ranges[n];if(o.head.line==b&&o.head.ch<j.length){var m=ob(b,j.length);Vb(e,n,new Kb(m,m));break}}}function we(a,b,c,d){var e=b,f=b;return"number"==typeof b?f=gg(a,Nb(a,b)):e=kg(b),null==e?null:(d(f,e)&&a.cm&&jd(a.cm,e,c),f)}function xe(a,b){for(var c=a.doc.sel.ranges,d=[],e=0;e<c.length;e++){for(var f=b(c[e]);d.length&&pb(f.from,bh(d).to)<=0;){var g=d.pop();if(pb(g.from,f.from)<0){f.from=g.from;break}}d.push(f)}cd(a,function(){for(var b=d.length-1;b>=0;b--)ne(a.doc,"",d[b].from,d[b].to,"+delete");te(a)})}function ye(a,b,c,d,e){function k(){var b=f+c;return b<a.first||b>=a.first+a.size?j=!1:(f=b,i=gg(a,b))}function l(a){var b=(e?$h:_h)(i,g,c,!0);if(null==b){if(a||!k())return j=!1;g=e?(0>c?Sh:Rh)(i):0>c?i.text.length:0}else g=b;return!0}var f=b.line,g=b.ch,h=c,i=gg(a,f),j=!0;if("char"==d)l();else if("column"==d)l(!0);else if("word"==d||"group"==d)for(var m=null,n="group"==d,o=a.cm&&a.cm.getHelper(b,"wordChars"),p=!0;!(0>c)||l(!p);p=!1){var q=i.text.charAt(g)||"\n",r=lh(q,o)?"w":n&&"\n"==q?"n":!n||/\s/.test(q)?null:"p";if(!n||p||r||(r="s"),m&&m!=r){0>c&&(c=1,l());break}if(r&&(m=r),c>0&&!l(!p))break}var s=cc(a,ob(f,g),h,!0);return j||(s.hitSide=!0),s}function ze(a,b,c,d){var g,e=a.doc,f=b.left;if("page"==d){var h=Math.min(a.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);g=b.top+c*(h-(0>c?1.5:.5)*Rc(a.display))}else"line"==d&&(g=c>0?b.bottom+3:b.top-3);for(;;){var i=Oc(a,f,g);if(!i.outside)break;if(0>c?0>=g:g>=e.height){i.hitSide=!0;break}g+=5*c}return i}function Ce(a,b,c,d){v.defaults[a]=b,c&&(Be[a]=d?function(a,b,d){d!=De&&c(a,b,d)}:c)}function Ne(a){for(var c,d,e,f,b=a.split(/-(?!$)/),a=b[b.length-1],g=0;g<b.length-1;g++){var h=b[g];if(/^(cmd|meta|m)$/i.test(h))f=!0;else if(/^a(lt)?$/i.test(h))c=!0;else if(/^(c|ctrl|control)$/i.test(h))d=!0;else{if(!/^s(hift)$/i.test(h))throw new Error("Unrecognized modifier name: "+h);e=!0}}return c&&(a="Alt-"+a),d&&(a="Ctrl-"+a),f&&(a="Cmd-"+a),e&&(a="Shift-"+a),a}function Re(a){return"string"==typeof a?Me[a]:a}function Ve(a,b,c,d,e){if(d&&d.shared)return Xe(a,b,c,d,e);if(a.cm&&!a.cm.curOp)return dd(a.cm,Ve)(a,b,c,d,e);var f=new Ue(a,e),g=pb(b,c);if(d&&hh(d,f,!1),g>0||0==g&&f.clearWhenEmpty!==!1)return f;if(f.replacedWith&&(f.collapsed=!0,f.widgetNode=ph("span",[f.replacedWith],"CodeMirror-widget"),d.handleMouseEvents||f.widgetNode.setAttribute("cm-ignore-events","true"),d.insertLeft&&(f.widgetNode.insertLeft=!0)),f.collapsed){if(sf(a,b.line,b,c,f)||b.line!=c.line&&sf(a,c.line,b,c,f))throw new Error("Inserting collapsed marker partially overlapping an existing one");u=!0}f.addToHistory&&sg(a,{from:b,to:c,origin:"markText"},a.sel,0/0);var j,h=b.line,i=a.cm;if(a.iter(h,c.line+1,function(a){i&&f.collapsed&&!i.options.lineWrapping&&tf(a)==i.display.maxLine&&(j=!0),f.collapsed&&h!=b.line&&jg(a,0),cf(a,new _e(f,h==b.line?b.ch:null,h==c.line?c.ch:null)),++h}),f.collapsed&&a.iter(b.line,c.line+1,function(b){xf(a,b)&&jg(b,0)}),f.clearOnEnter&&Jg(f,"beforeCursorEnter",function(){f.clear()}),f.readOnly&&(t=!0,(a.history.done.length||a.history.undone.length)&&a.clearHistory()),f.collapsed&&(f.id=++Te,f.atomic=!0),i){if(j&&(i.curOp.updateMaxLine=!0),f.collapsed)id(i,b.line,c.line+1);else if(f.className||f.title||f.startStyle||f.endStyle||f.css)for(var k=b.line;k<=c.line;k++)jd(i,k,"text");f.atomic&&ac(i.doc),Ng(i,"markerAdded",i,f)}return f}function Xe(a,b,c,d,e){d=hh(d),d.shared=!1;var f=[Ve(a,b,c,d,e)],g=f[0],h=d.widgetNode;return eg(a,function(a){h&&(d.widgetNode=h.cloneNode(!0)),f.push(Ve(a,Ob(a,b),Ob(a,c),d,e));for(var i=0;i<a.linked.length;++i)if(a.linked[i].isParent)return;g=bh(f)}),new We(f,g)}function Ye(a){return a.findMarks(ob(a.first,0),a.clipPos(ob(a.lastLine())),function(a){return a.parent})}function Ze(a,b){for(var c=0;c<b.length;c++){var d=b[c],e=d.find(),f=a.clipPos(e.from),g=a.clipPos(e.to);if(pb(f,g)){var h=Ve(a,f,g,d.primary,d.primary.type);d.markers.push(h),h.parent=d}}}function $e(a){for(var b=0;b<a.length;b++){var c=a[b],d=[c.primary.doc];eg(c.primary.doc,function(a){d.push(a)});for(var e=0;e<c.markers.length;e++){var f=c.markers[e];-1==dh(d,f.doc)&&(f.parent=null,c.markers.splice(e--,1))}}}function _e(a,b,c){this.marker=a,this.from=b,this.to=c}function af(a,b){if(a)for(var c=0;c<a.length;++c){var d=a[c];if(d.marker==b)return d}}function bf(a,b){for(var c,d=0;d<a.length;++d)a[d]!=b&&(c||(c=[])).push(a[d]);return c}function cf(a,b){a.markedSpans=a.markedSpans?a.markedSpans.concat([b]):[b],b.marker.attachLine(a)}function df(a,b,c){if(a)for(var e,d=0;d<a.length;++d){var f=a[d],g=f.marker,h=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);if(h||f.from==b&&"bookmark"==g.type&&(!c||!f.marker.insertLeft)){var i=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);(e||(e=[])).push(new _e(g,f.from,i?null:f.to))}}return e}function ef(a,b,c){if(a)for(var e,d=0;d<a.length;++d){var f=a[d],g=f.marker,h=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);if(h||f.from==b&&"bookmark"==g.type&&(!c||f.marker.insertLeft)){var i=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);(e||(e=[])).push(new _e(g,i?null:f.from-b,null==f.to?null:f.to-b))}}return e}function ff(a,b){if(b.full)return null;var c=Qb(a,b.from.line)&&gg(a,b.from.line).markedSpans,d=Qb(a,b.to.line)&&gg(a,b.to.line).markedSpans;if(!c&&!d)return null;var e=b.from.ch,f=b.to.ch,g=0==pb(b.from,b.to),h=df(c,e,g),i=ef(d,f,g),j=1==b.text.length,k=bh(b.text).length+(j?e:0);if(h)for(var l=0;l<h.length;++l){var m=h[l];if(null==m.to){var n=af(i,m.marker);n?j&&(m.to=null==n.to?null:n.to+k):m.to=e}}if(i)for(var l=0;l<i.length;++l){var m=i[l];if(null!=m.to&&(m.to+=k),null==m.from){var n=af(h,m.marker);n||(m.from=k,j&&(h||(h=[])).push(m))}else m.from+=k,j&&(h||(h=[])).push(m)}h&&(h=gf(h)),i&&i!=h&&(i=gf(i));var o=[h];if(!j){var q,p=b.text.length-2;if(p>0&&h)for(var l=0;l<h.length;++l)null==h[l].to&&(q||(q=[])).push(new _e(h[l].marker,null,null));for(var l=0;p>l;++l)o.push(q);o.push(i)}return o}function gf(a){for(var b=0;b<a.length;++b){var c=a[b];null!=c.from&&c.from==c.to&&c.marker.clearWhenEmpty!==!1&&a.splice(b--,1)}return a.length?a:null}function hf(a,b){var c=yg(a,b),d=ff(a,b);if(!c)return d;if(!d)return c;for(var e=0;e<c.length;++e){var f=c[e],g=d[e];if(f&&g)a:for(var h=0;h<g.length;++h){for(var i=g[h],j=0;j<f.length;++j)if(f[j].marker==i.marker)continue a;f.push(i)}else g&&(c[e]=g)}return c}function jf(a,b,c){var d=null;if(a.iter(b.line,c.line+1,function(a){if(a.markedSpans)for(var b=0;b<a.markedSpans.length;++b){var c=a.markedSpans[b].marker;!c.readOnly||d&&-1!=dh(d,c)||(d||(d=[])).push(c)}}),!d)return null;for(var e=[{from:b,to:c}],f=0;f<d.length;++f)for(var g=d[f],h=g.find(0),i=0;i<e.length;++i){var j=e[i];if(!(pb(j.to,h.from)<0||pb(j.from,h.to)>0)){var k=[i,1],l=pb(j.from,h.from),m=pb(j.to,h.to);(0>l||!g.inclusiveLeft&&!l)&&k.push({from:j.from,to:h.from}),(m>0||!g.inclusiveRight&&!m)&&k.push({from:h.to,to:j.to}),e.splice.apply(e,k),i+=k.length-1}}return e}function kf(a){var b=a.markedSpans;if(b){for(var c=0;c<b.length;++c)b[c].marker.detachLine(a);a.markedSpans=null}}function lf(a,b){if(b){for(var c=0;c<b.length;++c)b[c].marker.attachLine(a);a.markedSpans=b}}function mf(a){return a.inclusiveLeft?-1:0}function nf(a){return a.inclusiveRight?1:0}function of(a,b){var c=a.lines.length-b.lines.length;if(0!=c)return c;var d=a.find(),e=b.find(),f=pb(d.from,e.from)||mf(a)-mf(b);if(f)return-f;var g=pb(d.to,e.to)||nf(a)-nf(b);return g?g:b.id-a.id}function pf(a,b){var d,c=u&&a.markedSpans;if(c)for(var e,f=0;f<c.length;++f)e=c[f],e.marker.collapsed&&null==(b?e.from:e.to)&&(!d||of(d,e.marker)<0)&&(d=e.marker);return d}function qf(a){return pf(a,!0)}function rf(a){return pf(a,!1)}function sf(a,b,c,d,e){var f=gg(a,b),g=u&&f.markedSpans;if(g)for(var h=0;h<g.length;++h){var i=g[h];if(i.marker.collapsed){var j=i.marker.find(0),k=pb(j.from,c)||mf(i.marker)-mf(e),l=pb(j.to,d)||nf(i.marker)-nf(e);if(!(k>=0&&0>=l||0>=k&&l>=0)&&(0>=k&&(pb(j.to,c)>0||i.marker.inclusiveRight&&e.inclusiveLeft)||k>=0&&(pb(j.from,d)<0||i.marker.inclusiveLeft&&e.inclusiveRight)))return!0}}}function tf(a){for(var b;b=qf(a);)a=b.find(-1,!0).line;return a}function uf(a){for(var b,c;b=rf(a);)a=b.find(1,!0).line,(c||(c=[])).push(a);return c}function vf(a,b){var c=gg(a,b),d=tf(c);return c==d?b:kg(d)}function wf(a,b){if(b>a.lastLine())return b;var d,c=gg(a,b);if(!xf(a,c))return b;for(;d=rf(c);)c=d.find(1,!0).line;return kg(c)+1}function xf(a,b){var c=u&&b.markedSpans;if(c)for(var d,e=0;e<c.length;++e)if(d=c[e],d.marker.collapsed){if(null==d.from)return!0;if(!d.marker.widgetNode&&0==d.from&&d.marker.inclusiveLeft&&yf(a,b,d))return!0}}function yf(a,b,c){if(null==c.to){var d=c.marker.find(1,!0);return yf(a,d.line,af(d.line.markedSpans,c.marker))}if(c.marker.inclusiveRight&&c.to==b.text.length)return!0;for(var e,f=0;f<b.markedSpans.length;++f)if(e=b.markedSpans[f],e.marker.collapsed&&!e.marker.widgetNode&&e.from==c.to&&(null==e.to||e.to!=c.from)&&(e.marker.inclusiveLeft||c.marker.inclusiveRight)&&yf(a,b,e))return!0}function Af(a,b,c){mg(b)<(a.curOp&&a.curOp.scrollTop||a.doc.scrollTop)&&se(a,null,c)}function Bf(a){if(null!=a.height)return a.height;var b=a.doc.cm;if(!b)return 0;if(!th(document.body,a.node)){var c="position: relative;";a.coverGutter&&(c+="margin-left: -"+b.display.gutters.offsetWidth+"px;"),a.noHScroll&&(c+="width: "+b.display.wrapper.clientWidth+"px;"),sh(b.display.measure,ph("div",[a.node],null,c))}return a.height=a.node.offsetHeight}function Cf(a,b,c,d){var e=new zf(a,c,d),f=a.cm;return f&&e.noHScroll&&(f.display.alignWidgets=!0),we(a,b,"widget",function(b){var c=b.widgets||(b.widgets=[]);if(null==e.insertAt?c.push(e):c.splice(Math.min(c.length-1,Math.max(0,e.insertAt)),0,e),e.line=b,f&&!xf(a,b)){var d=mg(b)<a.scrollTop;jg(b,b.height+Bf(e)),d&&se(f,null,e.height),f.curOp.forceUpdate=!0}return!0}),e}function Ef(a,b,c,d){a.text=b,a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null),null!=a.order&&(a.order=null),kf(a),lf(a,c);var e=d?d(a):1;e!=a.height&&jg(a,e)}function Ff(a){a.parent=null,kf(a)}function Gf(a,b){if(a)for(;;){var c=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!c)break;a=a.slice(0,c.index)+a.slice(c.index+c[0].length);var d=c[1]?"bgClass":"textClass";null==b[d]?b[d]=c[2]:new RegExp("(?:^|s)"+c[2]+"(?:$|s)").test(b[d])||(b[d]+=" "+c[2])}return a}function Hf(a,b){if(a.blankLine)return a.blankLine(b);if(a.innerMode){var c=v.innerMode(a,b);return c.mode.blankLine?c.mode.blankLine(c.state):void 0}}function If(a,b,c,d){for(var e=0;10>e;e++){d&&(d[0]=v.innerMode(a,c).mode);var f=a.token(b,c);if(b.pos>b.start)return f}throw new Error("Mode "+a.name+" failed to advance stream.")}function Jf(a,b,c,d){function e(a){return{start:k.start,end:k.pos,string:k.current(),type:h||null,state:a?Je(f.mode,j):j}}var h,f=a.doc,g=f.mode;b=Ob(f,b);var l,i=gg(f,b.line),j=lc(a,b.line,c),k=new Se(i.text,a.options.tabSize);for(d&&(l=[]);(d||k.pos<b.ch)&&!k.eol();)k.start=k.pos,h=If(g,k,j),d&&l.push(e(!0));return d?l:e()}function Kf(a,b,c,d,e,f,g){var h=c.flattenSpans;null==h&&(h=a.options.flattenSpans);var l,i=0,j=null,k=new Se(b,a.options.tabSize),m=a.options.addModeClass&&[null];for(""==b&&Gf(Hf(c,d),f);!k.eol();){if(k.pos>a.options.maxHighlightLength?(h=!1,g&&Nf(a,b,d,k.pos),k.pos=b.length,l=null):l=Gf(If(c,k,d,m),f),m){var n=m[0].name;n&&(l="m-"+(l?n+" "+l:n))}if(!h||j!=l){for(;i<k.start;)i=Math.min(k.start,i+5e4),e(i,j);j=l}k.start=k.pos}for(;i<k.pos;){var o=Math.min(k.pos,i+5e4);e(o,j),i=o}}function Lf(a,b,c,d){var e=[a.state.modeGen],f={};Kf(a,b.text,a.doc.mode,c,function(a,b){e.push(a,b)},f,d);for(var g=0;g<a.state.overlays.length;++g){var h=a.state.overlays[g],i=1,j=0;Kf(a,b.text,h.mode,!0,function(a,b){for(var c=i;a>j;){var d=e[i];d>a&&e.splice(i,1,a,e[i+1],d),i+=2,j=Math.min(a,d)}if(b)if(h.opaque)e.splice(c,i-c,a,"cm-overlay "+b),i=c+2;else for(;i>c;c+=2){var f=e[c+1];e[c+1]=(f?f+" ":"")+"cm-overlay "+b}},f)}return{styles:e,classes:f.bgClass||f.textClass?f:null}}function Mf(a,b,c){if(!b.styles||b.styles[0]!=a.state.modeGen){var d=lc(a,kg(b)),e=Lf(a,b,b.text.length>a.options.maxHighlightLength?Je(a.doc.mode,d):d);b.stateAfter=d,b.styles=e.styles,e.classes?b.styleClasses=e.classes:b.styleClasses&&(b.styleClasses=null),c===a.doc.frontier&&a.doc.frontier++}return b.styles}function Nf(a,b,c,d){var e=a.doc.mode,f=new Se(b,a.options.tabSize);for(f.start=f.pos=d||0,""==b&&Hf(e,c);!f.eol();)If(e,f,c),f.start=f.pos}function Qf(a,b){if(!a||/^\s*$/.test(a))return null;var c=b.addModeClass?Pf:Of;return c[a]||(c[a]=a.replace(/\S+/g,"cm-$&"))}function Rf(a,b){var c=ph("span",null,null,f?"padding-right: .1px":null),e={pre:ph("pre",[c],"CodeMirror-line"),content:c,col:0,pos:0,cm:a,splitSpaces:(d||f)&&a.getOption("lineWrapping")};b.measure={};for(var g=0;g<=(b.rest?b.rest.length:0);g++){var i,h=g?b.rest[g-1]:b.line;e.pos=0,e.addToken=Tf,Hh(a.display.measure)&&(i=ng(h))&&(e.addToken=Vf(e.addToken,i)),e.map=[];var j=b!=a.display.externalMeasured&&kg(h);Xf(h,e,Mf(a,h,j)),h.styleClasses&&(h.styleClasses.bgClass&&(e.bgClass=yh(h.styleClasses.bgClass,e.bgClass||"")),h.styleClasses.textClass&&(e.textClass=yh(h.styleClasses.textClass,e.textClass||""))),0==e.map.length&&e.map.push(0,0,e.content.appendChild(Fh(a.display.measure))),0==g?(b.measure.map=e.map,b.measure.cache={}):((b.measure.maps||(b.measure.maps=[])).push(e.map),(b.measure.caches||(b.measure.caches=[])).push({}))}return f&&/\bcm-tab\b/.test(e.content.lastChild.className)&&(e.content.className="cm-tab-wrap-hack"),Lg(a,"renderLine",a,b.line,e.pre),e.pre.className&&(e.textClass=yh(e.pre.className,e.textClass||"")),e}function Sf(a){var b=ph("span","\u2022","cm-invalidchar");return b.title="\\u"+a.charCodeAt(0).toString(16),b.setAttribute("aria-label",b.title),b}function Tf(a,b,c,f,g,h,i){if(b){var j=a.splitSpaces?b.replace(/ {3,}/g,Uf):b,k=a.cm.state.specialChars,l=!1;if(k.test(b))for(var m=document.createDocumentFragment(),n=0;;){k.lastIndex=n;var o=k.exec(b),p=o?o.index-n:b.length-n;if(p){var q=document.createTextNode(j.slice(n,n+p));d&&9>e?m.appendChild(ph("span",[q])):m.appendChild(q),a.map.push(a.pos,a.pos+p,q),a.col+=p,a.pos+=p}if(!o)break;if(n+=p+1,"	"==o[0]){var r=a.cm.options.tabSize,s=r-a.col%r,q=m.appendChild(ph("span",ah(s),"cm-tab"));q.setAttribute("role","presentation"),q.setAttribute("cm-text","	"),a.col+=s}else if("\r"==o[0]||"\n"==o[0]){var q=m.appendChild(ph("span","\r"==o[0]?"\u240d":"\u2424","cm-invalidchar"));q.setAttribute("cm-text",o[0]),a.col+=1}else{var q=a.cm.options.specialCharPlaceholder(o[0]);q.setAttribute("cm-text",o[0]),d&&9>e?m.appendChild(ph("span",[q])):m.appendChild(q),a.col+=1}a.map.push(a.pos,a.pos+1,q),a.pos++}else{a.col+=b.length;var m=document.createTextNode(j);a.map.push(a.pos,a.pos+b.length,m),d&&9>e&&(l=!0),a.pos+=b.length}if(c||f||g||l||i){var t=c||"";f&&(t+=f),g&&(t+=g);var u=ph("span",[m],t,i);return h&&(u.title=h),a.content.appendChild(u)}a.content.appendChild(m)}}function Uf(a){for(var b=" ",c=0;c<a.length-2;++c)b+=c%2?" ":"\xa0";return b+=" "}function Vf(a,b){return function(c,d,e,f,g,h,i){e=e?e+" cm-force-border":"cm-force-border";for(var j=c.pos,k=j+d.length;;){for(var l=0;l<b.length;l++){var m=b[l];if(m.to>j&&m.from<=j)break}if(m.to>=k)return a(c,d,e,f,g,h,i);a(c,d.slice(0,m.to-j),e,f,null,h,i),f=null,d=d.slice(m.to-j),j=m.to}}}function Wf(a,b,c,d){var e=!d&&c.widgetNode;e&&a.map.push(a.pos,a.pos+b,e),!d&&a.cm.display.input.needsContentAttribute&&(e||(e=a.content.appendChild(document.createElement("span"))),e.setAttribute("cm-marker",c.id)),e&&(a.cm.display.input.setUneditable(e),a.content.appendChild(e)),a.pos+=b}function Xf(a,b,c){var d=a.markedSpans,e=a.text,f=0;if(d)for(var k,l,n,o,p,q,r,h=e.length,i=0,g=1,j="",m=0;;){if(m==i){n=o=p=q=l="",r=null,m=1/0;for(var s=[],t=0;t<d.length;++t){var u=d[t],v=u.marker;"bookmark"==v.type&&u.from==i&&v.widgetNode?s.push(v):u.from<=i&&(null==u.to||u.to>i||v.collapsed&&u.to==i&&u.from==i)?(null!=u.to&&u.to!=i&&m>u.to&&(m=u.to,o=""),v.className&&(n+=" "+v.className),v.css&&(l=v.css),v.startStyle&&u.from==i&&(p+=" "+v.startStyle),v.endStyle&&u.to==m&&(o+=" "+v.endStyle),v.title&&!q&&(q=v.title),v.collapsed&&(!r||of(r.marker,v)<0)&&(r=u)):u.from>i&&m>u.from&&(m=u.from)}if(r&&(r.from||0)==i){if(Wf(b,(null==r.to?h+1:r.to)-i,r.marker,null==r.from),null==r.to)return;r.to==i&&(r=!1)}if(!r&&s.length)for(var t=0;t<s.length;++t)Wf(b,0,s[t])}if(i>=h)break;for(var w=Math.min(h,m);;){if(j){var x=i+j.length;if(!r){var y=x>w?j.slice(0,w-i):j;b.addToken(b,y,k?k+n:n,p,i+y.length==m?o:"",q,l)}if(x>=w){j=j.slice(w-i),i=w;break}i=x,p=""}j=e.slice(f,f=c[g++]),k=Qf(c[g++],b.cm.options)}}else for(var g=1;g<c.length;g+=2)b.addToken(b,e.slice(f,f=c[g]),Qf(c[g+1],b.cm.options))}function Yf(a,b){return 0==b.from.ch&&0==b.to.ch&&""==bh(b.text)&&(!a.cm||a.cm.options.wholeLineUpdateBefore)}function Zf(a,b,c,d){function e(a){return c?c[a]:null}function f(a,c,e){Ef(a,c,e,d),Ng(a,"change",a,b)}function g(a,b){for(var c=a,f=[];b>c;++c)f.push(new Df(j[c],e(c),d));return f}var h=b.from,i=b.to,j=b.text,k=gg(a,h.line),l=gg(a,i.line),m=bh(j),n=e(j.length-1),o=i.line-h.line;if(b.full)a.insert(0,g(0,j.length)),a.remove(j.length,a.size-j.length);else if(Yf(a,b)){var p=g(0,j.length-1);f(l,l.text,n),o&&a.remove(h.line,o),p.length&&a.insert(h.line,p)}else if(k==l)if(1==j.length)f(k,k.text.slice(0,h.ch)+m+k.text.slice(i.ch),n);else{var p=g(1,j.length-1);p.push(new Df(m+k.text.slice(i.ch),n,d)),f(k,k.text.slice(0,h.ch)+j[0],e(0)),a.insert(h.line+1,p)}else if(1==j.length)f(k,k.text.slice(0,h.ch)+j[0]+l.text.slice(i.ch),e(0)),a.remove(h.line+1,o);else{f(k,k.text.slice(0,h.ch)+j[0],e(0)),f(l,m+l.text.slice(i.ch),n);var p=g(1,j.length-1);o>1&&a.remove(h.line+1,o-1),a.insert(h.line+1,p)}Ng(a,"change",a,b)}function $f(a){this.lines=a,this.parent=null;for(var b=0,c=0;b<a.length;++b)a[b].parent=this,c+=a[b].height;this.height=c}function _f(a){this.children=a;for(var b=0,c=0,d=0;d<a.length;++d){var e=a[d];b+=e.chunkSize(),c+=e.height,e.parent=this}this.size=b,this.height=c,this.parent=null}function eg(a,b,c){function d(a,e,f){if(a.linked)for(var g=0;g<a.linked.length;++g){var h=a.linked[g];if(h.doc!=e){var i=f&&h.sharedHist;(!c||i)&&(b(h.doc,i),d(h.doc,a,i))}}}d(a,null,!0)}function fg(a,b){if(b.cm)throw new Error("This document is already in use.");a.doc=b,b.cm=a,B(a),x(a),a.options.lineWrapping||H(a),a.options.mode=b.modeOption,id(a)}function gg(a,b){if(b-=a.first,0>b||b>=a.size)throw new Error("There is no line "+(b+a.first)+" in the document.");for(var c=a;!c.lines;)for(var d=0;;++d){var e=c.children[d],f=e.chunkSize();if(f>b){c=e;break}b-=f}return c.lines[b]}function hg(a,b,c){var d=[],e=b.line;return a.iter(b.line,c.line+1,function(a){var f=a.text;e==c.line&&(f=f.slice(0,c.ch)),e==b.line&&(f=f.slice(b.ch)),d.push(f),++e}),d}function ig(a,b,c){var d=[];return a.iter(b,c,function(a){d.push(a.text)}),d}function jg(a,b){var c=b-a.height;if(c)for(var d=a;d;d=d.parent)d.height+=c}function kg(a){if(null==a.parent)return null;for(var b=a.parent,c=dh(b.lines,a),d=b.parent;d;b=d,d=d.parent)for(var e=0;d.children[e]!=b;++e)c+=d.children[e].chunkSize();return c+b.first}function lg(a,b){var c=a.first;a:do{for(var d=0;d<a.children.length;++d){var e=a.children[d],f=e.height;if(f>b){a=e;continue a}b-=f,c+=e.chunkSize()}return c}while(!a.lines);for(var d=0;d<a.lines.length;++d){var g=a.lines[d],h=g.height;if(h>b)break;b-=h}return c+d}function mg(a){a=tf(a);for(var b=0,c=a.parent,d=0;d<c.lines.length;++d){var e=c.lines[d];if(e==a)break;b+=e.height}for(var f=c.parent;f;c=f,f=c.parent)for(var d=0;d<f.children.length;++d){var g=f.children[d];if(g==c)break;b+=g.height}return b}function ng(a){var b=a.order;return null==b&&(b=a.order=ai(a.text)),b}function og(a){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=a||1}function pg(a,b){var c={from:qb(b.from),to:be(b),text:hg(a,b.from,b.to)};return wg(a,c,b.from.line,b.to.line+1),eg(a,function(a){wg(a,c,b.from.line,b.to.line+1)},!0),c}function qg(a){for(;a.length;){var b=bh(a);if(!b.ranges)break;a.pop()}}function rg(a,b){return b?(qg(a.done),bh(a.done)):a.done.length&&!bh(a.done).ranges?bh(a.done):a.done.length>1&&!a.done[a.done.length-2].ranges?(a.done.pop(),bh(a.done)):void 0}function sg(a,b,c,d){var e=a.history;e.undone.length=0;var g,f=+new Date;if((e.lastOp==d||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&a.cm&&e.lastModTime>f-a.cm.options.historyEventDelay||"*"==b.origin.charAt(0)))&&(g=rg(e,e.lastOp==d))){var h=bh(g.changes);0==pb(b.from,b.to)&&0==pb(b.from,h.to)?h.to=be(b):g.changes.push(pg(a,b))}else{var i=bh(e.done);for(i&&i.ranges||vg(a.sel,e.done),g={changes:[pg(a,b)],generation:e.generation},e.done.push(g);e.done.length>e.undoDepth;)e.done.shift(),e.done[0].ranges||e.done.shift()}e.done.push(c),e.generation=++e.maxGeneration,e.lastModTime=e.lastSelTime=f,e.lastOp=e.lastSelOp=d,e.lastOrigin=e.lastSelOrigin=b.origin,h||Lg(a,"historyAdded")}function tg(a,b,c,d){var e=b.charAt(0);return"*"==e||"+"==e&&c.ranges.length==d.ranges.length&&c.somethingSelected()==d.somethingSelected()&&new Date-a.history.lastSelTime<=(a.cm?a.cm.options.historyEventDelay:500)}function ug(a,b,c,d){var e=a.history,f=d&&d.origin;c==e.lastSelOp||f&&e.lastSelOrigin==f&&(e.lastModTime==e.lastSelTime&&e.lastOrigin==f||tg(a,f,bh(e.done),b))?e.done[e.done.length-1]=b:vg(b,e.done),e.lastSelTime=+new Date,e.lastSelOrigin=f,e.lastSelOp=c,d&&d.clearRedo!==!1&&qg(e.undone)}function vg(a,b){var c=bh(b);c&&c.ranges&&c.equals(a)||b.push(a)}function wg(a,b,c,d){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,c),Math.min(a.first+a.size,d),function(c){c.markedSpans&&((e||(e=b["spans_"+a.id]={}))[f]=c.markedSpans),++f})}function xg(a){if(!a)return null;for(var c,b=0;b<a.length;++b)a[b].marker.explicitlyCleared?c||(c=a.slice(0,b)):c&&c.push(a[b]);return c?c.length?c:null:a}function yg(a,b){var c=b["spans_"+a.id];if(!c)return null;for(var d=0,e=[];d<b.text.length;++d)e.push(xg(c[d]));return e}function zg(a,b,c){for(var d=0,e=[];d<a.length;++d){var f=a[d];if(f.ranges)e.push(c?Jb.prototype.deepCopy.call(f):f);else{var g=f.changes,h=[];e.push({changes:h});for(var i=0;i<g.length;++i){var k,j=g[i];if(h.push({from:j.from,to:j.to,text:j.text}),b)for(var l in j)(k=l.match(/^spans_(\d+)$/))&&dh(b,Number(k[1]))>-1&&(bh(h)[l]=j[l],delete j[l])}}}return e}function Ag(a,b,c,d){c<a.line?a.line+=d:b<a.line&&(a.line=b,a.ch=0)}function Bg(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e],g=!0;if(f.ranges){f.copied||(f=a[e]=f.deepCopy(),f.copied=!0);for(var h=0;h<f.ranges.length;h++)Ag(f.ranges[h].anchor,b,c,d),Ag(f.ranges[h].head,b,c,d)}else{for(var h=0;h<f.changes.length;++h){var i=f.changes[h];if(c<i.from.line)i.from=ob(i.from.line+d,i.from.ch),i.to=ob(i.to.line+d,i.to.ch);else if(b<=i.to.line){g=!1;break}}g||(a.splice(0,e+1),e=0)}}}function Cg(a,b){var c=b.from.line,d=b.to.line,e=b.text.length-(d-c)-1;Bg(a.done,c,d,e),Bg(a.undone,c,d,e)}function Fg(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function Hg(a){return a.target||a.srcElement}function Ig(a){var b=a.which;return null==b&&(1&a.button?b=1:2&a.button?b=3:4&a.button&&(b=2)),o&&a.ctrlKey&&1==b&&(b=3),b}function Ng(a,b){function f(a){return function(){a.apply(null,d)}}var c=a._handlers&&a._handlers[b];if(c){var e,d=Array.prototype.slice.call(arguments,2);Tc?e=Tc.delayedCallbacks:Mg?e=Mg:(e=Mg=[],setTimeout(Og,0));for(var g=0;g<c.length;++g)e.push(f(c[g]))}}function Og(){var a=Mg;Mg=null;for(var b=0;b<a.length;++b)a[b]()}function Pg(a,b,c){return"string"==typeof b&&(b={type:b,preventDefault:function(){this.defaultPrevented=!0}}),Lg(a,c||b.type,a,b),Fg(b)||b.codemirrorIgnore}function Qg(a){var b=a._handlers&&a._handlers.cursorActivity;if(b)for(var c=a.curOp.cursorActivityHandlers||(a.curOp.cursorActivityHandlers=[]),d=0;d<b.length;++d)-1==dh(c,b[d])&&c.push(b[d])}function Rg(a,b){var c=a._handlers&&a._handlers[b];return c&&c.length>0}function Sg(a){a.prototype.on=function(a,b){Jg(this,a,b)},a.prototype.off=function(a,b){Kg(this,a,b)}}function Yg(){this.id=null}function ah(a){for(;_g.length<=a;)_g.push(bh(_g)+" ");return _g[a]}function bh(a){return a[a.length-1]}function dh(a,b){for(var c=0;c<a.length;++c)if(a[c]==b)return c;return-1}function eh(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d);return c}function fh(){}function gh(a,b){var c;return Object.create?c=Object.create(a):(fh.prototype=a,c=new fh),b&&hh(b,c),c}function hh(a,b,c){b||(b={});for(var d in a)!a.hasOwnProperty(d)||c===!1&&b.hasOwnProperty(d)||(b[d]=a[d]);return b}function ih(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function lh(a,b){return b?b.source.indexOf("\\w")>-1&&kh(a)?!0:b.test(a):kh(a)}function mh(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function oh(a){return a.charCodeAt(0)>=768&&nh.test(a)}function ph(a,b,c,d){var e=document.createElement(a);if(c&&(e.className=c),d&&(e.style.cssText=d),"string"==typeof b)e.appendChild(document.createTextNode(b));else if(b)for(var f=0;f<b.length;++f)e.appendChild(b[f]);return e}function rh(a){for(var b=a.childNodes.length;b>0;--b)a.removeChild(a.firstChild);return a}function sh(a,b){return rh(a).appendChild(b)}function uh(){for(var a=document.activeElement;a&&a.root&&a.root.activeElement;)a=a.root.activeElement;return a}function vh(a){return new RegExp("(^|\\s)"+a+"(?:$|\\s)\\s*")}function yh(a,b){for(var c=a.split(" "),d=0;d<c.length;d++)c[d]&&!vh(c[d]).test(b)&&(b+=" "+c[d]);return b}function zh(a){if(document.body.getElementsByClassName)for(var b=document.body.getElementsByClassName("CodeMirror"),c=0;c<b.length;c++){var d=b[c].CodeMirror;d&&a(d)}}function Bh(){Ah||(Ch(),Ah=!0)}function Ch(){var a;Jg(window,"resize",function(){null==a&&(a=setTimeout(function(){a=null,zh(rd)},100))}),Jg(window,"blur",function(){zh($d)})}function Fh(a){if(null==Eh){var b=ph("span","\u200b");sh(a,ph("span",[b,document.createTextNode("x")])),0!=a.firstChild.offsetHeight&&(Eh=b.offsetWidth<=1&&b.offsetHeight>2&&!(d&&8>e))}var c=Eh?ph("span","\u200b"):ph("span","\xa0",null,"display: inline-block; width: 1px; margin-right: -1px");return c.setAttribute("cm-text",""),c}function Hh(a){if(null!=Gh)return Gh;var b=sh(a,document.createTextNode("A\u062eA")),c=qh(b,0,1).getBoundingClientRect();if(!c||c.left==c.right)return!1;var d=qh(b,1,2).getBoundingClientRect();return Gh=d.right-c.right<3}function Mh(a){if(null!=Lh)return Lh;var b=sh(a,ph("span","x")),c=b.getBoundingClientRect(),d=qh(b,0,1).getBoundingClientRect();return Lh=Math.abs(c.left-d.left)>1}function Oh(a,b,c,d){if(!a)return d(b,c,"ltr");for(var e=!1,f=0;f<a.length;++f){var g=a[f];(g.from<c&&g.to>b||b==c&&g.to==b)&&(d(Math.max(g.from,b),Math.min(g.to,c),1==g.level?"rtl":"ltr"),e=!0)}e||d(b,c,"ltr")}function Ph(a){return a.level%2?a.to:a.from}function Qh(a){return a.level%2?a.from:a.to}function Rh(a){var b=ng(a);return b?Ph(b[0]):0}function Sh(a){var b=ng(a);return b?Qh(bh(b)):a.text.length}function Th(a,b){var c=gg(a.doc,b),d=tf(c);d!=c&&(b=kg(d));var e=ng(d),f=e?e[0].level%2?Sh(d):Rh(d):0;return ob(b,f)}function Uh(a,b){for(var c,d=gg(a.doc,b);c=rf(d);)d=c.find(1,!0).line,b=null;var e=ng(d),f=e?e[0].level%2?Rh(d):Sh(d):d.text.length;return ob(null==b?kg(d):b,f)}function Vh(a,b){var c=Th(a,b.line),d=gg(a.doc,c.line),e=ng(d);if(!e||0==e[0].level){var f=Math.max(0,d.text.search(/\S/)),g=b.line==c.line&&b.ch<=f&&b.ch;return ob(c.line,g?0:f)}return c}function Wh(a,b,c){var d=a[0].level;return b==d?!0:c==d?!1:c>b}function Yh(a,b){Xh=null;for(var d,c=0;c<a.length;++c){var e=a[c];if(e.from<b&&e.to>b)return c;if(e.from==b||e.to==b){if(null!=d)return Wh(a,e.level,a[d].level)?(e.from!=e.to&&(Xh=d),c):(e.from!=e.to&&(Xh=c),d);d=c}}return d}function Zh(a,b,c,d){if(!d)return b+c;do b+=c;while(b>0&&oh(a.text.charAt(b)));return b}function $h(a,b,c,d){var e=ng(a);if(!e)return _h(a,b,c,d);for(var f=Yh(e,b),g=e[f],h=Zh(a,b,g.level%2?-c:c,d);;){if(h>g.from&&h<g.to)return h;if(h==g.from||h==g.to)return Yh(e,h)==f?h:(g=e[f+=c],c>0==g.level%2?g.to:g.from);if(g=e[f+=c],!g)return null;h=c>0==g.level%2?Zh(a,g.to,-1,d):Zh(a,g.from,1,d)}}function _h(a,b,c,d){var e=b+c;if(d)for(;e>0&&oh(a.text.charAt(e));)e+=c;return 0>e||e>a.text.length?null:e}var a=/gecko\/\d/i.test(navigator.userAgent),b=/MSIE \d/.test(navigator.userAgent),c=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),d=b||c,e=d&&(b?document.documentMode||6:c[1]),f=/WebKit\//.test(navigator.userAgent),g=f&&/Qt\/\d+\.\d+/.test(navigator.userAgent),h=/Chrome\//.test(navigator.userAgent),i=/Opera\//.test(navigator.userAgent),j=/Apple Computer/.test(navigator.vendor),k=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent),l=/PhantomJS/.test(navigator.userAgent),m=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),n=m||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent),o=m||/Mac/.test(navigator.platform),p=/win/i.test(navigator.platform),q=i&&navigator.userAgent.match(/Version\/(\d*\.\d*)/);q&&(q=Number(q[1])),q&&q>=15&&(i=!1,f=!0);var r=o&&(g||i&&(null==q||12.11>q)),s=a||d&&e>=9,t=!1,u=!1;K.prototype=hh({update:function(a){var b=a.scrollWidth>a.clientWidth+1,c=a.scrollHeight>a.clientHeight+1,d=a.nativeBarWidth;if(c){this.vert.style.display="block",this.vert.style.bottom=b?d+"px":"0";var e=a.viewHeight-(b?d:0);this.vert.firstChild.style.height=Math.max(0,a.scrollHeight-a.clientHeight+e)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0";if(b){this.horiz.style.display="block",this.horiz.style.right=c?d+"px":"0",this.horiz.style.left=a.barLeft+"px";var f=a.viewWidth-a.barLeft-(c?d:0);this.horiz.firstChild.style.width=a.scrollWidth-a.clientWidth+f+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedOverlay&&a.clientHeight>0&&(0==d&&this.overlayHack(),this.checkedOverlay=!0),{right:c?d:0,bottom:b?d:0}},setScrollLeft:function(a){this.horiz.scrollLeft!=a&&(this.horiz.scrollLeft=a)},setScrollTop:function(a){this.vert.scrollTop!=a&&(this.vert.scrollTop=a)},overlayHack:function(){var a=o&&!k?"12px":"18px";this.horiz.style.minHeight=this.vert.style.minWidth=a;var b=this,c=function(a){Hg(a)!=b.vert&&Hg(a)!=b.horiz&&dd(b.cm,ud)(a)};Jg(this.vert,"mousedown",c),Jg(this.horiz,"mousedown",c)},clear:function(){var a=this.horiz.parentNode;a.removeChild(this.horiz),a.removeChild(this.vert)}},K.prototype),L.prototype=hh({update:function(){return{bottom:0,right:0}},setScrollLeft:function(){},setScrollTop:function(){},clear:function(){}},L.prototype),v.scrollbarModel={"native":K,"null":L},U.prototype.signal=function(a,b){Rg(a,b)&&this.events.push(arguments)},U.prototype.finish=function(){for(var a=0;a<this.events.length;a++)Lg.apply(null,this.events[a])};var ob=v.Pos=function(a,b){return this instanceof ob?(this.line=a,this.ch=b,void 0):new ob(a,b)},pb=v.cmpPos=function(a,b){return a.line-b.line||a.ch-b.ch},vb=null;Bb.prototype=hh({init:function(a){function h(a){if(c.somethingSelected())vb=c.getSelections(),b.inaccurateSelection&&(b.prevInput="",b.inaccurateSelection=!1,g.value=vb.join("\n"),ch(g));else{if(!c.options.lineWiseCopyCut)return;var d=zb(c);vb=d.text,"cut"==a.type?c.setSelections(d.ranges,null,Vg):(b.prevInput="",g.value=d.text.join("\n"),ch(g))}"cut"==a.type&&(c.state.cutIncoming=!0)}var b=this,c=this.cm,f=this.wrapper=Cb(),g=this.textarea=f.firstChild;a.wrapper.insertBefore(f,a.wrapper.firstChild),m&&(g.style.width="0px"),Jg(g,"input",function(){d&&e>=9&&b.hasSelection&&(b.hasSelection=null),b.poll()}),Jg(g,"paste",function(a){return xb(a,c)?!0:(c.state.pasteIncoming=!0,b.fastPoll(),void 0)}),Jg(g,"cut",h),Jg(g,"copy",h),Jg(a.scroller,"paste",function(d){sd(a,d)||(c.state.pasteIncoming=!0,b.focus())}),Jg(a.lineSpace,"selectstart",function(b){sd(a,b)||Dg(b)}),Jg(g,"compositionstart",function(){var a=c.getCursor("from");b.composing={start:a,range:c.markText(a,c.getCursor("to"),{className:"CodeMirror-composing"})}
}),Jg(g,"compositionend",function(){b.composing&&(b.poll(),b.composing.range.clear(),b.composing=null)})},prepareSelection:function(){var a=this.cm,b=a.display,c=a.doc,d=ec(a);if(a.options.moveInputWithCursor){var e=Lc(a,c.sel.primary().head,"div"),f=b.wrapper.getBoundingClientRect(),g=b.lineDiv.getBoundingClientRect();d.teTop=Math.max(0,Math.min(b.wrapper.clientHeight-10,e.top+g.top-f.top)),d.teLeft=Math.max(0,Math.min(b.wrapper.clientWidth-10,e.left+g.left-f.left))}return d},showSelection:function(a){var b=this.cm,c=b.display;sh(c.cursorDiv,a.cursors),sh(c.selectionDiv,a.selection),null!=a.teTop&&(this.wrapper.style.top=a.teTop+"px",this.wrapper.style.left=a.teLeft+"px")},reset:function(a){if(!this.contextMenuPending){var b,c,f=this.cm,g=f.doc;if(f.somethingSelected()){this.prevInput="";var h=g.sel.primary();b=Kh&&(h.to().line-h.from().line>100||(c=f.getSelection()).length>1e3);var i=b?"-":c||f.getSelection();this.textarea.value=i,f.state.focused&&ch(this.textarea),d&&e>=9&&(this.hasSelection=i)}else a||(this.prevInput=this.textarea.value="",d&&e>=9&&(this.hasSelection=null));this.inaccurateSelection=b}},getField:function(){return this.textarea},supportsTouch:function(){return!1},focus:function(){if("nocursor"!=this.cm.options.readOnly&&(!n||uh()!=this.textarea))try{this.textarea.focus()}catch(a){}},blur:function(){this.textarea.blur()},resetPosition:function(){this.wrapper.style.top=this.wrapper.style.left=0},receivedFocus:function(){this.slowPoll()},slowPoll:function(){var a=this;a.pollingFast||a.polling.set(this.cm.options.pollInterval,function(){a.poll(),a.cm.state.focused&&a.slowPoll()})},fastPoll:function(){function c(){var d=b.poll();d||a?(b.pollingFast=!1,b.slowPoll()):(a=!0,b.polling.set(60,c))}var a=!1,b=this;b.pollingFast=!0,b.polling.set(20,c)},poll:function(){var a=this.cm,b=this.textarea,c=this.prevInput;if(this.contextMenuPending||!a.state.focused||Jh(b)&&!c&&!this.composing||ub(a)||a.options.disableInput||a.state.keySeq)return!1;var f=b.value;if(f==c&&!a.somethingSelected())return!1;if(d&&e>=9&&this.hasSelection===f||o&&/[\uf700-\uf7ff]/.test(f))return a.display.input.reset(),!1;if(a.doc.sel==a.display.selForContextMenu){var g=f.charCodeAt(0);if(8203!=g||c||(c="\u200b"),8666==g)return this.reset(),this.cm.execCommand("undo")}for(var h=0,i=Math.min(c.length,f.length);i>h&&c.charCodeAt(h)==f.charCodeAt(h);)++h;var j=this;return cd(a,function(){wb(a,f.slice(h),c.length-h,null,j.composing?"*compose":null),f.length>1e3||f.indexOf("\n")>-1?b.value=j.prevInput="":j.prevInput=f,j.composing&&(j.composing.range.clear(),j.composing.range=a.markText(j.composing.start,a.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},ensurePolled:function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},onKeyPress:function(){d&&e>=9&&(this.hasSelection=null),this.fastPoll()},onContextMenu:function(a){function o(){if(null!=h.selectionStart){var a=c.somethingSelected(),d="\u200b"+(a?h.value:"");h.value="\u21da",h.value=d,b.prevInput=a?"":"\u200b",h.selectionStart=1,h.selectionEnd=d.length,g.selForContextMenu=c.doc.sel}}function p(){if(b.contextMenuPending=!1,b.wrapper.style.position="relative",h.style.cssText=m,d&&9>e&&g.scrollbars.setScrollTop(g.scroller.scrollTop=k),null!=h.selectionStart){(!d||d&&9>e)&&o();var a=0,f=function(){g.selForContextMenu==c.doc.sel&&0==h.selectionStart&&h.selectionEnd>0&&"\u200b"==b.prevInput?dd(c,Le.selectAll)(c):a++<10?g.detectingSelectAll=setTimeout(f,500):g.input.reset()};g.detectingSelectAll=setTimeout(f,200)}}var b=this,c=b.cm,g=c.display,h=b.textarea,j=td(c,a),k=g.scroller.scrollTop;if(j&&!i){var l=c.options.resetSelectionOnContextMenu;l&&-1==c.doc.sel.contains(j)&&dd(c,Zb)(c.doc,Mb(j),Vg);var m=h.style.cssText;if(b.wrapper.style.position="absolute",h.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(a.clientY-5)+"px; left: "+(a.clientX-5)+"px; z-index: 1000; background: "+(d?"rgba(255, 255, 255, .05)":"transparent")+"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",f)var n=window.scrollY;if(g.input.focus(),f&&window.scrollTo(null,n),g.input.reset(),c.somethingSelected()||(h.value=b.prevInput=" "),b.contextMenuPending=!0,g.selForContextMenu=c.doc.sel,clearTimeout(g.detectingSelectAll),d&&e>=9&&o(),s){Gg(a);var q=function(){Kg(window,"mouseup",q),setTimeout(p,20)};Jg(window,"mouseup",q)}else setTimeout(p,50)}},setUneditable:fh,needsContentAttribute:!1},Bb.prototype),Db.prototype=hh({init:function(a){function e(a){if(c.somethingSelected())vb=c.getSelections(),"cut"==a.type&&c.replaceSelection("",null,"cut");else{if(!c.options.lineWiseCopyCut)return;var b=zb(c);vb=b.text,"cut"==a.type&&c.operation(function(){c.setSelections(b.ranges,0,Vg),c.replaceSelection("",null,"cut")})}if(a.clipboardData&&!m)a.preventDefault(),a.clipboardData.clearData(),a.clipboardData.setData("text/plain",vb.join("\n"));else{var d=Cb(),e=d.firstChild;c.display.lineSpace.insertBefore(d,c.display.lineSpace.firstChild),e.value=vb.join("\n");var f=document.activeElement;ch(e),setTimeout(function(){c.display.lineSpace.removeChild(d),f.focus()},50)}}var b=this,c=b.cm,d=b.div=a.lineDiv;d.contentEditable="true",Ab(d),Jg(d,"paste",function(a){xb(a,c)}),Jg(d,"compositionstart",function(a){var d=a.data;if(b.composing={sel:c.doc.sel,data:d,startData:d},d){var e=c.doc.sel.primary(),f=c.getLine(e.head.line),g=f.indexOf(d,Math.max(0,e.head.ch-d.length));g>-1&&g<=e.head.ch&&(b.composing.sel=Mb(ob(e.head.line,g),ob(e.head.line,g+d.length)))}}),Jg(d,"compositionupdate",function(a){b.composing.data=a.data}),Jg(d,"compositionend",function(a){var c=b.composing;c&&(a.data==c.startData||/\u200b/.test(a.data)||(c.data=a.data),setTimeout(function(){c.handled||b.applyComposition(c),b.composing==c&&(b.composing=null)},50))}),Jg(d,"touchstart",function(){b.forceCompositionEnd()}),Jg(d,"input",function(){b.composing||b.pollContent()||cd(b.cm,function(){id(c)})}),Jg(d,"copy",e),Jg(d,"cut",e)},prepareSelection:function(){var a=ec(this.cm,!1);return a.focus=this.cm.state.focused,a},showSelection:function(a){a&&this.cm.display.view.length&&(a.focus&&this.showPrimarySelection(),this.showMultipleSelections(a))},showPrimarySelection:function(){var b=window.getSelection(),c=this.cm.doc.sel.primary(),d=Gb(this.cm,b.anchorNode,b.anchorOffset),e=Gb(this.cm,b.focusNode,b.focusOffset);if(!d||d.bad||!e||e.bad||0!=pb(sb(d,e),c.from())||0!=pb(rb(d,e),c.to())){var f=Eb(this.cm,c.from()),g=Eb(this.cm,c.to());if(f||g){var h=this.cm.display.view,i=b.rangeCount&&b.getRangeAt(0);if(f){if(!g){var j=h[h.length-1].measure,k=j.maps?j.maps[j.maps.length-1]:j.map;g={node:k[k.length-1],offset:k[k.length-2]-k[k.length-3]}}}else f={node:h[0].measure.map[2],offset:0};try{var l=qh(f.node,f.offset,g.offset,g.node)}catch(m){}l&&(b.removeAllRanges(),b.addRange(l),i&&null==b.anchorNode?b.addRange(i):a&&this.startGracePeriod()),this.rememberSelection()}}},startGracePeriod:function(){var a=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){a.gracePeriod=!1,a.selectionChanged()&&a.cm.operation(function(){a.cm.curOp.selectionChanged=!0})},20)},showMultipleSelections:function(a){sh(this.cm.display.cursorDiv,a.cursors),sh(this.cm.display.selectionDiv,a.selection)},rememberSelection:function(){var a=window.getSelection();this.lastAnchorNode=a.anchorNode,this.lastAnchorOffset=a.anchorOffset,this.lastFocusNode=a.focusNode,this.lastFocusOffset=a.focusOffset},selectionInEditor:function(){var a=window.getSelection();if(!a.rangeCount)return!1;var b=a.getRangeAt(0).commonAncestorContainer;return th(this.div,b)},focus:function(){"nocursor"!=this.cm.options.readOnly&&this.div.focus()},blur:function(){this.div.blur()},getField:function(){return this.div},supportsTouch:function(){return!0},receivedFocus:function(){function b(){a.cm.state.focused&&(a.pollSelection(),a.polling.set(a.cm.options.pollInterval,b))}var a=this;this.selectionInEditor()?this.pollSelection():cd(this.cm,function(){a.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,b)},selectionChanged:function(){var a=window.getSelection();return a.anchorNode!=this.lastAnchorNode||a.anchorOffset!=this.lastAnchorOffset||a.focusNode!=this.lastFocusNode||a.focusOffset!=this.lastFocusOffset},pollSelection:function(){if(!this.composing&&!this.gracePeriod&&this.selectionChanged()){var a=window.getSelection(),b=this.cm;this.rememberSelection();var c=Gb(b,a.anchorNode,a.anchorOffset),d=Gb(b,a.focusNode,a.focusOffset);c&&d&&cd(b,function(){Zb(b.doc,Mb(c,d),Vg),(c.bad||d.bad)&&(b.curOp.selectionChanged=!0)})}},pollContent:function(){var a=this.cm,b=a.display,c=a.doc.sel.primary(),d=c.from(),e=c.to();if(d.line<b.viewFrom||e.line>b.viewTo-1)return!1;var f;if(d.line==b.viewFrom||0==(f=ld(a,d.line)))var g=kg(b.view[0].line),h=b.view[0].node;else var g=kg(b.view[f].line),h=b.view[f-1].node.nextSibling;var i=ld(a,e.line);if(i==b.view.length-1)var j=b.viewTo-1,k=b.lineDiv.lastChild;else var j=kg(b.view[i+1].line)-1,k=b.view[i+1].node.previousSibling;for(var l=a.doc.splitLines(Ib(a,h,k,g,j)),m=hg(a.doc,ob(g,0),ob(j,gg(a.doc,j).text.length));l.length>1&&m.length>1;)if(bh(l)==bh(m))l.pop(),m.pop(),j--;else{if(l[0]!=m[0])break;l.shift(),m.shift(),g++}for(var n=0,o=0,p=l[0],q=m[0],r=Math.min(p.length,q.length);r>n&&p.charCodeAt(n)==q.charCodeAt(n);)++n;for(var s=bh(l),t=bh(m),u=Math.min(s.length-(1==l.length?n:0),t.length-(1==m.length?n:0));u>o&&s.charCodeAt(s.length-o-1)==t.charCodeAt(t.length-o-1);)++o;l[l.length-1]=s.slice(0,s.length-o),l[0]=l[0].slice(n);var v=ob(g,n),w=ob(j,m.length?bh(m).length-o:0);return l.length>1||l[0]||pb(v,w)?(ne(a.doc,l,v,w,"+input"),!0):void 0},ensurePolled:function(){this.forceCompositionEnd()},reset:function(){this.forceCompositionEnd()},forceCompositionEnd:function(){this.composing&&!this.composing.handled&&(this.applyComposition(this.composing),this.composing.handled=!0,this.div.blur(),this.div.focus())},applyComposition:function(a){a.data&&a.data!=a.startData&&dd(this.cm,wb)(this.cm,a.data,0,a.sel)},setUneditable:function(a){a.setAttribute("contenteditable","false")},onKeyPress:function(a){a.preventDefault(),dd(this.cm,wb)(this.cm,String.fromCharCode(null==a.charCode?a.keyCode:a.charCode),0)},onContextMenu:fh,resetPosition:fh,needsContentAttribute:!0},Db.prototype),v.inputStyles={textarea:Bb,contenteditable:Db},Jb.prototype={primary:function(){return this.ranges[this.primIndex]},equals:function(a){if(a==this)return!0;if(a.primIndex!=this.primIndex||a.ranges.length!=this.ranges.length)return!1;for(var b=0;b<this.ranges.length;b++){var c=this.ranges[b],d=a.ranges[b];if(0!=pb(c.anchor,d.anchor)||0!=pb(c.head,d.head))return!1}return!0},deepCopy:function(){for(var a=[],b=0;b<this.ranges.length;b++)a[b]=new Kb(qb(this.ranges[b].anchor),qb(this.ranges[b].head));return new Jb(a,this.primIndex)},somethingSelected:function(){for(var a=0;a<this.ranges.length;a++)if(!this.ranges[a].empty())return!0;return!1},contains:function(a,b){b||(b=a);for(var c=0;c<this.ranges.length;c++){var d=this.ranges[c];if(pb(b,d.from())>=0&&pb(a,d.to())<=0)return c}return-1}},Kb.prototype={from:function(){return sb(this.anchor,this.head)},to:function(){return rb(this.anchor,this.head)},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch}};var Qc,vd,wd,zc={left:0,right:0,top:0,bottom:0},Tc=null,Uc=0,Cd=0,Jd=0,Kd=null;d?Kd=-.53:a?Kd=15:h?Kd=-.7:j&&(Kd=-1/3);var Ld=function(a){var b=a.wheelDeltaX,c=a.wheelDeltaY;return null==b&&a.detail&&a.axis==a.HORIZONTAL_AXIS&&(b=a.detail),null==c&&a.detail&&a.axis==a.VERTICAL_AXIS?c=a.detail:null==c&&(c=a.wheelDelta),{x:b,y:c}};v.wheelEventPixels=function(a){var b=Ld(a);return b.x*=Kd,b.y*=Kd,b};var Pd=new Yg,Td=null,be=v.changeEnd=function(a){return a.text?ob(a.from.line+a.text.length-1,bh(a.text).length+(1==a.text.length?a.from.ch:0)):a.to};v.prototype={constructor:v,focus:function(){window.focus(),this.display.input.focus()},setOption:function(a,b){var c=this.options,d=c[a];(c[a]!=b||"mode"==a)&&(c[a]=b,Be.hasOwnProperty(a)&&dd(this,Be[a])(this,b,d))},getOption:function(a){return this.options[a]},getDoc:function(){return this.doc},addKeyMap:function(a,b){this.state.keyMaps[b?"push":"unshift"](Re(a))},removeKeyMap:function(a){for(var b=this.state.keyMaps,c=0;c<b.length;++c)if(b[c]==a||b[c].name==a)return b.splice(c,1),!0},addOverlay:ed(function(a,b){var c=a.token?a:v.getMode(this.options,a);if(c.startState)throw new Error("Overlays may not be stateful.");this.state.overlays.push({mode:c,modeSpec:a,opaque:b&&b.opaque}),this.state.modeGen++,id(this)}),removeOverlay:ed(function(a){for(var b=this.state.overlays,c=0;c<b.length;++c){var d=b[c].modeSpec;if(d==a||"string"==typeof a&&d.name==a)return b.splice(c,1),this.state.modeGen++,id(this),void 0}}),indentLine:ed(function(a,b,c){"string"!=typeof b&&"number"!=typeof b&&(b=null==b?this.options.smartIndent?"smart":"prev":b?"add":"subtract"),Qb(this.doc,a)&&ve(this,a,b,c)}),indentSelection:ed(function(a){for(var b=this.doc.sel.ranges,c=-1,d=0;d<b.length;d++){var e=b[d];if(e.empty())e.head.line>c&&(ve(this,e.head.line,a,!0),c=e.head.line,d==this.doc.sel.primIndex&&te(this));else{var f=e.from(),g=e.to(),h=Math.max(c,f.line);c=Math.min(this.lastLine(),g.line-(g.ch?0:1))+1;for(var i=h;c>i;++i)ve(this,i,a);var j=this.doc.sel.ranges;0==f.ch&&b.length==j.length&&j[d].from().ch>0&&Vb(this.doc,d,new Kb(f,j[d].to()),Vg)}}}),getTokenAt:function(a,b){return Jf(this,a,b)},getLineTokens:function(a,b){return Jf(this,ob(a),b,!0)},getTokenTypeAt:function(a){a=Ob(this.doc,a);var f,b=Mf(this,gg(this.doc,a.line)),c=0,d=(b.length-1)/2,e=a.ch;if(0==e)f=b[2];else for(;;){var g=c+d>>1;if((g?b[2*g-1]:0)>=e)d=g;else{if(!(b[2*g+1]<e)){f=b[2*g+2];break}c=g+1}}var h=f?f.indexOf("cm-overlay "):-1;return 0>h?f:0==h?null:f.slice(0,h-1)},getModeAt:function(a){var b=this.doc.mode;return b.innerMode?v.innerMode(b,this.getTokenAt(a).state).mode:b},getHelper:function(a,b){return this.getHelpers(a,b)[0]},getHelpers:function(a,b){var c=[];if(!Ie.hasOwnProperty(b))return c;var d=Ie[b],e=this.getModeAt(a);if("string"==typeof e[b])d[e[b]]&&c.push(d[e[b]]);else if(e[b])for(var f=0;f<e[b].length;f++){var g=d[e[b][f]];g&&c.push(g)}else e.helperType&&d[e.helperType]?c.push(d[e.helperType]):d[e.name]&&c.push(d[e.name]);for(var f=0;f<d._global.length;f++){var h=d._global[f];h.pred(e,this)&&-1==dh(c,h.val)&&c.push(h.val)}return c},getStateAfter:function(a,b){var c=this.doc;return a=Nb(c,null==a?c.first+c.size-1:a),lc(this,a+1,b)},cursorCoords:function(a,b){var c,d=this.doc.sel.primary();return c=null==a?d.head:"object"==typeof a?Ob(this.doc,a):a?d.from():d.to(),Lc(this,c,b||"page")},charCoords:function(a,b){return Kc(this,Ob(this.doc,a),b||"page")},coordsChar:function(a,b){return a=Jc(this,a,b||"page"),Oc(this,a.left,a.top)},lineAtHeight:function(a,b){return a=Jc(this,{top:a,left:0},b||"page").top,lg(this.doc,a+this.display.viewOffset)},heightAtLine:function(a,b){var d,c=!1;if("number"==typeof a){var e=this.doc.first+this.doc.size-1;a<this.doc.first?a=this.doc.first:a>e&&(a=e,c=!0),d=gg(this.doc,a)}else d=a;return Ic(this,d,{top:0,left:0},b||"page").top+(c?this.doc.height-mg(d):0)},defaultTextHeight:function(){return Rc(this.display)},defaultCharWidth:function(){return Sc(this.display)},setGutterMarker:ed(function(a,b,c){return we(this.doc,a,"gutter",function(a){var d=a.gutterMarkers||(a.gutterMarkers={});return d[b]=c,!c&&mh(d)&&(a.gutterMarkers=null),!0})}),clearGutter:ed(function(a){var b=this,c=b.doc,d=c.first;c.iter(function(c){c.gutterMarkers&&c.gutterMarkers[a]&&(c.gutterMarkers[a]=null,jd(b,d,"gutter"),mh(c.gutterMarkers)&&(c.gutterMarkers=null)),++d})}),lineInfo:function(a){if("number"==typeof a){if(!Qb(this.doc,a))return null;var b=a;if(a=gg(this.doc,a),!a)return null}else{var b=kg(a);if(null==b)return null}return{line:b,handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(a,b,c,d,e){var f=this.display;a=Lc(this,Ob(this.doc,a));var g=a.bottom,h=a.left;if(b.style.position="absolute",b.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(b),f.sizer.appendChild(b),"over"==d)g=a.top;else if("above"==d||"near"==d){var i=Math.max(f.wrapper.clientHeight,this.doc.height),j=Math.max(f.sizer.clientWidth,f.lineSpace.clientWidth);("above"==d||a.bottom+b.offsetHeight>i)&&a.top>b.offsetHeight?g=a.top-b.offsetHeight:a.bottom+b.offsetHeight<=i&&(g=a.bottom),h+b.offsetWidth>j&&(h=j-b.offsetWidth)}b.style.top=g+"px",b.style.left=b.style.right="","right"==e?(h=f.sizer.clientWidth-b.offsetWidth,b.style.right="0px"):("left"==e?h=0:"middle"==e&&(h=(f.sizer.clientWidth-b.offsetWidth)/2),b.style.left=h+"px"),c&&qe(this,h,g,h+b.offsetWidth,g+b.offsetHeight)},triggerOnKeyDown:ed(Ud),triggerOnKeyPress:ed(Xd),triggerOnKeyUp:Wd,execCommand:function(a){return Le.hasOwnProperty(a)?Le[a].call(null,this):void 0},triggerElectric:ed(function(a){yb(this,a)}),findPosH:function(a,b,c,d){var e=1;0>b&&(e=-1,b=-b);for(var f=0,g=Ob(this.doc,a);b>f&&(g=ye(this.doc,g,e,c,d),!g.hitSide);++f);return g},moveH:ed(function(a,b){var c=this;c.extendSelectionsBy(function(d){return c.display.shift||c.doc.extend||d.empty()?ye(c.doc,d.head,a,b,c.options.rtlMoveVisually):0>a?d.from():d.to()},Xg)}),deleteH:ed(function(a,b){var c=this.doc.sel,d=this.doc;c.somethingSelected()?d.replaceSelection("",null,"+delete"):xe(this,function(c){var e=ye(d,c.head,a,b,!1);return 0>a?{from:e,to:c.head}:{from:c.head,to:e}})}),findPosV:function(a,b,c,d){var e=1,f=d;0>b&&(e=-1,b=-b);for(var g=0,h=Ob(this.doc,a);b>g;++g){var i=Lc(this,h,"div");if(null==f?f=i.left:i.left=f,h=ze(this,i,e,c),h.hitSide)break}return h},moveV:ed(function(a,b){var c=this,d=this.doc,e=[],f=!c.display.shift&&!d.extend&&d.sel.somethingSelected();if(d.extendSelectionsBy(function(g){if(f)return 0>a?g.from():g.to();var h=Lc(c,g.head,"div");null!=g.goalColumn&&(h.left=g.goalColumn),e.push(h.left);var i=ze(c,h,a,b);return"page"==b&&g==d.sel.primary()&&se(c,null,Kc(c,i,"div").top-h.top),i},Xg),e.length)for(var g=0;g<d.sel.ranges.length;g++)d.sel.ranges[g].goalColumn=e[g]}),findWordAt:function(a){var b=this.doc,c=gg(b,a.line).text,d=a.ch,e=a.ch;if(c){var f=this.getHelper(a,"wordChars");(a.xRel<0||e==c.length)&&d?--d:++e;for(var g=c.charAt(d),h=lh(g,f)?function(a){return lh(a,f)}:/\s/.test(g)?function(a){return/\s/.test(a)}:function(a){return!/\s/.test(a)&&!lh(a)};d>0&&h(c.charAt(d-1));)--d;for(;e<c.length&&h(c.charAt(e));)++e}return new Kb(ob(a.line,d),ob(a.line,e))},toggleOverwrite:function(a){(null==a||a!=this.state.overwrite)&&((this.state.overwrite=!this.state.overwrite)?xh(this.display.cursorDiv,"CodeMirror-overwrite"):wh(this.display.cursorDiv,"CodeMirror-overwrite"),Lg(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==uh()},scrollTo:ed(function(a,b){(null!=a||null!=b)&&ue(this),null!=a&&(this.curOp.scrollLeft=a),null!=b&&(this.curOp.scrollTop=b)}),getScrollInfo:function(){var a=this.display.scroller;return{left:a.scrollLeft,top:a.scrollTop,height:a.scrollHeight-pc(this)-this.display.barHeight,width:a.scrollWidth-pc(this)-this.display.barWidth,clientHeight:rc(this),clientWidth:qc(this)}},scrollIntoView:ed(function(a,b){if(null==a?(a={from:this.doc.sel.primary().head,to:null},null==b&&(b=this.options.cursorScrollMargin)):"number"==typeof a?a={from:ob(a,0),to:null}:null==a.from&&(a={from:a,to:null}),a.to||(a.to=a.from),a.margin=b||0,null!=a.from.line)ue(this),this.curOp.scrollToPos=a;else{var c=re(this,Math.min(a.from.left,a.to.left),Math.min(a.from.top,a.to.top)-a.margin,Math.max(a.from.right,a.to.right),Math.max(a.from.bottom,a.to.bottom)+a.margin);this.scrollTo(c.scrollLeft,c.scrollTop)}}),setSize:ed(function(a,b){function d(a){return"number"==typeof a||/^\d+$/.test(String(a))?a+"px":a}var c=this;null!=a&&(c.display.wrapper.style.width=d(a)),null!=b&&(c.display.wrapper.style.height=d(b)),c.options.lineWrapping&&Ec(this);var e=c.display.viewFrom;c.doc.iter(e,c.display.viewTo,function(a){if(a.widgets)for(var b=0;b<a.widgets.length;b++)if(a.widgets[b].noHScroll){jd(c,e,"widget");break}++e}),c.curOp.forceUpdate=!0,Lg(c,"refresh",this)}),operation:function(a){return cd(this,a)},refresh:ed(function(){var a=this.display.cachedTextHeight;id(this),this.curOp.forceUpdate=!0,Fc(this),this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop),F(this),(null==a||Math.abs(a-Rc(this.display))>.5)&&B(this),Lg(this,"refresh",this)}),swapDoc:ed(function(a){var b=this.doc;return b.cm=null,fg(this,a),Fc(this),this.display.input.reset(),this.scrollTo(a.scrollLeft,a.scrollTop),this.curOp.forceScroll=!0,Ng(this,"swapDoc",this,b),b}),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Sg(v);var Ae=v.defaults={},Be=v.optionHandlers={},De=v.Init={toString:function(){return"CodeMirror.Init"}};Ce("value","",function(a,b){a.setValue(b)},!0),Ce("mode",null,function(a,b){a.doc.modeOption=b,x(a)},!0),Ce("indentUnit",2,x,!0),Ce("indentWithTabs",!1),Ce("smartIndent",!0),Ce("tabSize",4,function(a){y(a),Fc(a),id(a)},!0),Ce("lineSeparator",null,function(a,b){if(a.doc.lineSep=b,b){var c=[],d=a.doc.first;a.doc.iter(function(a){for(var e=0;;){var f=a.text.indexOf(b,e);if(-1==f)break;e=f+b.length,c.push(ob(d,f))}d++});for(var e=c.length-1;e>=0;e--)ne(a.doc,b,c[e],ob(c[e].line,c[e].ch+b.length))}}),Ce("specialChars",/[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,function(a,b,c){a.state.specialChars=new RegExp(b.source+(b.test("	")?"":"|	"),"g"),c!=v.Init&&a.refresh()}),Ce("specialCharPlaceholder",Sf,function(a){a.refresh()},!0),Ce("electricChars",!0),Ce("inputStyle",n?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),Ce("rtlMoveVisually",!p),Ce("wholeLineUpdateBefore",!0),Ce("theme","default",function(a){C(a),D(a)},!0),Ce("keyMap","default",function(a,b,c){var d=Re(b),e=c!=v.Init&&Re(c);e&&e.detach&&e.detach(a,d),d.attach&&d.attach(a,e||null)}),Ce("extraKeys",null),Ce("lineWrapping",!1,z,!0),Ce("gutters",[],function(a){I(a.options),D(a)},!0),Ce("fixedGutter",!0,function(a,b){a.display.gutters.style.left=b?T(a.display)+"px":"0",a.refresh()},!0),Ce("coverGutterNextToScrollbar",!1,function(a){N(a)},!0),Ce("scrollbarStyle","native",function(a){M(a),N(a),a.display.scrollbars.setScrollTop(a.doc.scrollTop),a.display.scrollbars.setScrollLeft(a.doc.scrollLeft)},!0),Ce("lineNumbers",!1,function(a){I(a.options),D(a)},!0),Ce("firstLineNumber",1,D,!0),Ce("lineNumberFormatter",function(a){return a},D,!0),Ce("showCursorWhenSelecting",!1,dc,!0),Ce("resetSelectionOnContextMenu",!0),Ce("lineWiseCopyCut",!0),Ce("readOnly",!1,function(a,b){"nocursor"==b?($d(a),a.display.input.blur(),a.display.disabled=!0):(a.display.disabled=!1,b||a.display.input.reset())}),Ce("disableInput",!1,function(a,b){b||a.display.input.reset()},!0),Ce("dragDrop",!0,qd),Ce("cursorBlinkRate",530),Ce("cursorScrollMargin",0),Ce("cursorHeight",1,dc,!0),Ce("singleCursorHeightPerLine",!0,dc,!0),Ce("workTime",100),Ce("workDelay",100),Ce("flattenSpans",!0,y,!0),Ce("addModeClass",!1,y,!0),Ce("pollInterval",100),Ce("undoDepth",200,function(a,b){a.doc.history.undoDepth=b}),Ce("historyEventDelay",1250),Ce("viewportMargin",10,function(a){a.refresh()},!0),Ce("maxHighlightLength",1e4,y,!0),Ce("moveInputWithCursor",!0,function(a,b){b||a.display.input.resetPosition()}),Ce("tabindex",null,function(a,b){a.display.input.getField().tabIndex=b||""}),Ce("autofocus",null);var Ee=v.modes={},Fe=v.mimeModes={};v.defineMode=function(a,b){v.defaults.mode||"null"==a||(v.defaults.mode=a),arguments.length>2&&(b.dependencies=Array.prototype.slice.call(arguments,2)),Ee[a]=b},v.defineMIME=function(a,b){Fe[a]=b},v.resolveMode=function(a){if("string"==typeof a&&Fe.hasOwnProperty(a))a=Fe[a];else if(a&&"string"==typeof a.name&&Fe.hasOwnProperty(a.name)){var b=Fe[a.name];"string"==typeof b&&(b={name:b}),a=gh(b,a),a.name=b.name}else if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+xml$/.test(a))return v.resolveMode("application/xml");return"string"==typeof a?{name:a}:a||{name:"null"}},v.getMode=function(a,b){var b=v.resolveMode(b),c=Ee[b.name];if(!c)return v.getMode(a,"text/plain");var d=c(a,b);if(Ge.hasOwnProperty(b.name)){var e=Ge[b.name];for(var f in e)e.hasOwnProperty(f)&&(d.hasOwnProperty(f)&&(d["_"+f]=d[f]),d[f]=e[f])}if(d.name=b.name,b.helperType&&(d.helperType=b.helperType),b.modeProps)for(var f in b.modeProps)d[f]=b.modeProps[f];return d},v.defineMode("null",function(){return{token:function(a){a.skipToEnd()}}}),v.defineMIME("text/plain","null");var Ge=v.modeExtensions={};v.extendMode=function(a,b){var c=Ge.hasOwnProperty(a)?Ge[a]:Ge[a]={};hh(b,c)},v.defineExtension=function(a,b){v.prototype[a]=b},v.defineDocExtension=function(a,b){bg.prototype[a]=b},v.defineOption=Ce;var He=[];v.defineInitHook=function(a){He.push(a)};var Ie=v.helpers={};v.registerHelper=function(a,b,c){Ie.hasOwnProperty(a)||(Ie[a]=v[a]={_global:[]}),Ie[a][b]=c},v.registerGlobalHelper=function(a,b,c,d){v.registerHelper(a,b,d),Ie[a]._global.push({pred:c,val:d})};var Je=v.copyState=function(a,b){if(b===!0)return b;if(a.copyState)return a.copyState(b);var c={};for(var d in b){var e=b[d];e instanceof Array&&(e=e.concat([])),c[d]=e}return c},Ke=v.startState=function(a,b,c){return a.startState?a.startState(b,c):!0};v.innerMode=function(a,b){for(;a.innerMode;){var c=a.innerMode(b);if(!c||c.mode==a)break;b=c.state,a=c.mode}return c||{mode:a,state:b}};var Le=v.commands={selectAll:function(a){a.setSelection(ob(a.firstLine(),0),ob(a.lastLine()),Vg)},singleSelection:function(a){a.setSelection(a.getCursor("anchor"),a.getCursor("head"),Vg)},killLine:function(a){xe(a,function(b){if(b.empty()){var c=gg(a.doc,b.head.line).text.length;return b.head.ch==c&&b.head.line<a.lastLine()?{from:b.head,to:ob(b.head.line+1,0)}:{from:b.head,to:ob(b.head.line,c)}}return{from:b.from(),to:b.to()}})},deleteLine:function(a){xe(a,function(b){return{from:ob(b.from().line,0),to:Ob(a.doc,ob(b.to().line+1,0))}})},delLineLeft:function(a){xe(a,function(a){return{from:ob(a.from().line,0),to:a.from()}})},delWrappedLineLeft:function(a){xe(a,function(b){var c=a.charCoords(b.head,"div").top+5,d=a.coordsChar({left:0,top:c},"div");return{from:d,to:b.from()}})},delWrappedLineRight:function(a){xe(a,function(b){var c=a.charCoords(b.head,"div").top+5,d=a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:c},"div");return{from:b.from(),to:d}})},undo:function(a){a.undo()},redo:function(a){a.redo()},undoSelection:function(a){a.undoSelection()},redoSelection:function(a){a.redoSelection()},goDocStart:function(a){a.extendSelection(ob(a.firstLine(),0))},goDocEnd:function(a){a.extendSelection(ob(a.lastLine()))},goLineStart:function(a){a.extendSelectionsBy(function(b){return Th(a,b.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(a){a.extendSelectionsBy(function(b){return Vh(a,b.head)},{origin:"+move",bias:1})},goLineEnd:function(a){a.extendSelectionsBy(function(b){return Uh(a,b.head.line)},{origin:"+move",bias:-1})},goLineRight:function(a){a.extendSelectionsBy(function(b){var c=a.charCoords(b.head,"div").top+5;return a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:c},"div")},Xg)},goLineLeft:function(a){a.extendSelectionsBy(function(b){var c=a.charCoords(b.head,"div").top+5;return a.coordsChar({left:0,top:c},"div")},Xg)},goLineLeftSmart:function(a){a.extendSelectionsBy(function(b){var c=a.charCoords(b.head,"div").top+5,d=a.coordsChar({left:0,top:c},"div");return d.ch<a.getLine(d.line).search(/\S/)?Vh(a,b.head):d},Xg)},goLineUp:function(a){a.moveV(-1,"line")},goLineDown:function(a){a.moveV(1,"line")},goPageUp:function(a){a.moveV(-1,"page")},goPageDown:function(a){a.moveV(1,"page")},goCharLeft:function(a){a.moveH(-1,"char")},goCharRight:function(a){a.moveH(1,"char")},goColumnLeft:function(a){a.moveH(-1,"column")},goColumnRight:function(a){a.moveH(1,"column")},goWordLeft:function(a){a.moveH(-1,"word")},goGroupRight:function(a){a.moveH(1,"group")},goGroupLeft:function(a){a.moveH(-1,"group")},goWordRight:function(a){a.moveH(1,"word")},delCharBefore:function(a){a.deleteH(-1,"char")},delCharAfter:function(a){a.deleteH(1,"char")},delWordBefore:function(a){a.deleteH(-1,"word")},delWordAfter:function(a){a.deleteH(1,"word")},delGroupBefore:function(a){a.deleteH(-1,"group")},delGroupAfter:function(a){a.deleteH(1,"group")},indentAuto:function(a){a.indentSelection("smart")},indentMore:function(a){a.indentSelection("add")},indentLess:function(a){a.indentSelection("subtract")},insertTab:function(a){a.replaceSelection("	")},insertSoftTab:function(a){for(var b=[],c=a.listSelections(),d=a.options.tabSize,e=0;e<c.length;e++){var f=c[e].from(),g=Zg(a.getLine(f.line),f.ch,d);b.push(new Array(d-g%d+1).join(" "))}a.replaceSelections(b)},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.execCommand("insertTab")},transposeChars:function(a){cd(a,function(){for(var b=a.listSelections(),c=[],d=0;d<b.length;d++){var e=b[d].head,f=gg(a.doc,e.line).text;if(f)if(e.ch==f.length&&(e=new ob(e.line,e.ch-1)),e.ch>0)e=new ob(e.line,e.ch+1),a.replaceRange(f.charAt(e.ch-1)+f.charAt(e.ch-2),ob(e.line,e.ch-2),e,"+transpose");else if(e.line>a.doc.first){var g=gg(a.doc,e.line-1).text;g&&a.replaceRange(f.charAt(0)+a.doc.lineSeparator()+g.charAt(g.length-1),ob(e.line-1,g.length-1),ob(e.line,1),"+transpose")}c.push(new Kb(e,e))}a.setSelections(c)})},newlineAndIndent:function(a){cd(a,function(){for(var b=a.listSelections().length,c=0;b>c;c++){var d=a.listSelections()[c];a.replaceRange(a.doc.lineSeparator(),d.anchor,d.head,"+input"),a.indentLine(d.from().line+1,null,!0),te(a)}})},toggleOverwrite:function(a){a.toggleOverwrite()}},Me=v.keyMap={};Me.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Me.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Me.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars"},Me.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Me["default"]=o?Me.macDefault:Me.pcDefault,v.normalizeKeyMap=function(a){var b={};
for(var c in a)if(a.hasOwnProperty(c)){var d=a[c];if(/^(name|fallthrough|(de|at)tach)$/.test(c))continue;if("..."==d){delete a[c];continue}for(var e=eh(c.split(" "),Ne),f=0;f<e.length;f++){var g,h;f==e.length-1?(h=e.join(" "),g=d):(h=e.slice(0,f+1).join(" "),g="...");var i=b[h];if(i){if(i!=g)throw new Error("Inconsistent bindings for "+h)}else b[h]=g}delete a[c]}for(var j in b)a[j]=b[j];return a};var Oe=v.lookupKey=function(a,b,c,d){b=Re(b);var e=b.call?b.call(a,d):b[a];if(e===!1)return"nothing";if("..."===e)return"multi";if(null!=e&&c(e))return"handled";if(b.fallthrough){if("[object Array]"!=Object.prototype.toString.call(b.fallthrough))return Oe(a,b.fallthrough,c,d);for(var f=0;f<b.fallthrough.length;f++){var g=Oe(a,b.fallthrough[f],c,d);if(g)return g}}},Pe=v.isModifierKey=function(a){var b="string"==typeof a?a:Nh[a.keyCode];return"Ctrl"==b||"Alt"==b||"Shift"==b||"Mod"==b},Qe=v.keyName=function(a,b){if(i&&34==a.keyCode&&a["char"])return!1;var c=Nh[a.keyCode],d=c;return null==d||a.altGraphKey?!1:(a.altKey&&"Alt"!=c&&(d="Alt-"+d),(r?a.metaKey:a.ctrlKey)&&"Ctrl"!=c&&(d="Ctrl-"+d),(r?a.ctrlKey:a.metaKey)&&"Cmd"!=c&&(d="Cmd-"+d),!b&&a.shiftKey&&"Shift"!=c&&(d="Shift-"+d),d)};v.fromTextArea=function(a,b){function d(){a.value=i.getValue()}if(b=b?hh(b):{},b.value=a.value,!b.tabindex&&a.tabIndex&&(b.tabindex=a.tabIndex),!b.placeholder&&a.placeholder&&(b.placeholder=a.placeholder),null==b.autofocus){var c=uh();b.autofocus=c==a||null!=a.getAttribute("autofocus")&&c==document.body}if(a.form&&(Jg(a.form,"submit",d),!b.leaveSubmitMethodAlone)){var e=a.form,f=e.submit;try{var g=e.submit=function(){d(),e.submit=f,e.submit(),e.submit=g}}catch(h){}}b.finishInit=function(b){b.save=d,b.getTextArea=function(){return a},b.toTextArea=function(){b.toTextArea=isNaN,d(),a.parentNode.removeChild(b.getWrapperElement()),a.style.display="",a.form&&(Kg(a.form,"submit",d),"function"==typeof a.form.submit&&(a.form.submit=f))}},a.style.display="none";var i=v(function(b){a.parentNode.insertBefore(b,a.nextSibling)},b);return i};var Se=v.StringStream=function(a,b){this.pos=this.start=0,this.string=a,this.tabSize=b||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0};Se.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==this.lineStart},peek:function(){return this.string.charAt(this.pos)||void 0},next:function(){return this.pos<this.string.length?this.string.charAt(this.pos++):void 0},eat:function(a){var b=this.string.charAt(this.pos);if("string"==typeof a)var c=b==a;else var c=b&&(a.test?a.test(b):a(b));return c?(++this.pos,b):void 0},eatWhile:function(a){for(var b=this.pos;this.eat(a););return this.pos>b},eatSpace:function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a},skipToEnd:function(){this.pos=this.string.length},skipTo:function(a){var b=this.string.indexOf(a,this.pos);return b>-1?(this.pos=b,!0):void 0},backUp:function(a){this.pos-=a},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Zg(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Zg(this.string,this.lineStart,this.tabSize):0)},indentation:function(){return Zg(this.string,null,this.tabSize)-(this.lineStart?Zg(this.string,this.lineStart,this.tabSize):0)},match:function(a,b,c){if("string"!=typeof a){var f=this.string.slice(this.pos).match(a);return f&&f.index>0?null:(f&&b!==!1&&(this.pos+=f[0].length),f)}var d=function(a){return c?a.toLowerCase():a},e=this.string.substr(this.pos,a.length);return d(e)==d(a)?(b!==!1&&(this.pos+=a.length),!0):void 0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}}};var Te=0,Ue=v.TextMarker=function(a,b){this.lines=[],this.type=b,this.doc=a,this.id=++Te};Sg(Ue),Ue.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;if(b&&Vc(a),Rg(this,"clear")){var c=this.find();c&&Ng(this,"clear",c.from,c.to)}for(var d=null,e=null,f=0;f<this.lines.length;++f){var g=this.lines[f],h=af(g.markedSpans,this);a&&!this.collapsed?jd(a,kg(g),"text"):a&&(null!=h.to&&(e=kg(g)),null!=h.from&&(d=kg(g))),g.markedSpans=bf(g.markedSpans,h),null==h.from&&this.collapsed&&!xf(this.doc,g)&&a&&jg(g,Rc(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(var f=0;f<this.lines.length;++f){var i=tf(this.lines[f]),j=G(i);j>a.display.maxLineLength&&(a.display.maxLine=i,a.display.maxLineLength=j,a.display.maxLineChanged=!0)}null!=d&&a&&this.collapsed&&id(a,d,e+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&ac(a.doc)),a&&Ng(a,"markerCleared",a,this),b&&Xc(a),this.parent&&this.parent.clear()}},Ue.prototype.find=function(a,b){null==a&&"bookmark"==this.type&&(a=1);for(var c,d,e=0;e<this.lines.length;++e){var f=this.lines[e],g=af(f.markedSpans,this);if(null!=g.from&&(c=ob(b?f:kg(f),g.from),-1==a))return c;if(null!=g.to&&(d=ob(b?f:kg(f),g.to),1==a))return d}return c&&{from:c,to:d}},Ue.prototype.changed=function(){var a=this.find(-1,!0),b=this,c=this.doc.cm;a&&c&&cd(c,function(){var d=a.line,e=kg(a.line),f=wc(c,e);if(f&&(Dc(f),c.curOp.selectionChanged=c.curOp.forceUpdate=!0),c.curOp.updateMaxLine=!0,!xf(b.doc,d)&&null!=b.height){var g=b.height;b.height=null;var h=Bf(b)-g;h&&jg(d,d.height+h)}})},Ue.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&-1!=dh(b.maybeHiddenMarkers,this)||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)},Ue.prototype.detachLine=function(a){if(this.lines.splice(dh(this.lines,a),1),!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;(b.maybeHiddenMarkers||(b.maybeHiddenMarkers=[])).push(this)}};var Te=0,We=v.SharedTextMarker=function(a,b){this.markers=a,this.primary=b;for(var c=0;c<a.length;++c)a[c].parent=this};Sg(We),We.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();Ng(this,"clear")}},We.prototype.find=function(a,b){return this.primary.find(a,b)};var zf=v.LineWidget=function(a,b,c){if(c)for(var d in c)c.hasOwnProperty(d)&&(this[d]=c[d]);this.doc=a,this.node=b};Sg(zf),zf.prototype.clear=function(){var a=this.doc.cm,b=this.line.widgets,c=this.line,d=kg(c);if(null!=d&&b){for(var e=0;e<b.length;++e)b[e]==this&&b.splice(e--,1);b.length||(c.widgets=null);var f=Bf(this);jg(c,Math.max(0,c.height-f)),a&&cd(a,function(){Af(a,c,-f),jd(a,d,"widget")})}},zf.prototype.changed=function(){var a=this.height,b=this.doc.cm,c=this.line;this.height=null;var d=Bf(this)-a;d&&(jg(c,c.height+d),b&&cd(b,function(){b.curOp.forceUpdate=!0,Af(b,c,d)}))};var Df=v.Line=function(a,b,c){this.text=a,lf(this,b),this.height=c?c(this):1};Sg(Df),Df.prototype.lineNo=function(){return kg(this)};var Of={},Pf={};$f.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var c=a,d=a+b;d>c;++c){var e=this.lines[c];this.height-=e.height,Ff(e),Ng(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.push.apply(a,this.lines)},insertInner:function(a,b,c){this.height+=c,this.lines=this.lines.slice(0,a).concat(b).concat(this.lines.slice(a));for(var d=0;d<b.length;++d)b[d].parent=this},iterN:function(a,b,c){for(var d=a+b;d>a;++a)if(c(this.lines[a]))return!0}},_f.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var c=0;c<this.children.length;++c){var d=this.children[c],e=d.chunkSize();if(e>a){var f=Math.min(b,e-a),g=d.height;if(d.removeInner(a,f),this.height-=g-d.height,e==f&&(this.children.splice(c--,1),d.parent=null),0==(b-=f))break;a=0}else a-=e}if(this.size-b<25&&(this.children.length>1||!(this.children[0]instanceof $f))){var h=[];this.collapse(h),this.children=[new $f(h)],this.children[0].parent=this}},collapse:function(a){for(var b=0;b<this.children.length;++b)this.children[b].collapse(a)},insertInner:function(a,b,c){this.size+=b.length,this.height+=c;for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(f>=a){if(e.insertInner(a,b,c),e.lines&&e.lines.length>50){for(;e.lines.length>50;){var g=e.lines.splice(e.lines.length-25,25),h=new $f(g);e.height-=h.height,this.children.splice(d+1,0,h),h.parent=this}this.maybeSpill()}break}a-=f}},maybeSpill:function(){if(!(this.children.length<=10)){var a=this;do{var b=a.children.splice(a.children.length-5,5),c=new _f(b);if(a.parent){a.size-=c.size,a.height-=c.height;var e=dh(a.parent.children,a);a.parent.children.splice(e+1,0,c)}else{var d=new _f(a.children);d.parent=a,a.children=[d,c],a=d}c.parent=a.parent}while(a.children.length>10);a.parent.maybeSpill()}},iterN:function(a,b,c){for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(f>a){var g=Math.min(b,f-a);if(e.iterN(a,g,c))return!0;if(0==(b-=g))break;a=0}else a-=f}}};var ag=0,bg=v.Doc=function(a,b,c,d){if(!(this instanceof bg))return new bg(a,b,c,d);null==c&&(c=0),_f.call(this,[new $f([new Df("",null)])]),this.first=c,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.frontier=c;var e=ob(c,0);this.sel=Mb(e),this.history=new og(null),this.id=++ag,this.modeOption=b,this.lineSep=d,"string"==typeof a&&(a=this.splitLines(a)),Zf(this,{from:e,to:e,text:a}),Zb(this,Mb(e),Vg)};bg.prototype=gh(_f.prototype,{constructor:bg,iter:function(a,b,c){c?this.iterN(a-this.first,b-a,c):this.iterN(this.first,this.first+this.size,a)},insert:function(a,b){for(var c=0,d=0;d<b.length;++d)c+=b[d].height;this.insertInner(a-this.first,b,c)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=ig(this,this.first,this.first+this.size);return a===!1?b:b.join(a||this.lineSeparator())},setValue:fd(function(a){var b=ob(this.first,0),c=this.first+this.size-1;he(this,{from:b,to:ob(c,gg(this,c).text.length),text:this.splitLines(a),origin:"setValue",full:!0},!0),Zb(this,Mb(b))}),replaceRange:function(a,b,c,d){b=Ob(this,b),c=c?Ob(this,c):b,ne(this,a,b,c,d)},getRange:function(a,b,c){var d=hg(this,Ob(this,a),Ob(this,b));return c===!1?d:d.join(c||this.lineSeparator())},getLine:function(a){var b=this.getLineHandle(a);return b&&b.text},getLineHandle:function(a){return Qb(this,a)?gg(this,a):void 0},getLineNumber:function(a){return kg(a)},getLineHandleVisualStart:function(a){return"number"==typeof a&&(a=gg(this,a)),tf(a)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(a){return Ob(this,a)},getCursor:function(a){var c,b=this.sel.primary();return c=null==a||"head"==a?b.head:"anchor"==a?b.anchor:"end"==a||"to"==a||a===!1?b.to():b.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:fd(function(a,b,c){Wb(this,Ob(this,"number"==typeof a?ob(a,b||0):a),null,c)}),setSelection:fd(function(a,b,c){Wb(this,Ob(this,a),Ob(this,b||a),c)}),extendSelection:fd(function(a,b,c){Tb(this,Ob(this,a),b&&Ob(this,b),c)}),extendSelections:fd(function(a,b){Ub(this,Rb(this,a,b))}),extendSelectionsBy:fd(function(a,b){Ub(this,eh(this.sel.ranges,a),b)}),setSelections:fd(function(a,b,c){if(a.length){for(var d=0,e=[];d<a.length;d++)e[d]=new Kb(Ob(this,a[d].anchor),Ob(this,a[d].head));null==b&&(b=Math.min(a.length-1,this.sel.primIndex)),Zb(this,Lb(e,b),c)}}),addSelection:fd(function(a,b,c){var d=this.sel.ranges.slice(0);d.push(new Kb(Ob(this,a),Ob(this,b||a))),Zb(this,Lb(d,d.length-1),c)}),getSelection:function(a){for(var c,b=this.sel.ranges,d=0;d<b.length;d++){var e=hg(this,b[d].from(),b[d].to());c=c?c.concat(e):e}return a===!1?c:c.join(a||this.lineSeparator())},getSelections:function(a){for(var b=[],c=this.sel.ranges,d=0;d<c.length;d++){var e=hg(this,c[d].from(),c[d].to());a!==!1&&(e=e.join(a||this.lineSeparator())),b[d]=e}return b},replaceSelection:function(a,b,c){for(var d=[],e=0;e<this.sel.ranges.length;e++)d[e]=a;this.replaceSelections(d,b,c||"+input")},replaceSelections:fd(function(a,b,c){for(var d=[],e=this.sel,f=0;f<e.ranges.length;f++){var g=e.ranges[f];d[f]={from:g.from(),to:g.to(),text:this.splitLines(a[f]),origin:c}}for(var h=b&&"end"!=b&&fe(this,d,b),f=d.length-1;f>=0;f--)he(this,d[f]);h?Yb(this,h):this.cm&&te(this.cm)}),undo:fd(function(){je(this,"undo")}),redo:fd(function(){je(this,"redo")}),undoSelection:fd(function(){je(this,"undo",!0)}),redoSelection:fd(function(){je(this,"redo",!0)}),setExtending:function(a){this.extend=a},getExtending:function(){return this.extend},historySize:function(){for(var a=this.history,b=0,c=0,d=0;d<a.done.length;d++)a.done[d].ranges||++b;for(var d=0;d<a.undone.length;d++)a.undone[d].ranges||++c;return{undo:b,redo:c}},clearHistory:function(){this.history=new og(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(a){return a&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:zg(this.history.done),undone:zg(this.history.undone)}},setHistory:function(a){var b=this.history=new og(this.history.maxGeneration);b.done=zg(a.done.slice(0),null,!0),b.undone=zg(a.undone.slice(0),null,!0)},addLineClass:fd(function(a,b,c){return we(this,a,"gutter"==b?"gutter":"class",function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass";if(a[d]){if(vh(c).test(a[d]))return!1;a[d]+=" "+c}else a[d]=c;return!0})}),removeLineClass:fd(function(a,b,c){return we(this,a,"gutter"==b?"gutter":"class",function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass",e=a[d];if(!e)return!1;if(null==c)a[d]=null;else{var f=e.match(vh(c));if(!f)return!1;var g=f.index+f[0].length;a[d]=e.slice(0,f.index)+(f.index&&g!=e.length?" ":"")+e.slice(g)||null}return!0})}),addLineWidget:fd(function(a,b,c){return Cf(this,a,b,c)}),removeLineWidget:function(a){a.clear()},markText:function(a,b,c){return Ve(this,Ob(this,a),Ob(this,b),c,"range")},setBookmark:function(a,b){var c={replacedWith:b&&(null==b.nodeType?b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1,shared:b&&b.shared,handleMouseEvents:b&&b.handleMouseEvents};return a=Ob(this,a),Ve(this,a,a,c,"bookmark")},findMarksAt:function(a){a=Ob(this,a);var b=[],c=gg(this,a.line).markedSpans;if(c)for(var d=0;d<c.length;++d){var e=c[d];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||e.marker)}return b},findMarks:function(a,b,c){a=Ob(this,a),b=Ob(this,b);var d=[],e=a.line;return this.iter(a.line,b.line+1,function(f){var g=f.markedSpans;if(g)for(var h=0;h<g.length;h++){var i=g[h];e==a.line&&a.ch>i.to||null==i.from&&e!=a.line||e==b.line&&i.from>b.ch||c&&!c(i.marker)||d.push(i.marker.parent||i.marker)}++e}),d},getAllMarks:function(){var a=[];return this.iter(function(b){var c=b.markedSpans;if(c)for(var d=0;d<c.length;++d)null!=c[d].from&&a.push(c[d].marker)}),a},posFromIndex:function(a){var b,c=this.first;return this.iter(function(d){var e=d.text.length+1;return e>a?(b=a,!0):(a-=e,++c,void 0)}),Ob(this,ob(c,b))},indexFromPos:function(a){a=Ob(this,a);var b=a.ch;return a.line<this.first||a.ch<0?0:(this.iter(this.first,a.line,function(a){b+=a.text.length+1}),b)},copy:function(a){var b=new bg(ig(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep);return b.scrollTop=this.scrollTop,b.scrollLeft=this.scrollLeft,b.sel=this.sel,b.extend=!1,a&&(b.history.undoDepth=this.history.undoDepth,b.setHistory(this.getHistory())),b},linkedDoc:function(a){a||(a={});var b=this.first,c=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from),null!=a.to&&a.to<c&&(c=a.to);var d=new bg(ig(this,b,c),a.mode||this.modeOption,b,this.lineSep);return a.sharedHist&&(d.history=this.history),(this.linked||(this.linked=[])).push({doc:d,sharedHist:a.sharedHist}),d.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}],Ze(d,Ye(this)),d},unlinkDoc:function(a){if(a instanceof v&&(a=a.doc),this.linked)for(var b=0;b<this.linked.length;++b){var c=this.linked[b];if(c.doc==a){this.linked.splice(b,1),a.unlinkDoc(this),$e(Ye(this));break}}if(a.history==this.history){var d=[a.id];eg(a,function(a){d.push(a.id)},!0),a.history=new og(null),a.history.done=zg(this.history.done,d),a.history.undone=zg(this.history.undone,d)}},iterLinkedDocs:function(a){eg(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(a){return this.lineSep?a.split(this.lineSep):Ih(a)},lineSeparator:function(){return this.lineSep||"\n"}}),bg.prototype.eachLine=bg.prototype.iter;var cg="iter insert remove copy getEditor constructor".split(" ");for(var dg in bg.prototype)bg.prototype.hasOwnProperty(dg)&&dh(cg,dg)<0&&(v.prototype[dg]=function(a){return function(){return a.apply(this.doc,arguments)}}(bg.prototype[dg]));Sg(bg);var Dg=v.e_preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},Eg=v.e_stopPropagation=function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},Gg=v.e_stop=function(a){Dg(a),Eg(a)},Jg=v.on=function(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var d=a._handlers||(a._handlers={}),e=d[b]||(d[b]=[]);e.push(c)}},Kg=v.off=function(a,b,c){if(a.removeEventListener)a.removeEventListener(b,c,!1);else if(a.detachEvent)a.detachEvent("on"+b,c);else{var d=a._handlers&&a._handlers[b];if(!d)return;for(var e=0;e<d.length;++e)if(d[e]==c){d.splice(e,1);break}}},Lg=v.signal=function(a,b){var c=a._handlers&&a._handlers[b];if(c)for(var d=Array.prototype.slice.call(arguments,2),e=0;e<c.length;++e)c[e].apply(null,d)},Mg=null,Tg=30,Ug=v.Pass={toString:function(){return"CodeMirror.Pass"}},Vg={scroll:!1},Wg={origin:"*mouse"},Xg={origin:"+move"};Yg.prototype.set=function(a,b){clearTimeout(this.id),this.id=setTimeout(b,a)};var Zg=v.countColumn=function(a,b,c,d,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));for(var f=d||0,g=e||0;;){var h=a.indexOf("	",f);if(0>h||h>=b)return g+(b-f);g+=h-f,g+=c-g%c,f=h+1}},$g=v.findColumn=function(a,b,c){for(var d=0,e=0;;){var f=a.indexOf("	",d);-1==f&&(f=a.length);var g=f-d;if(f==a.length||e+g>=b)return d+Math.min(g,b-e);if(e+=f-d,e+=c-e%c,d=f+1,e>=b)return d}},_g=[""],ch=function(a){a.select()};m?ch=function(a){a.selectionStart=0,a.selectionEnd=a.value.length}:d&&(ch=function(a){try{a.select()}catch(b){}});var qh,jh=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,kh=v.isWordChar=function(a){return/\w/.test(a)||a>"\x80"&&(a.toUpperCase()!=a.toLowerCase()||jh.test(a))},nh=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;qh=document.createRange?function(a,b,c,d){var e=document.createRange();return e.setEnd(d||a,c),e.setStart(a,b),e}:function(a,b,c){var d=document.body.createTextRange();try{d.moveToElementText(a.parentNode)}catch(e){return d}return d.collapse(!0),d.moveEnd("character",c),d.moveStart("character",b),d};var th=v.contains=function(a,b){if(3==b.nodeType&&(b=b.parentNode),a.contains)return a.contains(b);do if(11==b.nodeType&&(b=b.host),b==a)return!0;while(b=b.parentNode)};d&&11>e&&(uh=function(){try{return document.activeElement}catch(a){return document.body}});var Eh,Gh,wh=v.rmClass=function(a,b){var c=a.className,d=vh(b).exec(c);if(d){var e=c.slice(d.index+d[0].length);a.className=c.slice(0,d.index)+(e?d[1]+e:"")}},xh=v.addClass=function(a,b){var c=a.className;vh(b).test(c)||(a.className+=(c?" ":"")+b)},Ah=!1,Dh=function(){if(d&&9>e)return!1;var a=ph("div");return"draggable"in a||"dragDrop"in a}(),Ih=v.splitLines=3!="\n\nb".split(/\n/).length?function(a){for(var b=0,c=[],d=a.length;d>=b;){var e=a.indexOf("\n",b);-1==e&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");-1!=g?(c.push(f.slice(0,g)),b+=g+1):(c.push(f),b=e+1)}return c}:function(a){return a.split(/\r\n?|\n/)},Jh=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){try{var b=a.ownerDocument.selection.createRange()}catch(c){}return b&&b.parentElement()==a?0!=b.compareEndPoints("StartToEnd",b):!1},Kh=function(){var a=ph("div");return"oncopy"in a?!0:(a.setAttribute("oncopy","return;"),"function"==typeof a.oncopy)}(),Lh=null,Nh={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",107:"=",109:"-",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"};v.keyNames=Nh,function(){for(var a=0;10>a;a++)Nh[a+48]=Nh[a+96]=String(a);for(var a=65;90>=a;a++)Nh[a]=String.fromCharCode(a);for(var a=1;12>=a;a++)Nh[a+111]=Nh[a+63235]="F"+a}();var Xh,ai=function(){function c(c){return 247>=c?a.charAt(c):c>=1424&&1524>=c?"R":c>=1536&&1773>=c?b.charAt(c-1536):c>=1774&&2220>=c?"r":c>=8192&&8203>=c?"w":8204==c?"b":"L"}function j(a,b,c){this.level=a,this.from=b,this.to=c}var a="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",b="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",d=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,e=/[stwN]/,f=/[LRr]/,g=/[Lb1n]/,h=/[1n]/,i="L";return function(a){if(!d.test(a))return!1;for(var m,b=a.length,k=[],l=0;b>l;++l)k.push(m=c(a.charCodeAt(l)));for(var l=0,n=i;b>l;++l){var m=k[l];"m"==m?k[l]=n:n=m}for(var l=0,o=i;b>l;++l){var m=k[l];"1"==m&&"r"==o?k[l]="n":f.test(m)&&(o=m,"r"==m&&(k[l]="R"))}for(var l=1,n=k[0];b-1>l;++l){var m=k[l];"+"==m&&"1"==n&&"1"==k[l+1]?k[l]="1":","!=m||n!=k[l+1]||"1"!=n&&"n"!=n||(k[l]=n),n=m}for(var l=0;b>l;++l){var m=k[l];if(","==m)k[l]="N";else if("%"==m){for(var p=l+1;b>p&&"%"==k[p];++p);for(var q=l&&"!"==k[l-1]||b>p&&"1"==k[p]?"1":"N",r=l;p>r;++r)k[r]=q;l=p-1}}for(var l=0,o=i;b>l;++l){var m=k[l];"L"==o&&"1"==m?k[l]="L":f.test(m)&&(o=m)}for(var l=0;b>l;++l)if(e.test(k[l])){for(var p=l+1;b>p&&e.test(k[p]);++p);for(var s="L"==(l?k[l-1]:i),t="L"==(b>p?k[p]:i),q=s||t?"L":"R",r=l;p>r;++r)k[r]=q;l=p-1}for(var v,u=[],l=0;b>l;)if(g.test(k[l])){var w=l;for(++l;b>l&&g.test(k[l]);++l);u.push(new j(0,w,l))}else{var x=l,y=u.length;for(++l;b>l&&"L"!=k[l];++l);for(var r=x;l>r;)if(h.test(k[r])){r>x&&u.splice(y,0,new j(1,x,r));var z=r;for(++r;l>r&&h.test(k[r]);++r);u.splice(y,0,new j(2,z,r)),x=r}else++r;l>x&&u.splice(y,0,new j(1,x,l))}return 1==u[0].level&&(v=a.match(/^\s+/))&&(u[0].from=v[0].length,u.unshift(new j(0,0,v[0].length))),1==bh(u).level&&(v=a.match(/\s+$/))&&(bh(u).to-=v[0].length,u.push(new j(0,b-v[0].length,b))),2==u[0].level&&u.unshift(new j(1,u[0].to,u[0].to)),u[0].level!=bh(u).level&&u.push(new j(u[0].level,b,b)),u}}();return v.version="5.6.1",v}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";function b(a){for(var b={},c=a.split(" "),d=0;d<c.length;++d)b[c[d]]=!0;return b}function e(a,b){if(!b.startOfLine)return!1;for(;;){if(!a.skipTo("\\")){a.skipToEnd(),b.tokenize=null;break}if(a.next(),a.eol()){b.tokenize=e;break}}return"meta"}function f(a,b){return"variable-3"==b.prevToken?"variable-3":!1}function g(a,b){if(a.backUp(1),a.match(/(R|u8R|uR|UR|LR)/)){var c=a.match(/"([^\s\\()]{0,16})\(/);return c?(b.cpp11RawStringDelim=c[1],b.tokenize=j,j(a,b)):!1}return a.match(/(u8|u|U|L)/)?a.match(/["']/,!1)?"string":!1:(a.next(),!1)}function h(a){var b=/(\w+)::(\w+)$/.exec(a);return b&&b[1]==b[2]}function i(a,b){for(var c;null!=(c=a.next());)if('"'==c&&!a.eat('"')){b.tokenize=null;break}return"string"}function j(a,b){var c=b.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),d=a.match(new RegExp(".*?\\)"+c+'"'));return d?b.tokenize=null:a.skipToEnd(),"string"}function k(b,c){function e(a){if(a)for(var b in a)a.hasOwnProperty(b)&&d.push(b)}"string"==typeof b&&(b=[b]);var d=[];e(c.keywords),e(c.types),e(c.builtin),e(c.atoms),d.length&&(c.helperType=b[0],a.registerHelper("hintWords",b[0],d));for(var f=0;f<b.length;++f)a.defineMIME(b[f],c)}function l(a,b){for(var c=!1;!a.eol();){if(!c&&a.match('"""')){b.tokenize=null;break}c="\\"==a.next()&&!c}return"string"}a.defineMode("clike",function(b,c){function u(a,b){var c=a.next();if(m[c]){var d=m[c](a,b);if(d!==!1)return d}if('"'==c||"'"==c)return b.tokenize=v(c),b.tokenize(a,b);if(/[\[\]{}\(\),;\:\.]/.test(c))return s=c,null;if(/\d/.test(c))return a.eatWhile(/[\w\.]/),"number";if("/"==c){if(a.eat("*"))return b.tokenize=w,w(a,b);if(a.eat("/"))return a.skipToEnd(),"comment"}if(r.test(c))return a.eatWhile(r),"operator";if(a.eatWhile(/[\w\$_\xa1-\uffff]/),q)for(;a.match(q);)a.eatWhile(/[\w\$_\xa1-\uffff]/);var e=a.current();return g.propertyIsEnumerable(e)?(j.propertyIsEnumerable(e)&&(s="newstatement"),k.propertyIsEnumerable(e)&&(t=!0),"keyword"):h.propertyIsEnumerable(e)?"variable-3":i.propertyIsEnumerable(e)?(j.propertyIsEnumerable(e)&&(s="newstatement"),"builtin"):l.propertyIsEnumerable(e)?"atom":"variable"}function v(a){return function(b,c){for(var e,d=!1,f=!1;null!=(e=b.next());){if(e==a&&!d){f=!0;break}d=!d&&"\\"==e}return(f||!d&&!n)&&(c.tokenize=null),"string"}}function w(a,b){for(var d,c=!1;d=a.next();){if("/"==d&&c){b.tokenize=null;break}c="*"==d}return"comment"}function x(a,b,c,d,e){this.indented=a,this.column=b,this.type=c,this.align=d,this.prev=e}function y(a){return"statement"==a||"switchstatement"==a||"namespace"==a}function z(a,b,c){var d=a.indented;return a.context&&y(a.context.type)&&!y(c)&&(d=a.context.indented),a.context=new x(d,b,c,null,a.context)}function A(a){var b=a.context.type;return(")"==b||"]"==b||"}"==b)&&(a.indented=a.context.indented),a.context=a.context.prev}function B(a,b){return"variable"==b.prevToken||"variable-3"==b.prevToken?!0:/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(a.string.slice(0,a.start))?!0:void 0}function C(a){for(;;){if(!a||"top"==a.type)return!0;if("}"==a.type&&"namespace"!=a.prev.type)return!1;a=a.prev}}var s,t,d=b.indentUnit,e=c.statementIndentUnit||d,f=c.dontAlignCalls,g=c.keywords||{},h=c.types||{},i=c.builtin||{},j=c.blockKeywords||{},k=c.defKeywords||{},l=c.atoms||{},m=c.hooks||{},n=c.multiLineStrings,o=c.indentStatements!==!1,p=c.indentSwitch!==!1,q=c.namespaceSeparator,r=/[+\-*&%=<>!?|\/]/;return{startState:function(a){return{tokenize:null,context:new x((a||0)-d,0,"top",!1),indented:0,startOfLine:!0,prevToken:null}},token:function(a,b){var d=b.context;if(a.sol()&&(null==d.align&&(d.align=!1),b.indented=a.indentation(),b.startOfLine=!0),a.eatSpace())return null;s=t=null;var e=(b.tokenize||u)(a,b);if("comment"==e||"meta"==e)return e;if(null==d.align&&(d.align=!0),";"==s||":"==s||","==s)for(;y(b.context.type);)A(b);else if("{"==s)z(b,a.column(),"}");else if("["==s)z(b,a.column(),"]");else if("("==s)z(b,a.column(),")");else if("}"==s){for(;y(d.type);)d=A(b);for("}"==d.type&&(d=A(b));y(d.type);)d=A(b)}else if(s==d.type)A(b);else if(o&&(("}"==d.type||"top"==d.type)&&";"!=s||y(d.type)&&"newstatement"==s)){var f="statement";"newstatement"==s&&p&&"switch"==a.current()?f="switchstatement":"keyword"==e&&"namespace"==a.current()&&(f="namespace"),z(b,a.column(),f)}if("variable"==e&&("def"==b.prevToken||c.typeFirstDefinitions&&B(a,b)&&C(b.context)&&a.match(/^\s*\(/,!1))&&(e="def"),m.token){var g=m.token(a,b,e);void 0!==g&&(e=g)}return"def"==e&&c.styleDefs===!1&&(e="variable"),b.startOfLine=!1,b.prevToken=t?"def":e||s,e},indent:function(b,c){if(b.tokenize!=u&&null!=b.tokenize)return a.Pass;var g=b.context,h=c&&c.charAt(0);y(g.type)&&"}"==h&&(g=g.prev);var i=h==g.type,j=g.prev&&"switchstatement"==g.prev.type;return y(g.type)?g.indented+("{"==h?0:e):!g.align||f&&")"==g.type?")"!=g.type||i?g.indented+(i?0:d)+(i||!j||/^(?:case|default)\b/.test(c)?0:d):g.indented+e:g.column+(i?0:1)},electricInput:p?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}});var c="auto if break case register continue return default do sizeof static else struct switch extern typedef float union for goto while enum const volatile",d="int long char short double float unsigned signed void size_t ptrdiff_t";k(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:b(c),types:b(d+" bool _Complex _Bool float_t double_t intptr_t intmax_t "+"int8_t int16_t int32_t int64_t uintptr_t uintmax_t uint8_t uint16_t "+"uint32_t uint64_t"),blockKeywords:b("case do else for if switch while struct"),defKeywords:b("struct"),typeFirstDefinitions:!0,atoms:b("null true false"),hooks:{"#":e,"*":f},modeProps:{fold:["brace","include"]}}),k(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:b(c+" asm dynamic_cast namespace reinterpret_cast try explicit new "+"static_cast typeid catch operator template typename class friend private "+"this using const_cast inline public throw virtual delete mutable protected "+"alignas alignof constexpr decltype nullptr noexcept thread_local final "+"static_assert override"),types:b(d+" bool wchar_t"),blockKeywords:b("catch class do else finally for if struct switch try while"),defKeywords:b("class namespace struct enum union"),typeFirstDefinitions:!0,atoms:b("true false null"),hooks:{"#":e,"*":f,u:g,U:g,L:g,R:g,token:function(a,b,c){return"variable"!=c||"("!=a.peek()||";"!=b.prevToken&&null!=b.prevToken&&"}"!=b.prevToken||!h(a.current())?void 0:"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),k("text/x-java",{name:"clike",keywords:b("abstract assert break case catch class const continue default do else enum extends final finally float for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while"),types:b("byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:b("catch class do else finally for if switch try while"),defKeywords:b("class interface package enum"),typeFirstDefinitions:!0,atoms:b("true false null"),hooks:{"@":function(a){return a.eatWhile(/[\w\$_]/),"meta"
}},modeProps:{fold:["brace","import"]}}),k("text/x-csharp",{name:"clike",keywords:b("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:b("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:b("catch class do else finally for foreach if struct switch try while"),defKeywords:b("class interface namespace struct var"),typeFirstDefinitions:!0,atoms:b("true false null"),hooks:{"@":function(a,b){return a.eat('"')?(b.tokenize=i,i(a,b)):(a.eatWhile(/[\w\$_]/),"meta")}}}),k("text/x-scala",{name:"clike",keywords:b("abstract case catch class def do else extends false final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ : = => <- <: <% >: # @ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble :: #:: "),types:b("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:b("catch class do else finally for forSome if match switch try while"),defKeywords:b("class def object package trait type val var"),atoms:b("true false null"),indentStatements:!1,indentSwitch:!1,hooks:{"@":function(a){return a.eatWhile(/[\w\$_]/),"meta"},'"':function(a,b){return a.match('""')?(b.tokenize=l,b.tokenize(a,b)):!1},"'":function(a){return a.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"}},modeProps:{closeBrackets:{triples:'"'}}}),k(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:b("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:b("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:b("for while do if else struct"),builtin:b("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:b("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":e},modeProps:{fold:["brace","include"]}}),k("text/x-nesc",{name:"clike",keywords:b(c+"as atomic async call command component components configuration event generic "+"implementation includes interface module new norace nx_struct nx_union post provides "+"signal task uses abstract extends"),types:b(d),blockKeywords:b("case do else for if switch while struct"),atoms:b("null true false"),hooks:{"#":e},modeProps:{fold:["brace","include"]}}),k("text/x-objectivec",{name:"clike",keywords:b(c+"inline restrict _Bool _Complex _Imaginery BOOL Class bycopy byref id IMP in "+"inout nil oneway out Protocol SEL self super atomic nonatomic retain copy readwrite readonly"),types:b(d),atoms:b("YES NO NULL NILL ON OFF true false"),hooks:{"@":function(a){return a.eatWhile(/[\w\$]/),"keyword"},"#":e},modeProps:{fold:"brace"}}),k("text/x-squirrel",{name:"clike",keywords:b("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:b(d),blockKeywords:b("case catch class else for foreach if switch try while"),defKeywords:b("function local class"),typeFirstDefinitions:!0,atoms:b("true false null"),hooks:{"#":e},modeProps:{fold:["brace","include"]}})}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";function b(a){return new RegExp("^(("+a.join(")|(")+"))\\b")}function h(a){return a.scopes[a.scopes.length-1]}var c=b(["and","or","not","is"]),d=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],e=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"],f={builtins:["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"],keywords:["exec","print"]},g={builtins:["ascii","bytes","exec","print"],keywords:["nonlocal","False","True","None","async","await"]};a.registerHelper("hintWords","python",d.concat(e)),a.defineMode("python",function(i,j){function x(a,b){if(a.sol()&&"py"==h(b).type){var c=h(b).offset;if(a.eatSpace()){var d=a.indentation();return d>c?A(a,b,"py"):c>d&&B(a,b)&&(b.errorToken=!0),null}var e=y(a,b);return c>0&&B(a,b)&&(e+=" "+k),e}return y(a,b)}function y(a,b){if(a.eatSpace())return null;var d=a.peek();if("#"==d)return a.skipToEnd(),"comment";if(a.match(/^[0-9\.]/,!1)){var e=!1;if(a.match(/^\d*\.\d+(e[\+\-]?\d+)?/i)&&(e=!0),a.match(/^\d+\.\d*/)&&(e=!0),a.match(/^\.\d+/)&&(e=!0),e)return a.eat(/J/i),"number";var f=!1;if(a.match(/^0x[0-9a-f]+/i)&&(f=!0),a.match(/^0b[01]+/i)&&(f=!0),a.match(/^0o[0-7]+/i)&&(f=!0),a.match(/^[1-9]\d*(e[\+\-]?\d+)?/)&&(a.eat(/J/i),f=!0),a.match(/^0(?![\dx])/i)&&(f=!0),f)return a.eat(/L/i),"number"}return a.match(u)?(b.tokenize=z(a.current()),b.tokenize(a,b)):a.match(o)||a.match(n)?null:a.match(m)||a.match(p)?"operator":a.match(l)?null:a.match(v)||a.match(c)?"keyword":a.match(w)?"builtin":a.match(/^(self|cls)\b/)?"variable-2":a.match(q)?"def"==b.lastToken||"class"==b.lastToken?"def":"variable":(a.next(),k)}function z(a){function d(d,e){for(;!d.eol();)if(d.eatWhile(/[^'"\\]/),d.eat("\\")){if(d.next(),b&&d.eol())return c}else{if(d.match(a))return e.tokenize=x,c;d.eat(/['"]/)}if(b){if(j.singleLineStringErrors)return k;e.tokenize=x}return c}for(;"rub".indexOf(a.charAt(0).toLowerCase())>=0;)a=a.substr(1);var b=1==a.length,c="string";return d.isString=!0,d}function A(a,b,c){var d=0,e=null;if("py"==c)for(;"py"!=h(b).type;)b.scopes.pop();d=h(b).offset+("py"==c?i.indentUnit:r),"py"==c||a.match(/^(\s|#.*)*$/,!1)||(e=a.column()+1),b.scopes.push({offset:d,type:c,align:e})}function B(a,b){for(var c=a.indentation();h(b).offset>c;){if("py"!=h(b).type)return!0;b.scopes.pop()}return h(b).offset!=c}function C(a,b){var c=b.tokenize(a,b),d=a.current();if("."==d)return c=a.match(q,!1)?null:k,null==c&&"meta"==b.lastStyle&&(c="meta"),c;if("@"==d)return j.version&&3==parseInt(j.version,10)?a.match(q,!1)?"meta":"operator":a.match(q,!1)?"meta":k;"variable"!=c&&"builtin"!=c||"meta"!=b.lastStyle||(c="meta"),("pass"==d||"return"==d)&&(b.dedent+=1),"lambda"==d&&(b.lambda=!0),":"!=d||b.lambda||"py"!=h(b).type||A(a,b,"py");var e=1==d.length?"[({".indexOf(d):-1;if(-1!=e&&A(a,b,"])}".slice(e,e+1)),e="])}".indexOf(d),-1!=e){if(h(b).type!=d)return k;b.scopes.pop()}return b.dedent>0&&a.eol()&&"py"==h(b).type&&(b.scopes.length>1&&b.scopes.pop(),b.dedent-=1),c}var k="error",l=j.singleDelimiters||new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),m=j.doubleOperators||new RegExp("^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),n=j.doubleDelimiters||new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),o=j.tripleDelimiters||new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))");if(j.version&&3==parseInt(j.version,10))var p=j.singleOperators||new RegExp("^[\\+\\-\\*/%&|\\^~<>!@]"),q=j.identifiers||new RegExp("^[_A-Za-z\xa1-\uffff][_A-Za-z0-9\xa1-\uffff]*");else var p=j.singleOperators||new RegExp("^[\\+\\-\\*/%&|\\^~<>!]"),q=j.identifiers||new RegExp("^[_A-Za-z][_A-Za-z0-9]*");var r=j.hangingIndent||i.indentUnit,s=d,t=e;if(void 0!=j.extra_keywords&&(s=s.concat(j.extra_keywords)),void 0!=j.extra_builtins&&(t=t.concat(j.extra_builtins)),j.version&&3==parseInt(j.version,10)){s=s.concat(g.keywords),t=t.concat(g.builtins);var u=new RegExp("^(([rb]|(br))?('{3}|\"{3}|['\"]))","i")}else{s=s.concat(f.keywords),t=t.concat(f.builtins);var u=new RegExp("^(([rub]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var v=b(s),w=b(t),D={startState:function(a){return{tokenize:x,scopes:[{offset:a||0,type:"py",align:null}],lastStyle:null,lastToken:null,lambda:!1,dedent:0}},token:function(a,b){var c=b.errorToken;c&&(b.errorToken=!1);var d=C(a,b);b.lastStyle=d;var e=a.current();return e&&d&&(b.lastToken=e),a.eol()&&b.lambda&&(b.lambda=!1),c?d+" "+k:d},indent:function(b,c){if(b.tokenize!=x)return b.tokenize.isString?a.Pass:0;var d=h(b),e=c&&c.charAt(0)==d.type;return null!=d.align?d.align-(e?1:0):e&&b.scopes.length>1?b.scopes[b.scopes.length-2].offset:d.offset},closeBrackets:{triples:"'\""},lineComment:"#",fold:"indent"};return D}),a.defineMIME("text/x-python","python");var i=function(a){return a.split(" ")};a.defineMIME("text/x-cython",{name:"python",extra_keywords:i("by cdef cimport cpdef ctypedef enum exceptextern gil include nogil property publicreadonly struct union DEF IF ELIF ELSE")})}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("shell",function(){function b(b,c){for(var d=c.split(" "),e=0;e<d.length;e++)a[d[e]]=b}function c(b,c){if(b.eatSpace())return null;var g=b.sol(),h=b.next();if("\\"===h)return b.next(),null;if("'"===h||'"'===h||"`"===h)return c.tokens.unshift(d(h)),f(b,c);if("#"===h)return g&&b.eat("!")?(b.skipToEnd(),"meta"):(b.skipToEnd(),"comment");if("$"===h)return c.tokens.unshift(e),f(b,c);if("+"===h||"="===h)return"operator";if("-"===h)return b.eat("-"),b.eatWhile(/\w/),"attribute";if(/\d/.test(h)&&(b.eatWhile(/\d/),b.eol()||!/\w/.test(b.peek())))return"number";b.eatWhile(/[\w-]/);var i=b.current();return"="===b.peek()&&/\w+/.test(i)?"def":a.hasOwnProperty(i)?a[i]:null}function d(a){return function(b,c){for(var d,f=!1,g=!1;null!=(d=b.next());){if(d===a&&!g){f=!0;break}if("$"===d&&!g&&"'"!==a){g=!0,b.backUp(1),c.tokens.unshift(e);break}g=!g&&"\\"===d}return(f||!g)&&c.tokens.shift(),"`"===a||")"===a?"quote":"string"}}function f(a,b){return(b.tokens[0]||c)(a,b)}var a={};b("atom","true false"),b("keyword","if then do else elif while until for in esac fi fin fil done exit set unset export function"),b("builtin","ab awk bash beep cat cc cd chown chmod chroot clear cp curl cut diff echo find gawk gcc get git grep kill killall ln ls make mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh shopt shred source sort sleep ssh start stop su sudo tee telnet top touch vi vim wall wc wget who write yes zsh");var e=function(a,b){b.tokens.length>1&&a.eat("$");var c=a.next(),e=/\w/;return"{"===c&&(e=/[^}]/),"("===c?(b.tokens[0]=d(")"),f(a,b)):(/\d/.test(c)||(a.eatWhile(e),a.eat("}")),b.tokens.shift(),"def")};return{startState:function(){return{tokens:[]}},token:function(a,b){return f(a,b)},lineComment:"#",fold:"brace"}}),a.defineMIME("text/x-sh","shell")}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";function d(a){for(var d=0;d<a.state.activeLines.length;d++)a.removeLineClass(a.state.activeLines[d],"wrap",b),a.removeLineClass(a.state.activeLines[d],"background",c)}function e(a,b){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0}function f(a,f){for(var g=[],h=0;h<f.length;h++){var i=f[h];if(i.empty()){var j=a.getLineHandleVisualStart(i.head.line);g[g.length-1]!=j&&g.push(j)}}e(a.state.activeLines,g)||a.operation(function(){d(a);for(var e=0;e<g.length;e++)a.addLineClass(g[e],"wrap",b),a.addLineClass(g[e],"background",c);a.state.activeLines=g})}function g(a,b){f(a,b.ranges)}var b="CodeMirror-activeline",c="CodeMirror-activeline-background";a.defineOption("styleActiveLine",!1,function(b,c,e){var h=e&&e!=a.Init;c&&!h?(b.state.activeLines=[],f(b,b.listSelections()),b.on("beforeSelectionChange",g)):!c&&h&&(b.off("beforeSelectionChange",g),d(b),delete b.state.activeLines)})});
/*!
Deck JS - deck.codemirror
Copyright (c) 2015 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module wraps CodeMirror, using class names to select modes from loaded ones.
It requires, to have included:
- a packed version of CodeMirror (see http://codemirror.net/doc/compress.html to make your own with plugins),
- the CodeMirror CSS:
     curl -sk https://raw.githubusercontent.com/codemirror/CodeMirror/master/lib/codemirror.css > codemirror.css
- the theme files to be loaded (the ones you want to use)
*/

(function($, deck, undefined) {
    $.extend(true, $.deck.defaults, {
        classes: {
        },
        codemirrorAliases: {
            "java": "clike",
            "bash": "shell"
        },
        codemirror: {
            "default": {
                lineNumbers : true,
                theme : "default",
                mode : "javascript",
                //viewportMargin: Infinity,
                readOnly : true
            }
            // python: { ... } // to have different configurations for different modes
        }
    });

    var modesAndAliases = [];

    var codemirrorify = function(slide) {
        var o = $.deck('getOptions');

        for (_mode in modesAndAliases) {
            var mode = modesAndAliases[_mode];
            var clA = mode + "-code";
            var clB = "language-"+ mode; // added by showdown
            if (mode == "null") { // the "null" mode
                clA = "code";
                // clB: nothing is added by showdown anyway
            }
            var pattern = "textarea.%1:%2, .%1>textarea:%2";
            var selector = pattern.replace(/%1/g, clA) + ", " + pattern.replace(/%1/g, clB);
            selector = selector.replace(/%2/g, "not(.__done__)");
            $(slide).find(selector).each(function(i, e) {
                var options = o.codemirror["default"];
                if (mode in o.codemirror) {
                    options = o.codemirror[mode];
                }
                if (mode in o.codemirrorAliases) {
                    options.mode = o.codemirrorAliases[mode];
                } else {
                    options.mode = mode;
                }
                CodeMirror.fromTextArea(e, options);
                $(e).addClass("__done__");
            });
        }
    };

    var $d = $(document);
    $d.bind('deck.init', function() {
        var o = $.deck('getOptions');
        for (mode in CodeMirror.modes) {
            modesAndAliases.push(mode);
        }
        for (alias in o.codemirrorAliases) {
            var to = o.codemirrorAliases[alias];
            if (to in o.codemirror) {
                o.codemirror[alias] = o.codemirror[to];
            }
            modesAndAliases.push(alias);
        }
        $(".deck-container .slide").bind('deck.becameCurrent', function(_, direction) {
            setTimeout(function() {
                codemirrorify($(_.target).parentsUntil(".deck-container").andSelf().filter(".slide:first"));
            }, 0);
        });
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
"@font-face{font-family:KaTeX_AMS;src:url(fonts/KaTeX_AMS-Regular.eot);src:url(fonts/KaTeX_AMS-Regular.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_AMS-Regular.eot),url(fonts/KaTeX_AMS-Regular.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_AMS-Regular.woff2) format('woff2'),url(fonts/KaTeX_AMS-Regular.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_AMS-Regular.woff) format('woff'),url(fonts/KaTeX_AMS-Regular.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_AMS-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(fonts/KaTeX_Caligraphic-Bold.eot);src:url(fonts/KaTeX_Caligraphic-Bold.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Caligraphic-Bold.eot),url(fonts/KaTeX_Caligraphic-Bold.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Caligraphic-Bold.woff2) format('woff2'),url(fonts/KaTeX_Caligraphic-Bold.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Caligraphic-Bold.woff) format('woff'),url(fonts/KaTeX_Caligraphic-Bold.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Caligraphic-Bold.ttf) format('ttf');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(fonts/KaTeX_Caligraphic-Regular.eot);src:url(fonts/KaTeX_Caligraphic-Regular.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Caligraphic-Regular.eot),url(fonts/KaTeX_Caligraphic-Regular.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Caligraphic-Regular.woff2) format('woff2'),url(fonts/KaTeX_Caligraphic-Regular.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Caligraphic-Regular.woff) format('woff'),url(fonts/KaTeX_Caligraphic-Regular.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Caligraphic-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(fonts/KaTeX_Fraktur-Bold.eot);src:url(fonts/KaTeX_Fraktur-Bold.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Fraktur-Bold.eot),url(fonts/KaTeX_Fraktur-Bold.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Fraktur-Bold.woff2) format('woff2'),url(fonts/KaTeX_Fraktur-Bold.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Fraktur-Bold.woff) format('woff'),url(fonts/KaTeX_Fraktur-Bold.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Fraktur-Bold.ttf) format('ttf');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(fonts/KaTeX_Fraktur-Regular.eot);src:url(fonts/KaTeX_Fraktur-Regular.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Fraktur-Regular.eot),url(fonts/KaTeX_Fraktur-Regular.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Fraktur-Regular.woff2) format('woff2'),url(fonts/KaTeX_Fraktur-Regular.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Fraktur-Regular.woff) format('woff'),url(fonts/KaTeX_Fraktur-Regular.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Fraktur-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Bold.eot);src:url(fonts/KaTeX_Main-Bold.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Main-Bold.eot),url(fonts/KaTeX_Main-Bold.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Main-Bold.woff2) format('woff2'),url(fonts/KaTeX_Main-Bold.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Main-Bold.woff) format('woff'),url(fonts/KaTeX_Main-Bold.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Main-Bold.ttf) format('ttf');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Italic.eot);src:url(fonts/KaTeX_Main-Italic.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Main-Italic.eot),url(fonts/KaTeX_Main-Italic.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Main-Italic.woff2) format('woff2'),url(fonts/KaTeX_Main-Italic.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Main-Italic.woff) format('woff'),url(fonts/KaTeX_Main-Italic.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Main-Italic.ttf) format('ttf');font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Regular.eot);src:url(fonts/KaTeX_Main-Regular.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Main-Regular.eot),url(fonts/KaTeX_Main-Regular.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Main-Regular.woff2) format('woff2'),url(fonts/KaTeX_Main-Regular.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Main-Regular.woff) format('woff'),url(fonts/KaTeX_Main-Regular.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Main-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Math;src:url(fonts/KaTeX_Math-Italic.eot);src:url(fonts/KaTeX_Math-Italic.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Math-Italic.eot),url(fonts/KaTeX_Math-Italic.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Math-Italic.woff2) format('woff2'),url(fonts/KaTeX_Math-Italic.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Math-Italic.woff) format('woff'),url(fonts/KaTeX_Math-Italic.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Math-Italic.ttf) format('ttf');font-weight:400;font-style:italic}@font-face{font-family:KaTeX_SansSerif;src:url(fonts/KaTeX_SansSerif-Regular.eot);src:url(fonts/KaTeX_SansSerif-Regular.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_SansSerif-Regular.eot),url(fonts/KaTeX_SansSerif-Regular.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_SansSerif-Regular.woff2) format('woff2'),url(fonts/KaTeX_SansSerif-Regular.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_SansSerif-Regular.woff) format('woff'),url(fonts/KaTeX_SansSerif-Regular.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_SansSerif-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Script;src:url(fonts/KaTeX_Script-Regular.eot);src:url(fonts/KaTeX_Script-Regular.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Script-Regular.eot),url(fonts/KaTeX_Script-Regular.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Script-Regular.woff2) format('woff2'),url(fonts/KaTeX_Script-Regular.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Script-Regular.woff) format('woff'),url(fonts/KaTeX_Script-Regular.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Script-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size1;src:url(fonts/KaTeX_Size1-Regular.eot);src:url(fonts/KaTeX_Size1-Regular.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size1-Regular.eot),url(fonts/KaTeX_Size1-Regular.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size1-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size1-Regular.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size1-Regular.woff) format('woff'),url(fonts/KaTeX_Size1-Regular.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size1-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size2;src:url(fonts/KaTeX_Size2-Regular.eot);src:url(fonts/KaTeX_Size2-Regular.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size2-Regular.eot),url(fonts/KaTeX_Size2-Regular.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size2-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size2-Regular.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size2-Regular.woff) format('woff'),url(fonts/KaTeX_Size2-Regular.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size2-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size3;src:url(fonts/KaTeX_Size3-Regular.eot);src:url(fonts/KaTeX_Size3-Regular.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size3-Regular.eot),url(fonts/KaTeX_Size3-Regular.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size3-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size3-Regular.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size3-Regular.woff) format('woff'),url(fonts/KaTeX_Size3-Regular.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size3-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size4;src:url(fonts/KaTeX_Size4-Regular.eot);src:url(fonts/KaTeX_Size4-Regular.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size4-Regular.eot),url(fonts/KaTeX_Size4-Regular.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size4-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size4-Regular.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size4-Regular.woff) format('woff'),url(fonts/KaTeX_Size4-Regular.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Size4-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Typewriter;src:url(fonts/KaTeX_Typewriter-Regular.eot);src:url(fonts/KaTeX_Typewriter-Regular.eot#iefix) format('embedded-opentype'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Typewriter-Regular.eot),url(fonts/KaTeX_Typewriter-Regular.woff2) format('woff2'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Typewriter-Regular.woff2) format('woff2'),url(fonts/KaTeX_Typewriter-Regular.woff) format('woff'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Typewriter-Regular.woff) format('woff'),url(fonts/KaTeX_Typewriter-Regular.ttf) format('ttf'),url(http://cdn.css.net/files/katex/0.5.0/fonts/KaTeX_Typewriter-Regular.ttf) format('ttf');font-weight:400;font-style:normal}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:inline-block}.katex{font:400 1.21em KaTeX_Main;line-height:1.2;white-space:nowrap;text-indent:0}.katex .katex-html{display:inline-block}.katex .katex-mathml{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.katex .base,.katex .strut{display:inline-block}.katex .mathit{font-family:KaTeX_Math;font-style:italic}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .amsrm,.katex .mathbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak{font-family:KaTeX_Fraktur}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr{font-family:KaTeX_Script}.katex .mathsf{font-family:KaTeX_SansSerif}.katex .mainit{font-family:KaTeX_Main;font-style:italic}.katex .textstyle>.mord+.mop{margin-left:.16667em}.katex .textstyle>.mord+.mbin{margin-left:.22222em}.katex .textstyle>.mord+.mrel{margin-left:.27778em}.katex .textstyle>.mop+.mop,.katex .textstyle>.mop+.mord,.katex .textstyle>.mord+.minner{margin-left:.16667em}.katex .textstyle>.mop+.mrel{margin-left:.27778em}.katex .textstyle>.mop+.minner{margin-left:.16667em}.katex .textstyle>.mbin+.minner,.katex .textstyle>.mbin+.mop,.katex .textstyle>.mbin+.mopen,.katex .textstyle>.mbin+.mord{margin-left:.22222em}.katex .textstyle>.mrel+.minner,.katex .textstyle>.mrel+.mop,.katex .textstyle>.mrel+.mopen,.katex .textstyle>.mrel+.mord{margin-left:.27778em}.katex .textstyle>.mclose+.mop{margin-left:.16667em}.katex .textstyle>.mclose+.mbin{margin-left:.22222em}.katex .textstyle>.mclose+.mrel{margin-left:.27778em}.katex .textstyle>.mclose+.minner,.katex .textstyle>.minner+.mop,.katex .textstyle>.minner+.mord,.katex .textstyle>.mpunct+.mclose,.katex .textstyle>.mpunct+.minner,.katex .textstyle>.mpunct+.mop,.katex .textstyle>.mpunct+.mopen,.katex .textstyle>.mpunct+.mord,.katex .textstyle>.mpunct+.mpunct,.katex .textstyle>.mpunct+.mrel{margin-left:.16667em}.katex .textstyle>.minner+.mbin{margin-left:.22222em}.katex .textstyle>.minner+.mrel{margin-left:.27778em}.katex .mclose+.mop,.katex .minner+.mop,.katex .mop+.mop,.katex .mop+.mord,.katex .mord+.mop,.katex .textstyle>.minner+.minner,.katex .textstyle>.minner+.mopen,.katex .textstyle>.minner+.mpunct{margin-left:.16667em}.katex .reset-textstyle.textstyle{font-size:1em}.katex .reset-textstyle.scriptstyle{font-size:.7em}.katex .reset-textstyle.scriptscriptstyle{font-size:.5em}.katex .reset-scriptstyle.textstyle{font-size:1.42857em}.katex .reset-scriptstyle.scriptstyle{font-size:1em}.katex .reset-scriptstyle.scriptscriptstyle{font-size:.71429em}.katex .reset-scriptscriptstyle.textstyle{font-size:2em}.katex .reset-scriptscriptstyle.scriptstyle{font-size:1.4em}.katex .reset-scriptscriptstyle.scriptscriptstyle{font-size:1em}.katex .style-wrap{position:relative}.katex .vlist{display:inline-block}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist .baseline-fix{display:inline-table;table-layout:fixed}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{width:100%}.katex .mfrac .frac-line:before{border-bottom-style:solid;border-bottom-width:1px;content:\"\";display:block}.katex .mfrac .frac-line:after{border-bottom-style:solid;border-bottom-width:.04em;content:\"\";display:block;margin-top:-1px}.katex .mspace{display:inline-block}.katex .mspace.negativethinspace{margin-left:-.16667em}.katex .mspace.thinspace{width:.16667em}.katex .mspace.mediumspace{width:.22222em}.katex .mspace.thickspace{width:.27778em}.katex .mspace.enspace{width:.5em}.katex .mspace.quad{width:1em}.katex .mspace.qquad{width:2em}.katex .llap,.katex .rlap{width:0;position:relative}.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .rlap>.inner{left:0}.katex .katex-logo .a{font-size:.75em;margin-left:-.32em;position:relative;top:-.2em}.katex .katex-logo .t{margin-left:-.23em}.katex .katex-logo .e{margin-left:-.1667em;position:relative;top:.2155em}.katex .katex-logo .x{margin-left:-.125em}.katex .rule{display:inline-block;border-style:solid;position:relative}.katex .overline .overline-line{width:100%}.katex .overline .overline-line:before{border-bottom-style:solid;border-bottom-width:1px;content:\"\";display:block}.katex .overline .overline-line:after{border-bottom-style:solid;border-bottom-width:.04em;content:\"\";display:block;margin-top:-1px}.katex .sqrt>.sqrt-sign{position:relative}.katex .sqrt .sqrt-line{width:100%}.katex .sqrt .sqrt-line:before{border-bottom-style:solid;border-bottom-width:1px;content:\"\";display:block}.katex .sqrt .sqrt-line:after{border-bottom-style:solid;border-bottom-width:.04em;content:\"\";display:block;margin-top:-1px}.katex .sqrt>.root{margin-left:.27777778em;margin-right:-.55555556em}.katex .fontsize-ensurer,.katex .sizing{display:inline-block}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:2em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:3.46em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:4.14em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.98em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.71428571em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.14285714em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.28571429em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.42857143em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.71428571em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2.05714286em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.47142857em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.95714286em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.55714286em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.875em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.125em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.25em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.5em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.8em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.1625em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.5875em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:3.1125em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.55555556em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.77777778em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.88888889em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.11111111em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.6em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.92222222em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.3em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.76666667em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.7em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.8em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.9em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.2em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.44em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.73em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:2.07em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.49em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.41666667em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.58333333em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.66666667em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.75em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.83333333em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44166667em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.725em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.075em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.34722222em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.48611111em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.55555556em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.625em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.69444444em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.83333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.20138889em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.4375em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.72916667em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.28901734em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.40462428em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.46242775em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.52023121em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.57803468em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.69364162em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.83236994em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.19653179em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.43930636em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.24154589em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.33816425em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.38647343em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.43478261em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.48309179em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.57971014em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.69565217em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.83574879em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.20289855em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.20080321em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.2811245em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.32128514em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.36144578em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.40160643em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.48192771em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.57831325em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.69477912em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.8313253em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .accent>.vlist>span,.katex .op-limits>.vlist>span{text-align:center}.katex .accent .accent-body>span{width:0}.katex .accent .accent-body.accent-vec>span{position:relative;left:.326em}.katex .mtable .vertical-separator{display:inline-block;margin:0 -.025em;border-right:.05em solid #000}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist{text-align:center}.katex .mtable .col-align-l>.vlist{text-align:left}.katex .mtable .col-align-r>.vlist{text-align:right}\n"+
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
".deck-container > .slide div.comment {\n"+
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
".deck-container > .slide div.comment.small {\n"+
"  width: 120px;\n"+
"  margin-left: -100px;\n"+
"}\n"+
"\n"+
".deck-container > .slide div.comment.twolines {\n"+
"  height: 40px;\n"+
"  margin-top: -13.333px;\n"+
"  margin-bottom: -26.667px;\n"+
"}\n"+
"\n"+
"/* BASICS */\n"+
"\n"+
".CodeMirror {\n"+
"  /* Set height, width, borders, and global font properties here */\n"+
"  font-family: monospace;\n"+
"  height: 300px;\n"+
"  color: black;\n"+
"}\n"+
"\n"+
"/* PADDING */\n"+
"\n"+
".CodeMirror-lines {\n"+
"  padding: 4px 0; /* Vertical padding around content */\n"+
"}\n"+
".CodeMirror pre {\n"+
"  padding: 0 4px; /* Horizontal padding of content */\n"+
"}\n"+
"\n"+
".CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n"+
"  background-color: white; /* The little square between H and V scrollbars */\n"+
"}\n"+
"\n"+
"/* GUTTER */\n"+
"\n"+
".CodeMirror-gutters {\n"+
"  border-right: 1px solid #ddd;\n"+
"  background-color: #f7f7f7;\n"+
"  white-space: nowrap;\n"+
"}\n"+
".CodeMirror-linenumbers {}\n"+
".CodeMirror-linenumber {\n"+
"  padding: 0 3px 0 5px;\n"+
"  min-width: 20px;\n"+
"  text-align: right;\n"+
"  color: #999;\n"+
"  white-space: nowrap;\n"+
"}\n"+
"\n"+
".CodeMirror-guttermarker { color: black; }\n"+
".CodeMirror-guttermarker-subtle { color: #999; }\n"+
"\n"+
"/* CURSOR */\n"+
"\n"+
".CodeMirror-cursor {\n"+
"  border-left: 1px solid black;\n"+
"  border-right: none;\n"+
"  width: 0;\n"+
"}\n"+
"/* Shown when moving in bi-directional text */\n"+
".CodeMirror div.CodeMirror-secondarycursor {\n"+
"  border-left: 1px solid silver;\n"+
"}\n"+
".cm-fat-cursor .CodeMirror-cursor {\n"+
"  width: auto;\n"+
"  border: 0;\n"+
"  background: #7e7;\n"+
"}\n"+
".cm-fat-cursor div.CodeMirror-cursors {\n"+
"  z-index: 1;\n"+
"}\n"+
"\n"+
".cm-animate-fat-cursor {\n"+
"  width: auto;\n"+
"  border: 0;\n"+
"  -webkit-animation: blink 1.06s steps(1) infinite;\n"+
"  -moz-animation: blink 1.06s steps(1) infinite;\n"+
"  animation: blink 1.06s steps(1) infinite;\n"+
"  background-color: #7e7;\n"+
"}\n"+
"@-moz-keyframes blink {\n"+
"  0% {}\n"+
"  50% { background-color: transparent; }\n"+
"  100% {}\n"+
"}\n"+
"@-webkit-keyframes blink {\n"+
"  0% {}\n"+
"  50% { background-color: transparent; }\n"+
"  100% {}\n"+
"}\n"+
"@keyframes blink {\n"+
"  0% {}\n"+
"  50% { background-color: transparent; }\n"+
"  100% {}\n"+
"}\n"+
"\n"+
"/* Can style cursor different in overwrite (non-insert) mode */\n"+
".CodeMirror-overwrite .CodeMirror-cursor {}\n"+
"\n"+
".cm-tab { display: inline-block; text-decoration: inherit; }\n"+
"\n"+
".CodeMirror-ruler {\n"+
"  border-left: 1px solid #ccc;\n"+
"  position: absolute;\n"+
"}\n"+
"\n"+
"/* DEFAULT THEME */\n"+
"\n"+
".cm-s-default .cm-header {color: blue;}\n"+
".cm-s-default .cm-quote {color: #090;}\n"+
".cm-negative {color: #d44;}\n"+
".cm-positive {color: #292;}\n"+
".cm-header, .cm-strong {font-weight: bold;}\n"+
".cm-em {font-style: italic;}\n"+
".cm-link {text-decoration: underline;}\n"+
".cm-strikethrough {text-decoration: line-through;}\n"+
"\n"+
".cm-s-default .cm-keyword {color: #708;}\n"+
".cm-s-default .cm-atom {color: #219;}\n"+
".cm-s-default .cm-number {color: #164;}\n"+
".cm-s-default .cm-def {color: #00f;}\n"+
".cm-s-default .cm-variable,\n"+
".cm-s-default .cm-punctuation,\n"+
".cm-s-default .cm-property,\n"+
".cm-s-default .cm-operator {}\n"+
".cm-s-default .cm-variable-2 {color: #05a;}\n"+
".cm-s-default .cm-variable-3 {color: #085;}\n"+
".cm-s-default .cm-comment {color: #a50;}\n"+
".cm-s-default .cm-string {color: #a11;}\n"+
".cm-s-default .cm-string-2 {color: #f50;}\n"+
".cm-s-default .cm-meta {color: #555;}\n"+
".cm-s-default .cm-qualifier {color: #555;}\n"+
".cm-s-default .cm-builtin {color: #30a;}\n"+
".cm-s-default .cm-bracket {color: #997;}\n"+
".cm-s-default .cm-tag {color: #170;}\n"+
".cm-s-default .cm-attribute {color: #00c;}\n"+
".cm-s-default .cm-hr {color: #999;}\n"+
".cm-s-default .cm-link {color: #00c;}\n"+
"\n"+
".cm-s-default .cm-error {color: #f00;}\n"+
".cm-invalidchar {color: #f00;}\n"+
"\n"+
".CodeMirror-composing { border-bottom: 2px solid; }\n"+
"\n"+
"/* Default styles for common addons */\n"+
"\n"+
"div.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}\n"+
"div.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}\n"+
".CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n"+
".CodeMirror-activeline-background {background: #e8f2ff;}\n"+
"\n"+
"/* STOP */\n"+
"\n"+
"/* The rest of this file contains styles related to the mechanics of\n"+
"   the editor. You probably shouldn't touch them. */\n"+
"\n"+
".CodeMirror {\n"+
"  position: relative;\n"+
"  overflow: hidden;\n"+
"  background: white;\n"+
"}\n"+
"\n"+
".CodeMirror-scroll {\n"+
"  overflow: scroll !important; /* Things will break if this is overridden */\n"+
"  /* 30px is the magic margin used to hide the element's real scrollbars */\n"+
"  /* See overflow: hidden in .CodeMirror */\n"+
"  margin-bottom: -30px; margin-right: -30px;\n"+
"  padding-bottom: 30px;\n"+
"  height: 100%;\n"+
"  outline: none; /* Prevent dragging from highlighting the element */\n"+
"  position: relative;\n"+
"}\n"+
".CodeMirror-sizer {\n"+
"  position: relative;\n"+
"  border-right: 30px solid transparent;\n"+
"}\n"+
"\n"+
"/* The fake, visible scrollbars. Used to force redraw during scrolling\n"+
"   before actuall scrolling happens, thus preventing shaking and\n"+
"   flickering artifacts. */\n"+
".CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n"+
"  position: absolute;\n"+
"  z-index: 6;\n"+
"  display: none;\n"+
"}\n"+
".CodeMirror-vscrollbar {\n"+
"  right: 0; top: 0;\n"+
"  overflow-x: hidden;\n"+
"  overflow-y: scroll;\n"+
"}\n"+
".CodeMirror-hscrollbar {\n"+
"  bottom: 0; left: 0;\n"+
"  overflow-y: hidden;\n"+
"  overflow-x: scroll;\n"+
"}\n"+
".CodeMirror-scrollbar-filler {\n"+
"  right: 0; bottom: 0;\n"+
"}\n"+
".CodeMirror-gutter-filler {\n"+
"  left: 0; bottom: 0;\n"+
"}\n"+
"\n"+
".CodeMirror-gutters {\n"+
"  position: absolute; left: 0; top: 0;\n"+
"  z-index: 3;\n"+
"}\n"+
".CodeMirror-gutter {\n"+
"  white-space: normal;\n"+
"  height: 100%;\n"+
"  display: inline-block;\n"+
"  margin-bottom: -30px;\n"+
"  /* Hack to make IE7 behave */\n"+
"  *zoom:1;\n"+
"  *display:inline;\n"+
"}\n"+
".CodeMirror-gutter-wrapper {\n"+
"  position: absolute;\n"+
"  z-index: 4;\n"+
"  background: none !important;\n"+
"  border: none !important;\n"+
"}\n"+
".CodeMirror-gutter-background {\n"+
"  position: absolute;\n"+
"  top: 0; bottom: 0;\n"+
"  z-index: 4;\n"+
"}\n"+
".CodeMirror-gutter-elt {\n"+
"  position: absolute;\n"+
"  cursor: default;\n"+
"  z-index: 4;\n"+
"}\n"+
".CodeMirror-gutter-wrapper {\n"+
"  -webkit-user-select: none;\n"+
"  -moz-user-select: none;\n"+
"  user-select: none;\n"+
"}\n"+
"\n"+
".CodeMirror-lines {\n"+
"  cursor: text;\n"+
"  min-height: 1px; /* prevents collapsing before first draw */\n"+
"}\n"+
".CodeMirror pre {\n"+
"  /* Reset some styles that the rest of the page might have set */\n"+
"  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n"+
"  border-width: 0;\n"+
"  background: transparent;\n"+
"  font-family: inherit;\n"+
"  font-size: inherit;\n"+
"  margin: 0;\n"+
"  white-space: pre;\n"+
"  word-wrap: normal;\n"+
"  line-height: inherit;\n"+
"  color: inherit;\n"+
"  z-index: 2;\n"+
"  position: relative;\n"+
"  overflow: visible;\n"+
"  -webkit-tap-highlight-color: transparent;\n"+
"}\n"+
".CodeMirror-wrap pre {\n"+
"  word-wrap: break-word;\n"+
"  white-space: pre-wrap;\n"+
"  word-break: normal;\n"+
"}\n"+
"\n"+
".CodeMirror-linebackground {\n"+
"  position: absolute;\n"+
"  left: 0; right: 0; top: 0; bottom: 0;\n"+
"  z-index: 0;\n"+
"}\n"+
"\n"+
".CodeMirror-linewidget {\n"+
"  position: relative;\n"+
"  z-index: 2;\n"+
"  overflow: auto;\n"+
"}\n"+
"\n"+
".CodeMirror-widget {}\n"+
"\n"+
".CodeMirror-code {\n"+
"  outline: none;\n"+
"}\n"+
"\n"+
"/* Force content-box sizing for the elements where we expect it */\n"+
".CodeMirror-scroll,\n"+
".CodeMirror-sizer,\n"+
".CodeMirror-gutter,\n"+
".CodeMirror-gutters,\n"+
".CodeMirror-linenumber {\n"+
"  -moz-box-sizing: content-box;\n"+
"  box-sizing: content-box;\n"+
"}\n"+
"\n"+
".CodeMirror-measure {\n"+
"  position: absolute;\n"+
"  width: 100%;\n"+
"  height: 0;\n"+
"  overflow: hidden;\n"+
"  visibility: hidden;\n"+
"}\n"+
"\n"+
".CodeMirror-cursor { position: absolute; }\n"+
".CodeMirror-measure pre { position: static; }\n"+
"\n"+
"div.CodeMirror-cursors {\n"+
"  visibility: hidden;\n"+
"  position: relative;\n"+
"  z-index: 3;\n"+
"}\n"+
"div.CodeMirror-dragcursors {\n"+
"  visibility: visible;\n"+
"}\n"+
"\n"+
".CodeMirror-focused div.CodeMirror-cursors {\n"+
"  visibility: visible;\n"+
"}\n"+
"\n"+
".CodeMirror-selected { background: #d9d9d9; }\n"+
".CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n"+
".CodeMirror-crosshair { cursor: crosshair; }\n"+
".CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n"+
".CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n"+
"\n"+
".cm-searching {\n"+
"  background: #ffa;\n"+
"  background: rgba(255, 255, 0, .4);\n"+
"}\n"+
"\n"+
"/* IE7 hack to prevent it from returning funny offsetTops on the spans */\n"+
".CodeMirror span { *vertical-align: text-bottom; }\n"+
"\n"+
"/* Used to force a border model for a node */\n"+
".cm-force-border { padding-right: .1px; }\n"+
"\n"+
"@media print {\n"+
"  /* Hide the cursor when printing */\n"+
"  .CodeMirror div.CodeMirror-cursors {\n"+
"    visibility: hidden;\n"+
"  }\n"+
"}\n"+
"\n"+
"/* See issue #2901 */\n"+
".cm-tab-wrap-hack:after { content: ''; }\n"+
"\n"+
"/* Help users use markselection to safely style text background */\n"+
"span.CodeMirror-selectedtext { background: none; }\n"+
"") }