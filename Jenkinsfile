pipeline {
    agent none
    stages {
        stage('test-vue') {
            agent {
                dockerfile {
                  args '-p 8081:8080'
                }
            }
            steps {
                sh 'yarn test:unit'
                sh 'yarn serve'
            }
        }
        stage('selenium') {
            agent {
                docker { image 'selenium' }
            }
            steps {
                
            }
        }
    }
}