import{readFile as e}from"fs/promises";import{dirname as o,resolve as t}from"path";import{fileURLToPath as r}from"url";var m=new Set([{Path:"/workflows/",Name:"NPM.yml",File:async()=>new Set([(await e(t(`${o(r(import.meta.url))}/../../Source/templates/.github/workflows/NPM.yml`),"utf-8")).toString()])}]);export{m as default};
