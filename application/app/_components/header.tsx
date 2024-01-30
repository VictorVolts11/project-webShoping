import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 items-center justify-between flex flex-row">
                <Image src='/logo.png' alt="web-shoping" height={18} width={120} />
                <Button variant="outline" size='icon' className="w-8 h-8">
                    <MenuIcon size={16} />
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;