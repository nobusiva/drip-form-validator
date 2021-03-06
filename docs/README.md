# drip-form-validator Documentation

drip-form-validator has the following features.

* Simple and Powerful and Customizable.
* Support Asynchronous validation.
* Support validation of intuitive array.
* Support normalize values.
* Support i18n. (welcome PRs!)
* Written by TypeScript.


## Installation

To install the stable version.

```bash
$ npm install --save drip-form-validator

# or

$ yarn add drip-form-validator
```


## Basic usage

Usage is very simple !

```javascript
import { Validator } from 'drip-form-validator';

const data = {
  firstName: null,
  lastName: 'wada',
  age: 18,
  email: 'email-address',
  website: 'foobarbaz',
  confirmed: null,
  token: '123456789',
  projects: [
    { title: 'Project 1', tags: [1] },
    { title: 'Project 2', tags: [4, 8] },
    { title: 'Project 3', tags: ['foo', 'bar', 3] },
  ],
};

const v = new Validator(data, {
  firstName: {
    required: true,
  },
  lastName: {
    required: true,
  },
  age: {
    required: true,
    min: 22,
  },
  email: {
    required: true,
    email: true,
  },
  website: {
    url: true,
  },
  confirmed: {
    required: true,
    truthy: true,
  },
  token: {
    checkToken: (value) => value === YOUR_SECRET_TOKEN,
  },
  'projects.*.tags.*': {
    numeric: true,
  },
});

if (v.validate()) {
  // `data` is valid.

} else {
  console.log(v.getAllErrors());
  // {
  //   firstName: [{
  //     rule: 'required',
  //     params: true,
  //     message: 'The firstName field is required.'
  //   }],
  //   age: [{
  //     rule: 'min',
  //     params: 22,
  //     message: 'The age must be at least 22.'
  //   }],
  //   email: [{
  //     rule: 'email',
  //     params: true,
  //     message: 'The email must be a valid email address.'
  //   }],
  //   website: [{
  //     rule: 'url',
  //     params: true,
  //     message: 'The website format is invalid.'
  //   }],
  //   confirmed: [{
  //     rule: 'required',
  //     params: true,
  //     message: 'The confirmed field is required.'
  //   }],
  //   token: [{
  //     rule: 'checkToken',
  //     params: [Function: checkToken],
  //     message: 'The token field is invalid.'
  //   }],
  //   'projects.2.tags.0': [{
  //     rule: 'numeric',
  //     params: true,
  //     message: 'The projects.2.tags.0 must be a number.'
  //   }],
  //   'projects.2.tags.1': [{
  //     rule: 'numeric',
  //     params: true,
  //     message: 'The projects.2.tags.1 must be a number.'
  //   }]
  // }
}
```


## Documentation

* [Usage](usage/README.md)
* [Builtin Rules](rules/README.md)
* [Builtin Normalizers](normalizers/README.md)
* [API Document](https://tsuyoshiwada.github.io/drip-form-validator/api/)
* [CHANGELOG](https://github.com/tsuyoshiwada/drip-form-validator/blob/master/CHANGELOG.md)



## Contribute

1. Fork it!
1. Create your feature branch: git checkout -b my-new-feature
1. Commit your changes: git commit -am 'Add some feature'
1. Push to the branch: git push origin my-new-feature
1. Submit a pull request :D

Bugs, feature requests and comments are more than welcome in the [issues](https://github.com/tsuyoshiwada/drip-form-validator/issues).



## License

MIT © tsuyoshiwada

