import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  // Create NestJS application instance
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend communication
  app.enableCors();

  // Get port from environment or use default
  const port = process.env.PORT || 3000;

  // Start the server
  await app.listen(port);
  console.log(`Backend running on http://localhost:${port}`);
}

bootstrap();
