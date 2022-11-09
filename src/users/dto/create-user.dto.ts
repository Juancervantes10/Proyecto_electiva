import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
export declare class CreateUserDto {
   
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({description:'The email of the user'})
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'The password of the user'})
    password: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'The name of the user'})
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'The lastname of the user'})
    readonly lastname?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'The identification of the user'})
    readonly identification?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'The picture of the user'})
    readonly picture?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'The phone of the user'})
    readonly phone?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'The gender of the user'})
    readonly gender?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'The birthday of the user'})
    readonly birthday?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'The country of the user'})
    readonly country?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'The state of the user'})
    readonly state?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'The city of the user'})
    readonly city?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:'The address of the user'})
    readonly address?: string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({description:'The active of the user'})
    readonly active?: boolean;
}