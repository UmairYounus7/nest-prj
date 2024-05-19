import { Controller, Get, Req } from "@nestjs/common"
import { of } from 'rxjs'
import { Request } from 'express'


@Controller('/albums')
export class AlbumbsController {

    @Get('')
    getProfile(@Req() req: Request) {
        console.log(req.params)
        return of("Photo")
    }
}