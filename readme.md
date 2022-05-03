# Installation
```bash
npm install --save kelrn-toolkit
```

## What it offers:
* Supports iOS and Android
* Easy component styling
* Wide range of component options

## Quick Start
```js
import { Input } from 'kelrn/toolkit';

const App = () => (
    <Input
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={value => console.log(value)}
    />
);
```

## License & Copyright
© Killian S. Falle
Licensed under the [MIT License](LICENSE).