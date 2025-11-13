"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Global validation
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true, // strip unknown props
        transform: true,
        forbidNonWhitelisted: true,
    }));
    const config = app.get(config_1.ConfigService);
    const port = config.get('PORT') || 3000;
    const frontend = config.get('FRONTEND_ORIGIN') || '*';
    // Enable CORS for your React frontend origin
    app.enableCors({
        origin: frontend,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
    });
    await app.listen(port);
    console.log(`Server listening on port ${port}`);
}
bootstrap();
