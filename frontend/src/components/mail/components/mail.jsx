"use client";
import * as React from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";

import { AccountSwitcher } from "./account-switcher";
import { MailDisplay } from "./mail-display.jsx";
import { MailList } from "./mail-list";

import { useMail } from "../use-mail.js";
import { cn } from "../../../../lib/utils.js";
import { Separator } from "../../../../components/ui/separator";
import { Input } from "../../../../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { TooltipProvider } from "../../../../components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../../../components/ui/resizable";
import { atom, useAtom } from "jotai";



import { comments, Instagram, Twitter, LinkedIn } from "../data";
import { CommentList } from "./comment-list";
import { useInsta } from "../useInsta";

export function Mail({
  accounts,
  mails,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  const [selectedAccount, setSelectedAccount] = React.useState(accounts[0].email);

  const [platform, setPlatform] = React.useState(LinkedIn);
  const [selectedMailId, setSelectedMailId] = React.useState(LinkedIn[0].author_id);

  React.useEffect(() => {
    if(selectedAccount == 'LinkedIn'){
      setPlatform(LinkedIn)
    }
    else if(selectedAccount == 'Twitter'){
      setPlatform(Twitter)
      setSelectedMailId(Twitter[0].author_id)
    }
    else{
      setPlatform(Instagram)
      setSelectedMailId(Instagram[0].author_id)
    }
  }, [selectedAccount])
  
  

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={(collapsed) => {
            setIsCollapsed(collapsed);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(collapsed)}`;
          }}
          className={cn(
            isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
        >
          <div
            className={cn(
              "flex h-[52px] items-center justify-center",
              isCollapsed ? "h-[52px]" : "px-2",
            )}
          >
            <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount}/>
          </div>
          <Separator />
          
          <Separator />
          
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold dark:text-zinc-200">Analysis</h1>
              <TabsList className="ml-auto">
                <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">
                  All 
                </TabsTrigger>
                {/* <TabsTrigger value="unread" className="text-zinc-600 dark:text-zinc-200">
                  Unread
                </TabsTrigger> */}
              </TabsList>
            </div>
            <Separator />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8 dark:text-zinc-200" />
                </div>
              </form>
            </div>
            <TabsContent value="all" className="m-0">
              <MailList items={platform} onMailSelect={setSelectedMailId}/>
            </TabsContent>
            {/* <TabsContent value="unread" className="m-0 dark:text-zinc-200">
              <CommentList items={comments} />
            </TabsContent> */}
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          <MailDisplay mail={platform.find((item) => item.author_id === selectedMailId) || null} />
          
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
