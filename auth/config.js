var config = {
  h: "https://erpmugi.com.br/",
  productId: "google-maps-leads-extension",
  proPriceId: "price_1O2xbhDV4vkIhO09jQKfcdq9",
  feedback_url: "https://erpmugi.com.br/",
  hl: "https://erpmugi.com.br/leads/login/",
  dash:"https://erpmugi.com.br/leads/dashboard/",
  t: "",
  ht: "https://erpmugi.com.br/"
};

chrome.storage.local.set({ "c": config }, function() {
});