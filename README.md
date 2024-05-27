# Stone-kit

Uikit for stone redesign 2.0

## Installation

Package installation:

```bash
npm i stone-kit@latest
```

## Usage

For Next.js page router in App.tsx:

```bash
import 'stone-kit/dist/style.css'
```

and then:

```bash
import {Button} from 'stone-kit'
```

For other projects u can immediately:

```bash
import {Button} from 'stone-kit'
```

## Docs

### ButtonProps

size: optional, size of button. types : 'large' | 'medium' | 'small' | 'tiny'

pre: optional, insert icon/text before button text. type: ReactNode

post: optional, insert icon/text after button text. type: ReactNode

variant: optional, color variants of button. type:
'blue',
'gray',
'whiteStroke',
'sokolniki',
'black',
'whiteFilled'

width: optional, width of button. type: 'auto' | 'full'

additionalClass: optional, add your custom class to button. type: 'string'

as: optional, u can convert button to link. type: 'button' | 'link'. 'button' by default.

### MobileButtonProps

### Tag
