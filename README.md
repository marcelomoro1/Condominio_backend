<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)


CREATE DATABASE DBCONDOMINIO;
USE DBCONDOMINIO;

CREATE TABLE PESSOAS(
	id_pessoa int primary key auto_increment,
    nome VARCHAR(255) not null,
    tipo_pessoa ENUM('fisica','juridica'),
    cpf_cnpj VARCHAR(255) unique,
    data_cadastro date
);

CREATE TABLE CONTATOS(
	id_contato int primary key auto_increment,
    tipo_contato VARCHAR(255) not null,
    valor_contato VARCHAR(255) not null,
    id_pessoa int,
    FOREIGN KEY (id_pessoa) REFERENCES PESSOAS(id_pessoa)
);

CREATE TABLE ENDERECOS (
	id_enderecos int primary key auto_increment,
    id_pessoa int,
    logradouro varchar(255) not null,
    numero int not null,
    bairro varchar(255) not null,
	cidade varchar(255) not null,
	uf char(2) not null,
    cep char(8) not null,
	FOREIGN KEY (id_pessoa) REFERENCES PESSOAS(id_pessoa)
);

CREATE TABLE UNIDADES(
	id_unidade int primary key auto_increment,
    num_unidade int not null,
    bloco int not null,
    tipo varchar(255) not null,
    area_total float
);


CREATE TABLE MORADORES (
	id_morador int primary key auto_increment,
    id_pessoa int,
    id_unidade int,
 	FOREIGN KEY (id_pessoa) REFERENCES PESSOAS(id_pessoa),
	FOREIGN KEY (id_unidade) REFERENCES UNIDADES(id_unidade)
);

CREATE TABLE FUNCIONARIOS (
	id_funcionarios int primary key auto_increment,
    id_pessoa int,    
    funcao varchar(255) not null,
    data_admissao DATE,
    salario DECIMAL(10,2),
    FOREIGN KEY (id_pessoa) REFERENCES PESSOAS(id_pessoa)
);

CREATE TABLE FORNECEDORES(
	id_fornecedores int primary key auto_increment,	
    id_pessoa int,
    area_atuacao varchar(255),
	FOREIGN KEY (id_pessoa) REFERENCES PESSOAS(id_pessoa)
);

CREATE TABLE VISITANTES(
	id_visitantes int primary key auto_increment,	
	id_pessoa int,
	documento varchar(255),
	FOREIGN KEY (id_pessoa) REFERENCES PESSOAS(id_pessoa)
);

CREATE TABLE AREAS_COMUNS(
	id_areas_comum int primary key auto_increment,	
    nome_area varchar(255),
    descr_area varchar(255),
    capacidade int
);

CREATE TABLE RESERVAS (
	id_reserva int primary key auto_increment,	
    data_reserva date,
    hr_inicio date,
    hr_fim date,
    id_morador int,
    id_areas_comum int,
	FOREIGN KEY (id_areas_comum) REFERENCES AREAS_COMUNS(id_areas_comum),
	FOREIGN KEY (id_morador) REFERENCES MORADORES(id_morador)
);

CREATE TABLE BOLETOS (
	id_boleto int primary key auto_increment,
	id_morador INT REFERENCES MORADORES(id_morador),
	vl_boleto DECIMAL(10,2) NOT NULL,
	dt_vencimento	DATE NOT NULL,
	status ENUM('Pago','Atrasado','Pendente')
);

CREATE TABLE COMUNICADOS (
	 id_comunicado int primary key auto_increment,
	 titulo VARCHAR(255) NOT NULL,
	 mensagem TEXT NOT NULL,
	 dt_comunicado DATE NOT NULL,
	 hr_comunicado TIME,
	 tipo VARCHAR(30)
);

CREATE TABLE CONTRATOS (
	 id_contrato int primary key auto_increment,
	 id_fornecedor INT REFERENCES FORNECEDORES(ID_FORNECEDOR),
	 descricao TEXT,
	 data_inicio DATE,
	 data_fim DATE,
	 valor DECIMAL(10,2)
);

CREATE TABLE CONTRATOS_RH (
	 id_contrato_rh int primary key auto_increment,
	 id_funcionario INT REFERENCES FUNCIONARIOS(id_funcionario),
	 descricao TEXT,
	 data_inicio DATE,
	 data_fim DATE,
	 salario_acordado DECIMAL(10,2)
);

CREATE TABLE VISITAS (
	 id_visita int primary key auto_increment,
	 id_visitante INT REFERENCES VISITANTES(id_visitante),
	 id_unidade INT REFERENCES UNIDADES(id_unidade),
	 id_morador_autorizacao INT REFERENCES MORADORES(id_morador),
	 placa_veiculo VARCHAR(10),
	 data_entrada TIMESTAMP,
	 data_saida TIMESTAMP
);

CREATE TABLE CONTAS_PAGAR (
	 id_conta_pagar int primary key auto_increment,
	 id_fornecedor INT REFERENCES FORNECEDORES(id_fornecedor),
	 descricao TEXT,
	 valor DECIMAL(10,2),
	 data_vencimento DATE,
	 status VARCHAR(20)
);

CREATE TABLE contas_receber (
	 id_conta_receber int primary key auto_increment,
	 id_morador INT REFERENCES MORADORES(id_morador),
	 descricao TEXT,
	 valor DECIMAL(10,2),
	 data_vencimento DATE,
	 status VARCHAR(20)
);

CREATE TABLE pagamentos (
	 id_pagamento int primary key auto_increment,
	 id_conta_pagar INT REFERENCES CONTAS_PAGAR(id_conta_pagar),
	 data_pagamento DATE,
	 valor_pago DECIMAL(10,2),
	 forma_pagamento VARCHAR(30)
);
CREATE TABLE RECEBIMENTOS (
	 id_recebimento int primary key auto_increment,
	 id_conta_receber INT REFERENCES CONTAS_RECEBER(id_conta_receber),
	 data_recebimento DATE,
	 valor_recebido DECIMAL(10,2),
	 forma_recebimento VARCHAR(30)
);
CREATE TABLE CONTA_CORRENTE (
	 id_conta_corrente int primary key auto_increment,
	 banco VARCHAR(50),
	 agencia VARCHAR(20),
	 num_conta VARCHAR(20),
	 saldo_atual DECIMAL(12,2)
);
CREATE TABLE MOV_CONTA_CORRENTE (
	 id_movimento int primary key auto_increment,
	 id_conta_corrente INT REFERENCES CONTA_CORRENTE(id_conta_corrente),
	 id_conta INT, 
	 origem_conta VARCHAR(20), 
	 tipo_movimento VARCHAR(20), 
	 valor DECIMAL(10,2),
	 data_movimento DATE,
	 hr_movimento TIME,
	 descricao TEXT
);

CREATE TABLE usuarios (
    ID_PESSOA INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(255) NOT NULL,
    CPF_CNPJ VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Inserindo o usuário para você conseguir logar (Senha: teste)
INSERT INTO usuarios (NOME, CPF_CNPJ, password) 
VALUES ('admin2', '123', '$2a$12$K2xyrzGa.vUC6JLw0VIV2.Z9k/.0Qb4qzMXzY7tuJ80/n/GJE6v3e');



## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
