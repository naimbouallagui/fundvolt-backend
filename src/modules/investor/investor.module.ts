import { Module } from '@nestjs/common';
import { InvestorService } from './investor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../user/user.schema';
import { investorSchema } from './investor.schema';
import { InvestorController } from './investor.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Investor', schema: investorSchema }]),
            MongooseModule.forFeature([{ name: 'User', schema: userSchema }])],
  controllers: [InvestorController],
  providers: [InvestorService]
})
export class InvestorModule {}
