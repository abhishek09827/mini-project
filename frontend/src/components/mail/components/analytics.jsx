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
import axios from "axios";


import { InstaGraph, InstaRetrospective, Instagram } from "../../../data/data.jsx";
import { CommentList } from "./comment-list";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "../../../../components/ui/card.jsx";
  import { Overview } from "../../Dashboard/components/overview.jsx";
  import { RecentSales } from "../../Dashboard/components/recent-sales.jsx";
  import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const idData = async() => {
    const options = {
        method: 'GET',
        url: 'https://instagram-statistics-api.p.rapidapi.com/community',
        params: {
          url: 'https://www.instagram.com/openai'
        },
        headers: {
          'X-RapidAPI-Key': 'c9cf11c221msh7ba92db113f7b27p125495jsnd35a5d990324',
          'X-RapidAPI-Host': 'instagram-statistics-api.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}
export function Analysis({
  accounts,
  mails,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}) {
   
    
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  const [selectedAccount, setSelectedAccount] = React.useState(accounts[0].email);
  const [platform, setPlatform] = React.useState({});
  React.useEffect(() => {
    if(selectedAccount == 'LinkedIn'){
    //   setPlatform(LinkedIn)
    }
    else if(selectedAccount == 'Twitter'){
    //   setPlatform(Twitter)
    }
    else{
      setPlatform(Instagram)
    }
  }, [selectedAccount])
  const data = Instagram;
  const dataProfile = InstaRetrospective
  const currentSeries = dataProfile.data.series.current;
  const dates = currentSeries.map(entry => entry.date);
  const engagementRates = currentSeries.map(entry => entry.er);

  // Chart data
  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Engagement Rate',
        data: engagementRates,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1
      }
    ]
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  const formatTime = (time) => {
    const [day, hour] = time.split('_');
    return `Day ${day}, Hour ${hour}`;
  };
  

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
              
            </TabsContent>
            {/* <TabsContent value="unread" className="m-0 dark:text-zinc-200">
              <CommentList items={comments} />
            </TabsContent> */}
          </Tabs>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                <a href="https://app.devrev.ai/abhishekk09827/works?quickAccessId=don%3Acore%3Advrv-us-1%3Adevo%2F1l0TrbZFtt%3Avista%2F4&stage=queued%2Cwork_in_progress%2Cawaiting_product_assist%2Cawaiting_development%2Cin_development%2Cawaiting_customer_response&type=ticket&dod=%5B%7B%22doi%22%3A%22TKT-3085%22%2C%22dot%22%3A%22work%22%2C%22swcv%22%3Afalse%7D%5D">Analytics</a>
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Users Count
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{data.data['usersCount']}</div>
                    <p className="text-xs text-muted-foreground">
                      
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    RatingIndex
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{data.data['ratingIndex']}</div>
                    <p className="text-xs text-muted-foreground">
                      
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">AvgLikes</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{data.data['avgLikes']}</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    AvgComments
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{data.data['avgComments']}</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    HashTags
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{data.data.hashTags[0].name}</div>
                    <p className="text-xs text-muted-foreground">
                      {data.data.hashTags[0].grade}
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle></CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                  <LineChart width={800} height={400} data={currentSeries}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="er" stroke="#8884d8" />
      </LineChart>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Metrics</CardTitle>
                    <CardDescription>
                      
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <LineChart width={800} height={400} data={InstaGraph.data}>
      <XAxis dataKey="time" tickFormatter={formatTime} />
      <YAxis />
      <CartesianGrid stroke="#f5f5f5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="interactions" stroke="#8884d8" />
      <Line type="monotone" dataKey="likes" stroke="#82ca9d" />
      <Line type="monotone" dataKey="comments" stroke="#ffc658" />
    </LineChart>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
