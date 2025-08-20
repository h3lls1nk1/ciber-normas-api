import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor (private usersService: UsersService, private jwtService: JwtService) {}

    async signIn (username: string, pass: string): Promise<{ access_token: string }> {
        const user = await this.usersService.findByUsername(username);

        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.id, username: user.username };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async validateGoogleUser (profile: any) {
        let user = await this.usersService.findByEmail(profile.email);

        if (!user) {
            user = await this.usersService.create({
                email: profile.email,
                firstName: profile.firstName,
                lastName: profile.lastName,
                picture: profile.picture,
                username: profile.email.split('@')[0],
            });
        }

        const payload = { sub: user.id, email: user.email };

        return {
            access_token: this.jwtService.sign(payload),
            user
        }
    }
}
