import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { InvestorService } from './investor.service';
import { Investor } from './investor.interface';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('investor')
@UseInterceptors(LoggingInterceptor)
export class InvestorController {
    constructor(private readonly investorService: InvestorService) { }
    @Post('addinvestor')
    async addClient( @Body() obj: Investor ):Promise<Investor> {
            return  await this.investorService.insertInvestor(obj);
    }
}
