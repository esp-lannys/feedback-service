import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

const mongooseModule = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    uri: configService.get<string>('DATABASE_URL'),
    useNewUrlParser: true,
    useCreateIndex: true,
  }),
  inject: [ConfigService],
});

@Module({
  imports: [mongooseModule],
})
export class DatabaseModule {}
