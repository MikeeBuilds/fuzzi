import { userButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "../global/mode-toggle";
import { Book, Headphones, Search } from "lucide-react";
import Templates from "../icons/cloud_download";
import { Input } from "../ui/input";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip";

type Props = {};

const Infobar = {props: Props} => {
    return (
        <div className="flex flex-row justify-end gap-6 items-center px-4"></div>
    )
}