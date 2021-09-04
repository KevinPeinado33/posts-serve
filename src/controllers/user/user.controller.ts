import { 
    Body, 
    Controller, 
    Delete,
    Param, 
    Post, 
    Put 
} from '@nestjs/common';

@Controller('user')
export class UserController {

    @Post()
    create( @Body() payload: any ) {
        return { message: 'accion de crear', payload }
    }

    @Put(':id')
    update( @Param('id') id: string, @Body() payload: any ) {
        return {
            message: 'acción para editar un usuario',
            id,
            payload
        }
    }

    @Delete(':id')
    delete( @Param('id') id: string ) {
        return { message: 'acción eliminar', id }
    }

}
