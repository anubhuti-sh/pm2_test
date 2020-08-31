module.exports = {
    "apps" : [{
        "name": "test-app",
        "script": "./index.js",
        "watch": true,
        "ignore_watch": 'node_modules',
        "env_stage": {
            "NODE_ENV": "stage",
            "PORT": "3000",
            "currentEnv": "its in stage"
        },
        "env_prod": {
            "NODE_ENV": "prod",
            "PORT": "3001",
            "currentEnv": "its in prod"
        }
    }],
    "deploy": {
        "prod": {
            "user": "anubhuti-sh",
            "host": "127.0.0.1",
            "ref": "origin/production",
            "repo": "https://github.com/anubhuti-sh/pm2_test.git",
            "path": "/home/anu/Projects/monkeyLabs/pm2_test",
            "post-deploy": "npm install && pm2 start ecosystem.json --env prod",
            "env": {
                "NODE_ENV": "prod"
            }
        }
    }
}