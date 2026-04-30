function normalizeProfileId(a) {
  return a.trim().toLowerCase();
}
document.getElementById("addprofilebtn").addEventListener("click", function () {
  var a = normalizeProfileId(document.getElementById("profileid").value);
  window.open("https://www.google.com/maps/search/" + encodeURIComponent(a));
});


document.getElementById("upgradebtn").addEventListener("click", function () {
  upgradeToPro();
});

document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginbtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      chrome.tabs.create({
        url: config.hl
      });
    });

  } else {
    console.log("loginbtn not a found");
  }
});


document.addEventListener("DOMContentLoaded", function () {

  const loginBtn = document.getElementById("loginbtn2");

  loginBtn.addEventListener("click", () => {

    chrome.storage.local.clear(() => {

    document.getElementById("loginbtn").style.display = "block";
    document.getElementById("loginbtn2").style.display = "none";

    });

  });

});


const el = (id) => document.getElementById(id);

function setLoggedOutUI() {
  el("loginbtn").style.display = "block";
  el("loginbtn2").style.display = "none";

  el("accountinfo").style.display = "block";
  el("accountinfo2").style.display = "none";

  el("upgradebtn").style.display = "block";
  el("upgradebtn2").style.display = "none";

  el("addprofilebtn").style.display = "none";
  el("addprofilebtn2").style.display = "block";
}

function setLoggedUI(user) {
  el("loginbtn").style.display = "none";
  el("loginbtn2").style.display = "block";

  el("accountinfo").style.display = "none";
  el("accountinfo2").style.display = "block";

  el("addprofilebtn").style.display = "block";
  el("addprofilebtn2").style.display = "none";

  el("upgradebtn").style.display = "none";

  const upgradebtn = el("upgradebtn2");
  upgradebtn.style.display = "block";
  upgradebtn.textContent = user.username.toUpperCase();
  upgradebtn.style.fontSize = "20px";
  upgradebtn.style.fontWeight = "bold";
}

async function tT() {
  const result = await chrome.storage.local.get("profile_token");
  return result.profile_token || null;
}

async function init() {
  try {
    const token = await tT();

    if (!token) {
      config.t = false;
      setLoggedOutUI();
      return;
    }

    config.t = token;

    const data = await prf();

    if (!data || !data[0]) {
      setLoggedOutUI();
      return;
    }

    const user = data[0];
    const isActive = user.is_active || user.is_demon;

    if (isActive) {
      setLoggedUI(user);
    } else {
      setLoggedOutUI();
    }

  } catch (err) {
    console.error("Erro ao inicializar:", err);
    setLoggedOutUI();
  }
}

init();



