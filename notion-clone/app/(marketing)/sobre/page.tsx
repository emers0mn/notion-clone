import { Button } from "@/components/ui/button";
import Link from "next/link";

const Sobre = () => {
    return ( 
        <div>
            <h1>Página sobre</h1>

            <Link href="/"><Button> Voltar para Home</Button></Link>
        </div>
     );
}
 
export default Sobre;