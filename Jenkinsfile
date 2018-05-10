node {
    deleteDir()

    try {
        stage('Clone') {
            checkout scm
        }
        stage('Build') {
            sh "npm install"
        }
        stage('Tests') {
            sh "npm run test"
        }
        stage('Deploy') {
            sh "git push heroku master"
        }
    } catch (err) {
        currentBuild.result = 'FAILED'
        throw err
    }
}
