# Draft App

## Getting Started in Linux
Follow the [instructions](https://help.github.com/en/articles/connecting-to-github-with-ssh) to setup your ssh key for github

### install software
```
sudo apt install nodejs npm mongodb git
sudo npm install -g angular-cli
```

### get the code from github
```
git clone git@github.com:RazorX2/draftapp.git
```

### run the angular app
```
cd ~/draftapp/draft-angular
npm install
npm run start
```

### run the express api
```
cd ~/draftapp/draft-api
npm install
npm run dev
```
