# 🍅 TOMATOO
> a pomodoro cli tool

node 14.17.2｜pnpm 6.22.2

## Install
```
npm install -g tomatoo
```
*Considering the problem of duplicate names, the name is tomatoo

## Usage

```
tomato start
or
tomatoo start
```

## Develop
```
.
├── CHANGELOG.md
├── README.md
├── dev.sh
├── dist
├── package.json
├── pnpm-lock.yaml
├── src
│   ├── commands
│   │   └── start.ts
│   ├── index.ts
│   └── utils
│       └── index.ts
└── tsconfig.json
```

```
./dev.sh
```
## Publish

```
npm login
npm publish
```
