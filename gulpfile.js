var gulp    = require('gulp'),
    gutil   = require('gulp-util');

var buildPath = 'projects/SimpleJavaAppWAR';
var deployPath = 'D:/jboss-eap-7.0/standalone/deployments';

gulp.task('maven:build', function() {
  gutil.log('Maven Build has Started');

  const mvn = require('maven').create({
      cwd: buildPath
    });
    mvn.execute(['clean', 'install'], { 'skipTests': true }).then(() => { // Success
      // As mvn.execute(..) returns a promise, you can use this block to continue
      // your stuff, once the execution of the command has been finished successfully.
      gutil.log('Maven Build has Completed.');
      gutil.log('START: Pushing WAR file to JBoss Deployment');

      gulp.src(buildPath + '/target/*.war')
        .pipe(gulp.dest(deployPath));

      gutil.log('END: WAR File deployed to JBoss')
    }).catch((reason) => { // Failure
      gutil.log(reason);
    });
});

/* Watch for file changes and trigger build immediately */
gulp.task('watch', function () {
  gutil.log('Waiting for changes.');
  gulp.watch([
      buildPath + '/src/main/webapp/**/*'
    ], ['maven:build'])
});
