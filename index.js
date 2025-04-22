require('dotenv').config()
const express =require('express');
const app= express();
const port =4000;
const githubData={
    "login": "noor-glith",
    "id": 147724454,
    "node_id": "U_kgDOCM4Ypg",
    "avatar_url": "https://avatars.githubusercontent.com/u/147724454?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/noor-glith",
    "html_url": "https://github.com/noor-glith",
    "followers_url": "https://api.github.com/users/noor-glith/followers",
    "following_url": "https://api.github.com/users/noor-glith/following{/other_user}",
    "gists_url": "https://api.github.com/users/noor-glith/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/noor-glith/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/noor-glith/subscriptions",
    "organizations_url": "https://api.github.com/users/noor-glith/orgs",
    "repos_url": "https://api.github.com/users/noor-glith/repos",
    "events_url": "https://api.github.com/users/noor-glith/events{/privacy}",
    "received_events_url": "https://api.github.com/users/noor-glith/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Mahnoor Rizwan",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": true,
    "bio": "a Computer Science student passionate about frontend development and creating intuitive user experiences. ",
    "twitter_username": null,
    "public_repos": 22,
    "public_gists": 0,
    "followers": 3,
    "following": 2,
    "created_at": "2023-10-12T12:55:20Z",
    "updated_at": "2025-04-19T11:21:19Z"
  }

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get("/instagram",(req,res)=>{
  res.send("imnotnoor")
})

app.get("/login",(req,res)=>{
    res.send("<h1>please login at chai and code</h1>")
})

app.get("/github",(req,res)=>{
    res.json(githubData)
})
app.get("/youtube/chaiaurcode",(req,res)=>{
res.send("<h2>Please visit chai aur code.</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})