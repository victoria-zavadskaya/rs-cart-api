import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { CartModule } from './cart/cart.module';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [CartModule, DatabaseModule],
    controllers: [AppController],
})
export class AppModule {}
