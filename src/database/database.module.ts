import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategy';
import { Carts, CartItems } from './entities';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: `${process.env.DB_HOST}`,
            port: +`${process.env.DB_PORT}`,
            username: `${process.env.DB_USERNAME}`,
            password: `${process.env.DB_PASSWORD}`,
            database: `${process.env.DB_NAME}`,
            entities: [Carts, CartItems],
            logging: true,
            namingStrategy: new SnakeNamingStrategy(),
            ssl: {
                rejectUnauthorized: false
            }
        }),
        TypeOrmModule.forFeature([Carts, CartItems]),
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}
