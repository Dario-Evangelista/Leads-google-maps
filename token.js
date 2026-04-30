const token = document
.querySelector('meta[name="profile-token"]')
?.getAttribute("content");

if(token){
    chrome.storage.local.set({
        profile_token: token
    });

}