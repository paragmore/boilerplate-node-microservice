import "reflect-metadata";
import { Container } from 'inversify';
import { TestController } from './controllers/test.controller';
import { TestRepo } from './repo/test.repo';
import { TestService } from './service/test.service';

const container = new Container();

container.bind<TestService>(TestService).toSelf();
container.bind<TestRepo>(TestRepo).toSelf();
container.bind<TestController>(TestController).toSelf()

export default container;