import { Module } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasController } from './tarefas.controller';
import { PersistenciaModule } from 'src/persistencia/persistencia.module';

@Module({
  imports: [PersistenciaModule],
  controllers: [TarefasController],
  providers: [TarefasService],
})
export class TarefasModule {}
