import {
    Controller, Get, Req,
    Param, Query, Body,
    Post, HttpCode, HttpStatus,
    Res, Header, Redirect, Headers
} from "@nestjs/common"
import { of } from 'rxjs'
import { Request, response, Response } from 'express'
import { parseArgs } from "util"


interface VideoParams {
    id: number,
    name: string
}



@Controller('/users')
export class UsersController {


    @Get('/profile')
    @HttpCode(HttpStatus.NO_CONTENT)
    @Header('X-Name', 'Umair')
    @Redirect('/users/redirect', 301) // 302 default
    getProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) { //passthrough: true , nestjs hable resonse sending
        console.log(req.params)
        const rn = Math.random() * 10 + 1
        res.status(201)
        //  res.json({ Hello: "Umair" })
        // return of({ Hello: "Umair" })
        if (rn > 5) {
            return {
                url: "/users/redirect",
                statusCode: 302
            }
        } else {
            return {
                url: "/users/account",
                statusCode: 302
            }
        }


    }

    @Get('/redirect')
    redirectRoute() {
        return 'redirect route call'
    }

    @Get('/account')
    accountRoute() {
        return 'redirect acount call'
    }

    @Get('1videos/:id')
    getVideos1(@Param('id') id: string): string {

        return `1-This action return  #${id} video`
    }

    // params
    @Get('videos/:id/:name')
    getVideos(@Param() params: VideoParams): string { //Record<string, any>
        console.log(params.id, params.name)
        return `This action return a #${JSON.stringify(params)} video`
    }

    //query string
    @Get('qvideos')
    getVideosQ(@Query() query: VideoParams): string { //Record<string, any>
        console.log(query.id, query.name)
        return `This action return a #${JSON.stringify(query)} video`
    }

    //read headers
    @Get('hvideos')
    getVideosH(@Headers() headers: Record<string, any>): string { //Record<string, any>
        console.log(headers)
        return `This action return a #${JSON.stringify(headers)} video`
    }

    @Post('/videos')
    @HttpCode(200)
    postProfile(@Body() body: Record<string, any>) {
        console.log(body)
        return `${JSON.stringify(body)}`
    }

    //HostParam , IP  route (host: 'app.domian.com')
}

