import{Command as t}from"commander";import e from"./Option/Command.js";const o=new t;o.name("Maintain").description("Maintains GitHub repositories"),e?.forEach(i=>{const n=o.command(i.Name).description(typeof i.Description<"u"?i.Description:"").action(i.Action);i.Arguments?.forEach(r=>{n.argument(r.Name,r.Description)})}),o.parse();
