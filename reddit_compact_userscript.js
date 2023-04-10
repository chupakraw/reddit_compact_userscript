// ==UserScript==
// @name         Reddit URL Modifier
// @version      1.2
// @description  Modifies Reddit URLs by appending '.i'
// @match        https://*.reddit.com/*
// ==/UserScript==

(function() {
  'use strict';

  // Grab Reddit's instance of jQuery
  var $ = window.jQuery;
  var jQuery = window.jQuery;

  // function to modify URL
  function modifyUrl() {
      var href = window.location.href;
      if (!href.endsWith(".i") && !href.endsWith("/.i")) {
          if (href.endsWith("/")) {
              window.location.href = href + ".i";
          } else {
              window.location.href += "/.i";
          }
      }
  }

  // check if URL needs to be redirected to old.reddit.com
  var currentUrl = window.location.href;
  if (currentUrl.startsWith("https://www.reddit.com/")) {
      var oldUrl = currentUrl.replace("https://www.reddit.com/", "https://old.reddit.com/");
      window.location.href = oldUrl;
  }

  // append '.i' to the subreddit part of the URL
  $('a[href*="reddit.com/r/"]').each(function() {
      var href = $(this).attr('href');
      var regex = /\/r\/(\w+)/;
      if (regex.test(href)) {
          var lastSlash = href.lastIndexOf("/");
          var newHref = href.slice(0, lastSlash + 1) + ".i" + href.slice(lastSlash + 1);
          $(this).attr('href', newHref);
      }
  });

  // append '.i' to the base URL
  $('a[href="https://old.reddit.com/"]').attr('href', 'https://old.reddit.com/.i');

  // append '.i' to the landing URL (before page is fully loaded)
  if (window.location.hostname == "old.reddit.com") {
      modifyUrl();
  }
})();