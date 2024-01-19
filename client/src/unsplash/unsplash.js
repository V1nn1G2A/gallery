import Unsplash from "unsplashjs";

const unsplash = new Unsplash({
  accesskey: "AAuC1m2vJCzAl_6xjsi1FPxu5WBZ0DTDCzTmuwXORmQ",
  secret: "MbtcnSdi9wUOpNBEuBQSNFJLAhYGeec7hhM3BEVOO1Q",
  callbackUrl: "http://localhost:3000/auth",
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes",
]);

location.assign(authenticationUrl);
