pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building React app...'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test -- --watchAll=false --passWithNoTests'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to Netlify...'
                script {
                    // Using Netlify CLI to deploy
                    sh 'npm install -g netlify-cli'
                    sh '''
                        netlify deploy --prod \
                        --dir=build \
                        --site=${NETLIFY_SITE_ID} \
                        --auth=${NETLIFY_AUTH_TOKEN}
                    '''
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
