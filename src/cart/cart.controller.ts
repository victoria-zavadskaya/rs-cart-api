import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    Post,
} from '@nestjs/common';
import { CartService } from './services';
  
@Controller('api/profile/cart')
export class CartController {
    constructor(private cartService: CartService) {}

    @Get(':userId')
    async findUserCart(@Param('userId') userId: string) {
        const cart = await this.cartService.findUserCart(userId);

        if (!cart) {
            return {
                statusCode: HttpStatus.NOT_FOUND,
                message: 'NOT FOUND. TRY NEW',
            };
        }

        return {
            statusCode: HttpStatus.OK,
            message: 'OK',
            data: { cart },
        };
    }
}