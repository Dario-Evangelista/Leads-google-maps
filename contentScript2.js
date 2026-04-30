(async () => {
  const e = await chrome.storage.local.get("profile_token"),
    t = await chrome.storage.local.get("c"),
    o = e.profile_token || null,
    c = t.c || {};
  if (o) {
    var n = document.createElement("script");
    ((n.src = chrome.runtime.getURL("injected.js")),
      (n.type = "module"),
      (n.dataset.t = o),
      (n.dataset.c = JSON.stringify(c)),
      (n.onload = function () {
        this.remove();
      }),
      (document.head || document.documentElement).appendChild(n));
  } else console.log("222");
})();
