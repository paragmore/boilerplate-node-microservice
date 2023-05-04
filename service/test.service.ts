import { inject, injectable } from "inversify";
import { TestRepo } from "../repo/test.repo";

@injectable()
export class TestService {
  constructor(@inject(TestRepo) private testRepo: TestRepo) {}
}
