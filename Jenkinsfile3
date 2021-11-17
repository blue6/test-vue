pipeline {
    agent any
    stages {
        stage('Setup') {
            steps {
                sh 'docker rm -f test-vue selenium'
                sh 'docker rmi test-vue'
               
                sh 'docker build --tag test-vue .'
                sh 'docker run --rm --name test-vue -dp 8081:8080 test-vue'
                sh 'sleep 0'
            }
        }
        stage('E2E Test') {
            steps {
                sh 'docker run --rm --name selenium --net=host selenium'
            }
        }
    }
}