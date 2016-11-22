module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "API",
      script    : "bin/www",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "debug"
      }
    }

    // Second application
//    ,{
//      name      : "WEB",
//      script    : "web.js"
//    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      key  : "./flask.pem",
      user : "node",
      host : "52.91.109.174",
      ref  : "origin/master",
      repo : "https://github.com/osawill/color-decoder.git",
      path : "/home/ubuntu/color-decoder",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env production"
    },
    debug : {
      key  : "./flask.pem",
      user : "node",
      host : "52.91.109.174",
      ref  : "origin/master",
      repo : "https://github.com/osawill/color-decoder.git",
      path : "/home/ubuntu/color-decoder",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env debug"
    },
    dev : {
      user : "ubuntu",
      host : "212.83.163.1",
      ref  : "origin/master",
      repo : "git@github.com:repo.git",
      path : "/var/www/development",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env dev",
      env  : {
        NODE_ENV: "dev"
      }
    }
  }
}
