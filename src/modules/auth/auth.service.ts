import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async validateUser(userMail: string, userPassword: string) {
        const user = await this.userService.findByEmail(userMail);

        if(user && (await bcrypt.compare(userPassword, user.user_password))) {
            const { id, name, email} = user;
            
            return { id, name, email};
        }

        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id };

        return {
            user,
            access_token: this.jwtService.sign(payload),
        }
    }
}
