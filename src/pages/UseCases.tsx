import ContentCard from "@/components/ContentCard";
import Navigation from "@/components/Navigation";
import { Lightbulb, Building2, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const UseCases = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
              Página 3
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Casos de Uso e Integrações
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exemplos reais e integrações práticas do Azure Functions
            </p>
          </div>

          {/* Real World Examples */}
          <ContentCard
            title="Exemplos Reais de Uso"
            icon={Building2}
            description="Casos reais de empresas usando Azure Functions"
          >
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-xl">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Coca-Cola (Vending Machines IoT)</h3>
                    <p className="text-sm text-primary font-medium">Monitoramento em tempo real de máquinas de venda</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-foreground">Desafio:</strong>
                    <p className="text-muted-foreground">
                      Monitorar milhares de máquinas de venda globalmente, detectar problemas e otimizar estoque
                    </p>
                  </div>
                  
                  <div>
                    <strong className="text-foreground">Solução com Azure Functions:</strong>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mt-1">
                      <li>IoT Hub Trigger para receber telemetria das máquinas em tempo real</li>
                      <li>Processamento de eventos para detectar anomalias (temperatura, estoque baixo)</li>
                      <li>Cosmos DB Binding para armazenar histórico e analytics</li>
                      <li>Event Grid para notificar equipes de manutenção</li>
                      <li>Timer Trigger para relatórios diários automatizados</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-background/50 rounded-lg border border-primary/20">
                    <strong className="text-primary">Resultados:</strong>
                    <p className="text-muted-foreground mt-1">
                      • Redução de 30% em tempo de inatividade<br />
                      • Economia de custos com manutenção preditiva<br />
                      • Escalabilidade para processar 3+ milhões de eventos/dia<br />
                      • Zero gerenciamento de infraestrutura
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 border-l-4 border-secondary rounded-r-xl">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Xerox (Processamento de Documentos)</h3>
                    <p className="text-sm text-secondary font-medium">OCR e análise inteligente de documentos</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-foreground">Desafio:</strong>
                    <p className="text-muted-foreground">
                      Processar milhões de documentos digitalizados, extrair texto e metadados, categorizar automaticamente
                    </p>
                  </div>
                  
                  <div>
                    <strong className="text-foreground">Solução com Azure Functions:</strong>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mt-1">
                      <li>Blob Storage Trigger quando documento é carregado</li>
                      <li>Integração com Azure Cognitive Services (Computer Vision API)</li>
                      <li>OCR e extração de texto com Form Recognizer</li>
                      <li>Classificação usando Azure ML models</li>
                      <li>Output Binding para salvar resultados em SQL Database</li>
                      <li>Queue Trigger para processamento em lote durante períodos de baixa demanda</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-background/50 rounded-lg border border-secondary/20">
                    <strong className="text-secondary">Resultados:</strong>
                    <p className="text-muted-foreground mt-1">
                      • Processamento de 10+ milhões de docs/mês<br />
                      • Redução de 80% no tempo de processamento<br />
                      • Custo por documento reduzido em 60%<br />
                      • Escalabilidade automática em picos de demanda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ContentCard>

          {/* Azure Integrations */}
          <ContentCard
            title="Integrações com Serviços Azure"
            icon={Lightbulb}
            description="Azure Functions se conecta nativamente com todo o ecossistema Azure"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-card border border-primary/30 rounded-lg hover:shadow-card transition-smooth">
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-xs">📦</span>
                  Storage
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>Blob Storage:</strong> Upload/processamento de arquivos</li>
                  <li>• <strong>Queue Storage:</strong> Mensageria assíncrona</li>
                  <li>• <strong>Table Storage:</strong> Dados NoSQL simples</li>
                  <li>• <strong>File Storage:</strong> Compartilhamento de arquivos</li>
                </ul>
              </div>

              <div className="p-4 bg-card border border-secondary/30 rounded-lg hover:shadow-card transition-smooth">
                <h4 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-secondary/10 flex items-center justify-center text-xs">🗄️</span>
                  Databases
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>Cosmos DB:</strong> NoSQL global e multi-modelo</li>
                  <li>• <strong>SQL Database:</strong> SQL Server gerenciado</li>
                  <li>• <strong>PostgreSQL/MySQL:</strong> Bancos relacionais</li>
                  <li>• <strong>Redis Cache:</strong> Cache distribuído</li>
                </ul>
              </div>

              <div className="p-4 bg-card border border-accent/30 rounded-lg hover:shadow-card transition-smooth">
                <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center text-xs">📨</span>
                  Messaging
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>Service Bus:</strong> Mensageria empresarial</li>
                  <li>• <strong>Event Grid:</strong> Eventos reativo e pub/sub</li>
                  <li>• <strong>Event Hubs:</strong> Streaming de big data</li>
                  <li>• <strong>SignalR:</strong> Real-time communication</li>
                </ul>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg hover:shadow-card transition-smooth">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-muted flex items-center justify-center text-xs">🤖</span>
                  AI & Analytics
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>Cognitive Services:</strong> Vision, Speech, Language</li>
                  <li>• <strong>Machine Learning:</strong> Deploy de modelos ML</li>
                  <li>• <strong>Application Insights:</strong> Monitoring e analytics</li>
                  <li>• <strong>Azure OpenAI:</strong> GPT e modelos de linguagem</li>
                </ul>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg hover:shadow-card transition-smooth">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-muted flex items-center justify-center text-xs">🔐</span>
                  Security & Identity
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>Azure AD:</strong> Autenticação e autorização</li>
                  <li>• <strong>Key Vault:</strong> Gerenciamento de segredos</li>
                  <li>• <strong>Managed Identity:</strong> Autenticação sem senha</li>
                  <li>• <strong>API Management:</strong> Gateway e políticas</li>
                </ul>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg hover:shadow-card transition-smooth">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-muted flex items-center justify-center text-xs">🔄</span>
                  DevOps & Integration
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>Logic Apps:</strong> Workflows visuais</li>
                  <li>• <strong>DevOps Pipelines:</strong> CI/CD automatizado</li>
                  <li>• <strong>API Management:</strong> Gestão de APIs</li>
                  <li>• <strong>Power Platform:</strong> Low-code integration</li>
                </ul>
              </div>
            </div>
          </ContentCard>

          {/* Automation Flow Example */}
          <ContentCard
            title="Fluxo de Automação Hipotético"
            icon={Workflow}
            description="Envio automático de email quando arquivo é carregado no Azure Storage"
          >
            <div className="space-y-6">
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-sm">
                  <strong>Cenário:</strong> Sistema de onboarding que envia email de boas-vindas quando um novo 
                  colaborador envia sua foto para o Azure Blob Storage.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-glow">
                      1
                    </div>
                    <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-secondary"></div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="p-4 glass-card shadow-card rounded-lg">
                      <h4 className="font-bold mb-2 text-primary">📤 Upload do Arquivo</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Colaborador faz upload da foto através da aplicação web
                      </p>
                      <div className="bg-background/50 p-3 rounded font-mono text-xs">
                        <div className="text-muted-foreground">Container:</div>
                        <div className="text-primary">employee-photos/2024/joao-silva.jpg</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold shadow-glow">
                      2
                    </div>
                    <div className="w-0.5 h-16 bg-gradient-to-b from-secondary to-accent"></div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="p-4 glass-card shadow-card rounded-lg">
                      <h4 className="font-bold mb-2 text-secondary">⚡ Blob Storage Trigger</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Azure Functions detecta automaticamente o novo arquivo
                      </p>
                      <div className="bg-background/50 p-3 rounded font-mono text-xs space-y-1">
                        <div><span className="text-secondary">Trigger:</span> BlobTrigger</div>
                        <div><span className="text-secondary">Path:</span> employee-photos/{"{name}"}</div>
                        <div><span className="text-secondary">Connection:</span> AzureWebJobsStorage</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold shadow-glow">
                      3
                    </div>
                    <div className="w-0.5 h-16 bg-gradient-to-b from-accent to-primary"></div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="p-4 glass-card shadow-card rounded-lg">
                      <h4 className="font-bold mb-2 text-accent">🔍 Processamento</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Function processa o arquivo e busca dados do colaborador
                      </p>
                      <div className="bg-background/50 p-3 rounded font-mono text-xs space-y-1">
                        <div className="text-accent">// Extrai nome do arquivo</div>
                        <div>const employeeName = path.parse(blobName).name;</div>
                        <div className="text-accent mt-2">// Busca dados no Cosmos DB (Input Binding)</div>
                        <div>const employee = await getEmployeeData(employeeName);</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-glow">
                      4
                    </div>
                    <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-secondary"></div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="p-4 glass-card shadow-card rounded-lg">
                      <h4 className="font-bold mb-2 text-primary">📧 SendGrid / Office 365</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Envia email de boas-vindas personalizado via SendGrid Binding
                      </p>
                      <div className="bg-background/50 p-3 rounded font-mono text-xs space-y-1">
                        <div><span className="text-primary">To:</span> {"{employee.email}"}</div>
                        <div><span className="text-primary">Subject:</span> "Bem-vindo(a) à empresa!"</div>
                        <div><span className="text-primary">Template:</span> welcome-template.html</div>
                        <div><span className="text-primary">Attachments:</span> manual-colaborador.pdf</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold shadow-glow">
                      5
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="p-4 glass-card shadow-card rounded-lg">
                      <h4 className="font-bold mb-2 text-secondary">📊 Logging & Notificação</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Registra evento e notifica RH via fila
                      </p>
                      <div className="bg-background/50 p-3 rounded font-mono text-xs space-y-1">
                        <div><span className="text-secondary">Application Insights:</span> Log de sucesso</div>
                        <div><span className="text-secondary">Queue Output Binding:</span> Notifica RH</div>
                        <div><span className="text-secondary">Cosmos DB Output:</span> Atualiza status onboarding</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="font-semibold text-primary mb-2">🎯 Componentes Usados</div>
                  <ul className="text-xs space-y-1">
                    <li>• Blob Storage (trigger)</li>
                    <li>• Azure Function</li>
                    <li>• Cosmos DB (input)</li>
                    <li>• SendGrid/O365</li>
                    <li>• Storage Queue (output)</li>
                    <li>• Application Insights</li>
                  </ul>
                </div>

                <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                  <div className="font-semibold text-secondary mb-2">⚡ Benefícios</div>
                  <ul className="text-xs space-y-1">
                    <li>• 100% automático</li>
                    <li>• Tempo real</li>
                    <li>• Zero servidores</li>
                    <li>• Altamente escalável</li>
                    <li>• Baixo custo</li>
                    <li>• Fácil manutenção</li>
                  </ul>
                </div>

                <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <div className="font-semibold text-accent mb-2">💰 Estimativa Custo</div>
                  <ul className="text-xs space-y-1">
                    <li>• 100 onboardings/mês</li>
                    <li>• ~0.2s por execução</li>
                    <li>• 512MB memória</li>
                    <li>• <strong>Total: ~$0.05/mês</strong></li>
                    <li className="text-muted-foreground">+ SendGrid/Storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </ContentCard>
        </div>
      </main>
    </div>
  );
};

export default UseCases;
