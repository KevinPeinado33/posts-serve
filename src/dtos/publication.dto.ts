import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreatePublicationDto {
    
    @IsString()
    @IsNotEmpty()
    readonly title:       string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price:       number;

    @IsBoolean()
    @IsNotEmpty()
    readonly status:      boolean;

    @IsString()
    @IsNotEmpty()
    readonly created:     string = new Date().toString();

    @IsString()
    @IsNotEmpty()
    readonly userId:      string;

}

export class UpdatePublicationDto extends PartialType(CreatePublicationDto) {}