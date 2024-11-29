import { Context, Schema, Random, h } from "koishi";

export const name = "xianling-bot-help";

import { } from "@koishijs/canvas";

export interface Config { }

export const Config: Schema<Config> = Schema.object({});

let randoms = new Random(() => Math.random());

export async function apply(ctx: Context) {

    ctx.command('仙灵')
        .subcommand('仙灵帮助')
        .action(() => {
            return h.image('https://i0.hdslb.com/bfs/article/14e2a6bfc91c3da21b794ec99e8cc28f486188624.png')
        })

    ctx.command('仙灵')
        .subcommand('新人帮助')
        .action(() => {
            return `修仙帮助\n道侣帮助\n职业帮助\n道场帮助\n修炼帮助`
        })
    ctx.command('仙灵')
        .subcommand('修仙帮助')
        .action(() => {
            return h.image('https://i0.hdslb.com/bfs/article/6375e6b2694e53f5b5d9bc0793c8d791486188624.png')
        })
    ctx.command('仙灵')
        .subcommand('修炼帮助')
        .action(() => {
            return h.image('https://i0.hdslb.com/bfs/article/118fc24143a84ba816ab44a9c30bc1f8486188624.png')
        })
    ctx.command('仙灵')
        .subcommand('道侣帮助')
        .action(() => {
            return h.image('https://i0.hdslb.com/bfs/article/f9f85c3d97b4e71aed961969706cf89a486188624.png')
        })
    ctx.command('仙灵')
        .subcommand('道场帮助')
        .action(() => {
            return h.image('https://i0.hdslb.com/bfs/article/afc61913856c61ce61b6c5862b6ae8b8486188624.png')
        })
    ctx.command('仙灵')
        .subcommand('职业帮助')
        .action(() => {
            return h.image('https://i0.hdslb.com/bfs/article/c12f7d80c238699a3d703790131574ef486188624.png')
        })

    ctx.command('仙灵')
        .subcommand('铸纹帮助')
        .action(() => {
            return `
铸纹面板
/铸纹师专属职业信息面板
晋级
/提升铸纹等级，刻不容缓
铸纹 金 数量 木 数量 水 数量 火 数量 土 数量
/铸纹消耗大量灵蕴
铸纹师排名
/查看自己的铸纹排名`
        })
}
