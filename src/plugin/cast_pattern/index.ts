import { Context, Schema, Random, h } from "koishi";

export const name = "xianling-bot-cast-pattern";

import { } from "@koishijs/canvas";

export interface Config { }

export const Config: Schema<Config> = Schema.object({});

let randoms = new Random(() => Math.random());

export async function apply(ctx: Context) { 
    
}
