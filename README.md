## Deploy

Login via heroku account set in ticket *IN-62*

### Servers
https://prod-interviewer.herokuapp.com/

https://dev-interviewer.herokuapp.com/

https://qa-interviewer.herokuapp.com/

### Production
```sh
git push production master
```

### Development
```sh
git push develop Develop:master
```

### QA
```sh
git push qa QA:master
```

### Running local
If you don`t have environment, install it
```sh
gem install ruby
gem install bundler
bundle install
```

To run servers
```sh
rake start
```
if there are any issues go to Procfile.local and comment/uncomment blocks

localhost:3000 - frontend
localhost:3001 - backend
localhost:3001\admin - rails-admin is here
