(function () {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get("ref");

  if (ref) {
    document.cookie = `referral=${encodeURIComponent(ref)}; Max-Age=7948800; Path=/; Domain=paycoinly.xyz; SameSite=Lax`;
  }
})()
