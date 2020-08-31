module.exports = {
    apps : [{
        name: "test-app",
        script: "./index.js",
        watch: true,
        ignore_watch: 'node_modules',
        env_stage: {
            NODE_ENV: "stage",
        },
        env_production: {
            NODE_ENV: "prod",
        }
    }],
    deploy: {
        stage: {
            user: 'anubhuti-sh',
            host: '127.0.0.1:3000',
            ref: 'origin/master',
            repo: 'https://github.com/anubhuti-sh/pm2_test.git',
            path: '/home/anu/Projects/monkeyLabs/pm2_test',
            env: {
                NODE_ENV: 'stage'
            }
        },
        production: {
            user: 'anubhuti-sh',
            host: '127.0.0.1:3001',
            ref: 'origin/production',
            repo: 'https://github.com/anubhuti-sh/pm2_test.git',
            path: '/home/anu/Projects/monkeyLabs/pm2_test',
            env: {
                NODE_ENV: 'prod'
            }
        }
    }
}