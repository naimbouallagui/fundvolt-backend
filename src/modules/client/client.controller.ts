import { Controller, Post, Body, Get } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.interface';

@Controller()
export class ClientController {
    constructor(private readonly clientService: ClientService) { }
    // @Post()
    // async addClient( @Body() obj: Client ):Promise<Client> {
    //     // if(obj.role='client')
    //         return  await this.clientService.insertClient(obj);
    //     // return  await this.investorService.investorClient(obj);
    // }
}
