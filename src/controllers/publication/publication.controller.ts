import { 
    Body,
    Controller, 
    Delete, 
    Get, 
    HttpCode, 
    HttpStatus, 
    Param, 
    Post,
    Put
} from '@nestjs/common';

import { PublicationService } from '../../services/publication/publication.service';
import { Publication } from '../../entitys/publication.entity';

@Controller('publication')
export class PublicationController {

    constructor( private publicationService: PublicationService ) { }

    @Get()
    getAll(): Publication[] {
        return this.publicationService.findAll();
    }

    @Get(':publicationId')
    @HttpCode( HttpStatus.ACCEPTED )
    findById( @Param('publicationId') publicationId: string ): Publication {

        return this.publicationService.findOne( publicationId );

    }

    @Post()
    @HttpCode( HttpStatus.CREATED )
    create( @Body() publication: Publication ): Publication {

        return this.publicationService.create( publication );

    }

    @Put(':publicationId')
    @HttpCode( HttpStatus.OK )
    update( @Param('publicationId') publicationId: string, @Body() payload: Publication ): Publication {

        return this.publicationService.update( publicationId, payload );

    }

    @Delete(':publicationId')
    delete( @Param('publicationId') publicationId: string ) {

        this.publicationService.delete( publicationId );

    }

}
