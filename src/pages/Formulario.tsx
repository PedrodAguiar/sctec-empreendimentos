import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEmpreendimentos } from "../hook/useEmpreendimentos";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import Navbar from "../components/Navbar";
import { Building2, User, MapPin, Tag, Mail, CircleDot } from "lucide-react";

const schema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  responsavel: z.string().min(1, "Responsável obrigatório"),
  municipio: z.string().min(1, "Município obrigatório"),
  segmento: z.enum([
    "Tecnologia",
    "Comércio",
    "Indústria",
    "Serviços",
    "Agronegócio",
  ]),
  contato: z.string().min(1, "Contato obrigatório"),
  status: z.enum(["ativo", "inativo"]),
});

type FormData = z.infer<typeof schema>;

export default function Formulario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { empreendimentos, adicionar, editar } = useEmpreendimentos();
  const isEdicao = !!id;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { status: "ativo", segmento: "Tecnologia" },
  });

  useEffect(() => {
    if (isEdicao) {
      const emp = empreendimentos.find((e) => e.id === id);
      if (emp) {
        setValue("nome", emp.nome);
        setValue("responsavel", emp.responsavel);
        setValue("municipio", emp.municipio);
        setValue("segmento", emp.segmento);
        setValue("contato", emp.contato);
        setValue("status", emp.status);
      }
    }
  }, [id, isEdicao, empreendimentos, setValue]);

  function onSubmit(dados: FormData) {
    if (isEdicao) editar(id, dados);
    else adicionar(dados);
    navigate("/");
  }

  const inputClass =
    "border-0 border-b rounded-none focus-visible:ring-0 pl-8 pb-2";
  const inputStyle = {
    backgroundColor: "transparent",
    borderBottomColor: "#00684A",
    color: "#E8EDEB",
  };
  const iconStyle = "absolute left-0 top-2.5 w-4 h-4 opacity-50";
  const iconColor = { color: "#00ED64" };

  return (
    <div className="min-h-screen" style={{ background: "transparent" }}>
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <div
              className="w-1 h-6 rounded-full"
              style={{ backgroundColor: "#00ED64" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#00ED64" }}
            >
              {isEdicao ? "Edição" : "Cadastro"}
            </span>
          </div>
          <h2 className="text-4xl font-bold" style={{ color: "#E8EDEB" }}>
            {isEdicao ? "Editar" : "Novo"}{" "}
            <span style={{ color: "#00ED64" }}>Empreendimento</span>
          </h2>
          <p
            className="mt-2 text-sm"
            style={{ color: "#E8EDEB", opacity: 0.5 }}
          >
            {isEdicao
              ? "Atualize as informações do empreendimento abaixo."
              : "Preencha os dados para cadastrar um novo empreendimento catarinense."}
          </p>
        </div>

        {/* Form Card */}
        <div
          className="rounded-2xl border p-8"
          style={{
            backgroundColor: "#0D253599",
            borderColor: "#00684A33",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Seção 1 - Identificação */}
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "#00ED64" }}
          >
            Identificação
          </p>

          <div className="space-y-6 mb-8">
            <div className="space-y-1">
              <Label style={{ color: "#E8EDEB", opacity: 0.8 }}>
                Nome do Empreendimento
              </Label>
              <div className="relative">
                <Building2 className={iconStyle} style={iconColor} />
                <Input
                  {...register("nome")}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="Ex: Tech Solutions SC"
                />
              </div>
              {errors.nome && (
                <p className="text-xs pl-8" style={{ color: "#00ED64" }}>
                  ⚠ {errors.nome.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <Label style={{ color: "#E8EDEB", opacity: 0.8 }}>
                Responsável
              </Label>
              <div className="relative">
                <User className={iconStyle} style={iconColor} />
                <Input
                  {...register("responsavel")}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="Nome completo do responsável"
                />
              </div>
              {errors.responsavel && (
                <p className="text-xs pl-8" style={{ color: "#00ED64" }}>
                  ⚠ {errors.responsavel.message}
                </p>
              )}
            </div>
          </div>

          {/* Seção 2 - Localização e Categoria */}
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "#00ED64" }}
          >
            Localização & Categoria
          </p>

          <div className="space-y-6 mb-8">
            <div className="space-y-1">
              <Label style={{ color: "#E8EDEB", opacity: 0.8 }}>
                Município
              </Label>
              <div className="relative">
                <MapPin className={iconStyle} style={iconColor} />
                <Input
                  {...register("municipio")}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="Ex: Florianópolis"
                />
              </div>
              {errors.municipio && (
                <p className="text-xs pl-8" style={{ color: "#00ED64" }}>
                  ⚠ {errors.municipio.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <Label style={{ color: "#E8EDEB", opacity: 0.8 }}>
                  Segmento
                </Label>
                <Select
                  onValueChange={(v) =>
                    setValue("segmento", v as FormData["segmento"])
                  }
                  defaultValue="Tecnologia"
                >
                  <SelectTrigger
                    className="w-full border rounded-lg gap-2"
                    style={{
                      backgroundColor: "#001E2B",
                      borderColor: "#00684A",
                      color: "#E8EDEB",
                      paddingLeft: "12px",
                    }}
                  >
                    <Tag
                      className="w-4 h-4 shrink-0"
                      style={{ color: "#00ED64" }}
                    />
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    side="bottom"
                    sideOffset={4}
                    className="w-[--radix-select-trigger-width]"
                    style={{
                      backgroundColor: "#0D2535",
                      borderColor: "#00684A",
                    }}
                  >
                    {[
                      "Tecnologia",
                      "Comércio",
                      "Indústria",
                      "Serviços",
                      "Agronegócio",
                    ].map((s) => (
                      <SelectItem
                        key={s}
                        value={s}
                        style={{ color: "#E8EDEB" }}
                      >
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label style={{ color: "#E8EDEB", opacity: 0.8 }}>Status</Label>
                <Select
                  onValueChange={(v) =>
                    setValue("status", v as FormData["status"])
                  }
                  defaultValue="ativo"
                >
                  <SelectTrigger
                    className="w-full border rounded-lg gap-2"
                    style={{
                      backgroundColor: "#001E2B",
                      borderColor: "#00684A",
                      color: "#E8EDEB",
                      paddingLeft: "12px",
                    }}
                  >
                    <CircleDot
                      className="w-4 h-4 shrink-0"
                      style={{ color: "#00ED64" }}
                    />
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    side="bottom"
                    sideOffset={4}
                    className="w-[--radix-select-trigger-width]"
                    style={{
                      backgroundColor: "#0D2535",
                      borderColor: "#00684A",
                    }}
                  >
                    <SelectItem value="ativo" style={{ color: "#00ED64" }}>
                      Ativo
                    </SelectItem>
                    <SelectItem
                      value="inativo"
                      style={{ color: "#E8EDEB", opacity: 0.6 }}
                    >
                      Inativo
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Seção 3 - Contato */}
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "#00ED64" }}
          >
            Contato
          </p>

          <div className="space-y-6 mb-10">
            <div className="space-y-1">
              <Label style={{ color: "#E8EDEB", opacity: 0.8 }}>
                E-mail ou Meio de Contato
              </Label>
              <div className="relative">
                <Mail className={iconStyle} style={iconColor} />
                <Input
                  {...register("contato")}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="email@exemplo.com ou (48) 99999-9999"
                />
              </div>
              {errors.contato && (
                <p className="text-xs pl-8" style={{ color: "#00ED64" }}>
                  ⚠ {errors.contato.message}
                </p>
              )}
            </div>
          </div>

          {/* Botões dentro do card */}
          <div className="flex flex-col gap-3">
            <Button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="w-full h-12 font-semibold text-base rounded-lg"
              style={{ backgroundColor: "#00ED64", color: "#001E2B" }}
            >
              {isEdicao ? "Salvar Alterações" : "Cadastrar Empreendimento"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 rounded-lg"
              style={{
                borderColor: "#00684A",
                color: "#E8EDEB",
                backgroundColor: "transparent",
              }}
              onClick={() => navigate("/")}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
