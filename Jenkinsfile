pipeline {
    agent any

    tools {
        nodejs 'node-v16.13.0'
    }

    stages {
        stage('Test') {
            steps {
                echo 'Hello World'
                sh 'node --version'
                sh 'yarn --version'
                sh 'yarn install'
                sh 'yarn test'
            }
        }
    }
}