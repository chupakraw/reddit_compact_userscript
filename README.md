# A userscript enabling Reddit Compact features for old.reddit urls
This script works for ios Safari using the browser extensions Userscripts app. It might work for Android using Tampermonkey or Greasemonkey, but I haven't tried.

The script works for https://old.reddit.com/ urls and not https://www.reddit.com/. You need to change the 'www' to 'old' for this script to work. There must be something blocking userscripts for https://www.reddit.com/ urls since I tried a few methods unsuccessfully.

TehVulpez on reddit pointed out that appending '.i' to an old.reddit.com/ url still works for enabling reddit compact. The script will detect if you are on an old.reddit.com page and apend '.i' to the end of the url. Additionally, it will get all links on the page that contain 'reddit.com' and append '.i' to them. Once you are directed to an old.reddit url you should reap the benefits of the ol' reddit compact.

Here's the reddit thread TehVulpez mentions this:

https://www.reddit.com/r/compact/comments/12dppvb/rest_in_peace_reddit_compact/jfd1vka/

# Instructions for ios:
- Go to the App store and download the Userscripts app for browser extensions.

- You also need a text editor to write and safe javascript files. I used Koder Code Editor but there are potentially better options. Download an app that can save .js files if you don't have one.

- After downloading Userscripts, go to the iphone Settings > Safari > Extensions.

- Under Allow These Extensions click on Userscripts and turn on and set Allow Websites to Allow.

- Next, open the Userscripts app and set the directory. Remember this directory for saving your .js file to.

- Now copy the code in reddit_compact_userscript.js.

- Go to your text editor and paste the code and save the file.

- Make sure this file is either saved or copied to the Userscripts app directory you set earlier.

- In Safari, go to an old.reddit.com url and check if it works.

- You might need to enable the script. To the left of the url in the address bar click on the 'aA' and go to userscripts.

- You should see your script. Click on the script to enable it if it's not highlighted.

- If you don't see the script make sure the file is in the Userscripts app directory.



