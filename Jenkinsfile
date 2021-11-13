pipeline {
    agent any

    tools {
        nodejs 'node-v16.13.0'
    }

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
                sh 'node --version'
                sh 'yarn --version'
            }
        }
    }
}