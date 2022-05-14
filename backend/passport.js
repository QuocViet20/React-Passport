const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID =
  "331461137235-r7fvb1nsl43gh146retn02t7i1plmeq2.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "a5857e2170bf7e9c35d1";
const GITHUB_CLIENT_SECRET = "4d51067fe0e565a2f9bf833f820c550c396388ce";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      //   const user = {
      //     username: profile.displayName,
      //     avatar: profile.photos[0],
      //   };
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      //   const user = {
      //     username: profile.displayName,
      //     avatar: profile.photos[0],
      //   };
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
