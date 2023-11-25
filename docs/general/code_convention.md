# CODE CONVENTION

## 1. Naming Conventions:
- All variables, functions, and class names should be written in lowerCamelCase.
- Constants should be written in ALL_CAPS_WITH_UNDERSCORES.
- Private class members should be prefixed with an underscore (_).

## 2. Formatting:
- Indentation should be 2 spaces.

## 3. Components Props:
- The order of a component's props is ordered from state props to function props.
- Function props must be prefixed with the starting 'on'

## 4. Function Conventions:
- Name of the function must clearly describe its function.
- Function only accepts params it needs, can't pass params that function doesn't use.

## 5. Custom hooks
- Functions exposed from custom hooks must start with '_handle'
