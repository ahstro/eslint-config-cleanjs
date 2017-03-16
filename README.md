# eslint-config-cleanjs-warn

This is a fork of [eslint-config-cleanjs](https://github.com/bodil/eslint-config-cleanjs),
but with the error level set to warning instead.

## Usage

Just install this package somewhere your eslint can find it (`npm
install -g eslint-config-cleanjs-warn` if your eslint is installed with
`-g` too), along with the three above mentioned plugins (`npm install -g
eslint-plugin-better eslint-plugin-fp eslint-plugin-import`), and put
this in your `.eslintrc` or wherever you keep your project's eslint
config:

```
{
  "extends": "cleanjs-warn"
}
```
