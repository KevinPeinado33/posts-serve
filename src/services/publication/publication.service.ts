import { Injectable, NotFoundException } from '@nestjs/common';

import { Publication } from '../../entitys/publication.entity';

@Injectable()
export class PublicationService {

    private counter: number = 1;

    private publications: Publication[] = [{
        id: '1',
        title: 'Vendo teclado',
        description: 'Es un teclado que arme yo mismo.',
        price: 200,
        status: true,
        created: Date.now().toString(),
        userId: '1'
    }];

    findAll(): Publication[] { return this.publications; }

    findOne( id: string ): Publication { 

        const response = this.publications.find( ( item ) => item.id === id ); 

        if ( !response ) {
            throw new NotFoundException(`Publication with ID => ${ id }, not found.`);
        }

        return response;

    }

    create( payload: Publication ): Publication {

        this.counter++;

        const newPublication: Publication = {
            id: this.counter.toString(),
            ...payload
        }

        this.publications.push( newPublication );

        return newPublication;

    }

    update( id: string, payload: Publication ): Publication {
        
        this.findOne( id );

        this.publications = this.publications.map( 
                                        ( publication ) => 
                                            publication.id === id 
                                                ? publication = { ...publication, ...payload } 
                                                : publication 
                            );

        return payload;

    }

    delete( id: string ): boolean {  

        this.findOne( id );

        this.publications = this.publications.filter( ( publication ) => publication.id !== id );

        return true;

    }
}
