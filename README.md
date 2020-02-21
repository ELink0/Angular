#### Criar um projeto
Para criar um novo projeto Angular, digite o seguinte comando no terminal:
```javascript
ng new NomeProjeto
```

------------

#### Rodar projeto
Para executar o projeto, é necessário acessar a pasta do projeto e depois executar.
```
 cd NomeProjeto
 ng serve -o 
```

------------


#### Criação de novas páginas
Deve ser criado um arquivo para conter o HTML, um para CSS e outro para os componentes.
```
nome.component.html
nome.component.css
nome.component.ts
```

##### Corpo do component.ts
```javascript
import { Component } from "@angular/core";
@Component({
	  selector: "ifpr-component",
	  templateUrl: "./ifpr.component.html",
	  styleUrl: [".ifpr.component.css"]
})

export class IfprComponent{

}
```
Em **FROM** dizer de qual biblioteca importar
Em **@COMPONENT** informar os componentes

------------

##### Corpo do component.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Título da Página</title>
  </head>
  <body>
    Corpo da página
  </body>
</html>
```

------------

#### Fazer a importação do módulo novo
No arquivo app.module.ts, inserir:
```javascript
import { IfprComponent } from './nomedapasta/nome.component'

  declarations: [
		NomeComponent
  ],
```

------------


#### Arquivo app-routing.module.ts
É utilizado para definir as rotas da aplicação e qual componente irá responder cada rota.

```javascript
import { IfprComponent } from "./nomedapasta/nome.component";

const routes: Routes = [
	{path:"nome", component: NomeComponent}
]
```
Neste exemplo foi definida a rota **"nome"** que referencia a pasta e o arquivo **./nomedapasta/nome.component**

Após isso, é necessário referenciar no código HTML

```html
  <a class="nav-link text-white" routerLink="/nome">TEXTO</a>
```
