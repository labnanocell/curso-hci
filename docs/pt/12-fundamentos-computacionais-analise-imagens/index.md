# Fundamentos computacionais para análise de imagens

### Propósito

Este módulo apresenta os fundamentos computacionais necessários para acompanhar, compreender e validar fluxos de análise de imagens em High-Content Imaging e High-Content Analysis (HCI/HCA).

A proposta não é formar programadores, mas desenvolver autonomia para trabalhar com ambientes computacionais, notebooks, código Python e dados tabulares. Ao longo do módulo, a pessoa aprenderá a reconhecer padrões básicos de código, executar análises de forma reproduzível, interpretar mensagens de erro, realizar verificações de qualidade e avaliar se os resultados produzidos por um pipeline são coerentes.

As atividades utilizam exemplos inspirados em pipelines reais de análise de imagens, conectando cada conceito computacional às etapas que o aluno encontrará durante o processamento e a interpretação de dados de HCI/HCA.

## **Perfil de saída**

Ao final deste módulo, a pessoa será capaz de:

- compreender por que ambientes computacionais isolados são importantes para a reprodutibilidade;
- reconhecer a função de arquivos como `pixi.toml`, `pixi.lock` e notebooks Jupyter;
- executar notebooks dentro de um ambiente computacional configurado;
- identificar elementos básicos de código Python, incluindo variáveis, tipos, listas, dicionários, condições, repetições e funções;
- ler pequenos trechos de código e explicar, de forma geral, o que eles fazem;
- interpretar mensagens de erro e localizar informações úteis em um *traceback*;
- compreender a função de verificações como `assert`, `raise` e *sanity checks*;
- carregar e explorar dados tabulares usando `DataFrame`;
- distinguir colunas de metadados de colunas contendo características quantitativas;
- identificar valores ausentes, infinitos, duplicações e outros problemas básicos nos dados;
- interpretar arquivos de métricas e reconhecer resultados computacional ou biologicamente suspeitos;
- aplicar os três reflexos fundamentais da análise assistida por código: **ler, validar e iterar**.

### Tópicos

- [Ambiente computacional e reprodutibilidade](ambiente-computacional/index.md)
- [Python para leitura de pipelines](python-leitura-pipelines/index.md)
- [Validação, erros e sanity checks](validacao-sanity-checks/index.md)
- [Dados tabulares e DataFrames](dados-tabulares/index.md)
- [Investigando resultados e artefatos](investigando-resultados/index.md)

### Organização do módulo

As aulas foram organizadas para acompanhar uma progressão simples:

> ambiente computacional  
> → leitura de código  
> → identificação de erros  
> → exploração de tabelas  
> → validação de resultados

Os conceitos são apresentados por meio de exemplos relacionados à análise de imagens. O objetivo é que o código deixe de ser tratado como uma caixa-preta e passe a ser entendido como uma sequência de operações que pode — e deve — ser inspecionada.

Não é necessário memorizar toda a sintaxe apresentada. Mais importante do que escrever código do zero é desenvolver a capacidade de:

1. ler o que o código pretende fazer;
2. validar o que ele realmente produziu;
3. modificar ou solicitar modificações quando o resultado não fizer sentido.

!!! info "Sobre este material"

    Este material foi criado para apoiar o treinamento do nosso grupo de pesquisa em HCI/HCA. Ele foi pensado primеiramente para a nossa rotina, mas pode ser útil para outras pessoas que estejam aprendendo ou estruturando fluxos semelhantes.

    Se você encontrar algum erro, inconsistência ou tiver sugestões de melhoria, fique à vontade para abrir uma *issue* no repositório. Se preferir tratar algo de forma privada, envie um e-mail.

