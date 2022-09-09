import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, SignUpDto } from './dto';
import * as argon from 'argon2'

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    async signup(body: SignUpDto) {
        try {

            const hash = await argon.hash(body.password)

            const user = await this.prisma.user.create({
                data: {
                    email: body.email,
                    hash,
                    username: body.username.toLocaleLowerCase(),
                    firstName: body.firstName,
                    lastName: body.lastName,
                },
            });

            return {
                email: user.email,
                username: user.username
            }
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    if (error.meta.target[0] === 'username') throw new ForbiddenException('Username already in use');
                    if (error.meta.target[0] === 'email') throw new ForbiddenException('Email already in use');
                };
            };
        };
    }

    async login(body: LoginDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [
                    {
                        email: body.user
                    },
                    {
                        username: body.user
                    }
                ]
            }
        })

        if (!user) throw new ForbiddenException('User not found');

        const passMatches = await argon.verify(user.hash, body.password)

        if (!passMatches) throw new ForbiddenException('Check your password and try again');


        return {
            email: user.email,
            username: user.username
        }
    }
}
