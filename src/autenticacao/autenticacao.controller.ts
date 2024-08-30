import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';

@Controller('autenticacao')
export class AutenticacaoController {
  constructor(private readonly autenticacaoService: AutenticacaoService) { }

  @Post('/login')
  //autenticar(@Body() login: LoginDto){
  autenticar(@Body() { login, senha }: LoginDto) {
    return this.autenticacaoService.login(login, senha)
  }

  // endpoint que precisa de autenticacao
  // AuthGuard - vai fazer a verificação do token
  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  profile(){
    return {
      statusCode: 'ok',
    }
  }
}
