import { Injectable } from '@nestjs/common';
import { PersistenciaService } from 'src/persistencia/persistencia.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';

@Injectable()
export class TarefasService {
  constructor(private persistencia: PersistenciaService) { }

  async create(createTarefaDto: CreateTarefaDto) {
    //await da erro se não é async
    const tarefa = await this.persistencia.tarefa.
    create({
      data: createTarefaDto,
    });

    return {
      estado: 'ok',
      data: tarefa,
    };
  }

  findAll() {
    return `This action returns all tarefas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tarefa`;
  }

  update(id: number, updateTarefaDto: UpdateTarefaDto) {
    return `This action updates a #${id} tarefa`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarefa`;
  }
}
