console.log('resize.js imported')
window.onresize = () => {  
  var n = {
    browser: "Chrome",
    version: "94.0",
    isChromecast: false,
    isMinimalUI: false,
    os: "Windows",
    model: "Win32",
    OSVersion: "Win32",
    isTouchDevice: false,
    isTablet: false,
    isAndroidTabletApp: false,
    isOldAndroidTabletApp: false,
    isNewAndroidTabletApp: false,
    isAndroidTvChromecast: false,
    isAndroidTvBrowser: false,
    isAndroidTvBrowserPuffin: false,
    isWeak: false,
    gearConnected: false,
    isMacOSApp: false,
    isiOS: false,
    isOldiOS: false,
    isNewiOS: false,
    isIpad: false,
    isIpadApp: false,
    isIpadAppNewiOS: false,
    isMobile: false,
    isPlayStation: false,
    isXbox: false,
    isNintendoSwitch: false,
  };
  var e,
    t,
    i,
    r,
    o = false && !n.isMacOSApp ? "4:3" : "16:9",
    s = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  "4:3" === o
    ? ((e = 4 / 3), (t = s.width), (i = s.height), (r = t / i))
    : ((e = 16 / 9), (t = s.width), (i = s.height), (r = t / i));
  var a, c, l, u;
  r > e
    ? ((a = s.height),
      (c = 0),
      (l = (function () {
        return n.isAndroidTabletApp || n.isMacOSApp
          ? s.width
          : Math.round(i * e);
      })()),
      (u = Math.floor((t - l) / 2)))
    : ((l = s.width),
      (u = 0),
      (a = Math.round(t / e)),
      (c = Math.floor((i - a) / 2)));
  var newsize = {
    width: l,
    marginLeft: u,
    height: a,
    marginTop: c,
  };
  resizeS("Game", newsize);

  console.log(" this.inGameVideoPlayer:", l, a);
  console.log("fontSize:", Math.round((l / 1280) * 125));

  function resizeS(id, a) {
    document.getElementById(id).style.width = a.width + "px";
    document.getElementById(id).style.height = a.height + "px";
    document.getElementById(id).style.marginTop = a.marginTop + "px";
    document.getElementById(id).style.marginLeft = a.marginLeft + "px";
    var htmlElement = document.querySelector("html");
    htmlElement.style.fontSize = Math.round((l / 1280) * 125) + "px";
  }
};
window.onresize();