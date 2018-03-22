[![Build Status](https://travis-ci.org/Wizyma/express-routes-manager.svg?branch=master)](https://travis-ci.org/Wizyma/express-routes-manager)
[![Greenkeeper badge](https://badges.greenkeeper.io/Wizyma/express-routes-manager.svg)](https://greenkeeper.io/)

## What is it ?
This will help to create express routes and keep it organized. <br />


### Motivation 
I love to to keep my code splitted, and this is a nice way to manage it and to not get lost <br />
while making all the routes and to keep it **clean** !

### How to use ?

you have an a class with some routes : <br />
```javascript
export class MainRoutes extends BaseController {
        constructor(){
            super()
        }
    
        static routes: Route[] = [
            {path: '/', action: 'index', verb: 'get'},
            {path: '/user', action: 'getUser', verb: 'get'},
            {path: '/delete', action: 'deleteUsers', verb: 'delete'},
            {path: '/update', action: 'updateUsers', verb: 'patch'},
            {path: '/comment', action: 'commentUser', verb: 'post'},
        ]
    
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
```

Somewhere else in your code where you manage your server config :
```javascript
	import { MainRoutes } from "../your/path"
        import { SomeOtherRoutes } from "../your/path"
        import { Router } from 'express'

        const router = Router()
        
        const mains = new MainRoutes() 
        const connectedRoutes = MainRoutes.connect(router, mains);
        
        const others = new SomeOtherRoutes() 
        const connecteOthersRoutes = SomeOtherRoutes.connect(router, others);
        
        export {
        	connecteOthersRoutes,
                connectedRoutes
        }
```

In another file to boot the server
```javascript        
        import * as express from 'express'
        import * as myRoutes from '../path/to/your/routes/'
        
        const app = express()
        
        app.use(myRoutes)
        
        app.listen(4000, () => {
        	console.log('> Server listening to port ' + 4000)
        })
```

### CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.