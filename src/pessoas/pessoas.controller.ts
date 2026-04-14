import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { Pessoa } from './entities/pessoa.entity';

@Controller('pessoas')
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService) {}

  @Get()
  findAll(): Promise<Pessoa[]> {
    return this.pessoasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoasService.findOne(+id);
  }

  @Post()
  create(@Body() pessoa: Pessoa): Promise<Pessoa> {
    return this.pessoasService.create(pessoa);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dados: Partial<Pessoa>): Promise<Pessoa> {
    return this.pessoasService.update(id, dados);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.pessoasService.remove(id);
  }
}
