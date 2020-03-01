import { Controller, Post, Body, Get } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.interface';

@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService) { }
    @Post('/addclient')
    async addClient( @Body() obj: Client ):Promise<Client> {
        return  await this.clientService.insertClient(obj);
    }
}
