import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    // TypeORM database configuration using environment variables
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.MYSQL_HOST || "localhost",
      port: parseInt(process.env.MYSQL_PORT) || 3306,
      username: process.env.MYSQL_USERNAME || "hello_user",
      password: process.env.MYSQL_PASSWORD || "hello_password",
      database: process.env.MYSQL_DATABASE || "hello_db",
      autoLoadEntities: true,
      synchronize: true, // Auto-create tables from entities
    }),
    UsersModule,
  ],
})
export class AppModule {}
