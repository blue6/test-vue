pipeline {
    agent any

    tools {
        nodejs 'node-v16.13.0'
    }

    stages {
        stage('Setup') {
            steps {
                echo 'Hello World'
                sh 'node --version'
                sh 'yarn --version'
                sh 'yarn install'
            }
        }
        stage('Unit Test') {
            steps {
                sh 'yarn test:unit'
            }
        }
        stage('E2E Test') {
            steps {
                sh 'yarn test:e2e --headless'
            }
        }
    }
}