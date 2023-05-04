import { inject, injectable } from "inversify";
import { TestService } from "../service/test.service";
import {
  ApiHelper,
  ApiHelperHandler,
  IReply,
} from "../utils/ApiHelper";

@injectable()
export class TestController {
  constructor(@inject(TestService) private testService: TestService) {}
  testController: ApiHelperHandler<{}, {}, {}, {}, IReply> =
    async (request, reply) => {
      return ApiHelper.success(reply, {hello: 'world'})
    };
}
