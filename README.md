# Simplify Journal

This repo is the FrontEnd from 'Simplify Journal' application, this consume the API from <a href="https://github.com/zisongbr/Simplify_API">SimplifyJournal-API</a> and return its like a e-book or kindle like reader.

The main part of this application is the "getArticleData()" function, this occure is the main screen "./screens/HomeScreen.js" where we fetch the API with the header 'article-url'.



## First of all, clone and start the app
<a href="https://nodejs.org/en/download/">Download Node.js</a>

``` bash
$ git clone https://github.com/zisongbr/SimplifyJournal_APP.git
$ cd SimplifyJournal_APP
$ npm install   | yarn install
$ npm start     | yarn start    | expo start 
```


## Request in react:

``` js
return fetch('http://endpoint-api.com/translate/json', {
    method: 'GET',
    headers: {
        'article-url': "https://www.nytimes.com/2019/12/23/world/europe/russia-putin.html",
    }
})
```


## Result
```json
{
    "code": 200,
    "original_post": "https://www.nytimes.com/2019/12/23/world/europe/russia-putin.html",
    "site_name": "www.nytimes.com",
    "site_favicon": "https://www.nytimes.com/apple-touch-icon.png",
    "keywords": [
        "Putin",
        " Vladimir V",
        "Russia",
        "Politics and Government",
        "International Relations"
    ],
    "article_title": "Putin’s Russia, Punching Above Its Weight, Keeps Adversaries Off Balance",
    "article_description": "Its economy is sputtering and its young people are frustrated, but with America and Europe in tumult, Russia and its leader of two decades are on a roll.",
    "article_image": "https://static01.nyt.com/images/2019/12/23/world/23russia-putin/23russia-putin-facebookJumbo.jpg",
    "article_capitalize": "",
    "article_body": [
    {
    "is_img": false,
    "content": "By Andrew Higgins",
    "props": [
        {
            "start": 3,
            "steps": 14,
            "type": "link",
            "text": "Andrew Higgins",
            "href": "https://www.nytimes.com/by/andrew-higgins"
        }
    ]
}
```
<br>


# In APP

<div style="
display: flex;
flex-direction: row;
height: 350px;
width: 1000px;">
    <div style="padding:20px">
        <h2> Home Screen: </h2>
        <div style="
        background-image:url(https://i.ibb.co/BzQWGsx/Homescreen.png); 
        height: 512px;
        width: 200px;
        background-size: contain;
        background-repeat: no-repeat;">
        </div>
    </div>
    <div style="padding:20px">
        <h2> Reader Screen: </h2>
        <div style="
        background-image:url(https://i.ibb.co/r7LZk2f/readerscreen.png); 
        height: 379px;
        width:200px;
        background-size: contain;
        background-repeat: no-repeat;">
        </div>
    </div>
</div>