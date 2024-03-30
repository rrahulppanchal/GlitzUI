"use client"
import { Laptop, Moon, Sun, SunMoon } from "lucide-react"
import { DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "../ui/dropdown-menu"
import { useTheme } from "next-themes"

const Appearance = () =>{
    const { setTheme } = useTheme()
    return<><DropdownMenuSub>
    <DropdownMenuSubTrigger>
        <SunMoon className="mr-2 h-4 w-4" />
        <span>Appearance</span>
    </DropdownMenuSubTrigger>
    <DropdownMenuPortal>
        <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
            </DropdownMenuItem>
        </DropdownMenuSubContent>
    </DropdownMenuPortal>
</DropdownMenuSub></>
}

export default Appearance