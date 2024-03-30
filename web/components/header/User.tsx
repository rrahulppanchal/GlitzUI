import { CircleUser, LogOut } from "lucide-react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import Appearance from "./Appearance"

const User = () =>{
    return <><DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span></DropdownMenuItem>
                <Appearance />
             <span className="p-2 text-xs text-amber-600 italic">Premium Membership Enabled</span>
        </DropdownMenuGroup>
    </DropdownMenuContent>
</DropdownMenu></>
}

export default User