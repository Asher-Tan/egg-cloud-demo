'use strict';

const Controller = require('egg-cloud').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    // console.log(ctx.proxy.ProtoService);
    ctx.body = await ctx.proxy.protoService.echoObj({
      name: ctx.query.name || 'ashertan',
      group: ctx.query.group || 'A',
    });
  }
}

module.exports = HomeController;
