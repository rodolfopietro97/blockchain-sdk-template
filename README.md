# Intro

## Useful commands

### Init npm project
* npm init .

### Init workspace
* https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true
* npm init -w ./packages/example_workspace

### Typescript init
* npm install typescript --save-dev
* npx tsc --init

### Create a workspace
* npm init -w {workspace_path}
   * -e.g.- npm init -w ./packages/workspace_name

It will create a nodejs project and then add in the workspace to package.json of main npm project.

### Work in a workspace
* npm {command} -w {workspace_path}
   * -e.g.- npm install typescript --save-dev -w ./packages/core