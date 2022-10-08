import {HttpException} from '@nestjs/common/exceptions/http.exception';
import {NestMiddleware, HttpStatus, Injectable} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import {UserService} from './user.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly userService: UserService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        const authHeaders = req.headers.authorization;

        if (authHeaders && (authHeaders as string).split(' ')[1]) {
            const token = (authHeaders as string).split(' ')[1];
            const decoded: any = await jwt.verify(token, process.env.JWT_TOKEN);
            const user = await this.userService.getById(decoded.id);

            if (!user) {
                throw new HttpException('User not found.', HttpStatus.UNAUTHORIZED);
            }

            next();
        } else {
            throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
        }
    }
}