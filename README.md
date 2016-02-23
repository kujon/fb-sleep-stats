# fb-sleep

A small tool to show the potential privacy implications modern social media have.
By tracking online/offline status of people on Facebook, it is possible to get an accurate image of their daily routine, and when they go to sleep, and get up in the morning.
Read the blog post: https://medium.com/@sqrendk/how-you-can-use-facebook-to-track-your-friends-sleeping-habits-505ace7fffb6

## Installation

**Requirements**
 - Node.js (preferably Node 4)

**Clone repository**
```
heroku git:clone -a https://github.com/sqren/fb-sleep-stats.git
```

**Configuration**

Create a heroku app:
```
cd fb-sleep-stats
```

Specify the following ENV variables:
 - "C_USER": [your Facebook user id](http://findmyfbid.com/)
 -  "XS": [xs value from Facebook cookie](https://gist.github.com/sqren/0e4563f258c9e85e4ae1)
 - "APP_ID": [Facebook App Id](https://gist.github.com/sqren/1ac0f5d316fcbd46d8c1)

*Make sure there are not trailing tabs or spaces in the config file!*

**Push to heroku**
```
git push heroku master
```

#Troubleshooting

**I get an error when running "npm run build-minified"**

Try re-installing the node-modules:
```
rm -rf node_modules
npm install
npm run build-minified
```

**No users show up**
 - If you have an ad-blocker, you must disable it for the site.
 - You need to run `npm run scrape` and keep it running. When you stop it, it will stop tracking.

**Other issues**

If you encounter a bug or have a problem, please go to [Issues](https://github.com/sqren/fb-sleep-stats/issues?utf8=%E2%9C%93&q=is%3Aissue+) and use the search functionality, in case someone else already asked the question. If you can't find anything helpful you are very welcome to create a [new issue](https://github.com/sqren/fb-sleep-stats/issues/new)
