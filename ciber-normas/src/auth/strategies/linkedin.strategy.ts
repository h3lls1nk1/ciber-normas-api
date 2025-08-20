import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"
import { Strategy, StrategyOptionWithRequest } from "passport-linkedin-oauth2"
import { AuthService } from "../auth.service";

@Injectable()
export class LinkedInStrategy extends PassportStrategy (Strategy, 'linkedin') {
    constructor (private readonly authService: AuthService) {
        const options: StrategyOptionWithRequest = {
            clientID: process.env.LINKEDIN_CLIENT_ID!,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
            callbackURL: 'http://localhost:3000/auth/linkedin/callback',
            scope: ['r_emailaddress', 'r_liteprofile'],
            passReqToCallback: true,
        }

        super(options);
    }

    async validate (req: any, accessToken: string, refreshToken: string, profile: any, done: Function) {
        const { id, emails, name, photos } = profile;

        const user = await this.authService.validateLinkedinUser({
            provider: 'linkedin',
            providerId: id,
            email: emails?.[0].value,
            firstName: name?.givenName,
            lastName: name?.familyName,
            picture: photos?.[0]?.value,
        });

        done(null, user);
    }
}