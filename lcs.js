window.addEventListener("message", function (b) {
  if ("login" == b.data.type) {
    const a = b.data.data;
    console.log(a);
    chrome.storage.sync.set(a, function () {
      window.close();
    });
  }
});
