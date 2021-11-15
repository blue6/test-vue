pipeline {
    agent none
    stages {
        stage('test-vue') {
            agent {
                dockerfile {
                  args '-dp 8081:8080'
                }
            }
            steps {
                sh 'node --version'
            }
        }
        stage('selenium') {
            agent {
                docker { image 'selenium' }
            }
            steps {
                sh 'node --version'
            }
        }
    }
}