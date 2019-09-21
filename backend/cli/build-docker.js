const program = require('commander');
const shell = require('shelljs');

const DOCKER_REPOSITORY = process.env.app__ecr_path;
const REGION = process.env.app__aws_region;
const AWS_PROFILE = process.env.app__aws_profile;

program
  .command('build-docker')
  .description('Build docker and push to ECS Repository')
  .action(() => {
    const TAG = 'latest';

    console.log('\nBuild docker image...\n');
    let result = shell.exec(
      `docker build -t ${DOCKER_REPOSITORY}:${TAG} -f Dockerfile .`,
      { silent: false },
    );

    if (result.code === 0) {
      console.log('\tDone');
    } else {
      console.group('Error!');
      console.log(result.stderr);
      console.groupEnd();
      process.exit(result.code);
    }

    console.log('\nAuthenticating ECR...\n');
    result = shell.exec(
      `$(aws --profile ${AWS_PROFILE} ecr get-login --no-include-email --region ${REGION})`,
      { silent: false },
    );

    if (result.code === 0) {
      console.log('\tDone');
    } else {
      console.group('Error!');
      console.log(result.stderr);
      console.groupEnd();
      process.exit(result.code);
    }

    console.log('\nPushing docker image...\n');
    result = shell.exec(`docker push ${DOCKER_REPOSITORY}:${TAG}`, {
      silent: false,
    });

    if (result.code === 0) {
      console.log('\tDone');
    } else {
      console.group('Error!');
      console.log(result.stderr);
      console.groupEnd();
      process.exit(result.code);
    }
  });
