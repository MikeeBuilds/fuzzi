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
        <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black">
            <span className="flex items-center bg-muted px-4 rounded-full">
                <Search/>
                <Input
                  placeholder="Quick Search"
                  className="border-none bg-transparent"
                />
            </span>
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <Headphones/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Contact Support</p>
                  </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}