##Deploy

Login via heroku account set in ticket *IN-62*

###servers
https://prod-interviewer.herokuapp.com/

https://dev-interviewer.herokuapp.com/

https://qa-interviewer.herokuapp.com/

###Production
```sh
git push production master
```

###Development
```sh
git push develop Develop:master
```

###QA
```sh
git push qa QA:master
```