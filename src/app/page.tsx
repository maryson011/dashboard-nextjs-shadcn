import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";
import { Chart } from "@/components/chart";
import { Sales } from "@/components/sales";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-ls sm:text-xl text-gray-600 select-none">
                Total vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Total vendas em 90 dias
            </CardDescription>

          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-ls sm:text-xl text-gray-600 select-none">
                Novos clientes
              </CardTitle>
              <Users className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Novos clientes em 90 dias
            </CardDescription>

          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">243</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-ls sm:text-xl text-gray-600 select-none">
                Pedidos hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Total de pedidos hoje
            </CardDescription>

          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">56</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-ls sm:text-xl text-gray-600 select-none">
                Total pedidos
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Total de pedidos em 30 dias
            </CardDescription>

          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">564</p>
          </CardContent>
        </Card>

      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <Chart />
        <Sales />
      </section>
    </main>
  );
}
