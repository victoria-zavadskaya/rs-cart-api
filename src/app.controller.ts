import { Controller, Get, Request, UseGuards, HttpStatus } from '@nestjs/common';
import { BasicAuthGuard } from './auth';

@Controller()
export class AppController {
    @Get([ '', 'ping' ])
    healthCheck(): any {
        return {
            statusCode: HttpStatus.OK,
            message: 'OK',
        };
    }

    @UseGuards(BasicAuthGuard)
    @Get('api/profile')
    async getProfile(@Request() req) {
        return {
            statusCode: HttpStatus.OK,
            message: 'OK',
            data: {
                user: req.user,
            },
        };
    }
}
