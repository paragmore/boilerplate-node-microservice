import "reflect-metadata";
import { FastifyInstance } from "fastify";
import { TestController } from "../controllers/test.controller";
import container from "../inversify.config";
import { ApiHelper } from "../utils/ApiHelper";

export default async (app: FastifyInstance) => {
  const testController = container.resolve<TestController>(TestController)

  ApiHelper.get<{}, {}, {}>(
    app,
    "/",
    testController.testController.bind(testController)
  );
};
