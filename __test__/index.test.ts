import { BaseController } from '../src/index'
import { Router, Request, Response } from 'express'
import { expect } from 'chai'
import 'mocha'

describe('Route Creation', () => {
    interface Route {
        path: string,
        action: string,
        verb: string,
        middleware?: any,
    }
    
    const routes: Route[] = [
        {path: '/', action: 'index', verb: 'get'},
        {path: '/user', action: 'getUser', verb: 'get'},
        {path: '/delete', action: 'deleteUsers', verb: 'delete'},
        {path: '/update', action: 'updateUsers', verb: 'patch'},
        {path: '/comment', action: 'commentUser', verb: 'post'},
    ]
    
    class RouteTest extends BaseController {
        constructor(){
            super()
        }
    
        static routes = routes
    
        private index = (req: Request, res: Response) => {
            // do something
        }
    
        private getUser = (req: Request, res: Response) => {
            // do something
        }
    
        private deleteUsers = (req: Request, res: Response) => {
            // do something
        }
    
        private updateUsers = (req: Request, res: Response) => {
            // do something
        }
    
        private commentUser = (req: Request, res: Response) => {
            // do something
        }
    
    }

    it('routes should be an Array of Object', () => {
       expect(routes).to.have.length.above(1)
    });

    it('Object should match routes interface', () => {
        routes.forEach((route: Route) => {
            expect(route).to.have.all.keys('path', 'action', 'verb')
        })
    })
    
    it('Router class should inherit from BaseController', () => {
        expect(RouteTest).itself.to.respondTo('connect')
    })

    it('Should generate the route using the BaseController', () => {
        const router = Router()
        const routesTest = new RouteTest()
        const connectedRoutes = RouteTest.connect(router, routesTest);

        expect(connectedRoutes).to.have.lengthOf(routes.length)
    })
});

