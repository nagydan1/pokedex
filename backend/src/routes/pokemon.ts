import Router from "koa-router";

const router = new Router();

router.get("/pokemon", async (ctx) => {
  try {
    ctx.body = {
      status: "success",
      data: "pokemon route"
    };
  } catch (e) {
    console.log(e);
  }
});

export default router;
