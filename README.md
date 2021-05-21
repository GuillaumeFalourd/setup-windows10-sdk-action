# Windows 10 SDK Action

[![.github/workflows/main.yml](https://github.com/GuillaumeFalourd/windows10-sdk-action/actions/workflows/main.yml/badge.svg)](https://github.com/GuillaumeFalourd/windows10-sdk-action/actions/workflows/main.yml)

[![Security Pipeline](https://github.com/GuillaumeFalourd/windows10-sdk-action/actions/workflows/security_pipeline.yml/badge.svg)](https://github.com/GuillaumeFalourd/windows10-sdk-action/actions/workflows/security_pipeline.yml)

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
- uses: GuillaumeFalourd/windows10-sdk-action@v1
```

#### Specific SDK version (19041)

```yaml
steps:
- uses: actions/checkout@v2
- uses: GuillaumeFalourd/windows10-sdk-action@v1
  with:
    sdk-version: 19041
```

## Credits

[Ritchard Murillo](https://github.com/rjmurillo) PowerShell Windows SDK install script.
[fbactions unpublished action](https://github.com/fbactions/setup-winsdk)

## Licensed

This repository uses the [Apache License 2.0](https://github.com/GuillaumeFalourd/aws-cliaction/blob/main/LICENSE)