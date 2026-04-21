# HCA — Git na prática (conectando seu computador ao projeto)

## Objetivos

- conectar o computador local (Windows / Git Bash) ao repositório do projeto;
- compreender a lógica de trabalho local ↔ GitHub;
- realizar os primeiros *commits* e *pushes*;
- entender o que deve (e não deve) ser versionado;
- iniciar a organização de um experimento dentro do repositório.

## 1) O que muda agora?

Até agora, você utilizou o GitHub principalmente como interface web, especialmente para registrar o andamento do projeto por meio das *Discussions*, que funcionam como seu caderno de laboratório digital.

A partir desta aula, você passa a usar o GitHub de forma integrada ao seu computador. Isso significa que o trabalho deixa de acontecer apenas no navegador e passa a acontecer localmente, com sincronização contínua entre o seu ambiente de análise e o repositório do projeto.

A implicação prática é que agora você terá duas “camadas” do projeto:

- uma versão local (no seu computador ou computador do lab)
- uma versão remota (no GitHub)

O Git é a ferramenta que mantém essas duas versões sincronizadas de forma rastreável.

## 2) O fluxo conceitual: local ↔ GitHub

O fluxo básico de trabalho pode ser entendido como um ciclo:

- você modifica arquivos localmente;
- registra essas mudanças com um *commit*;
- envia essas mudanças para o GitHub (*push*).

Esse ciclo é repetido continuamente ao longo do projeto.

!!! info "Conexão com o curso"
    Enquanto as *Discussions* registram o raciocínio científico e as decisões, os *commits* registram a evolução dos arquivos do projeto. Essas duas camadas se complementam.

A implicação é que o seu projeto passa a ter duas histórias paralelas e integradas:

- a história científica (*Discussions*)
- a história técnica (*commits*)

## 3) Preparando o ambiente (Windows + Git Bash)

No laboratório, você utilizará principalmente:

- Git Bash  
- Terminal do Windows (em alguns casos)

O Git Bash já vem com as ferramentas necessárias para executar comandos Git e navegar pelas pastas do projeto.

Antes de começar, é importante garantir que o Git está funcionando. Para isso, abra o Git Bash e execute:

```bash
git --version
```

Se um número de versão aparecer, o Git está corretamente instalado.

## 4) 🔐 Clonando o repositório (SSH — recomendado)

### 4.1) Copiando o link para o seu repositório
O repositório do seu projeto foi criado pelo laboratório e compartilhado com você. Ao aceitar o convite, você passa a ter permissão para trabalhar nele.

O primeiro passo é baixar esse repositório para o seu computador, processo chamado de clone. Clique para acessar os [repositórios do laboratório](https://github.com/labnanocell?tab=repositories). Você deve estar logada na sua conta do GitHub, pois o repositório é privado. Encontre o repositório do seu projeto e entre nele.

Nos computadores do laboratório, o uso de HTTPS pode gerar erros de certificado (SSL).  
Por isso, recomendamos usar **SSH**, que é mais estável nesse ambiente.

Clique no botão verde **“Code”**, em Clone você deve escolher **SSH** e clicar no ícone para copiar.

Isso será usado no comando `git clone` mais adiante.

### 4.2) Gerar uma chave SSH (apenas uma vez por computador)

No Git Bash:

```bash
ssh-keygen -t ed25519 -C "seu_email"
```

Aperte Enter para aceitar as opções padrão.

### 4.3) Ativar a chave

No Git Bash:
```bash
eval "$(ssh-agent -s)"
```

O terminal deve retornar algo como `Agent pid 745`. Depois execute:

```bash
ssh-add ~/.ssh/id_ed25519
```

Ele vai retornar a sua chave, ela começa com algo como:  'ssh-rsa', 'ecdsa-sha2-nistp256', 'ecdsa-sha2-nistp384', 'ecdsa-sha2-nistp521', 'ssh-ed25519', 'sk-ecdsa-sha2- nistp256@openssh.com', or 'sk-ssh-ed25519@openssh.com'

### 4.4) Copiar a chave pública

No Git Bash:
```bash
cat ~/.ssh/id_ed25519.pub
```

Copie todo o conteúdo exibido.

### 4.5) Adicionar no GitHub

No GitHub:

- Vá em Settings
- Clique em SSH and GPG keys
- Clique em New SSH key
- Cole a chave e salve

### 4.6) Testar conexão

No Git Bash:

```bash
ssh -T git@github.com
```

Se aparecer:

Hi \<seu-usuario>! You've successfully authenticated...

👉 Está funcionando corretamente.

### 4.2) Preparando o ambiente (Windows)

No laboratório, utilize preferencialmente o **Git Bash**.

Nos computadores do laboratório, é obrigatório usar o disco `D:` para arquivos do projeto. O disco `C:` é reservado para o sistema operacional.

No Git Bash, navegue assim:

```bash
cd /d
```

Procure pela pasta com o seu nome 

```bash
cd seu_nome
```

Ou crie sua pasta:

```bash
mkdir seu_nome
cd seu_nome
```

Em seguida, **digite** o comando abaixo e **cole** o link que você copiou do seu repositório no passo anterior. Ele deve ter um formato como esse `git@github.com:labnanocell/NOME-DO-REPO.git`:

```
git clone
```

O comando no final vai ficar assim: `git clone git@github.com:labnanocell/NOME-DO-REPO.git`

Isso cria uma cópia local completa do projeto.

A implicação é que você passa a ter controle total sobre os arquivos localmente, com todo o histórico do projeto. E a partir de agora as modificações realizadas localmente serão sincronizadas com o repositório.

!!! info "Importante"
    - Esse processo precisa ser feito uma vez por computador
	-	Cada máquina do laboratório precisa ter sua própria chave SSH configurada

## 5) Navegando até o projeto

Depois de clonar, entre na pasta do repositório:

```bash
cd nome-do-repositorio
```

Você pode verificar o estado atual com:

```bash
git status
```

Se tudo estiver correto, o Git indicará que não há alterações pendentes com uma mensagem como essa:

```text
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

Esse comando será usado constantemente ao longo do projeto para entender o que mu

## 6) Primeiro ciclo de trabalho: *commit* e *push*

Agora vamos simular o fluxo básico.

Edite um arquivo simples, como o `README_project_pt.md`, atualize alguma informação, título do projeto, nomes, instituição, etc.

Depois execute:

```bash
git status
```

Esse comando mostra quais arquivos foram modificados.

Em seguida:

```bash
git add .
```

Aqui você está dizendo ao Git quais mudanças deseja registrar.

Depois:

```bash
git commit -m "update: Atualiza README com descrição inicial do projeto"
```

O commit registra um ponto na história do projeto.

Sugestão de prefixos para commits:

- `add`: novo conteúdo
- `fix`: correção
- `update`: atualização
- `refactor`: reorganização (não muda nada aparente)

Por fim:

```bash
git push
```

Isso envia suas alterações para o GitHub. Se você fez uma alteração no README.md, abra ele no navegador para ver a mudança! Deu certo? Parabéns pelo primeiro commit 🎉!!!

!!! tip “Regra prática”
*Commit* registra. *Push* compartilha.

## 7) Trabalhando em mais de um computador

Se você usar computador pessoal e do laboratório, é importante evitar conflitos.

Sempre que começar:

```bash
git pull
```

Isso faz com que o repositório do GitHub atualize a pasta local **antes** de  iniciar seu trabalho. Isso é muito importante para evitar conflitos. 

Sempre que terminar:

```bash
git push
```

Isso faz com que a pasta local sincronize com o GitHub. Isso garante sincronização entre ambientes.

## 8) Criando um novo experimento no repositório

Ok, você começou o seu projeto de pós e quer adicionar um experimento novo ao seu repositório local de dados para realizar as análises! Tenho certeza que você não vê a hora. 

**Padrão recomendado:**
```
YYYY_MM_DD_CellLine_Treatment_Condition
ex.: 2025_06_Huh7_NPPS_24h
```

Você pode criar as pastas na mão, mas sugiro fortemente que pelo menos uma vez use a linha de comando pra isso. Quanto mais você for usando essa ferramenta menos medo e mais utilidade você verá, aumentando as chance de incoporá-la ao seu dia a dia.

**Criar as pastas do experimento** 
Para isso, abra o terminal, vá até a pasta do seu repositório, no exemplo acima você iria até `nanoplastics-polystyrene-70nm-huh7/`. Defina a variável de ambiente com o nome do experimento que você quer criar:

Se estiver usando do Git Bash:
```bash
EXP=2025_06_Huh7_NPPS_24h
```



Se estiver usando um terminal do Windows (terminal, anaconda terminal):
```bash
set EXP=2025_06_Huh7_NPPS_24h
```

Na sequência use os comandos abaixo, pode copiar e colar todos de uma vez no terminal.

Se estiver usando do Git Bash:
```bash
# Imagens brutas e (opcional) correção de iluminação
mkdir -p images/$EXP/images
mkdir -p images/$EXP/illum

# Metadados e LoadData
mkdir -p workspace/metadata/$EXP/platemap
mkdir -p workspace/load_data_csv/$EXP

# Pipelines (.cppipe) específicos desse experimento
mkdir -p workspace/pipelines/$EXP

# Assay development (QC) e análise completa
mkdir -p workspace/assaydev/$EXP/outlines_qc
mkdir -p workspace/analysis/$EXP/analysis

# Saídas pesadas (não subir no GitHub) e perfis
mkdir -p workspace/backend/$EXP
mkdir -p workspace/profiles/$EXP

# Deep learning (opcional)
mkdir -p workspace_dl/$EXP/notebooks
```


Se estiver usando um terminal do Windows (terminal, anaconda terminal):
```bash
REM Imagens brutas e (opcional) correção de iluminação
mkdir "images\%EXP%\images"
mkdir "images\%EXP%\illum"

REM Metadados e LoadData
mkdir "workspace\metadata\%EXP%\platemap"
mkdir "workspace\load_data_csv\%EXP%"

REM Pipelines (.cppipe) específicos desse experimento
mkdir "workspace\pipelines\%EXP%"

REM Assay development (QC) e análise completa
mkdir "workspace\assaydev\%EXP%\outlines_qc"
mkdir "workspace\analysis\%EXP%\analysis"

REM Saídas pesadas (não subir no GitHub) e perfis
mkdir "workspace\backend\%EXP%"
mkdir "workspace\profiles\%EXP%"

REM Deep learning (opcional)
mkdir "workspace_dl\%EXP%\notebooks"
```

É sempre importante checar se as pastas foram criadas corretamente (nome e os locais), você pode usar o comando `tree` para isso, ele vai te mostrar a organização geral do seu repositório.

Depois de checada a organização das pastas, copie seus arquivos para os lugares certos:

- Imagens brutas → `images/$EXP/images/`
- (Se houver) correção de iluminação → `images/$EXP/illum/`
- Platemap/Barcode/Layouts → `workspace/metadata/$EXP/`
- LoadData.csv → `workspace/load_data_csv/$EXP/`
- Pipelines `.cppipe` (assaydev/analysis/illum) → `workspace/pipelines/$EXP/`

Agora você pode mover as imagens para a pasta do experimento e começar a análise!
### Desafio

Você pode usar o código abaixo e gerar um `bat` script para criar um programa na linha de comando e não ter que digitar todos esses comandos. Boa sorte!

```bash
@echo off
setlocal enabledelayedexpansion

:: ============================================
:: Setup de diretórios para experimentos HCA/LCP
:: Uso:
::   setup_experiment.bat EXPERIMENTO
:: Se não passar argumento, ele pergunta.
:: ============================================

:: Se o usuário passar o experimento como argumento (%1)
if "%~1"=="" (
    set /p EXP="Digite o nome do experimento (ex: 2025_06_28_Huh7_NPPS_24h): "
) else (
    set EXP=%~1
)

echo.
echo ===============================
echo Criando diretórios para: %EXP%
echo ===============================
echo.

:: Imagens brutas e correção de iluminação
mkdir "images\%EXP%\images"
mkdir "images\%EXP%\illum"

:: Metadados e LoadData
mkdir "workspace\metadata\%EXP%\platemap"
mkdir "workspace\load_data_csv\%EXP%"

:: Pipelines .cppipe específicos do experimento
mkdir "workspace\pipelines\%EXP%"

:: Assay dev (QC) e análise completa
mkdir "workspace\assaydev\%EXP%\outlines_qc"
mkdir "workspace\analysis\%EXP%\analysis"

:: Saídas pesadas (não subir para GitHub)
mkdir "workspace\backend\%EXP%"
mkdir "workspace\profiles\%EXP%"

:: Deep learning
mkdir "workspace_dl\%EXP%\notebooks"

echo.
echo ============================================
echo Pastas criadas com sucesso para: %EXP%
echo ============================================
echo.

:: Mostrar estrutura criada
echo Estrutura final:
echo images\%EXP%\images
echo images\%EXP%\illum
echo workspace\metadata\%EXP%\platemap
echo workspace\load_data_csv\%EXP%
echo workspace\pipelines\%EXP%
echo workspace\assaydev\%EXP%\outlines_qc
echo workspace\analysis\%EXP%\analysis
echo workspace\backend\%EXP%
echo workspace\profiles\%EXP%
echo workspace_dl\%EXP%\notebooks

echo.
pause
```

## 9) Integração com o caderno de laboratório (Discussions)

Ao iniciar um novo experimento, você deve também criar uma Discussion correspondente no GitHub.

Essa Discussion deve conter:

-	a pergunta biológica
-	o desenho experimental
-	decisões tomadas
-	observações ao longo da execução

Enquanto isso, o repositório conterá:

- arquivos
- metadados
- *pipelines*
- *outputs*

!!! info “Ideia central”
O experimento existe em dois lugares:
- no GitHub (arquivos)
- nas Discussions (raciocínio)

Essa separação é fundamental para manter clareza e rastreabilidade.

## 10) Frequência de uso no dia a dia

O uso do Git não deve ser esporádico. Ele deve fazer parte da rotina de trabalho.

Sempre que você:

- organizar arquivos
- modificar um notebook
- justar um pipeline
- adicionar metadados

você deve considerar fazer um *commit*.

A implicação é que o histórico do projeto se constrói continuamente, e não apenas em momentos finais.

## 11) Fechamento

Nesta aula, você deu o primeiro passo para transformar o GitHub em uma ferramenta ativa de trabalho, e não apenas um repositório passivo.

A partir de agora, seu projeto passa a ter:

- rastreabilidade técnica (*commits*)
- rastreabilidade científica (*Discussions*)

Essa integração é central para a organização, reprodutibilidade e evolução do projeto ao longo da pós-graduação.

## Exercícios
1.	Clone o repositório do seu projeto no seu computador.
2.	Crie ou edite um arquivo simples (por exemplo, README.md).
3.	Execute o ciclo completo:

- `git status`
- `git add .`
- `git commit`
- `git push`

4.	Verifique no GitHub se a alteração apareceu.
5.	Crie uma Discussion descrevendo:

- o que você fez
- qual foi a dúvida principal
- o que você aprendeu nesse processo

6.	Crie a estrutura de pastas para um experimento fictício usando o padrão:

`YYYY_MM_DD_CellLine_Treatment_Condition`

## Para aprofundar
- https://gitimmersion.com/
- https://docs.github.com/en/get-started
- https://ohshitgit.com/

