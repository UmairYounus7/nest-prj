import { Controller, Get, Req, Inject } from "@nestjs/common"
import { of } from 'rxjs'
import { Request } from 'express'
import * as MOCKED_RESPONSE from '../data/products.json'; // or use const inside the controller function

@Controller('/albums')
export class AlbumbsController {

    constructor(@Inject('DATABASE_CONNECTION') private connection: any) {
        console.log('connection ..',connection)
    }
    @Get('')
    getProfile(@Req() req: Request) {
        console.log(req.params)
        return of(MOCKED_RESPONSE)
    }
}