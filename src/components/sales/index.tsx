import { CircleDollarSign, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                <CardTitle className="text-ls sm:text-xl text-gray-800">
                    Últimos clientes
                </CardTitle>
                <CircleDollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                    Novos clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/71908230?v=4"/>
                        <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Maryson Silva</p>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}