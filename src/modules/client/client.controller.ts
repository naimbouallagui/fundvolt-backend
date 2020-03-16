import { Controller, Post, Body, Get, UseInterceptors } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.interface';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
@UseInterceptors(LoggingInterceptor)
@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService) { }
    @Post('addclient')
    async addClient( @Body() obj: Client ):Promise<Client> {
        // if(obj.role='client')
            return  await this.clientService.insertClient(obj);
        // return  await this.investorService.investorClient(obj);
    }
}
