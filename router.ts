import { FastifyInstance } from "fastify"
import testRoutes from "./routes/test.routes"
export default async(app: FastifyInstance)=>{
    app.register(testRoutes, {prefix:'/test'})
}