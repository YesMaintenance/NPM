import{readFile as e}from"fs/promises";import{dirname as r,resolve as o}from"path";import{fileURLToPath as t}from"url";var m=new Set([{Path:"/workflows/",Name:"Cloudflare.yml",File:async()=>new Set([(await e(o(`${r(t(import.meta.url))}/../../Target/Workflow/Cloudflare.yml`),"utf-8")).toString()])}]);export{m as default};
