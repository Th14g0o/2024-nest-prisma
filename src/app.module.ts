import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersistenciaModule } from './persistencia/persistencia.module';
import { TarefasModule } from './tarefas/tarefas.module';

@Module({
  imports: [PersistenciaModule, TarefasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
