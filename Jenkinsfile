pipeline {
    agent any
    stages {
        stage('Setup') {
            steps {
                sh 'docker-compose -f docker-compose.test.yml down --rmi all'
               
                sh 'docker-compose -f docker-compose.test.yml up --build -d web'
            }
        }
        stage('E2E Test') {
            steps {
                sh 'docker-compose -f docker-compose.test.yml up --build selenium'
            }
        }
    }
}