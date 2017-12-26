# gulp-maven-war-deployment
This will do Maven Build, generate WAR file and deploy the WAR file to JBoss Deployment folder.

## Getting Started

The workflow to run Maven build and deploy WAR file automatically whenever a file is changed.

### Prerequisites

What things you need to install the software and how to install them

```
Install NodeJS, https://nodejs.org/
```

Install Gulp

Open cmd or terminal and run the following command to install Gulp,

```
npm install gulp-cli -g
```

### Installing

Download or Clone this repo and move "package.json" and "gulpfile.js" to your project directory.

Open "gulpfile.js" and update it with your project path

```
var buildPath = 'projects/SimpleJavaAppWAR';
var deployPath = 'D:/jboss-eap-7.0/standalone/deployments';
```

Also validate, if these path are correct. Else update it with correct path,

```
gulp.src(buildPath + '/target/*.war')

gulp.watch([
    buildPath + '/src/main/webapp/**/*'
```

Open cmd/terminal from that location and install npm packages,

```
npm install
```

### How To Run

Use following command to run,

```
gulp watch
```

For Mac users, if there is any permission issues then use,

```
sudo gulp watch
```


## License

This project is licensed under the Unlicense - see the [LICENSE.md](LICENSE.md) file for details
