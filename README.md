# Setup Windows 10 SDK Action

[![.github/workflows/default-sdk-version-workflow.yml](https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/actions/workflows/default-sdk-version-workflow.yml/badge.svg)](https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/actions/workflows/default-sdk-version-workflow.yml)

[![.github/workflows/specific-sdk-version-workflow.yml](https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/actions/workflows/specific-sdk-version-workflow.yml/badge.svg)](https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/actions/workflows/specific-sdk-version-workflow.yml)

[![Security Pipeline](https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/actions/workflows/security_pipeline.yml/badge.svg)](https://github.com/GuillaumeFalourd/setup-windows10-sdk-action/actions/workflows/security_pipeline.yml)

![title](https://user-images.githubusercontent.com/22433243/119227643-4d2cf080-bae5-11eb-890b-4e73d7c48d39.png)

Github action to download and install a specific version of the Windows 10 SDK.

## How to use this action?

### Action input

Field | Mandatory | Observation
------------ | ------------  | -------------
**sdk-version** | YES | The **5-digit** version (build) of the SDK (`10.0.xxxxx.0`) to install <br/> _Examples:`17763`, `18362`, `19041`. Default `18362`._

### Example

#### Default SDK version (18362)

```yaml
steps:
- uses: actions/checkout@v2
- uses: GuillaumeFalourd/setup-windows10-sdk-action@v1
```

#### Specific SDK version (19041)

```yaml
steps:
- uses: actions/checkout@v2
- uses: GuillaumeFalourd/setup-windows10-sdk-action@v1
  with:
    sdk-version: 19041
```

You would then need to use `CMake` command to use the specific SDK on your workflow. Here are some references:

- [StackOverflow Question](https://stackoverflow.com/questions/67643381/how-to-update-windows-sdk-on-windows-latest-on-github-action?noredirect=1#comment119697001_67643381)
- [CMAKE_SYSTEM_VERSION](https://cmake.org/cmake/help/latest/variable/CMAKE_SYSTEM_VERSION.html#variable:CMAKE_SYSTEM_VERSION)
- [CMAKE_VS_WINDOWS_TARGET_PLATFORM_VERSION](https://cmake.org/cmake/help/latest/variable/CMAKE_VS_WINDOWS_TARGET_PLATFORM_VERSION.html#variable:CMAKE_VS_WINDOWS_TARGET_PLATFORM_VERSION)

``` yaml
- name: Build new SDK
  shell: bash
  run: |
     cmake .. -DCMAKE_SYSTEM_VERSION=10.0.{sdk-version}.0
     cmake --build .
```
## Credits

- [Ritchard Murillo](https://github.com/rjmurillo) PowerShell Windows SDK install script.
- [fbactions](https://github.com/fbactions/setup-winsdk) unpublished action (discovered trying to help with this [stackoverflow question](https://stackoverflow.com/questions/67643381/how-to-update-windows-sdk-on-windows-latest-on-github-action)) that wasn't available on the [Github Marketplace](https://github.com/marketplace?type=actions&query=setup+windows).

## Licensed

This repository uses the [Apache License 2.0](https://github.com/GuillaumeFalourd/aws-cliaction/blob/main/LICENSE)
