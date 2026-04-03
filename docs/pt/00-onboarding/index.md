# Onboarding
 
## 0) Visão geral

### Propósito
Formar pós-graduandos capazes de executar o ciclo completo de um projeto de HCA/HCI com rigor e reprodutibilidade:

**Pergunta → desenho experimental → aquisição → QC → análise → interpretação → comunicação → reprodutibilidade**

![Mapa da aventura do HCI](../../assets/img/hci-aventura-mapa.webp)

### Perfil de saída
A pessoa consegue:

- Desenhar um ensaio de HCA (ex.: *Live Cell Painting*) com controles e mitigação de *batch effects*.
- Adquirir imagens com parâmetros coerentes e justificar escolhas de aquisição.
- Implementar QC (sigla do inglês, *Quality Control*) e critérios de exclusão (imagem e/ou poço) e documentar racional.
- Construir pipeline de segmentação/medição (ex.: CellProfiler) e integrar metadados.
- Gerar perfis fenotípicos, normalizar, diagnosticar batches e produzir relatórios reprodutíveis.
- Treinar modelos baseline (e avançados quando necessário) com validação correta.
- Entregar artefatos reprodutíveis (repositório + ambiente + notebooks + README + figuras).

### Princípios operacionais do curso

- **Rigor > velocidade:** primeiro funciona, depois otimiza.
- **Reprodutibilidade desde o dia 1:** ambiente, versões, seeds, dados organizados.
- **Aprender fazendo:** cada módulo termina em um entregável avaliável.
- **Trilha dupla:** 
	1. biologia/microscopia/ensaio e 
	2. dados/software/ML, convergindo em projetos.

### Tópicos

- [Introdução ao High-Content Imaging e High-Content Analysis](intro/index.md)
- [Pergunta científica e operacionalização](pergunta/index.md)
- [Desenho experimental I: controles, replicação e randomização](desenho-experimental/index.md)
- [Desenho experimental II: *batch effect* — como reconhecer, prevenir e interpretar](batch-effects/index.md)


!!!info "Sobre este material"
    Este material foi criado para apoiar o treinamento do nosso grupo de pesquisa em HCI/HCA. Ele foi pensado primеiramente para a nossa rotina, mas pode ser útil para outras pessoas que estejam aprendendo ou estruturando fluxos semelhantes.
    Se você encontrar algum erro, inconsistência ou tiver sugestões de melhoria, fique à vontade para abrir uma *issue* no repositório. Se preferir tratar algo de forma privada, envie um e-mail.
