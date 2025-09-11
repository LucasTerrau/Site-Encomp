import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
//a
import {
  Award,
  Building,
  Mail,
  Phone,
  User,
  FileText,
  Trophy,
  Star,
  Circle,
  Coffee,
  SendIcon,
} from "lucide-react";

const FormPatrocinio = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    nomeContato: "",
    email: "",
    telefone: "",
    tipoPatrocinio: "",
    mensagem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe3X-dnj7gjY-HILED2vtxFbXQNc391loPfcQrblGe7qxpo4w/formResponse";

    const formPayload = new FormData();
    formPayload.append("entry.1198693151", formData.nomeEmpresa);
    formPayload.append("entry.817320318", formData.nomeContato);
    formPayload.append("entry.685216501", formData.email);
    formPayload.append("entry.1230257676", formData.telefone);
    formPayload.append("entry.127694479", formData.tipoPatrocinio);
    formPayload.append("entry.1570149507", formData.mensagem);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body: formPayload,
      });

      toast({
        title: "Proposta enviada com sucesso!",
        description: "Em breve entraremos em contato por e-mail.",
      });

      setFormData({
        nomeEmpresa: "",
        nomeContato: "",
        email: "",
        telefone: "",
        tipoPatrocinio: "",
        mensagem: "",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar.",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="patrocinio" className="py-16 bg-encomp-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
            <span className="text-encomp-green">&lt;</span>
            Seja um Patrocinador
            <span className="text-encomp-green">/&gt;</span>
          </h2>
          <div className="flex items-center justify-center mb-6">
            <Award className="mr-2 text-encomp-green" size={32} />
            <p className="text-xl text-gray-300">
              Apoie o maior evento de computação do Sul de Minas
            </p>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tenha sua marca associada ao ENCOMP 2025 e alcance centenas de estudantes, profissionais e empresas da
            área de tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* ---- Esquerda ---- */}
          <div className="space-y-6">
            <Card className="bg-encomp-darkGray border border-encomp-green/20">
              <CardHeader>
                <CardTitle className="text-encomp-green font-orbitron">Formas de Patrocínio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-encomp-green/30 rounded-lg">
                  <h4 className="font-bold text-encomp-green mb-2">🏪 Produtos e Serviços</h4>
                  <p className="text-sm text-gray-400">
                    Fornecimento de produtos ou serviços próprios da sua empresa.
                  </p>
                </div>
                <div className="p-4 border border-encomp-green/30 rounded-lg">
                  <h4 className="font-bold text-encomp-green mb-2">💰 Pagamento Direto</h4>
                  <p className="text-sm text-gray-400">
                    Patrocínio financeiro para produtos/serviços específicos (ex: R$ 300 para 100 lanches).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-encomp-darkGray border border-encomp-green/20">
              <CardHeader>
                <CardTitle className="text-encomp-green font-orbitron">Cotas de Patrocínio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-yellow-500/30 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Trophy className="mr-2 text-yellow-500" size={20} />
                    <h4 className="font-bold text-yellow-500">Ouro</h4>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Logotipo em destaque (maior tamanho) nos materiais.</li>
                    <li>• Postagens personalizadas nas redes sociais.</li>
                    <li>• Espaço para estande.</li>
                    <li>• Direito a apresentação institucional.</li>
                    <li>• Entrevista em vídeo.</li>
                    <li>• Agradecimento especial no encerramento.</li>
                    <li>• Certificado de Patrocinador Master.</li>
                  </ul>
                </div>

                <div className="p-4 border border-gray-400/30 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Star className="mr-2 text-gray-300" size={20} />
                    <h4 className="font-bold text-gray-300">Prata</h4>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Logotipo em tamanho médio nos materiais.</li>
                    <li>• Postagens conjuntas com outros patrocinadores.</li>
                    <li>• Agradecimento público durante o evento.</li>
                    <li>• Certificado de Patrocinador Prata.</li>
                  </ul>
                </div>

                <div className="p-4 border border-amber-700/30 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Circle className="mr-2 text-amber-700" size={20} />
                    <h4 className="font-bold text-amber-700">Bronze</h4>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Logotipo em tamanho menor nos materiais.</li>
                    <li>• Citação em postagens conjuntas.</li>
                    <li>• Agradecimento nas redes sociais.</li>
                    <li>• Certificado de Patrocinador Bronze.</li>
                  </ul>
                </div>

                <div className="p-4 border border-green-600/30 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Coffee className="mr-2 text-green-600" size={20} />
                    <h4 className="font-bold text-green-600">Apoio</h4>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Tudo oferecido na cota correspondente com o valor.</li>
                    <li>• Agradecimento nas palestras e coffee break.</li>
                    <li>• Banner visível durante as palestras.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ---- Direita ---- */}
          <Card className="bg-encomp-darkGray border border-encomp-green/20">
            <CardHeader>
              <CardTitle className="text-encomp-green font-orbitron">Formulário de Interesse</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label className="text-encomp-green">Nome da Empresa</Label>
                  <Input
                    name="nomeEmpresa"
                    value={formData.nomeEmpresa}
                    onChange={handleChange}
                    required
                    placeholder="Digite o nome da sua empresa"
                    className="bg-encomp-dark border-encomp-green/20"
                  />
                </div>

                <div>
                  <Label className="text-encomp-green">Nome do Contato</Label>
                  <Input
                    name="nomeContato"
                    value={formData.nomeContato}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                    className="bg-encomp-dark border-encomp-green/20"
                  />
                </div>

                <div>
                  <Label className="text-encomp-green">E-mail</Label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="contato@empresa.com"
                    className="bg-encomp-dark border-encomp-green/20"
                  />
                </div>

                <div>
                  <Label className="text-encomp-green">Telefone</Label>
                  <Input
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    placeholder="(XX) XXXXX-XXXX"
                    className="bg-encomp-dark border-encomp-green/20"
                  />
                </div>

                <div>
                  <Label className="text-encomp-green">Interesse em Patrocínio</Label>
                  <select
                    name="tipoPatrocinio"
                    value={formData.tipoPatrocinio}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-md border border-encomp-green/20 bg-encomp-dark px-3 py-2"
                  >
                    <option value="">Selecione uma cota</option>
                    <option value="Ouro">Ouro</option>
                    <option value="Prata">Prata</option>
                    <option value="Bronze">Bronze</option>
                    <option value="Apoio">Apoio (Coffee Break)</option>
                    <option value="Produtos">Produtos/Serviços</option>
                    <option value="Personalizado">Personalizado</option>
                  </select>
                </div>

                <div>
                  <Label className="text-encomp-green">Mensagem (opcional)</Label>
                  <Textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Conte-nos mais sobre seu interesse..."
                    className="bg-encomp-dark border-encomp-green/20"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-encomp-green hover:bg-encomp-light-green text-black font-bold py-2 px-4 rounded-md transition-all flex items-center justify-center gap-2"
                >
                  <SendIcon size={18} />
                  Enviar Proposta
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FormPatrocinio;
