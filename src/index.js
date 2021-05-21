const core = require('@actions/core');
const exec = require('@actions/exec');
const io = require('@actions/io');
const path = require('path');

async function run() {
  if (process.platform !== 'win32') {
    core.info("This platform is not a Windows virtual environment!");
    return;
  }

  try {
    const version = core.getInput('sdk-version');
    core.info("Installing Windows 10 SDK version 10.0.${version}.0");

    let escapedScript = path
      .join(__dirname, '..', 'externals', 'install-winsdk.ps1')
      .replace(/'/g, "''");
    let command = `& '${escapedScript}' ${version}`;

    let output = '';
    let resultCode = 0;
    const powershellPath = await io.which('powershell', true);
    await exec.exec(
      `"${powershellPath}"`,
      [
        '-NoLogo',
        '-Sta',
        '-NoProfile',
        '-NonInteractive',
        '-ExecutionPolicy',
        'Unrestricted',
        '-Command',
        command,
      ],
      {
        listeners: {
          stdout: (data) => {
            output += data.toString();
          },
        },
      },
    );
    if (resultCode !== 0) {
      core.setFailed(`Action failed with result code ${resultCode}. ${output}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run().catch((e) => core.setFailed('Could not run action: ' + e.message));
