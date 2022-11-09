import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule} from '@nestjs/passport';
import { LocalStrategy} from './strategies/local.strategy';
import {JwtStrategy} from './strategies/jwt.strategy';
import {JwtModule} from '@nestjs/jwt';
import {ConfigType}from '@nestjs/config';
import config from '../config';


@Module({
  imports:[
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      inject:[config.KEY],
      useFactory:(configService: ConfigType<typeof config>) =>{
        return{ 
          secret: configService.jwtSecret,
          signOptions:{
            expiresIn:'10d',

          }
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy, JwtStrategy],
})
export class AuthModule {}
