pipeline{
    agent {
        docker { image 'node:latest' }
    }
    stages{
        stage('install'){
            steps{
                sh 'npm install'
            }
        }
        stage('test'){
            steps{
                sh 'npm test'
            }
        }
    }
}