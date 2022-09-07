import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {

    signup(body: AuthDto) {
        console.log(body)
        return body
    }
}
