# Cultura celular — Pré-leitura para treinamento básico

**Ao final deste módulo, espera-se que você seja capaz de:**

- explicar por que cultura celular exige padronização e atenção à variabilidade;
- reconhecer a importância de assepsia, confluência e densidade celular;
- identificar sinais básicos de cultura saudável e de possível contaminação;
- entender por que pequenas diferenças de rotina afetam ensaios de citotoxicidade e HCA/HCI;
- chegar ao treinamento presencial com um modelo mental mínimo da rotina de cultura celular.

**Entregável do módulo**

- realizar a leitura prévia descrita aqui antes da atividade prática;
- *checklist* básico de compreensão preenchido;
- identificação dos principais pontos críticos da rotina de cultura celular;
- preparação para o treinamento presencial de assepsia, observação e passagem.

!!! warning "*Garbage in, garbage out.*"
    A nossa análise de dados depende enormemente da qualidade das nossas imagens, que por sua vez depende da qualidade da nossa cultura de células.

A cultura de células pode parecer simples quando vista de fora: trocar meio, observar as células, fazer passagem, contar, plaqueá-las e seguir com o experimento. Na prática, porém, esse “simples” concentra uma parte grande da variabilidade que depois aparece nos ensaios.

No nosso laboratório, isso importa ainda mais porque muitos dos experimentos envolvem **citotoxicidade**, **Cell Painting** e **Live Cell Painting**. Nesses contextos, pequenas diferenças de rotina podem alterar densidade celular, morfologia, viabilidade, resposta ao tratamento e qualidade das imagens. Já discutimos isso quando falamos sobre *batch effects*. Em outras palavras: antes de pensar em análise, perfil fenotípico, *machine learning* ou interpretação biológica, é preciso garantir uma cultura de células reprodutível e bem conduzida.

Este módulo existe justamente para isso. A proposta aqui não é esgotar o tema, mas fornecer uma base conceitual simples e prática para que o treinamento presencial faça sentido. A ideia é que você chegue ao primeiro dia de treinamento já sabendo **o que observar**, **por que observar** e **quais erros básicos evitar**.

## Antes de entrar no fluxo: por que este módulo existe?

Em ensaios baseados em imagem, é comum que as pessoas pensem primeiro em microscopia, segmentação, *features*, estatística ou *batch effects*. Tudo isso é importante, mas nada disso corrige uma cultura celular mal conduzida.

Uma cultura excessivamente confluente, estressada, mal distribuída no poço, contaminada ou submetida a manipulações inconsistentes adicionará um ruído enorme nos seus dados, o que dificultará a identificação de variáveis relevantes e a interpretação biológica, mesmo quando a aquisição e a análise estão corretas. Isso significa que parte da qualidade do experimento é definida **antes** da imagem existir.

!!! info "Ideia central"
    Em cultura celular, boa parte da qualidade do dado começa muito antes da aquisição: ela começa na rotina de bancada.

Aqui apresentamos uma regra de ouro do laboratório 🥇, seu aprendizado sempre terá 4 etapas iniciais:

- primeiro, entender os princípios teóricos;
- depois, observar a rotina correta;
- em seguida, executar uma versão simplificada do experimento com acompanhamento;
- por fim, gerar resultados básicos satisfatórios antes de iniciar os experimentos do projeto.

Após essas etapas é possível pensar em obtenção de resultados robustos e do desenvolvimento científico do projeto. 
## Cultura de células não é só “manter as células vivas”

Uma cultura celular boa não é apenas uma cultura em que “ainda existem células”. O objetivo não é manter qualquer célula viva a qualquer custo, mas trabalhar com células:

- viáveis;
- morfologicamente saudáveis;
- relativamente homogêneas;
- compatíveis com a etapa experimental;
- livres de sinais evidentes de contaminação ou estresse.

Por exemplo, após o descongelamento, é comum deixarmos as células por aproximadamente 14 dias até que elas recuperem essas características. Isso exige atenção aos sinais que a cultura apresenta para decidir se as células já estão adequadas para experimentos. Alguns exemplos incluem a morfologia padrão da linhagem, o tempo esperado para atingir confluência em condições conhecidas de cultivo, a ausência de grumos e o comportamento esperado de crescimento.

Essas condições são importantes porque células respondem ao ambiente. Alterações de densidade, tempo sem troca de meio, excesso de confluência, manipulação brusca, erro de temperatura, exposição prolongada fora da incubadora e inconsistência entre operadores podem modificar o comportamento celular.

No contexto de HCA/HCI, isso aparece de várias formas:

- mudança de forma e tamanho celular;
- alteração no número de células por poço;
- alterações no padrão de aderência;
- diferença de resposta ao tratamento;
- aumento de variabilidade entre réplicas;
- imagens com células já comprometidas antes mesmo da perturbação de interesse.

!!! quote "Pergunta útil"
    Antes de interpretar um efeito biológico, pergunte primeiro: a cultura estava saudável, comparável e bem conduzida?

## Assepsia é técnica

Uma parte essencial da rotina de cultura celular é a **assepsia**. Isso não significa “seguir rituais”, mas adotar um conjunto coerente de comportamentos *para reduzir a chance de contaminação* e manter a rotina previsível.

Assim como não existe um sistema completamente seguro no mundo real ou virtual, a ideia aqui é acumular camadas de proteção para diminuir enormemente as chances de contaminação. Em outras palavras: a proposta não é confiar em uma única barreira, mas combinar várias medidas simples que, juntas, tornam a rotina muito mais segura.

O fluxo laminar não “resolve” tudo sozinho. Ele ajuda a criar um ambiente mais controlado, mas a qualidade da manipulação ainda depende da técnica de quem está trabalhando.

### Alguns princípios básicos

- ter um protocolo bem organizado e estruturado de maneira a facilitar a sua execução;
- se preparar e preparar seu material **antes de entrar no fluxo**;
- entrar no fluxo com o material necessário já organizado;
- evitar movimentos bruscos (por ex. evite grandes deslocamentos de ar);
- evitar movimentos desnecessários (por ex. passar a mão sobre frascos abertos);
- respeitar o quadrado mágico a sua frente (crie um espaço a sua frente e o mantenha sempre apenas com o que está em uso no momento);
- trabalhar com atenção ao que está limpo (se atentar para pipetas ou ponteiras que toquem em algum lugar);
- manter as células somente o tempo necessário fora da estufa;
- evitar falar, tocar objetos externos e interromper o fluxo de trabalho sem necessidade;
- manter mãos, luvas e superfícies sob uma lógica consistente de limpeza.

!!! warning "Erro comum"
    Tratar assepsia como uma sequência mecânica de gestos, sem entender a lógica do fluxo de trabalho, costuma gerar falsa sensação de segurança.

No treinamento presencial, parte importante do aprendizado será justamente observar essa lógica: **como preparar o fluxo, como organizar os materiais e como manipular sem “brigar” com o próprio espaço de trabalho**.

## Cuidados durante o trabalho no fluxo laminar

Durante toda a manipulação, tenha atenção constante ao que suas mãos e luvas tocam. Evite tocar qualquer superfície não estéril, como cabelos, rosto, óculos, máscaras, jalecos, bancadas externas ou outros objetos pessoais. Caso isso ocorra, as luvas devem ser imediatamente desinfetadas com álcool 70% ou substituídas, conforme a situação. 

!!! tip "Etiqueta 101"
    Se precisar sair do fluxo, retire as luvas ou utilize uma estratégia de “mão limpa” e “mão suja”: mantenha uma mão com a luva apenas para manipular o material estéril e deixe a outra mão sem luva para tocar maçanetas, interruptores, teclados e outros equipamentos.

Cabelos longos devem permanecer sempre presos. Nunca toque nos cabelos durante o trabalho no fluxo. Da mesma forma, celulares, relógios e outros objetos pessoais não devem ser utilizados dentro do fluxo laminar. O uso do celular com as luvas contaminadas é uma das causas mais frequentes de quebra da técnica asséptica.

Outro cuidado importante refere-se ao contato prévio com animais de estimação, como cães, gatos, coelhos, hamsters ou gerbis. Esses animais podem transportar microrganismos, partículas de poeira e pelos que aumentam o risco de contaminação das culturas celulares, incluindo contaminantes de difícil detecção, como micoplasmas. Por esse motivo, recomenda-se que atividades de cultura celular não sejam realizadas logo após manipular esses animais. Caso tenha ocorrido contato direto, o ideal é tomar banho, vestir roupas limpas e somente então iniciar o trabalho no fluxo laminar.

Lembre-se de que a maior parte das contaminações em cultura celular não ocorre por falhas do equipamento, mas por pequenas quebras na técnica asséptica. Manter disciplina durante toda a manipulação é a medida mais eficaz para preservar a esterilidade das culturas.
## Confluência, passagens e variabilidade

Um dos conceitos mais importantes em cultura celular é a **confluência**, isto é, o grau de ocupação da superfície de crescimento pelas células aderentes. Esse parâmetro ajuda a decidir se a cultura está:

- com número insuficiente de células;
- em uma faixa adequada de crescimento;
- ou excessivamente densa para a etapa seguinte.

Passar células muito cedo ou muito tarde pode afetar o experimento. Células excessivamente confluentes podem mudar sua morfologia, taxa de proliferação, estado fisiológico e resposta a tratamentos. Por outro lado, culturas muito ralas também podem apresentar comportamento menos estável.

!!! tip "Dica prática"
    **Confluência** não é só “percentual visual”. Ela deve ser interpretada junto com morfologia, distribuição das células e contexto da rotina experimental.

Além disso, cada passagem adiciona um pouco de história ao sistema. A cultura carrega consigo:

- o número de passagens;
- o modo como vinha sendo mantida;
- a densidade em que foi expandida;
- a consistência ou inconsistência de manipulações anteriores.

Isso significa que duas culturas da “mesma linhagem” podem não se comportar da mesma forma se vierem sendo conduzidas de modos diferentes.

Uma regra de ouro do laboratório é que não deixamos células em cultura por mais de três dias durante o cultivo. É normal que, após o descongelamento, as células demorem um pouco para atingir a confluência. Podemos trocar o meio poucas horas após o descongelamento para retirar o excesso de DMSO do meio de congelamento. Mas, *mesmo que as células estejam menos confluentes do que o ideal*, dois dias após o descongelamento elas são passadas.

Aqui vale uma observação importante: se o crescimento estiver muito lento, você pode descongelar em um poço de uma placa de 12 poços ou passar para uma placa menor, caso ache que a célula está “sofrendo”, como costumamos dizer. Mas simplesmente deixar em cultura por mais tempo não é uma opção. O contato célula-célula é importante para o desenvolvimento da cultura, por isso leve isso em consideração ao passar as células nessas condições.

Outro momento em que essa regra vale é durante ausências, por exemplo em um feriado de 4 dias. Não é uma boa estratégia passar menos células apenas para que, ao final dos 4 dias, elas tenham uma confluência aparentemente aceitável. Isso pode levar a alterações no comportamento das células, no padrão de replicação, induzir estresse sutis, tudo isso ser capturado pelos ensaios subsequentes e induzir variação na replicação dos experimentos.

!!! tip "Lembre-se:"
    a qualidade e a constância dos seus experimentos irão se refletir na análise dos dados. 

### Por que isso importa no treinamento?

Porque a aluna precisa aprender a observar:

- se a cultura está em momento adequado para passagem;
- se a morfologia é compatível com o esperado;
- se há sinais de estresse ou heterogeneidade;
- se o material parece apropriado para seguir adiante.

## Contaminação e qualidade básica da cultura

Nem toda contaminação é óbvia à primeira vista. Algumas são rapidamente perceptíveis, como crescimento de fungos ou bactérias, que geralmente levam à turvação e mudança da cor do meio. Outras podem passar despercebidas por mais tempo, como certos tipos de contaminação bacteriana discreta ou **micoplasma**.

Por isso, parte da rotina de cultura de células envolve não apenas manipular, mas também **inspecionar**. É importante desenvolver o hábito de, **todos os dias ao chegar**, observar:

- aparência do meio;
- presença de partículas ou turvação;
- comportamento inesperado das células;
- alterações morfológicas não explicadas pelo experimento;
- crescimento atípico (maior ou menor que o esperado);
- queda de desempenho do ensaio sem motivo aparente.

Essa inspeção diária é indispensável por vários motivos. Ela ajuda a detectar problemas com o gás ou com a incubadora que possam ter ocorrido durante a noite, funciona como um momento de *go/no-go* do seu projeto, economiza tempo e recursos, ajuda você a avançar no treinamento e oferece uma resposta sobre as coisas que você testou na última visita ao fluxo.

!!! warning "Ponto importante"
    Antibiótico não substitui técnica adequada. Em muitos casos, ele apenas mascara problemas e atrasa o reconhecimento de uma contaminação.

A qualidade básica da cultura depende de uma combinação de:

- boa técnica;
- observação cuidadosa;
- rotina consistente;
- registros mínimos que permitam perceber quando algo saiu do padrão.

## Densidade celular: um detalhe que muda muita coisa

Ao trabalhar com placas, especialmente em **96 poços**, a densidade celular deixa de ser um detalhe e passa a ser uma variável crítica. Plaquear células em densidade inadequada ou de forma heterogênea afeta diretamente:

- crescimento ao longo do experimento;
- confluência no momento da leitura;
- morfologia;
- resposta ao tratamento;
- relação sinal/ruído;
- comparabilidade entre poços e réplicas.

Em ensaios de citotoxicidade, por exemplo, uma diferença de plaqueamento pode ser confundida com um efeito do composto. Em HCA/HCI, diferenças de densidade podem alterar o fenótipo observado e gerar variabilidade que não vem da perturbação de interesse, mas da técnica de semeadura.

!!! info "Ideia prática"
    Uniformidade no plaqueamento significa menor ruído técnico.

Por isso, durante o treinamento, a contagem e o plaqueamento em 96 poços serão tratados como etapas centrais da capacitação, e não como tarefas “simples demais” para receber atenção.

## Por que isso importa para citotoxicidade e HCA/HCI

Nos ensaios do laboratório, o dado final depende fortemente da qualidade do sistema celular no momento do experimento.

### Em ensaios de citotoxicidade

Se a cultura começa mal:

- o baseline fica instável;
- a variabilidade entre réplicas aumenta;
- a normalização pode ficar inconsistente;
- a curva dose–resposta pode ficar ruidosa;
- o IC50 pode se tornar pouco confiável.

### Em Cell Painting e Live Cell Painting

Se a cultura começa mal:

- a morfologia de base já está alterada;
- a densidade celular varia demais entre poços;
- o campo fica difícil de comparar;
- a segmentação pode piorar;
- a interpretação fenotípica fica inconsistente.

!!! quote "Resumo honesto"
    Nem toda variabilidade que aparece no dado vem do tratamento. Às vezes ela começou na cultura (efeito técnico e erro).

Essa é uma das razões pelas quais o treinamento não termina com uma “prova”, mas com a obtenção de resultados básicos satisfatórios. Antes de iniciar o projeto, a aluna precisa demonstrar que consegue gerar dados simples com consistência técnica mínima.

Outra regra de ouro do laboratório: se a confluência não estiver adequada, ou se as células não apresentarem a morfologia esperada no dia do tratamento, é mandatório interromper o experimento nesse momento. Isso diminui gastos, permite usar o tempo para planejar outra atividade e libera o fluxo para outras pessoas. Realizar experimentos com células fora do padrão de qualidade só vai gerar resultados ruidosos, o que atrapalha muito o desenvolvimento do projeto.

## O que você deve saber antes do dia 1

Antes do primeiro treinamento presencial, espera-se que você chegue com algumas ideias básicas já organizadas:

- cultura celular exige rotina consistente, não improviso;
- assepsia depende de lógica de trabalho, não apenas de repetição mecânica;
- confluência e momento de passagem influenciam o comportamento celular;
- contaminação nem sempre é óbvia;
- densidade celular e plaqueamento homogêneo afetam diretamente a qualidade dos resultados;
- boa parte da variabilidade experimental nasce antes da aquisição de imagens.

Não é necessário dominar todos os detalhes técnicos neste momento. O objetivo desta pré-leitura é que você entre no treinamento presencial com um mapa mental simples do que vai observar e praticar.

## Nota sobre o improviso

Embora a cultura celular exija rotina consistente e não improviso, durante a execução de experimentos, principalmente aqueles realizados pela primeira vez ou ainda em fase de padronização, é esperado que situações inesperadas aconteçam. Isso pode ocorrer por diversos motivos: desde falta de preparo da equipe até protocolos desatualizados, mudanças na organização do laboratório ou a necessidade de utilizar um novo equipamento ou reagente.

O importante é que o improviso aconteça apenas uma vez. Sempre que um procedimento precisar ser adaptado, o protocolo deve ser imediatamente revisado e atualizado. Se a mudança for relevante para outras pessoas do laboratório, o protocolo institucional também deve ser corrigido. Assim, o conhecimento adquirido deixa de depender da memória de quem executou o experimento e passa a fazer parte da rotina do laboratório.

Esse é um dos principais objetivos de um experimento piloto. Ele não serve apenas para ajustar variáveis biológicas, mas também para identificar problemas técnicos, logísticos e de planejamento que poderiam comprometer os experimentos definitivos. Cada dificuldade encontrada no piloto representa uma oportunidade de melhorar o protocolo antes da coleta dos dados que realmente serão analisados.

Por isso, garanta que o experimento piloto cumpra a sua função. Um piloto bem executado reduz erros, aumenta a reprodutibilidade e estabelece uma rotina de trabalho mais eficiente para todas as etapas seguintes. Sempre que um experimento envolver um protocolo novo, adaptações metodológicas ou qualquer grau de incerteza técnica, deixar de realizar um piloto é uma falha de planejamento que refletirá no andamento e na qualidade do projeto.

!!! tip "Improviso *vs* planejamento"
    Todo improviso durante o experimento piloto deve resultar em aprendizado e na atualização do planejamento do experimento definitivo.

## *Exercícios*

1) **Explique em 3 a 4 linhas**  
Por que cultura celular não deve ser entendida apenas como “manter células vivas”?

2) **Assepsia com sentido**  
Cite dois comportamentos que ajudam a manter a lógica asséptica da rotina e explique por quê.

3) **Confluência e passagem**  
Por que o momento da passagem pode influenciar o resultado experimental?

4) **Densidade celular**  
Explique por que um plaqueamento heterogêneo pode atrapalhar um ensaio de citotoxicidade ou HCA/HCI.

5) **Pergunta de checagem**  
Qual parte do experimento já pode introduzir variabilidade antes mesmo da aquisição de imagens?

## Checklist de autoavaliação

Antes de seguir para o treinamento presencial, verifique se você consegue explicar, com suas próprias palavras, os pontos abaixo:

- [ ] por que cultura celular exige padronização;
- [ ] por que assepsia depende de técnica e de lógica de trabalho;
- [ ] o que significa confluência e por que ela importa;
- [ ] por que o momento da passagem influencia o comportamento celular;
- [ ] por que não devemos manter células em cultivo por tempo excessivo;
- [ ] quais sinais podem sugerir contaminação;
- [ ] por que micoplasma é um problema importante;
- [ ] por que densidade celular e plaqueamento homogêneo importam;
- [ ] como problemas na cultura celular podem afetar ensaios de citotoxicidade;
- [ ] como problemas na cultura celular podem afetar experimentos de HCA/HCI;
- [ ] por que, em certos casos, interromper um experimento é a decisão correta.

!!! warning "Se você não consegue explicar, procure ajuda"
    Se algum item deste *checklist* ainda não estiver claro, ou se você não conseguir explicá-lo com segurança, procure ajuda antes do treinamento prático. A ideia desta pré-leitura não é “decorar” termos, mas chegar ao fluxo com compreensão mínima do que será observado e praticado.

## Sugestões de vídeos

- [Aseptic Techniques: Cell Culture Basics](https://www.youtube.com/watch?v=nr1tV_LuqJk)
- [Noções básicas de cultura celular: Introdução a cultura celular!](https://www.youtube.com/watch?v=wZIpOHheh9M)
- [How to pipette correctly – a short step-by-step introduction into proper pipetting](https://www.youtube.com/watch?v=QGX490kuKjg)
- [Basic Lab Skills Training](https://www.youtube.com/watch?v=Nqj41O8FH5c)
