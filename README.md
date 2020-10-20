# Domain validator
Dependency free domain name syntax validator.

## Installation

Install the library with `npm --save domain-validator`

## Usage

```javascript
import isDomainValid from 'is-domain-valid';
const res = isDomainValid('example.com');
if (res.result) {
  console.log('Domain is valid');
} else {
  console.error(`Domain is not valid because of: ${res.message}`);
}
```

## Options

Options can be passed as a second argument in `isDomainValid` function:

```javascript
const defaultOptions = {
  checkTld: true
};
const res = isDomainValid('example.com', defaultOptions);
```

## Build and contribution

Push requests are very welcome. Run tests with `npm run tests` and then build the library with `npm run build`.

## Author

Adam Blok: https://github.com/adamblok

## License

MIT
