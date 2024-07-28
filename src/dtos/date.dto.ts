import { IsNotEmpty, IsEmail, IsString } from "class-validator";


export class AddBirthdayDto {
    @IsNotEmpty()
    @IsString()
    date: string;
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    name: string;

}

export class UpdateBirthdayDto {
    @IsNotEmpty()
    @IsString()
    date: string;
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    name: string;
}

export class ReportResponse {
    id: string;
    email: string;
    date: string;
    
}