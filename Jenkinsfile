node {
    deleteDir()

    try {
        stage('Initialize') {
            def node = tool name: 'Node-7.4.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
            env.PATH = "${node}/bin:${env.PATH}"
        }

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
