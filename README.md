# 🍅 TOMATOO

<p align="left">
<a href="https://github.com/wseven7677/tomatoo"><img src="https://img.shields.io/github/package-json/v/wseven7677/tomatoo?style=flat-square" alt="git repo"></a>
  <a href="https://npmjs.com/package/tomatoo"><img src="https://img.shields.io/npm/v/tomatoo?style=flat-square" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/tomatoo?style=flat-square" alt="node compatibility"></a>
  <a href="https://npmjs.com/package/tomatoo"><img src="https://img.shields.io/npm/dw/tomatoo?style=flat-square" alt="download"></a>
</p>
<br/>

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
