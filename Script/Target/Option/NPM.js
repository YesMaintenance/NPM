import{readFile as e}from"fs/promises";import{dirname as t,resolve as r}from"path";import{fileURLToPath as o}from"url";var m=new Set([{Path:"/workflows/",Name:"NPM.yml",File:async()=>new Set([(await e(r(`${t(o(import.meta.url))}/../../Target/Workflow/NPM.yml`),"utf-8")).toString()])}]);export{m as default};
