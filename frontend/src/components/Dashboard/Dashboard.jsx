import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card.jsx";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs.jsx";

import EngagementChart from "./Graph";
import PlatformSwitcher from "./components/platform-switch";
import { TwitterGraph, instagramDashData, twitterDashData } from "./data/data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { InstaGraph } from "./data/data";
import { RecentSales } from "./components/recent-sales.jsx";
import { Button } from "../../../components/ui/button.jsx";
import { Link } from "react-router-dom";
const formatTime = (time) => {
  const [day, hour] = time.split("_");
  return `Day ${day}, Hour ${hour}`;
};

export const metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};
const groups = [
  {
    label: "Accounts",
    teams: [
      {
        label: "Instagram",
        value: "instagram",
      },
      {
        label: "Twitter",
        value: "twitter",
      },
    ],
  },
];
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export default function Dashboard() {
  const [data, setData] = useState(instagramDashData);
  const [graphData, setgraphData] = useState(InstaGraph);

  const [selectedTeam, setSelectedTeam] = useState(groups[0].teams[0]);
  useEffect(() => {
    if (selectedTeam.value === "twitter") {
      console.log(selectedTeam.value);
      setData(twitterDashData);
      setgraphData(TwitterGraph);
    } else if (selectedTeam.value === "instagram") {
      setData(instagramDashData);
      setgraphData(InstaGraph);
    }
  }, [selectedTeam]);

  return (
    <>
      <div className="md:hidden"></div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <PlatformSwitcher
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
            />
            <div className="ml-auto flex items-center space-x-4">
              <Link to={'/'}> <Button>Logout</Button></Link> 
              {/* <UserNav /> */}
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              <a href="https://app.devrev.ai/abhishekk09827/works?quickAccessId=don%3Acore%3Advrv-us-1%3Adevo%2F1l0TrbZFtt%3Avista%2F4&stage=queued%2Cwork_in_progress%2Cawaiting_product_assist%2Cawaiting_development%2Cin_development%2Cawaiting_customer_response&type=ticket&dod=%5B%7B%22doi%22%3A%22TKT-3085%22%2C%22dot%22%3A%22work%22%2C%22swcv%22%3Afalse%7D%5D">
                Dashboard
              </a>
            </h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      User Count
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
                    <div className="text-2xl font-bold">
                      {data.data.usersCount}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +18.6% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Avg Interactions
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
                    <div className="text-2xl font-bold">
                      {data.data.avgInteractions}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Avg Views
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
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {data.data.avgViews}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Avg ER
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
                    <div className="text-2xl font-bold">{data.data.avgER}</div>
                    <p className="text-xs text-muted-foreground"></p>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="col-span-4 mb-5">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2 p-12">
                    <EngagementChart platform={selectedTeam.value} />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Recents
                    </CardTitle>
                    
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Metrics</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      width={1300}
                      height={500}
                      options={{ maintainAspectRatio: false, responsive: true }}
                      data={graphData.data}
                    >
                      <XAxis dataKey="time" tickFormatter={formatTime} />
                      <YAxis />
                      <CartesianGrid stroke="#f5f5f5" />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="interactions"
                        stroke="#8884d8"
                      />
                      <Line type="monotone" dataKey="likes" stroke="#82ca9d" />
                      <Line
                        type="monotone"
                        dataKey="comments"
                        stroke="#ffc658"
                      />
                    </LineChart>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
