pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:22.14.0'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    node -v
                    npm -v
                    npm install
                    npm run build
                '''
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:22.14.0'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    test -f build/index.html
                    npm test -- --watchAll=false
                '''
            }
        }

        stage('Deploy') {
            agent {
                docker {
                    image 'node:22.14.0'
                    reuseNode true
                }
            }
            environment {
                NETLIFY_AUTH_TOKEN = credentials('netlify-auth-token2')
                NETLIFY_SITE_ID = credentials('db351678-bbd9-4fc4-9f8d-366038379d92')
            }
            steps {
                sh '''
                    npm install netlify-cli
                    node_modules/.bin/netlify --version
                    node_modules/.bin/netlify deploy --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID --dir=build --prod --message="Jenkins build $BUILD_NUMBER"
                '''
            }
        }
    }
}
