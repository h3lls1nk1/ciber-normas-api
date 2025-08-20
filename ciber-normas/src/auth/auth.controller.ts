import { Controller, Body, Post, HttpCode, HttpStatus, Get, Request, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard as LocalAuthGuard } from './auth.guard';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport'

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService) {}

    @HttpCode (HttpStatus.OK)
    @Post('login')
    signIn (@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @UseGuards(LocalAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @Get('google')
    @UseGuards(PassportAuthGuard('google'))
    async googleAuth(@Req() req) {
        
    }

    @Get('google/callback')
    @UseGuards(PassportAuthGuard('google'))
    async googleAuthRedirect(@Req() req) {
        return {
            message: 'Usuario autenticado con Google',
            user: req.user,
        }
    }

    @Get('linkedin')
    @UseGuards(PassportAuthGuard('linkedin'))
    async linkedinAuth(@Req() req) {

    }

    @Get('linkedin/callback') 
    @UseGuards(PassportAuthGuard('linkedin'))
    async linkedinAuthRedirect(@Req() req) {
        return {
            message: 'Usuario autenticado con LinkedIn',
            user: req.user,
        };
    }
}
