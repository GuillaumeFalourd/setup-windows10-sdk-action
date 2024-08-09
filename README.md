# Setup Windows 10 SDK Action

[![.github/workflows/default-sdk-version-workflow.yml](https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/actions/workflows/default-sdk-version-workflow.yml/badge.svg)](https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/actions/workflows/default-sdk-version-workflow.yml)

[![.github/workflows/specific-sdk-version-workflow.yml](https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/actions/workflows/specific-sdk-version-workflow.yml/badge.svg)](https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/actions/workflows/specific-sdk-version-workflow.yml) (26100 returns an error)

[![Security Pipeline](https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/actions/workflows/security_pipeline.yml/badge.svg)](https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/actions/workflows/security_pipeline.yml)

![title](https://user-images.githubusercontent.com/22433243/119227643-4d2cf080-bae5-11eb-890b-4e73d7c48d39.png)

Github action to download and install a specific version of the Windows 10 SDK.

_Supported versions: `16299`, `17763`, `18362`, `19041`, `20348`, `22000`, `22621`, `26100` (bug opened)._

## How to use this action?

[![Public workflows that use this action.](https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DGuillaumeFalourd%2Fsetup-windows10-sdk-action%26badge%3Dtrue)](https://github.com/search?o=desc&q=GuillaumeFalourd+setup-windows10-sdk-action+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code)

### Action input

Field | Mandatory | Observation
------------ | ------------  | -------------
**sdk-version** | YES | The **5-digit** version (build) of the SDK (`10.0.xxxxx.0`) to install <br/> _Examples: `16299`, `17763`, `18362`, `19041`, `20348`, `22000`, `22621`, `26100` (Default is `18362`)._

_Obs: Want to add another sdk-version? [Contribute here!](https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/blob/main/externals/install-winsdk.ps1)_

### Example

#### Default SDK version (18362)

```yaml
steps:
- uses: actions/checkout@v4
- uses: GuillaumeFalourd/setup-windows10-sdk-action@v2
```

#### Specific SDK version (20348)

```yaml
steps:
- uses: actions/checkout@v4
- uses: GuillaumeFalourd/setup-windows10-sdk-action@v2
  with:
    sdk-version: 20348
```

You would then need to use `CMake` command to use the specific SDK on your workflow.

``` yaml
- name: Build new SDK
  shell: bash
  run: |
    cmake -DCMAKE_SYSTEM_VERSION=10.0.20348.0
    cmake --build .
```

Here are some references for CMake:

- [CMake Tutorial](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)
- [CMAKE_SYSTEM_VERSION](https://cmake.org/cmake/help/latest/variable/CMAKE_SYSTEM_VERSION.html#variable:CMAKE_SYSTEM_VERSION)
- [CMAKE_VS_WINDOWS_TARGET_PLATFORM_VERSION](https://cmake.org/cmake/help/latest/variable/CMAKE_VS_WINDOWS_TARGET_PLATFORM_VERSION.html#variable:CMAKE_VS_WINDOWS_TARGET_PLATFORM_VERSION)

## Credits

- [Ritchard Murillo](https://github.com/rjmurillo) PowerShell Windows SDK install script.
- [fbactions](https://github.com/fbactions/setup-winsdk) unpublished action (discovered trying to help with this [stackoverflow question](https://stackoverflow.com/questions/67643381/how-to-update-windows-sdk-on-windows-latest-on-github-action)) that wasn't available on the [Github Marketplace](https://github.com/marketplace?type=actions&query=setup+windows).

## Licensed

This repository uses the [Apache License 2.0](https://github.com/GuillaumeFalourd/aws-cliaction/blob/main/LICENSE)

## 🤝 Contribution

Would like to contribute to the repository? Here are the [guidelines](CONTRIBUTING.md) 🚀

<a href="https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=GuillaumeFalourd/setup-windows10-sdk-action" />
</a>

(Made with [contributors-img](https://contrib.rocks))
