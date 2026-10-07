export const organizations = [
 {id:'atelie',name:'Ateliê de Software',role:'Empresa responsável pelo projeto',kind:'organization',x:-16,z:2,width:10.2,depth:20,color:0x00f993,children:['discovery'],description:'O Ateliê de Software é a empresa que reúne a equipe responsável por descobrir necessidades, desenvolver e desenhar o produto. A área Discovery, Dev e Design integra a empresa e trabalha com o cliente, com o Darkside e com os ambientes de entrega.',people:['Product Owner · produto e prioridades','Designer · experiência e acessibilidade','Desenvolvedores · arquitetura, implementação e manutenção'],tags:['Discovery, Dev e Design','Relação com o cliente','Método do Ateliê','Julgamento humano'],files:['Contexto, planos e decisões do projeto','Artefatos .darkside/ e documentação em docs/'],concept:false}
];
export const stations = [
 {id:'discovery',name:'Discovery, Dev e Design',role:'Equipe do Ateliê · produto, engenharia e experiência',parent:'atelie',x:-16,z:2,width:7.8,depth:16,kind:'team-design',color:0x00f993,description:'Dentro do Ateliê de Software, a mesma equipe investiga necessidades, define a experiência e mantém o produto em evolução. PO, designer e desenvolvedores trabalham juntos: Quest e Mission estruturam o problema, War Room e Interrogate refinam o plano, e a equipe acompanha a implementação com o Darkside.',people:['Product Owner · propósito, prioridade e descoberta','Designer · experiência, protótipos e acessibilidade','Dev backend · arquitetura, dados e implementação','Dev frontend · interface e integração','Responsável do cliente · contexto e validação'],tags:['/quest','/war-room','/interrogate','/mission','/design-schematic','/spec-verdict','IDE / CLI','Git','Figma / MCP','Julgamento humano'],files:['.darkside/holocrons/tech.md','.darkside/holomaps/HM-042.md','.darkside/war-room/exportacao-plan.md','.darkside/design-schematic/relatorios.md','.darkside/sith-agents/engineer.md'],concept:false},
 {id:'darkside',name:'Darkside',role:'Harness de desenvolvimento · método executável',x:-6,z:7,color:0x00f993,kind:'harness',description:'Order66 orquestra agentes especializados no contexto do projeto. O ciclo começa pelos testes, passa pela implementação e pela revisão. O harness limita o escopo e interrompe tentativas que não convergem.',people:['Engineer · decisões técnicas','TDD · testes antes do código','Coder backend + frontend · implementação','Security + Reviewer · verificação independente'],tags:['/explore','/order66','/hunter','TDD','Sandbox','Skills + tools'],files:['.darkside/imperial-orders/IO-042.md','.darkside/sith-agents/tdd.md','.darkside/sith-agents/coder-backend.md','.darkside/imperial-orders/fallen-orders/'],concept:false},
 {id:'memory',name:'Memória .darkside/',role:'Contexto persistente e artefatos reutilizáveis',x:-6,z:-1,color:0x00d7ff,kind:'memory',description:'O conhecimento permanece em arquivos versionáveis fora das conversas. Tech.md descreve o projeto, agentes são adaptados à arquitetura e cada episódio produz planos, investigações e evidências reutilizáveis.',people:['Agentes consultam e atualizam o contexto','Equipe confirma convenções e decisões'],tags:['Holocrons','Holomaps','Sith Agents','Imperial Orders','Provenance'],files:['.darkside/holocrons/tech.md','.darkside/holomaps/','.darkside/war-room/','.darkside/hunter/','.darkside/scribe/','docs/'],concept:false},
 {id:'control',name:'Control Plane',role:'Inteligência de coordenação · visão futura',x:-6,z:-10,color:0x00d7ff,kind:'control',description:'Recebe eventos do trabalho, relaciona artefatos e infere o estado do fluxo. Work Intelligence coordena o sistema; Strategic Intelligence liga entrega a resultado. Gateway e Router governam modelos, permissões e orçamento.',people:['Equipe · intervenções em bloqueios','Liderança · custos, riscos e resultados'],tags:['AI Gateway','Model Router','Evidence Graph','Work Intelligence','Strategic Intelligence','Políticas / budgets'],files:['Eventos → relações → estado inferido','Objetivo → hipótese → feature → PR → deploy → resultado'],concept:true},
 {id:'quality',name:'Verificação & Git',role:'Evidências de qualidade antes da entrega',x:4,z:8,color:0x00f993,kind:'quality',description:'Testes, auditoria de segurança e critérios de aceite são verificados. Pull requests conectam código e revisão. Inquisitor faz inspeção independente; Verdict verifica o aceite; Probe Droid prepara QA e Scribe documenta o comportamento comprovado.',people:['Reviewer + Security · auditoria','Designer · fidelidade visual','QA · cenários de uso'],tags:['/inquisitor','/verdict','/visual-fidelity','/probe-droid','/scribe','Git / PR / CI'],files:['.darkside/the-grand-inquisitor/PR-218.md','.darkside/verdicts/F-042.md','.darkside/probe-droid/PR-218.md','docs/releases/v2.8.5.md'],concept:false},
 {id:'homolog',name:'AWS · Homologação',role:'Ambiente isolado para validação da mudança',x:4,z:-4,color:0xf9d002,kind:'staging',description:'O build aprovado é disponibilizado em homologação, separado de produção. A equipe e o representante do cliente verificam os cenários de aceite antes de autorizar a liberação. A topologia AWS é ilustrativa.',people:['QA + PO do cliente · aceite','Dev · release e rollback'],tags:['CI/CD','ECS / containers','RDS de testes','Dados de teste','Gate de aceite'],files:['Build vinculado ao commit e ao PR','Resultado de smoke e testes de aceite','Decisão humana de liberação'],concept:true},
 {id:'production',name:'AWS · Produção',role:'Produto disponível, versões e observabilidade',x:15,z:-4,color:0xf9d002,kind:'production',description:'O produto existente atende usuários durante o desenvolvimento. Uma mudança aprovada passa por liberação gradual com feature flag, monitoramento e plano de rollback. Métricas e incidentes realimentam o próximo ciclo.',people:['Dev responsável · liberação','Equipe · resposta a incidentes'],tags:['ALB / ECS','RDS','CloudWatch','Feature flags','Canary / rollback'],files:['deployment.completed','feature_flag.changed','incident.created','business_metric.changed'],concept:true},
 {id:'client',name:'Cliente & usuários',role:'Nexo · operação, necessidade e resultado',x:16,z:8,color:0x00d7ff,kind:'client',description:'A empresa cliente utiliza o portal para sua operação. Seus usuários geram tráfego, sinalizam falhas e oferecem feedback. O responsável de negócio define o valor esperado e verifica se a entrega melhora a operação.',people:['Responsável do cliente · objetivo e aceite','Usuários · operação diária e feedback'],tags:['Uso do produto','Feedback','Objetivos de negócio','Resultado observado'],files:['OBJ-07 · reduzir esforço operacional','Hipótese → métrica de uso → resultado','Feedback retorna ao discovery'],concept:false}
];
const phase=(station,kind,title,description,skill,artifact,event,column,extra={})=>({station,kind,title,description,skill,artifact,event,column,duration:6,...extra});
export const scenarios={
 feature:{prefix:'F',base:42,name:'Exportação de relatórios',objective:'Reduzir o tempo para preparar relatórios operacionais.',metric:'Tempo de relatório',baseline:'18 min',result:'2 min',explanation:'Resultado ilustrativo após validação pelos usuários.',phases:[
  phase('client','NECESSIDADE','Uma necessidade nasce na operação','Usuários levam 18 minutos para consolidar relatórios. O cliente solicita uma exportação que reduza esse esforço.','Feedback','OBJ-07 → F-042','user_feedback.received',0),
  phase('discovery','DISCOVERY','Investigar o problema e a hipótese','PO, designer e /quest registram usuários, valor esperado, limites e critérios de validação.','/quest','.darkside/holomaps/HM-042.md','darkside.holomap.created',0),
  phase('discovery','DESIGN','Dar forma à experiência','Designer define os estados da exportação. Spec Verdict relaciona o design aos critérios de aceite.','/design-schematic + /spec-verdict','.darkside/design-schematic/relatorios.md','design.acceptance.checked',0),
  phase('discovery','PLANO + GATE','Aprovar o plano técnico','War Room define processamento assíncrono, acesso aos dados e riscos; Interrogate questiona pressupostos.','/war-room + /interrogate','.darkside/war-room/exportacao-plan.md','darkside.plan.approved',0,{gate:'A equipe e o responsável do cliente aprovam escopo, tratamento dos dados e plano técnico.',gateEvent:'human_decision.created'}),
  phase('darkside','TDD · RED','Escrever testes que ainda falham','O agente TDD especifica autorização e conteúdo do CSV. As falhas esperadas comprovam que a funcionalidade ainda não existe.','/order66 · TDD','spec/requests/report_exports_spec.rb','test.failed',1,{red:true}),
  phase('darkside','IMPLEMENTAÇÃO','Construir com agentes especializados','Coder backend e frontend implementam o escopo aprovado usando tech.md e os testes. Nenhuma liberação é feita pelos agentes.','/order66 · Coder','.darkside/imperial-orders/IO-042.md','file.modified',1),
  phase('quality','TESTES + REVIEW','Verificar código e segurança','Testes passam. Reviewer e Security verificam o PR; Inquisitor avalia riscos e Verdict confirma os critérios de aceite.','/inquisitor + /verdict','.darkside/the-grand-inquisitor/PR-218.md','review.approved',2),
  phase('quality','QA + DOCUMENTAÇÃO','Preparar cenários e documentação','Probe Droid descreve os testes para QA. Scribe documenta o comportamento comprovado no código e nos testes.','/probe-droid + /scribe','.darkside/probe-droid/PR-218.md','build.completed',2),
  phase('homolog','HOMOLOGAÇÃO','Validar com o cliente','O build vai para o ambiente de teste AWS. QA e o cliente verificam permissões, integridade do CSV e tratamento de falhas.','CI/CD + QA','build-219 · aceite em homologação','test.acceptance.passed',3),
  phase('homolog','GATE HUMANO','Autorizar a liberação gradual','O responsável avalia risco, evidências de aceite e plano de rollback antes da liberação em produção.','Decisão humana','DEC-042 · release aprovada','human_decision.created',3,{gate:'Liberar a exportação com feature flag para 10% dos usuários, mantendo rollback disponível.'}),
  phase('production','DEPLOY','Liberar sem interromper a operação','A versão aprovada entra em produção. A feature flag amplia o acesso de 10% a 100% enquanto erros são monitorados.','CI/CD + feature flag','deployment · v2.8.5','deployment.completed',3,{deploy:true}),
  phase('client','RESULTADO','Verificar o valor na operação','Usuários completam a tarefa em 2 minutos neste cenário fictício. A medição se conecta ao objetivo e fecha a hipótese.','Product analytics','OBJ-07 → F-042 → resultado','business_metric.changed',4,{outcome:true,duration:9})
 ]},
 bug:{prefix:'B',base:17,name:'Falha ao salvar pedido',objective:'Restabelecer o salvamento confiável de pedidos.',metric:'Falhas ao salvar',baseline:'2,3%',result:'0,2%',explanation:'Taxa fictícia observada após a correção.',phases:[
  phase('client','INCIDENTE','Um usuário sinaliza uma falha','Pedidos com item duplicado falham ao salvar. A operação segue disponível, mas o problema é associado a um incidente.','Feedback + observabilidade','INC-017 · pedido duplicado','incident.created',0),
  phase('darkside','INVESTIGAÇÃO','Localizar a causa, não o sintoma','Hunter rastreia defeito → estado incorreto → falha. A hipótese é uma validação inconsistente de itens duplicados.','/hunter','.darkside/hunter/INC-017.md','darkside.hypothesis.confirmed',0),
  phase('discovery','PLANO + GATE','Aprovar uma correção delimitada','A equipe confirma o diagnóstico e aprova uma mudança pequena, sem alterar contratos ou reestruturar todo o módulo.','/war-room','.darkside/war-room/pedido-fix-plan.md','darkside.plan.approved',0,{gate:'Aprovar o diagnóstico causal e a correção restrita ao salvamento de itens duplicados.'}),
  phase('darkside','TDD · RED','Reproduzir a falha em um teste','O teste de regressão reproduz o erro. Sua falha é esperada antes da mudança e preserva a evidência do incidente.','/order66 · TDD','spec/models/order_regression_spec.rb','test.failed',1,{red:true}),
  phase('darkside','CORREÇÃO','Corrigir o defeito identificado','Coder modifica a validação e mantém o contrato da API. A equipe acompanha o escopo e as evidências.','/order66 · Coder','.darkside/imperial-orders/IO-017.md','file.modified',1),
  phase('quality','REVIEW · REJEITADO','A revisão encontra um caso faltante','O teste original passa, mas a revisão detecta uma regressão com itens sem identificação. A mudança retorna à implementação.','Reviewer + Security','.darkside/the-grand-inquisitor/PR-220.md','review.rejected',2,{red:true,returnToDev:true}),
  phase('darkside','RETRABALHO','Completar a correção e os testes','Um segundo teste cobre o caso faltante. Coder ajusta a solução dentro do escopo; uma nova revisão é solicitada.','/order66 · TDD + Coder','spec/models/order_regression_spec.rb','test.passed',1),
  phase('quality','VERIFICAÇÃO','Confirmar regressão e critérios de aceite','Reviewer aprova. Inquisitor e Verdict verificam segurança e aceite. Probe Droid prepara o cenário de reprodução para QA.','/inquisitor + /verdict + /probe-droid','.darkside/verdicts/B-017.md','review.approved',2),
  phase('homolog','HOMOLOGAÇÃO + GATE','Reproduzir e validar com o cliente','QA reproduz o problema em homologação e confirma a correção. O responsável aprova a liberação controlada.','QA + decisão humana','DEC-017 · correção aprovada','test.acceptance.passed',3,{gate:'Liberar a correção após validação dos cenários original e de regressão.'}),
  phase('production','DEPLOY','Publicar a correção e observar','A nova versão é liberada. O monitoramento verifica a taxa de erro do endpoint; rollback permanece disponível.','CI/CD + observabilidade','deployment · correção INC-017','deployment.completed',3,{deploy:true}),
  phase('client','RESULTADO','Confirmar a recuperação da operação','A taxa simulada de falhas cai de 2,3% para 0,2%. O incidente é encerrado e Scribe registra o comportamento comprovado.','/scribe + observabilidade','docs/incidents/INC-017.md','incident.resolved',4,{outcome:true,duration:9})
 ]},
 improve:{prefix:'M',base:9,name:'Otimização da consulta de pedidos',objective:'Reduzir a latência da consulta mais utilizada.',metric:'Latência p95',baseline:'820 ms',result:'260 ms',explanation:'Valores fictícios para a consulta monitorada.',phases:[
  phase('production','OBSERVABILIDADE','Detectar uma degradação recorrente','O monitoramento registra p95 de 820 ms na consulta de pedidos. O produto segue funcionando enquanto a equipe analisa.','CloudWatch + métricas','OBS-009 · latência de consulta','product_metric.observed',0),
  phase('discovery','MISSÃO','Relacionar melhoria ao uso real','Mission delimita a otimização da consulta mais usada. O cliente confirma a prioridade e o limite de alteração.','/mission','.darkside/missions/consulta-pedidos.md','darkside.mission.created',0),
  phase('memory','CONTEXTO','Reutilizar a arquitetura documentada','Explore consulta a estrutura, convenções e dependências. A equipe confirma tech.md e os agentes especializados.','/explore','.darkside/holocrons/tech.md','context.loaded',0),
  phase('discovery','PLANO + GATE','Aprovar índice e rollout seguro','War Room planeja um índice criado de forma concorrente. A alteração de banco exige análise humana e rollback explícito.','/war-room + /interrogate','.darkside/war-room/indice-plan.md','darkside.plan.approved',0,{gate:'Aprovar a criação concorrente do índice, a janela de execução e os limites de carga.'}),
  phase('darkside','TDD · RED','Fixar comportamento e orçamento de consulta','TDD protege a resposta e estabelece um limite de consultas. A versão atual ultrapassa o orçamento do teste.','/order66 · TDD','spec/performance/orders_spec.rb','test.failed',1,{red:true}),
  phase('darkside','REFATORAÇÃO','Eliminar consultas redundantes','Coder remove N+1 e prepara a migração concorrente. A resposta da API é preservada e a mudança fica limitada ao módulo.','/order66 · Coder','.darkside/imperial-orders/IO-009.md','file.modified',1),
  phase('quality','VERIFICAÇÃO','Verificar equivalência e desempenho','Testes de regressão, benchmark e Inquisitor verificam a alteração. Reviewer confirma o plano de execução da migração.','/inquisitor + Reviewer','.darkside/the-grand-inquisitor/PR-221.md','review.approved',2),
  phase('homolog','CARGA + GATE','Testar antes de alterar produção','Homologação executa a carga simulada e verifica locks. O responsável avalia as evidências antes de liberar a migração.','QA + decisão humana','DEC-009 · migração aprovada','test.load.passed',3,{gate:'Autorizar a migração concorrente após teste de carga e verificação de locks.'}),
  phase('production','DEPLOY','Executar migração com monitoramento','A equipe libera a versão aprovada e observa duração, locks e erros. Não há acesso autônomo do agente ao banco de produção.','CI/CD + observabilidade','deployment · otimização OBS-009','deployment.completed',3,{deploy:true}),
  phase('client','RESULTADO','Medir a melhoria experimentada','A latência p95 simulada cai para 260 ms. O resultado se conecta à hipótese; Scribe atualiza a documentação humana.','Analytics + /scribe','docs/performance/consulta-pedidos.md','business_metric.changed',4,{outcome:true,duration:9})
 ]}
};
export class Simulation {
 constructor(key='feature'){this.listeners=[];this.running=true;this.speed=1;this.manual=false;this.elapsed=0;this.setScenario(key);}
 onChange(fn){this.listeners.push(fn);return()=>this.listeners=this.listeners.filter(x=>x!==fn);}
 emit(){this.listeners.forEach(fn=>fn(this));}
 get phaseCount(){return this.scenario.phases.length;} get scenario(){return scenarios[this.key];} get phase(){return this.scenario.phases[this.index];}get episodeId(){return `${this.scenario.prefix}-${String(this.scenario.base+this.cycle).padStart(3,'0')}`;}get version(){return `v2.8.${4+this.deployments}`;}
 setScenario(key){if(!scenarios[key])return;this.key=key;this.index=0;this.phaseTime=0;this.elapsed=0;this.cycle=0;this.deployments=0;this.cost=0;this.tokens=0;this.completed=false;this.waiting=false;this.rework=0;this.requests=0;this.artifacts=new Map();this.logs=[];this.enterPhase();this.emit();}
 log(event,text){this.logs.unshift({event,text,at:this.elapsed});this.logs=this.logs.slice(0,40);}
 enterPhase(){const p=this.phase;this.waiting=false;this.phaseTime=0;this.cost+=p.kind.includes('DEPLOY')||p.station==='client'?.01:.14;this.tokens+=p.station==='client'||p.station==='production'?0:18400;
  this.log(p.gate?'human_approval.preparing':p.event,`${this.episodeId} · ${p.title}`);if(p.returnToDev)this.rework++;if(p.deploy)this.deployments++;if(p.outcome)this.completed=true;
  if(p.artifact.startsWith('.darkside/')||p.artifact.startsWith('docs/')||p.artifact.startsWith('spec/'))this.artifacts.set(p.artifact,{path:p.artifact,skill:p.skill,phase:p.title,state:p.red?'Teste RED':p.outcome||p.column>=2?'Verificado':'Produzido'});
 }
 approve(){if(!this.waiting)return;this.log(this.phase.gateEvent||'human_decision.created',`${this.episodeId} · gate aprovado na simulação`);this.waiting=false;this.advance();this.emit();}
 advance(){if(this.index<this.scenario.phases.length-1){this.index++;this.enterPhase();}else{this.cycle++;this.index=0;this.completed=false;this.artifacts.clear();this.enterPhase();}}
 update(dt){if(!this.running)return;const delta=Math.max(0,Math.min(Number.isFinite(dt)?dt:0,.2))*this.speed;this.elapsed+=delta;this.requests+=delta*8;
  if(!this.waiting){this.phaseTime+=delta;if(this.phaseTime>=this.phase.duration){if(this.phase.gate&&this.manual){this.waiting=true;this.log('human_approval.requested',this.phase.gate);}else{if(this.phase.gate)this.log(this.phase.gateEvent||'human_decision.created',`${this.episodeId} · aprovação humana simulada`);this.advance();}this.emit();}}
 }
}

export const moduleScenario={id:'MOD-012',name:'Gestão de solicitações',features:[
 {id:'F-101',name:'Cadastro de solicitações'}, {id:'F-102',name:'Triagem e atribuição'},
 {id:'F-103',name:'Notificações'}, {id:'F-104',name:'Indicadores operacionais'}]};
const moduleEpisodes=[
 {id:'E-101',feature:'F-101',name:'API de solicitações',initial:2},
 {id:'E-102',feature:'F-101',name:'Formulário de solicitação',initial:1,delivery:['E-101']},
 {id:'E-103',feature:'F-102',name:'Regras de triagem',initial:0,start:['E-101']},
 {id:'E-104',feature:'F-102',name:'Quadro de triagem',initial:2,delivery:['E-103']},
 {id:'E-105',feature:'F-103',name:'Alertas e notificações',initial:3,delivery:['E-101']},
 {id:'E-106',feature:'F-104',name:'Painel de indicadores',initial:0,delivery:['E-101','E-103']}
];
function episodePhases(e,n){
 const dir=`.darkside/war-room/mod-012/${e.id}`;
 const context=`${e.feature} · ${e.name}`;
 return [
  phase('discovery','PLANO + GATE','Refinar e aprovar o episódio',`${context}. A equipe revisa escopo, contrato e critérios de aceite dentro do plano do módulo.`, '/war-room + /interrogate',`${dir}-plan.md`,'darkside.plan.created',0,{gate:`Aprovar o plano de ${e.id}, seus contratos e critérios de aceite.`}),
  phase('darkside','TDD · RED','Definir o comportamento em testes',`${context}. TDD cria os testes; a falha esperada precede a implementação.`, '/order66 · TDD',`spec/mod-012/${e.id}_spec.rb`,'test.failed',1,{red:true}),
  phase('darkside','IMPLEMENTAÇÃO','Construir o escopo aprovado',`${context}. Coder implementa com contratos e mocks quando necessário. A integração depende das entregas indicadas no card.`, '/order66 · Coder',`.darkside/imperial-orders/mod-012/IO-${e.id}.md`,'file.modified',1),
  phase('quality','REVIEW','Revisar código e segurança',`${context}. Inquisitor e Verdict verificam código, segurança e critérios de aceite.`, '/inquisitor + /verdict',`.darkside/the-grand-inquisitor/mod-012/${e.id}.md`,'review.approved',2),
  phase('quality','QA + DOCUMENTAÇÃO','Verificar cenários e registrar evidências',`${context}. Probe Droid prepara QA; Scribe registra o comportamento comprovado.`, '/probe-droid + /scribe',`.darkside/probe-droid/mod-012/${e.id}.md`,'build.completed',2),
  phase('homolog','ACEITE + GATE','Integrar e autorizar a entrega',`${context}. Homologação valida a integração após as dependências serem liberadas. O cliente autoriza a entrega com feature flag e rollback.`, 'QA + decisão humana',`${dir}-aceite.md`,'test.acceptance.passed',3,{gate:`Liberar ${e.id} após validar integração, evidências e rollback.`}),
  phase('production','DEPLOY','Liberar o episódio em produção',`${context}. A equipe libera uma mudança incremental com feature flag, mantendo a operação do portal.`, 'CI/CD + feature flag',`docs/releases/mod-012/${e.id}.md`,'deployment.completed',3,{deploy:true}),
  phase('client','RESULTADO','Validar o episódio no uso',`${context}. Os usuários verificam o comportamento entregue neste exemplo fictício. A funcionalidade conclui quando todos os seus episódios forem validados.`, 'Analytics + /scribe',`docs/results/mod-012/${e.id}.md`,'business_metric.changed',4,{outcome:true})
 ].map((p,i)=>({...p,duration:5+(n+i)%3}));
}
// Cada episódio tem seu próprio relógio, gate e dependências. O estado inicial
// é um recorte ilustrativo de um módulo em andamento, com planos já aprovados.
export class ModuleSimulation {
 constructor(){this.listeners=[];this.running=true;this.speed=1;this.manual=false;this.setScenario();}
 onChange(fn){this.listeners.push(fn);return()=>this.listeners=this.listeners.filter(x=>x!==fn);}
 emit(){this.listeners.forEach(fn=>fn(this));}
 get scenario(){return moduleScenario;}
 get selectedEpisode(){return this.episodes.find(e=>e.id===this.selectedId);}
 get phase(){return this.selectedEpisode.phases[this.index];}
 get index(){return this.selectedEpisode.index;}
 get phaseTime(){return this.selectedEpisode.phaseTime;}
 get phaseCount(){return this.selectedEpisode.phases.length;}
 get episodeId(){return this.selectedId;}
 get waiting(){return this.selectedEpisode.waiting;}
 get version(){return `v2.8.${4+this.deployments}`;}
 get completed(){return this.episodes.every(e=>e.done);}
 get validatedFeatures(){return moduleScenario.features.filter(f=>this.episodes.filter(e=>e.feature===f.id).every(e=>e.done)).length;}
 get activeWork(){return this.episodes.filter(e=>!e.done&&!e.waiting&&!e.blocked).map(e=>({id:e.id,phase:e.phases[e.index]}));}
 missing(e){const ids=e.index===0?e.start||[]:e.index===5?e.delivery||[]:[];return ids.filter(id=>!this.episodes.find(other=>other.id===id).delivered);}
 setScenario(){
  this.key='module';this.elapsed=0;this.requests=0;this.deployments=0;this.cost=0;this.tokens=0;this.rework=0;this.logs=[];this.artifacts=new Map();
  this.episodes=moduleEpisodes.map((e,n)=>({...e,phases:episodePhases(e,n),index:e.initial,phaseTime:0,waiting:false,blocked:false,delivered:false,done:false}));this.selectedId='E-101';
  for(const [path,skill] of [['.darkside/holomaps/MOD-012.md','/quest · módulo e funcionalidades'],['.darkside/war-room/mod-012/module-plan.md','/war-room · contratos e dependências']])this.artifacts.set(path,{path,skill,state:'Contexto simulado'});
  for(const e of this.episodes){for(let i=0;i<e.initial;i++)this.recordArtifact(e,e.phases[i],'Contexto simulado');this.enter(e);if(this.missing(e).length){e.blocked=true;this.log('dependency.blocked',`${e.id} · aguarda ${this.missing(e).join(', ')}`);}}
  this.log('module.snapshot.loaded','MOD-012 · recorte ilustrativo: planos anteriores simulados; seis episódios em andamento');this.emit();
 }
 log(event,text){this.logs.unshift({event,text,at:this.elapsed});this.logs=this.logs.slice(0,80);}
 recordArtifact(e,p,state){this.artifacts.set(p.artifact,{path:p.artifact,skill:`${e.feature} → ${e.id} · ${p.skill}`,state:state|| (p.red?'Teste RED':p.column>=2?'Verificado':'Produzido')});}
 enter(e){const p=e.phases[e.index];e.phaseTime=0;e.waiting=false;e.blocked=false;this.cost+=(p.station==='client'||p.deploy)? .01 : .14;this.tokens+=p.station==='client'||p.deploy?0:18400;this.recordArtifact(e,p);this.log(p.gate?'human_approval.preparing':p.event,`${e.feature} → ${e.id} · ${p.title}`);
  if(p.deploy&&!e.delivered){e.delivered=true;this.deployments++;}
  if(p.outcome){e.done=true;e.phaseTime=p.duration;}
 }
 advance(e){if(e.index<e.phases.length-1){e.index++;this.enter(e);}}
 selectEpisode(id){if(this.episodes.some(e=>e.id===id)){this.selectedId=id;this.emit();}}
 approve(){const e=this.selectedEpisode;if(!e.waiting||this.missing(e).length)return;this.log('human_decision.created',`${e.id} · gate aprovado na simulação`);this.advance(e);this.emit();}
 releaseGates(){for(const e of this.episodes)if(e.waiting&&!this.missing(e).length){this.log('human_decision.created',`${e.id} · aprovação humana simulada`);this.advance(e);}this.emit();}
 update(dt){
  if(!this.running)return;const delta=Math.max(0,Math.min(Number.isFinite(dt)?dt:0,.2))*this.speed;this.elapsed+=delta;this.requests+=delta*8;let changed=false;
  for(const e of this.episodes){if(e.done||e.waiting)continue;const p=e.phases[e.index],missing=this.missing(e);
   if(missing.length){if(!e.blocked){e.blocked=true;this.log('dependency.blocked',`${e.id} · aguarda ${missing.join(', ')}`);changed=true;}continue;}
   if(e.blocked){e.blocked=false;this.log('dependency.unblocked',`${e.id} · dependências liberadas`);changed=true;}
   e.phaseTime+=delta;
   if(e.phaseTime>=p.duration){e.phaseTime=p.duration;if(p.gate&&this.manual){e.waiting=true;this.log('human_approval.requested',`${e.id} · ${p.gate}`);}else{if(p.gate)this.log('human_decision.created',`${e.id} · aprovação humana simulada`);this.advance(e);}changed=true;}
  }
  if(changed)this.emit();
 }
}
