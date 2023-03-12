import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { ElephantsModule } from './elephants/elephants.module';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/animals'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [CatsModule, DogsModule, ElephantsModule, OwnersModule],
      autoSchemaFile: process.cwd() + 'src/schema.gql',
    }),
    DogsModule,
    CatsModule,
    ElephantsModule,
    OwnersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
