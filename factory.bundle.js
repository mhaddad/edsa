(()=>{var Qt=[{id:"atelie",name:"Ateli\xEA de Software",role:"Empresa respons\xE1vel pelo projeto",kind:"organization",x:-16,z:2,width:10.2,depth:20,color:63891,children:["discovery"],description:"O Ateli\xEA de Software \xE9 a empresa que re\xFAne a equipe respons\xE1vel por descobrir necessidades, desenvolver e desenhar o produto. A \xE1rea Discovery, Dev e Design integra a empresa e trabalha com o cliente, com o Darkside e com os ambientes de entrega.",people:["Product Owner \xB7 produto e prioridades","Designer \xB7 experi\xEAncia e acessibilidade","Desenvolvedores \xB7 arquitetura, implementa\xE7\xE3o e manuten\xE7\xE3o"],tags:["Discovery, Dev e Design","Rela\xE7\xE3o com o cliente","M\xE9todo do Ateli\xEA","Julgamento humano"],files:["Contexto, planos e decis\xF5es do projeto","Artefatos .darkside/ e documenta\xE7\xE3o em docs/"],concept:!1}],yt=[{id:"discovery",name:"Discovery, Dev e Design",role:"Equipe do Ateli\xEA \xB7 produto, engenharia e experi\xEAncia",parent:"atelie",x:-16,z:2,width:7.8,depth:16,kind:"team-design",color:63891,description:"Dentro do Ateli\xEA de Software, a mesma equipe investiga necessidades, define a experi\xEAncia e mant\xE9m o produto em evolu\xE7\xE3o. PO, designer e desenvolvedores trabalham juntos: Quest e Mission estruturam o problema, War Room e Interrogate refinam o plano, e a equipe acompanha a implementa\xE7\xE3o com o Darkside.",people:["Product Owner \xB7 prop\xF3sito, prioridade e descoberta","Designer \xB7 experi\xEAncia, prot\xF3tipos e acessibilidade","Dev backend \xB7 arquitetura, dados e implementa\xE7\xE3o","Dev frontend \xB7 interface e integra\xE7\xE3o","Respons\xE1vel do cliente \xB7 contexto e valida\xE7\xE3o"],tags:["/quest","/war-room","/interrogate","/mission","/design-schematic","/spec-verdict","IDE / CLI","Git","Figma / MCP","Julgamento humano"],files:[".darkside/holocrons/tech.md",".darkside/holomaps/HM-042.md",".darkside/war-room/exportacao-plan.md",".darkside/design-schematic/relatorios.md",".darkside/sith-agents/engineer.md"],concept:!1},{id:"darkside",name:"Darkside",role:"Harness de desenvolvimento \xB7 m\xE9todo execut\xE1vel",x:-6,z:7,color:63891,kind:"harness",description:"Order66 orquestra agentes especializados no contexto do projeto. O ciclo come\xE7a pelos testes, passa pela implementa\xE7\xE3o e pela revis\xE3o. O harness limita o escopo e interrompe tentativas que n\xE3o convergem.",people:["Engineer \xB7 decis\xF5es t\xE9cnicas","TDD \xB7 testes antes do c\xF3digo","Coder backend + frontend \xB7 implementa\xE7\xE3o","Security + Reviewer \xB7 verifica\xE7\xE3o independente"],tags:["/explore","/order66","/hunter","TDD","Sandbox","Skills + tools"],files:[".darkside/imperial-orders/IO-042.md",".darkside/sith-agents/tdd.md",".darkside/sith-agents/coder-backend.md",".darkside/imperial-orders/fallen-orders/"],concept:!1},{id:"memory",name:"Mem\xF3ria .darkside/",role:"Contexto persistente e artefatos reutiliz\xE1veis",x:-6,z:-1,color:55295,kind:"memory",description:"O conhecimento permanece em arquivos version\xE1veis fora das conversas. Tech.md descreve o projeto, agentes s\xE3o adaptados \xE0 arquitetura e cada epis\xF3dio produz planos, investiga\xE7\xF5es e evid\xEAncias reutiliz\xE1veis.",people:["Agentes consultam e atualizam o contexto","Equipe confirma conven\xE7\xF5es e decis\xF5es"],tags:["Holocrons","Holomaps","Sith Agents","Imperial Orders","Provenance"],files:[".darkside/holocrons/tech.md",".darkside/holomaps/",".darkside/war-room/",".darkside/hunter/",".darkside/scribe/","docs/"],concept:!1},{id:"control",name:"Control Plane",role:"Intelig\xEAncia de coordena\xE7\xE3o \xB7 vis\xE3o futura",x:-6,z:-10,color:55295,kind:"control",description:"Recebe eventos do trabalho, relaciona artefatos e infere o estado do fluxo. Work Intelligence coordena o sistema; Strategic Intelligence liga entrega a resultado. Gateway e Router governam modelos, permiss\xF5es e or\xE7amento.",people:["Equipe \xB7 interven\xE7\xF5es em bloqueios","Lideran\xE7a \xB7 custos, riscos e resultados"],tags:["AI Gateway","Model Router","Evidence Graph","Work Intelligence","Strategic Intelligence","Pol\xEDticas / budgets"],files:["Eventos \u2192 rela\xE7\xF5es \u2192 estado inferido","Objetivo \u2192 hip\xF3tese \u2192 feature \u2192 PR \u2192 deploy \u2192 resultado"],concept:!0},{id:"quality",name:"Verifica\xE7\xE3o & Git",role:"Evid\xEAncias de qualidade antes da entrega",x:4,z:8,color:63891,kind:"quality",description:"Testes, auditoria de seguran\xE7a e crit\xE9rios de aceite s\xE3o verificados. Pull requests conectam c\xF3digo e revis\xE3o. Inquisitor faz inspe\xE7\xE3o independente; Verdict verifica o aceite; Probe Droid prepara QA e Scribe documenta o comportamento comprovado.",people:["Reviewer + Security \xB7 auditoria","Designer \xB7 fidelidade visual","QA \xB7 cen\xE1rios de uso"],tags:["/inquisitor","/verdict","/visual-fidelity","/probe-droid","/scribe","Git / PR / CI"],files:[".darkside/the-grand-inquisitor/PR-218.md",".darkside/verdicts/F-042.md",".darkside/probe-droid/PR-218.md","docs/releases/v2.8.5.md"],concept:!1},{id:"homolog",name:"AWS \xB7 Homologa\xE7\xE3o",role:"Ambiente isolado para valida\xE7\xE3o da mudan\xE7a",x:4,z:-4,color:16371714,kind:"staging",description:"O build aprovado \xE9 disponibilizado em homologa\xE7\xE3o, separado de produ\xE7\xE3o. A equipe e o representante do cliente verificam os cen\xE1rios de aceite antes de autorizar a libera\xE7\xE3o. A topologia AWS \xE9 ilustrativa.",people:["QA + PO do cliente \xB7 aceite","Dev \xB7 release e rollback"],tags:["CI/CD","ECS / containers","RDS de testes","Dados de teste","Gate de aceite"],files:["Build vinculado ao commit e ao PR","Resultado de smoke e testes de aceite","Decis\xE3o humana de libera\xE7\xE3o"],concept:!0},{id:"production",name:"AWS \xB7 Produ\xE7\xE3o",role:"Produto dispon\xEDvel, vers\xF5es e observabilidade",x:15,z:-4,color:16371714,kind:"production",description:"O produto existente atende usu\xE1rios durante o desenvolvimento. Uma mudan\xE7a aprovada passa por libera\xE7\xE3o gradual com feature flag, monitoramento e plano de rollback. M\xE9tricas e incidentes realimentam o pr\xF3ximo ciclo.",people:["Dev respons\xE1vel \xB7 libera\xE7\xE3o","Equipe \xB7 resposta a incidentes"],tags:["ALB / ECS","RDS","CloudWatch","Feature flags","Canary / rollback"],files:["deployment.completed","feature_flag.changed","incident.created","business_metric.changed"],concept:!0},{id:"client",name:"Cliente & usu\xE1rios",role:"Nexo \xB7 opera\xE7\xE3o, necessidade e resultado",x:16,z:8,color:55295,kind:"client",description:"A empresa cliente utiliza o portal para sua opera\xE7\xE3o. Seus usu\xE1rios geram tr\xE1fego, sinalizam falhas e oferecem feedback. O respons\xE1vel de neg\xF3cio define o valor esperado e verifica se a entrega melhora a opera\xE7\xE3o.",people:["Respons\xE1vel do cliente \xB7 objetivo e aceite","Usu\xE1rios \xB7 opera\xE7\xE3o di\xE1ria e feedback"],tags:["Uso do produto","Feedback","Objetivos de neg\xF3cio","Resultado observado"],files:["OBJ-07 \xB7 reduzir esfor\xE7o operacional","Hip\xF3tese \u2192 m\xE9trica de uso \u2192 resultado","Feedback retorna ao discovery"],concept:!1}],Pe=(r,e,t,i,n,s,a,o,c={})=>({station:r,kind:e,title:t,description:i,skill:n,artifact:s,event:a,column:o,duration:6,...c}),oc={feature:{prefix:"F",base:42,name:"Exporta\xE7\xE3o de relat\xF3rios",objective:"Reduzir o tempo para preparar relat\xF3rios operacionais.",metric:"Tempo de relat\xF3rio",baseline:"18 min",result:"2 min",explanation:"Resultado ilustrativo ap\xF3s valida\xE7\xE3o pelos usu\xE1rios.",phases:[Pe("client","NECESSIDADE","Uma necessidade nasce na opera\xE7\xE3o","Usu\xE1rios levam 18 minutos para consolidar relat\xF3rios. O cliente solicita uma exporta\xE7\xE3o que reduza esse esfor\xE7o.","Feedback","OBJ-07 \u2192 F-042","user_feedback.received",0),Pe("discovery","DISCOVERY","Investigar o problema e a hip\xF3tese","PO, designer e /quest registram usu\xE1rios, valor esperado, limites e crit\xE9rios de valida\xE7\xE3o.","/quest",".darkside/holomaps/HM-042.md","darkside.holomap.created",0),Pe("discovery","DESIGN","Dar forma \xE0 experi\xEAncia","Designer define os estados da exporta\xE7\xE3o. Spec Verdict relaciona o design aos crit\xE9rios de aceite.","/design-schematic + /spec-verdict",".darkside/design-schematic/relatorios.md","design.acceptance.checked",0),Pe("discovery","PLANO + GATE","Aprovar o plano t\xE9cnico","War Room define processamento ass\xEDncrono, acesso aos dados e riscos; Interrogate questiona pressupostos.","/war-room + /interrogate",".darkside/war-room/exportacao-plan.md","darkside.plan.approved",0,{gate:"A equipe e o respons\xE1vel do cliente aprovam escopo, tratamento dos dados e plano t\xE9cnico.",gateEvent:"human_decision.created"}),Pe("darkside","TDD \xB7 RED","Escrever testes que ainda falham","O agente TDD especifica autoriza\xE7\xE3o e conte\xFAdo do CSV. As falhas esperadas comprovam que a funcionalidade ainda n\xE3o existe.","/order66 \xB7 TDD","spec/requests/report_exports_spec.rb","test.failed",1,{red:!0}),Pe("darkside","IMPLEMENTA\xC7\xC3O","Construir com agentes especializados","Coder backend e frontend implementam o escopo aprovado usando tech.md e os testes. Nenhuma libera\xE7\xE3o \xE9 feita pelos agentes.","/order66 \xB7 Coder",".darkside/imperial-orders/IO-042.md","file.modified",1),Pe("quality","TESTES + REVIEW","Verificar c\xF3digo e seguran\xE7a","Testes passam. Reviewer e Security verificam o PR; Inquisitor avalia riscos e Verdict confirma os crit\xE9rios de aceite.","/inquisitor + /verdict",".darkside/the-grand-inquisitor/PR-218.md","review.approved",2),Pe("quality","QA + DOCUMENTA\xC7\xC3O","Preparar cen\xE1rios e documenta\xE7\xE3o","Probe Droid descreve os testes para QA. Scribe documenta o comportamento comprovado no c\xF3digo e nos testes.","/probe-droid + /scribe",".darkside/probe-droid/PR-218.md","build.completed",2),Pe("homolog","HOMOLOGA\xC7\xC3O","Validar com o cliente","O build vai para o ambiente de teste AWS. QA e o cliente verificam permiss\xF5es, integridade do CSV e tratamento de falhas.","CI/CD + QA","build-219 \xB7 aceite em homologa\xE7\xE3o","test.acceptance.passed",3),Pe("homolog","GATE HUMANO","Autorizar a libera\xE7\xE3o gradual","O respons\xE1vel avalia risco, evid\xEAncias de aceite e plano de rollback antes da libera\xE7\xE3o em produ\xE7\xE3o.","Decis\xE3o humana","DEC-042 \xB7 release aprovada","human_decision.created",3,{gate:"Liberar a exporta\xE7\xE3o com feature flag para 10% dos usu\xE1rios, mantendo rollback dispon\xEDvel."}),Pe("production","DEPLOY","Liberar sem interromper a opera\xE7\xE3o","A vers\xE3o aprovada entra em produ\xE7\xE3o. A feature flag amplia o acesso de 10% a 100% enquanto erros s\xE3o monitorados.","CI/CD + feature flag","deployment \xB7 v2.8.5","deployment.completed",3,{deploy:!0}),Pe("client","RESULTADO","Verificar o valor na opera\xE7\xE3o","Usu\xE1rios completam a tarefa em 2 minutos neste cen\xE1rio fict\xEDcio. A medi\xE7\xE3o se conecta ao objetivo e fecha a hip\xF3tese.","Product analytics","OBJ-07 \u2192 F-042 \u2192 resultado","business_metric.changed",4,{outcome:!0,duration:9})]},bug:{prefix:"B",base:17,name:"Falha ao salvar pedido",objective:"Restabelecer o salvamento confi\xE1vel de pedidos.",metric:"Falhas ao salvar",baseline:"2,3%",result:"0,2%",explanation:"Taxa fict\xEDcia observada ap\xF3s a corre\xE7\xE3o.",phases:[Pe("client","INCIDENTE","Um usu\xE1rio sinaliza uma falha","Pedidos com item duplicado falham ao salvar. A opera\xE7\xE3o segue dispon\xEDvel, mas o problema \xE9 associado a um incidente.","Feedback + observabilidade","INC-017 \xB7 pedido duplicado","incident.created",0),Pe("darkside","INVESTIGA\xC7\xC3O","Localizar a causa, n\xE3o o sintoma","Hunter rastreia defeito \u2192 estado incorreto \u2192 falha. A hip\xF3tese \xE9 uma valida\xE7\xE3o inconsistente de itens duplicados.","/hunter",".darkside/hunter/INC-017.md","darkside.hypothesis.confirmed",0),Pe("discovery","PLANO + GATE","Aprovar uma corre\xE7\xE3o delimitada","A equipe confirma o diagn\xF3stico e aprova uma mudan\xE7a pequena, sem alterar contratos ou reestruturar todo o m\xF3dulo.","/war-room",".darkside/war-room/pedido-fix-plan.md","darkside.plan.approved",0,{gate:"Aprovar o diagn\xF3stico causal e a corre\xE7\xE3o restrita ao salvamento de itens duplicados."}),Pe("darkside","TDD \xB7 RED","Reproduzir a falha em um teste","O teste de regress\xE3o reproduz o erro. Sua falha \xE9 esperada antes da mudan\xE7a e preserva a evid\xEAncia do incidente.","/order66 \xB7 TDD","spec/models/order_regression_spec.rb","test.failed",1,{red:!0}),Pe("darkside","CORRE\xC7\xC3O","Corrigir o defeito identificado","Coder modifica a valida\xE7\xE3o e mant\xE9m o contrato da API. A equipe acompanha o escopo e as evid\xEAncias.","/order66 \xB7 Coder",".darkside/imperial-orders/IO-017.md","file.modified",1),Pe("quality","REVIEW \xB7 REJEITADO","A revis\xE3o encontra um caso faltante","O teste original passa, mas a revis\xE3o detecta uma regress\xE3o com itens sem identifica\xE7\xE3o. A mudan\xE7a retorna \xE0 implementa\xE7\xE3o.","Reviewer + Security",".darkside/the-grand-inquisitor/PR-220.md","review.rejected",2,{red:!0,returnToDev:!0}),Pe("darkside","RETRABALHO","Completar a corre\xE7\xE3o e os testes","Um segundo teste cobre o caso faltante. Coder ajusta a solu\xE7\xE3o dentro do escopo; uma nova revis\xE3o \xE9 solicitada.","/order66 \xB7 TDD + Coder","spec/models/order_regression_spec.rb","test.passed",1),Pe("quality","VERIFICA\xC7\xC3O","Confirmar regress\xE3o e crit\xE9rios de aceite","Reviewer aprova. Inquisitor e Verdict verificam seguran\xE7a e aceite. Probe Droid prepara o cen\xE1rio de reprodu\xE7\xE3o para QA.","/inquisitor + /verdict + /probe-droid",".darkside/verdicts/B-017.md","review.approved",2),Pe("homolog","HOMOLOGA\xC7\xC3O + GATE","Reproduzir e validar com o cliente","QA reproduz o problema em homologa\xE7\xE3o e confirma a corre\xE7\xE3o. O respons\xE1vel aprova a libera\xE7\xE3o controlada.","QA + decis\xE3o humana","DEC-017 \xB7 corre\xE7\xE3o aprovada","test.acceptance.passed",3,{gate:"Liberar a corre\xE7\xE3o ap\xF3s valida\xE7\xE3o dos cen\xE1rios original e de regress\xE3o."}),Pe("production","DEPLOY","Publicar a corre\xE7\xE3o e observar","A nova vers\xE3o \xE9 liberada. O monitoramento verifica a taxa de erro do endpoint; rollback permanece dispon\xEDvel.","CI/CD + observabilidade","deployment \xB7 corre\xE7\xE3o INC-017","deployment.completed",3,{deploy:!0}),Pe("client","RESULTADO","Confirmar a recupera\xE7\xE3o da opera\xE7\xE3o","A taxa simulada de falhas cai de 2,3% para 0,2%. O incidente \xE9 encerrado e Scribe registra o comportamento comprovado.","/scribe + observabilidade","docs/incidents/INC-017.md","incident.resolved",4,{outcome:!0,duration:9})]},improve:{prefix:"M",base:9,name:"Otimiza\xE7\xE3o da consulta de pedidos",objective:"Reduzir a lat\xEAncia da consulta mais utilizada.",metric:"Lat\xEAncia p95",baseline:"820 ms",result:"260 ms",explanation:"Valores fict\xEDcios para a consulta monitorada.",phases:[Pe("production","OBSERVABILIDADE","Detectar uma degrada\xE7\xE3o recorrente","O monitoramento registra p95 de 820 ms na consulta de pedidos. O produto segue funcionando enquanto a equipe analisa.","CloudWatch + m\xE9tricas","OBS-009 \xB7 lat\xEAncia de consulta","product_metric.observed",0),Pe("discovery","MISS\xC3O","Relacionar melhoria ao uso real","Mission delimita a otimiza\xE7\xE3o da consulta mais usada. O cliente confirma a prioridade e o limite de altera\xE7\xE3o.","/mission",".darkside/missions/consulta-pedidos.md","darkside.mission.created",0),Pe("memory","CONTEXTO","Reutilizar a arquitetura documentada","Explore consulta a estrutura, conven\xE7\xF5es e depend\xEAncias. A equipe confirma tech.md e os agentes especializados.","/explore",".darkside/holocrons/tech.md","context.loaded",0),Pe("discovery","PLANO + GATE","Aprovar \xEDndice e rollout seguro","War Room planeja um \xEDndice criado de forma concorrente. A altera\xE7\xE3o de banco exige an\xE1lise humana e rollback expl\xEDcito.","/war-room + /interrogate",".darkside/war-room/indice-plan.md","darkside.plan.approved",0,{gate:"Aprovar a cria\xE7\xE3o concorrente do \xEDndice, a janela de execu\xE7\xE3o e os limites de carga."}),Pe("darkside","TDD \xB7 RED","Fixar comportamento e or\xE7amento de consulta","TDD protege a resposta e estabelece um limite de consultas. A vers\xE3o atual ultrapassa o or\xE7amento do teste.","/order66 \xB7 TDD","spec/performance/orders_spec.rb","test.failed",1,{red:!0}),Pe("darkside","REFATORA\xC7\xC3O","Eliminar consultas redundantes","Coder remove N+1 e prepara a migra\xE7\xE3o concorrente. A resposta da API \xE9 preservada e a mudan\xE7a fica limitada ao m\xF3dulo.","/order66 \xB7 Coder",".darkside/imperial-orders/IO-009.md","file.modified",1),Pe("quality","VERIFICA\xC7\xC3O","Verificar equival\xEAncia e desempenho","Testes de regress\xE3o, benchmark e Inquisitor verificam a altera\xE7\xE3o. Reviewer confirma o plano de execu\xE7\xE3o da migra\xE7\xE3o.","/inquisitor + Reviewer",".darkside/the-grand-inquisitor/PR-221.md","review.approved",2),Pe("homolog","CARGA + GATE","Testar antes de alterar produ\xE7\xE3o","Homologa\xE7\xE3o executa a carga simulada e verifica locks. O respons\xE1vel avalia as evid\xEAncias antes de liberar a migra\xE7\xE3o.","QA + decis\xE3o humana","DEC-009 \xB7 migra\xE7\xE3o aprovada","test.load.passed",3,{gate:"Autorizar a migra\xE7\xE3o concorrente ap\xF3s teste de carga e verifica\xE7\xE3o de locks."}),Pe("production","DEPLOY","Executar migra\xE7\xE3o com monitoramento","A equipe libera a vers\xE3o aprovada e observa dura\xE7\xE3o, locks e erros. N\xE3o h\xE1 acesso aut\xF4nomo do agente ao banco de produ\xE7\xE3o.","CI/CD + observabilidade","deployment \xB7 otimiza\xE7\xE3o OBS-009","deployment.completed",3,{deploy:!0}),Pe("client","RESULTADO","Medir a melhoria experimentada","A lat\xEAncia p95 simulada cai para 260 ms. O resultado se conecta \xE0 hip\xF3tese; Scribe atualiza a documenta\xE7\xE3o humana.","Analytics + /scribe","docs/performance/consulta-pedidos.md","business_metric.changed",4,{outcome:!0,duration:9})]}},tr=class{constructor(e="feature"){this.listeners=[],this.running=!0,this.speed=1,this.manual=!1,this.elapsed=0,this.setScenario(e)}onChange(e){return this.listeners.push(e),()=>this.listeners=this.listeners.filter(t=>t!==e)}emit(){this.listeners.forEach(e=>e(this))}get phaseCount(){return this.scenario.phases.length}get scenario(){return oc[this.key]}get phase(){return this.scenario.phases[this.index]}get episodeId(){return`${this.scenario.prefix}-${String(this.scenario.base+this.cycle).padStart(3,"0")}`}get version(){return`v2.8.${4+this.deployments}`}setScenario(e){oc[e]&&(this.key=e,this.index=0,this.phaseTime=0,this.elapsed=0,this.cycle=0,this.deployments=0,this.cost=0,this.tokens=0,this.completed=!1,this.waiting=!1,this.rework=0,this.requests=0,this.artifacts=new Map,this.logs=[],this.enterPhase(),this.emit())}log(e,t){this.logs.unshift({event:e,text:t,at:this.elapsed}),this.logs=this.logs.slice(0,40)}enterPhase(){let e=this.phase;this.waiting=!1,this.phaseTime=0,this.cost+=e.kind.includes("DEPLOY")||e.station==="client"?.01:.14,this.tokens+=e.station==="client"||e.station==="production"?0:18400,this.log(e.gate?"human_approval.preparing":e.event,`${this.episodeId} \xB7 ${e.title}`),e.returnToDev&&this.rework++,e.deploy&&this.deployments++,e.outcome&&(this.completed=!0),(e.artifact.startsWith(".darkside/")||e.artifact.startsWith("docs/")||e.artifact.startsWith("spec/"))&&this.artifacts.set(e.artifact,{path:e.artifact,skill:e.skill,phase:e.title,state:e.red?"Teste RED":e.outcome||e.column>=2?"Verificado":"Produzido"})}approve(){this.waiting&&(this.log(this.phase.gateEvent||"human_decision.created",`${this.episodeId} \xB7 gate aprovado na simula\xE7\xE3o`),this.waiting=!1,this.advance(),this.emit())}advance(){this.index<this.scenario.phases.length-1?(this.index++,this.enterPhase()):(this.cycle++,this.index=0,this.completed=!1,this.artifacts.clear(),this.enterPhase())}update(e){if(!this.running)return;let t=Math.max(0,Math.min(Number.isFinite(e)?e:0,.2))*this.speed;this.elapsed+=t,this.requests+=t*8,this.waiting||(this.phaseTime+=t,this.phaseTime>=this.phase.duration&&(this.phase.gate&&this.manual?(this.waiting=!0,this.log("human_approval.requested",this.phase.gate)):(this.phase.gate&&this.log(this.phase.gateEvent||"human_decision.created",`${this.episodeId} \xB7 aprova\xE7\xE3o humana simulada`),this.advance()),this.emit()))}},lc={id:"MOD-012",name:"Gest\xE3o de solicita\xE7\xF5es",features:[{id:"F-101",name:"Cadastro de solicita\xE7\xF5es"},{id:"F-102",name:"Triagem e atribui\xE7\xE3o"},{id:"F-103",name:"Notifica\xE7\xF5es"},{id:"F-104",name:"Indicadores operacionais"}]},Mu=[{id:"E-101",feature:"F-101",name:"API de solicita\xE7\xF5es",initial:2},{id:"E-102",feature:"F-101",name:"Formul\xE1rio de solicita\xE7\xE3o",initial:1,delivery:["E-101"]},{id:"E-103",feature:"F-102",name:"Regras de triagem",initial:0,start:["E-101"]},{id:"E-104",feature:"F-102",name:"Quadro de triagem",initial:2,delivery:["E-103"]},{id:"E-105",feature:"F-103",name:"Alertas e notifica\xE7\xF5es",initial:3,delivery:["E-101"]},{id:"E-106",feature:"F-104",name:"Painel de indicadores",initial:0,delivery:["E-101","E-103"]}];function Su(r,e){let t=`.darkside/war-room/mod-012/${r.id}`,i=`${r.feature} \xB7 ${r.name}`;return[Pe("discovery","PLANO + GATE","Refinar e aprovar o epis\xF3dio",`${i}. A equipe revisa escopo, contrato e crit\xE9rios de aceite dentro do plano do m\xF3dulo.`,"/war-room + /interrogate",`${t}-plan.md`,"darkside.plan.created",0,{gate:`Aprovar o plano de ${r.id}, seus contratos e crit\xE9rios de aceite.`}),Pe("darkside","TDD \xB7 RED","Definir o comportamento em testes",`${i}. TDD cria os testes; a falha esperada precede a implementa\xE7\xE3o.`,"/order66 \xB7 TDD",`spec/mod-012/${r.id}_spec.rb`,"test.failed",1,{red:!0}),Pe("darkside","IMPLEMENTA\xC7\xC3O","Construir o escopo aprovado",`${i}. Coder implementa com contratos e mocks quando necess\xE1rio. A integra\xE7\xE3o depende das entregas indicadas no card.`,"/order66 \xB7 Coder",`.darkside/imperial-orders/mod-012/IO-${r.id}.md`,"file.modified",1),Pe("quality","REVIEW","Revisar c\xF3digo e seguran\xE7a",`${i}. Inquisitor e Verdict verificam c\xF3digo, seguran\xE7a e crit\xE9rios de aceite.`,"/inquisitor + /verdict",`.darkside/the-grand-inquisitor/mod-012/${r.id}.md`,"review.approved",2),Pe("quality","QA + DOCUMENTA\xC7\xC3O","Verificar cen\xE1rios e registrar evid\xEAncias",`${i}. Probe Droid prepara QA; Scribe registra o comportamento comprovado.`,"/probe-droid + /scribe",`.darkside/probe-droid/mod-012/${r.id}.md`,"build.completed",2),Pe("homolog","ACEITE + GATE","Integrar e autorizar a entrega",`${i}. Homologa\xE7\xE3o valida a integra\xE7\xE3o ap\xF3s as depend\xEAncias serem liberadas. O cliente autoriza a entrega com feature flag e rollback.`,"QA + decis\xE3o humana",`${t}-aceite.md`,"test.acceptance.passed",3,{gate:`Liberar ${r.id} ap\xF3s validar integra\xE7\xE3o, evid\xEAncias e rollback.`}),Pe("production","DEPLOY","Liberar o epis\xF3dio em produ\xE7\xE3o",`${i}. A equipe libera uma mudan\xE7a incremental com feature flag, mantendo a opera\xE7\xE3o do portal.`,"CI/CD + feature flag",`docs/releases/mod-012/${r.id}.md`,"deployment.completed",3,{deploy:!0}),Pe("client","RESULTADO","Validar o epis\xF3dio no uso",`${i}. Os usu\xE1rios verificam o comportamento entregue neste exemplo fict\xEDcio. A funcionalidade conclui quando todos os seus epis\xF3dios forem validados.`,"Analytics + /scribe",`docs/results/mod-012/${r.id}.md`,"business_metric.changed",4,{outcome:!0})].map((n,s)=>({...n,duration:5+(e+s)%3}))}var es=class{constructor(){this.listeners=[],this.running=!0,this.speed=1,this.manual=!1,this.setScenario()}onChange(e){return this.listeners.push(e),()=>this.listeners=this.listeners.filter(t=>t!==e)}emit(){this.listeners.forEach(e=>e(this))}get scenario(){return lc}get selectedEpisode(){return this.episodes.find(e=>e.id===this.selectedId)}get phase(){return this.selectedEpisode.phases[this.index]}get index(){return this.selectedEpisode.index}get phaseTime(){return this.selectedEpisode.phaseTime}get phaseCount(){return this.selectedEpisode.phases.length}get episodeId(){return this.selectedId}get waiting(){return this.selectedEpisode.waiting}get version(){return`v2.8.${4+this.deployments}`}get completed(){return this.episodes.every(e=>e.done)}get validatedFeatures(){return lc.features.filter(e=>this.episodes.filter(t=>t.feature===e.id).every(t=>t.done)).length}get activeWork(){return this.episodes.filter(e=>!e.done&&!e.waiting&&!e.blocked).map(e=>({id:e.id,phase:e.phases[e.index]}))}missing(e){return(e.index===0?e.start||[]:e.index===5?e.delivery||[]:[]).filter(i=>!this.episodes.find(n=>n.id===i).delivered)}setScenario(){this.key="module",this.elapsed=0,this.requests=0,this.deployments=0,this.cost=0,this.tokens=0,this.rework=0,this.logs=[],this.artifacts=new Map,this.episodes=Mu.map((e,t)=>({...e,phases:Su(e,t),index:e.initial,phaseTime:0,waiting:!1,blocked:!1,delivered:!1,done:!1})),this.selectedId="E-101";for(let[e,t]of[[".darkside/holomaps/MOD-012.md","/quest \xB7 m\xF3dulo e funcionalidades"],[".darkside/war-room/mod-012/module-plan.md","/war-room \xB7 contratos e depend\xEAncias"]])this.artifacts.set(e,{path:e,skill:t,state:"Contexto simulado"});for(let e of this.episodes){for(let t=0;t<e.initial;t++)this.recordArtifact(e,e.phases[t],"Contexto simulado");this.enter(e),this.missing(e).length&&(e.blocked=!0,this.log("dependency.blocked",`${e.id} \xB7 aguarda ${this.missing(e).join(", ")}`))}this.log("module.snapshot.loaded","MOD-012 \xB7 recorte ilustrativo: planos anteriores simulados; seis epis\xF3dios em andamento"),this.emit()}log(e,t){this.logs.unshift({event:e,text:t,at:this.elapsed}),this.logs=this.logs.slice(0,80)}recordArtifact(e,t,i){this.artifacts.set(t.artifact,{path:t.artifact,skill:`${e.feature} \u2192 ${e.id} \xB7 ${t.skill}`,state:i||(t.red?"Teste RED":t.column>=2?"Verificado":"Produzido")})}enter(e){let t=e.phases[e.index];e.phaseTime=0,e.waiting=!1,e.blocked=!1,this.cost+=t.station==="client"||t.deploy?.01:.14,this.tokens+=t.station==="client"||t.deploy?0:18400,this.recordArtifact(e,t),this.log(t.gate?"human_approval.preparing":t.event,`${e.feature} \u2192 ${e.id} \xB7 ${t.title}`),t.deploy&&!e.delivered&&(e.delivered=!0,this.deployments++),t.outcome&&(e.done=!0,e.phaseTime=t.duration)}advance(e){e.index<e.phases.length-1&&(e.index++,this.enter(e))}selectEpisode(e){this.episodes.some(t=>t.id===e)&&(this.selectedId=e,this.emit())}approve(){let e=this.selectedEpisode;!e.waiting||this.missing(e).length||(this.log("human_decision.created",`${e.id} \xB7 gate aprovado na simula\xE7\xE3o`),this.advance(e),this.emit())}releaseGates(){for(let e of this.episodes)e.waiting&&!this.missing(e).length&&(this.log("human_decision.created",`${e.id} \xB7 aprova\xE7\xE3o humana simulada`),this.advance(e));this.emit()}update(e){if(!this.running)return;let t=Math.max(0,Math.min(Number.isFinite(e)?e:0,.2))*this.speed;this.elapsed+=t,this.requests+=t*8;let i=!1;for(let n of this.episodes){if(n.done||n.waiting)continue;let s=n.phases[n.index],a=this.missing(n);if(a.length){n.blocked||(n.blocked=!0,this.log("dependency.blocked",`${n.id} \xB7 aguarda ${a.join(", ")}`),i=!0);continue}n.blocked&&(n.blocked=!1,this.log("dependency.unblocked",`${n.id} \xB7 depend\xEAncias liberadas`),i=!0),n.phaseTime+=t,n.phaseTime>=s.duration&&(n.phaseTime=s.duration,s.gate&&this.manual?(n.waiting=!0,this.log("human_approval.requested",`${n.id} \xB7 ${s.gate}`)):(s.gate&&this.log("human_decision.created",`${n.id} \xB7 aprova\xE7\xE3o humana simulada`),this.advance(n)),i=!0)}i&&this.emit()}};var Ot={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zt={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zc=0,zo=1,kc=2;var ko=1,fa=2,li=3,Wn=0,It=1,Lt=2,ki=0,Gr=1,Go=2,Vo=3,Ho=4,Gc=5,jn=100,Vc=101,Hc=102,Wc=103,jc=104,Xc=200,qc=201,Yc=202,Zc=203,$c=204,Jc=205,Kc=206,Qc=207,eh=208,th=209,ih=210,nh=211,rh=212,sh=213,ah=214,ga=0,_a=1,va=2,Vr=3,xa=4,ya=5,Ma=6,Sa=7,oh=0,lh=1,ch=2,Ti=0,hh=1,uh=2,dh=3,ba=4,ph=5,mh=6,fh=7;var Wo=300,Xn=301,nn=302,Ta=303,Ea=304,Hr=306,Rs=1e3,Rn=1001,Cs=1002,ni=1003,gh=1004;var Wr=1005;var ri=1006,wa=1007;var rn=1008;var ci=1009,jo=1010,Xo=1011,qn=1012,Aa=1013,sn=1014,hi=1015,Yn=1016,Ra=1017,Ca=1018,Zn=1020,qo=35902,Yo=35899,_h=1021,vh=1022,$t=1023,jr=1026,Xr=1027,Zo=1028,Pa=1029,xh=1030,$o=1031;var Jo=1033,Ia=33776,La=33777,Da=33778,Ua=33779,Ko=35840,Qo=35841,el=35842,tl=35843,il=36196,nl=37492,rl=37496,sl=37808,al=37809,ol=37810,ll=37811,cl=37812,hl=37813,ul=37814,dl=37815,pl=37816,ml=37817,fl=37818,gl=37819,_l=37820,vl=37821,xl=36492,yl=36494,Ml=36495,Sl=36283,bl=36284,Tl=36285,El=36286;var ur=2300,Ps=2301,As=2302,Ao=2400,Ro=2401,Co=2402;var yh=3201;var Mh=0,Sh=1,an="",vt="srgb",$i="srgb-linear",dr="linear",Xe="srgb";var Zi=7680;var bh=512,Th=513,Eh=514,wl=515,wh=516,Ah=517,Rh=518,Ch=519,Po=35044;var Al="300 es",Mi=2e3,pr=2001;var si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cc=1234567,wn=Math.PI/180,Cn=180/Math.PI;function on(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(gt[255&r]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]+"-"+gt[255&e]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[63&t|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[255&i]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function Ie(r,e,t){return Math.max(e,Math.min(t,r))}function Io(r,e){return(r%e+e)%e}function lr(r,e,t){return(1-t)*r+t*e}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var qr={DEG2RAD:wn,RAD2DEG:Cn,generateUUID:on,clamp:Ie,euclideanModulo:Io,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:lr,damp:function(r,e,t,i){return lr(r,e,1-Math.exp(-t*i))},pingpong:function(r,e=1){return e-Math.abs(Io(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(cc=r);let e=cc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*wn},radToDeg:function(r){return r*Cn},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*m,o*l);break;case"YXY":r.set(c*m,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:Mt,denormalize:En},J=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ie(this.x,e.x,t.x),this.y=Ie(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ie(this.x,e,t),this.y=Ie(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ie(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=m,e[t+2]=g,void(e[t+3]=x);if(u!==x||c!==d||l!==m||h!==g){let p=1-o,f=c*d+l*m+h*g+u*x,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let A=Math.sqrt(v),R=Math.atan2(A,f*_);p=Math.sin(p*R)/A,o=Math.sin(o*R)/A}let M=o*_;if(c=c*p+d*M,l=l*p+m*M,h=h*p+g*M,u=u*p+x*M,p===1-o){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-o*m,e[t+2]=l*g+h*m+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),u=o(s/2),d=c(i/2),m=c(n/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-n)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(s+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(s-l)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-n)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ie(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+n*l-s*c,this._y=n*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=n+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ie(this.x,e.x,t.x),this.y=Ie(this.y,e.y,t.y),this.z=Ie(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ie(this.x,e,t),this.y=Ie(this.y,e,t),this.z=Ie(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ie(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ka=new T,hc=new Tt,Re=class r{constructor(e,t,i,n,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l)}set(e,t,i,n,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],x=n[0],p=n[3],f=n[6],_=n[1],v=n[4],M=n[7],A=n[2],R=n[5],I=n[8];return s[0]=a*x+o*_+c*A,s[3]=a*p+o*v+c*R,s[6]=a*f+o*M+c*I,s[1]=l*x+h*_+u*A,s[4]=l*p+h*v+u*R,s[7]=l*f+h*M+u*I,s[2]=d*x+m*_+g*A,s[5]=d*p+m*v+g*R,s[8]=d*f+m*M+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+n*s*l-n*a*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,m=l*s-a*c,g=t*u+i*d+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(n*l-h*i)*x,e[2]=(o*i-n*a)*x,e[3]=d*x,e[4]=(h*t-n*c)*x,e[5]=(n*s-o*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qa=new Re;function Rl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function mr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ph(){let r=mr("canvas");return r.style.display="block",r}var uc={};function Pn(r){r in uc||(uc[r]=!0,console.warn(r))}function Ih(r,e,t){return new Promise(function(i,n){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var dc=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pc=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bu(){let r={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(n,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Xe&&(n.r=yi(n.r),n.g=yi(n.g),n.b=yi(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Xe&&(n.r=An(n.r),n.g=An(n.g),n.b=An(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===""?dr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Pn("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Pn("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[$i]:{primaries:e,whitePoint:i,transfer:dr,toXYZ:dc,fromXYZ:pc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:i,transfer:Xe,toXYZ:dc,fromXYZ:pc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),r}var Ve=bu();function yi(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function An(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var mn,Is=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{mn===void 0&&(mn=mr("canvas")),mn.width=e.width,mn.height=e.height;let n=mn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=mn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*yi(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*yi(t[i]/255)):t[i]=yi(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tu=0,In=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(eo(n[a].image)):s.push(eo(n[a]))}else s=eo(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function eo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Is.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Eu=0,to=new T,bt=class r extends si{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=on(),this.name="",this.source=new In(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(to).x}get height(){return this.source.getSize(to).y}get depth(){return this.source.getSize(to).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bt.DEFAULT_IMAGE=null,bt.DEFAULT_MAPPING=Wo,bt.DEFAULT_ANISOTROPY=1;var Ze=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],x=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,M=(m+1)/2,A=(f+1)/2,R=(h+d)/4,I=(u+x)/4,N=(g+p)/4;return v>M&&v>A?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=R/i,s=I/i):M>A?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=R/n,s=N/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=I/s,n=N/s),this.set(i,n,s,t),this}let _=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ie(this.x,e.x,t.x),this.y=Ie(this.y,e.y,t.y),this.z=Ie(this.z,e.z,t.z),this.w=Ie(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ie(this.x,e,t),this.y=Ie(this.y,e,t),this.z=Ie(this.z,e,t),this.w=Ie(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ls=class extends si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);let n={width:e,height:t,depth:i.depth},s=new bt(n);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new In(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends Ls{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},fr=class extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ni,this.minFilter=ni,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ds=class extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ni,this.minFilter=ni,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jt=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gt):Gt.fromBufferAttribute(s,a),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ts.copy(i.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),is.subVectors(this.max,ir),fn.subVectors(e.a,ir),gn.subVectors(e.b,ir),_n.subVectors(e.c,ir),Ai.subVectors(gn,fn),Ri.subVectors(_n,gn),ji.subVectors(fn,_n);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-ji.z,ji.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,ji.z,0,-ji.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-ji.y,ji.x,0];return!!io(t,fn,gn,_n,is)&&(t=[1,0,0,0,1,0,0,0,1],!!io(t,fn,gn,_n,is)&&(ns.crossVectors(Ai,Ri),t=[ns.x,ns.y,ns.z],io(t,fn,gn,_n,is)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Gt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mi=[new T,new T,new T,new T,new T,new T,new T,new T],Gt=new T,ts=new jt,fn=new T,gn=new T,_n=new T,Ai=new T,Ri=new T,ji=new T,ir=new T,is=new T,ns=new T,Xi=new T;function io(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Xi.fromArray(r,s);let o=n.x*Math.abs(Xi.x)+n.y*Math.abs(Xi.y)+n.z*Math.abs(Xi.z),c=e.dot(Xi),l=t.dot(Xi),h=i.dot(Xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var wu=new jt,nr=new T,no=new T,Xt=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):wu.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);let t=nr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(nr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(no)),this.expandByPoint(nr.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fi=new T,ro=new T,rs=new T,Ci=new T,so=new T,ss=new T,ao=new T,oi=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){ro.copy(e).add(t).multiplyScalar(.5),rs.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(ro);let s=.5*e.distanceTo(t),a=-this.direction.dot(rs),o=Ci.dot(this.direction),c=-Ci.dot(rs),l=Ci.lengthSq(),h=Math.abs(1-a*a),u,d,m,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ro).addScaledVector(rs,d),m}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let i=fi.dot(this.direction),n=fi.dot(fi)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>n?null:((o>i||i!=i)&&(i=o),(c<n||n!=n)&&(n=c),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,n,s){so.subVectors(t,e),ss.subVectors(i,e),ao.crossVectors(so,ss);let a,o=this.direction.dot(ao);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ci.subVectors(this.origin,e);let c=a*this.direction.dot(ss.crossVectors(Ci,ss));if(c<0)return null;let l=a*this.direction.dot(so.cross(Ci));if(l<0||c+l>o)return null;let h=-a*Ci.dot(ao);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class r{constructor(e,t,i,n,s,a,o,c,l,h,u,d,m,g,x,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l,h,u,d,m,g,x,p)}set(e,t,i,n,s,a,o,c,l,h,u,d,m,g,x,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/vn.setFromMatrixColumn(e,0).length(),s=1/vn.setFromMatrixColumn(e,1).length(),a=1/vn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,m=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,g=l*h,x=l*u;t[0]=d+x*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,g=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Au,e,Ru)}lookAt(e,t,i){let n=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),Pi.crossVectors(i,wt),Pi.lengthSq()===0&&(Math.abs(i.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),Pi.crossVectors(i,wt)),Pi.normalize(),as.crossVectors(wt,Pi),n[0]=Pi.x,n[4]=as.x,n[8]=wt.x,n[1]=Pi.y,n[5]=as.y,n[9]=wt.y,n[2]=Pi.z,n[6]=as.z,n[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],x=i[6],p=i[10],f=i[14],_=i[3],v=i[7],M=i[11],A=i[15],R=n[0],I=n[4],N=n[8],U=n[12],B=n[1],H=n[5],F=n[9],Y=n[13],G=n[2],q=n[6],Z=n[10],re=n[14],Q=n[3],pe=n[7],ve=n[11],fe=n[15];return s[0]=a*R+o*B+c*G+l*Q,s[4]=a*I+o*H+c*q+l*pe,s[8]=a*N+o*F+c*Z+l*ve,s[12]=a*U+o*Y+c*re+l*fe,s[1]=h*R+u*B+d*G+m*Q,s[5]=h*I+u*H+d*q+m*pe,s[9]=h*N+u*F+d*Z+m*ve,s[13]=h*U+u*Y+d*re+m*fe,s[2]=g*R+x*B+p*G+f*Q,s[6]=g*I+x*H+p*q+f*pe,s[10]=g*N+x*F+p*Z+f*ve,s[14]=g*U+x*Y+p*re+f*fe,s[3]=_*R+v*B+M*G+A*Q,s[7]=_*I+v*H+M*q+A*pe,s[11]=_*N+v*F+M*Z+A*ve,s[15]=_*U+v*Y+M*re+A*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14];return e[3]*(+s*c*u-n*l*u-s*o*d+i*l*d+n*o*m-i*c*m)+e[7]*(+t*c*m-t*l*d+s*a*d-n*a*m+n*l*h-s*c*h)+e[11]*(+t*l*u-t*o*m-s*a*u+i*a*m+s*o*h-i*l*h)+e[15]*(-n*o*h-t*c*u+t*o*d+n*a*u-i*a*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],x=e[13],p=e[14],f=e[15],_=u*p*l-x*d*l+x*c*m-o*p*m-u*c*f+o*d*f,v=g*d*l-h*p*l-g*c*m+a*p*m+h*c*f-a*d*f,M=h*x*l-g*u*l+g*o*m-a*x*m-h*o*f+a*u*f,A=g*u*c-h*x*c-g*o*d+a*x*d+h*o*p-a*u*p,R=t*_+i*v+n*M+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return e[0]=_*I,e[1]=(x*d*s-u*p*s-x*n*m+i*p*m+u*n*f-i*d*f)*I,e[2]=(o*p*s-x*c*s+x*n*l-i*p*l-o*n*f+i*c*f)*I,e[3]=(u*c*s-o*d*s-u*n*l+i*d*l+o*n*m-i*c*m)*I,e[4]=v*I,e[5]=(h*p*s-g*d*s+g*n*m-t*p*m-h*n*f+t*d*f)*I,e[6]=(g*c*s-a*p*s-g*n*l+t*p*l+a*n*f-t*c*f)*I,e[7]=(a*d*s-h*c*s+h*n*l-t*d*l-a*n*m+t*c*m)*I,e[8]=M*I,e[9]=(g*u*s-h*x*s-g*i*m+t*x*m+h*i*f-t*u*f)*I,e[10]=(a*x*s-g*o*s+g*i*l-t*x*l-a*i*f+t*o*f)*I,e[11]=(h*o*s-a*u*s-h*i*l+t*u*l+a*i*m-t*o*m)*I,e[12]=A*I,e[13]=(h*x*n-g*u*n+g*i*d-t*x*d-h*i*p+t*u*p)*I,e[14]=(g*o*n-a*x*n-g*i*c+t*x*c+a*i*p-t*o*p)*I,e[15]=(a*u*n-h*o*n+h*i*c-t*u*c-a*i*d+t*o*d)*I,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,m=s*h,g=s*u,x=a*h,p=a*u,f=o*u,_=c*l,v=c*h,M=c*u,A=i.x,R=i.y,I=i.z;return n[0]=(1-(x+f))*A,n[1]=(m+M)*A,n[2]=(g-v)*A,n[3]=0,n[4]=(m-M)*R,n[5]=(1-(d+f))*R,n[6]=(p+_)*R,n[7]=0,n[8]=(g+v)*I,n[9]=(p-_)*I,n[10]=(1-(d+x))*I,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=vn.set(n[0],n[1],n[2]).length(),a=vn.set(n[4],n[5],n[6]).length(),o=vn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Vt.copy(this);let c=1/s,l=1/a,h=1/o;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=l,Vt.elements[5]*=l,Vt.elements[6]*=l,Vt.elements[8]*=h,Vt.elements[9]*=h,Vt.elements[10]*=h,t.setFromRotationMatrix(Vt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(i-n),d=(t+e)/(t-e),m=(i+n)/(i-n),g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===Mi)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else{if(o!==pr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);g=-a/(a-s),x=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),m=-(i+n)/(i-n),g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===Mi)g=-2/(a-s),x=-(a+s)/(a-s);else{if(o!==pr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=-1/(a-s),x=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},vn=new T,Vt=new Le,Au=new T(0,0,0),Ru=new T(1,1,1),Pi=new T,as=new T,wt=new T,mc=new Le,fc=new Tt,qt=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],u=n[2],d=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fc.setFromEuler(this),this.setFromQuaternion(fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qt.DEFAULT_ORDER="XYZ";var Ln=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Cu=0,gc=new T,xn=new Tt,gi=new Le,os=new T,rr=new T,Pu=new T,Iu=new Tt,_c=new T(1,0,0),vc=new T(0,1,0),xc=new T(0,0,1),yc={type:"added"},Lu={type:"removed"},yn={type:"childadded",child:null},oo={type:"childremoved",child:null},pt=class r extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new T,t=new qt,i=new Tt,n=new T(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Le},normalMatrix:{value:new Re}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ln,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.multiply(xn),this}rotateOnWorldAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.premultiply(xn),this}rotateX(e){return this.rotateOnAxis(_c,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return gc.copy(e).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_c,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?os.copy(e):os.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(rr,os,this.up):gi.lookAt(os,rr,this.up),this.quaternion.setFromRotationMatrix(gi),n&&(gi.extractRotation(n.matrixWorld),xn.setFromRotationMatrix(gi),this.quaternion.premultiply(xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yc),yn.child=e,this.dispatchEvent(yn),yn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lu),oo.child=e,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yc),yn.child=e,this.dispatchEvent(yn),yn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Pu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Iu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};pt.DEFAULT_UP=new T(0,1,0),pt.DEFAULT_MATRIX_AUTO_UPDATE=!0,pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ht=new T,_i=new T,lo=new T,vi=new T,Mn=new T,Sn=new T,Mc=new T,co=new T,ho=new T,uo=new T,po=new Ze,mo=new Ze,fo=new Ze,xi=class r{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ht.subVectors(e,t),n.cross(Ht);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ht.subVectors(n,t),_i.subVectors(i,t),lo.subVectors(e,t);let a=Ht.dot(Ht),o=Ht.dot(_i),c=Ht.dot(lo),l=_i.dot(_i),h=_i.dot(lo),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,vi)!==null&&vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,n,s,a,o,c){return this.getBarycoord(e,t,i,n,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(o,vi.z),c)}static getInterpolatedAttribute(e,t,i,n,s,a){return po.setScalar(0),mo.setScalar(0),fo.setScalar(0),po.fromBufferAttribute(e,t),mo.fromBufferAttribute(e,i),fo.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(po,s.x),a.addScaledVector(mo,s.y),a.addScaledVector(fo,s.z),a}static isFrontFacing(e,t,i,n){return Ht.subVectors(i,t),_i.subVectors(e,t),Ht.cross(_i).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),.5*Ht.cross(_i).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Mn.subVectors(n,i),Sn.subVectors(s,i),co.subVectors(e,i);let c=Mn.dot(co),l=Sn.dot(co);if(c<=0&&l<=0)return t.copy(i);ho.subVectors(e,n);let h=Mn.dot(ho),u=Sn.dot(ho);if(h>=0&&u<=h)return t.copy(n);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Mn,a);uo.subVectors(e,s);let m=Mn.dot(uo),g=Sn.dot(uo);if(g>=0&&m<=g)return t.copy(s);let x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Sn,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Mc.subVectors(s,n),o=(u-h)/(u-h+(m-g)),t.copy(n).addScaledVector(Mc,o);let f=1/(p+x+d);return a=x*f,o=d*f,t.copy(i).addScaledVector(Mn,a).addScaledVector(Sn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},ls={h:0,s:0,l:0};function go(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ve.workingColorSpace){if(e=Io(e,1),t=Ie(t,0,1),i=Ie(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=go(a,s,e+1/3),this.g=go(a,s,e),this.b=go(a,s,e-1/3)}return Ve.colorSpaceToWorking(this,n),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let i=Lh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Ve.workingToColorSpace(_t.copy(this),e),65536*Math.round(Ie(255*_t.r,0,255))+256*Math.round(Ie(255*_t.g,0,255))+Math.round(Ie(255*_t.b,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(_t.copy(this),t);let i=_t.r,n=_t.g,s=_t.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(n-s)/u+(n<s?6:0);break;case n:c=(s-i)/u+2;break;case s:c=(i-n)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=vt){Ve.workingToColorSpace(_t.copy(this),e);let t=_t.r,i=_t.g,n=_t.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(ls);let i=lr(Ii.h,ls.h,t),n=lr(Ii.s,ls.s,t),s=lr(Ii.l,ls.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_t=new De;De.NAMES=Lh;var Du=0,Si=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=on(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ni=class extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zp=Uu();function Uu(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[256|c]=32768,n[c]=24,n[256|c]=24):l<-14?(i[c]=1024>>-l-14,i[256|c]=1024>>-l-14|32768,n[c]=-l-1,n[256|c]=-l-1):l<=15?(i[c]=l+15<<10,i[256|c]=l+15<<10|32768,n[c]=13,n[256|c]=13):l<128?(i[c]=31744,i[256|c]=64512,n[c]=24,n[256|c]=24):(i[c]=31744,i[256|c]=64512,n[c]=13,n[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var at=new T,cs=new J,Nu=0,Ct=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Po,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=En(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Po&&(e.usage=this.usage),e}};var gr=class extends Ct{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var _r=class extends Ct{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Se=class extends Ct{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ou=0,Ut=new Le,_o=new pt,bn=new T,At=new jt,sr=new jt,ut=new T,$e=class r extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rl(e)?_r:gr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Re().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,i){return Ut.makeTranslation(e,t,i),this.applyMatrix4(Ut),this}scale(e,t,i){return Ut.makeScale(e,t,i),this.applyMatrix4(Ut),this}lookAt(e){return _o.lookAt(e),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bn).negate(),this.translate(bn.x,bn.y,bn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Se(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];At.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new T,1/0);if(e){let i=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(At.min,sr.min),At.expandByPoint(ut),ut.addVectors(At.max,sr.max),At.expandByPoint(ut)):(At.expandByPoint(sr.min),At.expandByPoint(sr.max))}At.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)ut.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(ut));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ut.fromBufferAttribute(o,l),c&&(bn.fromBufferAttribute(e,l),ut.add(bn)),n=Math.max(n,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new T,c[N]=new T;let l=new T,h=new T,u=new T,d=new J,m=new J,g=new J,x=new T,p=new T;function f(N,U,B){l.fromBufferAttribute(i,N),h.fromBufferAttribute(i,U),u.fromBufferAttribute(i,B),d.fromBufferAttribute(s,N),m.fromBufferAttribute(s,U),g.fromBufferAttribute(s,B),h.sub(l),u.sub(l),m.sub(d),g.sub(d);let H=1/(m.x*g.y-g.x*m.y);isFinite(H)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(H),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(H),o[N].add(x),o[U].add(x),o[B].add(x),c[N].add(p),c[U].add(p),c[B].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let N=0,U=_.length;N<U;++N){let B=_[N],H=B.start;for(let F=H,Y=H+B.count;F<Y;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let v=new T,M=new T,A=new T,R=new T;function I(N){A.fromBufferAttribute(n,N),R.copy(A);let U=o[N];v.copy(U),v.sub(A.multiplyScalar(A.dot(U))).normalize(),M.crossVectors(R,U);let B=M.dot(c[N])<0?-1:1;a.setXYZW(N,v.x,v.y,v.z,B)}for(let N=0,U=_.length;N<U;++N){let B=_[N],H=B.start;for(let F=H,Y=H+B.count;F<Y;F+=3)I(e.getX(F+0)),I(e.getX(F+1)),I(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ct(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let n=new T,s=new T,a=new T,o=new T,c=new T,l=new T,h=new T,u=new T;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let x=0,p=c.length;x<p;x++){m=o.isInterleavedBufferAttribute?c[x]*o.data.stride+o.offset:c[x]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new Ct(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=e(n[o],i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(n[c]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sc=new Le,qi=new oi,hs=new Xt,bc=new T,us=new T,ds=new T,ps=new T,vo=new T,ms=new T,Tc=new T,fs=new T,it=class extends pt{constructor(e=new $e,t=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){ms.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(vo.fromBufferAttribute(u,e),a?ms.addScaledVector(vo,h):ms.addScaledVector(vo.sub(t),h))}t.add(ms)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(s),qi.copy(e.ray).recast(e.near),hs.containsPoint(qi.origin)===!1&&(qi.intersectSphere(hs,bc)===null||qi.origin.distanceToSquared(bc)>(e.far-e.near)**2))return;Sc.copy(s).invert(),qi.copy(e.ray).applyMatrix4(Sc),i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,qi)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],f=a[p.materialIndex];for(let _=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));_<v;_+=3)n=gs(this,f,e,i,l,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=p.materialIndex,t.push(n))}else for(let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);g<x;g+=3)n=gs(this,a,e,i,l,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),t.push(n));else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],f=a[p.materialIndex];for(let _=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));_<v;_+=3)n=gs(this,f,e,i,l,h,u,_,_+1,_+2),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=p.materialIndex,t.push(n))}else for(let g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);g<x;g+=3)n=gs(this,a,e,i,l,h,u,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}};function gs(r,e,t,i,n,s,a,o,c,l){r.getVertexPosition(o,us),r.getVertexPosition(c,ds),r.getVertexPosition(l,ps);let h=(function(u,d,m,g,x,p,f,_){let v;if(v=d.side===1?g.intersectTriangle(f,p,x,!0,_):g.intersectTriangle(x,p,f,d.side===0,_),v===null)return null;fs.copy(_),fs.applyMatrix4(u.matrixWorld);let M=m.ray.origin.distanceTo(fs);return M<m.near||M>m.far?null:{distance:M,point:fs.clone(),object:u}})(r,e,t,i,us,ds,ps,Tc);if(h){let u=new T;xi.getBarycoord(Tc,us,ds,ps,u),n&&(h.uv=xi.getInterpolatedAttribute(n,o,c,l,u,new J)),s&&(h.uv1=xi.getInterpolatedAttribute(s,o,c,l,u,new J)),a&&(h.normal=xi.getInterpolatedAttribute(a,o,c,l,u,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new T,materialIndex:0};xi.getNormal(us,ds,ps,d.normal),h.face=d,h.barycoord=u}return h}var bi=class r extends $e{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,m=0;function g(x,p,f,_,v,M,A,R,I,N,U){let B=M/I,H=A/N,F=M/2,Y=A/2,G=R/2,q=I+1,Z=N+1,re=0,Q=0,pe=new T;for(let ve=0;ve<Z;ve++){let fe=ve*H-Y;for(let be=0;be<q;be++){let ne=be*B-F;pe[x]=ne*_,pe[p]=fe*v,pe[f]=G,l.push(pe.x,pe.y,pe.z),pe[x]=0,pe[p]=0,pe[f]=R>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(be/I),u.push(1-ve/N),re+=1}}for(let ve=0;ve<N;ve++)for(let fe=0;fe<I;fe++){let be=d+fe+q*ve,ne=d+fe+q*(ve+1),ae=d+(fe+1)+q*(ve+1),se=d+(fe+1)+q*ve;c.push(be,ne,se),c.push(ne,ae,se),Q+=6}o.addGroup(m,Q,U),m+=Q,d+=re}g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ln(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function xt(r){let e={};for(let t=0;t<r.length;t++){let i=ln(r[t]);for(let n in i)e[n]=i[n]}return e}function Cl(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}var Dh={clone:ln,merge:xt},Yt=class extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ln(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Dn=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new T,Ec=new J,wc=new J,St=class extends Dn{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Cn*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*wn*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Cn*Math.atan(Math.tan(.5*wn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Ec,wc),t.subVectors(wc,Ec)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*wn*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tn=-90,Us=class extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new St(Tn,1,e,t);n.layers=this.layers,this.add(n);let s=new St(Tn,1,e,t);s.layers=this.layers,this.add(s);let a=new St(Tn,1,e,t);a.layers=this.layers,this.add(a);let o=new St(Tn,1,e,t);o.layers=this.layers,this.add(o);let c=new St(Tn,1,e,t);c.layers=this.layers,this.add(c);let l=new St(Tn,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==pr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,c),e.setRenderTarget(i,4,n),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},vr=class extends bt{constructor(e=[],t=301,i,n,s,a,o,c,l,h){super(e,t,i,n,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ns=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new vr(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new bi(5,5,5),s=new Yt({name:"CubemapFromEquirect",uniforms:ln(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new it(n,s),o=t.minFilter;return t.minFilter===rn&&(t.minFilter=ri),new Us(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},Wt=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fu={type:"move"},Un=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),f=this._getHandJoint(l,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fu)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Wt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var xr=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var $p=new T;var Jp=new T,Kp=new T,Qp=new T,em=new J,tm=new J,im=new Le,nm=new T,rm=new T,sm=new T,am=new J,om=new J,lm=new J;var cm=new T,hm=new T;var um=new T,dm=new Ze,pm=new Ze,mm=new T,fm=new Le,gm=new T,_m=new Xt,vm=new Le,xm=new oi;var ym=new Le,Mm=new Le;var Sm=new Le,bm=new Le;var Tm=new jt,Em=new Le,wm=new it,Am=new Xt;var xo=new T,Bu=new T,zu=new Re,Nt=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=xo.subVectors(i,t).cross(Bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(xo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||zu.getNormalMatrix(e),n=this.coplanarPoint(xo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new Xt,ku=new J(.5,.5),_s=new T,Oi=class{constructor(e=new Nt,t=new Nt,i=new Nt,n=new Nt,s=new Nt,a=new Nt){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],m=s[7],g=s[8],x=s[9],p=s[10],f=s[11],_=s[12],v=s[13],M=s[14],A=s[15];if(n[0].setComponents(l-a,m-h,f-g,A-_).normalize(),n[1].setComponents(l+a,m+h,f+g,A+_).normalize(),n[2].setComponents(l+o,m+u,f+x,A+v).normalize(),n[3].setComponents(l-o,m-u,f-x,A-v).normalize(),i)n[4].setComponents(c,d,p,M).normalize(),n[5].setComponents(l-c,m-d,f-p,A-M).normalize();else if(n[4].setComponents(l-c,m-d,f-p,A-M).normalize(),t===Mi)n[5].setComponents(l+c,m+d,f+p,A+M).normalize();else{if(t!==pr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(c,d,p,M).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);let t=ku.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(_s.x=n.normal.x>0?e.max.x:e.min.x,_s.y=n.normal.y>0?e.max.y:e.min.y,_s.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ei=new Le,ti=new Oi,Os=class r{constructor(){this.coordinateSystem=Mi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(ei.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),ti.setFromProjectionMatrix(ei,n.coordinateSystem,n.reversedDepth),ti.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(ei.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),ti.setFromProjectionMatrix(ei,n.coordinateSystem,n.reversedDepth),ti.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(ei.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),ti.setFromProjectionMatrix(ei,n.coordinateSystem,n.reversedDepth),ti.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(ei.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),ti.setFromProjectionMatrix(ei,n.coordinateSystem,n.reversedDepth),ti.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(ei.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),ti.setFromProjectionMatrix(ei,n.coordinateSystem,n.reversedDepth),ti.containsPoint(e))return!0}return!1}clone(){return new r}};var Lo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},Rm=new Le,Cm=new De(1,1,1),Pm=new Oi,Im=new Os,Lm=new jt,Dm=new Xt,Um=new T,Nm=new T,Om=new T,Fm=new Lo,Bm=new it;var Ji=class extends Si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fs=new T,Bs=new T,Ac=new Le,ar=new oi,vs=new Xt,yo=new T,Rc=new T,yr=class extends pt{constructor(e=new $e,t=new Ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Fs.fromBufferAttribute(t,n-1),Bs.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Fs.distanceTo(Bs);e.setAttribute("lineDistance",new Se(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere),vs.applyMatrix4(n),vs.radius+=s,e.ray.intersectsSphere(vs)===!1)return;Ac.copy(n).invert(),ar.copy(e.ray).applyMatrix4(Ac);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,x=m-1;g<x;g+=l){let p=h.getX(g),f=h.getX(g+1),_=xs(this,e,ar,c,p,f,g);_&&t.push(_)}if(this.isLineLoop){let g=h.getX(m-1),x=h.getX(d),p=xs(this,e,ar,c,g,x,m-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,x=m-1;g<x;g+=l){let p=xs(this,e,ar,c,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){let g=xs(this,e,ar,c,m-1,d,m-1);g&&t.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function xs(r,e,t,i,n,s,a){let o=r.geometry.attributes.position;if(Fs.fromBufferAttribute(o,n),Bs.fromBufferAttribute(o,s),t.distanceSqToSegment(Fs,Bs,yo,Rc)>i)return;yo.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(yo);return c<e.near||c>e.far?void 0:{distance:c,point:Rc.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var zm=new T,km=new T;var Gm=new Le,Vm=new oi,Hm=new Xt,Wm=new T;var Mr=class extends bt{constructor(e,t,i,n,s,a,o,c,l){super(e,t,i,n,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Sr=class extends bt{constructor(e,t,i=1014,n,s,a,o=1003,c=1003,l,h=1026,u=1){if(h!==jr&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},n,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new In(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},br=class extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zs=class r extends $e{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,m=2*u+d,g=2*i+s,x=n+1,p=new T,f=new T;for(let _=0;_<=g;_++){let v=0,M=0,A=0,R=0;if(_<=i){let U=_/i,B=U*Math.PI/2;M=-h-e*Math.cos(B),A=e*Math.sin(B),R=-e*Math.cos(B),v=U*u}else if(_<=i+s){let U=(_-i)/s;M=U*t-h,A=e,R=0,v=u+U*d}else{let U=(_-i-s)/i,B=U*Math.PI/2;M=h+e*Math.sin(B),A=e*Math.cos(B),R=e*Math.sin(B),v=u+d+U*u}let I=Math.max(0,Math.min(1,v/m)),N=0;_===0?N=.5/n:_===g&&(N=-.5/n);for(let U=0;U<=n;U++){let B=U/n,H=B*Math.PI*2,F=Math.sin(H),Y=Math.cos(H);f.x=-A*Y,f.y=M,f.z=A*F,o.push(f.x,f.y,f.z),p.set(-A*Y,R,A*F),p.normalize(),c.push(p.x,p.y,p.z),l.push(B+N,I)}if(_>0){let U=(_-1)*x;for(let B=0;B<n;B++){let H=U+B,F=U+B+1,Y=_*x+B,G=_*x+B+1;a.push(H,F,Y),a.push(F,G,Y)}}}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ks=class r extends $e{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new T,h=new J;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let m=i+u/t*n;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Fi=class r extends $e{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],m=[],g=0,x=[],p=i/2,f=0;function _(v){let M=g,A=new J,R=new T,I=0,N=v===!0?e:t,U=v===!0?1:-1;for(let H=1;H<=n;H++)u.push(0,p*U,0),d.push(0,U,0),m.push(.5,.5),g++;let B=g;for(let H=0;H<=n;H++){let F=H/n*c+o,Y=Math.cos(F),G=Math.sin(F);R.x=N*G,R.y=p*U,R.z=N*Y,u.push(R.x,R.y,R.z),d.push(0,U,0),A.x=.5*Y+.5,A.y=.5*G*U+.5,m.push(A.x,A.y),g++}for(let H=0;H<n;H++){let F=M+H,Y=B+H;v===!0?h.push(Y,Y+1,F):h.push(Y+1,Y,F),I+=3}l.addGroup(f,I,v===!0?1:2),f+=I}(function(){let v=new T,M=new T,A=0,R=(t-e)/i;for(let I=0;I<=s;I++){let N=[],U=I/s,B=U*(t-e)+e;for(let H=0;H<=n;H++){let F=H/n,Y=F*c+o,G=Math.sin(Y),q=Math.cos(Y);M.x=B*G,M.y=-U*i+p,M.z=B*q,u.push(M.x,M.y,M.z),v.set(G,R,q).normalize(),d.push(v.x,v.y,v.z),m.push(F,1-U),N.push(g++)}x.push(N)}for(let I=0;I<n;I++)for(let N=0;N<s;N++){let U=x[N][I],B=x[N+1][I],H=x[N+1][I+1],F=x[N][I+1];(e>0||N!==0)&&(h.push(U,B,F),A+=3),(t>0||N!==s-1)&&(h.push(B,H,F),A+=3)}l.addGroup(f,A,0),f+=A})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gs=class r extends Fi{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bi=class r extends $e{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(m,g,x,p){let f=p+1,_=[];for(let v=0;v<=f;v++){_[v]=[];let M=m.clone().lerp(x,v/f),A=g.clone().lerp(x,v/f),R=f-v;for(let I=0;I<=R;I++)_[v][I]=I===0&&v===f?M:M.clone().lerp(A,I/R)}for(let v=0;v<f;v++)for(let M=0;M<2*(f-v)-1;M++){let A=Math.floor(M/2);M%2==0?(c(_[v][A+1]),c(_[v+1][A]),c(_[v][A])):(c(_[v][A+1]),c(_[v+1][A+1]),c(_[v+1][A]))}}function c(m){s.push(m.x,m.y,m.z)}function l(m,g){let x=3*m;g.x=e[x+0],g.y=e[x+1],g.z=e[x+2]}function h(m,g,x,p){p<0&&m.x===1&&(a[g]=m.x-1),x.x===0&&x.z===0&&(a[g]=p/2/Math.PI+.5)}function u(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}(function(m){let g=new T,x=new T,p=new T;for(let f=0;f<t.length;f+=3)l(t[f+0],g),l(t[f+1],x),l(t[f+2],p),o(g,x,p,m)})(n),(function(m){let g=new T;for(let x=0;x<s.length;x+=3)g.x=s[x+0],g.y=s[x+1],g.z=s[x+2],g.normalize().multiplyScalar(m),s[x+0]=g.x,s[x+1]=g.y,s[x+2]=g.z})(i),(function(){let m=new T;for(let g=0;g<s.length;g+=3){m.x=s[g+0],m.y=s[g+1],m.z=s[g+2];let x=u(m)/2/Math.PI+.5,p=d(m)/Math.PI+.5;a.push(x,1-p)}(function(){let g=new T,x=new T,p=new T,f=new T,_=new J,v=new J,M=new J;for(let A=0,R=0;A<s.length;A+=9,R+=6){g.set(s[A+0],s[A+1],s[A+2]),x.set(s[A+3],s[A+4],s[A+5]),p.set(s[A+6],s[A+7],s[A+8]),_.set(a[R+0],a[R+1]),v.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),f.copy(g).add(x).add(p).divideScalar(3);let I=u(f);h(_,R+0,g,I),h(v,R+2,x,I),h(M,R+4,p,I)}})(),(function(){for(let g=0;g<a.length;g+=6){let x=a[g+0],p=a[g+2],f=a[g+4],_=Math.max(x,p,f),v=Math.min(x,p,f);_>.9&&v<.1&&(x<.2&&(a[g+0]+=1),p<.2&&(a[g+2]+=1),f<.2&&(a[g+4]+=1))}})()})(),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(s.slice(),3)),this.setAttribute("uv",new Se(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Vs=class r extends Bi{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ys=new T,Ms=new T,Mo=new T,Ss=new xi,Hs=class extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(wn*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:p,c:f}=Ss;if(x.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),Ss.getNormal(Mo),u[0]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,u[1]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,u[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let v=(_+1)%3,M=u[_],A=u[v],R=Ss[h[_]],I=Ss[h[v]],N=`${M}_${A}`,U=`${A}_${M}`;U in d&&d[U]?(Mo.dot(d[U].normal)<=s&&(m.push(R.x,R.y,R.z),m.push(I.x,I.y,I.z)),d[U]=null):N in d||(d[N]={index0:l[_],index1:l[v],normal:Mo.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:p}=d[g];ys.fromBufferAttribute(o,x),Ms.fromBufferAttribute(o,p),m.push(ys.x,ys.y,ys.z),m.push(Ms.x,Ms.y,Ms.z)}this.setAttribute("position",new Se(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Pt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,c=0,l=s-1;for(;c<=l;)if(n=Math.floor(c+(l-c)/2),o=i[n]-a,o<0)c=n+1;else{if(!(o>0)){l=n;break}l=n-1}if(n=l,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),c=t||(a.isVector2?new J:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new T,n=[],s=[],a=[],o=new T,c=new Le;for(let m=0;m<=e;m++){let g=m/e;n[m]=this.getTangentAt(g,new T)}s[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(n[m-1],n[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ie(n[m-1].dot(n[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(n[m],s[m])}if(t===!0){let m=Math.acos(Ie(s[0].dot(s[e]),-1,1));m/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(n[g],m*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Nn=class extends Pt{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new J){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ws=class extends Nn{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pl(){let r=0,e=0,t=0,i=0;function n(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){n(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,m*=h,n(a,o,d,m)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var bs=new T,So=new Pl,bo=new Pl,To=new Pl,Ki=class extends Pt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new T){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=n[(l-1)%s]:(bs.subVectors(n[0],n[1]).add(n[0]),o=bs);let u=n[l%s],d=n[(l+1)%s];if(this.closed||l+2<s?c=n[(l+2)%s]:(bs.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=bs),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(u),m),x=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(c),m);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),So.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,g,x,p),bo.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,g,x,p),To.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,g,x,p)}else this.curveType==="catmullrom"&&(So.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),bo.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),To.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return i.set(So.calc(h),bo.calc(h),To.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new T().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Cc(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function cr(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function hr(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var Tr=class extends Pt{constructor(e=new J,t=new J,i=new J,n=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new J){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(hr(e,n.x,s.x,a.x,o.x),hr(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},js=class extends Pt{constructor(e=new T,t=new T,i=new T,n=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new T){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(hr(e,n.x,s.x,a.x,o.x),hr(e,n.y,s.y,a.y,o.y),hr(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Er=class extends Pt{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xs=class extends Pt{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends Pt{constructor(e=new J,t=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(cr(e,n.x,s.x,a.x),cr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ar=class extends Pt{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(cr(e,n.x,s.x,a.x),cr(e,n.y,s.y,a.y),cr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rr=class extends Pt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,c=n[a===0?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Cc(o,c.x,l.x,h.x,u.x),Cc(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new J().fromArray(n))}return this}},qs=Object.freeze({__proto__:null,ArcCurve:Ws,CatmullRomCurve3:Ki,CubicBezierCurve:Tr,CubicBezierCurve3:js,EllipseCurve:Nn,LineCurve:Er,LineCurve3:Xs,QuadraticBezierCurve:wr,QuadraticBezierCurve3:Ar,SplineCurve:Rr}),Ys=class extends Pt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qs[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new qs[n.type]().fromJSON(n))}return this}},Cr=class extends Ys{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Er(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new wr(this.currentPoint.clone(),new J(e,t),new J(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new Tr(this.currentPoint.clone(),new J(e,t),new J(i,n),new J(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Rr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,n,s,a,o,c),this}absellipse(e,t,i,n,s,a,o,c){let l=new Nn(e,t,i,n,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Pr=class extends Cr{constructor(e){super(e),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Cr().fromJSON(n))}return this}};function Gu(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=Pc(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=(function(h,u,d,m){let g=[];for(let x=0,p=u.length;x<p;x++){let f=Pc(h,u[x]*m,x<p-1?u[x+1]*m:h.length,m,!1);f===f.next&&(f.steiner=!0),g.push(Zu(f))}g.sort(Xu);for(let x=0;x<g.length;x++)d=qu(g[x],d);return d})(r,e,s,t)),r.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<n;d+=t){let m=r[d],g=r[d+1];m<o&&(o=m),g<c&&(c=g),m>h&&(h=m),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Ir(s,a,t,o,c,l,0),a}function Pc(r,e,t,i,n){let s;if(n===(function(a,o,c,l){let h=0;for(let u=o,d=c-l;u<c;u+=l)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(r,e,t,i)>0)for(let a=e;a<t;a+=i)s=Ic(a/i|0,r[a],r[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Ic(a/i|0,r[a],r[a+1],s);return s&&On(s,s.next)&&(Dr(s),s=s.next),s}function Qi(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!On(i,i.next)&&tt(i.prev,i,i.next)!==0)i=i.next;else{if(Dr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Ir(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(c,l,h,u){let d=c;do d.z===0&&(d.z=Do(d.x,d.y,l,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(m){let g,x=1;do{let p,f=m;m=null;let _=null;for(g=0;f;){g++;let v=f,M=0;for(let R=0;R<x&&(M++,v=v.nextZ,v);R++);let A=x;for(;M>0||A>0&&v;)M!==0&&(A===0||!v||f.z<=v.z)?(p=f,f=f.nextZ,M--):(p=v,v=v.nextZ,A--),_?_.nextZ=p:m=p,p.prevZ=_,_=p;f=v}_.nextZ=null,x*=2}while(g>1)})(d)})(r,i,n,s);let o=r;for(;r.prev!==r.next;){let c=r.prev,l=r.next;if(s?Hu(r,i,n,s):Vu(r))e.push(c.i,r.i,l.i),Dr(r),r=l.next,o=l.next;else if((r=l)===o){a?a===1?Ir(r=Wu(Qi(r),e),e,t,i,n,s,2):a===2&&ju(r,e,t,i,n,s):Ir(Qi(r),e,t,i,n,s,1);break}}}function Vu(r){let e=r.prev,t=r,i=r.next;if(tt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(n,s,a),u=Math.min(o,c,l),d=Math.max(n,s,a),m=Math.max(o,c,l),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&or(n,o,s,c,a,l,g.x,g.y)&&tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hu(r,e,t,i){let n=r.prev,s=r,a=r.next;if(tt(n,s,a)>=0)return!1;let o=n.x,c=s.x,l=a.x,h=n.y,u=s.y,d=a.y,m=Math.min(o,c,l),g=Math.min(h,u,d),x=Math.max(o,c,l),p=Math.max(h,u,d),f=Do(m,g,e,t,i),_=Do(x,p,e,t,i),v=r.prevZ,M=r.nextZ;for(;v&&v.z>=f&&M&&M.z<=_;){if(v.x>=m&&v.x<=x&&v.y>=g&&v.y<=p&&v!==n&&v!==a&&or(o,h,c,u,l,d,v.x,v.y)&&tt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=m&&M.x<=x&&M.y>=g&&M.y<=p&&M!==n&&M!==a&&or(o,h,c,u,l,d,M.x,M.y)&&tt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=f;){if(v.x>=m&&v.x<=x&&v.y>=g&&v.y<=p&&v!==n&&v!==a&&or(o,h,c,u,l,d,v.x,v.y)&&tt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=p&&M!==n&&M!==a&&or(o,h,c,u,l,d,M.x,M.y)&&tt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Wu(r,e){let t=r;do{let i=t.prev,n=t.next.next;!On(i,n)&&Nh(i,t,t.next,n)&&Lr(i,n)&&Lr(n,i)&&(e.push(i.i,t.i,n.i),Dr(t),Dr(t.next),t=r=n),t=t.next}while(t!==r);return Qi(t)}function ju(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$u(a,o)){let c=Oh(a,o);return a=Qi(a,a.next),c=Qi(c,c.next),Ir(a,e,t,i,n,s,0),void Ir(c,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function Xu(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function qu(r,e){let t=(function(n,s){let a=s,o=n.x,c=n.y,l,h=-1/0;if(On(n,a))return a;do{if(On(n,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let x=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(x<=o&&x>h&&(h=x,l=a.x<a.next.x?a:a.next,x===o))return l}a=a.next}while(a!==s);if(!l)return null;let u=l,d=l.x,m=l.y,g=1/0;a=l;do{if(o>=a.x&&a.x>=d&&o!==a.x&&Uh(c<m?o:h,c,d,m,c<m?h:o,c,a.x,a.y)){let x=Math.abs(c-a.y)/(o-a.x);Lr(a,n)&&(x<g||x===g&&(a.x>l.x||a.x===l.x&&Yu(l,a)))&&(l=a,g=x)}a=a.next}while(a!==u);return l})(r,e);if(!t)return e;let i=Oh(t,r);return Qi(i,i.next),Qi(t,t.next)}function Yu(r,e){return tt(r.prev,r,e.prev)<0&&tt(e.next,r,r.next)<0}function Do(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Zu(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Uh(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function or(r,e,t,i,n,s,a,o){return!(r===a&&e===o)&&Uh(r,e,t,i,n,s,a,o)}function $u(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Nh(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(Lr(r,e)&&Lr(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(tt(r.prev,r,e.prev)||tt(r,e.prev,e))||On(r,e)&&tt(r.prev,r,r.next)>0&&tt(e.prev,e,e.next)>0)}function tt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function On(r,e){return r.x===e.x&&r.y===e.y}function Nh(r,e,t,i){let n=Es(tt(r,e,t)),s=Es(tt(r,e,i)),a=Es(tt(t,i,r)),o=Es(tt(t,i,e));return n!==s&&a!==o||!(n!==0||!Ts(r,t,e))||!(s!==0||!Ts(r,i,e))||!(a!==0||!Ts(t,r,i))||!(o!==0||!Ts(t,e,i))}function Ts(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Es(r){return r>0?1:r<0?-1:0}function Lr(r,e){return tt(r.prev,r,r.next)<0?tt(r,e,r.next)>=0&&tt(r,r.prev,e)>=0:tt(r,e,r.prev)<0||tt(r,r.next,e)<0}function Oh(r,e){let t=Uo(r.i,r.x,r.y),i=Uo(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ic(r,e,t,i){let n=Uo(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Dr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Uo(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var No=class{static triangulate(e,t,i=2){return Gu(e,t,i)}},ii=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Lc(e),Dc(i,e);let a=e.length;t.forEach(Lc);for(let c=0;c<t.length;c++)n.push(a),a+=t[c].length,Dc(i,t[c]);let o=No.triangulate(i,n);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Lc(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Dc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Zs=class r extends $e{constructor(e=new Pr([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Ju,v,M,A,R,I,N=!1;f&&(v=f.getSpacedPoints(h),N=!0,d=!1,M=f.computeFrenetFrames(h,!1),A=new T,R=new T,I=new T),d||(p=0,m=0,g=0,x=0);let U=o.extractPoints(l),B=U.shape,H=U.holes;if(!ii.isClockWise(B)){B=B.reverse();for(let P=0,y=H.length;P<y;P++){let w=H[P];ii.isClockWise(w)&&(H[P]=w.reverse())}}function F(P){let y=10000000000000001e-36,w=P[0];for(let D=1;D<=P.length;D++){let C=D%P.length,j=P[C],z=j.x-w.x,k=j.y-w.y,te=z*z+k*k,le=Math.max(Math.abs(j.x),Math.abs(j.y),Math.abs(w.x),Math.abs(w.y));te<=y*le*le?(P.splice(C,1),D--):w=j}}F(B),H.forEach(F);let Y=H.length,G=B;for(let P=0;P<Y;P++){let y=H[P];B=B.concat(y)}function q(P,y,w){return y||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(y,w)}let Z=B.length;function re(P,y,w){let D,C,j,z=P.x-y.x,k=P.y-y.y,te=w.x-P.x,le=w.y-P.y,ie=z*z+k*k,ue=z*le-k*te;if(Math.abs(ue)>Number.EPSILON){let ge=Math.sqrt(ie),xe=Math.sqrt(te*te+le*le),Be=y.x-k/ge,He=y.y+z/ge,We=((w.x-le/xe-Be)*le-(w.y+te/xe-He)*te)/(z*le-k*te);D=Be+z*We-P.x,C=He+k*We-P.y;let ce=D*D+C*C;if(ce<=2)return new J(D,C);j=Math.sqrt(ce/2)}else{let ge=!1;z>Number.EPSILON?te>Number.EPSILON&&(ge=!0):z<-Number.EPSILON?te<-Number.EPSILON&&(ge=!0):Math.sign(k)===Math.sign(le)&&(ge=!0),ge?(D=-k,C=z,j=Math.sqrt(ie)):(D=z,C=k,j=Math.sqrt(ie/2))}return new J(D/j,C/j)}let Q=[];for(let P=0,y=G.length,w=y-1,D=P+1;P<y;P++,w++,D++)w===y&&(w=0),D===y&&(D=0),Q[P]=re(G[P],G[w],G[D]);let pe=[],ve,fe,be=Q.concat();for(let P=0,y=Y;P<y;P++){let w=H[P];ve=[];for(let D=0,C=w.length,j=C-1,z=D+1;D<C;D++,j++,z++)j===C&&(j=0),z===C&&(z=0),ve[D]=re(w[D],w[j],w[z]);pe.push(ve),be=be.concat(ve)}if(p===0)fe=ii.triangulateShape(G,H);else{let P=[],y=[];for(let w=0;w<p;w++){let D=w/p,C=m*Math.cos(D*Math.PI/2),j=g*Math.sin(D*Math.PI/2)+x;for(let z=0,k=G.length;z<k;z++){let te=q(G[z],Q[z],j);ye(te.x,te.y,-C),D===0&&P.push(te)}for(let z=0,k=Y;z<k;z++){let te=H[z];ve=pe[z];let le=[];for(let ie=0,ue=te.length;ie<ue;ie++){let ge=q(te[ie],ve[ie],j);ye(ge.x,ge.y,-C),D===0&&le.push(ge)}D===0&&y.push(le)}}fe=ii.triangulateShape(P,y)}let ne=fe.length,ae=g+x;for(let P=0;P<Z;P++){let y=d?q(B[P],be[P],ae):B[P];N?(R.copy(M.normals[0]).multiplyScalar(y.x),A.copy(M.binormals[0]).multiplyScalar(y.y),I.copy(v[0]).add(R).add(A),ye(I.x,I.y,I.z)):ye(y.x,y.y,0)}for(let P=1;P<=h;P++)for(let y=0;y<Z;y++){let w=d?q(B[y],be[y],ae):B[y];N?(R.copy(M.normals[P]).multiplyScalar(w.x),A.copy(M.binormals[P]).multiplyScalar(w.y),I.copy(v[P]).add(R).add(A),ye(I.x,I.y,I.z)):ye(w.x,w.y,u/h*P)}for(let P=p-1;P>=0;P--){let y=P/p,w=m*Math.cos(y*Math.PI/2),D=g*Math.sin(y*Math.PI/2)+x;for(let C=0,j=G.length;C<j;C++){let z=q(G[C],Q[C],D);ye(z.x,z.y,u+w)}for(let C=0,j=H.length;C<j;C++){let z=H[C];ve=pe[C];for(let k=0,te=z.length;k<te;k++){let le=q(z[k],ve[k],D);N?ye(le.x,le.y+v[h-1].y,v[h-1].x+w):ye(le.x,le.y,u+w)}}}function se(P,y){let w=P.length;for(;--w>=0;){let D=w,C=w-1;C<0&&(C=P.length-1);for(let j=0,z=h+2*p;j<z;j++){let k=Z*j,te=Z*(j+1);b(y+D+k,y+C+k,y+C+te,y+D+te)}}}function ye(P,y,w){c.push(P),c.push(y),c.push(w)}function Ce(P,y,w){S(P),S(y),S(w);let D=n.length/3,C=_.generateTopUV(i,n,D-3,D-2,D-1);O(C[0]),O(C[1]),O(C[2])}function b(P,y,w,D){S(P),S(y),S(D),S(y),S(w),S(D);let C=n.length/3,j=_.generateSideWallUV(i,n,C-6,C-3,C-2,C-1);O(j[0]),O(j[1]),O(j[3]),O(j[1]),O(j[2]),O(j[3])}function S(P){n.push(c[3*P+0]),n.push(c[3*P+1]),n.push(c[3*P+2])}function O(P){s.push(P.x),s.push(P.y)}(function(){let P=n.length/3;if(d){let y=0,w=Z*y;for(let D=0;D<ne;D++){let C=fe[D];Ce(C[2]+w,C[1]+w,C[0]+w)}y=h+2*p,w=Z*y;for(let D=0;D<ne;D++){let C=fe[D];Ce(C[0]+w,C[1]+w,C[2]+w)}}else{for(let y=0;y<ne;y++){let w=fe[y];Ce(w[2],w[1],w[0])}for(let y=0;y<ne;y++){let w=fe[y];Ce(w[0]+Z*h,w[1]+Z*h,w[2]+Z*h)}}i.addGroup(P,n.length/3-P,0)})(),(function(){let P=n.length/3,y=0;se(G,y),y+=G.length;for(let w=0,D=H.length;w<D;w++){let C=H[w];se(C,y),y+=C.length}i.addGroup(P,n.length/3-P,1)})()}this.setAttribute("position",new Se(n,3)),this.setAttribute("uv",new Se(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new qs[n.type]().fromJSON(n)),new r(i,e.options)}},Ju={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],c=e[3*i+1],l=e[3*n],h=e[3*n+1];return[new J(s,a),new J(o,c),new J(l,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*n],m=e[3*n+1],g=e[3*n+2],x=e[3*s],p=e[3*s+1],f=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new J(a,1-c),new J(l,1-u),new J(d,1-g),new J(x,1-f)]:[new J(o,1-c),new J(h,1-u),new J(m,1-g),new J(p,1-f)]}},$s=class r extends Bi{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Js=class r extends $e{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Ie(n,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new T,d=new J,m=new T,g=new T,x=new T,p=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,m.x=1*f,m.y=-p,m.z=0*f,x.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:p=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,m.x=1*f,m.y=-p,m.z=0*f,g.copy(m),m.x+=x.x,m.y+=x.y,m.z+=x.z,m.normalize(),c.push(m.x,m.y,m.z),x.copy(g)}for(let _=0;_<=t;_++){let v=i+_*h*n,M=Math.sin(v),A=Math.cos(v);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*M,u.y=e[R].y,u.z=e[R].x*A,a.push(u.x,u.y,u.z),d.x=_/t,d.y=R/(e.length-1),o.push(d.x,d.y);let I=c[3*R+0]*M,N=c[3*R+1],U=c[3*R+0]*A;l.push(I,N,U)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let M=v+_*e.length,A=M,R=M+e.length,I=M+e.length+1,N=M+1;s.push(A,R,N),s.push(I,N,R)}this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("uv",new Se(o,2)),this.setAttribute("normal",new Se(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Ks=class r extends Bi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},zi=class r extends $e{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,u=e/o,d=t/c,m=[],g=[],x=[],p=[];for(let f=0;f<h;f++){let _=f*d-a;for(let v=0;v<l;v++){let M=v*u-s;g.push(M,-_,0),x.push(0,0,1),p.push(v/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<o;_++){let v=_+l*f,M=_+l*(f+1),A=_+1+l*(f+1),R=_+1+l*f;m.push(v,M,R),m.push(M,A,R)}this.setIndex(m),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Fn=class r extends $e{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(n=Math.max(1,n)),m=new T,g=new J;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){let f=s+p/i*a;m.x=u*Math.cos(f),m.y=u*Math.sin(f),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<n;x++){let p=x*(i+1);for(let f=0;f<i;f++){let _=f+p,v=_,M=_+i+1,A=_+i+2,R=_+1;o.push(v,M,R),o.push(M,A,R)}}this.setIndex(o),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Qs=class r extends $e{constructor(e=new Pr([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=n.length/3,d=h.extractPoints(t),m=d.shape,g=d.holes;ii.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,f=g.length;p<f;p++){let _=g[p];ii.isClockWise(_)===!0&&(g[p]=_.reverse())}let x=ii.triangulateShape(m,g);for(let p=0,f=g.length;p<f;p++){let _=g[p];m=m.concat(_)}for(let p=0,f=m.length;p<f;p++){let _=m[p];n.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let p=0,f=x.length;p<f;p++){let _=x[p],v=_[0]+u,M=_[1]+u,A=_[2]+u;i.push(v,M,A),c+=3}}this.setIndex(i),this.setAttribute("position",new Se(n,3)),this.setAttribute("normal",new Se(s,3)),this.setAttribute("uv",new Se(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},Bn=class r extends $e{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new T,d=new T,m=[],g=[],x=[],p=[];for(let f=0;f<=i;f++){let _=[],v=f/i,M=0;f===0&&a===0?M=.5/t:f===i&&c===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){let R=A/t;u.x=-e*Math.cos(n+R*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(n+R*s)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(R+M,1-v),_.push(l++)}h.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){let v=h[f][_+1],M=h[f][_],A=h[f+1][_],R=h[f+1][_+1];(f!==0||a>0)&&m.push(v,M,R),(f!==i-1||c<Math.PI)&&m.push(M,A,R)}this.setIndex(m),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ea=class r extends Bi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},zn=class r extends $e{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],c=[],l=[],h=new T,u=new T,d=new T;for(let m=0;m<=i;m++)for(let g=0;g<=n;g++){let x=g/n*s,p=m/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/n),l.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=n;g++){let x=(n+1)*m+g-1,p=(n+1)*(m-1)+g-1,f=(n+1)*(m-1)+g,_=(n+1)*m+g;a.push(x,p,_),a.push(p,f,_)}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ta=class r extends $e{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],c=[],l=[],h=[],u=new T,d=new T,m=new T,g=new T,x=new T,p=new T,f=new T;for(let v=0;v<=i;++v){let M=v/i*s*Math.PI*2;_(M,s,a,e,m),_(M+.01,s,a,e,g),p.subVectors(g,m),f.addVectors(g,m),x.crossVectors(p,f),f.crossVectors(x,p),x.normalize(),f.normalize();for(let A=0;A<=n;++A){let R=A/n*Math.PI*2,I=-t*Math.cos(R),N=t*Math.sin(R);u.x=m.x+(I*f.x+N*x.x),u.y=m.y+(I*f.y+N*x.y),u.z=m.z+(I*f.z+N*x.z),c.push(u.x,u.y,u.z),d.subVectors(u,m).normalize(),l.push(d.x,d.y,d.z),h.push(v/i),h.push(A/n)}}for(let v=1;v<=i;v++)for(let M=1;M<=n;M++){let A=(n+1)*(v-1)+(M-1),R=(n+1)*v+(M-1),I=(n+1)*v+M,N=(n+1)*(v-1)+M;o.push(A,R,N),o.push(R,I,N)}function _(v,M,A,R,I){let N=Math.cos(v),U=Math.sin(v),B=A/M*v,H=Math.cos(B);I.x=R*(2+H)*.5*N,I.y=R*(2+H)*U*.5,I.z=R*Math.sin(B)*.5}this.setIndex(o),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},kn=class r extends $e{constructor(e=new Ar(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,c=new T,l=new J,h=new T,u=[],d=[],m=[],g=[];function x(p){h=e.getPointAt(p/t,h);let f=a.normals[p],_=a.binormals[p];for(let v=0;v<=n;v++){let M=v/n*Math.PI*2,A=Math.sin(M),R=-Math.cos(M);c.x=R*f.x+A*_.x,c.y=R*f.y+A*_.y,c.z=R*f.z+A*_.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let p=0;p<t;p++)x(p);x(s===!1?t:0),(function(){for(let p=0;p<=t;p++)for(let f=0;f<=n;f++)l.x=p/t,l.y=f/n,m.push(l.x,l.y)})(),(function(){for(let p=1;p<=t;p++)for(let f=1;f<=n;f++){let _=(n+1)*(p-1)+(f-1),v=(n+1)*p+(f-1),M=(n+1)*p+f,A=(n+1)*(p-1)+f;g.push(_,v,A),g.push(v,M,A)}})()})(),this.setIndex(g),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new qs[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ia=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new T,s=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let m=d,g=d+u.count;m<g;m+=3)for(let x=0;x<3;x++){let p=o.getX(m+x),f=o.getX(m+(x+1)%3);n.fromBufferAttribute(a,p),s.fromBufferAttribute(a,f),Uc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Uc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Se(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Uc(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var jm=Object.freeze({__proto__:null,BoxGeometry:bi,CapsuleGeometry:zs,CircleGeometry:ks,ConeGeometry:Gs,CylinderGeometry:Fi,DodecahedronGeometry:Vs,EdgesGeometry:Hs,ExtrudeGeometry:Zs,IcosahedronGeometry:$s,LatheGeometry:Js,OctahedronGeometry:Ks,PlaneGeometry:zi,PolyhedronGeometry:Bi,RingGeometry:Fn,ShapeGeometry:Qs,SphereGeometry:Bn,TetrahedronGeometry:ea,TorusGeometry:zn,TorusKnotGeometry:ta,TubeGeometry:kn,WireframeGeometry:ia});var Ur=class extends Si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var na=class extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ra=class extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Nr=class extends Ji{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function ws(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}function Ku(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var en=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sa=class extends en{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ao,endingEnd:Ao}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ro:s=e,o=2*t-i;break;case Co:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ro:a=e,c=2*i-t;break;case Co:a=1,c=i+n[1]-n[0];break;default:a=e-1,c=t}let l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-t)/(n-t),x=g*g,p=x*g,f=-d*p+2*d*x-d*g,_=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-m)*p+(1.5+m)*x+.5*g,M=m*p-m*x;for(let A=0;A!==o;++A)s[A]=f*a[h+A]+_*a[l+A]+v*a[c+A]+M*a[u+A];return s}},aa=class extends en{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},oa=class extends en{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Rt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ws(t,this.TimeBufferType),this.values=ws(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ws(e.times,Array),values:ws(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case Ps:t=this.InterpolantFactoryMethodLinear;break;case As:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return As}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(n!==void 0&&Ku(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===As,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(n)c=!0;else{let h=o*i,u=h-i,d=h+i;for(let m=0;m!==i;++m){let g=t[h+m];if(g!==t[u+m]||g!==t[d+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Rt.prototype.ValueTypeName="",Rt.prototype.TimeBufferType=Float32Array,Rt.prototype.ValueBufferType=Float32Array,Rt.prototype.DefaultInterpolation=Ps;var Di=class extends Rt{constructor(e,t,i){super(e,t,i)}};Di.prototype.ValueTypeName="bool",Di.prototype.ValueBufferType=Array,Di.prototype.DefaultInterpolation=ur,Di.prototype.InterpolantFactoryMethodLinear=void 0,Di.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends Rt{constructor(e,t,i,n){super(e,t,i,n)}};la.prototype.ValueTypeName="color";var ca=class extends Rt{constructor(e,t,i,n){super(e,t,i,n)}};ca.prototype.ValueTypeName="number";var ha=class extends en{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)Tt.slerpFlat(s,0,a,l-o,a,l,c);return s}},Or=class extends Rt{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}};Or.prototype.ValueTypeName="quaternion",Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Rt{constructor(e,t,i){super(e,t,i)}};Ui.prototype.ValueTypeName="string",Ui.prototype.ValueBufferType=Array,Ui.prototype.DefaultInterpolation=ur,Ui.prototype.InterpolantFactoryMethodLinear=void 0,Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends Rt{constructor(e,t,i,n){super(e,t,i,n)}};ua.prototype.ValueTypeName="vector";var da=class{constructor(e,t,i){let n=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){c++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,c),o===c&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Fh=new da,pa=class{constructor(e){this.manager=e!==void 0?e:Fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gn=class extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Fr=class extends Gn{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Eo=new Le,Nc=new T,Oc=new T,Oo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oc),t.updateMatrixWorld(),Eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Xm=new Le,qm=new T,Ym=new T;var tn=class extends Dn{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fo=class extends Oo{constructor(){super(new tn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vn=class extends Gn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Fo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Br=class extends Gn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Zm=new Le,$m=new Le,Jm=new Le;var ma=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Km=new T,Qm=new Tt,ef=new T,tf=new T,nf=new T;var rf=new T,sf=new Tt,af=new T,of=new T;var Il="\\[\\]\\.:\\/",Qu=new RegExp("["+Il+"]","g"),wo="[^"+Il+"]",ed="[^"+Il.replace("\\.","")+"]",td=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",wo)+/(WCOD+)?/.source.replace("WCOD",ed)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wo)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wo)+"$"),id=["material","materials","bones","map"],Ye=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qu,"")}static parseTrackName(e){let t=td.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);id.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[n];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=class{constructor(r,e,t){let i=t||Ye.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray],Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lf=new Float32Array(1);var Fc=new Le,zr=class{constructor(e,t,i=0,n=1/0){this.ray=new oi(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Ln,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(e,t=!0,i=[]){return Bo(e,this,i,t),i.sort(Bc),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Bo(e[n],this,i,t);return i.sort(Bc),i}};function Bc(r,e){return r.distance-e.distance}function Bo(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Bo(s[a],e,t,!0)}}var Hn=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ie(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var cf=new J;var hf=new T,uf=new T,df=new T,pf=new T,mf=new T,ff=new T,gf=new T;var _f=new T;var vf=new T,xf=new Le,yf=new Le;var Mf=new T,Sf=new De,bf=new De;var Tf=new T,Ef=new T,wf=new T;var Af=new T,Rf=new Dn;var Cf=new jt;var Pf=new T;var kr=class extends si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){e!==void 0?(this.domElement!==null&&this.disconnect(),this.domElement=e):console.warn("THREE.Controls: connect() now requires an element.")}disconnect(){}dispose(){}update(){}};function Ll(r,e,t,i){let n=(function(s){switch(s){case ci:case jo:return{byteLength:1,components:1};case qn:case Xo:case Yn:return{byteLength:2,components:1};case Ra:case Ca:return{byteLength:2,components:4};case sn:case Aa:case hi:return{byteLength:4,components:1};case qo:case Yo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case 1021:return r*e;case Zo:case Pa:return r*e/n.components*n.byteLength;case 1030:case 1031:return r*e*2/n.components*n.byteLength;case 1022:return r*e*3/n.components*n.byteLength;case $t:case 1033:return r*e*4/n.components*n.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ou(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rd(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(r.bindBuffer(o,s),l.length===0)r.bufferSubData(o,0,c);else{l.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<l.length;u++){let d=l[h],m=l[u];m.start<=d.start+d.count+1?d.count=Math.max(d.count,m.start+m.count-d.start):(++h,l[h]=m)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let m=l[u];r.bufferSubData(o,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var Ue={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},oe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},ui={basic:{uniforms:xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:xt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:xt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:xt([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:xt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:xt([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:xt([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:xt([oe.common,oe.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:xt([oe.lights,oe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};ui.physical={uniforms:xt([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Na={r:0,b:0,g:0},cn=new qt,sd=new Le;function ad(r,e,t,i,n,s,a){let o=new De(0),c,l,h=s===!0?0:1,u=null,d=0,m=null;function g(p){let f=p.isScene===!0?p.background:null;return f&&f.isTexture&&(f=(p.backgroundBlurriness>0?t:e).get(f)),f}function x(p,f){p.getRGB(Na,Cl(r)),i.buffers.color.setClear(Na.r,Na.g,Na.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),h=f,x(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(p){h=p,x(o,h)},render:function(p){let f=!1,_=g(p);_===null?x(o,h):_&&_.isColor&&(x(_,1),f=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||f)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(p,f){let _=g(f);_&&(_.isCubeTexture||_.mapping===Hr)?(l===void 0&&(l=new it(new bi(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:ln(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),cn.copy(f.backgroundRotation),cn.x*=-1,cn.y*=-1,cn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(cn.y*=-1,cn.z*=-1),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(sd.makeRotationFromEuler(cn)),l.material.toneMapped=Ve.getTransfer(_.colorSpace)!==Xe,u===_&&d===_.version&&m===r.toneMapping||(l.material.needsUpdate=!0,u=_,d=_.version,m=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new it(new zi(2,2),new Yt({name:"BackgroundMaterial",uniforms:ln(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(_.colorSpace)!==Xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&d===_.version&&m===r.toneMapping||(c.material.needsUpdate=!0,u=_,d=_.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function od(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=l(null),s=n,a=!1;function o(f){return r.bindVertexArray(f)}function c(f){return r.deleteVertexArray(f)}function l(f){let _=[],v=[],M=[];for(let A=0;A<t;A++)_[A]=0,v[A]=0,M[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:v,attributeDivisors:M,object:f,attributes:{},index:null}}function h(){let f=s.newAttributes;for(let _=0,v=f.length;_<v;_++)f[_]=0}function u(f){d(f,0)}function d(f,_){let v=s.newAttributes,M=s.enabledAttributes,A=s.attributeDivisors;v[f]=1,M[f]===0&&(r.enableVertexAttribArray(f),M[f]=1),A[f]!==_&&(r.vertexAttribDivisor(f,_),A[f]=_)}function m(){let f=s.newAttributes,_=s.enabledAttributes;for(let v=0,M=_.length;v<M;v++)_[v]!==f[v]&&(r.disableVertexAttribArray(v),_[v]=0)}function g(f,_,v,M,A,R,I){I===!0?r.vertexAttribIPointer(f,_,v,A,R):r.vertexAttribPointer(f,_,v,M,A,R)}function x(){p(),a=!0,s!==n&&(s=n,o(s.object))}function p(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(f,_,v,M,A){let R=!1,I=(function(N,U,B){let H=B.wireframe===!0,F=i[N.id];F===void 0&&(F={},i[N.id]=F);let Y=F[U.id];Y===void 0&&(Y={},F[U.id]=Y);let G=Y[H];return G===void 0&&(G=l(r.createVertexArray()),Y[H]=G),G})(M,v,_);s!==I&&(s=I,o(s.object)),R=(function(N,U,B,H){let F=s.attributes,Y=U.attributes,G=0,q=B.getAttributes();for(let Z in q)if(q[Z].location>=0){let re=F[Z],Q=Y[Z];if(Q===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),re===void 0||re.attribute!==Q||Q&&re.data!==Q.data)return!0;G++}return s.attributesNum!==G||s.index!==H})(f,M,v,A),R&&(function(N,U,B,H){let F={},Y=U.attributes,G=0,q=B.getAttributes();for(let Z in q)if(q[Z].location>=0){let re=Y[Z];re===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(re=N.instanceColor));let Q={};Q.attribute=re,re&&re.data&&(Q.data=re.data),F[Z]=Q,G++}s.attributes=F,s.attributesNum=G,s.index=H})(f,M,v,A),A!==null&&e.update(A,r.ELEMENT_ARRAY_BUFFER),(R||a)&&(a=!1,(function(N,U,B,H){h();let F=H.attributes,Y=B.getAttributes(),G=U.defaultAttributeValues;for(let q in Y){let Z=Y[q];if(Z.location>=0){let re=F[q];if(re===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(re=N.instanceColor)),re!==void 0){let Q=re.normalized,pe=re.itemSize,ve=e.get(re);if(ve===void 0)continue;let fe=ve.buffer,be=ve.type,ne=ve.bytesPerElement,ae=be===r.INT||be===r.UNSIGNED_INT||re.gpuType===Aa;if(re.isInterleavedBufferAttribute){let se=re.data,ye=se.stride,Ce=re.offset;if(se.isInstancedInterleavedBuffer){for(let b=0;b<Z.locationSize;b++)d(Z.location+b,se.meshPerAttribute);N.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let b=0;b<Z.locationSize;b++)u(Z.location+b);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let b=0;b<Z.locationSize;b++)g(Z.location+b,pe/Z.locationSize,be,Q,ye*ne,(Ce+pe/Z.locationSize*b)*ne,ae)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<Z.locationSize;se++)d(Z.location+se,re.meshPerAttribute);N.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<Z.locationSize;se++)u(Z.location+se);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let se=0;se<Z.locationSize;se++)g(Z.location+se,pe/Z.locationSize,be,Q,pe*ne,pe/Z.locationSize*se*ne,ae)}}else if(G!==void 0){let Q=G[q];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(Z.location,Q);break;case 3:r.vertexAttrib3fv(Z.location,Q);break;case 4:r.vertexAttrib4fv(Z.location,Q);break;default:r.vertexAttrib1fv(Z.location,Q)}}}}m()})(f,_,v,M),A!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))},reset:x,resetDefaultState:p,dispose:function(){x();for(let f in i){let _=i[f];for(let v in _){let M=_[v];for(let A in M)c(M[A].object),delete M[A];delete _[v]}delete i[f]}},releaseStatesOfGeometry:function(f){if(i[f.id]===void 0)return;let _=i[f.id];for(let v in _){let M=_[v];for(let A in M)c(M[A].object),delete M[A];delete _[v]}delete i[f.id]},releaseStatesOfProgram:function(f){for(let _ in i){let v=i[_];if(v[f.id]===void 0)continue;let M=v[f.id];for(let A in M)c(M[A].object),delete M[A];delete v[f.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:m}}function ld(r,e,t){let i;function n(s,a,o){o!==0&&(r.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){r.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,i,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)n(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(i,s,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,i,1)}}}function cd(r,e,t,i){let n;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(d){return d===$t||i.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let m=d===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==ci&&i.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==hi&&!m)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function hd(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Nt,o=new Re,c={value:null,needsUpdate:!1};function l(h,u,d,m){let g=h!==null?h.length:0,x=null;if(g!==0){if(x=c.value,m!==!0||x===null){let p=d+4*g,f=u.matrixWorldInverse;o.getNormalMatrix(f),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,v=d;_!==g;++_,v+=4)a.copy(h[_]).applyMatrix4(f,o),a.normal.toArray(x,v),x[v+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||n;return n=u,i=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let m=h.clippingPlanes,g=h.clipIntersection,x=h.clipShadows,p=r.get(h);if(!n||m===null||m.length===0||s&&!x)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let f=s?0:i,_=4*f,v=p.clippingState||null;c.value=v,v=l(m,u,_,d);for(let M=0;M!==_;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=f}}}function ud(r){let e=new WeakMap;function t(n,s){return s===Ta?n.mapping=Xn:s===Ea&&(n.mapping=nn),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===Ta||s===Ea){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new Ns(a.height);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Bh=[.125,.215,.35,.446,.526,.582],Yr=20,Dl=new tn,zh=new De,Ul=null,Nl=0,Ol=0,Fl=!1,un=(1+Math.sqrt(5))/2,$n=1/un,kh=[new T(-un,$n,0),new T(un,$n,0),new T(-$n,0,un),new T($n,0,un),new T(0,un,-$n),new T(0,un,$n),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],dd=new T,Ba=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=dd}=s;Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Nl,Ol),this._renderer.xr.enabled=Fl,e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xn||e.mapping===nn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Yn,format:$t,colorSpace:$i,depthBuffer:!1},n=Gh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gh(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+Bh.length;for(let d=0;d<u;d++){let m=Math.pow(2,h);c.push(m);let g=1/m;d>a-4?g=Bh[d-a+4-1]:d===0&&(g=0),l.push(g);let x=1/(m-2),p=-x,f=1+x,_=[p,p,f,p,f,f,p,p,f,f,p,f],v=6,M=6,A=3,R=2,I=1,N=new Float32Array(A*M*v),U=new Float32Array(R*M*v),B=new Float32Array(I*M*v);for(let F=0;F<v;F++){let Y=F%3*2/3-1,G=F>2?0:-1,q=[Y,G,0,Y+2/3,G,0,Y+2/3,G+1,0,Y,G,0,Y+2/3,G+1,0,Y,G+1,0];N.set(q,A*M*F),U.set(_,R*M*F);let Z=[F,F,F,F,F,F];B.set(Z,I*M*F)}let H=new $e;H.setAttribute("position",new Ct(N,A)),H.setAttribute("uv",new Ct(U,R)),H.setAttribute("faceIndex",new Ct(B,I)),o.push(H),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(Yr),h=new T(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new it(this._lodPlanes[0],e);this._renderer.compile(t,Dl)}_sceneToCubeUV(e,t,i,n,s){let a=new St(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(zh),l.toneMapping=Ti,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null));let d=new Ni({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),m=new it(new bi,d),g=!1,x=e.background;x?x.isColor&&(d.color.copy(x),e.background=null,g=!0):(d.color.copy(zh),g=!0);for(let p=0;p<6;p++){let f=p%3;f===0?(a.up.set(0,o[p],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[p],s.y,s.z)):f===1?(a.up.set(0,0,o[p]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[p],s.z)):(a.up.set(0,o[p],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[p]));let _=this._cubeSize;Oa(n,f*_,p>2?_:0,_,_),l.setRenderTarget(n),g&&l.render(m,a),l.render(e,a)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=u,l.autoClear=h,e.background=x}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Xn||e.mapping===nn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Oa(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Dl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=kh[(n-s-1)%kh.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new it(this._lodPlanes[n],l),u=l.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,g=s/m,x=isFinite(s)?1+Math.floor(3*g):Yr;x>Yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to 20`);let p=[],f=0;for(let M=0;M<Yr;++M){let A=M/g,R=Math.exp(-A*A/2);p.push(R),M===0?f+=R:M<x&&(f+=2*R)}for(let M=0;M<p.length;M++)p[M]=p[M]/f;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-i;let v=this._sizeLods[n];Oa(t,3*v*(n>_-4?n-_+4:0),4*(this._cubeSize-v),3*v,2*v),c.setRenderTarget(t),c.render(h,Dl)}};function Gh(r,e,t){let i=new ai(r,e,t);return i.texture.mapping=Hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oa(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Vh(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Hh(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function ql(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pd(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===Ta||s===Ea,o=s===Xn||s===nn;if(a||o){let c=e.get(n),l=c!==void 0?c.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==l)return t===null&&(t=new Ba(r)),c=a?t.fromEquirectangular(n,c):t.fromCubemap(n,c),c.texture.pmremVersion=n.pmremVersion,e.set(n,c),c.texture;if(c!==void 0)return c.texture;{let h=n.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,m=6;for(let g=0;g<m;g++)u[g]!==void 0&&d++;return d===m})(h)?(t===null&&(t=new Ba(r)),c=a?t.fromEquirectangular(n):t.fromCubemap(n),c.texture.pmremVersion=n.pmremVersion,e.set(n,c),n.addEventListener("dispose",i),c.texture):null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function md(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Pn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function fd(r,e,t,i){let n={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",a),delete n[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let x=h.array;d=h.version;for(let p=0,f=x.length;p<f;p+=3){let _=x[p+0],v=x[p+1],M=x[p+2];l.push(_,v,v,M,M,_)}}else{if(u===void 0)return;{let x=u.array;d=u.version;for(let p=0,f=x.length/3-1;p<f;p+=3){let _=p+0,v=p+1,M=p+2;l.push(_,v,v,M,M,_)}}}let m=new(Rl(l)?_r:gr)(l,1);m.version=d;let g=s.get(c);g&&e.remove(g),s.set(c,m)}return{get:function(c,l){return n[l.id]===!0||(l.addEventListener("dispose",a),n[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function gd(r,e,t){let i,n,s;function a(o,c,l){l!==0&&(r.drawElementsInstanced(i,c,n,o*s,l),t.update(c,i,l))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,s=o.bytesPerElement},this.render=function(o,c){r.drawElements(i,c,n,o*s),t.update(c,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,n,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,c,0,n,o,0,h,0,l);let d=0;for(let m=0;m<l;m++)d+=c[m]*h[m];t.update(d,i,1)}}}function _d(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function vd(r,e,t){let i=new WeakMap,n=new Ze;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=i.get(a);if(u===void 0||u.count!==h){let N=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],f=a.morphAttributes.color||[],_=0;d===!0&&(_=1),m===!0&&(_=2),g===!0&&(_=3);let v=a.attributes.position.count*_,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*M*4*h),R=new fr(A,v,M,h);R.type=hi,R.needsUpdate=!0;let I=4*_;for(let U=0;U<h;U++){let B=x[U],H=p[U],F=f[U],Y=v*M*4*U;for(let G=0;G<B.count;G++){let q=G*I;d===!0&&(n.fromBufferAttribute(B,G),A[Y+q+0]=n.x,A[Y+q+1]=n.y,A[Y+q+2]=n.z,A[Y+q+3]=0),m===!0&&(n.fromBufferAttribute(H,G),A[Y+q+4]=n.x,A[Y+q+5]=n.y,A[Y+q+6]=n.z,A[Y+q+7]=0),g===!0&&(n.fromBufferAttribute(F,G),A[Y+q+8]=n.x,A[Y+q+9]=n.y,A[Y+q+10]=n.z,A[Y+q+11]=F.itemSize===4?n.w:1)}}u={count:h,texture:R,size:new J(v,M)},i.set(a,u),a.addEventListener("dispose",N)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let m=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",m),o.getUniforms().setValue(r,"morphTargetInfluences",c)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function xd(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,c=a.geometry,l=e.get(a,c);if(n.get(l)!==o&&(e.update(l),n.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return l},dispose:function(){n=new WeakMap}}}var lu=new bt,Wh=new Sr(1,1),cu=new fr,hu=new Ds,uu=new vr,jh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),Zh=new Float32Array(4);function Kn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=jh[n];if(s===void 0&&(s=new Float32Array(n),jh[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ot(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function lt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ka(r,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function yd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Md(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2fv(this.addr,e),lt(t,e)}}function Sd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;r.uniform3fv(this.addr,e),lt(t,e)}}function bd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4fv(this.addr,e),lt(t,e)}}function Td(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,i))return;Zh.set(i),r.uniformMatrix2fv(this.addr,!1,Zh),lt(t,i)}}function Ed(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,i))return;Yh.set(i),r.uniformMatrix3fv(this.addr,!1,Yh),lt(t,i)}}function wd(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,i))return;qh.set(i),r.uniformMatrix4fv(this.addr,!1,qh),lt(t,i)}}function Ad(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Rd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2iv(this.addr,e),lt(t,e)}}function Cd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3iv(this.addr,e),lt(t,e)}}function Pd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4iv(this.addr,e),lt(t,e)}}function Id(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ld(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2uiv(this.addr,e),lt(t,e)}}function Dd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3uiv(this.addr,e),lt(t,e)}}function Ud(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4uiv(this.addr,e),lt(t,e)}}function Nd(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(Wh.compareFunction=wl,s=Wh):s=lu,t.setTexture2D(e||s,n)}function Od(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||hu,n)}function Fd(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||uu,n)}function Bd(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||cu,n)}function zd(r,e){r.uniform1fv(this.addr,e)}function kd(r,e){let t=Kn(e,this.size,2);r.uniform2fv(this.addr,t)}function Gd(r,e){let t=Kn(e,this.size,3);r.uniform3fv(this.addr,t)}function Vd(r,e){let t=Kn(e,this.size,4);r.uniform4fv(this.addr,t)}function Hd(r,e){let t=Kn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Wd(r,e){let t=Kn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function jd(r,e){let t=Kn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Xd(r,e){r.uniform1iv(this.addr,e)}function qd(r,e){r.uniform2iv(this.addr,e)}function Yd(r,e){r.uniform3iv(this.addr,e)}function Zd(r,e){r.uniform4iv(this.addr,e)}function $d(r,e){r.uniform1uiv(this.addr,e)}function Jd(r,e){r.uniform2uiv(this.addr,e)}function Kd(r,e){r.uniform3uiv(this.addr,e)}function Qd(r,e){r.uniform4uiv(this.addr,e)}function ep(r,e,t){let i=this.cache,n=e.length,s=ka(t,n);ot(i,s)||(r.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||lu,s[a])}function tp(r,e,t){let i=this.cache,n=e.length,s=ka(t,n);ot(i,s)||(r.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||hu,s[a])}function ip(r,e,t){let i=this.cache,n=e.length,s=ka(t,n);ot(i,s)||(r.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||uu,s[a])}function np(r,e,t){let i=this.cache,n=e.length,s=ka(t,n);ot(i,s)||(r.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||cu,s[a])}var zl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return yd;case 35664:return Md;case 35665:return Sd;case 35666:return bd;case 35674:return Td;case 35675:return Ed;case 35676:return wd;case 5124:case 35670:return Ad;case 35667:case 35671:return Rd;case 35668:case 35672:return Cd;case 35669:case 35673:return Pd;case 5125:return Id;case 36294:return Ld;case 36295:return Dd;case 36296:return Ud;case 35678:case 36198:case 36298:case 36306:case 35682:return Nd;case 35679:case 36299:case 36307:return Od;case 35680:case 36300:case 36308:case 36293:return Fd;case 36289:case 36303:case 36311:case 36292:return Bd}})(t.type)}},kl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return zd;case 35664:return kd;case 35665:return Gd;case 35666:return Vd;case 35674:return Hd;case 35675:return Wd;case 35676:return jd;case 5124:case 35670:return Xd;case 35667:case 35671:return qd;case 35668:case 35672:return Yd;case 35669:case 35673:return Zd;case 5125:return $d;case 36294:return Jd;case 36295:return Kd;case 36296:return Qd;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return np}})(t.type)}},Gl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Bl=/(\w+)(\])?(\[|\.)?/g;function $h(r,e){r.seq.push(e),r.map[e.id]=e}function rp(r,e,t){let i=r.name,n=i.length;for(Bl.lastIndex=0;;){let s=Bl.exec(i),a=Bl.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===n){$h(t,l===void 0?new zl(o,r,e):new kl(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Gl(o),$h(t,h)),t=h}}}var Jn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);rp(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Jh(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var sp=0,Kh=new Re;function Qh(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=(r.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let m=u;m<d;m++){let g=m+1;h.push(`${g===c?">":" "} ${g}: ${l[m]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return n}function ap(r,e){let t=(function(i){Ve._getMatrix(Kh,Ve.workingColorSpace,i);let n=`mat3( ${Kh.elements.map(s=>s.toFixed(4))} )`;switch(Ve.getTransfer(i)){case dr:return[n,"LinearTransferOETF"];case Xe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function op(r,e){let t;switch(e){case hh:t="Linear";break;case uh:t="Reinhard";break;case dh:t="Cineon";break;case ba:t="ACESFilmic";break;case mh:t="AgX";break;case fh:t="Neutral";break;case ph:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fa=new T;function lp(){return Ve.getLuminanceCoefficients(Fa),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Fa.x.toFixed(4)}, ${Fa.y.toFixed(4)}, ${Fa.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zr(r){return r!==""}function eu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(r){return r.replace(cp,up)}var hp=new Map;function up(r,e){let t=Ue[e];if(t===void 0){let i=hp.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Vl(t)}var dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(r){return r.replace(dp,pp)}function pp(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function nu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mp(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(H){let F="SHADOWMAP_TYPE_BASIC";return H.shadowMapType===ko?F="SHADOWMAP_TYPE_PCF":H.shadowMapType===fa?F="SHADOWMAP_TYPE_PCF_SOFT":H.shadowMapType===li&&(F="SHADOWMAP_TYPE_VSM"),F})(t),l=(function(H){let F="ENVMAP_TYPE_CUBE";if(H.envMap)switch(H.envMapMode){case Xn:case nn:F="ENVMAP_TYPE_CUBE";break;case Hr:F="ENVMAP_TYPE_CUBE_UV"}return F})(t),h=(function(H){let F="ENVMAP_MODE_REFLECTION";return H.envMap&&H.envMapMode===nn&&(F="ENVMAP_MODE_REFRACTION"),F})(t),u=(function(H){let F="ENVMAP_BLENDING_NONE";if(H.envMap)switch(H.combine){case oh:F="ENVMAP_BLENDING_MULTIPLY";break;case lh:F="ENVMAP_BLENDING_MIX";break;case ch:F="ENVMAP_BLENDING_ADD"}return F})(t),d=(function(H){let F=H.envMapCubeUVHeight;if(F===null)return null;let Y=Math.log2(F)-2,G=1/F;return{texelWidth:1/(3*Math.max(Math.pow(2,Y),112)),texelHeight:G,maxMip:Y}})(t),m=(function(H){return[H.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",H.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)})(t),g=(function(H){let F=[];for(let Y in H){let G=H[Y];G!==!1&&F.push("#define "+Y+" "+G)}return F.join(`
`)})(s),x=n.createProgram(),p,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zr).join(`
`),f.length>0&&(f+=`
`)):(p=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),f=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Ti?op("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,ap("linearToOutputTexel",t.outputColorSpace),lp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),a=Vl(a),a=eu(a,t),a=tu(a,t),o=Vl(o),o=eu(o,t),o=tu(o,t),a=iu(a),o=iu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=_+p+a,M=_+f+o,A=Jh(n,n.VERTEX_SHADER,v),R=Jh(n,n.FRAGMENT_SHADER,M);function I(H){if(r.debug.checkShaderErrors){let F=n.getProgramInfoLog(x)||"",Y=n.getShaderInfoLog(A)||"",G=n.getShaderInfoLog(R)||"",q=F.trim(),Z=Y.trim(),re=G.trim(),Q=!0,pe=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,A,R);else{let ve=Qh(n,A,"vertex"),fe=Qh(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+q+`
`+ve+`
`+fe)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):Z!==""&&re!==""||(pe=!1);pe&&(H.diagnostics={runnable:Q,programLog:q,vertexShader:{log:Z,prefix:p},fragmentShader:{log:re,prefix:f}})}n.deleteShader(A),n.deleteShader(R),N=new Jn(n,x),U=(function(F,Y){let G={},q=F.getProgramParameter(Y,F.ACTIVE_ATTRIBUTES);for(let Z=0;Z<q;Z++){let re=F.getActiveAttrib(Y,Z),Q=re.name,pe=1;re.type===F.FLOAT_MAT2&&(pe=2),re.type===F.FLOAT_MAT3&&(pe=3),re.type===F.FLOAT_MAT4&&(pe=4),G[Q]={type:re.type,location:F.getAttribLocation(Y,Q),locationSize:pe}}return G})(n,x)}let N,U;n.attachShader(x,A),n.attachShader(x,R),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x),this.getUniforms=function(){return N===void 0&&I(this),N},this.getAttributes=function(){return U===void 0&&I(this),U};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=n.getProgramParameter(x,37297)),B},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}var fp=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Wl(e),t.set(e,i)),i}},Wl=class{constructor(e){this.id=fp++,this.code=e,this.usedTimes=0}};function gp(r,e,t,i,n,s,a){let o=new Ln,c=new Hl,l=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,m=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(p){return l.add(p),p===0?"uv":`uv${p}`}return{getParameters:function(p,f,_,v,M){let A=v.fog,R=M.geometry,I=p.isMeshStandardMaterial?v.environment:null,N=(p.isMeshStandardMaterial?t:e).get(p.envMap||I),U=N&&N.mapping===Hr?N.image.height:null,B=g[p.type];p.precision!==null&&(m=n.getMaxPrecision(p.precision),m!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",m,"instead."));let H=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,F=H!==void 0?H.length:0,Y,G,q,Z,re=0;if(R.morphAttributes.position!==void 0&&(re=1),R.morphAttributes.normal!==void 0&&(re=2),R.morphAttributes.color!==void 0&&(re=3),B){let ft=ui[B];Y=ft.vertexShader,G=ft.fragmentShader}else Y=p.vertexShader,G=p.fragmentShader,c.update(p),q=c.getVertexShaderID(p),Z=c.getFragmentShaderID(p);let Q=r.getRenderTarget(),pe=r.state.buffers.depth.getReversed(),ve=M.isInstancedMesh===!0,fe=M.isBatchedMesh===!0,be=!!p.map,ne=!!p.matcap,ae=!!N,se=!!p.aoMap,ye=!!p.lightMap,Ce=!!p.bumpMap,b=!!p.normalMap,S=!!p.displacementMap,O=!!p.emissiveMap,P=!!p.metalnessMap,y=!!p.roughnessMap,w=p.anisotropy>0,D=p.clearcoat>0,C=p.dispersion>0,j=p.iridescence>0,z=p.sheen>0,k=p.transmission>0,te=w&&!!p.anisotropyMap,le=D&&!!p.clearcoatMap,ie=D&&!!p.clearcoatNormalMap,ue=D&&!!p.clearcoatRoughnessMap,ge=j&&!!p.iridescenceMap,xe=j&&!!p.iridescenceThicknessMap,Be=z&&!!p.sheenColorMap,He=z&&!!p.sheenRoughnessMap,We=!!p.specularMap,ce=!!p.specularColorMap,Me=!!p.specularIntensityMap,Fe=k&&!!p.transmissionMap,mt=k&&!!p.thicknessMap,me=!!p.gradientMap,je=!!p.alphaMap,ze=p.alphaTest>0,Ft=!!p.alphaHash,di=!!p.extensions,L=Ti;p.toneMapped&&(Q!==null&&Q.isXRRenderTarget!==!0||(L=r.toneMapping));let ht={shaderID:B,shaderType:p.type,shaderName:p.name,vertexShader:Y,fragmentShader:G,defines:p.defines,customVertexShaderID:q,customFragmentShaderID:Z,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:m,batching:fe,batchingColor:fe&&M._colorsTexture!==null,instancing:ve,instancingColor:ve&&M.instanceColor!==null,instancingMorph:ve&&M.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:$i,alphaToCoverage:!!p.alphaToCoverage,map:be,matcap:ne,envMap:ae,envMapMode:ae&&N.mapping,envMapCubeUVHeight:U,aoMap:se,lightMap:ye,bumpMap:Ce,normalMap:b,displacementMap:d&&S,emissiveMap:O,normalMapObjectSpace:b&&p.normalMapType===Sh,normalMapTangentSpace:b&&p.normalMapType===Mh,metalnessMap:P,roughnessMap:y,anisotropy:w,anisotropyMap:te,clearcoat:D,clearcoatMap:le,clearcoatNormalMap:ie,clearcoatRoughnessMap:ue,dispersion:C,iridescence:j,iridescenceMap:ge,iridescenceThicknessMap:xe,sheen:z,sheenColorMap:Be,sheenRoughnessMap:He,specularMap:We,specularColorMap:ce,specularIntensityMap:Me,transmission:k,transmissionMap:Fe,thicknessMap:mt,gradientMap:me,opaque:p.transparent===!1&&p.blending===Gr&&p.alphaToCoverage===!1,alphaMap:je,alphaTest:ze,alphaHash:Ft,combine:p.combine,mapUv:be&&x(p.map.channel),aoMapUv:se&&x(p.aoMap.channel),lightMapUv:ye&&x(p.lightMap.channel),bumpMapUv:Ce&&x(p.bumpMap.channel),normalMapUv:b&&x(p.normalMap.channel),displacementMapUv:S&&x(p.displacementMap.channel),emissiveMapUv:O&&x(p.emissiveMap.channel),metalnessMapUv:P&&x(p.metalnessMap.channel),roughnessMapUv:y&&x(p.roughnessMap.channel),anisotropyMapUv:te&&x(p.anisotropyMap.channel),clearcoatMapUv:le&&x(p.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(p.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(p.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&x(p.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&x(p.sheenColorMap.channel),sheenRoughnessMapUv:He&&x(p.sheenRoughnessMap.channel),specularMapUv:We&&x(p.specularMap.channel),specularColorMapUv:ce&&x(p.specularColorMap.channel),specularIntensityMapUv:Me&&x(p.specularIntensityMap.channel),transmissionMapUv:Fe&&x(p.transmissionMap.channel),thicknessMapUv:mt&&x(p.thicknessMap.channel),alphaMapUv:je&&x(p.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(b||w),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!R.attributes.uv&&(be||je),fog:!!A,useFog:p.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:p.flatShading===!0&&p.wireframe===!1,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:M.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:re,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numSpotLightMaps:f.spotLightMap.length,numRectAreaLights:f.rectArea.length,numHemiLights:f.hemi.length,numDirLightShadows:f.directionalShadowMap.length,numPointLightShadows:f.pointShadowMap.length,numSpotLightShadows:f.spotShadowMap.length,numSpotLightShadowsWithMaps:f.numSpotLightShadowsWithMaps,numLightProbes:f.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:p.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:L,decodeVideoTexture:be&&p.map.isVideoTexture===!0&&Ve.getTransfer(p.map.colorSpace)===Xe,decodeVideoTextureEmissive:O&&p.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(p.emissiveMap.colorSpace)===Xe,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Lt,flipSided:p.side===It,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:di&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(di&&p.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht},getProgramCacheKey:function(p){let f=[];if(p.shaderID?f.push(p.shaderID):(f.push(p.customVertexShaderID),f.push(p.customFragmentShaderID)),p.defines!==void 0)for(let _ in p.defines)f.push(_),f.push(p.defines[_]);return p.isRawShaderMaterial===!1&&((function(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)})(f,p),(function(_,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),_.push(o.mask)})(f,p),f.push(r.outputColorSpace)),f.push(p.customProgramCacheKey),f.join()},getUniforms:function(p){let f=g[p.type],_;if(f){let v=ui[f];_=Dh.clone(v.uniforms)}else _=p.uniforms;return _},acquireProgram:function(p,f){let _;for(let v=0,M=h.length;v<M;v++){let A=h[v];if(A.cacheKey===f){_=A,++_.usedTimes;break}}return _===void 0&&(_=new mp(r,f,p,s),h.push(_)),_},releaseProgram:function(p){if(--p.usedTimes===0){let f=h.indexOf(p);h[f]=h[h.length-1],h.pop(),p.destroy()}},releaseShaderCache:function(p){c.remove(p)},programs:h,dispose:function(){c.dispose()}}}function _p(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function vp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ru(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function su(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,c,l,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?i.push(d):c.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?i.unshift(d):c.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||vp),i.length>1&&i.sort(o||ru),n.length>1&&n.sort(o||ru)}}}function xp(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new su,r.set(e,[n])):t>=i.length?(n=new su,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function yp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new De};break;case"SpotLight":t={position:new T,direction:new T,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new T,halfWidth:new T,halfHeight:new T}}return r[e.id]=t,t}}}var Mp=0;function Sp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bp(r){let e=new yp,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new T);let n=new T,s=new Le,a=new Le;return{setup:function(o){let c=0,l=0,h=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let u=0,d=0,m=0,g=0,x=0,p=0,f=0,_=0,v=0,M=0,A=0;o.sort(Sp);for(let I=0,N=o.length;I<N;I++){let U=o[I],B=U.color,H=U.intensity,F=U.distance,Y=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)c+=B.r*H,l+=B.g*H,h+=B.b*H;else if(U.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(U.sh.coefficients[G],H);A++}else if(U.isDirectionalLight){let G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let q=U.shadow,Z=t.get(U);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,i.directionalShadow[u]=Z,i.directionalShadowMap[u]=Y,i.directionalShadowMatrix[u]=U.shadow.matrix,p++}i.directional[u]=G,u++}else if(U.isSpotLight){let G=e.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(B).multiplyScalar(H),G.distance=F,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,i.spot[m]=G;let q=U.shadow;if(U.map&&(i.spotLightMap[v]=U.map,v++,q.updateMatrices(U),U.castShadow&&M++),i.spotLightMatrix[m]=q.matrix,U.castShadow){let Z=t.get(U);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,i.spotShadow[m]=Z,i.spotShadowMap[m]=Y,_++}m++}else if(U.isRectAreaLight){let G=e.get(U);G.color.copy(B).multiplyScalar(H),G.halfWidth.set(.5*U.width,0,0),G.halfHeight.set(0,.5*U.height,0),i.rectArea[g]=G,g++}else if(U.isPointLight){let G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),G.distance=U.distance,G.decay=U.decay,U.castShadow){let q=U.shadow,Z=t.get(U);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,i.pointShadow[d]=Z,i.pointShadowMap[d]=Y,i.pointShadowMatrix[d]=U.shadow.matrix,f++}i.point[d]=G,d++}else if(U.isHemisphereLight){let G=e.get(U);G.skyColor.copy(U.color).multiplyScalar(H),G.groundColor.copy(U.groundColor).multiplyScalar(H),i.hemi[x]=G,x++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=l,i.ambient[2]=h;let R=i.hash;R.directionalLength===u&&R.pointLength===d&&R.spotLength===m&&R.rectAreaLength===g&&R.hemiLength===x&&R.numDirectionalShadows===p&&R.numPointShadows===f&&R.numSpotShadows===_&&R.numSpotMaps===v&&R.numLightProbes===A||(i.directional.length=u,i.spot.length=m,i.rectArea.length=g,i.point.length=d,i.hemi.length=x,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=f,i.pointShadowMap.length=f,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=f,i.spotLightMatrix.length=_+v-M,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=A,R.directionalLength=u,R.pointLength=d,R.spotLength=m,R.rectAreaLength=g,R.hemiLength=x,R.numDirectionalShadows=p,R.numPointShadows=f,R.numSpotShadows=_,R.numSpotMaps=v,R.numLightProbes=A,i.version=Mp++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,m=0,g=c.matrixWorldInverse;for(let x=0,p=o.length;x<p;x++){let f=o[x];if(f.isDirectionalLight){let _=i.directional[l];_.direction.setFromMatrixPosition(f.matrixWorld),n.setFromMatrixPosition(f.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),l++}else if(f.isSpotLight){let _=i.spot[u];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(f.matrixWorld),n.setFromMatrixPosition(f.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),u++}else if(f.isRectAreaLight){let _=i.rectArea[d];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(f.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(.5*f.width,0,0),_.halfHeight.set(0,.5*f.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(f.isPointLight){let _=i.point[h];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),h++}else if(f.isHemisphereLight){let _=i.hemi[m];_.direction.setFromMatrixPosition(f.matrixWorld),_.direction.transformDirection(g),m++}}},state:i}}function au(r){let e=new bp(r),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){n.camera=s,t.length=0,i.length=0},state:n,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function Tp(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new au(r),e.set(t,[s])):i>=n.length?(s=new au(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}function Ep(r,e,t){let i=new Oi,n=new J,s=new J,a=new Ze,o=new na({depthPacking:yh}),c=new ra,l={},h=t.maxTextureSize,u={[Wn]:It,[It]:Wn,[Lt]:Lt},d=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new $e;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new it(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ko;let f=this.type;function _(R,I){let N=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ai(n.x,n.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(I,null,N,d,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(I,null,N,m,x,null)}function v(R,I,N,U){let B=null,H=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0)B=H;else if(B=N.isPointLight===!0?c:o,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let F=B.uuid,Y=I.uuid,G=l[F];G===void 0&&(G={},l[F]=G);let q=G[Y];q===void 0&&(q=B.clone(),G[Y]=q,I.addEventListener("dispose",A)),B=q}return B.visible=I.visible,B.wireframe=I.wireframe,B.side=U===li?I.shadowSide!==null?I.shadowSide:I.side:I.shadowSide!==null?I.shadowSide:u[I.side],B.alphaMap=I.alphaMap,B.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,B.map=I.map,B.clipShadows=I.clipShadows,B.clippingPlanes=I.clippingPlanes,B.clipIntersection=I.clipIntersection,B.displacementMap=I.displacementMap,B.displacementScale=I.displacementScale,B.displacementBias=I.displacementBias,B.wireframeLinewidth=I.wireframeLinewidth,B.linewidth=I.linewidth,N.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(r.properties.get(B).light=N),B}function M(R,I,N,U,B){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&B===li)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let F=e.update(R),Y=R.material;if(Array.isArray(Y)){let G=F.groups;for(let q=0,Z=G.length;q<Z;q++){let re=G[q],Q=Y[re.materialIndex];if(Q&&Q.visible){let pe=v(R,Q,U,B);R.onBeforeShadow(r,R,I,N,F,pe,re),r.renderBufferDirect(N,null,F,pe,R,re),R.onAfterShadow(r,R,I,N,F,pe,re)}}}else if(Y.visible){let G=v(R,Y,U,B);R.onBeforeShadow(r,R,I,N,F,G,null),r.renderBufferDirect(N,null,F,G,R,null),R.onAfterShadow(r,R,I,N,F,G,null)}}let H=R.children;for(let F=0,Y=H.length;F<Y;F++)M(H[F],I,N,U,B)}function A(R){R.target.removeEventListener("dispose",A);for(let I in l){let N=l[I],U=R.target.uuid;U in N&&(N[U].dispose(),delete N[U])}}this.render=function(R,I,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let U=r.getRenderTarget(),B=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),F=r.state;F.setBlending(ki),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Y=f!==li&&this.type===li,G=f===li&&this.type!==li;for(let q=0,Z=R.length;q<Z;q++){let re=R[q],Q=re.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;n.copy(Q.mapSize);let pe=Q.getFrameExtents();if(n.multiply(pe),s.copy(Q.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/pe.x),n.x=s.x*pe.x,Q.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/pe.y),n.y=s.y*pe.y,Q.mapSize.y=s.y)),Q.map===null||Y===!0||G===!0){let fe=this.type!==li?{minFilter:ni,magFilter:ni}:{};Q.map!==null&&Q.map.dispose(),Q.map=new ai(n.x,n.y,fe),Q.map.texture.name=re.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();let ve=Q.getViewportCount();for(let fe=0;fe<ve;fe++){let be=Q.getViewport(fe);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),F.viewport(a),Q.updateMatrices(re,fe),i=Q.getFrustum(),M(I,N,Q.camera,re,this.type)}Q.isPointLightShadow!==!0&&this.type===li&&_(Q,N),Q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,r.setRenderTarget(U,B,H)}}var wp={[ga]:_a,[va]:Ma,[xa]:Sa,[Vr]:ya,[_a]:ga,[Ma]:va,[Sa]:xa,[ya]:Vr};function Ap(r,e){let t=new function(){let y=!1,w=new Ze,D=null,C=new Ze(0,0,0,0);return{setMask:function(j){D===j||y||(r.colorMask(j,j,j,j),D=j)},setLocked:function(j){y=j},setClear:function(j,z,k,te,le){le===!0&&(j*=te,z*=te,k*=te),w.set(j,z,k,te),C.equals(w)===!1&&(r.clearColor(j,z,k,te),C.copy(w))},reset:function(){y=!1,D=null,C.set(-1,0,0,0)}}},i=new function(){let y=!1,w=!1,D=null,C=null,j=null;return{setReversed:function(z){if(w!==z){let k=e.get("EXT_clip_control");z?k.clipControlEXT(k.LOWER_LEFT_EXT,k.ZERO_TO_ONE_EXT):k.clipControlEXT(k.LOWER_LEFT_EXT,k.NEGATIVE_ONE_TO_ONE_EXT),w=z;let te=j;j=null,this.setClear(te)}},getReversed:function(){return w},setTest:function(z){z?ae(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(z){D===z||y||(r.depthMask(z),D=z)},setFunc:function(z){if(w&&(z=wp[z]),C!==z){switch(z){case ga:r.depthFunc(r.NEVER);break;case _a:r.depthFunc(r.ALWAYS);break;case va:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case xa:r.depthFunc(r.EQUAL);break;case ya:r.depthFunc(r.GEQUAL);break;case Ma:r.depthFunc(r.GREATER);break;case Sa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}C=z}},setLocked:function(z){y=z},setClear:function(z){j!==z&&(w&&(z=1-z),r.clearDepth(z),j=z)},reset:function(){y=!1,D=null,C=null,j=null,w=!1}}},n=new function(){let y=!1,w=null,D=null,C=null,j=null,z=null,k=null,te=null,le=null;return{setTest:function(ie){y||(ie?ae(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(ie){w===ie||y||(r.stencilMask(ie),w=ie)},setFunc:function(ie,ue,ge){D===ie&&C===ue&&j===ge||(r.stencilFunc(ie,ue,ge),D=ie,C=ue,j=ge)},setOp:function(ie,ue,ge){z===ie&&k===ue&&te===ge||(r.stencilOp(ie,ue,ge),z=ie,k=ue,te=ge)},setLocked:function(ie){y=ie},setClear:function(ie){le!==ie&&(r.clearStencil(ie),le=ie)},reset:function(){y=!1,w=null,D=null,C=null,j=null,z=null,k=null,te=null,le=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,m=null,g=null,x=null,p=null,f=null,_=null,v=null,M=new De(0,0,0),A=0,R=!1,I=null,N=null,U=null,B=null,H=null,F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,G=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=G>=2);let Z=null,re={},Q=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),ve=new Ze().fromArray(Q),fe=new Ze().fromArray(pe);function be(y,w,D,C){let j=new Uint8Array(4),z=r.createTexture();r.bindTexture(y,z),r.texParameteri(y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let k=0;k<D;k++)y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?r.texImage3D(w,0,r.RGBA,1,1,C,0,r.RGBA,r.UNSIGNED_BYTE,j):r.texImage2D(w+k,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,j);return z}let ne={};function ae(y){o[y]!==!0&&(r.enable(y),o[y]=!0)}function se(y){o[y]!==!1&&(r.disable(y),o[y]=!1)}ne[r.TEXTURE_2D]=be(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=be(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),ae(r.DEPTH_TEST),i.setFunc(Vr),S(!1),O(zo),ae(r.CULL_FACE),b(ki);let ye={[jn]:r.FUNC_ADD,[Vc]:r.FUNC_SUBTRACT,[Hc]:r.FUNC_REVERSE_SUBTRACT};ye[Wc]=r.MIN,ye[jc]=r.MAX;let Ce={[Xc]:r.ZERO,[qc]:r.ONE,[Yc]:r.SRC_COLOR,[$c]:r.SRC_ALPHA,[ih]:r.SRC_ALPHA_SATURATE,[eh]:r.DST_COLOR,[Kc]:r.DST_ALPHA,[Zc]:r.ONE_MINUS_SRC_COLOR,[Jc]:r.ONE_MINUS_SRC_ALPHA,[th]:r.ONE_MINUS_DST_COLOR,[Qc]:r.ONE_MINUS_DST_ALPHA,[nh]:r.CONSTANT_COLOR,[rh]:r.ONE_MINUS_CONSTANT_COLOR,[sh]:r.CONSTANT_ALPHA,[ah]:r.ONE_MINUS_CONSTANT_ALPHA};function b(y,w,D,C,j,z,k,te,le,ie){if(y!==ki){if(d===!1&&(ae(r.BLEND),d=!0),y===Gc)j=j||w,z=z||D,k=k||C,w===g&&j===f||(r.blendEquationSeparate(ye[w],ye[j]),g=w,f=j),D===x&&C===p&&z===_&&k===v||(r.blendFuncSeparate(Ce[D],Ce[C],Ce[z],Ce[k]),x=D,p=C,_=z,v=k),te.equals(M)!==!1&&le===A||(r.blendColor(te.r,te.g,te.b,le),M.copy(te),A=le),m=y,R=!1;else if(y!==m||ie!==R){if(g===jn&&f===jn||(r.blendEquation(r.FUNC_ADD),g=jn,f=jn),ie)switch(y){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Go:r.blendFunc(r.ONE,r.ONE);break;case Vo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ho:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}else switch(y){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Go:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Vo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ho:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}x=null,p=null,_=null,v=null,M.set(0,0,0),A=0,m=y,R=ie}}else d===!0&&(se(r.BLEND),d=!1)}function S(y){I!==y&&(y?r.frontFace(r.CW):r.frontFace(r.CCW),I=y)}function O(y){y!==zc?(ae(r.CULL_FACE),y!==N&&(y===zo?r.cullFace(r.BACK):y===kc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),N=y}function P(y,w,D){y?(ae(r.POLYGON_OFFSET_FILL),B===w&&H===D||(r.polygonOffset(w,D),B=w,H=D)):se(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:ae,disable:se,bindFramebuffer:function(y,w){return c[y]!==w&&(r.bindFramebuffer(y,w),c[y]=w,y===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=w),y===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=w),!0)},drawBuffers:function(y,w){let D=h,C=!1;if(y){D=l.get(w),D===void 0&&(D=[],l.set(w,D));let j=y.textures;if(D.length!==j.length||D[0]!==r.COLOR_ATTACHMENT0){for(let z=0,k=j.length;z<k;z++)D[z]=r.COLOR_ATTACHMENT0+z;D.length=j.length,C=!0}}else D[0]!==r.BACK&&(D[0]=r.BACK,C=!0);C&&r.drawBuffers(D)},useProgram:function(y){return u!==y&&(r.useProgram(y),u=y,!0)},setBlending:b,setMaterial:function(y,w){y.side===Lt?se(r.CULL_FACE):ae(r.CULL_FACE);let D=y.side===It;w&&(D=!D),S(D),y.blending===Gr&&y.transparent===!1?b(ki):b(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),i.setFunc(y.depthFunc),i.setTest(y.depthTest),i.setMask(y.depthWrite),t.setMask(y.colorWrite);let C=y.stencilWrite;n.setTest(C),C&&(n.setMask(y.stencilWriteMask),n.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),n.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),P(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:O,setLineWidth:function(y){y!==U&&(Y&&r.lineWidth(y),U=y)},setPolygonOffset:P,setScissorTest:function(y){y?ae(r.SCISSOR_TEST):se(r.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=r.TEXTURE0+F-1),Z!==y&&(r.activeTexture(y),Z=y)},bindTexture:function(y,w,D){D===void 0&&(D=Z===null?r.TEXTURE0+F-1:Z);let C=re[D];C===void 0&&(C={type:void 0,texture:void 0},re[D]=C),C.type===y&&C.texture===w||(Z!==D&&(r.activeTexture(D),Z=D),r.bindTexture(y,w||ne[y]),C.type=y,C.texture=w)},unbindTexture:function(){let y=re[Z];y!==void 0&&y.type!==void 0&&(r.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},updateUBOMapping:function(y,w){let D=a.get(w);D===void 0&&(D=new WeakMap,a.set(w,D));let C=D.get(y);C===void 0&&(C=r.getUniformBlockIndex(w,y.name),D.set(y,C))},uniformBlockBinding:function(y,w){let D=a.get(w).get(y);s.get(w)!==D&&(r.uniformBlockBinding(w,D,y.__bindingPointIndex),s.set(w,D))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},scissor:function(y){ve.equals(y)===!1&&(r.scissor(y.x,y.y,y.z,y.w),ve.copy(y))},viewport:function(y){fe.equals(y)===!1&&(r.viewport(y.x,y.y,y.z,y.w),fe.copy(y))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},Z=null,re={},c={},l=new WeakMap,h=[],u=null,d=!1,m=null,g=null,x=null,p=null,f=null,_=null,v=null,M=new De(0,0,0),A=0,R=!1,I=null,N=null,U=null,B=null,H=null,ve.set(0,0,r.canvas.width,r.canvas.height),fe.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function Rp(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new J,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return m?new OffscreenCanvas(b,S):mr("canvas")}function x(b,S,O){let P=1,y=Ce(b);if((y.width>O||y.height>O)&&(P=O/Math.max(y.width,y.height)),P<1){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let w=Math.floor(P*y.width),D=Math.floor(P*y.height);u===void 0&&(u=g(w,D));let C=S?g(w,D):u;return C.width=w,C.height=D,C.getContext("2d").drawImage(b,0,0,w,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+w+"x"+D+")."),C}return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),b}return b}function p(b){return b.generateMipmaps}function f(b){r.generateMipmap(b)}function _(b){return b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?r.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(b,S,O,P,y=!1){if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let w=S;if(S===r.RED&&(O===r.FLOAT&&(w=r.R32F),O===r.HALF_FLOAT&&(w=r.R16F),O===r.UNSIGNED_BYTE&&(w=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(w=r.R8UI),O===r.UNSIGNED_SHORT&&(w=r.R16UI),O===r.UNSIGNED_INT&&(w=r.R32UI),O===r.BYTE&&(w=r.R8I),O===r.SHORT&&(w=r.R16I),O===r.INT&&(w=r.R32I)),S===r.RG&&(O===r.FLOAT&&(w=r.RG32F),O===r.HALF_FLOAT&&(w=r.RG16F),O===r.UNSIGNED_BYTE&&(w=r.RG8)),S===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(w=r.RG8UI),O===r.UNSIGNED_SHORT&&(w=r.RG16UI),O===r.UNSIGNED_INT&&(w=r.RG32UI),O===r.BYTE&&(w=r.RG8I),O===r.SHORT&&(w=r.RG16I),O===r.INT&&(w=r.RG32I)),S===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(w=r.RGB8UI),O===r.UNSIGNED_SHORT&&(w=r.RGB16UI),O===r.UNSIGNED_INT&&(w=r.RGB32UI),O===r.BYTE&&(w=r.RGB8I),O===r.SHORT&&(w=r.RGB16I),O===r.INT&&(w=r.RGB32I)),S===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(w=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(w=r.RGBA16UI),O===r.UNSIGNED_INT&&(w=r.RGBA32UI),O===r.BYTE&&(w=r.RGBA8I),O===r.SHORT&&(w=r.RGBA16I),O===r.INT&&(w=r.RGBA32I)),S===r.RGB&&(O===r.UNSIGNED_INT_5_9_9_9_REV&&(w=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(w=r.R11F_G11F_B10F)),S===r.RGBA){let D=y?dr:Ve.getTransfer(P);O===r.FLOAT&&(w=r.RGBA32F),O===r.HALF_FLOAT&&(w=r.RGBA16F),O===r.UNSIGNED_BYTE&&(w=D===Xe?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(w=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(w=r.RGB5_A1)}return w!==r.R16F&&w!==r.R32F&&w!==r.RG16F&&w!==r.RG32F&&w!==r.RGBA16F&&w!==r.RGBA32F||e.get("EXT_color_buffer_float"),w}function M(b,S){let O;return b?S===null||S===sn||S===Zn?O=r.DEPTH24_STENCIL8:S===hi?O=r.DEPTH32F_STENCIL8:S===qn&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===sn||S===Zn?O=r.DEPTH_COMPONENT24:S===hi?O=r.DEPTH_COMPONENT32F:S===qn&&(O=r.DEPTH_COMPONENT16),O}function A(b,S){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==ni&&b.minFilter!==ri?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function R(b){let S=b.target;S.removeEventListener("dispose",R),(function(O){let P=i.get(O);if(P.__webglInit===void 0)return;let y=O.source,w=d.get(y);if(w){let D=w[P.__cacheKey];D.usedTimes--,D.usedTimes===0&&N(O),Object.keys(w).length===0&&d.delete(y)}i.remove(O)})(S),S.isVideoTexture&&h.delete(S)}function I(b){let S=b.target;S.removeEventListener("dispose",I),(function(O){let P=i.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),i.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let w=0;w<6;w++){if(Array.isArray(P.__webglFramebuffer[w]))for(let D=0;D<P.__webglFramebuffer[w].length;D++)r.deleteFramebuffer(P.__webglFramebuffer[w][D]);else r.deleteFramebuffer(P.__webglFramebuffer[w]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[w])}else{if(Array.isArray(P.__webglFramebuffer))for(let w=0;w<P.__webglFramebuffer.length;w++)r.deleteFramebuffer(P.__webglFramebuffer[w]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let w=0;w<P.__webglColorRenderbuffer.length;w++)P.__webglColorRenderbuffer[w]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[w]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let y=O.textures;for(let w=0,D=y.length;w<D;w++){let C=i.get(y[w]);C.__webglTexture&&(r.deleteTexture(C.__webglTexture),a.memory.textures--),i.remove(y[w])}i.remove(O)})(S)}function N(b){let S=i.get(b);r.deleteTexture(S.__webglTexture);let O=b.source;delete d.get(O)[S.__cacheKey],a.memory.textures--}let U=0;function B(b,S){let O=i.get(b);if(b.isVideoTexture&&(function(P){let y=a.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())})(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){let P=b.image;if(P===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(P.complete!==!1)return void re(O,b,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}let H={[Rs]:r.REPEAT,[Rn]:r.CLAMP_TO_EDGE,[Cs]:r.MIRRORED_REPEAT},F={[ni]:r.NEAREST,[gh]:r.NEAREST_MIPMAP_NEAREST,[Wr]:r.NEAREST_MIPMAP_LINEAR,[ri]:r.LINEAR,[wa]:r.LINEAR_MIPMAP_NEAREST,[rn]:r.LINEAR_MIPMAP_LINEAR},Y={[bh]:r.NEVER,[Ch]:r.ALWAYS,[Th]:r.LESS,[wl]:r.LEQUAL,[Eh]:r.EQUAL,[Rh]:r.GEQUAL,[wh]:r.GREATER,[Ah]:r.NOTEQUAL};function G(b,S){if(S.type!==hi||e.has("OES_texture_float_linear")!==!1||S.magFilter!==ri&&S.magFilter!==wa&&S.magFilter!==Wr&&S.magFilter!==rn&&S.minFilter!==ri&&S.minFilter!==wa&&S.minFilter!==Wr&&S.minFilter!==rn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,H[S.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,H[S.wrapT]),b!==r.TEXTURE_3D&&b!==r.TEXTURE_2D_ARRAY||r.texParameteri(b,r.TEXTURE_WRAP_R,H[S.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,F[S.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,F[S.minFilter]),S.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,Y[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ni||S.minFilter!==Wr&&S.minFilter!==rn||S.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function q(b,S){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",R));let P=S.source,y=d.get(P);y===void 0&&(y={},d.set(P,y));let w=(function(D){let C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()})(S);if(w!==b.__cacheKey){y[w]===void 0&&(y[w]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),y[w].usedTimes++;let D=y[b.__cacheKey];D!==void 0&&(y[b.__cacheKey].usedTimes--,D.usedTimes===0&&N(S)),b.__cacheKey=w,b.__webglTexture=y[w].texture}return O}function Z(b,S,O){return Math.floor(Math.floor(b/O)/S)}function re(b,S,O){let P=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(P=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(P=r.TEXTURE_3D);let y=q(b,S),w=S.source;t.bindTexture(P,b.__webglTexture,r.TEXTURE0+O);let D=i.get(w);if(w.version!==D.__version||y===!0){t.activeTexture(r.TEXTURE0+O);let C=Ve.getPrimaries(Ve.workingColorSpace),j=S.colorSpace===an?null:Ve.getPrimaries(S.colorSpace),z=S.colorSpace===an||C===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);let k=x(S.image,!1,n.maxTextureSize);k=ye(S,k);let te=s.convert(S.format,S.colorSpace),le=s.convert(S.type),ie,ue=v(S.internalFormat,te,le,S.colorSpace,S.isVideoTexture);G(P,S);let ge=S.mipmaps,xe=S.isVideoTexture!==!0,Be=D.__version===void 0||y===!0,He=w.dataReady,We=A(S,k);if(S.isDepthTexture)ue=M(S.format===Xr,S.type),Be&&(xe?t.texStorage2D(r.TEXTURE_2D,1,ue,k.width,k.height):t.texImage2D(r.TEXTURE_2D,0,ue,k.width,k.height,0,te,le,null));else if(S.isDataTexture)if(ge.length>0){xe&&Be&&t.texStorage2D(r.TEXTURE_2D,We,ue,ge[0].width,ge[0].height);for(let ce=0,Me=ge.length;ce<Me;ce++)ie=ge[ce],xe?He&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,ie.width,ie.height,te,le,ie.data):t.texImage2D(r.TEXTURE_2D,ce,ue,ie.width,ie.height,0,te,le,ie.data);S.generateMipmaps=!1}else xe?(Be&&t.texStorage2D(r.TEXTURE_2D,We,ue,k.width,k.height),He&&(function(ce,Me,Fe,mt){let me=ce.updateRanges;if(me.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,Fe,mt,Me.data);else{me.sort((L,ht)=>L.start-ht.start);let je=0;for(let L=1;L<me.length;L++){let ht=me[je],ft=me[L],Qe=ht.start+ht.count,Gi=Z(ft.start,Me.width,4),Vi=Z(ht.start,Me.width,4);ft.start<=Qe+1&&Gi===Vi&&Z(ft.start+ft.count-1,Me.width,4)===Gi?ht.count=Math.max(ht.count,ft.start+ft.count-ht.start):(++je,me[je]=ft)}me.length=je+1;let ze=r.getParameter(r.UNPACK_ROW_LENGTH),Ft=r.getParameter(r.UNPACK_SKIP_PIXELS),di=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,Me.width);for(let L=0,ht=me.length;L<ht;L++){let ft=me[L],Qe=Math.floor(ft.start/4),Gi=Math.ceil(ft.count/4),Vi=Qe%Me.width,Qn=Math.floor(Qe/Me.width),$r=Gi;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Vi),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qn),t.texSubImage2D(r.TEXTURE_2D,0,Vi,Qn,$r,1,Fe,mt,Me.data)}ce.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ze),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ft),r.pixelStorei(r.UNPACK_SKIP_ROWS,di)}})(S,k,te,le)):t.texImage2D(r.TEXTURE_2D,0,ue,k.width,k.height,0,te,le,k.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xe&&Be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,We,ue,ge[0].width,ge[0].height,k.depth);for(let ce=0,Me=ge.length;ce<Me;ce++)if(ie=ge[ce],S.format!==$t)if(te!==null)if(xe){if(He)if(S.layerUpdates.size>0){let Fe=Ll(ie.width,ie.height,S.format,S.type);for(let mt of S.layerUpdates){let me=ie.data.subarray(mt*Fe/ie.data.BYTES_PER_ELEMENT,(mt+1)*Fe/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,mt,ie.width,ie.height,1,te,me)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,ie.width,ie.height,k.depth,te,ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,ue,ie.width,ie.height,k.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?He&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,ie.width,ie.height,k.depth,te,le,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ce,ue,ie.width,ie.height,k.depth,0,te,le,ie.data)}else{xe&&Be&&t.texStorage2D(r.TEXTURE_2D,We,ue,ge[0].width,ge[0].height);for(let ce=0,Me=ge.length;ce<Me;ce++)ie=ge[ce],S.format!==$t?te!==null?xe?He&&t.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,ie.width,ie.height,te,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,ce,ue,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?He&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,ie.width,ie.height,te,le,ie.data):t.texImage2D(r.TEXTURE_2D,ce,ue,ie.width,ie.height,0,te,le,ie.data)}else if(S.isDataArrayTexture)if(xe){if(Be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,We,ue,k.width,k.height,k.depth),He)if(S.layerUpdates.size>0){let ce=Ll(k.width,k.height,S.format,S.type);for(let Me of S.layerUpdates){let Fe=k.data.subarray(Me*ce/k.data.BYTES_PER_ELEMENT,(Me+1)*ce/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Me,k.width,k.height,1,te,le,Fe)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,te,le,k.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ue,k.width,k.height,k.depth,0,te,le,k.data);else if(S.isData3DTexture)xe?(Be&&t.texStorage3D(r.TEXTURE_3D,We,ue,k.width,k.height,k.depth),He&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,te,le,k.data)):t.texImage3D(r.TEXTURE_3D,0,ue,k.width,k.height,k.depth,0,te,le,k.data);else if(S.isFramebufferTexture){if(Be)if(xe)t.texStorage2D(r.TEXTURE_2D,We,ue,k.width,k.height);else{let ce=k.width,Me=k.height;for(let Fe=0;Fe<We;Fe++)t.texImage2D(r.TEXTURE_2D,Fe,ue,ce,Me,0,te,le,null),ce>>=1,Me>>=1}}else if(ge.length>0){if(xe&&Be){let ce=Ce(ge[0]);t.texStorage2D(r.TEXTURE_2D,We,ue,ce.width,ce.height)}for(let ce=0,Me=ge.length;ce<Me;ce++)ie=ge[ce],xe?He&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,te,le,ie):t.texImage2D(r.TEXTURE_2D,ce,ue,te,le,ie);S.generateMipmaps=!1}else if(xe){if(Be){let ce=Ce(k);t.texStorage2D(r.TEXTURE_2D,We,ue,ce.width,ce.height)}He&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,te,le,k)}else t.texImage2D(r.TEXTURE_2D,0,ue,te,le,k);p(S)&&f(P),D.__version=w.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Q(b,S,O,P,y,w){let D=s.convert(O.format,O.colorSpace),C=s.convert(O.type),j=v(O.internalFormat,D,C,O.colorSpace),z=i.get(S),k=i.get(O);if(k.__renderTarget=S,!z.__hasExternalTextures){let te=Math.max(1,S.width>>w),le=Math.max(1,S.height>>w);y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?t.texImage3D(y,w,j,te,le,S.depth,0,D,C,null):t.texImage2D(y,w,j,te,le,0,D,C,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),se(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,P,y,k.__webglTexture,0,ae(S)):(y===r.TEXTURE_2D||y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,P,y,k.__webglTexture,w),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(b,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,b),S.depthBuffer){let P=S.depthTexture,y=P&&P.isDepthTexture?P.type:null,w=M(S.stencilBuffer,y),D=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=ae(S);se(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,C,w,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,C,w,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,w,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,D,r.RENDERBUFFER,b)}else{let P=S.textures;for(let y=0;y<P.length;y++){let w=P[y],D=s.convert(w.format,w.colorSpace),C=s.convert(w.type),j=v(w.internalFormat,D,C,w.colorSpace),z=ae(S);O&&se(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,z,j,S.width,S.height):se(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z,j,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,j,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=i.get(S.depthTexture);O.__renderTarget=S,O.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);let P=O.__webglTexture,y=ae(S);if(S.depthTexture.format===jr)se(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,P,0,y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,P,0);else{if(S.depthTexture.format!==Xr)throw new Error("Unknown depthTexture format");se(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,P,0,y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,P,0)}}function fe(b){let S=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){let P=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),P){let y=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,P.removeEventListener("dispose",y)};P.addEventListener("dispose",y),S.__depthDisposeCallback=y}S.__boundDepthTexture=P}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let P=b.texture.mipmaps;P&&P.length>0?ve(S.__webglFramebuffer[0],b):ve(S.__webglFramebuffer,b)}else if(O){S.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[P]),S.__webglDepthbuffer[P]===void 0)S.__webglDepthbuffer[P]=r.createRenderbuffer(),pe(S.__webglDepthbuffer[P],b,!1);else{let y=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,w=S.__webglDepthbuffer[P];r.bindRenderbuffer(r.RENDERBUFFER,w),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,w)}}else{let P=b.texture.mipmaps;if(P&&P.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),pe(S.__webglDepthbuffer,b,!1);else{let y=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,w=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,w),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,w)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let be=[],ne=[];function ae(b){return Math.min(n.maxSamples,b.samples)}function se(b){let S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(b,S){let O=b.colorSpace,P=b.format,y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==$i&&O!==an&&(Ve.getTransfer(O)===Xe?P===$t&&y===ci||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Ce(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=function(){let b=U;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),U+=1,b},this.resetTextureUnits=function(){U=0},this.setTexture2D=B,this.setTexture2DArray=function(b,S){let O=i.get(b);b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version?re(O,b,S):t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)},this.setTexture3D=function(b,S){let O=i.get(b);b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version?re(O,b,S):t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)},this.setTextureCube=function(b,S){let O=i.get(b);b.version>0&&O.__version!==b.version?(function(P,y,w){if(y.image.length!==6)return;let D=q(P,y),C=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+w);let j=i.get(C);if(C.version!==j.__version||D===!0){t.activeTexture(r.TEXTURE0+w);let z=Ve.getPrimaries(Ve.workingColorSpace),k=y.colorSpace===an?null:Ve.getPrimaries(y.colorSpace),te=y.colorSpace===an||z===k?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let le=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let me=0;me<6;me++)ue[me]=le||ie?ie?y.image[me].image:y.image[me]:x(y.image[me],!0,n.maxCubemapSize),ue[me]=ye(y,ue[me]);let ge=ue[0],xe=s.convert(y.format,y.colorSpace),Be=s.convert(y.type),He=v(y.internalFormat,xe,Be,y.colorSpace),We=y.isVideoTexture!==!0,ce=j.__version===void 0||D===!0,Me=C.dataReady,Fe,mt=A(y,ge);if(G(r.TEXTURE_CUBE_MAP,y),le){We&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,mt,He,ge.width,ge.height);for(let me=0;me<6;me++){Fe=ue[me].mipmaps;for(let je=0;je<Fe.length;je++){let ze=Fe[je];y.format!==$t?xe!==null?We?Me&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,ze.width,ze.height,xe,ze.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,He,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,ze.width,ze.height,xe,Be,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,He,ze.width,ze.height,0,xe,Be,ze.data)}}}else{if(Fe=y.mipmaps,We&&ce){Fe.length>0&&mt++;let me=Ce(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,mt,He,me.width,me.height)}for(let me=0;me<6;me++)if(ie){We?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ue[me].width,ue[me].height,xe,Be,ue[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,He,ue[me].width,ue[me].height,0,xe,Be,ue[me].data);for(let je=0;je<Fe.length;je++){let ze=Fe[je].image[me].image;We?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,ze.width,ze.height,xe,Be,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,He,ze.width,ze.height,0,xe,Be,ze.data)}}else{We?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,xe,Be,ue[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,He,xe,Be,ue[me]);for(let je=0;je<Fe.length;je++){let ze=Fe[je];We?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,xe,Be,ze.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,He,xe,Be,ze.image[me])}}}p(y)&&f(r.TEXTURE_CUBE_MAP),j.__version=C.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version})(O,b,S):t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)},this.rebindTextures=function(b,S,O){let P=i.get(b);S!==void 0&&Q(P.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&fe(b)},this.setupRenderTarget=function(b){let S=b.texture,O=i.get(b),P=i.get(S);b.addEventListener("dispose",I);let y=b.textures,w=b.isWebGLCubeRenderTarget===!0,D=y.length>1;if(D||(P.__webglTexture===void 0&&(P.__webglTexture=r.createTexture()),P.__version=S.version,a.memory.textures++),w){O.__webglFramebuffer=[];for(let C=0;C<6;C++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[C]=[];for(let j=0;j<S.mipmaps.length;j++)O.__webglFramebuffer[C][j]=r.createFramebuffer()}else O.__webglFramebuffer[C]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let C=0;C<S.mipmaps.length;C++)O.__webglFramebuffer[C]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(D)for(let C=0,j=y.length;C<j;C++){let z=i.get(y[C]);z.__webglTexture===void 0&&(z.__webglTexture=r.createTexture(),a.memory.textures++)}if(b.samples>0&&se(b)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let C=0;C<y.length;C++){let j=y[C];O.__webglColorRenderbuffer[C]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[C]);let z=s.convert(j.format,j.colorSpace),k=s.convert(j.type),te=v(j.internalFormat,z,k,j.colorSpace,b.isXRRenderTarget===!0),le=ae(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,le,te,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+C,r.RENDERBUFFER,O.__webglColorRenderbuffer[C])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(w){t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture),G(r.TEXTURE_CUBE_MAP,S);for(let C=0;C<6;C++)if(S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Q(O.__webglFramebuffer[C][j],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+C,j);else Q(O.__webglFramebuffer[C],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);p(S)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(D){for(let C=0,j=y.length;C<j;C++){let z=y[C],k=i.get(z),te=r.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(te=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(te,k.__webglTexture),G(te,z),Q(O.__webglFramebuffer,b,z,r.COLOR_ATTACHMENT0+C,te,0),p(z)&&f(te)}t.unbindTexture()}else{let C=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(C=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(C,P.__webglTexture),G(C,S),S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Q(O.__webglFramebuffer[j],b,S,r.COLOR_ATTACHMENT0,C,j);else Q(O.__webglFramebuffer,b,S,r.COLOR_ATTACHMENT0,C,0);p(S)&&f(C),t.unbindTexture()}b.depthBuffer&&fe(b)},this.updateRenderTargetMipmap=function(b){let S=b.textures;for(let O=0,P=S.length;O<P;O++){let y=S[O];if(p(y)){let w=_(b),D=i.get(y).__webglTexture;t.bindTexture(w,D),f(w),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(b){if(b.samples>0){if(se(b)===!1){let S=b.textures,O=b.width,P=b.height,y=r.COLOR_BUFFER_BIT,w=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,D=i.get(b),C=S.length>1;if(C)for(let z=0;z<S.length;z++)t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer);let j=b.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,D.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let z=0;z<S.length;z++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(y|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(y|=r.STENCIL_BUFFER_BIT)),C){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,D.__webglColorRenderbuffer[z]);let k=i.get(S[z]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,k,0)}r.blitFramebuffer(0,0,O,P,0,0,O,P,y,r.NEAREST),c===!0&&(be.length=0,ne.length=0,be.push(r.COLOR_ATTACHMENT0+z),b.depthBuffer&&b.resolveDepthBuffer===!1&&(be.push(w),ne.push(w),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ne)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),C)for(let z=0;z<S.length;z++){t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,D.__webglColorRenderbuffer[z]);let k=i.get(S[z]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,k,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let S=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=se}function Cp(r,e){return{convert:function(t,i=an){let n,s=Ve.getTransfer(i);if(t===ci)return r.UNSIGNED_BYTE;if(t===Ra)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Ca)return r.UNSIGNED_SHORT_5_5_5_1;if(t===qo)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===Yo)return r.UNSIGNED_INT_10F_11F_11F_REV;if(t===jo)return r.BYTE;if(t===Xo)return r.SHORT;if(t===qn)return r.UNSIGNED_SHORT;if(t===Aa)return r.INT;if(t===sn)return r.UNSIGNED_INT;if(t===hi)return r.FLOAT;if(t===Yn)return r.HALF_FLOAT;if(t===_h)return r.ALPHA;if(t===vh)return r.RGB;if(t===$t)return r.RGBA;if(t===jr)return r.DEPTH_COMPONENT;if(t===Xr)return r.DEPTH_STENCIL;if(t===Zo)return r.RED;if(t===Pa)return r.RED_INTEGER;if(t===xh)return r.RG;if(t===$o)return r.RG_INTEGER;if(t===Jo)return r.RGBA_INTEGER;if(t===Ia||t===La||t===Da||t===Ua)if(s===Xe){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===Ia)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===La)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Da)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ua)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===Ia)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===La)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Da)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ua)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Ko||t===Qo||t===el||t===tl){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===Ko)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Qo)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===el)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===tl)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===il||t===nl||t===rl){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===il||t===nl)return s===Xe?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===rl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(t===sl||t===al||t===ol||t===ll||t===cl||t===hl||t===ul||t===dl||t===pl||t===ml||t===fl||t===gl||t===_l||t===vl){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===sl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===al)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===ol)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===ll)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===cl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===hl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===ul)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===dl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===pl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===ml)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===fl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===gl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===_l)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===vl)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===xl||t===yl||t===Ml){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===xl)return s===Xe?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===yl)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Ml)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Sl||t===bl||t===Tl||t===El){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===Sl)return n.COMPRESSED_RED_RGTC1_EXT;if(t===bl)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Tl)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===El)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Zn?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new br(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Yt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xl=class extends si{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,x=typeof XRWebGLBinding<"u",p=new jl,f={},_=t.getContextAttributes(),v=null,M=null,A=[],R=[],I=new J,N=null,U=new St;U.viewport=new Ze;let B=new St;B.viewport=new Ze;let H=[U,B],F=new ma,Y=null,G=null;function q(ne){let ae=R.indexOf(ne.inputSource);if(ae===-1)return;let se=A[ae];se!==void 0&&(se.update(ne.inputSource,ne.frame,l||a),se.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Z(){n.removeEventListener("select",q),n.removeEventListener("selectstart",q),n.removeEventListener("selectend",q),n.removeEventListener("squeeze",q),n.removeEventListener("squeezestart",q),n.removeEventListener("squeezeend",q),n.removeEventListener("end",Z),n.removeEventListener("inputsourceschange",re);for(let ne=0;ne<A.length;ne++){let ae=R[ne];ae!==null&&(R[ne]=null,A[ne].disconnect(ae))}Y=null,G=null,p.reset();for(let ne in f)delete f[ne];e.setRenderTarget(v),m=null,d=null,u=null,n=null,M=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}function re(ne){for(let ae=0;ae<ne.removed.length;ae++){let se=ne.removed[ae],ye=R.indexOf(se);ye>=0&&(R[ye]=null,A[ye].disconnect(se))}for(let ae=0;ae<ne.added.length;ae++){let se=ne.added[ae],ye=R.indexOf(se);if(ye===-1){for(let b=0;b<A.length;b++){if(b>=R.length){R.push(se),ye=b;break}if(R[b]===null){R[b]=se,ye=b;break}}if(ye===-1)break}let Ce=A[ye];Ce&&Ce.connect(se)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ae=A[ne];return ae===void 0&&(ae=new Un,A[ne]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ne){let ae=A[ne];return ae===void 0&&(ae=new Un,A[ne]=ae),ae.getGripSpace()},this.getHand=function(ne){let ae=A[ne];return ae===void 0&&(ae=new Un,A[ne]=ae),ae.getHandSpace()},this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(ne){if(n=ne,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",q),n.addEventListener("selectstart",q),n.addEventListener("selectend",q),n.addEventListener("squeeze",q),n.addEventListener("squeezestart",q),n.addEventListener("squeezeend",q),n.addEventListener("end",Z),n.addEventListener("inputsourceschange",re),_.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,se=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=_.stencil?Xr:jr,se=_.stencil?Zn:sn);let Ce={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ce),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ai(d.textureWidth,d.textureHeight,{format:$t,type:ci,depthTexture:new Sr(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(n,t,ae),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ai(m.framebufferWidth,m.framebufferHeight,{format:$t,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),be.setContext(n),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};let Q=new T,pe=new T;function ve(ne,ae){ae===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ae.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(n===null)return;let ae=ne.near,se=ne.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(se=p.depthFar)),F.near=B.near=U.near=ae,F.far=B.far=U.far=se,Y===F.near&&G===F.far||(n.updateRenderState({depthNear:F.near,depthFar:F.far}),Y=F.near,G=F.far),F.layers.mask=6|ne.layers.mask,U.layers.mask=3&F.layers.mask,B.layers.mask=5&F.layers.mask;let ye=ne.parent,Ce=F.cameras;ve(F,ye);for(let b=0;b<Ce.length;b++)ve(Ce[b],ye);Ce.length===2?(function(b,S,O){Q.setFromMatrixPosition(S.matrixWorld),pe.setFromMatrixPosition(O.matrixWorld);let P=Q.distanceTo(pe),y=S.projectionMatrix.elements,w=O.projectionMatrix.elements,D=y[14]/(y[10]-1),C=y[14]/(y[10]+1),j=(y[9]+1)/y[5],z=(y[9]-1)/y[5],k=(y[8]-1)/y[0],te=(w[8]+1)/w[0],le=D*k,ie=D*te,ue=P/(-k+te),ge=ue*-k;if(S.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(ge),b.translateZ(ue),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert(),y[10]===-1)b.projectionMatrix.copy(S.projectionMatrix),b.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let xe=D+ue,Be=C+ue,He=le-ge,We=ie+(P-ge),ce=j*C/Be*xe,Me=z*C/Be*xe;b.projectionMatrix.makePerspective(He,We,ce,Me,xe,Be),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}})(F,U,B):F.projectionMatrix.copy(U.projectionMatrix),(function(b,S,O){O===null?b.matrix.copy(S.matrixWorld):(b.matrix.copy(O.matrixWorld),b.matrix.invert(),b.matrix.multiply(S.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(S.projectionMatrix),b.projectionMatrixInverse.copy(S.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=2*Cn*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)})(ne,F,ye)},this.getCamera=function(){return F},this.getFoveation=function(){if(d!==null||m!==null)return c},this.setFoveation=function(ne){c=ne,d!==null&&(d.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(ne){return f[ne]};let fe=null,be=new ou;be.setAnimationLoop(function(ne,ae){if(h=ae.getViewerPose(l||a),g=ae,h!==null){let se=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let ye=!1;se.length!==F.cameras.length&&(F.cameras.length=0,ye=!0);for(let b=0;b<se.length;b++){let S=se[b],O=null;if(m!==null)O=m.getViewport(S);else{let y=u.getViewSubImage(d,S);O=y.viewport,b===0&&(e.setRenderTargetTextures(M,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(M))}let P=H[b];P===void 0&&(P=new St,P.layers.enable(b),P.viewport=new Ze,H[b]=P),P.matrix.fromArray(S.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(S.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(O.x,O.y,O.width,O.height),b===0&&(F.matrix.copy(P.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ye===!0&&F.cameras.push(P)}let Ce=n.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let b=u.getDepthInformation(se[0]);b&&b.isValid&&b.texture&&p.init(b,n.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let b=0;b<se.length;b++){let S=se[b].camera;if(S){let O=f[S];O||(O=new br,f[S]=O);let P=u.getCameraImage(S);O.sourceTexture=P}}}}for(let se=0;se<A.length;se++){let ye=R[se],Ce=A[se];ye!==null&&Ce!==void 0&&Ce.update(ye,ae,l||a)}fe&&fe(ne,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}),this.setAnimationLoop=function(ne){fe=ne},this.dispose=function(){}}},hn=new qt,Pp=new Le;function Ip(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===It&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===It&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(n.envMap.value=o,hn.copy(c),hn.x*=-1,hn.y*=-1,hn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(hn.y*=-1,hn.z*=-1),n.envMapRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(hn)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,Cl(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(n,s)):s.isMeshStandardMaterial?(i(n,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===It&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(n,s,c)):s.isMeshMatcapMaterial?(i(n,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(n,s)):s.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Lp(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,m,g){let x=u.value,p=d+"_"+m;if(g[p]===void 0)return g[p]=typeof x=="number"||typeof x=="boolean"?x:x.clone(),!0;{let f=g[p];if(typeof x=="number"||typeof x=="boolean"){if(f!==x)return g[p]=x,!0}else if(f.equals(x)===!1)return f.copy(x),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=a.indexOf(d.__bindingPointIndex);a.splice(m,1),r.deleteBuffer(n[d.id]),delete n[d.id],delete s[d.id]}return{bind:function(u,d){let m=d.program;i.uniformBlockBinding(u,m)},update:function(u,d){let m=n[u.id];m===void 0&&((function(p){let f=p.uniforms,_=0,v=16;for(let A=0,R=f.length;A<R;A++){let I=Array.isArray(f[A])?f[A]:[f[A]];for(let N=0,U=I.length;N<U;N++){let B=I[N],H=Array.isArray(B.value)?B.value:[B.value];for(let F=0,Y=H.length;F<Y;F++){let G=l(H[F]),q=_%v,Z=q%G.boundary,re=q+Z;_+=Z,re!==0&&v-re<G.storage&&(_+=v-re),B.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=G.storage}}}let M=_%v;M>0&&(_+=v-M),p.__size=_,p.__cache={}})(u),m=(function(p){let f=(function(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();p.__bindingPointIndex=f;let _=r.createBuffer(),v=p.__size,M=p.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,v,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,f,_),_})(u),n[u.id]=m,u.addEventListener("dispose",h));let g=d.program;i.updateUBOMapping(u,g);let x=e.render.frame;s[u.id]!==x&&((function(p){let f=n[p.id],_=p.uniforms,v=p.__cache;r.bindBuffer(r.UNIFORM_BUFFER,f);for(let M=0,A=_.length;M<A;M++){let R=Array.isArray(_[M])?_[M]:[_[M]];for(let I=0,N=R.length;I<N;I++){let U=R[I];if(c(U,M,I,v)===!0){let B=U.__offset,H=Array.isArray(U.value)?U.value:[U.value],F=0;for(let Y=0;Y<H.length;Y++){let G=H[Y],q=l(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,B+F,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,F),F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=x)},dispose:function(){for(let u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}var za=class{constructor(e={}){let{canvas:t=Ph(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e,m;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let g=new Uint32Array(4),x=new Int32Array(4),p=null,f=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,A=!1;this._outputColorSpace=vt;let R=0,I=0,N=null,U=-1,B=null,H=new Ze,F=new Ze,Y=null,G=new De(0),q=0,Z=t.width,re=t.height,Q=1,pe=null,ve=null,fe=new Ze(0,0,Z,re),be=new Ze(0,0,Z,re),ne=!1,ae=new Oi,se=!1,ye=!1,Ce=new Le,b=new T,S=new Ze,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},P=!1;function y(){return N===null?Q:1}let w,D,C,j,z,k,te,le,ie,ue,ge,xe,Be,He,We,ce,Me,Fe,mt,me,je,ze,Ft,di,L=i;function ht(E,V){return t.getContext(E,V)}try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Gi,!1),t.addEventListener("webglcontextrestored",Vi,!1),t.addEventListener("webglcontextcreationerror",Qn,!1),L===null){let V="webgl2";if(L=ht(V,E),L===null)throw ht(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}function ft(){w=new md(L),w.init(),ze=new Cp(L,w),D=new cd(L,w,e,ze),C=new Ap(L,w),D.reversedDepthBuffer&&d&&C.buffers.depth.setReversed(!0),j=new _d(L),z=new _p,k=new Rp(L,w,C,z,D,ze,j),te=new ud(M),le=new pd(M),ie=new rd(L),Ft=new od(L,ie),ue=new fd(L,ie,j,Ft),ge=new xd(L,ue,ie,j),mt=new vd(L,D,k),ce=new hd(z),xe=new gp(M,te,le,w,D,Ft,ce),Be=new Ip(M,z),He=new xp,We=new Tp(w),Fe=new ad(M,te,le,C,ge,m,c),Me=new Ep(M,ge,D),di=new Lp(L,j,D,C),me=new ld(L,w,j),je=new gd(L,w,j),j.programs=xe.programs,M.capabilities=D,M.extensions=w,M.properties=z,M.renderLists=He,M.shadowMap=Me,M.state=C,M.info=j}ft();let Qe=new Xl(M,L);function Gi(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Vi(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let E=j.autoReset,V=Me.enabled,X=Me.autoUpdate,$=Me.needsUpdate,W=Me.type;ft(),j.autoReset=E,Me.enabled=V,Me.autoUpdate=X,Me.needsUpdate=$,Me.type=W}function Qn(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $r(E){let V=E.target;V.removeEventListener("dispose",$r),(function(X){(function($){let W=z.get($).programs;W!==void 0&&(W.forEach(function(ee){xe.releaseProgram(ee)}),$.isShaderMaterial&&xe.releaseShaderCache($))})(X),z.remove(X)})(V)}function Wa(E,V,X){E.transparent===!0&&E.side===Lt&&E.forceSinglePass===!1?(E.side=It,E.needsUpdate=!0,Kr(E,V,X),E.side=Wn,E.needsUpdate=!0,Kr(E,V,X),E.side=Lt):Kr(E,V,X)}this.xr=Qe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=w.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=w.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(Z,re,!1))},this.getSize=function(E){return E.set(Z,re)},this.setSize=function(E,V,X=!0){Qe.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Z=E,re=V,t.width=Math.floor(E*Q),t.height=Math.floor(V*Q),X===!0&&(t.style.width=E+"px",t.style.height=V+"px"),this.setViewport(0,0,E,V))},this.getDrawingBufferSize=function(E){return E.set(Z*Q,re*Q).floor()},this.setDrawingBufferSize=function(E,V,X){Z=E,re=V,Q=X,t.width=Math.floor(E*X),t.height=Math.floor(V*X),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy(fe)},this.setViewport=function(E,V,X,$){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,V,X,$),C.viewport(H.copy(fe).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(be)},this.setScissor=function(E,V,X,$){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,V,X,$),C.scissor(F.copy(be).multiplyScalar(Q).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){C.setScissorTest(ne=E)},this.setOpaqueSort=function(E){pe=E},this.setTransparentSort=function(E){ve=E},this.getClearColor=function(E){return E.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,X=!0){let $=0;if(E){let W=!1;if(N!==null){let ee=N.texture.format;W=ee===Jo||ee===$o||ee===Pa}if(W){let ee=N.texture.type,he=ee===ci||ee===sn||ee===qn||ee===Zn||ee===Ra||ee===Ca,de=Fe.getClearColor(),_e=Fe.getClearAlpha(),Te=de.r,we=de.g,Ee=de.b;he?(g[0]=Te,g[1]=we,g[2]=Ee,g[3]=_e,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Te,x[1]=we,x[2]=Ee,x[3]=_e,L.clearBufferiv(L.COLOR,0,x))}else $|=L.COLOR_BUFFER_BIT}V&&($|=L.DEPTH_BUFFER_BIT),X&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Gi,!1),t.removeEventListener("webglcontextrestored",Vi,!1),t.removeEventListener("webglcontextcreationerror",Qn,!1),Fe.dispose(),He.dispose(),We.dispose(),z.dispose(),te.dispose(),le.dispose(),ge.dispose(),Ft.dispose(),di.dispose(),xe.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",$l),Qe.removeEventListener("sessionend",Jl),Hi.stop()},this.renderBufferDirect=function(E,V,X,$,W,ee){V===null&&(V=O);let he=W.isMesh&&W.matrixWorld.determinant()<0,de=(function(ke,et,dt,Oe,Ae){et.isScene!==!0&&(et=O),k.resetTextureUnits();let Bt=et.fog,qa=Oe.isMeshStandardMaterial?et.environment:null,Qr=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:$i,Ei=(Oe.isMeshStandardMaterial?le:te).get(Oe.envMap||qa),Jt=Oe.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,dn=!!dt.attributes.tangent&&(!!Oe.normalMap||Oe.anisotropy>0),pi=!!dt.morphAttributes.position,Ya=!!dt.morphAttributes.normal,pn=!!dt.morphAttributes.color,nc=Ti;Oe.toneMapped&&(N!==null&&N.isXRRenderTarget!==!0||(nc=M.toneMapping));let rc=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,vu=rc!==void 0?rc.length:0,Ge=z.get(Oe),xu=f.state.lights;if(se===!0&&(ye===!0||ke!==B)){let Dt=ke===B&&Oe.id===U;ce.setState(Oe,ke,Dt)}let zt=!1;Oe.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==xu.state.version||Ge.outputColorSpace!==Qr||Ae.isBatchedMesh&&Ge.batching===!1?zt=!0:Ae.isBatchedMesh||Ge.batching!==!0?Ae.isBatchedMesh&&Ge.batchingColor===!0&&Ae.colorTexture===null||Ae.isBatchedMesh&&Ge.batchingColor===!1&&Ae.colorTexture!==null||Ae.isInstancedMesh&&Ge.instancing===!1?zt=!0:Ae.isInstancedMesh||Ge.instancing!==!0?Ae.isSkinnedMesh&&Ge.skinning===!1?zt=!0:Ae.isSkinnedMesh||Ge.skinning!==!0?Ae.isInstancedMesh&&Ge.instancingColor===!0&&Ae.instanceColor===null||Ae.isInstancedMesh&&Ge.instancingColor===!1&&Ae.instanceColor!==null||Ae.isInstancedMesh&&Ge.instancingMorph===!0&&Ae.morphTexture===null||Ae.isInstancedMesh&&Ge.instancingMorph===!1&&Ae.morphTexture!==null||Ge.envMap!==Ei||Oe.fog===!0&&Ge.fog!==Bt?zt=!0:Ge.numClippingPlanes===void 0||Ge.numClippingPlanes===ce.numPlanes&&Ge.numIntersection===ce.numIntersection?(Ge.vertexAlphas!==Jt||Ge.vertexTangents!==dn||Ge.morphTargets!==pi||Ge.morphNormals!==Ya||Ge.morphColors!==pn||Ge.toneMapping!==nc||Ge.morphTargetsCount!==vu)&&(zt=!0):zt=!0:zt=!0:zt=!0:zt=!0:(zt=!0,Ge.__version=Oe.version);let Wi=Ge.currentProgram;zt===!0&&(Wi=Kr(Oe,et,Ae));let sc=!1,er=!1,Za=!1,st=Wi.getUniforms(),wi=Ge.uniforms;if(C.useProgram(Wi.program)&&(sc=!0,er=!0,Za=!0),Oe.id!==U&&(U=Oe.id,er=!0),sc||B!==ke){C.buffers.depth.getReversed()&&ke.reversedDepth!==!0&&(ke._reversedDepth=!0,ke.updateProjectionMatrix()),st.setValue(L,"projectionMatrix",ke.projectionMatrix),st.setValue(L,"viewMatrix",ke.matrixWorldInverse);let Dt=st.map.cameraPosition;Dt!==void 0&&Dt.setValue(L,b.setFromMatrixPosition(ke.matrixWorld)),D.logarithmicDepthBuffer&&st.setValue(L,"logDepthBufFC",2/(Math.log(ke.far+1)/Math.LN2)),(Oe.isMeshPhongMaterial||Oe.isMeshToonMaterial||Oe.isMeshLambertMaterial||Oe.isMeshBasicMaterial||Oe.isMeshStandardMaterial||Oe.isShaderMaterial)&&st.setValue(L,"isOrthographic",ke.isOrthographicCamera===!0),B!==ke&&(B=ke,er=!0,Za=!0)}if(Ae.isSkinnedMesh){st.setOptional(L,Ae,"bindMatrix"),st.setOptional(L,Ae,"bindMatrixInverse");let Dt=Ae.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),st.setValue(L,"boneTexture",Dt.boneTexture,k))}Ae.isBatchedMesh&&(st.setOptional(L,Ae,"batchingTexture"),st.setValue(L,"batchingTexture",Ae._matricesTexture,k),st.setOptional(L,Ae,"batchingIdTexture"),st.setValue(L,"batchingIdTexture",Ae._indirectTexture,k),st.setOptional(L,Ae,"batchingColorTexture"),Ae._colorsTexture!==null&&st.setValue(L,"batchingColorTexture",Ae._colorsTexture,k));let $a=dt.morphAttributes;$a.position===void 0&&$a.normal===void 0&&$a.color===void 0||mt.update(Ae,dt,Wi),(er||Ge.receiveShadow!==Ae.receiveShadow)&&(Ge.receiveShadow=Ae.receiveShadow,st.setValue(L,"receiveShadow",Ae.receiveShadow)),Oe.isMeshGouraudMaterial&&Oe.envMap!==null&&(wi.envMap.value=Ei,wi.flipEnvMap.value=Ei.isCubeTexture&&Ei.isRenderTargetTexture===!1?-1:1),Oe.isMeshStandardMaterial&&Oe.envMap===null&&et.environment!==null&&(wi.envMapIntensity.value=et.environmentIntensity),er&&(st.setValue(L,"toneMappingExposure",M.toneMappingExposure),Ge.needsLights&&(kt=Za,(Kt=wi).ambientLightColor.needsUpdate=kt,Kt.lightProbe.needsUpdate=kt,Kt.directionalLights.needsUpdate=kt,Kt.directionalLightShadows.needsUpdate=kt,Kt.pointLights.needsUpdate=kt,Kt.pointLightShadows.needsUpdate=kt,Kt.spotLights.needsUpdate=kt,Kt.spotLightShadows.needsUpdate=kt,Kt.rectAreaLights.needsUpdate=kt,Kt.hemisphereLights.needsUpdate=kt),Bt&&Oe.fog===!0&&Be.refreshFogUniforms(wi,Bt),Be.refreshMaterialUniforms(wi,Oe,Q,re,f.state.transmissionRenderTarget[ke.id]),Jn.upload(L,tc(Ge),wi,k));var Kt,kt;if(Oe.isShaderMaterial&&Oe.uniformsNeedUpdate===!0&&(Jn.upload(L,tc(Ge),wi,k),Oe.uniformsNeedUpdate=!1),Oe.isSpriteMaterial&&st.setValue(L,"center",Ae.center),st.setValue(L,"modelViewMatrix",Ae.modelViewMatrix),st.setValue(L,"normalMatrix",Ae.normalMatrix),st.setValue(L,"modelMatrix",Ae.matrixWorld),Oe.isShaderMaterial||Oe.isRawShaderMaterial){let Dt=Oe.uniformsGroups;for(let Ja=0,yu=Dt.length;Ja<yu;Ja++){let ac=Dt[Ja];di.update(ac,Wi),di.bind(ac,Wi)}}return Wi})(E,V,X,$,W);C.setMaterial($,he);let _e=X.index,Te=1;if($.wireframe===!0){if(_e=ue.getWireframeAttribute(X),_e===void 0)return;Te=2}let we=X.drawRange,Ee=X.attributes.position,Ne=we.start*Te,Je=(we.start+we.count)*Te;ee!==null&&(Ne=Math.max(Ne,ee.start*Te),Je=Math.min(Je,(ee.start+ee.count)*Te)),_e!==null?(Ne=Math.max(Ne,0),Je=Math.min(Je,_e.count)):Ee!=null&&(Ne=Math.max(Ne,0),Je=Math.min(Je,Ee.count));let nt=Je-Ne;if(nt<0||nt===1/0)return;let rt;Ft.setup(W,$,de,X,_e);let Ke=me;if(_e!==null&&(rt=ie.get(_e),Ke=je,Ke.setIndex(rt)),W.isMesh)$.wireframe===!0?(C.setLineWidth($.wireframeLinewidth*y()),Ke.setMode(L.LINES)):Ke.setMode(L.TRIANGLES);else if(W.isLine){let ke=$.linewidth;ke===void 0&&(ke=1),C.setLineWidth(ke*y()),W.isLineSegments?Ke.setMode(L.LINES):W.isLineLoop?Ke.setMode(L.LINE_LOOP):Ke.setMode(L.LINE_STRIP)}else W.isPoints?Ke.setMode(L.POINTS):W.isSprite&&Ke.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Pn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(w.get("WEBGL_multi_draw"))Ke.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ke=W._multiDrawStarts,et=W._multiDrawCounts,dt=W._multiDrawCount,Oe=_e?ie.get(_e).bytesPerElement:1,Ae=z.get($).currentProgram.getUniforms();for(let Bt=0;Bt<dt;Bt++)Ae.setValue(L,"_gl_DrawID",Bt),Ke.render(ke[Bt]/Oe,et[Bt])}else if(W.isInstancedMesh)Ke.renderInstances(Ne,nt,W.count);else if(X.isInstancedBufferGeometry){let ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,et=Math.min(X.instanceCount,ke);Ke.renderInstances(Ne,nt,et)}else Ke.render(Ne,nt)},this.compile=function(E,V,X=null){X===null&&(X=E),f=We.get(X),f.init(V),v.push(f),X.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),E!==X&&E.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights();let $=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ee=W.material;if(ee)if(Array.isArray(ee))for(let he=0;he<ee.length;he++){let de=ee[he];Wa(de,X,W),$.add(de)}else Wa(ee,X,W),$.add(ee)}),f=v.pop(),$},this.compileAsync=function(E,V,X=null){let $=this.compile(E,V,X);return new Promise(W=>{function ee(){$.forEach(function(he){z.get(he).currentProgram.isReady()&&$.delete(he)}),$.size!==0?setTimeout(ee,10):W(E)}w.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let ja=null;function $l(){Hi.stop()}function Jl(){Hi.start()}let Hi=new ou;function Xa(E,V,X,$){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ae.intersectsSprite(E)){$&&S.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ce);let ee=ge.update(E),he=E.material;he.visible&&p.push(E,ee,he,X,S.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ae.intersectsObject(E))){let ee=ge.update(E),he=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),S.copy(E.boundingSphere.center)):(ee.boundingSphere===null&&ee.computeBoundingSphere(),S.copy(ee.boundingSphere.center)),S.applyMatrix4(E.matrixWorld).applyMatrix4(Ce)),Array.isArray(he)){let de=ee.groups;for(let _e=0,Te=de.length;_e<Te;_e++){let we=de[_e],Ee=he[we.materialIndex];Ee&&Ee.visible&&p.push(E,ee,Ee,X,S.z,we)}}else he.visible&&p.push(E,ee,he,X,S.z,null)}}let W=E.children;for(let ee=0,he=W.length;ee<he;ee++)Xa(W[ee],V,X,$)}function Kl(E,V,X,$){let W=E.opaque,ee=E.transmissive,he=E.transparent;f.setupLightsView(X),se===!0&&ce.setGlobalState(M.clippingPlanes,X),$&&C.viewport(H.copy($)),W.length>0&&Jr(W,V,X),ee.length>0&&Jr(ee,V,X),he.length>0&&Jr(he,V,X),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function Ql(E,V,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new ai(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")||w.has("EXT_color_buffer_float")?Yn:ci,minFilter:rn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));let W=f.state.transmissionRenderTarget[$.id],ee=$.viewport||H;W.setSize(ee.z*M.transmissionResolutionScale,ee.w*M.transmissionResolutionScale);let he=M.getRenderTarget(),de=M.getActiveCubeFace(),_e=M.getActiveMipmapLevel();M.setRenderTarget(W),M.getClearColor(G),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),P&&Fe.render(X);let Te=M.toneMapping;M.toneMapping=Ti;let we=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),se===!0&&ce.setGlobalState(M.clippingPlanes,$),Jr(E,X,$),k.updateMultisampleRenderTarget(W),k.updateRenderTargetMipmap(W),w.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Ne=0,Je=V.length;Ne<Je;Ne++){let nt=V[Ne],rt=nt.object,Ke=nt.geometry,ke=nt.material,et=nt.group;if(ke.side===Lt&&rt.layers.test($.layers)){let dt=ke.side;ke.side=It,ke.needsUpdate=!0,ec(rt,X,$,Ke,ke,et),ke.side=dt,ke.needsUpdate=!0,Ee=!0}}Ee===!0&&(k.updateMultisampleRenderTarget(W),k.updateRenderTargetMipmap(W))}M.setRenderTarget(he,de,_e),M.setClearColor(G,q),we!==void 0&&($.viewport=we),M.toneMapping=Te}function Jr(E,V,X){let $=V.isScene===!0?V.overrideMaterial:null;for(let W=0,ee=E.length;W<ee;W++){let he=E[W],de=he.object,_e=he.geometry,Te=he.group,we=he.material;we.allowOverride===!0&&$!==null&&(we=$),de.layers.test(X.layers)&&ec(de,V,X,_e,we,Te)}}function ec(E,V,X,$,W,ee){E.onBeforeRender(M,V,X,$,W,ee),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(M,V,X,$,E,ee),W.transparent===!0&&W.side===Lt&&W.forceSinglePass===!1?(W.side=It,W.needsUpdate=!0,M.renderBufferDirect(X,V,$,W,E,ee),W.side=Wn,W.needsUpdate=!0,M.renderBufferDirect(X,V,$,W,E,ee),W.side=Lt):M.renderBufferDirect(X,V,$,W,E,ee),E.onAfterRender(M,V,X,$,W,ee)}function Kr(E,V,X){V.isScene!==!0&&(V=O);let $=z.get(E),W=f.state.lights,ee=f.state.shadowsArray,he=W.state.version,de=xe.getParameters(E,W.state,ee,V,X),_e=xe.getProgramCacheKey(de),Te=$.programs;$.environment=E.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(E.isMeshStandardMaterial?le:te).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",$r),Te=new Map,$.programs=Te);let we=Te.get(_e);if(we!==void 0){if($.currentProgram===we&&$.lightsStateVersion===he)return ic(E,de),we}else de.uniforms=xe.getUniforms(E),E.onBeforeCompile(de,M),we=xe.acquireProgram(de,_e),Te.set(_e,we),$.uniforms=de.uniforms;let Ee=$.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Ee.clippingPlanes=ce.uniform),ic(E,de),$.needsLights=(function(Ne){return Ne.isMeshLambertMaterial||Ne.isMeshToonMaterial||Ne.isMeshPhongMaterial||Ne.isMeshStandardMaterial||Ne.isShadowMaterial||Ne.isShaderMaterial&&Ne.lights===!0})(E),$.lightsStateVersion=he,$.needsLights&&(Ee.ambientLightColor.value=W.state.ambient,Ee.lightProbe.value=W.state.probe,Ee.directionalLights.value=W.state.directional,Ee.directionalLightShadows.value=W.state.directionalShadow,Ee.spotLights.value=W.state.spot,Ee.spotLightShadows.value=W.state.spotShadow,Ee.rectAreaLights.value=W.state.rectArea,Ee.ltc_1.value=W.state.rectAreaLTC1,Ee.ltc_2.value=W.state.rectAreaLTC2,Ee.pointLights.value=W.state.point,Ee.pointLightShadows.value=W.state.pointShadow,Ee.hemisphereLights.value=W.state.hemi,Ee.directionalShadowMap.value=W.state.directionalShadowMap,Ee.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ee.spotShadowMap.value=W.state.spotShadowMap,Ee.spotLightMatrix.value=W.state.spotLightMatrix,Ee.spotLightMap.value=W.state.spotLightMap,Ee.pointShadowMap.value=W.state.pointShadowMap,Ee.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=we,$.uniformsList=null,we}function tc(E){if(E.uniformsList===null){let V=E.currentProgram.getUniforms();E.uniformsList=Jn.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function ic(E,V){let X=z.get(E);X.outputColorSpace=V.outputColorSpace,X.batching=V.batching,X.batchingColor=V.batchingColor,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.instancingMorph=V.instancingMorph,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}Hi.setAnimationLoop(function(E){ja&&ja(E)}),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(E){ja=E,Qe.setAnimationLoop(E),E===null?Hi.stop():Hi.start()},Qe.addEventListener("sessionstart",$l),Qe.addEventListener("sessionend",Jl),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(V),V=Qe.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,V,N),f=We.get(E,v.length),f.init(V),v.push(f),Ce.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ae.setFromProjectionMatrix(Ce,Mi,V.reversedDepth),ye=this.localClippingEnabled,se=ce.init(this.clippingPlanes,ye),p=He.get(E,_.length),p.init(),_.push(p),Qe.enabled===!0&&Qe.isPresenting===!0){let ee=M.xr.getDepthSensingMesh();ee!==null&&Xa(ee,V,-1/0,M.sortObjects)}Xa(E,V,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(pe,ve),P=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,P&&Fe.addToRenderList(p,E),this.info.render.frame++,se===!0&&ce.beginShadows();let X=f.state.shadowsArray;Me.render(X,E,V),se===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=p.opaque,W=p.transmissive;if(f.setupLights(),V.isArrayCamera){let ee=V.cameras;if(W.length>0)for(let he=0,de=ee.length;he<de;he++)Ql($,W,E,ee[he]);P&&Fe.render(E);for(let he=0,de=ee.length;he<de;he++){let _e=ee[he];Kl(p,E,_e,_e.viewport)}}else W.length>0&&Ql($,W,E,V),P&&Fe.render(E),Kl(p,E,V);N!==null&&I===0&&(k.updateMultisampleRenderTarget(N),k.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(M,E,V),Ft.resetDefaultState(),U=-1,B=null,v.pop(),v.length>0?(f=v[v.length-1],se===!0&&ce.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,_.pop(),p=_.length>0?_[_.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,V,X){let $=z.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),z.get(E.texture).__webglTexture=V,z.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:X,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){let X=z.get(E);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0};let fu=L.createFramebuffer();this.setRenderTarget=function(E,V=0,X=0){N=E,R=V,I=X;let $=!0,W=null,ee=!1,he=!1;if(E){let de=z.get(E);if(de.__useDefaultFramebuffer!==void 0)C.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(de.__webglFramebuffer===void 0)k.setupRenderTarget(E);else if(de.__hasExternalTextures)k.rebindTextures(E,z.get(E.texture).__webglTexture,z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let we=E.depthTexture;if(de.__boundDepthTexture!==we){if(we!==null&&z.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(E)}}let _e=E.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(he=!0);let Te=z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(W=Array.isArray(Te[V])?Te[V][X]:Te[V],ee=!0):W=E.samples>0&&k.useMultisampledRTT(E)===!1?z.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?Te[X]:Te,H.copy(E.viewport),F.copy(E.scissor),Y=E.scissorTest}else H.copy(fe).multiplyScalar(Q).floor(),F.copy(be).multiplyScalar(Q).floor(),Y=ne;if(X!==0&&(W=fu),C.bindFramebuffer(L.FRAMEBUFFER,W)&&$&&C.drawBuffers(E,W),C.viewport(H),C.scissor(F),C.setScissorTest(Y),ee){let de=z.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,de.__webglTexture,X)}else if(he){let de=V;for(let _e=0;_e<E.textures.length;_e++){let Te=z.get(E.textures[_e]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_e,Te.__webglTexture,X,de)}}else if(E!==null&&X!==0){let de=z.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,de.__webglTexture,X)}U=-1},this.readRenderTargetPixels=function(E,V,X,$,W,ee,he,de=0){if(!E||!E.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){C.bindFramebuffer(L.FRAMEBUFFER,_e);try{let Te=E.textures[de],we=Te.format,Ee=Te.type;if(!D.textureFormatReadable(we))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(Ee))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");V>=0&&V<=E.width-$&&X>=0&&X<=E.height-W&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+de),L.readPixels(V,X,$,W,ze.convert(we),ze.convert(Ee),ee))}finally{let Te=N!==null?z.get(N).__webglFramebuffer:null;C.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,V,X,$,W,ee,he,de=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){if(V>=0&&V<=E.width-$&&X>=0&&X<=E.height-W){C.bindFramebuffer(L.FRAMEBUFFER,_e);let Te=E.textures[de],we=Te.format,Ee=Te.type;if(!D.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ne=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+de),L.readPixels(V,X,$,W,ze.convert(we),ze.convert(Ee),0);let Je=N!==null?z.get(N).__webglFramebuffer:null;C.bindFramebuffer(L.FRAMEBUFFER,Je);let nt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ih(L,nt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer(Ne),L.deleteSync(nt),ee}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,V=null,X=0){let $=Math.pow(2,-X),W=Math.floor(E.image.width*$),ee=Math.floor(E.image.height*$),he=V!==null?V.x:0,de=V!==null?V.y:0;k.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,he,de,W,ee),C.unbindTexture()};let gu=L.createFramebuffer(),_u=L.createFramebuffer();this.copyTextureToTexture=function(E,V,X=null,$=null,W=0,ee=null){let he,de,_e,Te,we,Ee,Ne,Je,nt;ee===null&&(W!==0?(Pn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=W,W=0):ee=0);let rt=E.isCompressedTexture?E.mipmaps[ee]:E.image;if(X!==null)he=X.max.x-X.min.x,de=X.max.y-X.min.y,_e=X.isBox3?X.max.z-X.min.z:1,Te=X.min.x,we=X.min.y,Ee=X.isBox3?X.min.z:0;else{let Jt=Math.pow(2,-W);he=Math.floor(rt.width*Jt),de=Math.floor(rt.height*Jt),_e=E.isDataArrayTexture?rt.depth:E.isData3DTexture?Math.floor(rt.depth*Jt):1,Te=0,we=0,Ee=0}$!==null?(Ne=$.x,Je=$.y,nt=$.z):(Ne=0,Je=0,nt=0);let Ke=ze.convert(V.format),ke=ze.convert(V.type),et;V.isData3DTexture?(k.setTexture3D(V,0),et=L.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(k.setTexture2DArray(V,0),et=L.TEXTURE_2D_ARRAY):(k.setTexture2D(V,0),et=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);let dt=L.getParameter(L.UNPACK_ROW_LENGTH),Oe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ae=L.getParameter(L.UNPACK_SKIP_PIXELS),Bt=L.getParameter(L.UNPACK_SKIP_ROWS),qa=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,rt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),L.pixelStorei(L.UNPACK_SKIP_ROWS,we),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee);let Qr=E.isDataArrayTexture||E.isData3DTexture,Ei=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){let Jt=z.get(E),dn=z.get(V),pi=z.get(Jt.__renderTarget),Ya=z.get(dn.__renderTarget);C.bindFramebuffer(L.READ_FRAMEBUFFER,pi.__webglFramebuffer),C.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ya.__webglFramebuffer);for(let pn=0;pn<_e;pn++)Qr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(E).__webglTexture,W,Ee+pn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(V).__webglTexture,ee,nt+pn)),L.blitFramebuffer(Te,we,he,de,Ne,Je,he,de,L.DEPTH_BUFFER_BIT,L.NEAREST);C.bindFramebuffer(L.READ_FRAMEBUFFER,null),C.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||z.has(E)){let Jt=z.get(E),dn=z.get(V);C.bindFramebuffer(L.READ_FRAMEBUFFER,gu),C.bindFramebuffer(L.DRAW_FRAMEBUFFER,_u);for(let pi=0;pi<_e;pi++)Qr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Jt.__webglTexture,W,Ee+pi):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Jt.__webglTexture,W),Ei?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dn.__webglTexture,ee,nt+pi):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dn.__webglTexture,ee),W!==0?L.blitFramebuffer(Te,we,he,de,Ne,Je,he,de,L.COLOR_BUFFER_BIT,L.NEAREST):Ei?L.copyTexSubImage3D(et,ee,Ne,Je,nt+pi,Te,we,he,de):L.copyTexSubImage2D(et,ee,Ne,Je,Te,we,he,de);C.bindFramebuffer(L.READ_FRAMEBUFFER,null),C.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ei?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(et,ee,Ne,Je,nt,he,de,_e,Ke,ke,rt.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(et,ee,Ne,Je,nt,he,de,_e,Ke,rt.data):L.texSubImage3D(et,ee,Ne,Je,nt,he,de,_e,Ke,ke,rt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ee,Ne,Je,he,de,Ke,ke,rt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ee,Ne,Je,rt.width,rt.height,Ke,rt.data):L.texSubImage2D(L.TEXTURE_2D,ee,Ne,Je,he,de,Ke,ke,rt);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Oe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qa),ee===0&&V.generateMipmaps&&L.generateMipmap(et),C.unbindTexture()},this.initRenderTarget=function(E){z.get(E).__webglFramebuffer===void 0&&k.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?k.setTextureCube(E,0):E.isData3DTexture?k.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?k.setTexture2DArray(E,0):k.setTexture2D(E,0),C.unbindTexture()},this.resetState=function(){R=0,I=0,N=null,C.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}};var du={type:"change"},Zl={type:"start"},mu={type:"end"},Ga=new oi,pu=new Nt,Up=Math.cos(70*qr.DEG2RAD),ct=new T,Et=2*Math.PI,qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yl=1e-6,Va=class extends kr{constructor(e,t=null){super(e,t),this.state=qe.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ot.ROTATE,MIDDLE:Ot.DOLLY,RIGHT:Ot.PAN},this.touches={ONE:Zt.ROTATE,TWO:Zt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Tt,this._lastTargetPosition=new T,this._quat=new Tt().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hn,this._sphericalDelta=new Hn,this._scale=1,this._panOffset=new T,this._rotateStart=new J,this._rotateEnd=new J,this._rotateDelta=new J,this._panStart=new J,this._panEnd=new J,this._panDelta=new J,this._dollyStart=new J,this._dollyEnd=new J,this._dollyDelta=new J,this._dollyDirection=new T,this._mouse=new J,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Op.bind(this),this._onPointerDown=Np.bind(this),this._onPointerUp=Fp.bind(this),this._onContextMenu=Wp.bind(this),this._onMouseWheel=kp.bind(this),this._onKeyDown=Gp.bind(this),this._onTouchStart=Vp.bind(this),this._onTouchMove=Hp.bind(this),this._onMouseDown=Bp.bind(this),this._onMouseMove=zp.bind(this),this._interceptControlDown=jp.bind(this),this._interceptControlUp=Xp.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(du),this.update(),this.state=qe.NONE}update(e=null){let t=this.object.position;ct.copy(t).sub(this.target),ct.applyQuaternion(this._quat),this._spherical.setFromVector3(ct),this.autoRotate&&this.state===qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Et:i>Math.PI&&(i-=Et),n<-Math.PI?n+=Et:n>Math.PI&&(n-=Et),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ct.setFromSpherical(this._spherical),ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ct.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let o=new T(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ga.origin.copy(this.object.position),Ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ga.direction))<Up?this.object.lookAt(this.target):(pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ga.intersectPlane(pu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Yl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yl||this._lastTargetPosition.distanceToSquared(this.target)>Yl?(this.dispatchEvent(du),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Et/60*this.autoRotateSpeed*e:Et/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ct.setFromMatrixColumn(t,0),ct.multiplyScalar(-e),this._panOffset.add(ct)}_panUp(e,t){this.screenSpacePanning===!0?ct.setFromMatrixColumn(t,1):(ct.setFromMatrixColumn(t,0),ct.crossVectors(this.object.up,ct)),ct.multiplyScalar(e),this._panOffset.add(ct)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;ct.copy(n).sub(this.target);let s=ct.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Et*this._rotateDelta.x/t.clientHeight),this._rotateUp(Et*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Et*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Et*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Et*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Et*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,s=Math.sqrt(i*i+n*n);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(n,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Et*this._rotateDelta.x/t.clientHeight),this._rotateUp(Et*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,s=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new J,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Np(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Op(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Fp(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mu),this.state=qe.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Bp(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=qe.DOLLY;break;case Ot.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=qe.ROTATE}break;case Ot.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=qe.PAN}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(Zl)}function zp(r){switch(this.state){case qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function kp(r){this.enabled===!1||this.enableZoom===!1||this.state!==qe.NONE||(r.preventDefault(),this.dispatchEvent(Zl),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(mu))}function Gp(r){this.enabled!==!1&&this._handleKeyDown(r)}function Vp(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Zt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=qe.TOUCH_ROTATE;break;case Zt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=qe.TOUCH_PAN;break;default:this.state=qe.NONE}break;case 2:switch(this.touches.TWO){case Zt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=qe.TOUCH_DOLLY_PAN;break;case Zt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=qe.TOUCH_DOLLY_ROTATE;break;default:this.state=qe.NONE}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(Zl)}function Hp(r){switch(this._trackPointer(r),this.state){case qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=qe.NONE}}function Wp(r){this.enabled!==!1&&r.preventDefault()}function jp(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xp(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var K={ink:15921906,graphite:2302755,green:63891,cyan:55295,magenta:16319117,yellow:16371714},Ha=class{constructor(e,t,i){this.canvas=e,this.container=t,this.onSelect=i,this.time=0,this.groups={},this.labels={},this.rings={},this.actors=[],this.packets=[],this.telemetry=[],this.selected="darkside",this.active="client",this.showEvidence=!0,this.topView=!1,this.renderer=new za({canvas:e,antialias:!0,alpha:!0,powerPreference:"default"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(K.graphite,0),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=fa,this.renderer.outputColorSpace=vt,this.renderer.toneMapping=ba,this.renderer.toneMappingExposure=1.15,this.scene=new xr,this.scene.background=new De(K.graphite),this.camera=new tn(-30,30,20,-20,.1,160),this.camera.position.set(34,39,47),this.camera.lookAt(0,0,0),this.controls=new Va(this.camera,e),this.controls.target.set(0,0,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!0,this.controls.minZoom=.65,this.controls.maxZoom=2.7,this.controls.minPolarAngle=.18,this.controls.maxPolarAngle=1.25,this.controls.mouseButtons={LEFT:Ot.ROTATE,MIDDLE:Ot.DOLLY,RIGHT:Ot.PAN},this.controls.touches={ONE:Zt.ROTATE,TWO:Zt.DOLLY_PAN},this.scene.add(new Br(K.ink,1.6));let n=new Fr(K.ink,2302755,2.2);this.scene.add(n);let s=new Vn(K.ink,3.4);s.position.set(-18,35,20),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-36,right:36,top:30,bottom:-30,near:1,far:90}),s.shadow.bias=-8e-4,this.scene.add(s);let a=new Vn(K.cyan,.55);a.position.set(20,14,-25),this.scene.add(a),this.buildFloor(),Qt.forEach(c=>this.buildOrganization(c)),yt.forEach((c,l)=>this.buildStation(c,l)),this.buildRoutes(),this.resize(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.raycaster=new zr,this.mouse=new J;let o;e.addEventListener("pointerdown",c=>o={x:c.clientX,y:c.clientY}),e.addEventListener("pointerup",c=>{if(!o||Math.hypot(c.clientX-o.x,c.clientY-o.y)>5)return;let l=e.getBoundingClientRect();this.mouse.set((c.clientX-l.left)/l.width*2-1,-(c.clientY-l.top)/l.height*2+1),this.raycaster.setFromCamera(this.mouse,this.camera);let u=this.raycaster.intersectObjects(this.scene.children,!0).find(d=>d.object.userData.station);u&&this.onSelect(u.object.userData.station)})}material(e,t={}){return new Ur({color:e,roughness:.55,metalness:.12,...t})}box(e,t,i,n,s,a,o,c=K.ink,l={}){let h=new bi(t,i,n),u=new it(h,this.material(c,l));return u.position.set(s,a,o),u.castShadow=!0,u.receiveShadow=!0,e.add(u),u}cylinder(e,t,i,n,s,a,o,c={},l=20){let h=new it(new Fi(t,t,i,l),this.material(o,c));return h.position.set(n,s,a),h.castShadow=!0,h.receiveShadow=!0,e.add(h),h}sphere(e,t,i,n,s,a){let o=new it(new Bn(t,12,10),this.material(a));return o.position.set(i,n,s),o.castShadow=!0,e.add(o),o}line(e,t,i,n=1,s=!1){let a=new $e().setFromPoints(t),o=s?new Nr({color:i,transparent:!0,opacity:n,dashSize:.3,gapSize:.28}):new Ji({color:i,transparent:!0,opacity:n}),c=new yr(a,o);return s&&c.computeLineDistances(),e.add(c),c}tube(e,t,i,n,s,a={}){let o=new T().subVectors(i,t),c=new it(new Fi(n,n,o.length(),10),this.material(s,a));return c.position.copy(t).add(i).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new T(0,1,0),o.normalize()),c.castShadow=!0,e.add(c),c}sign(e,t,i,n,s,a,o=K.ink,c=K.graphite){let l=document.createElement("canvas");l.width=512,l.height=112;let h=l.getContext("2d");h.fillStyle="#"+c.toString(16).padStart(6,"0"),h.fillRect(0,0,512,112),h.fillStyle="#"+o.toString(16).padStart(6,"0"),h.font="500 39px Sora",h.textAlign="center",h.textBaseline="middle",h.fillText(t,256,58,480);let u=new Mr(l);u.colorSpace=vt;let d=new it(new zi(i,i*112/512),new Ni({map:u,side:Lt}));return d.position.set(n,s,a),e.add(d),d}buildFloor(){this.box(this.scene,46,.65,29,0,-.48,0,3619385),this.box(this.scene,45.8,.12,28.8,0,-.1,0,2961455);for(let t=-22;t<=22;t+=2)this.line(this.scene,[new T(t,-.03,-14),new T(t,-.03,14)],K.ink,.055);for(let t=-14;t<=14;t+=2)this.line(this.scene,[new T(-22,-.03,t),new T(22,-.03,t)],K.ink,.055);this.line(this.scene,[[-23,0,-14.5],[23,0,-14.5],[23,0,14.5],[-23,0,14.5],[-23,0,-14.5]].map(t=>new T(...t)),K.ink,.28);for(let t=0;t<22;t++)this.box(this.scene,.13,.05,.7,-21+t*2,.02,14.15,t%2?K.graphite:K.ink);let e=this.box(this.scene,180,.25,160,0,-1,0,K.graphite);e.receiveShadow=!0}buildOrganization(e){let t=new Wt;t.position.set(e.x,0,e.z),this.scene.add(t),this.groups[e.id]=t;let i=e.width,n=e.depth;this.box(t,i,.14,n,0,.02,0,3425597),this.line(t,[[-i/2,.14,-n/2],[i/2,.14,-n/2],[i/2,.14,n/2],[-i/2,.14,n/2],[-i/2,.14,-n/2]].map(c=>new T(...c)),e.color,.95);for(let[c,l]of[[-i/2,-n/2],[i/2,-n/2],[-i/2,n/2]])this.box(t,.18,4.4,.18,c,2.3,l,K.ink);this.box(t,i+.18,.19,.22,0,4.5,-n/2,K.ink),this.box(t,.22,.19,n,-i/2,4.5,0,K.ink),this.box(t,i,3.65,.05,0,2,-n/2,K.cyan,{transparent:!0,opacity:.08,depthWrite:!1}),this.box(t,.05,3.65,n,-i/2,2,0,K.cyan,{transparent:!0,opacity:.06,depthWrite:!1}),this.sign(t,"ATELI\xCA DE SOFTWARE",7.5,0,4.95,-n/2+.03,K.ink),t.traverse(c=>{c.isMesh&&(c.userData.station=e.id)});let s=document.createElement("button");s.className="company-label",s.dataset.organization=e.id,s.setAttribute("aria-label",`Explorar a empresa ${e.name}`);let a=document.querySelector(".identity img").cloneNode();a.alt=e.name,s.append(a);let o=document.createElement("span");o.textContent="EMPRESA",s.append(o),s.addEventListener("click",()=>this.onSelect(e.id)),document.getElementById("labels").append(s),this.labels[e.id]=s}buildStation(e,t){let i=new Wt,n=Qt.find(l=>l.id===e.parent);i.position.set(e.x-(n?.x||0),0,e.z-(n?.z||0)),(n?this.groups[n.id]:this.scene).add(i),this.groups[e.id]=i;let s=e.width||7,a=e.depth||6;this.box(i,s,.28,a,0,.12,0,4212036),this.box(i,s-.2,.09,a-.2,0,.31,0,2895919),this.line(i,[[-s/2,.32,-a/2],[s/2,.32,-a/2],[s/2,.32,a/2],[-s/2,.32,a/2],[-s/2,.32,-a/2]].map(l=>new T(...l)),e.color,.65);let o=new it(new Fn(1.05,1.14,48),new Ni({color:e.color,transparent:!0,opacity:.5,side:Lt}));o.rotation.x=-Math.PI/2,o.position.set(0,.4,0),i.add(o),this.rings[e.id]=o,e.kind==="team-design"&&this.buildTeamDesign(i,e.color),e.kind==="harness"&&this.buildHarness(i,e.color),e.kind==="memory"&&this.buildMemory(i,e.color),e.kind==="control"&&this.buildControl(i,e.color),e.kind==="quality"&&this.buildQuality(i,e.color),(e.kind==="staging"||e.kind==="production")&&this.buildCloud(i,e.color,e.kind==="production"),e.kind==="client"&&this.buildClient(i,e.color),i.traverse(l=>{l.isMesh&&(l.userData.station=e.id)});let c=document.createElement("button");c.className="station-label",c.dataset.station=e.id,c.innerHTML=`<span class="num">${String(t+1).padStart(2,"0")}</span><span>${e.name}</span><i class="station-light"></i><span class="workload-badge" hidden></span>`,c.setAttribute("aria-label",`Explorar ${e.name}`),c.addEventListener("click",()=>this.onSelect(e.id)),document.getElementById("labels").append(c),this.labels[e.id]=c}human(e,t,i,n=K.ink,s=!1,a=1){let o=new Wt;o.position.set(t,.38,i),o.scale.setScalar(a),e.add(o),this.box(o,.45,.85,.35,0,.9,0,n),this.box(o,.17,.62,.18,-.13,.32,0,K.graphite),this.box(o,.17,.62,.18,.13,.32,0,K.graphite),s?(this.box(o,.52,.44,.43,0,1.55,0,K.ink),this.box(o,.38,.13,.02,0,1.56,.23,K.graphite),this.box(o,.21,.04,.025,0,1.57,.245,K.green),this.cylinder(o,.04,.2,0,1.88,0,K.green)):(this.sphere(o,.25,0,1.55,0,K.ink),this.box(o,.43,.15,.42,0,1.71,0,K.graphite));let c=this.box(o,.13,.65,.14,-.32,1.03,0,n);return c.rotation.z=-.35,this.box(o,.13,.65,.14,.32,1.03,0,n).rotation.z=.35,this.actors.push({g:o,arm:c,seed:this.actors.length*1.3,base:o.position.y}),o}monitor(e,t,i,n,s,a=.9){this.box(e,a,.65,.1,t,i,n,K.graphite),this.box(e,a-.1,.5,.02,t,i,n+.065,s,{emissive:s,emissiveIntensity:.18}),this.box(e,.09,.22,.08,t,i-.42,n,K.ink),this.box(e,.45,.05,.25,t,i-.53,n,K.graphite);for(let o=0;o<3;o++)this.box(e,a*.6,.035,.02,t,i+.13-o*.12,n+.083,K.graphite)}desk(e,t,i,n){this.box(e,2,1,1.1,t,.9,i,K.graphite),this.box(e,2.15,.12,1.2,t,1.46,i,K.ink),this.monitor(e,t,2.12,i-.2,n),this.box(e,.7,.04,.23,t,1.55,i+.3,K.graphite)}buildTeamDesign(e,t){this.box(e,7.2,.1,15.4,0,.4,0,K.ink),this.box(e,6.3,2.7,.12,0,1.81,-6.6,K.graphite),this.sign(e,"DISCOVERY / DESIGN",4.5,0,3.04,-6.52,t);for(let i=0;i<9;i++)this.box(e,.58,.3,.045,-2.2+i%3*.88,2.62-Math.floor(i/3)*.48,-6.5,i%3===0?t:i%3===1?K.cyan:K.ink);this.box(e,2.4,1.75,.04,1.58,1.9,-6.5,K.ink);for(let i=0;i<4;i++)this.box(e,1.82,.08,.025,1.58,2.45-i*.3,-6.46,K.graphite);this.box(e,4.4,.15,2.4,0,1.15,-3.5,K.graphite),this.box(e,2.6,.035,1.35,0,1.25,-3.5,K.ink),this.box(e,.7,.03,.4,-.65,1.3,-3.5,t),this.human(e,-2.8,-3.5,K.ink),this.human(e,2.8,-3.5,K.graphite),this.human(e,0,-1.55,K.ink,!1,.85),this.line(e,[new T(-3.2,.48,-.2),new T(3.2,.48,-.2)],t,.7);for(let[i,n]of[[-1.65,1.6],[1.65,1.6],[-1.65,4.7],[1.65,4.7]])this.desk(e,i,n,t),this.human(e,i+.7,n+.7,K.graphite,!1,.75);this.sign(e,"DEV",2.2,0,1.2,7.55,K.graphite,K.ink)}buildHarness(e,t){this.box(e,5.3,.6,3.5,0,.7,-.15,K.graphite),this.box(e,4.8,.13,3,0,1.09,-.15,K.ink),this.box(e,3.2,.08,2,0,1.2,-.15,3160629);for(let n=-2.4;n<=2.4;n+=4.8)this.box(e,.18,3.7,.18,n,2.3,-1.3,K.ink);this.box(e,5.1,.28,1.1,0,4.2,-1.3,K.graphite),this.sign(e,"DARKSIDE",3.5,0,4.19,-.72,t);for(let n=0;n<2;n++){let s=n?-1.9:1.9;this.cylinder(e,.33,.5,s,1.43,-.15,K.graphite),this.sphere(e,.23,s,1.8,-.15,t),this.tube(e,new T(s,1.8,-.15),new T(s*.5,2.6,-.15),.14,K.ink),this.sphere(e,.21,s*.5,2.6,-.15,t),this.tube(e,new T(s*.5,2.6,-.15),new T(s*.16,1.8,.1),.12,K.ink),this.box(e,.4,.12,.5,s*.16,1.73,.1,K.graphite)}let i=this.box(e,1,.65,.9,0,1.64,0,t,{emissive:t,emissiveIntensity:.35});i.rotation.y=.2,this.human(e,-2.25,2,K.ink,!0,.8),this.human(e,.25,2,K.ink,!0,.8),this.human(e,2.25,2,K.ink,!0,.8)}buildMemory(e,t){for(let i=0;i<2;i++){let n=-1.8+i*3.6;this.box(e,2.45,3.05,1.2,n,1.93,-.5,K.graphite);for(let s=0;s<3;s++){this.box(e,2.3,.12,1.15,n,.6+s*1.02,-.48,K.ink);for(let a=0;a<5;a++)this.box(e,.27,.65,.72,n-.85+a*.43,1.02+s*1.02,-.37,(a+s)%3===0?t:(a+s)%3===1?K.ink:K.green)}}this.sign(e,".darkside/",3.5,0,3.7,.19,t),this.cylinder(e,.5,.55,0,.77,1.8,K.ink),this.cylinder(e,.55,.1,0,1.1,1.8,t)}buildControl(e,t){this.cylinder(e,2.05,.22,0,.5,0,K.graphite,{},40),this.cylinder(e,1.5,.2,0,.73,0,K.ink,{},40),this.cylinder(e,.8,2.8,0,2.24,0,K.graphite,{},24);let i=this.cylinder(e,.54,2.35,0,2.32,0,t,{transparent:!0,opacity:.65,emissive:t,emissiveIntensity:.6});for(let n=0;n<3;n++){let s=new it(new zn(1.12+n*.23,.038,8,48),this.material(n===1?K.green:t,{emissive:t,emissiveIntensity:.3}));s.rotation.x=Math.PI/2,s.position.y=1.05+n*1.3,e.add(s)}for(let n=0;n<5;n++){let s=n*Math.PI*.4,a=2.3*Math.cos(s),o=2.3*Math.sin(s);this.cylinder(e,.13,.3,a,.55,o,K.ink),this.sphere(e,.12,a,.8,o,t),this.line(e,[new T(a,.77,o),new T(0,2.4,0)],t,.4)}this.box(e,4.8,.8,.18,0,3.85,1.1,K.graphite),this.sign(e,"EDSA.IA",3.6,0,3.85,1.21,t)}buildQuality(e,t){this.box(e,5.5,2.3,.65,0,1.55,-1.8,K.graphite),this.sign(e,"VERIFY / CI",3.5,0,2.85,-1.43,t);for(let i=0;i<3;i++){let n=-1.65+i*1.65;this.box(e,1.4,1.25,.08,n,1.65,-1.43,K.ink),this.box(e,1.16,1,.02,n,1.65,-1.37,K.graphite);for(let s=0;s<4;s++)this.box(e,.79,.06,.035,n,1.97-s*.2,-1.34,t)}this.box(e,4.5,.9,1.5,0,.9,.3,K.ink);for(let i=-1.6;i<=1.6;i+=1.6)this.box(e,1,.08,.65,i,1.4,.3,K.graphite),this.box(e,.25,.5,.3,i,1.7,.3,t,{emissive:t,emissiveIntensity:.2});this.human(e,-2.4,1.8,K.ink,!0,.85),this.human(e,2.4,1.8,K.graphite,!1,.85)}buildCloud(e,t,i){this.box(e,6.1,.1,5.4,0,.42,-.1,K.ink);for(let n=0;n<3;n++){let s=-1.9+n*1.65;this.box(e,1.15,3.3,1.65,s,2.15,-.9,K.graphite),this.box(e,1.03,3.1,.06,s,2.15,-.04,3686718);for(let a=0;a<6;a++)this.box(e,.88,.36,.07,s,.91+a*.48,.01,K.graphite),this.box(e,.12,.045,.035,s-.25,.95+a*.48,.067,i?K.green:t,{emissive:i?K.green:t,emissiveIntensity:.8}),this.box(e,.4,.04,.025,s+.11,.95+a*.48,.07,K.ink)}this.cylinder(e,.7,1.25,2.15,1.04,1.55,K.graphite);for(let n=0;n<3;n++)this.cylinder(e,.72,.1,2.15,.5+n*.53,1.55,t);this.sign(e,"AWS",2.4,0,4.4,.05,t),this.sign(e,i?"PRODUCTION":"STAGING",4,0,.9,2.71,K.graphite,K.ink),this.human(e,-2.2,1.6,K.ink,i,.7)}buildClient(e,t){this.box(e,3.2,5.1,2.65,-1.6,2.94,-.45,K.graphite);for(let i=0;i<3;i++){this.box(e,3.35,.18,2.8,-1.6,.75+i*1.75,-.45,K.ink);for(let n=0;n<3;n++)this.box(e,.72,1.15,.08,-2.62+n*1.02,1.49+i*1.7,.92,t,{transparent:!0,opacity:.45,emissive:t,emissiveIntensity:.13})}this.sign(e,"NEXO",2.65,-1.6,5.74,.91,K.ink),this.box(e,2.6,.18,2.4,1.9,.64,-.35,K.ink),this.monitor(e,1.9,1.38,-.75,t,1.8),this.human(e,1.2,.45,K.graphite,!1,.65),this.human(e,2.55,.45,K.ink,!1,.65),this.human(e,.45,2.07,K.ink,!1,.85),this.human(e,2.3,2.07,K.graphite,!1,.85)}makeRoute(e,t,i,n=[]){let s=yt.find(f=>f.id===e),a=yt.find(f=>f.id===t),o=new T(s.x,.65,s.z),c=new T(a.x,.65,a.z),l=new T().subVectors(c,o).normalize();o.addScaledVector(l,3.65),c.addScaledVector(l,-3.65);let h=[o,...n.map(f=>new T(...f)),c],u=new Ki(h,!1,"catmullrom",.3),d=i==="work"?K.green:i==="use"?K.cyan:i==="feedback"?K.magenta:K.ink,m=u.getPoints(45),g=this.line(this.scene,m,d,i==="telemetry"?.18:.65,i==="feedback"||i==="telemetry");if(i==="work"||i==="use"){let f=new Ki(h.map(v=>v.clone().add(new T(0,-.11,0))),!1,"catmullrom",.3),_=new it(new kn(f,40,i==="work"?.12:.06,6,!1),this.material(4739919));_.castShadow=!0,this.scene.add(_);for(let v=0;v<3;v++){let M=u.getPoint((v+.5)/3);this.cylinder(this.scene,.08,.5,M.x,.25,M.z,K.ink)}}let x=i==="telemetry"?2:i==="use"?7:3,p={from:e,to:t,type:i,curve:u,line:g};for(let f=0;f<x;f++){let _=this.box(this.scene,i==="use"?.16:i==="telemetry"?.09:.38,i==="telemetry"?.09:.25,i==="use"?.16:i==="telemetry"?.09:.35,0,0,0,d,{emissive:d,emissiveIntensity:.6});_.castShadow=i!=="telemetry";let v={cube:_,curve:u,type:i,route:p,offset:f/x,speed:i==="use"?.1:i==="telemetry"?.16:.06};this.packets.push(v),i==="telemetry"&&this.telemetry.push({line:g,cube:_})}return p}buildRoutes(){this.routes=[];for(let[e,t,i]of[["discovery","darkside",[[-11,.65,2],[-10,.65,4]]],["darkside","quality",[]],["quality","homolog",[[8.1,.65,4]]],["homolog","production",[]],["production","client",[[20.2,.65,0],[20.2,.65,3]]]])this.routes.push(this.makeRoute(e,t,"work",i));this.routes.push(this.makeRoute("quality","darkside","work",[[0,.78,12.3]])),this.makeRoute("production","client","use",[[22,.9,-.5],[22,.9,3.5]]),this.makeRoute("client","production","use",[[23,.9,3],[23,.9,-1]]),this.makeRoute("client","discovery","feedback",[[18,1.05,13.4],[-12,1.05,13.4],[-21,1.05,9],[-21,1.05,-3]]),this.makeRoute("memory","darkside","work",[[-1.8,.9,1.5],[-1.8,.9,4]]);for(let e of["discovery","darkside","quality","homolog","production","client"])this.makeRoute(e,"control","telemetry",[[yt.find(t=>t.id===e).x,6,yt.find(t=>t.id===e).z],[-6,6,-10]])}resize(){let e=this.container.clientWidth,t=this.container.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t,!1);let i=e/t,n=Math.max(20,30/i);this.camera.left=-n*i,this.camera.right=n*i,this.camera.top=n,this.camera.bottom=-n,this.camera.updateProjectionMatrix(),this.updateLabels()}updateLabels(){let e=this.container.clientWidth,t=this.container.clientHeight;this.camera.updateMatrixWorld();for(let i of[...Qt,...yt]){let n=i.kind==="organization",s=new T(i.x,n?5.1:.65,n?i.z-i.depth/2:i.z+(i.depth||6)/2+.6).project(this.camera),a=this.labels[i.id];a.style.left=`${(s.x*.5+.5)*e}px`,a.style.top=`${(-s.y*.5+.5)*t}px`,a.style.display=s.z<1&&s.x>-1.1&&s.x<1.1&&s.y>-.87&&s.y<.75?"":"none"}}select(e){this.selected=e;for(let t of[...Qt,...yt])this.labels[t.id].classList.toggle("selected",t.id===e),this.labels[t.id].setAttribute("aria-pressed",String(t.id===e))}setCamera(e){this.topView=e==="top",this.camera.position.set(this.topView?0:34,this.topView?62:39,this.topView?.01:47),this.controls.target.set(0,0,0),this.camera.zoom=1,this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix(),this.controls.update()}zoom(e){this.camera.zoom=qr.clamp(this.camera.zoom*e,.65,2.7),this.camera.updateProjectionMatrix()}render(e,t){t.running&&(this.time+=Math.max(0,Math.min(Number.isFinite(e)?e:0,.2))*t.speed),this.controls.update(),this.active=t.phase.station;let i=t.key==="module"?t.activeWork:t.waiting?[]:[{id:t.episodeId,phase:t.phase}],n=new Set(i.map(s=>s.phase.station));for(let s of yt){let a=n.has(s.id);this.labels[s.id].classList.toggle("active",a);let o=this.labels[s.id].querySelector(".workload-badge");if(o){let l=i.filter(h=>h.phase.station===s.id).length;o.hidden=t.key!=="module"||!l,o.textContent=l,o.title=`${l} epis\xF3dios em andamento`}let c=this.rings[s.id];c.material.opacity=a?.6+.25*Math.sin(this.time*3):s.id===this.selected?.6:.15,c.scale.setScalar(a?1.15+.05*Math.sin(this.time*3):1)}for(let s of Qt)this.labels[s.id].classList.toggle("active",s.children.some(a=>n.has(a)));for(let s of this.actors)s.arm.rotation.x=Math.sin(this.time*2.8+s.seed)*.24,s.g.position.y=s.base+Math.sin(this.time*1.3+s.seed)*.02;for(let s of this.packets){let a=!0,o=null;if(s.type==="telemetry"&&(a=this.showEvidence),s.type==="work"){let c=i.filter(l=>s.route.from==="quality"&&s.route.to==="darkside"?!!l.phase.returnToDev:s.route.from==="memory"?l.phase.station==="darkside":s.route.to===l.phase.station||s.route.from===l.phase.station);o=c[Math.floor(s.offset*100)%c.length],a=!!o}s.cube.visible=a,s.cube.position.copy(s.curve.getPoint(((this.time*s.speed+s.offset)%1+1)%1)),s.cube.position.y+=.22,s.cube.rotation.y=this.time*.65+s.offset,s.type==="work"&&(s.cube.material.color.setHex(o?.phase.red?K.magenta:K.green),s.cube.userData.episodeId=o?.id||null)}for(let s of this.telemetry)s.line.visible=this.showEvidence;this.updateLabels(),this.renderer.render(this.scene,this.camera)}};async function qp(){let r=p=>document.getElementById(p),e=new tr,t=[...Qt,...yt],i=null,n="discovery",s=p=>`${String(Math.floor(p/60)).padStart(2,"0")}:${String(Math.floor(p%60)).padStart(2,"0")}`,a=p=>String(p).replace(/[&<>"']/g,f=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[f]);function o(p){let f=t.find(_=>_.id===p);f&&(n=p,i?.select(p),r("stationPicker").value=p,r("stationNumber").textContent=f.kind==="organization"?"EMPRESA":`${String(yt.indexOf(f)+1).padStart(2,"0")} / ${String(yt.length).padStart(2,"0")}`,r("stationTitle").textContent=f.name,r("stationRole").textContent=f.role,r("stationContent").innerHTML=`<p class="description">${a(f.description)}</p>${f.parent?`<div class="organization-context"><span>Empresa</span><strong>${a(Qt.find(_=>_.id===f.parent).name)}</strong></div>`:f.children?`<div class="organization-context"><span>\xC1rea integrante</span><strong>${a(yt.find(_=>_.id===f.children[0]).name)}</strong></div>`:""}<div class="info-block"><h3>Pessoas e agentes</h3><div class="people">${f.people.map((_,v)=>`<div class="person-row"><span class="avatar">${String(v+1).padStart(2,"0")}</span><span>${a(_)}</span></div>`).join("")}</div></div><div class="info-block"><h3>Capacidades e conex\xF5es</h3><div class="tags">${f.tags.map(_=>`<span class="tag">${a(_)}</span>`).join("")}</div></div><div class="info-block"><h3>Artefatos e evid\xEAncias</h3><div class="file-list">${f.files.map(_=>`<code>${a(_)}</code>`).join("")}</div></div>${f.concept?'<div class="concept">VIS\xC3O CONCEITUAL \xB7 Esta esta\xE7\xE3o ilustra a arquitetura proposta. N\xE3o representa uma integra\xE7\xE3o ativa.</div>':""}`)}function c(){let p=e.phase,f=e.key==="module",_=f?e.selectedEpisode:null;if(r("flowPanel").classList.toggle("module-mode",f),r("flowScope").textContent=f?"M\xD3DULO EM DESENVOLVIMENTO":"EPIS\xD3DIO DE DESENVOLVIMENTO",r("eventScope").textContent=f?"EVENTOS DO M\xD3DULO":"EVENTOS DO EPIS\xD3DIO",r("moduleSummary").hidden=!f,r("episodeContext").hidden=!f,r("dependencyNote").hidden=!_?.blocked,f){let I=e.scenario.features.find(N=>N.id===_.feature);r("episodeContext").textContent=`${I.id} \xB7 ${I.name} \u2192 ${_.id} \xB7 ${_.name}`,r("dependencyNote").textContent=`Bloqueado: aguarda entrega de ${e.missing(_).join(", ")}.`,r("moduleSummary").innerHTML=`<div class="module-totals"><span>4 funcionalidades</span><span>6 epis\xF3dios</span><span id="activeEpisodes">${e.activeWork.length} em andamento</span><span>${e.episodes.filter(N=>N.blocked).length} bloqueados</span><span>${e.episodes.filter(N=>N.waiting).length} gates pendentes</span><strong>${e.validatedFeatures}/4 funcionalidades validadas</strong></div><p>Recorte ilustrativo de um m\xF3dulo em andamento \xB7 planos anteriores j\xE1 simulados. Selecione um card para acompanhar o epis\xF3dio e aprovar seus gates.</p>`}r("kanbanNote").textContent=f?"Cada epis\xF3dio avan\xE7a por suas pr\xF3prias evid\xEAncias. Depend\xEAncias aguardam entrega; gates pendentes afetam apenas o respectivo card.":"O estado acompanha eventos do trabalho. N\xE3o depende de mover cart\xF5es manualmente.",r("episodeTitle").textContent=`${f?e.scenario.id:e.episodeId} \xB7 ${e.scenario.name}`,r("phaseTitle").textContent=p.title,r("phaseDescription").textContent=p.description,r("phaseKind").textContent=p.kind,r("artifactActive").textContent=p.artifact,r("phaseCount").textContent=`${String(e.index+1).padStart(2,"0")} / ${e.phaseCount}`,r("evidenceHint").textContent=p.event,r("approval").hidden=!e.waiting,r("approvalText").textContent=p.gate||"",r("runningTag").textContent=e.running?f?e.completed?"M\xF3dulo validado":`${e.activeWork.length} epis\xF3dios em andamento`:e.waiting?"Aguardando decis\xE3o":"Em funcionamento":"Simula\xE7\xE3o pausada";let v=["Pronto","Em execu\xE7\xE3o","Verifica\xE7\xE3o","Entrega","Resultado"],M=document.activeElement?.dataset.episode;r("kanban").innerHTML=v.map((I,N)=>{let U=f?e.episodes.filter(B=>B.phases[B.index].column===N):[];return`<div class="kanban-col"><h3>${I}<span>${f?U.length:N===p.column?1:0}</span></h3>${f?U.map(B=>{let H=B.phases[B.index],F=e.scenario.features.find(G=>G.id===B.feature),Y=B.done?"Validado":B.blocked?`Aguarda ${e.missing(B).join(", ")}`:B.waiting?"Gate humano pendente":"Em andamento";return`<button type="button" class="kanban-card module-card ${B.id===e.episodeId?"selected":""}" data-episode="${B.id}" aria-pressed="${B.id===e.episodeId}"><span class="card-feature">${a(F.id)} \xB7 ${a(F.name)}</span><strong>${B.id}</strong><span class="card-name">${a(B.name)}</span><small>${a(H.title)}</small><span class="card-state ${B.blocked||B.waiting?"pending":""}">${a(Y)}</span><span class="card-progress"><i data-progress="${B.id}" style="width:${Math.min(100,B.phaseTime/H.duration*100)}%"></i></span></button>`}).join(""):N===p.column?`<div class="kanban-card"><strong>${e.episodeId}</strong><br>${a(e.scenario.name)}<small>${e.waiting?"Gate humano pendente":"Estado inferido \xB7 "+p.skill}</small></div>`:""}${!f&&N===4?'<div class="kanban-card ambient">Portal v2.8.4<br>Opera\xE7\xE3o cont\xEDnua</div>':""}</div>`}).join(""),M&&r("kanban").querySelector(`[data-episode="${M}"]`)?.focus({preventScroll:!0}),r("metrics").innerHTML=(f?[["Vers\xE3o em produ\xE7\xE3o",e.version,`${e.deployments}/6 entregas incrementais simuladas`],["Custo de IA no m\xF3dulo",`US$ ${e.cost.toFixed(2).replace(".",",")}`,`${Math.round(e.tokens/1e3)} mil tokens fict\xEDcios \xB7 desde o recorte inicial`],["Funcionalidades validadas",`${e.validatedFeatures}/4`,"Cada funcionalidade re\xFAne um ou mais epis\xF3dios"],["Trabalho em paralelo",`${e.activeWork.length}/6`,"Epis\xF3dios em andamento \xB7 aguardas n\xE3o interrompem os demais"]]:[["Vers\xE3o em produ\xE7\xE3o",e.version,`${e.deployments} ${e.deployments===1?"libera\xE7\xE3o":"libera\xE7\xF5es"} simulada${e.deployments===1?"":"s"} \xB7 opera\xE7\xE3o cont\xEDnua`],["Custo de IA no fluxo",`US$ ${e.cost.toFixed(2).replace(".",",")}`,`${Math.round(e.tokens/1e3)} mil tokens fict\xEDcios \xB7 sem avalia\xE7\xE3o individual`],[e.scenario.metric,e.completed?e.scenario.result:e.scenario.baseline,e.completed?e.scenario.explanation:"Refer\xEAncia inicial fict\xEDcia \xB7 hip\xF3tese em valida\xE7\xE3o"],["Retrabalho observado",String(e.rework),"Retornos da verifica\xE7\xE3o para implementa\xE7\xE3o"]]).map(([I,N,U])=>`<div class="metric"><span>${a(I)}</span><strong>${a(N)}</strong><small>${a(U)}</small></div>`).join(""),r("events").innerHTML=e.logs.slice(0,5).map(I=>`<li><time>${s(I.at)}</time><div><code>${a(I.event)}</code><span>${a(I.text)}</span></div></li>`).join("");let R=[...[{path:".darkside/holocrons/tech.md",skill:"/explore \xB7 contexto t\xE9cnico",state:"Reutilizado"},{path:".darkside/sith-agents/engineer.md",skill:"Agente espec\xEDfico do projeto",state:"Reutilizado"}],...e.artifacts.values()];r("artifactCount").textContent=`${R.length} artefatos`,r("artifactList").innerHTML=R.map(I=>`<div class="artifact-row"><code>${a(I.path)}</code><span>${a(I.skill)}</span><span class="state">${a(I.state)}</span></div>`).join("")}function l(p){let f=e;e=p==="module"?new es:new tr(p),e.running=f.running,e.speed=f.speed,e.manual=f.manual,e.onChange(c),c(),o(e.phase.station)}r("scenario").addEventListener("change",p=>l(p.target.value)),r("kanban").addEventListener("click",p=>{let f=p.target.closest("[data-episode]");f&&e.key==="module"&&(e.selectEpisode(f.dataset.episode),o(e.phase.station))}),r("playBtn").addEventListener("click",()=>{e.running=!e.running,r("playBtn").textContent=e.running?"\u2161":"\u25B6",r("playBtn").setAttribute("aria-label",e.running?"Pausar simula\xE7\xE3o":"Continuar simula\xE7\xE3o"),r("playBtn").title=e.running?"Pausar":"Continuar",c()}),r("restartBtn").addEventListener("click",()=>{e.setScenario(e.key),o(e.phase.station)}),r("speed").addEventListener("change",p=>e.speed=Number(p.target.value)),r("manualGates").addEventListener("change",p=>{e.manual=p.target.checked,!e.manual&&e.key==="module"?e.releaseGates():!e.manual&&e.waiting&&(e.log("human_decision.created","Gate aprovado automaticamente na simula\xE7\xE3o"),e.waiting=!1,e.advance(),e.emit())}),r("approveBtn").addEventListener("click",()=>e.approve()),r("cameraHome").addEventListener("click",()=>{i?.setCamera("home"),r("cameraHome").classList.add("active"),r("cameraTop").classList.remove("active")}),r("cameraTop").addEventListener("click",()=>{i?.setCamera("top"),r("cameraTop").classList.add("active"),r("cameraHome").classList.remove("active")}),r("zoomIn").addEventListener("click",()=>i?.zoom(1.15)),r("zoomOut").addEventListener("click",()=>i?.zoom(1/1.15)),r("showTelemetry").addEventListener("change",p=>{i&&(i.showEvidence=p.target.checked)});let h=r("guide");r("guideBtn").addEventListener("click",()=>h.showModal()),r("closeGuide").addEventListener("click",()=>h.close()),r("beginBtn").addEventListener("click",()=>h.close()),h.addEventListener("click",p=>{if(p.target===h){let f=h.getBoundingClientRect();(p.clientX<f.left||p.clientX>f.right||p.clientY<f.top||p.clientY>f.bottom)&&h.close()}}),r("stationPicker").innerHTML=Qt.map(p=>`<option value="${p.id}">Empresa \xB7 ${a(p.name)}</option>`).join("")+yt.map((p,f)=>`<option value="${p.id}">${String(f+1).padStart(2,"0")} \xB7 ${a(p.name)}</option>`).join(""),r("stationPicker").addEventListener("change",p=>o(p.target.value)),e.onChange(c),c(),o(n),r("cameraHome").classList.add("active");async function u(){window.edsaSceneStatus="loading",r("sceneLoading").hidden=!1,r("noWebGL").hidden=!0,i&&(i.observer.disconnect(),i.controls.dispose(),i.renderer.dispose(),i=null);let p=r("world"),f=p.cloneNode(!1);p.replaceWith(f),r("labels").replaceChildren();try{await Promise.race([document.fonts?.ready||Promise.resolve(),new Promise(_=>setTimeout(_,1500))]),i=new Ha(f,r("viewport"),o),i.select(n),i.render(0,e),f.addEventListener("webglcontextlost",_=>{_.preventDefault(),i=null,window.edsaShowSceneError("A conex\xE3o com a renderiza\xE7\xE3o 3D foi interrompida.","Tente novamente para reconstruir a cena.")}),window.edsaSceneStatus="ready",r("sceneLoading").hidden=!0;for(let _ of["cameraHome","cameraTop","zoomIn","zoomOut"])r(_).disabled=!1}catch(_){i=null,r("labels").replaceChildren(),window.edsaShowSceneError("N\xE3o foi poss\xEDvel iniciar a cena 3D.","O navegador n\xE3o conseguiu iniciar a renderiza\xE7\xE3o WebGL. Tente novamente ou abra o link no navegador do dispositivo.");for(let v of["cameraHome","cameraTop","zoomIn","zoomOut"])r(v).disabled=!0;console.error("Falha ao iniciar cena 3D:",_)}}window.edsaRetry3D=u,await u();let d=performance.now(),m=0;function g(p){let f=Math.max(0,Math.min((p-d)/1e3,.1));if(d=p,!document.hidden){if(e.update(f),i)try{i.render(f,e)}catch(_){i=null,window.edsaShowSceneError("A cena 3D encontrou um erro.","Tente novamente para reiniciar a visualiza\xE7\xE3o."),console.error(_)}if(p-m>200){if(r("phaseProgress").style.width=`${Math.min(100,e.phaseTime/e.phase.duration*100)}%`,r("simClock").textContent=s(e.elapsed),e.key==="module")for(let _ of e.episodes){let v=r("kanban").querySelector(`[data-progress="${_.id}"]`);v&&(v.style.width=`${Math.min(100,_.phaseTime/_.phases[_.index].duration*100)}%`)}m=p}}requestAnimationFrame(g)}requestAnimationFrame(g),document.addEventListener("visibilitychange",()=>d=performance.now());let x=document.modelContext;if(x?.registerTool){let p=new AbortController;window.addEventListener("pagehide",()=>p.abort(),{once:!0});let f=[{name:"explore_edsa_station",description:"Seleciona uma esta\xE7\xE3o da f\xE1brica EDSA.IA e retorna responsabilidades e artefatos.",inputSchema:{type:"object",properties:{station:{type:"string",enum:t.map(_=>_.id)}},required:["station"],additionalProperties:!1},annotations:{readOnlyHint:!1,untrustedContentHint:!1},execute:async _=>{if(!_||!t.some(v=>v.id===_.station))throw Error("Esta\xE7\xE3o inv\xE1lida");return o(_.station),{station:_.station,responsibilities:t.find(v=>v.id===_.station).description,parent:t.find(v=>v.id===_.station).parent||null,children:t.find(v=>v.id===_.station).children||[]}}},{name:"set_edsa_scenario",description:"Seleciona uma jornada fict\xEDcia: module, feature, bug ou improve. Reinicia a simula\xE7\xE3o local.",inputSchema:{type:"object",properties:{scenario:{type:"string",enum:["module","feature","bug","improve"]}},required:["scenario"],additionalProperties:!1},annotations:{readOnlyHint:!1,untrustedContentHint:!1},execute:async _=>{if(!_||!["module","feature","bug","improve"].includes(_.scenario))throw Error("Jornada inv\xE1lida");return r("scenario").value=_.scenario,l(_.scenario),{episode:e.episodeId,scenario:e.scenario.name}}}];for(let _ of f)try{Promise.resolve(x.registerTool(_,{signal:p.signal})).catch(v=>console.warn("WebMCP indispon\xEDvel:",v))}catch(v){console.warn("WebMCP indispon\xEDvel:",v)}}}qp().catch(r=>{console.error(r),window.edsaShowSceneError?.("A f\xE1brica n\xE3o conseguiu iniciar.","Tente novamente ou abra a p\xE1gina no navegador do dispositivo.")});})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
