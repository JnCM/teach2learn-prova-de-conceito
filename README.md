# Teach2Learn - Prova de conceito
Repositório contendo o esboço da prova de conceito do projeto integrador 2022/2, com o objetivo de integrar as tecnologias que serão utilizadas.

## Executando o backend
Para executar o backend, é necessário possuir o `Java` instalado. Além disso, é preciso adicionar os arquivos `application-<profile>.properties`, em que no lugar de `<profile>` serão os ambientes `dev`, `test` e `prod`, mas apenas o arquivo para desenvolvimento é realmente necessário. Cada um desses arquivos deve possuir o seguinte padrão:

```properties
spring.datasource.url=jdbc:mysql://<host>:<porta>/teach2learndb
spring.datasource.username=<usuario>
spring.datasource.password=<senha>
```

Em que os termos com `<>` devem ser substituídos por suas credenciais. Já no arquivo `application.properties`, a variável que recebe a versão do MySQL utilizado pode ser alterada de acordo com a versão que você estiver utilizando ou pode ser colocada a versão padrão, de acordo com este [link](https://www.javatpoint.com/dialects-in-hibernate). No arquivo do repositório a versão está em 5.7.

```properties
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL57Dialect
```

Para executar o backend, basta entrar na pasta `backend/api` pelo terminal e digitar:

```bash
mvnw spring-boot:run -P <profile>
```

A tag `-P <profile>` pode ser omitida caso queira executar em `dev`, ou basta substituir `<profile>` pelo ambiente desejado.

Já para gerar o pacote `.jar` do projeto, arquivo este que é executado para que o projeto funcione de maneira autônoma, basta digitar:

```bash
mvnw clean package -P <profile>
```

Após isso, será gerado um arquivo `api-0.0.1-Teach2Learn.jar` na pasta `target` do projeto. Para executá-lo basta digitar:

```bash
java -jar target/api-0.0.1-Teach2Learn.jar
```

E com isso você terá a API sendo executada como se o seu computador fosse o servidor.

## Executando o frontend
Já no frontend, na execução dos arquitetos foi utilizado o `yarn`, logo os exemplos serão com este gerenciador. Antes de mais nada é necessário criar na pasta raiz do projeto backend o arquivo `.env`, contendo as seguintes variáveis:

```env
REACT_APP_DEV_API_URL=<API_Endpoint>
REACT_APP_TEST_API_URL=<API_Endpoint>
REACT_APP_PROD_API_URL=<API_Endpoint>
```

Substitua `<API_Endpoint>` pelo endpoint da API que é executada pelo backend. Após isso, para executar o projeto basta digitar o comando de acordo com a plataforma requerida. Por exemplo, para simular o projeto no android:

```bash
yarn android
```

Neste caso é necessário o simulador do android no seu computador, ou conectar um smartphone android com o aplicativo `Expo go` instalado, via USB em modo debug.