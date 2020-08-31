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
            ref: 'origin/master',
            env: {
                NODE_ENV: 'stage'
            }
        },
        production: {
            user: 'anubhuti-sh',
            ref: 'origin/production',
            env: {
                NODE_ENV: 'prod'
            }
        }
    }
}