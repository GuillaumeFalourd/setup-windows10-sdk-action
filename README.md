# setup-winsdk

[![ci][1]][2]

This action downloads and installs a specific version of the Windows 10 SDK.

## Inputs

### Optional

#### `winsdk-build-version`

The 5-digit version (build) of the SDK (`10.0.xxxxx.0`) to install. Examples:
`17763`, `18362`, `19041`. Default `18362`.

## Example usage

```yaml
steps:
- uses: actions/checkout@v2
- uses: fbactions/setup-winsdk@v1
  with:
    winsdk-build-version: 19041
```

## Credits

Big thanks to [Richard Murillo][3] who is the original author of the excellent
PowerShell Windows SDK install script in the `externals` directory. While the
script can be found in many repositories on GitHub, the earliest reference to
it was traced back to [PR 2200][4] in the [WindowsCommunityToolkit][5] project.

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

[1]: https://github.com/fbactions/setup-winsdk/workflows/ci/badge.svg
[2]: https://github.com/fbactions/setup-winsdk/actions
[3]: https://github.com/rjmurillo
[4]: https://github.com/windows-toolkit/WindowsCommunityToolkit/pull/2220
[5]: https://github.com/windows-toolkit/WindowsCommunityToolkit/
